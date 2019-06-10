async function searchCelebrity() {
    let celebrity = document.getElementById("search").value
    let celebrityPromise = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=${language}&query=${celebrity}&page=1&include_adult=false`)
    let celebrityJSON = await celebrityPromise.json();
    if (celebrityJSON.results.length === 0) {
      togglseStatus(false)
    }
    else {
      togglseStatus(true);
  let famousFor=[]
  let imagePath=celebrityJSON.results[0].profile_path;
  let j=0,k=0;
  for(let i=0;i<celebrityJSON.results.length&&k<3;i++){
    let element=celebrityJSON.results[i];
    if(element.known_for.length!=0){
      
      for(let j=0;j<element.known_for.length&&k<3;j++){
        if(element.known_for[j].title!=null&&k<3)
        famousFor[k++]=element.known_for[j].title
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

  export {searchCelebrity}