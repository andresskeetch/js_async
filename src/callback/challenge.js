const XMLHTTPRequest = require("xmlhttprequest").XMLHttpRequest;

const API = "https://rickandmortyapi.com/api/character/"

function fetchData(ur_api, callback) {
  const xhttp = new XMLHTTPRequest();

  xhttp.open("GET", ur_api, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      }
      else {
        const error = new Error("Error " + ur_api)
        return callback(error, null);
      }
    }
  }

  xhttp.send();
}


fetchData(API, function (error, data) {
  console.log(data)
});
