
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

createTag("h1", "header", { "align": "center" }, "3 COLUMN LAYOUT");
createTag("h1", "header", { "align": "center" }, "INFO ABOUT BATSMAN");
createTag("div", "main", { "class": "coloumn-layout", id: "mainDIV" }, null);
createTag("div", "mainDIV", { "class": "coloumn", id: "firstDIV" }, null);
createTag("img", "firstDIV", { "src": "virat.jpg", "alt": "Virat Kohli", id: "viratpic" }, null);
let viratID = 253802
getProfileInfo(viratID).then((info) => { createTag("p", "firstDIV", null, info.profile);
 createTag("button", "firstDIV", { "onClick": "rcb()" }, "RCB");
 });





createTag("div", "mainDIV", { "class": "coloumn", "id": "secondDIV" }, null);
createTag("img", "secondDIV", { "src": "yuvraj.jpg", "alt": "Yuvraj ", id: "uv" }, null);
let uvID = 36084;
getProfileInfo(uvID).then((info) => {
    createTag("p", "secondDIV", null, info.profile); createTag("button", "secondDIV", { "onClick": "MI()" }, "Mumbai Indians")});

    createTag("div", "mainDIV", { "class": "coloumn", "id": "thirdDIV" }, null);
    createTag("img", "thirdDIV", { "src": "smith.png", "alt": "Steve ", id: "smith" }, null);
   let smithID=7656;
   getProfileInfo(smithID).then((info) => {createTag("p", "thirdDIV", null, info.profile);
   createTag("button", "thirdDIV", { "onClick": "rr()" }, "RR");
 });

   




    function rcb() {
        document.getElementById("viratpic").src = "rcb.png"
    }
    function MI() {
        document.getElementById("uv").src = "uv.jpg"
    }
    function rr() {
        document.getElementById("smith").src = "smith2.png"
    }