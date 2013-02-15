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
        dest: 'src/<%=meta.file%>.js'
      },
      css: {
        src: ['<banner>',
              'assets/stylesheets/style.css',
              'assets/stylesheets/noticias.css',
              'assets/stylesheets/login.css',
              'assets/stylesheets/mediaQuery.css'
        ],
        dest: 'src/<%=meta.file%>.css'
      }
    },

    min: {
      js: {
        src: 'src/<%=meta.file%>.js',
        dest: 'src/<%=meta.file%>.min.js'
      }
    },

    cssmin: {
      css:{
        src: 'src/<%=meta.file%>.css',
        dest: 'src/<%=meta.file%>.min.css'
      }
    },

    watch: {
      files: ['<config:resources.js>', '<config:resources.css>', 'assets/data/*.js'],
      tasks: 'concat min'
    }

  });

  grunt.loadNpmTasks('grunt-css');

  // Default task.
  grunt.registerTask('default', 'concat:js concat:css min');

};