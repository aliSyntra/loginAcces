async function fetchApi(){
    try{
        const api= await fetch ("https://randomuser.me/api/?results=100");
        const data = await api.json();
        console.log(data) ;
         dataFemale(data);
         dataMale(data);
    }
    catch(error){
    // console.log(Error)
    };
   
};
fetchApi();


// vrouwen
let div1 = `<div>female</div>`
function dataFemale(miss){
   for(let result  of miss.results){
    if(result.gender==="female"){
     div1+= `
    
    <br> 
    ${result.name.first}<br>
    ${result.gender}<br>
    ${result.email}<br>
    <br>  
    
     `
   } 
}
div1+= "</div>"
document.getElementById("female").innerHTML=div1
};

// mannen

let div2 = `<div>male</div>`
function dataMale(men){
   for(let result  of men.results){
    if(result.gender==="male"){
     div2+= `
    
    <br> 
    ${result.name.first}<br>
    ${result.gender}<br>
    ${result.email}<br>
    <br>  
    
     `
   } 
}
div2+= "</div>"
document.getElementById("male").innerHTML=div2
};