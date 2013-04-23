module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine : {          
            src : 'Melchior/JS/**/*.js',
            options : {
                specs: 'spec/**/*-spec.js',
                helpers: 'spec/**/-helper.js'
            }
        },
        shell : {
            build : {
                command : "uhc -tjs userdefined.hs"
            }
        },
        concat: {
            options: {
                separator:';'
            },
            dist: {
                src: ["Melchior/JS/utils.js",
                "Melchior/JS/Selectors.js",
                "/usr/local/lib//uhc-1.1.3/lib/js/libEH-RTS.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Base.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_BoxArray.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Char.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Enum.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Float.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_MutVar.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Read.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_ST.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_STRef.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Show.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_StackTrace.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Types.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Ptr.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_ByteArray.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_IOBase.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_OldException.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_OldIO.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Run.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/Generics/UHC_Generics_Tuple.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Generics.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Bounded.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Eq.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Ord.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Ix.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/UHC/UHC_Array.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/Data/Data_Maybe.mjs",
                "lib/uhcbase-1.1.3/uhc-1.1.3/js/plain/Control/Control_Monad.mjs",
                "lib/base-3.0.0.0/uhc-1.1.3/js/plain/Prelude.mjs",
                "lib/base-3.0.0.0/uhc-1.1.3/js/plain/Control/Control_Category.mjs",
                "Language/UHC/JScript/Language_UHC_JScript_Types.mjs",
                "Language/UHC/JScript/ECMA/Language_UHC_JScript_ECMA_String.mjs",
                "Language/UHC/JScript/Language_UHC_JScript_Primitives.mjs",
                "Language/UHC/JScript/ECMA/Language_UHC_JScript_ECMA_Array.mjs",
                "Melchior/Melchior_Control.mjs",
                "Melchior/Melchior_Dom.mjs",
                "Melchior/Data/Melchior_Data_List.mjs",
                "Melchior/Dom/Melchior_Dom_Events.mjs",
                "Melchior/Dom/Melchior_Dom_Selectors.mjs",
                "userdefined.js"],
                dest: 'dist/melchior.js'
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-shell");
    

    grunt.registerTask('default', ['jasmine', 'shell', 'concat']);
    grunt.registerTask('travis', ['jasmine']);
}
