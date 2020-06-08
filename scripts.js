const axios = require('axios')

// "https://54.144.197.204:5000/"
const getPassword = async () => {
  try {
    return await axios.get("https://54.144.197.204:5000/passwordplease")
  }
  catch (error) {
    console.error(error)
  }
}

console.log(getPassword())

/*
//localhost
request.open('GET', 'https://54.144.197.204:5000/passwordplease');

request.onload = function() {
  var data = this.response;

}

request.send()
*/
