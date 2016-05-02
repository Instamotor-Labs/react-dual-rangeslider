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
        }
    });
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['babel']);
};

