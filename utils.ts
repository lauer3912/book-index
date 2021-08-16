import {
  walk, WalkEntry, WalkOptions, walkSync
} from "https://deno.land/std/fs/mod.ts";

import * as log from "https://deno.land/std/log/mod.ts";
export * as path from "https://deno.land/std/path/mod.ts";

export const { Deno } = globalThis as any;

//#region logger
await log.setup({
  //define handlers
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: "{datetime} {levelName} {msg}"
    }),
    file: new log.handlers.RotatingFileHandler('INFO', {
      filename: './a.log',
      maxBytes: 15,
      maxBackupCount: 5,
      formatter: rec => JSON.stringify({ region: rec.loggerName, ts: rec.datetime, level: rec.levelName, data: rec.msg })
    })
  },
  //assign handlers to loggers  
  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console"],
    },
    client: {
      level: "INFO",
      handlers: ["file"]
    }
  },
});
export const logger = log.getLogger();
//#endregion

export function normalize({ path }: WalkEntry): string {
  return path.replace(/\\/g, "/");
}

/**
 * 遍历目录及文件
 * @param root
 * @param options
 * @returns {Promise<WalkOptions>}
 */
export async function walkArray(
  root: string,
  options: WalkOptions = {},
): Promise<string[]> {
  const arr: string[] = [];
  for await (const w of walk(root, { ...options })) {
    arr.push(normalize(w));
  }
  arr.sort();
  const arrSync = Array.from(walkSync(root, options), normalize);
  arrSync.sort();
  return arr;
}

/**
 * 获得git工程路径目录列表
 * @param root
 * @returns {Promise<WalkOptions>}
 */
export async function getGitProjects(root: string = Deno.cwd()): Promise<string[]> {
  const arr = await walkArray(root, {});
  const gitRepos = arr
    .filter(item => item.endsWith("/.git"))
    .map(item => item.substring(0, item.length - 4));
  return gitRepos;
}

export async function run(options: Deno.RunOptions): Promise<any[]> {
  const p = Deno.run(options);
  const [status, stdout, stderr] = await Promise.all([
    p.status(),
    p.output(),
    p.stderrOutput()
  ]);
  p.close();

  // ArrayBuffer 转换成字符串
  const str = (data: Uint8Array): string => new TextDecoder().decode(data)

  return [status, str(stdout), str(stderr)];
}

export async function gitStatus(root: string = Deno.cwd()): Promise<any> {
  const p = await run({ cmd: ["git", "status", "-s"], cwd: root, stderr: "piped", stdout: "piped" });
  return p;
}

export async function gitSync(root: string = Deno.cwd()): Promise<boolean> {
  // git stats
  logger.info(`gitSync ${root}`);
  console.log(`${root} is dirty, commit and push ...`);

  const [{ code }, stdout] = await gitStatus(root);
  if (code === 0 && stdout.length > 0) {
    for await (const oneCMD of [
      ["git", "add", "."],
      ["git", "commit", "-m", "auto commit"],
      ["git", "push"]
    ]) {
      logger.info(`exec ${oneCMD.join(" ")}`);
      const [{ code }, stdout, stderr] = await run({
        cmd: oneCMD,
        cwd: root,
        stderr: "piped",
        stdout: "piped"
      });
      if (code !== 0) {
        logger.error(`${root} push failed`);
        logger.error(`${stderr}`);
      }
    }
  }

  return true;
}