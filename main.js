//start change section

function getApi(){
var xhttp = new XMLHttpRequest;
xhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        document.querySelector("#demo").innerHTML = xhttp.responseText;
    }
}
xhttp.open("get","https://jsonplaceholder.typicode.com/photos");
xhttp.send();
}
//end change section

//start cartoona section
(async function getApi() {
    var item = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    var resualt = await item.json();
    var data = resualt.recipes;
    
    var cartoona =
    `
            <img src="${data[0].url}" class="img-fluid">
            <h3>${data[0].publisher}</h3>
            <h6>${data[0].title}</h6>
`;
document.querySelector('.test').innerHTML = cartoona;

var cartoona2 =
    `
            <img src="${data[1].url}" class="img-fluid">
            <h3>${data[1].publisher}</h3>
            <h6>${data[1].title}</h6>
`;

document.querySelector('.test2').innerHTML = cartoona2;
})();

//end cartoona section

// start  dummy section

(async function getApi() {
    var item = await fetch('https://dummyjson.com/products');
    var resualt = await item.json();
    var data = resualt.products
    var text = "";
for(var i=0; i< data.length; i++){
    var cartoona =
    `
<div class="col-md-4 text-center mb-4">
            <img  src="${data[i].images[0]}" class="img-fluid">
            <h2>${data[i].description}</h2>
            <h5>${data[i].title}</h5>
      </div>

`;
text = text + cartoona
}
document.querySelector('.test').innerHTML = text;

})();
    // end  dummy  section




 

