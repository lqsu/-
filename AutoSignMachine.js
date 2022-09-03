enable_unicom=true 
user=15694867110
password=199971
appid=247b001385de5cc6ce11731ba1b1583580b8159e5a51c4abd601e8fc1f8b2b87acf2234bc8a8487cb751a33da268d93d6c111416b0572de9880fc4ae86370754c30c206b71c709096316550b519b8394





const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers')
/**
 * 命令执行入口
 */
var AutoSignMachine_Run = (argv) => {
  yargs((argv || process.argv).slice(2))
    .commandDir('commands')
    .demand(1)
    .config('config', 'JSON配置文件路径')
    .help()
    .alias('h', 'help')
    .locale('en')
    .showHelpOnFail(true, '使用--help查看有效选项')
    .epilog('copyright 2020 LunnLew')
    .argv;
}
module.exports = {
  run: AutoSignMachine_Run
}
