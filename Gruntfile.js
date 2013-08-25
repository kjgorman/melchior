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
                command : "melchior example/assets/hs/index.js && find Melchior -name '*.hs' | uhc -tjs"
            },
            buildTests : {
                command : "find . -name 'spec/hs/*hs' -exec melchior {} \;"
            },
            copyDistToSpec : {
                command : "cp dist/melchior.js spec/hs/melchior-helper.js"
            },
            copyDistToExample : {
                command : "cp dist/melchior.js example/assets/"
            },
            copyDistToComparison : {
                command : "cp dist/melchior.js comparison/fauxter/resources/melchior/"
            },
            compile : {
                command : "find . -name '*hs' -exec melchior {} \;"
            }
        },
        uglify : {
            my_targets: {
                files : { 'dist/melchior.min.js' : ['dist/melchior.js'] }
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
                    "Melchior/JS/Canvas.js",
                    "Melchior/JS/Query.js",
                    "Melchior/JS/Function.js",
                    "Melchior/JS/Html.js",
                    "Melchior/JS/Socket.js",
                    "Melchior/JS/Dom.js",
                    "Melchior/JS/Events.js",
                    "Melchior/JS/Time.js",
                    "Melchior/JS/Tuple.js",
                    "Melchior/JS/XHR.js",
                    "UHC_PATHjs/libEH-RTS.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Base.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_BoxArray.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Char.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Enum.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Float.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_MutVar.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Read.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Real.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_ST.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_STRef.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Show.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_StackTrace.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Types.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Ptr.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_ByteArray.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_IOBase.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_OldException.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_OldIO.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Run.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/Generics/UHC_Generics_Tuple.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Generics.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Bounded.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Eq.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Ord.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Ix.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Array.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/Data/Data_Maybe.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/Data/Data_Char.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/Data/Data_List.mjs",
                    "UHC_PATHpkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/Control/Control_Monad.mjs",
                    "UHC_PATHpkg/base-3.0.0.0/uhc-1.1.3/js/plain/Prelude.mjs",
                    "UHC_PATHpkg/base-3.0.0.0/uhc-1.1.3/js/plain/Control/Control_Category.mjs",
                    "UHC_PATHpkg/base-3.0.0.0/uhc-1.1.3/js/plain/Control/Monad/Control_Monad_Instances.mjs",
                    "UHC_PATHpkg/base-3.0.0.0/uhc-1.1.3/js/plain/Data/Data_Function.mjs",
                    "UHC_PATHpkg/base-3.0.0.0/uhc-1.1.3/js/plain/Control/Monad/Control_Monad_Fix.mjs",
                    "UHC_PATHpkg/base-3.0.0.0/uhc-1.1.3/js/plain/Control/Control_Arrow.mjs",
                    "UHC_PATHpkg/base-3.0.0.0/uhc-1.1.3/js/plain/Data/Data_Monoid.mjs",
                    "UHC_PATHpkg/base-3.0.0.0/uhc-1.1.3/js/plain/Control/Control_Applicative.mjs",
                    "Language/UHC/JScript/Language_UHC_JScript_Types.mjs",
                    "Language/UHC/JScript/ECMA/Language_UHC_JScript_ECMA_String.mjs",
                    "Language/UHC/JScript/Language_UHC_JScript_Primitives.mjs",
                    "Language/UHC/JScript/ECMA/Language_UHC_JScript_ECMA_Array.mjs",
                    "Melchior/Data/Melchior_Data_String.mjs",
                    "Melchior/Dom/Melchior_Dom_Html.mjs",
                    "Melchior/Dom/Melchior_Dom_Events.mjs",
                     "Melchior/Dom/Melchior_Dom_Drawing.mjs",
                    "Melchior/Melchior_Dom.mjs",
                    "Melchior/Melchior_Control.mjs",
                    "Melchior/Melchior_Sink.mjs",
                    "Melchior/Melchior_Time.mjs",
                    "Melchior/Data/Melchior_Data_List.mjs",
                    "Melchior/Dom/Melchior_Dom_Selectors.mjs",
                    "Melchior/Dom/Internal/Melchior_Dom_Internal_Fragments.mjs",
                    "Melchior/EventSources/Melchior_EventSources_Keyboard.mjs",
                    "Melchior/EventSources/Melchior_EventSources_Mouse.mjs",
                    "Melchior/EventSources/Melchior_EventSources_Elements.mjs",
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
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-shell");

    grunt.registerTask('default',
                       ['jshint',
                        'shell:build',
                        'shell:buildTests',
                        'concat',
                        'uglify',
                        'jasmine',
                       ]);
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
