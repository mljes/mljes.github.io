var request = new XMLHttpRequest();

request.open('GET', 'https://54.144.197.204:5000/passwordplease');

request.onload = function() {
  var data = this.response;
  console.log("HERE IS THE DATA: " + data);
  var rootDiv = document.getElementById('root');
  rootDiv.innerHTML = data;
}

request.send();
