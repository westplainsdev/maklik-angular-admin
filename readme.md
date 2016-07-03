# Maklik Angular Admin 
[![GitHub version](https://badge.fury.io/gh/thinusn%2Fmaklik-angular-admin.svg)](https://badge.fury.io/gh/thinusn%2Fmaklik-angular-admin) [![Dependency Status](https://david-dm.org/thinusn/maklikAngularAdmin.svg?style=flat-square)](https://david-dm.org/thinusn/maklik-angular-admin) 
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)]()

# What is this ?
Quickly and easily create a bloat free AngularJS admin interfaces containing only what you need. Tis means that you can easily setup a powerful frontend for your application and easily link them to a Restfull API like [LoopBack](http://loopback.io).

This project was inspired by many of the admin interface out there and aims to build something similar but easier to use out of the box and maintain. maklikAngularAdmin was created to be a 'bloat-free' template to be extended and enhanced as needed.

#Built with
1. [FountainJS Yeoman generator](http://fountainjs.io/) for application scaffolding
2. [AdminLTE](https://github.com/almasaeed2010/AdminLTE), [bootstrap-admin-ui](https://github.com/beeman/bootstrap-admin-ui) for scss and [RDash](https://github.com/rdash/rdash-angular) for theme components

# Features
1. [AngularJS](https://github.com/angular/angular.js)
2. [Webpack](https://webpack.github.io/)
3. [NPM](https://www.npmjs.com) package manager
4. [Gulp](http://gulpjs.com/) build system
5. [Bootstrap v3](https://angular-ui.github.io/bootstrap/) based
6. [SASS (CSS)](https://github.com/sass/node-sass/)
7. Minification and Uglification of client code for production builds
8. JavaScript (with no preprocessors)

# Installation
## I Know what im doing
Git clone and npm install
```
git clone https://github.com/thinusn/maklik-angular-admin.git && npm install
```
## Im new to this
Install [NodeJs and NPM](https://nodejs.org/), verify that it has been installed correctly by issuing the following commands in a terminal
```
node -v && npm -v
```
Install gulp globally
```
npm install -g gulp
```
Git clone and npm install the Maklik Angular Admin package
```
git clone https://github.com/thinusn/maklik-angular-admin.git && npm install
```
## Dependencies
To install dependencies
```
npm install
```
To update dependencies
```
npm update
```
# Run
## Development (serve via browserSync and nodemon)
During development you want to serve via node out of the `.tmp` and `src` folders.
To do this run:
```
npm run serve
```
## Release
For a release version you want to first build the client application and then serve via node out of the `dist` folder.
To build:
```
npm run build
```
To run:
```
npm run serve:dist
```

# Notes
- 2016-07-03: Most of the basic app scaffolding is now complete and the core of the project working.

There is still much to do ....

