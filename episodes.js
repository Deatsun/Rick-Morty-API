
var xhr = new XMLHttpRequest();

xhr.open("get", "https://rickandmortyapi.com/api/episode?page=1");

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 &&xhr.status == 200){
        var json = JSON.parse(xhr.responseText);

        for(var i = 0; i <json.results.length; i++){

            var col = document.createElement("div");
            col.setAttribute("class", "col-12 col-md-6 col-lg-3 my-2")

            var card = document.createElement("div");
            card.setAttribute("class", "card");
            card.addEventListener("mouseover", function(){
                this.style.transform = "scale(1.05)";
                this.style.boxShadow = "0 8px 20px rgba(0,0,0,0.6)";
                this.style.transition = "all 0.3s ease";
            });
            card.addEventListener("mouseout", function(){
                this.style.transform = "scale(1)";
                this.style.transition = "none";
            });

            var cardhead = document.createElement("div");
                var ep = json.results[i].episode;
                var epNum = parseInt(ep.slice(1,3));
                if(epNum % 2 === 0 ){
                    cardhead.setAttribute("class", "card-header bg-success text-white text-center");
                    cardhead.textContent = ep;
                }
                else{
                    cardhead.setAttribute("class", "card-header bg-dark text-white text-center");
                    cardhead.textContent = ep;
                }

            

            var ul = document.createElement("ul");
            ul.setAttribute("class", "list-group list-group-flush");

            var li1 = document.createElement("li");
            li1.setAttribute("class", "list-group-item text-center");
            li1.textContent = json.results[i].name;

            var li2 = document.createElement("li");
            li2.setAttribute("class", "list-group-item text-center");
            li2.textContent = json.results[i].air_date;


            ul.appendChild(li1);
            ul.appendChild(li2);
        

            card.appendChild(cardhead);
            card.appendChild(ul);

            col.appendChild(card);

            document.getElementById("episoderow").appendChild(col);
        }
    }
};
xhr.send(null);