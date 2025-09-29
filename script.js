/*  <div class="col-12 col-md-4 col-lg-3 my-2">
     <div class="card w-100">
  <img src="..." class="card-img-top w-100" >
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <a href="#" class="btn btn-primary">Information</a>
  </div>
</div>
 </div> */

 var xhr = new XMLHttpRequest();

 xhr.open("get", "https://rickandmortyapi.com/api/character/?page=1");

 xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var json = JSON.parse(xhr.responseText);

        for(var i = 0; i < json.results.length; i++){

            var col = document.createElement("div");
            col.setAttribute("class", "col-12 col-md-6 col-lg-3 my-2");

            var card = document.createElement("div");
            card.setAttribute("class", "card w-100");

            var img = document.createElement("img");
            img.setAttribute("src", json.results[i].image);
            img.setAttribute("class", "card-img-top w-100");

            var cardbody = document.createElement("div");
            cardbody.setAttribute("class", "card-body");

            var h5 = document.createElement("h5");
            h5.setAttribute("class", "card-title");
            h5.innerHTML = json.results[i].name;

            var ul = document.createElement("ul");

            var li1 = document.createElement("li");
            li1.innerHTML = json.results[i].gender;

            var li2 = document.createElement("li");
            li2.appendChild(document.createTextNode(json.results[i].location.name));

            var li3 = document.createElement("li");
            if(json.results[i].type.length == 0){
                li3.appendChild(document.createTextNode("Not known"));
            }else{
                li3.appendChild(document.createTextNode(json.results[i].type));
            }

            var a = document.createElement("a");
            a.setAttribute("href", "#");
            a.setAttribute("class", "btn btn-dark");
            a.appendChild(document.createTextNode("Information"));

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);

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
 