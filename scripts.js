import axios from 'axios';
//const axios = require("axios");
const api = axios.create({ baseURL: "https://54.144.197.204:5000/"});

async function getPassword() {
  try {
    const data = await api.get("passwordplease");
    console.log("HERE IS THE DATA: " + data);
    var rootDiv = document.getElementById('root');
    rootDiv.innerHTML = data;
  }
  catch (error) {
    console.error(error);
  }
}
/*
//localhost
request.open('GET', 'https://54.144.197.204:5000/passwordplease');

request.onload = function() {
  var data = this.response;

}

request.send()
*/
