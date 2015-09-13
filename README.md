#Cordelia

[![Build Status](https://travis-ci.org/vjwilson/cordelia.svg?branch=master)](https://travis-ci.org/vjwilson/cordelia)

A prototype project for experimenting with Angular, build processes, and front-end testing

##Getting Started

Copy the repository and install the dependencies.

    git clone https://github.com/vjwilson/cordelia.git
    cd cordelia
    npm install
    bower install
    
To preview the app, build the app and start the server task:

    gulp
    
Then, vist [http://localhost:9999](http://localhost:9999) in a browser.

##Local development

To experiment with the app yourself, be sure to [fork this project](https://guides.github.com/activities/forking/) in GitHub first, and then clone your fork.

The source files are in the `app/` folder. Make changes to the files in that folder.

As part of the default Gulp task, a watch and a livereload task run, so you can see changes you make to the source files instantly.

##Deploying the app

To deploy a production version of the app to a remote server, you can build the app and then copy the minified version of the app in the `dist/` folder to a server.

(Every time you run `gulp`, a minified version will exist in the `dist/` folder.)
    
You can make a new `dist/` folder, without running the local server, with this command:

    gulp build

The build task also starts a local server on a different port. You can preview the production version by visting [http://localhost:9999](http://localhost:9999) in a browser.

If you want to remove an old build, without creating a new one yet, just run:

    gulp clean

##Credits

To bootstrap this prototype, I followed a tutorial by Michael Herman (@mjhea0), [Kickstarting Angular With Gulp and Browserify, Part 1 - Gulp and Bower](http://mherman.org/blog/2014/08/14/kickstarting-angular-with-gulp/#.VexAytNVhBc).

I swapped out Michael's use of _ngRoute_ with [AngularUI Router](https://github.com/angular-ui/ui-router).

I also changed the dependency injection method to the one described by Brian Angelo in [Quick Guide to Angular Best Practices](http://www.cardinalsolutions.com/blog/2015/06/quick-guide-to-angular-best-practices).
