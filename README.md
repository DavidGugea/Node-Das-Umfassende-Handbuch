# Node - Das Umfassende Handbuch by Sebastian Springer, 4th. Edition

---

# 1. Basics
# 2. Installation
# 3. A first example
# 4. Node.js modules
# 5. HTTP
# 6. Express
# 7. Template-Engines
# 8. Connecting To Databases
# 9. Authentication and Session Management
# 10. REST-Server
# 11. GraphQL
# 12. Realtime-Web Applications
# 13. Typesafe Applications in Node.js
# 14. Webapplications with Nest
# 15. Node on the command line
# 16. Asynchronous Programming
# 17. RxJS
# 18. Streams
# 19. Working with files
# 20. Socket-Server
# 21. Package Manager
# 22. Quality Assurance
# 23. Testing
# 24. Security Packages
# 25. Scalability and Deployment
# 26. Performance
# 27. Microservices with Node.js
# 28. Deno

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