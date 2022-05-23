# Node - Das Umfassende Handbuch by Sebastian Springer, 4th. Edition

---

## 1. Basics
## 2. Installation
## 3. A first example
## 4. Node.js modules
## 5. HTTP
## 6. Express
## 7. Template-Engines
## 8. Connecting To Databases
## 9. Authentication and Session Management
## 10. REST-Server
## 11. GraphQL
## 12. Realtime-Web Applications
## 13. Typesafe Applications in Node.js
## 14. Webapplications with Nest
## 15. Node on the command line
## 16. Asynchronous Programming
## 17. RxJS
## 18. Streams
## 19. Working with files
## 20. Socket-Server
## 21. Package Manager
## 22. Quality Assurance
## 23. Testing
## 24. Security Packages
## 25. Scalability and Deployment
## 26. Performance
## 27. Microservices with Node.js
## 28. Deno

---

# 3. A first example

## Debugging

You can start debugging a node application using ```node inspect <file.js>```. 

### Debugger navigation

Here is a list of commands that you can use on the debugger:

|Command|Meaning|
|-------|-------|
|```c```|Continue|
|```n```|Step next|
|```s```|Step In|
|```o```|Step Out|
|```pause```|Pause|

### Information inside the debugger

You can use ```repl``` to open a repl inside the debugger that can use the current state of the application. Use ```strg+c``` to get back to the debugger after you're done with the repl.

You can also use ```list(x)``` to get to the ```x``` line of the source code.

With ```backtrace``` (or the shortcut ```bt```) you can get the backtrace of the subroutines that you've been inside of.

With ```watch(x)``` you can put a watch on a variable and see everything when something changes to it. Use ```unwatch(x)``` to stop watching the variable and ```watchers``` to see all the watchers.

### Breakpoints

You can set breakpoints directly from the debugger using ```setBreakpoint(x)``` (or the shortcut ```sb(x)```) to set a break point at line ```x``` in the source code.

Use ```clearBreakpoint(x)``` (or the shortcut ```cb(x)```) to clear a breakpoint at a certain line in the soure code.

You can also set breakpoints directly inside the source code using the ```debugger``` keyword:

```JavaScript
console.log("hello world 1");
debugger;
console.log("hello world 2");
```

The disadvantage is that you have to change the source code and after you're done debugging you have to remember to delete the ```debugger``` keyword from the source code.

### Debugging using Chrome Developer Tools

In order to debug using the Chrome Developer Tools you have to start the application using ```node --inspect <file.js>``` ( not ```inspect```, use the double-dashed version ```node --inspect```).

Afterwards you have to go to ```chrome://inspect``` and click in the ```INSPECT```-Link to add the port of your application.

## Nodemon

Whenever you are making a change to your node application, you always have to restart the server. 

You can automate this using ```nodemon <file.js>``` that can be installed with ```npm install -g nodemon```. Using this, whenver you change something to the source code, you won't have to restart the server to see them

# 4. Node.js modules

## Modular Structure

This is the structure of a node application:

![](ScreenshotsForNotes/Chapter4/node_modular_structure.PNG)

The core of Node.js are the *V8 engine* and several other libraries like *```libuv```* or *```openssl```* that were written in C++.

*Node Bindings* is a layer that represents the connection between C++ and JavaScript.

The last layer of the Node.js platform, the *Standard Library* is build out of core-modules. You use this interface directly when buildling your application. The core modules have interfaces that work directly with your system.

Another interface of Node.js is the package-manager. 
A *module* is a library in Node.js that can be loaded an used in an application using the module system.
A *package* contains one or more modules that are bundled in one package. Packages can be installed using the package-manager.

The last layer of Node.js is your actual application. The application should implement a modular approach. Your application should be made out of smaller pieces that define interfaces that work with each other.

## The structure of an application

Modularisation is key for a maintainable and extensible application.

When implementing modularisation, **each module must have its own file** that only contains a couple of functions/objects/classes. **You must keep a consistant naming**. A folder should contain modules that are solving a certain problem by working together.

In order for your application to have a clean structure, you shouldn't have too many files inside a folder. **A good benchmark is 7 to 10 files in one folder**.

**Modularisation has the following advantages:**

* Reusability of sub-components
* Better testing
* Parallelizability during development due to the independence of the components
* Interchangeability of individual components through defined interfaces

## Core Modules

You can find the documentation of core modules [here](https://nodejs.org/api). In case you need more information, you can read the [source code](https://github.com/nodejs/node) in the folder *lib*. You can also use the unit tests for even more documentation.

The core modules are each exporting an object that lets you use the functionality of that module. You normally store the return value of the ```require``` function ( in case of CommonJS ) in a constant that represents the module that you want to use.

### Stability Index

![](ScreenshotsForNotes/Chapter4/stability_index.PNG)

## Activating the ECMA-Module System

There are three ways to activate the ECMA-Module System:

* *File extension ```.mjs```*: Node.js will take care of ECMA modules and activate it for you
* *```type```-field in ```package.json```-File*: Add the ```type``` field inside the ```package.json``` file with the value of ```module```. Afterwards, you can use the normal file extension ```.js```
* *```--input-type```-Flag*: Start the Node process with the option ```--input-type=module```.

## Global objects

The global objects can be seen on the [Node.js api documentation](https://nodejs.org/api/globals.html).

### File and folder name

Using the ```__filename``` and ```__dirname``` you can get the name of the file of the module and the name of the folder.

Even if you import the module somewhere else, the values of those two properties will still be accurate.

### Buffer

```Buffer``` objects are always used when working with binary files. Example:

```JavaScript
import { readFile } from 'fs';

readFile('input.txt', (err, data) => {
    console.log(data); // Output: <Buffer 48 61 6c 6c 6f 20 57 65 6c 74>
    console.log(data.toString()); // Output: Hello World
});
```

The most important methods of ```Buffer``` objects are ```toString``` which returns the value of the buffer in a string and ```write``` which allows you to add additional information into the buffer.

## The global scope

In client-side code you have block, function and closure scope and you also have the so-called *global* scope. You don't have a direct *global* scope in Node.js.

If you add something to the *global* object, this global property will be available inside the entire application (even outside the file).

Example:

```JavaScript
function createGlobal() {
    global.myName = 'Peter';
}

createGlobal();
console.log(myName);
```

## JavaScript Module Systems

### CommonJS

In Node.js there are no global variable in the module system unless you define them with the ```global``` object (read section above). You must export what you want to use somewhere else in the application.

A module isn't working alone, it's always part of a bigger application. Using ```module.exports``` you can define interfaces from your application that you want to be used in other modules as well.

Example:

```JavaScript
// add.js

module.exports = function(a, b) {
    return a + b;
}
```

Modules are represented by files that are loaded using the ```require``` method. This function returns an boject that represents the public interface of the file. You can use the functionality of the module through this object.

```JavaScript
// index.js

const add = require('./add.js');

const result = add(1, 2);
console.log(`result: ${result}`);
```

### ECMA-Script

This works just like client-side code. The important difference is how Node.js activates the ECMA-Module System (read section above, there are 3 ways).

### Modules in Node.js

Modules have to be structure in the following way: ***one structure, one file.***
This means that all logical units of your application are located in their own files. **Each file is used to solve a certain problem and it only contains one interface**. By implementing this philosophy you will see that it is very easy to structure and locate certain components in your application.

Normally, when you build your application, you group your modules thematically. When outsourcing code blocks that are used multiple times, the art is to find the right degree between generalization and effort. As a guideline, you should always primarily solve your current problem and only generalize as much as is necessary for your application. If you write code that is too general, it will automatically become more complex, harder to read, and more costly to implement.

#### Loose Coupling, Tight Cohesion

This type of modularization follows the principle of loose coupling. This means that the structures, i.e. functions, objects or classes, of an application are only loosely connected via interfaces. 

The components of the individual modules must be closely connected on the other side. This means that only the logic that can really be assigned to the topic of the module is accommodated in a module. Everything else is in turn separated into its own modules and addressed via interfaces.

## The ```modules```-Module

The ```modules``` module represents the CommonJS-Module Loader. You can't use this module loader in combination with ECMA Script Modules.

An important component of this module is the ***```modules.exports```-Object*** that you can use to make modules public. Another important component is the ***```require```-function*** that can be used to import certain components from other modules.

The ```module``` object is a global object. You can't use it however, if you've activated the ECMA-Script Modules.

The ```module``` object also contains the ```module.id``` and ```module.filename``` properties that contain the absolute filename of the module.

You can see if the module has been completely loaded by using the ```loaded``` property of the ```module``` object.

When a Node.js application is launched, the ```require.main``` property is automatically filled with the module object of the initial file. This means that you can access the filename of the file that serves as the entry point to your application in any module via ```require.main.filename```.

The parent property of the module object provides information about the module that loaded the current module. This information is inside an object that has the same type as the ```module``` object.

In the property ```children``` you get an array of modules that were loaded with ```require```.

## Resolution of NPM-Modules

When searching for NPM modules, the CommonJS module loader and the ECMAScript module loader behave the same. You load NPM modules by prepending neither ```/``` nor ```./``` to the module you want to load.

In this case, the module loader either searches for a Nodejs. core module, or it searches for a package with the corresponding name in the node_modules subdirectory in the current directory. If the package is not found there, it tries one level higher to resolve the patekname.

The module loader will go for example from ```/projects/project1/node_modules``` to ```/project/node_modules``` up to the root folder. It will also search all the paths in the ```NODE_PATH```. It will also search ```<home>/.node_modules```, ```<home>/.node_libraries``` and ```<install-prefix>/lib/node````.

## The module cache

Whenever you are loading a module, it is loaded inside the module cache. If you are loading the module again somewhere else in the application, it will be directly taken from the module cache. This greatly improves the performance of the application since you don't have to wait for a module to be loaded more than 1 single time.

## The ```require``` functionality

Using the ```resolve``` method from the ```require``` object you can find the file where a module is saved.

You can use the ```cache``` property of the ```require``` object to read and modify data from the cache. The ```cache``` object is a normal JavaScript object. The keys are the absolute files paths of the modules and the values are the respective ```module``` objects.

There are no core modules inside the cache.

This is how you can for example 'reload' the cache (read *The module cache* section above).

```JavaScript
// my_module.js

console.log("Hello world");
```

```JavaScript
// index1.js
require("./my_module"); // output: Hello world
require("./my_module"); // output: no output
```

```JavaScript
// index2.js
require("./my_module"); // output: Hello world
delete require.cache[require.resolve('./my_module')];
require("./my_module"); // output: Hello world
```