Debugging Mocha in the Browser with Node and full SourceMaps!
==

As of Node v6.3.0, we can now debug Node applications in Chrome DevTools. BUT, as I’ll elaborate on later, you’re going to need Node v7.2.1 if you want full SourceMap support to boot.  

Get it running
--

Install the dependencies, then start up the tests in debug mode
```
npm i && npm run test:debug
```

You see the following in your console.  Paste the long URL in your browser and you're off!

```
Debugger listening on port 9229.
Warning: This is an experimental feature and could change at any time.
To start debugging, open the following URL in Chrome:
    chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/0c0a286f-9040-4452-a764-8cb9211d103a
```

