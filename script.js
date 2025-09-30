
 var xhr = new XMLHttpRequest();

 xhr.open("get", "https://rickandmortyapi.com/api/character/?page=1");

 xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var json = JSON.parse(xhr.responseText);



        for(var i = 0; i < json.results.length; i++){

            var col = document.createElement("div");
            col.setAttribute("class", "col-12 col-md-6 col-lg-3 my-2");

            var card = document.createElement("div");
            card.setAttribute("class", "card w-100 bg-dark text-white");

            card.addEventListener("mouseover", function(){
                this.style.transform = "scale(1.05)";
                this.style.boxShadow = "0 8px 20px rgba(0,0,0,0.6)";
                this.style.transition = "all 0.3s ease";
            });
            card.addEventListener("mouseout", function(){
                this.style.transform = "scale(1)";
                this.style.boxShadow = "none";
            })
            

            var img = document.createElement("img");
            img.setAttribute("src", json.results[i].image);
            img.setAttribute("title", json.results[i].name);
            img.setAttribute("alt", json.results[i].name);
            img.setAttribute("class", "card-img-top w-100");

            var cardbody = document.createElement("div");
            cardbody.setAttribute("class", "card-body");

            var h5 = document.createElement("h5");
            h5.setAttribute("class", "card-title text-center ");
            h5.innerHTML = json.results[i].name;

            var ul = document.createElement("ul");
            ul.setAttribute("class", "list-group list-group-flush list-unstyled");

            var li1 = document.createElement("li");
            li1.setAttribute("class", "list-group-item bg-secondary text-white");
            li1.textContent = "Gender: " +json.results[i].gender;

            var li2 = document.createElement("li");
            li2.setAttribute("class", "list-group-item bg-secondary text-white");
            li2.textContent = "Location: " + json.results[i].location.name;

            var li3 = document.createElement("li");
            li3.setAttribute("class", "list-group-item bg-secondary text-white");
            if(json.results[i].type.length === 0){
                li3.textContent = "Type: ❌ Not know."
            }else{
                li3.textContent = "Type: " + json.results[i].type;
            }

            var li4 = document.createElement("li");
            li4.setAttribute("class", "list-group-item bg-secondary text-white mb-2");
            var status = json.results[i].status;
            if(status === "Alive"){
                li4.textContent = "Status: ✅ Alive ";
            }
            else if(status === "Dead"){
                li4.textContent = "Status: ❌ Dead";
                h5.style.color = "red";
            }
            else{
                li4.textContent = "Status: ❔";
            };

            



            var a = document.createElement("a");
            a.setAttribute("href", json.results[i].url);
            a.setAttribute("class", "btn btn-success");
            a.setAttribute("target", "_blank");
            a.appendChild(document.createTextNode("Information"));

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);

            cardbody.appendChild(h5);
            cardbody.appendChild(ul);
            cardbody.appendChild(a);

            card.appendChild(img);
            card.appendChild(cardbody);

            col.appendChild(card);

            document.getElementById("cardrow").appendChild(col);
            
        }
    }
 };
 xhr.send(null);
 