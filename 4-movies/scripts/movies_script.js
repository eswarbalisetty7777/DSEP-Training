async function search(){
let movie= document.getElementById("search").value
let moviePromise=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6b887e397490d385fcf599514f820e0c&language=en-US&query=${movie}&page=1&include_adult=false`)
let movieJSON=await moviePromise.json()
let genresPromise=await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=6b887e397490d385fcf599514f820e0c&language=en-US
`);
let genresJSON=await genresPromise.json();
let genresId=movieJSON.results[0].genre_ids;
let genresNames=[]

genresId.forEach(element => {
  for(let i=0;i<genresJSON.genres.length;i++){
    if(element==genresJSON.genres[i].id){
      genresNames.push(genresJSON.genres[i].name)
    }
  }
});

document.getElementById("movie_info").innerHTML=`<h3> PLot :${movieJSON.results[0].overview}</h3>
<h3>Genres ${genresNames}</h3>
`

}

function init(param){
 
  document.getElementById(param).innerHTML=`<!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <style>
   body {
    font-family: Arial;
  }
  
  * {
    box-sizing: border-box;
  }
  
  div.example input[type=text] {
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 80%;
    background: #f1f1f1;
  }
  
  div.example button {
    float: left;
    width: 20%;
    padding: 10px;
    background: #2196F3;
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none;
    cursor: pointer;
  }
  
  div.example button:hover {
    background: #0b7dda;
  }
  
  div.example::after {
    content: "";
    clear: both;
    display: table;
  }
   </style>
   </head>
    <body>
    <center><h2>Movies Search</h2></center>
    <div class="example"  style="margin:auto;max-width:300px">
      <input type="text" placeholder="Search.." id="search">
      <button  type="submit"  onclick="search()" ><i class="fa fa-search"></i></button>
    </div>
    
    </body>
    </html> 
    
    `
}


