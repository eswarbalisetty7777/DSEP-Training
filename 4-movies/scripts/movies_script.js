import { clearAll,clearMovie, clearCelebrity, clearHome, clearTvSeries } from './clearThings.js'
import { apiKey, preUrl, postUrl, language } from './constants.js'
import { setNavActive, setNavInActive } from './navigations.js'
var index=0
//search 
const search = async (param) => {
  clearMovie()
  clearTvSeries()
  clearCelebrity()
  if (param == "celebrity") {

    searchCelebrity()
  }
  else {
    await  showMovieorTv(index,param);
    // 
    // console.log(index)
    
    
  }
}

const init = (param) => {

  clearMovie()
  clearTvSeries()
  clearCelebrity()
  clearHome()
  setNavInActive()
  setNavActive(param)
  searchBar(param)
  document.getElementById("searchButton").addEventListener('click', () => search(param))
}




async function searchCelebrity() {
  let celebrity = document.getElementById("search").value
  let celebrityPromise = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=${language}&query=${celebrity}&page=1&include_adult=false`)
  let celebrityJSON = await celebrityPromise.json();
  if (celebrityJSON.results.length === 0) {
    togglseStatus(false)
  }
  else {
    togglseStatus(true);
    let famousFor = []
    let imagePath = celebrityJSON.results[0].profile_path;
    let j = 0, k = 0;
    for (let i = 0; i < celebrityJSON.results.length && k < 3; i++) {
      let element = celebrityJSON.results[i];
      if (element.known_for.length != 0) {

        for (let j = 0; j < element.known_for.length && k < 3; j++) {
          if (element.known_for[j].title != null && k < 3)
            famousFor[k++] = element.known_for[j].title
        }
      }

    }
    document.getElementById("celebrity_info").innerHTML = `
<center><img src=http://image.tmdb.org/t/p/w154/${imagePath}></center>
<h3>Name  :-  ${celebrityJSON.results[0].name}</h3>
<h3>Known For :-  ${famousFor[0]} , ${famousFor[1]} , ${famousFor[2]}</h3>

`

  }
}

const searchBar = (param) => {
  document.getElementById('searchBar').innerHTML = `
  <center><h2>${param} Search</h2></center>
  <div class="example"  style="margin:auto;max-width:300px;" >
  <input type="text" placeholder="Search.." id="search">
    <button  type="submit"  id="searchButton"><i class="fa fa-search"></i></button>
    <p id="status" style="color:red"></p>
  </div>

 `
}

const togglseStatus = (flag) => {
  if (flag) {
    document.getElementById("status").innerHTML = ""

  }
  else {
    document.getElementById("status").innerHTML = "no results"

  }
}


const home = () => {
  setNavInActive()
  document.getElementById("home").setAttribute("class", "active")
  clearAll()
 // clear serach Bart
  document.getElementById("searchBar").innerHTML=""
}

const showMovieorTv=async (index,param)=>{
  let url = "";
    let show = document.getElementById("search").value
    if (param == 'Movie') {
      url = `${preUrl}movie?api_key=${apiKey}&language=${language}&query=${show}&${postUrl}`
    }
    else if (param == 'Tvseries') {
      url = `${preUrl}tv?api_key=${apiKey}&language=${language}&query=${show}&${postUrl}`

    }

    let showPromise = await fetch(url);
    let showJSON = await showPromise.json();
    if (showJSON.results.length === 0||index>=showJSON.results.length ) {
      togglseStatus(false)
    
    }
    else {
     
      togglseStatus(true)
      let genresPromise = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${language}
      `);
      let genresJSON = await genresPromise.json();
      let genresId = showJSON.results[index].genre_ids;
      let genresNames = []

      genresId.forEach(element => {
        for (let i = 0; i < genresJSON.genres.length; i++) {
          if (element == genresJSON.genres[i].id) {
            genresNames.push(genresJSON.genres[i].name)
          }
        }
      });
     
         document.getElementById("movie_info").innerHTML = `
  <center><img src=http://image.tmdb.org/t/p/w154/${showJSON.results[index].poster_path}>
  <button type="button" id="next"> Next</button>
</center>
  <h3>Genres  :${genresNames}</h3>
  <h3> Plot :${showJSON.results[index].overview}</h3>

  `
  document.getElementById("next").addEventListener('click',()=>showMovieorTv(++index,param)) 
    }
  
  }






document.getElementById("home").addEventListener('click', home)
document.getElementById("1").addEventListener('click', () => { init("Movie") })
document.getElementById("2").addEventListener('click', () => { init("Tvseries") })
document.getElementById("3").addEventListener('click', () => { init("celebrity") })