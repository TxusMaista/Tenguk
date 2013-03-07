module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    meta: {
      file: "tentu",
      banner: '/* <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy/m/d") %>\n' +
              '   <%= pkg.homepage %>\n' +
              '   Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>' +
              ' - Licensed <%= _.pluck(pkg.license, "type").join(", ") %> */'
    },

    resources: {
      js: [
        'data/services.js',
        'data/templates.js',
        'data/events.js'
      ],
      css: [
        'assets/stylesheets/login.css',
        'assets/stylesheets/mediaQuery.css',
        'assets/stylesheets/noticias.css',
        'assets/stylesheets/style.css'
      ]
    },


    lint: {
      files: ['grunt.js', 'data/*.js']
    },

    concat: {
      js: {
        src: ['<banner>',
              'assets/data/templates.js',
              'assets/data/services.js',
              'assets/data/events.js'
        ],
        dest: 'src/tentu/<%=meta.file%>.js'
      },
      css: {
        src: ['<banner>',
              'assets/stylesheets/style.css',
              'assets/stylesheets/noticias.css',
              'assets/stylesheets/login.css',
              'assets/stylesheets/mediaQuery.css'
        ],
        dest: 'src/tentu/<%=meta.file%>.css'
      }
    },

    copy: {
      main: {
        files: [
          {src: ['index.html'], dest: 'src/'},
          {expand: true, cwd: 'assets/images/', src: ['*'], dest: 'src/images'} // makes all src relative to cwd
        ]
      }
    },

    jsdoc : {
        dist : {
            src: ['src/tentu/tentu.js'],
            options: {
                destination: 'doc'
            }
        }
    },

    min: {
      js: {
        src: 'src/tentu/<%=meta.file%>.js',
        dest: 'src/tentu/<%=meta.file%>.min.js'
      }
    },

    uglify: {
      my_target: {

        files: {
          'src/tentu/<%=meta.file%>.min.js': ['src/tentu/<%=meta.file%>.js']
        }
      }
    },

    cssmin: {
      css:{
        src: 'src/tentu/<%=meta.file%>.css',
        dest: 'src/tentu/<%=meta.file%>.min.css'
      }
    },

    watch: {
      files: ['<config:resources.js>', '<config:resources.css>', 'assets/data/*.js'],
      tasks: 'concat min'
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-css');

  // Default task.
  grunt.registerTask('default', ['copy', 'concat', 'jsdoc', 'cssmin', 'uglify']);

};