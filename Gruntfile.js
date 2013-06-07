module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            basic: {
                src: ['src/intro.js', 'src/main.js', 'src/outro.js'],
                dest: 'dist/<%= pkg.name %>.js'
            },
            old$: {
                src: ['src/intro.js', 'src/main.jquery1.7.js', 'src/outro.js'],
                dest: 'dist/<%= pkg.name %>.jquery1.7.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> (<%= pkg.author %>) v<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) */\n'
            },
            minify: {
                src: 'dist/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            },
            minify_old$: {
                src: 'dist/<%= pkg.name %>.jquery1.7.js',
                dest: 'dist/<%= pkg.name %>.jquery1.7.min.js'
            }
        }
    });

    // Load plugins.
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    //grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('default', [ 'concat', 'uglify']);

};