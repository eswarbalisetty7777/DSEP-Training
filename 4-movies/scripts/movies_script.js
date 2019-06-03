const search = async (param) => {
  if (param == "celebrity") {
    searchCelebrity()
  }
  else {
    let url = "";
    let showID=0;
    let show = document.getElementById("search").value
    if (param == 'Movie') {
      url = `https://api.themoviedb.org/3/search/movie?api_key=6b887e397490d385fcf599514f820e0c&language=en-US&query=${show}&page=1&include_adult=true`
    }
    else if (param == 'Tvseries') {
      url = `https://api.themoviedb.org/3/search/tv?api_key=6b887e397490d385fcf599514f820e0c&language=en-US&query=${show}&page=1&include_adult=true`

    }

    let showPromise = await fetch(url);
    let showJSON = await showPromise.json();
    let genresPromise = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=6b887e397490d385fcf599514f820e0c&language=en-US
  `);
    let genresJSON = await genresPromise.json();
    let genresId = showJSON.results[0].genre_ids;
    let genresNames = []

    genresId.forEach(element => {
      for (let i = 0; i < genresJSON.genres.length; i++) {
        if (element == genresJSON.genres[i].id) {
          genresNames.push(genresJSON.genres[i].name)
        }
      }
    });
showID=showJSON.results[0].id;
{/* */}
let similarSearchPromise=await fetch(`
https://api.themoviedb.org/3/movie/${showID}/similar?api_key=6b887e397490d385fcf599514f820e0c&language=en-US&page=1`);
let similarSearchJSON=await similarSearchPromise.json();

    document.getElementById("movie_info").innerHTML = `
  <center><img src=http://image.tmdb.org/t/p/w154/${showJSON.results[0].poster_path}></center>
  
  <h3>Genres  :${genresNames}</h3>
  <h3>SIMILAR SHOWS  :${similarSearchJSON.results[0].title} ,${similarSearchJSON.results[1].title}</h3>
  <h3> Plot :${showJSON.results[0].overview}</h3>

  `
  }
}

function init(param) {
  clearMovie()
  clearTvSeries()
  clearCelebrity()
  clearHome()
  document.getElementById('movieSearch').innerHTML = `<!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      
    
     
      <body>
       <center><h2>${param} Search</h2></center>
       <div class="example"  style="margin:auto;max-width:300px">
         <input type="text" placeholder="Search.." id="search">
         <button  type="submit"  onclick="search('${param}')" ><i class="fa fa-search"></i></button>
       </div>
      
       </body>
     </html> 
      
      `
}



clearScreen = () => {
  document.getElementById("movieSearch").innerHTML = ""
  document.getElementById("tvseries").innerHTML = ""
  document.getElementById("celebrity").innerHTML = ""
  clearMovie()
  clearTvSeries()
  clearCelebrity()



}
clearMovie = () => {
  document.getElementById('movie_info').innerHTML = "";

}
clearTvSeries = () => {
  document.getElementById('tvseries_info').innerHTML = "";

}
clearCelebrity = () => {
  document.getElementById('celebrity_info').innerHTML = "";

}
clearHome = () => {
  document.getElementById('homeHtml').innerHTML = ""
}

async function searchCelebrity() {
  let celebrity = document.getElementById("search").value
  let celebrityPromise = await fetch(`https://api.themoviedb.org/3/search/person?api_key=6b887e397490d385fcf599514f820e0c&language=en-US&query=${celebrity}&page=1&include_adult=true`)
  let celebrityJSON = await celebrityPromise.json();
  document.getElementById("celebrity_info").innerHTML = `
<center><img src=http://image.tmdb.org/t/p/w154/${celebrityJSON.results[0].profile_path}></center>
<h3>Name  :-  ${celebrityJSON.results[0].name}</h3>
<h3>Known For :-  ${celebrityJSON.results[0].known_for[0].title} , ${celebrityJSON.results[0].known_for[1].title} , ${celebrityJSON.results[0].known_for[2].title}</h3>

`
}