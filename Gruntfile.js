/**
 * Created by shaoguoqing on 16/8/22.
 */
module.exports = function (grunt) {

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
        },

        uglify : {

            options : {

                mangle : false

            },

            myJs : {
                files : {
                    'build/a.min.js' : ['src/a.js', 'src/b.js']
                }
            }

        },

        cssmin : {
            options : {
                banner : "//===== common css min header ===="
            },

            target : {
                files : [{
                    expand : true,
                    cwd : 'src/',
                    src : ['c.css', 'd.css'],
                    dest : 'build/',
                    ext : '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 默认任务
    grunt.registerTask('default', ['clean', 'concat']);
}