let gulp = require('gulp');
let rsync = require('gulp-rsync');

gulp.task('deploy', function() {
    return gulp.src('./').pipe(rsync({
        hostname: '4ahel.peball.info',
        username: 'root',
        destination: '/var/www/nodejs/',
        chown: 'root:psacln',
        recursive: true,
        archive: true,
        clean: true,
        chmod: 'Du=rwx,Dgo=rx,Fu=rw,Fgo=r',
        exclude: [
            '.idea',
            '.git',
            'docs',
            'gulpfile.js',
            'node_modules',
            'package-lock.json',
            '*.iml',
            '.gitignore',
            'bower.json',
            'license.txt',
            'contributing.md',
            'composer.json',
            '.DS_Store',
            'application/logs/',
            'readme.rst',
            'readme.md',
            'development/',
            'webpack.config.js'
        ]
    }));
});