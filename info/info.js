var usp = new URLSearchParams(window.location.search);
var id = usp.get("id");

var xhr = new XMLHttpRequest();

xhr.open("get", "https://rickandmortyapi.com/api/character/" + id);

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var json = JSON.parse(xhr.responseText);

        var name = document.getElementById("name");
        name.innerHTML = json.name;
        name.style.fontWeight = "bold";


         var colors = ["red", "blue", "orange", "yellow", "green", "pink", "black"];
      function randomfromlist(){
        var index = Math.floor(Math.random() * colors.length);
        return colors[index];
      }
        var img = document.getElementById("image");
        img.setAttribute("src", json.image);
        img.setAttribute("title", json.name);
        img.setAttribute("alt", json.name);
        img.setAttribute("class", "w-100");
        img.style.border = `3px solid ${randomfromlist()}`;
        img.style.borderRadius = "250px"

        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        if(json.status.length === 0){
            td1.textContent = "❌ Not know";
        }
        else if(json.status === "Alive"){
            td1.textContent = "✅"+json.status;
        }
        else{
            td1.textContent = "❌" + json.status;
        }
        td1.setAttribute("class", "text-center");


        var td2 = document.createElement("td");
        if(json.species.length === 0){
            td2.textContent = "❌ Not know";
        }
        else{
            td2.textContent = json.species;
        }
         td2.setAttribute("class", "text-center");


        var td3 = document.createElement("td");
        if(json.type.length === 0){
            td3.textContent = "❌ Not know"
        }
        else{
            td3.textContent = json.type;
        }
         td3.setAttribute("class", "text-center");


        var td4 = document.createElement("td");
        if(json.gender.length === 0){
            td4.textContent = "❌ Not know";
        }
        else{
            td4.textContent = json.gender;
        }
         td4.setAttribute("class", "text-center");


        var td5 = document.createElement("td");
        if(json.origin.name.length === 0 || json.origin.name === "unknown"){
           td5.textContent = "❌ Not know"; 
        }
        else{
            td5.textContent = "🌍" + json.origin.name;
        }
         td5.setAttribute("class", "text-center");

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        document.getElementById("infos").appendChild(tr);
    }
};
xhr.send(null);