###Melchior [![Build Status](https://travis-ci.org/kjgorman/489-uhc.png)](https://travis-ci.org/kjgorman/489-uhc)


![Melchior d'Hondecoeter](http://www.artcyclopedia.org/art/melchior-d-hondecoeter-pelican.jpg)

Melchior, the Haskell based functional reactive programming for making rich, responsive web applications.

###getting it going and all that good stuff

so to run this you basically need to get a copy of the uhc from [here](https://github.com/UU-ComputerScience/uhc)

then if you don't have it already grab [npm](https://npmjs.org/)

then should be pretty straight forward, crank a `npm install` in the project's root directory which will install
the grunt dependencies, then go ahead and actually get a copy of [grunt](http://gruntjs.com/) by running `npm install -g grunt-cli`
(for which you'll probably need sudo; if not available omit the -g flag and muck around with path variables to do a 
local install).

ok so you actually need to compile all the hs into js first so that the tests in the grunt build step will work. I find the 
easiest way to do that is: `find . -name "*hs" -exec uhc -tjs {} \;` which is sort of shit admittedly but nonetheless gets the 
job done. further note to this -- you need to be in the root directory of this project (i.e. where you cloned it too) so it can
follow paths correctly. I included a binary, so you can set `MELCHIOR_HOME_DIR`, and then add `MELCHIOR_HOME_DIR/bin` to
your path to compile at will.

then you should be able to just `grunt` from the root dir, and it will build the `.hs` into javascript, then concat
the files into `dist/melchior.js`.


