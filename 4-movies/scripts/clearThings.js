
const clearMovie = () => {
    document.getElementById('movie_info').innerHTML = "";
  }
 const clearTvSeries = () => {
    document.getElementById('tvseries_info').innerHTML = "";
  
  }
  const clearCelebrity = () => {
    document.getElementById('celebrity_info').innerHTML = "";
  
  }
  const clearHome = () => {
    document.getElementById('homeHtml').innerHTML = ""
  
  }
  const clearAll=()=>{
    clearMovie();
    clearTvSeries();
    clearCelebrity();
    clearHome()
  }

  export {clearMovie,clearTvSeries,clearCelebrity,clearHome,clearAll};
