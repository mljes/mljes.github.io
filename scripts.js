const get_password = async () => {
  const response = await fetch("https://54.144.197.204:5000/passwordplease")
  console.log(response)
}

get_password()

/*
//localhost
request.open('GET', 'https://54.144.197.204:5000/passwordplease');

request.onload = function() {
  var data = this.response;

}

request.send()
*/
