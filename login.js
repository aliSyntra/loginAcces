function loginChek(){
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
if(username==="ali"&&password==="ali"){
location.href="acces.html"
}else{
  document.getElementById("inp").innerHTML="niet welcome"
}

};
