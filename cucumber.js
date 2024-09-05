export default {
    import: ['features/**/*.js'],
    publishQuiet: false,
    format: ['progress-bar',
        ['html', 'cucumber-report.html'],
        'json:reports/cucumber-report.json',
        'html:reports/report.html',
        'summary',],
    formatOptions: { snippetInterface: 'async-await' },
}
