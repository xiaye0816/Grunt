/**
 * Created by shaoguoqing on 16/8/22.
 */
module.exports = function (grunt) {
    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });
    // 默认任务
    grunt.registerTask('default', ['clean']);
}