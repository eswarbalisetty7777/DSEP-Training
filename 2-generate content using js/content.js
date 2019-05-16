
function createTag(tag,parent,attributes,content){
    var newTag = document.createElement(tag);
    if(content!=null){
    var node = document.createTextNode(content);
    newTag.appendChild(node);    
}
    if(attributes!=null){
    for(let prop in attributes){
   
        newTag.setAttribute(prop,attributes[prop]);
    }
}
    var element = document.getElementById(parent);
    element.appendChild(newTag);
    }

    createTag("h1","header",{"align":"center"},"3 COLUMN LAYOUT");
    createTag("h1","header",{"align":"center"},"INFO ABOUT BATSMAN");
    createTag("div","main",{"class":"coloumn-layout",id:"mainDIV"},null);
    createTag("div","mainDIV",{"class":"coloumn",id:"firstDIV"},null);
    createTag("img","firstDIV",{"src":"virat.jpg","alt":"Virat Kohli",id:"viratpic"},null);
    createTag("p","firstDIV",null,`A spunky, chubby teenager with gelled hair shot to fame after leading India to glory in the Under-19 World Cup at Kuala Lumpur in early 2008. 
    In an Indian team filled with saint-like icons worthy of their own hagiographies, Virat Kohli, with his most un-Indian,
     'bad-boy' intensity, would clearly be an outcast. `);
     createTag("button","firstDIV",{"onClick":"rcb()"},"RCB");

    
   
    createTag("div","mainDIV",{"class":"coloumn","id":"secondDIV"},null);
    createTag("img","secondDIV",{"src":"yuvraj.jpg","alt":"Yuvraj ",id:"uv"},null);
    createTag("p","secondDIV",null,`There are very few better sights in world cricket than witnessing a free-flowing Yuvraj Singh at his best. 
    Undoubtedly, he is right up there among the greatest match-winners in white-ball cricket.  `);
     createTag("button","secondDIV",{"onClick":"MI()"},"Mumbai Indians");

     createTag("div","mainDIV",{"class":"coloumn","id":"thirdDIV"},null);
    createTag("img","thirdDIV",{"src":"smith.png","alt":"Steve ",id:"smith"},null);
    createTag("p","thirdDIV",null,`The best Test batsman at present, Steven Smith's career redemption is a story for the ages. Having made his name initially as a potential leg-spinner who could bat a bit, 
    there was immense criticism, even among those in Australia over the quality of his selection during his early days in international cricket.  `);
     createTag("button","thirdDIV",{"onClick":"rr()"},"RR");
    


     
  
     function rcb(){
        document.getElementById("viratpic").src="rcb.png"
        }
        function MI(){
        document.getElementById("uv").src="uv.jpg"
        }
        function rr(){
        document.getElementById("smith").src="smith2.png"
        }