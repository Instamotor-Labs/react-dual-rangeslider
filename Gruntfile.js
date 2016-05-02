module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/RangeSlider.js': 'src/RangeSlider.js'
                }
            }
        },
        copy: { dev: { files: [{ expand: true, cwd: 'src/',
                    src: 'rangeslider.css',
                    dest: 'dist/'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['babel', 'copy']);
};

