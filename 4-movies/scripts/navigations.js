const setNavActive=(param)=>{
    if(param=="Movie"){
      document.getElementById("1").setAttribute("class","active")
    }
  else if(param=="Tvseries"){
    document.getElementById("2").setAttribute("class","active")
  
  }
  else if(param=="celebrity"){
    document.getElementById("3").setAttribute("class","active")
  
  }
  else{
    document.getElementById("home").setAttribute("class","active")
  
  }
  }
  
  const setNavInActive=()=>{
    
      document.getElementById("1").setAttribute("class","inactive")
    
  
    document.getElementById("2").setAttribute("class","inactive")
  
  
  
    document.getElementById("3").setAttribute("class","inactive")
  
    document.getElementById("home").setAttribute("class","inactive")
  
  
  }

  export {setNavActive,setNavInActive}