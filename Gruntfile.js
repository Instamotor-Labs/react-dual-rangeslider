var StringReplacePlugin = require('string-replace-webpack-plugin');
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
                    'dist/entry.js': './entry.js',
                    '__tests__/RangeSlider.js': 'tests/RangeSlider.js'
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
                        { test: /\.css$/, loader: "style-loader!css-loader" },
                        { test: /\.svg$/, loader: "url-loader?limit=2000&name=dist/[hash].[ext]" },
                        { 
                            test: /rangeslider.css$/,
                            loader: StringReplacePlugin.replace({
                                replacements: [
                                    {
                                        pattern: /%thumb-image%/ig,
                                        replacement: function (match, p1, offset, string) {
                                            return 'thumb.svg';
                                        }
                                    }
                                ]
                            })
                        }
                    ]
                },
                plugins: [
                    new StringReplacePlugin()
                ]
            },
            test: {
                entry: "./dist/RangeSlider.js",
                output: {
                    path: __dirname,
                    filename: "bundle-test.js"
                },
                module: {
                    loaders: [
                        { test: /\.css$/, loader: "style-loader!css-loader" },
                        { test: /\.svg$/, loader: "url-loader?limit=2000&name=dist/[hash].[ext]" },
                        { 
                            test: /rangeslider.css$/,
                            loader: StringReplacePlugin.replace({
                                replacements: [
                                    {
                                        pattern: /$thumb-image$/ig,
                                        replacement: function (match, p1, offset, string) {
                                            return 'thumb.svg';
                                        }
                                    }
                                ]
                            })
                        }
                    ]
                },
                plugins: [
                    new StringReplacePlugin()
                ]
            }
        },
        copy: { dev: { files: [
            { expand: true, cwd: 'src/', src: 'rangeslider.css', dest: 'dist/' },
            { expand: true, cwd: 'assets/', src: 'thumb.svg', dest: 'dist/' }
        ]}}
    });
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-atomizer');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', ['atomizer', 'copy', 'babel', 'webpack']);
};

