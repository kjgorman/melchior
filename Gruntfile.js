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
                command : "uhc -tjs example/misc/userdefined.hs && find . -name '*.hs' | grep -v userdefined  | grep -v 'Language' | uhc -tjs"
            },
            buildTests : {
                command : "find . -name 'spec/hs/*hs' -exec uhc -tjs {} \;"
            },
            copyDistToSpec : {
                command : "cp dist/melchior.js spec/hs/melchior-helper.js"
            }
        },
        jshint : {
            all: ["Melchior/JS/**/*.js"],
            options : {
                asi : true,
                expr: true
            }
        }, 
        concat: {
            runDom : {
                options: { separator:';' },
                src: ['spec/hs/runDom.js', 'spec/hs/spec-runDom.js'],
                dest: 'spec/hs/runDom-spec.js'
            },
            getById : {
                options: { separator:';' },
                src: ['spec/hs/getById-setup.js', 'spec/hs/getById.js', 'spec/hs/spec-getById.js'],
                dest: 'spec/hs/getById-spec.js'
            },
            getByClass : {
                options : { separator:';' },
                src: ['spec/hs/getByClass-setup.js', 'spec/hs/getByClass.js', 'spec/hs/spec-getByClass.js'],
                dest: 'spec/hs/getByClass-spec.js'
            },
            getByTagName : {
                options : {separator: ';' },
                src: ['spec/hs/getByTagName-setup.js', 'spec/hs/getByTagName.js', 'spec/hs/spec-getByTagName.js'],
                dest: 'spec/hs/getByTagName-spec.js'
            },
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
                    "Melchior/JS/Function.js",
                    "Melchior/JS/Dom.js",
                    "/usr/local/lib//uhc-1.1.3/lib/js/libEH-RTS.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Base.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_BoxArray.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Char.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Enum.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Float.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_MutVar.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Read.mjs",
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
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/uhcbase-1.1.3/uhc-1.1.3/js/plain/Control/Control_Monad.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/base-3.0.0.0/uhc-1.1.3/js/plain/Prelude.mjs",
                    "/usr/local/lib//uhc-1.1.3/lib/pkg/base-3.0.0.0/uhc-1.1.3/js/plain/Control/Control_Category.mjs",
                    "Language/UHC/JScript/Language_UHC_JScript_Types.mjs",
                    "Language/UHC/JScript/ECMA/Language_UHC_JScript_ECMA_String.mjs",
                    "Language/UHC/JScript/Language_UHC_JScript_Primitives.mjs",
                    "Language/UHC/JScript/ECMA/Language_UHC_JScript_ECMA_Array.mjs",
                    "Melchior/Melchior_Dom.mjs",
                    "Melchior/Data/Melchior_Data_List.mjs",
                    "Melchior/Dom/Melchior_Dom_Events.mjs",
                    "Melchior/Melchior_Control.mjs",
                    "Melchior/Dom/Melchior_Dom_Selectors.mjs",
                    "Melchior/Melchior_Test.mjs"
                ],
                dest: 'dist/melchior.js'
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-shell");
    

    grunt.registerTask('default',
                       ['jshint',
                        'shell:build',
                        'shell:buildTests',
                        'concat',
                        'shell:copyDistToSpec',
                        'jasmine']);
    grunt.registerTask('travis', ['jshint', 'jasmine']);
}
