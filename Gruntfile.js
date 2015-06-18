module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            dev: {
                files: [{
                    cwd: 'src/',
                    expand: true,
                    src: [ '*.html', '**/*.js' ],
                    dest: '.tmp/'
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
        watch: {
            less: {
                files: 'src/less/**/*.less',
                tasks: [ 'less:dev' ],
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
                    base: '.tmp'
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

    grunt.registerTask('serve', [ 'copy:dev', 'less:dev', 'connect:dev', 'watch' ]);
};
