/**
 * Created by shaoguoqing on 16/8/22.
 */
module.exports = function (grunt) {

    console.log("====" + grunt.util.linefeed + "---");

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean:{
            txt : {
                src : ["build/*"]
            }
        },

        copy : {
            main : {
                    expand : true,
                    cwd : "src/",
                    src : ["anc/**"],
                    dest : "build/",
                    options : {
                        process : function (content, srcpath) {
                            console.log(srcpath);
                            return content = "console.log('hello copy task');\n" + content
                        }
                    }
            }
        },

        concat : {
            options : {
                sourceMap:true,
                sourceMapStyle:'link',
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
                separator : "\n"
            },
            dist : {
                src : ['src/a.js', 'src/b.js'],
                dest : "build/built.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 默认任务
    grunt.registerTask('default', ['clean', 'concat']);
}