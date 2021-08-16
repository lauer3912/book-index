//!/usr/bin/deno

/**
 * 第三方node_modeule的依赖可以从esm.sh网站上获取，但并不能保证可以正常运行
 */

import {
  walkArray,
  getGitProjects,
  gitSync,
  logger,
  path,
  Deno
} from "./utils.ts";

async function main() {
  logger.info("start ...");
  // 快速遍历指定目录，查找.git目录
  const gitRepos = await getGitProjects(path.resolve(Deno.cwd(), '../'));
  console.log(gitRepos);

  // TODO: 判断每个git仓库的状态，根据状态自动添加及提交文件, 然后同步远程git
  for await (const repo of gitRepos) {
    await gitSync(repo);
  }
}

// 启动
// deno run -A --unstable
main();
