# Generator-Jasmine-Node

A unit test generator for [Yeoman](http://yeoman.io).

## Getting Started

To install generator-jasmine-node from npm, run:

```
$ npm install -g generator-jasmine-node
```

Finally, initiate the generator:

```
$ yo jasmine-node
```

Name your first module, and you're on your way to TDDing dat app.

```
jasmine-node spec/
```

#### Automating the Test Suite

From the root of your project, run:

```
grunt watch
```

Now any updates you make to your spec or module file will run the test suite.

#### Generating Additional Modules & Specs

```
yo jasmine-node:module "moduleName"
```

#### Generating Specs

```
yo jasmine-node:spec "moduleName"
```

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
