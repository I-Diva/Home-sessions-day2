 var request = require('request');

 request({
     url: "http://api.geonames.org/children/",
     qs: {
       geonameId: 2593110,
       username: "olayemi",
       hierarchy: "tourism"
     },
     method: "POST",

   },

   function(err, res, body) {
     // `body` is a js object 
     if (err) {
       console.log(error);
     } else {
       console.log(res.statuscode, body);
     }

   });
