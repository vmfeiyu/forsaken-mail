/**
 * Created by Hongcai Deng on 2015/12/28.
 */

'use strict';

let path = require('path');
let nodeMailin = require('node-mailin');
let config = require('./config');

nodeMailin.start(config.mailin);

nodeMailin.on('error', function(err) {
  console.error(err.stack);
});

module.exports = nodeMailin;
