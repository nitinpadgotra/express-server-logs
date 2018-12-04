/*
* @file: express-server-logs/index.js
* @descrition: This file exports the main function of the express-server-logs
* @author: Nitin Padgotra
* @date: 28/11/18
* */
/* eslint-disable */
let _this;

function getCurrentDateTime() {
  let d = new Date();

  return ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
  d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);;
}
var originalConsole = console;
function init(productionMode = false, options = {
  date: true,
  url: true,
  method: true,
  headers: true,
  pathParam: true,
  bodyParam: true,
  queryParam: true,
}) {
  _this = this;
  this.productionMode = productionMode;
  this.config = options;
}

init.prototype.log = (message) => {
  if (!_this.productionMode) {
    originalConsole.log('\x1b[2m', getCurrentDateTime(),"\x1b[0m", "\x1b[1m","\x1b[37m", message, "\x1b[0m",);
  }
};

init.prototype.success = (message) => {
  if (!_this.productionMode) {
    originalConsole.log('\x1b[2m', getCurrentDateTime(),"\x1b[0m", "\x1b[1m",'\x1b[32m', 'Success: ', message, '\x1b[0m');
  }
};

init.prototype.error = (message) => {
  if (!_this.productionMode) {
    originalConsole.log('\x1b[2m', getCurrentDateTime(),"\x1b[0m", "\x1b[1m", '\x1b[31m', 'Error: ', message, '\x1b[0m');
  }
};


init.prototype.info = (message) => {
  if (!_this.productionMode) {
    originalConsole.log('\x1b[2m', getCurrentDateTime(),"\x1b[0m", "\x1b[1m", '\x1b[34m', 'Info: ', message, '\x1b[0m');
  }
};

init.prototype.warning = (message) => {
  if (!_this.productionMode) {
    originalConsole.log('\x1b[2m', getCurrentDateTime(), "\x1b[0m","\x1b[1m", '\x1b[33m', 'Warning: ', message, '\x1b[0m');
  }
};

init.prototype.logger = (req, res, next) => {
  originalConsole.log('\n');
  originalConsole.log( '*\** * *** * *** * *** * *** * *** * *** * *** * ***');
  if (_this.config.date) originalConsole.log('+++++++ Request received at ', getCurrentDateTime());
  if (_this.config.url) originalConsole.log('+++++++ Request path ', req.url);
  if (_this.config.method) originalConsole.log('+++++++ Request method ', req.method);
  if (_this.config.headers) originalConsole.log('+++++++ Request headers ', req.headers);
  if (_this.config.pathParam) originalConsole.log('+++++++ Request path parameters', req.params);
  if (_this.config.bodyParam) originalConsole.log('+++++++ Request body parameters', req.body);
  if (_this.config.queryParam) originalConsole.log('+++++++ Request query parameters', req.query);
  originalConsole.log( '*** * *** * *** * *** * *** * *** * *** * *** * ***');
  originalConsole.log('\n');
  next();
};


module.exports = init;
