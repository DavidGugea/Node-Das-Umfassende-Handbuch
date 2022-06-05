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

# 5. HTTP

## HTTP Web Server

Here is an example of an HTTP Web Server:

```JavaScript
import { createServer } from 'http';

createServer(
    (request, response) => {
        response.writeHead(200, {
            'content-type': 'text/html'
        });

        const responseBody = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Adressbuch</title>
            </head> 
            <body>
                <h1>Adressbuch</h1>
            </body>
        </html>
        `;
        response.end(responseBody);
    }
).listen(8080, () => {
    console.log("Adressbuch erreichbar unter http://localhost:8080");
});
```

You are using the method ```createServer``` from the ```http``` module to build a server. The server then takes a callback that is executed every time a request is made to the server.
The response then writes the head with a 200 status code and the content-type is set to html since the body of the response will be html code. The response is then ended and sent with the html code.

Here is an overview of what the methods do:

* ```createServer```
    * This builds an instance of the ```Server``` class. It's the same as building an instance of ```Server``` using the ```new``` keyword. The callback function given to ```createServer``` is sent to the ```request```-Event of the Server. 
* ```listen```
    * The server starts listening for connections on the given port.
* ```write```
    * You write a part of the body. You can use this multiple times for each response.
* ```end```
    * You signal to the client that it has received the full message from the server. If you don't use this method, the client will stop the connection after a pre-defined configured time period.

You can give thte ```listen``` method a TCP-Port and the server will listen to all IPv6-interfaces that have the given port. If IPv6 is not available, IPv4 will be used. 

If the given port number is 0, the server will listen only listen to a certain port that you can access using the ```address``` function of the Server object. You can also give a specific host name to which the server can connect to.

The third argument of the ```listen``` method is the length of the queue of the server for incoming connections. The default value is *511*.

Regardless of the number of arguments that are given to the ```listen``` method, if you give it a callback, that callback will be executed when the Server has successfully connected. This callback method is usually used to given a signal to the users that the server is now waiting for incoming connections.

If you have used the ```listen``` method to a Server, then the Server is going to wait for incoming connections. You can close the Server using the ```close``` method of the Server object.

The methods ```write``` and ```end``` also accept ```Buffer``` objects. The default encoding is ```utf8```. The ```writeHead``` method is writing the head info. If you didn't execute ```writeHead``` before ```write```, then ```write``` will automatically write the head information for you. 

If the ```write``` method returns ```true```, that means that the message has been sent successfully. If it returns ```false``` then that means that the message was put in a queue. When the buffer is free again, the ```drain```-Event will be dispatched.

You can add HTTP trailing headers using the ```addTrailers``` method.

### Server Events

The following table represents some events that a server can react to:

|Event|Description|
|-----|-----------|
|```request```|Incoming client request|
|```connection```|A connection was built with a client|
|```close```|The server is closing|
|```checkContinue```|This event is dispatched when the Server receives a request with an ```Expect: 100-continue```-Header and the Server has to respond with the status code 100|
|```checkExpectation```|This event is dispatched when the Server recieves a request with an ```Expect```-Header that doesn't have the value ```100-continue```. If this event dispatching callback function is not implemented then the Server will respond with ```417 Expectation Failed```|
|```connect```|A client makes a request to the server using the ```CONNECT``` HTTP Method|
|```upgrade```|A client makes a request to the server using the ```UPDATE``` HTTP Method|
|```clientError```|A client has sent an error message|

### The ```request``` object

This is how an HTTP-Request is built:

![HTTP Request Structure](ScreenshotsForNotes/Chapter5/HTTPRequestStructure.PNG)

The header contains meta-information like for example in what format the response of the server should be. It contains key-value pairs that are defined in the HTTP-Standard.
The body contains the data of the request. The body doesn't always contain data.

### The properties of the ```request``` object

The client uses the ```request``` object to tell the Server what he has to do. The header information of the request is inside the ```request``` object and the body is sent as a stream of multiple data packages. The ```request``` object must be seen as a read-only-object.

This are the most important properties of the ```request``` object:

* ```method```
    * This is the HTTP method that the client has sent and describes what the Server must do with the requested resources. The value of this property can be ```GET```, ```POST```, ```PUT```, ```DELETE```, ```HEAD```, ```PATCH```, ```TRACE```, or ```OPTIONS```
* ```url```
    * The url from where the request was made
* ```header```
    * The HTTP header contains key-value pairs of meta information of the request. If the ```Accept```-Header is for example ```application/json``` that means that the client is expecting a JSON structure from the server.
* ```trailers```
    * The counterpart of headers are trailers.
* ```httpVersion```
    * The http version of the request
* ```connection```
    * This property gives you access to the socket-object that was used for the communication between the Server and the Client.

### HTTP Status Codes

The status codes represents the status of the request.
Status codes can be put into 5 groups and each group has a different meaning:

* *1xx*: informational response
* *2xx*: success
* *3xx*: redirection
* *4xx*: client errors
* *5xx*: server errors

### The ```writeHead``` method

The easiest way to define a correct response-header is to use the ```writeHead``` method. The ```writeHead``` method normally takes 2 arguments. The first argument is a number that represents the *status code* and the second one is the *object with the header information*. You can only use this method once and then you can't change the header information. You must execute this method before ```write``` or ```end```.

You can also use the property ```statusCode``` and the method ```setHeader``` to set a status code and a header for the ```response``` object. The first argument of ```setHeader``` is the name of the field and the second one is the value. If you want to change the header information of a header use ```getHeader``` to read the value of a header and ```removeHeader``` to delete a information from the header.

### How body data is processed

Header information is taken directly from the request object. However, the information from the body is taken from a data stream that contains multiple packages. The request can contain multiple so-called *Chunks* of data. When a part of the request is ready to be read, the *```readable```-Event* is dispatched. You can use the ```read``` method inside the handler-function to read the chunk of data that was received from the data stream. When the request is ended, the *```end```-Event``` is disptached.

## Node.js as Client

### Requests with the ```http```-Module

In order to make a request, you must provide the ```request```-function with a configuration object and a callback function that will execute as soon as you receive a response.

Example:

```JavaScript
import {
    request
} from 'http';

const options = new URL("https://jsonplaceholder.typicode.com/posts");

request(
    options,
    response => {
        let body = '';
        response.on(
            'data',
            chunk => body += chunk
        );

        response.on(
            'end',
            () => console.log(body)
        );
    }
)
```

The reponse is given again as a data-stream. You can use the data using the ```data```-Event. When the response is ended, the ```end```-Event is dispatched. When the ```end```-Event is dispatched, you can fully process the complete response.

You can also use the ```get``` function of the ```http``` module instead of the ```request``` function. By using the ```get``` function you can also define your intensions better.

### The ```request``` package

An alternative of the ```request``` function is the ```request``` package that you can install with ```npm install request```.

This is how you make a get-request to a server using the ```request``` object:

```JavaScript
import request from 'request';

request(
    'https://jsonplaceholder.typicode.com/posts',
    (err, response, body) => {
        console.log(body);
    }
)
```

The following is an example of a post-request:

```JavaScript
import request from 'request';

const post = {
    "userId": 1,
    "id": 101,
    "title": "Test title",
    "body": "Test body",
}

request.post(
    {
        url: 'https://jsonplaceholder.typicode.com/posts', 
        post
    },
    ( err, response, body ) => {
        if (err) {
            console.error(err);
        } else {
            console.log(body);
        }
    }
)
```

# 6. Express

## Express Structure

![Structure of Express](ScreenshotsForNotes/Chapter6/ExpressStructure.png)

The ```http``` module builds the fundamental of Express.

Express uses so-called middleware functions that are executed during the request-response-cycle of Express. You can use middleware functions given by Express or you can make your own. There are also third-party middleware functions.

The third layer of the architecture of Express is the Router. This component executes the right function depending on the URL from where the client made his request so that the client can get a proper response back.

## Express basics

A request comes from a client to the express-server. Depending on the ```http```-method and of the URL-Path a certain router will be chosen and express executes a certain number of callback functions. Inside this callback functions you have access to the ```Request``` and the ```Response``` objects. This two objects with the Router and the Middleware functions are buildling the core of Express.

## The ```Request``` object

The ```Request```-object is the first argument given to a routing-callback-function and represents the request that comes from the client to the Express-server.

Here are the most important properties of the ```Request``` object:

|Property|Description|
|--------|-----------|
|```method```|This is the HTTP-Method (e.g. ```GET```, ```POST```, etc. )|
|```originalUrl```|This is the url from where the Request was sent.| 
|```params```|This property contains all the parameters of the Request (e.g. ```request.params.id=5```, etc.)
|```path```|This property contains the path of the URL|
|```protocol```|The protocol of the Request (e.g. HTTP or HTTPS)|
|```query```|The query string that is part of the URL.|

You can read *header fields* with the ```get``` method. The method is *not* case-sensitive. If you are interested for example in the ```Content-Type``` header-field use ```req.get('Content-Type')```.

## The ```Response``` object

The ```Response``` object is the second argument given to routing-callback-fucntions and represents the response that is being sent back to the client.

The most important property is ```headersSent``` which is a boolean. If this property is ```true``` that means that the headers have already been sent and you can't change them.

These are the most important methods of the ```Response``` object:

|Method|Description|
|------|-----------|
|```get(field)```|Reads the given header-field of the response|
|```set(field, [,value])```|Sets the header-field to a specific value.|
|```cookie(name, value, [, options])```|Sets a value to the cookie|
|```redirect([status, path])```|Redirects the request to a different path|
|```status(code)```|Sets the status code of the response|
|```send([body])```|Sends the body of the response|
|```json([body])```|Sends the body of the response. The body is an object that is transformed into a json object|
|```end([data][, encoding])```|Sends the body of the response. You should use this method primarily if you are not sending user data such as HTML structures. Otherwise, use the ```send```-method|

## Setup

It's better to structure your application in smaller components. In that way you can develop it faster and you can work in teams faster, bugs are easier to solve and the structure of the application is much more clearer. Usually, for Express applications you can use the MVC-Pattern:

### MVC

*Model*: The model is the component that holds the data. This components also contains methods that allow you to change the data (adding, deleting, modifying data). The model components are usually connected to a database and they also contain the business-logic.
*View*: The view components render the data to the user. They are usually HTML-Templates.
*Controller*: The controller connects the model components with the view components. They aren't allowed to be too big and shouldn't contain any logic at all (if possible). If a controller contains too much logic, you should think about putting that logic inside a model/view-component.

### Structure of an application

The structure of an application depends very much on how big it is. Usually, at the beginning of an application so you don't really have to think about it. You shouldn't try to optimize the structure of an application when starting, you can refactor it later.

### Structure of a small application

For very small apps, build a file for every component:

![The structure of a small application](ScreenshotsForNotes/Chapter6/StructureOfASmallApplication.png)

This structure however works for very small apps that means *3 to 4 endpoints*.

### Structure of a medium application

For medium applications, meaning *10 to 15 endpoints* you can build different routes. In this type of applications you should have different folders for models, views and controllers.

In order to categorize the files properly you can put the type of the controller inside the filename. If you are buildilng a controller for the login process, you can name the controller ```login.controller.js``` so that you know what the controller is responsible for.

![The structure of a medium application](ScreenshotsForNotes/Chapter6/StructureOfAMediumApplication.png)

### Structure of a big application

A bigger application should be built out of multiple modules where each module is responsible for a certain thing. The module then contains different folders for controllers, models and views:

![The structure of a big application](ScreenshotsForNotes/Chapter6/StructureOfABigApplication.png)

## The ```index.js``` file

The ```index.js``` file represents the start of an application. Make sure to remember that this file is only for initialization and nothing else. This file shouldn't be responsible for anything.

## Routing

Example of routing:

```JavaScript
import express from 'express';
import { router } from './movie/index.js';

const app = express();

app.use('/movie', router);
```

Use the ```use``` method to set up a router on a certain path. The router can then set up ```GET```, ```POST``` callbacks just like the object ```app``` does. The difference is the path.

Routers can restrict other routes from being executed since the first route found is also executed. If you have multiple routes that are the same, only the first one found will be executed, while the rest will be ignored.

## Middleware

A middleware function is a function that is exectued during the request-response-cycle. That is the time between when the request has been sent from the client and when the response has been sent to the client. You can chain this functions together. There already are middleware functions given by Express that you can use or third-party middleware functions but you can also write your own.

### Writing your own middleware

A middleware function has a certain signature. The first argument is the request of the client, the second argument is the response that will be sent to the client and the third function is the so-called ```next```-function which is just another callback function that is being passed to the function. It doesn't have to be named ```next```, it's just a convention. If you forget to call the ```next``` function then you will stop the chain.

Example:

```JavaScript
import express from 'express';

const app = express();

// Writing the middleware function
const log = (request, response, next) => {
    console.log('this is a logger.');
    next();
}

// Registering the middleware function in the chain
app.use(log);
```

The signature of middleware functions is the same as the routing functions. A middleware function always takes in the request, response and the callback function.

The ```next``` callback function given to the middleware function calls the next middleware function and so on. If you don't call this function the chain of middleware functions will end.

You have to register the middleware function using the ```use``` method. This method also receives an optional first argument that represents the URL where the middlware function has to be executed. If no optional URL is given, the middleware function will be used for every URL. The order in which you register the middleware functions is important too. Throughout the chain of middleware functions, you always receive a reference to the request and response objects.

## Static data

If you want to load static data using Express, use the middleware function ```express.static``` that takes in the URL of the static data:

```JavaScript
app.use(
    express.static(/* url */)
);
```

## Taking in values in URLs

If you want to take in an argument in an url use ```:```:

```JavaScript
router.get('/delete/:id');
```

If the value is optional add a question mark:

```JavaScript
router.get('/delete/:id?');
```

You can now get the ```id``` using ```request.params.id```. Keep in mind that the values taken from the user are always strings.