module.exports = function(grunt) {
    var mozjpeg = require('imagemin-mozjpeg');
    grunt.initConfig({
        uglify: {
            vendor: {
                files: {
                    'app/js/pm_ui_kit.min.js': ['vendor/js/*.js']
                }
            }
        },

        less: {
            pm_ui_kit: {
                options: {
                    paths: ["app/css"]
                },
                files: {
                    "app/css/pm_ui_kit.css": "vendor/less/pm_ui_kit.less"
                }
            },
            pm_icon_fonts: {
                options: {
                    paths: ["app/webfont"]
                },
                files: {
                    "app/webfont/pmiconfonts.css": "vendor/less/pm-icon-fonts/pm_icon_fonts.less"
                }
            },
            templatestyles: {
                options: {
                    paths: ["app/css"]
                },
                files: {
                    "app/css/styles.css": "vendor/less/template/styles.less"
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'app/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'app/css',
                    ext: '.min.css'
                }]
            },
            target2: {
                files: [{
                    expand: true,
                    cwd: 'app/webfont',
                    src: ['*.css', '!*.min.css'],
                    dest: 'app/webfont',
                    ext: '.min.css'
                }]
            }
        },

        resize_crop: {
            image_group: {
                options: {
                    format: "jpg",
                    gravity: "center",
                    width: 900
                },
                files: {
                    'vendor/img/tmp': [
                        'vendor/img/original/*.jpg'
                    ]
                }
            }
        },

        "imagemagick-resize":{
            dev:{
                from:'vendor/img/tmp/',
                to:'vendor/img/resized/',
                files:'*.jpg',
                props:{
                    width:900,

                    srcPath: undefined,
                    srcData: null,
                    srcFormat: null,
                    dstPath: undefined,
                    quality: 0.8,
                    format: 'jpg',
                    progressive: true,
                    /*width: 0,
                    height: 0,*/
                    strip: true,
                    filter: 'Lagrange',
                    sharpening: 0.2,
                    customArgs: []
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'vendor/img/resized/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'app/img/'                  // Destination path prefix
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');//npm install grunt-contrib-uglify --save-dev
    grunt.loadNpmTasks('grunt-contrib-less');//npm install grunt-contrib-less --save-dev
    grunt.loadNpmTasks('grunt-contrib-cssmin');//npm install grunt-contrib-cssmin --save-dev
    grunt.loadNpmTasks('grunt-resize-crop');//npm install grunt-resize-crop --save-dev
    grunt.loadNpmTasks('grunt-imagemagick');//npm install grunt-imagemagick
    grunt.loadNpmTasks('grunt-contrib-imagemin');//npm install grunt-contrib-imagemin --save-dev

    grunt.registerTask('default', ['uglify','less','cssmin']);
    grunt.registerTask('image', ['resize_crop:image_group','imagemagick-resize','imagemin:dynamic']);

};