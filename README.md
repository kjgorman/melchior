###489-uhc [![Build Status](https://travis-ci.org/kjgorman/489-uhc.png)](https://travis-ci.org/kjgorman/489-uhc)


Trying out the utrecht haskell compiler to javascript.

Seems to have more support for useful things, i.e. typeclasses.

ffi is a bit stricter so you need to sort of shim in methods that
perform assignments and stuff but should be fine.

###getting it going and all that good stuff

so to run this you basically need to get a copy of the uhc from [here](https://github.com/UU-ComputerScience/uhc)

then if you don't have it already grab [npm](https://npmjs.org/)

then should be pretty straight forward, crank a `npm install` in the project's root directory which will install
the grunt dependencies, then go ahead and actually get a copy of [grunt](http://gruntjs.com/) by running `npm install -g grunt-cli`
(for which you'll probably need sudo; if not available omit the -g flag and muck around with path variables to do a 
local install).

ok so you actually need to compile all the hs into js first so that the tests in the grunt build step will work. I find the 
easiest way to do that is: `find . -name "*hs" -exec uhc -tjs {} \;` which is sort of shit admittedly but nonetheless gets the 
job done.

then you should be able to just `grunt` from the root dir, and it will build the `.hs` into javascript, then concat
the files into `dist/melchior.js`.


