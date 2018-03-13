var request = require('request');

const url = "http://api.wunderground.com/api/";

module.exports = function (ctx, cb){
  var userInput = ctx.body.text.replace(ctx.secrets.TRIGGER_WORD, '');
  var whitespace = /\s/g;
  var location = userInput.replace(whitespace, '_');

  /*
  Not interested in weather in the Czech Republic? Replace "CZ" with the two-letter country code of your choice.
  */
  
  var requestUrl = url + ctx.secrets.API_KEY + '/forecast/q/CZ/' + location + '.json';

  request.get(requestUrl, function (error, res, body) {
    if (error) {
      cb(null, error);
    } else {
      var result = JSON.parse(body);
      var weather = result.forecast.txt_forecast.forecastday[0].fcttext;
      cb(null, {text: weather});
    }
  });
};