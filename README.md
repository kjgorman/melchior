###Melchior [![Build Status](https://travis-ci.org/kjgorman/489-uhc.png)](https://travis-ci.org/kjgorman/489-uhc)


![Melchior d'Hondecoeter](http://www.artcyclopedia.org/art/melchior-d-hondecoeter-pelican.jpg)

Melchior, the Haskell based functional reactive programming for making rich, responsive web applications.

###getting it going and all that good stuff

so to run this you basically need to get a copy of the uhc from [here](https://github.com/UU-ComputerScience/uhc)
then if you don't have it already grab [npm](https://npmjs.org/)

so ostensibly you should now be able to `sudo ./install` and it will install all the package dependencies and add
the melchior bin file to /usr/bin, but there's still something slightly wonky with permissions. it should be obvious
what needs to be chown'd or whatever though. after that a straight 'grunt' will compile all the things and concatenate
and minify to `dist/melchior.js` and `dist/melchior.min.js`.