# Github Search

Simple Angular 2 app that searches Github user profiles and repositories. Goes along with video tutorial at https://www.youtube.com/watch?v=u83MLQ1VsKI

### Version
1.1 - Uses Angular 2.0.0 The original version that uses RC4 is in the "rc4_old" folder, it must be removed if you want to run the app with "npm run" after installing the packages with "npm install" command.

### Usage


### Installation

This app requires [Node.js](https://nodejs.org/) v4+ to run.

```sh
$ npm install
```

### Usage

This app requires [Node.js](https://nodejs.org/) v4+ to run.

```sh
$ npm start
```


### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.
* `npm run typings` - runs the typings tool.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.
Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)
