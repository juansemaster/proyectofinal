
   async function fetchUsers() {
    let response = await fetch("https://randomuser.me/api/?format=json");
      return response.json();
  };
  fetchUsers().then((data) => {
    document.getElementById("h1").innerHTML = data.results[0].name.first+" "+data.results[0].name.last;
    document.getElementById("thumb").src = data.results[0].picture.large;
    document.getElementById("telefono").innerHTML = data.results[0].phone;
    document.getElementById("email").innerHTML = data.results[0].email;
    document.getElementById("ciudad").innerHTML = data.results[0].location.country+", "+data.results[0].location.state+", "+data.results[0].location.city;
    document.getElementById("redsocial").innerHTML = "linkedin.com/"+data.results[0].name.first.toLowerCase()+"-"+data.results[0].name.last.toLowerCase();
    document.getElementById("title").innerHTML = "Curriculum vitae de "+data.results[0].name.first+" "+data.results[0].name.last;
  });
  document.getElementById("ocultar").addEventListener('click', function(){
    document.getElementById("pie").style.display = "none";
  })
     
  
  

     
