module.exports = function(grunt) {
    grunt.initConfig({
        atomizer: {
            dev: {
                options: {
                    configFile: './configs/atomizer.js'
                },
                files: [{
                    src: ['./src/**/*.js'],
                    dest: './dist/atomic.css'
                }]
            }
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/RangeSlider.js': 'src/RangeSlider.js',
                    'dist/entry.js': './entry.js'
                }
            }
        },
        webpack: {
            build: {
                entry: "./dist/entry.js",
                output: {
                    path: __dirname,
                    filename: "bundle.js"
                },
                module: {
                    loaders: [
                        { test: /\.css$/, loader: "style-loader!css-loader" }
                    ]
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
    grunt.loadNpmTasks('grunt-atomizer');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', ['babel', 'webpack', 'copy']);
};

