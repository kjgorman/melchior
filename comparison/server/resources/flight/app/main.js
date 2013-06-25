
require.config({
    baseUrl: './',
    paths: {
        jquery: 'resources/flight/components/jquery/jquery',
        es5shim: 'resources/flight/components/es5-shim/es5-shim',
        es5sham: 'resources/flight/components/es5-shim/es5-sham',
        text: 'resources/flight/components/requirejs/plugins/text'
    },
    map: {
        '*': {
            'flight/component': 'resources/flight/components/flight/lib/component',
            'depot': 'resources/flight/components/depot/depot'
        }
    },
    shim: {
        'components/flight/lib/index': {
            deps: ['jquery', 'es5shim', 'es5sham']
        },
        'app/app': {
            deps: ['components/flight/lib/index']
        }
    }
});

require(["resources/flight/app/app"], function(App) {
    App.initialize();
});