
var xhr = new XMLHttpRequest();

xhr.open("get", "https://rickandmortyapi.com/api/location?page=1");

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var json = JSON.parse(xhr.responseText);

        for(var i = 0; i < json.results.length; i++){

            var col = document.createElement("div");
            col.setAttribute("class", "col-12 col-md-6 col-lg-3 my-2");

            var card = document.createElement("div");
            card.setAttribute("class", "card bg-secondary");

            card.addEventListener("mouseover", function(){
                this.style.transform = "scale(1.05)";
                this.style.boxShadow = "0 8px 20px rgba(0,0,0,0.6)";
                this.style.transition = "all 0.3s ease";
            });
            card.addEventListener("mouseout", function(){
                this.style.transform = "scale(1)";
                this.style.boxShadow = "none";
            });
            


            var cardhead = document.createElement("div");
            cardhead.setAttribute("class", "card-header text-center bg-dark");
            cardhead.textContent = json.results[i].name;

            var ul = document.createElement("ul");
            ul.setAttribute("class", "list-group list-group-flush list-unstyled");

            var li1 = document.createElement("li");
            li1.setAttribute("class", "list-group-item bg-secondary text-white");
            if(json.results[i].residents.length === 0){
                li1.textContent = "Residents: ❌"  + json.results[i].residents.length;
                cardhead.style.color = "red";
            }
            else{
                li1.textContent = "Residents: " + json.results[i].residents.length;
                cardhead.style.color = "white";
            };
            



            var li2 = document.createElement("li");
            li2.setAttribute("class", "list-group-item bg-secondary text-white");
            li2.textContent = "Type: " + json.results[i].type;

            var li3 = document.createElement("li");
            li3.setAttribute("class", "list-group-item bg-secondary text-white");
            if(json.results[i].dimension === "unknown"){
                li3.textContent = "❌Not know.";
            }
            else{
                li3.textContent = "Dimension: " + json.results[i].dimension;
            };
            
            

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);

            card.appendChild(cardhead);
            card.appendChild(ul);

            col.appendChild(card);

            document.getElementById("locationrow").appendChild(col);

        }
    }
};
xhr.send(null);