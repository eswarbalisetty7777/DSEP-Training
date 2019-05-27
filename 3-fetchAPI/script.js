function createTag(tag, parent, attributes, content) {
    var newTag = document.createElement(tag);
    if (content != null) {
        var node = document.createTextNode(content);
        newTag.appendChild(node);
    }
    if (attributes != null) {
        for (let prop in attributes) {

            newTag.setAttribute(prop, attributes[prop]);
        }
    }
    var element = document.getElementById(parent);
    element.appendChild(newTag);
}

async function getProfileInfo(playerID) {
    const apiKey = "GKI0xmJ2BEZB42A3SLSjmGK0iKB2";
    const url = `https://cricapi.com/api/playerStats?pid=${playerID}&apikey=${apiKey}`;
    let info = await fetch(url).then(res => res.json());// Wait till json is generated
    return info;

}

function generateContent(playerName) {
    document.getElementById("cricketer").innerHTML=""
var players={"virat":253802,"yuvraj":36084,"gambhir":28763}
createTag(`center`,"cricketer",{id:"center"},null);
createTag('img',"center",{id:"image"},null);
    createTag('h4', "cricketer", { align: "center", id: "name" }, null);
    createTag('h4', "cricketer", { align: "center", id: "batstyle" }, null);
    createTag('h4', "cricketer", { align: "center", id: "born" }, null);
    createTag('h4', "cricketer", { align: "center", id: "teams" }, null);
    createTag('table', "cricketer", { style: "width:100%", id: "table" }, null);
    createTag('tr', "table", { id: "tr1" }, null);
    createTag('th', "tr1", null, "");
    createTag('th', "tr1", null, "100's");
    createTag('th', "tr1", null, "50's");
    createTag('th', "tr1", null, "StrikeRate");
    createTag('tr', "table", { id: "tr2" }, null);
    createTag('th', "tr2", null, "ODI");
    createTag('td', "tr2", { id: "odi100" }, "100's");
    createTag('td', "tr2", { id: "odi50" }, "50's");
    createTag('td', "tr2", { id: "odiStrikeRate" }, "StrikeRate");
    //
    createTag('tr', "table", { id: "tr3" }, null);
    createTag('th', "tr3", null, "T20");
    createTag('td', "tr3", { id: "t20100" }, "100's");
    createTag('td', "tr3", { id: "t2050" }, "50's");
    createTag('td', "tr3", { id: "t20StrikeRate" }, "StrikeRate");
    //
    createTag('tr', "table", { id: "tr4" }, null);
    createTag('th', "tr4", null, "Test");
    createTag('td', "tr4", { id: "test100" }, "100's");
    createTag('td', "tr4", { id: "test50" }, "50's");
    createTag('td', "tr4", { id: "testStrikeRate" }, "StrikeRate");

getProfileInfo(players[playerName]).then(info=>{
    console.log(info)
    document.getElementById("image").src=`${info.imageURL}`;
   
    document.getElementById("name").innerHTML=`Name : ${info.fullName}`;
        document.getElementById("batstyle").innerHTML=`Batting Style : ${info.battingStyle}`;
        document.getElementById("born").innerHTML=`Born : ${info.born}`;
        document.getElementById("teams").innerHTML=`Teams : ${info.majorTeams}`;
      document.getElementById("odi100").innerHTML=info.data.batting.ODIs[100];
      document.getElementById("odi50").innerHTML=info.data.batting.ODIs[50];
      document.getElementById("odiStrikeRate").innerHTML=info.data.batting.ODIs['SR'];
      document.getElementById("t20100").innerHTML=info.data.batting.T20Is[100];
      document.getElementById("t2050").innerHTML=info.data.batting.T20Is[50];
      document.getElementById("t20StrikeRate").innerHTML=info.data.batting.T20Is['SR'];
      document.getElementById("test100").innerHTML=info.data.batting.tests[100];
      document.getElementById("test50").innerHTML=info.data.batting.tests[50];
      document.getElementById("testStrikeRate").innerHTML=info.data.batting.tests['SR'];
    });;
}


