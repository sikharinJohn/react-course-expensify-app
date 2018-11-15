var moment = require('moment');
moment.locale('th');

console.log(moment().format());


console.log( ( new Date()).toLocaleDateString('th-TH'));