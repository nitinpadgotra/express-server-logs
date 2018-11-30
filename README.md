# express-server-logs
This is a express middleware for displaying logs in the console and also logging your custom error, info, warning and success messages
in console with colors for the messages.

## Usage

Works like any other middleware in express
```
const express = require('express');
const bodyParser = require('body-parser');
const _expressLog = require('express-server-logs');

const app = express();
const log = new _expressLog();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(log.logger);

```

Using with options
express-server-logs takes 2 arguments one for productionMode and other is options
```
const log = new _expressLog(productionMode, options);
```
productionMode can be true or false
for true your custom messages will not display to console and for false it will
Options here is an object

{
  date: true,
  url: true,
  method: true,
  headers: true,
  pathParam: true,
  bodyParam: true,
  queryParam: true
}

Set value of key to false if you don't want that info to be display in logs.
By default productionMode is false and options have true for all keys

Example
```
const log = new _expressLog(true, {
                                    date: true,
                                    url: true,
                                    method: true,
                                    headers: true,
                                    pathParam: false,
                                    bodyParam: true,
                                    queryParam: true
                                  });

```



