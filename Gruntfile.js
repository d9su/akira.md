module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            dev: {
                files: [{
                    cwd: 'src/',
                    expand: true,
                    src: [ '*.html', 'js/**/*.js', 'img/**/*', 'fonts/**/*' ],
                    dest: 'dist/'
                }]
            }
        },
        less: {
            dev: {
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'src/less',
                    src: [ '**/*.less' ],
                    dest: '.tmp/css/',
                    ext: '.css'
                }]
            }
        },
        jshint: {
            dev: {
                options: {
                    jshintrc: true,
                    ignores: [ 'src/js/**/zepto.min.js' ]
                },
                src: [ 'src/js/**/*.js' ]
            }
        },
        concat: {
            build: {
                files: [{
                    src: [ '.tmp/css/*.css' ],
                    dest: 'dist/style.css'
                }]
            }
        },
        watch: {
            less: {
                files: 'src/less/**/*.less',
                tasks: [ 'less:dev', 'concat:build' ],
                options: {
                  livereload: true
                }
            },
            js: {
                files: 'src/js/**/*.js',
                tasks: [ 'jshint:dev', 'copy:dev' ],
                options: {
                  livereload: true
                }
            },
            html: {
                files: [ 'src/**/*.html' ],
                tasks: [ 'copy:dev' ],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            dev: {
                options: {
                    port: 9090,
                    base: 'dist'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', [ 'copy:dev', 'less:dev', 'concat:build', 'connect:dev', 'watch' ]);
};
