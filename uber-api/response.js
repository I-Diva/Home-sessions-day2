Uber.getProducts(lat, lon).then(function(response) {
  console.log(response.rate_limit);
});
