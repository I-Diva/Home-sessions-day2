// the require returns a function which is instantiated as a class

// the code immediately instantiates the class by passing in the token and api version

var Uber = require('uber-api')({ server_token: 'YOUR SERVER TOKEN', version: 'v1' }),
  lat = 36,
  lon = -94;

Uber.getProducts(lat, lon, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});

Uber.getProducts(lat, lon).then(function(response) {
  console.log(response);
}, function(error) {
  console.error(response);
});
