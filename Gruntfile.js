module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine : {
            src : 'Melchior/JS/**/*.js',
            options : {
                specs: 'spec/**/*-spec.js',
                helpers: 'spec/**/*-helper.js'
            }
        },
        shell : {
            build : {
                command : "uhc -tjs example/assets/hs/index.js && find Melchior -name '*.hs' | uhc -tjs"
            },
            buildTests : {
                command : "find . -name 'spec/hs/*hs' -exec uhc -tjs {} \;"
            },
            copyDistToSpec : {
                command : "cp dist/melchior.js spec/hs/melchior-helper.js"
            },
            copyDistToExample : {
                command : "cp dist/melchior.js example/assets/"
            },
            copyDistToComparison : {
                command : "cp dist/melchior.js comparison/server/resources"
            },
            compile : {
                command : "find . -name '*hs' -exec uhc -tjs {} \;"
            }
        },
        jshint : {
            all: ["Melchior/JS/**/*.js"],
            options : {
                asi : true,
                expr: true,
                newcap : false
            }
        },
        watch : {
            scripts : {
                files: ['Melchior/JS/**/*.js'],
                tasks: ['jshint', 'jasmine', 'shell:build']
            },
        },
        concat: {
            build : {
                options: {
                    separator:';'
                },
                src: [
                    "Melchior/JS/utils.js",
                    "Melchior/JS/Selectors.js",
                    "Melchior/JS/Signals.js",
                    "Melchior/JS/List.js",
                    "Melchior/JS/Test.js",
                    "Melchior/JS/Query.js",
                    "Melchior/JS/Function.js",
                    "Melchior/JS/Socket.js",
                    "Melchior/JS/Dom.js",
                    "Melchior/JS/Events.js",
                    "Melchior/JS/Time.js",
                    "Melchior/JS/Tuple.js",
                    "Melchior/JS/XHR.js",
                    "/usr/local/lib//uhc-1.1.3/lib/js/libEH-RTS.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Base.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_BoxArray.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Char.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Enum.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Float.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_MutVar.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Read.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Real.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_ST.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_STRef.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Show.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_StackTrace.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Types.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Ptr.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_ByteArray.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_IOBase.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_OldException.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_OldIO.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Run.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/Generics/UHC_Generics_Tuple.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Generics.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Bounded.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Eq.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Ord.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Ix.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Array.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/Data/Data_Maybe.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/Data/Data_Char.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/Data/Data_List.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/Control/Control_Monad.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/base-3.0.0.0/uhc-1.1.3/js/plain/Prelude.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/base-3.0.0.0/uhc-1.1.3/js/plain/Control/Control_Category.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/base-3.0.0.0/uhc-1.1.3/js/plain/Control/Monad/Control_Monad_Instances.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/base-3.0.0.0/uhc-1.1.3/js/plain/Data/Data_Function.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/base-3.0.0.0/uhc-1.1.3/js/plain/Control/Monad/Control_Monad_Fix.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/base-3.0.0.0/uhc-1.1.3/js/plain/Control/Control_Arrow.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/base-3.0.0.0/uhc-1.1.3/js/plain/Data/Data_Monoid.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/base-3.0.0.0/uhc-1.1.3/js/plain/Control/Control_Applicative.mjs",
                    "Language/UHC/JScript/Language_UHC_JScript_Types.mjs",
                    "Language/UHC/JScript/ECMA/Language_UHC_JScript_ECMA_String.mjs",
                    "Language/UHC/JScript/Language_UHC_JScript_Primitives.mjs",
                    "Language/UHC/JScript/ECMA/Language_UHC_JScript_ECMA_Array.mjs",
                    "Melchior/Data/Melchior_Data_String.mjs",
                    "Melchior/Dom/Melchior_Dom_Html.mjs",
                    "Melchior/Dom/Melchior_Dom_Events.mjs",
                    "Melchior/Melchior_Dom.mjs",
                    "Melchior/Melchior_Control.mjs",
                    "Melchior/Melchior_Time.mjs",
                    "Melchior/Data/Melchior_Data_List.mjs",
                    "Melchior/Dom/Melchior_Dom_Selectors.mjs",
                    "Melchior/EventSources/Melchior_EventSources_Keyboard.mjs",
                    "Melchior/EventSources/Melchior_EventSources_Mouse.mjs",
                    "Melchior/Remote/Internal/Melchior_Remote_Internal_ParserUtils.mjs",
                    "Melchior/Remote/Internal/Melchior_Remote_Internal_Parser.mjs",
                    "Melchior/Remote/Melchior_Remote_Json.mjs",
                    "Melchior/Remote/Melchior_Remote_XHR.mjs"
                ],
                dest: 'dist/melchior.js'
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-shell");


    grunt.registerTask('default',
                       ['jshint',
                        'shell:build',
                        'shell:buildTests',
                        'concat',
                        'shell:copyDistToSpec',
                        'shell:copyDistToComparison',
                        'jasmine',
                       ]);
    grunt.registerTask('dev',
                       ['jshint',
                        'shell:build',
                        'shell:buildTests',
                        'concat',
                        'shell:copyDistToSpec',
                        'jasmine',
                        'watch'])
    grunt.registerTask('travis', ['jshint', 'jasmine']);
    grunt.registerTask('compile', ['shell:compile']);
    grunt.registerTask('example',
                       ['jshint',
                        'shell:build',
                        'shell:buildTests',
                        'concat',
                        'shell:copyDistToSpec',
                        'shell:copyDistToExample',
                        'shell:copyDistToComparison',
                        'jasmine']);
}
