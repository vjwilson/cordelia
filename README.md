#Cordelia

A prototype project for experimenting with Angular, build processes, and front-end testing

##Getting Started

Copy the repository and install the dependencies.

    git clone https://github.com/vjwilson/cordelia.git
    cd cordelia
    npm install
    bower install
    
To preview the app, start the server task:

    gulp connect
    
Then, vist [http://localhost:8888](http://localhost:8888) in a browser.

##Local development

To experiment with the app yourself, be sure to fork it first, and then clone your fork.

When you run `gulp connect`, the app is served out of the `app/` folder. Make changes to the files in that folder.

##Deploying the app

To deploy a production version of the app to a remote server, you can build a minified copy of the app in a `dist/` folder, and then copy that folder to a server.

First, remove any old build:

    gulp clean
    
Then, build a new `dist/` folder:

    gulp build

The build task also starts a local server on a different port. You can preview the production version by visting [http://localhost:9999](http://localhost:9999) in a browser.

##Credits

To bootstrap this prototype, I followed a tutorial by Michael Herman (@mjhea0), [Kickstarting Angular With Gulp and Browserify, Part 1 - Gulp and Bower](http://mherman.org/blog/2014/08/14/kickstarting-angular-with-gulp/#.VexAytNVhBc).

I swapped out Michael's use of _ngRoute_ with [AngularUI Router](https://github.com/angular-ui/ui-router).

I also changed the dependency injection method to the one described by Brian Angelo in [Quick Guide to Angular Best Practices](http://www.cardinalsolutions.com/blog/2015/06/quick-guide-to-angular-best-practices).
