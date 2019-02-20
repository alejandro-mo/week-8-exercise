var newDiv = document.createElement("div");

    newDiv.className = "changeHeight changeBG";

    document.body.appendChild(newDiv);

    newDiv.style.backgroundColor = "blue";

var newH1 = document.createElement("h1");

    newH1.textContent = "armin and jessy";

    newDiv.appendChild(newH1);

var newDiv2 = document.createElement("div");

    newDiv2.id = "div2";
    newDiv2.style.backgroundColor = "red";
    newDiv2.style.height = "500px";
    newDiv2.style.width = "300px";

var newH2 = document.createElement("h2");

var txtNode = document.createTextNode("wassah");

    newH2.appendChild(txtNode);
    newDiv2.appendChild(newH2);
    document.body.appendChild(newDiv2);

var newImg = document.createElement("img");
    
    newImg.src = "https://doglers.com/wp-content/gallery/basset-hound-puppies/Basset-Hound-Puppies-Stills.jpg";
    newImg.alt = "basset hound puppy";
var newButton = document.createElement("button")

    newButton.type = "button";
    // using addEventListener was the way i found to add the onclick event
    newButton.addEventListener('click', function() {
    newImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCq9bmbRTjdTNRVzqtxmmiCHfOx39atdZwhgAm6g6m1BMhrU2phQ";
    newImg.alt = "sad basset hound puppy";

    });

var txtNode2 = document.createTextNode("click me");

    newButton.appendChild(txtNode2);
    document.body.appendChild(newButton);
    document.body.appendChild(newImg);
    
