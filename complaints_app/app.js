//default limit
let limit = 10;

var policeData;

var mainContainer;
var divOne;
var divTwo;
var divThree;
var v;
v = document.createElement('input');


// set constants to target later
const manhattan = document.getElementById("manhattan")
const brooklyn = document.getElementById("brooklyn")
const queens = document.getElementById("queens")
const statenIsland = document.getElementById("statenIsland")
const bronx = document.getElementById("bronx")

// Main function that handles the everything
function getData(event){
    console.log(event.target.id)
    console.log(event);
    event.preventDefault();

  // user input needs to be stored somewhere
  let userInput = +document.getElementById("userInput").value;
  if (userInput === 0) {
    userInput = limit;
  }
  console.log(userInput);
  mainContainer = document.getElementById("data");
  mainContainer.setAttribute('id','mainP')
  while (mainContainer.hasChildNodes()) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  // fetching data
  fetch(
    `https://data.cityofnewyork.us/resource/cwy2-px8b.json?agency=NYPD&borough=${event.target.id.toUpperCase()}&$limit=${userInput}`
  )
    .then((response) => response.json())
    .then((data) => (policeData = data))
    .then(() => {
      for (i = 0; i < policeData.length; i++) {

        //divs are being created
         divThree = document.createElement("div");
        //
        divThree.classList.add("myClass");
         divOne = document.createElement("div");
         divTwo = document.createElement("div");

         // This came from SOF 
         v = document.createElement('input');
        v.setAttribute('id',"btn")
        //
        divThree.innerHTML = `resolution description: ${policeData[i].resolution_description}`;
        divOne.innerHTML = ` borough: ${policeData[i].borough} `;
        divTwo.innerHTML = ` descriptor: ${policeData[i].descriptor}`;
        // SOF
        v.type="button";
        v.value="Button ";
        //
        mainContainer.appendChild(divThree);
        mainContainer.appendChild(divOne);
        mainContainer.appendChild(divTwo);
        mainContainer.appendChild(v)
        // LoopTest();

        
      }
    })
    .catch((err) => console.log(err));
  

}
document.addEventListener("click",(event)=>{
    if (event.target && event.target.id =="btn"){
        event.preventDefault();
        console.log("clicked new button");
    incognito();
    }
   
})
manhattan.addEventListener("click",getData)
brooklyn.addEventListener("click", getData)
queens.addEventListener("click", getData)
statenIsland.addEventListener("click", getData)
bronx.addEventListener("click", getData)



    function incognito(){
        const rButton = document.getElementById('mainP').childNodes;
        // var x;
        for(i=0; i< rButton.length; i++){
            if (rButton[i].style.visibility == 'visible' && rButton[i].classList.contains('myClass')){
                rButton[i].style.visibility = 'hidden';
            }else {
                rButton[i].style.visibility = 'visible';
            }
            
        }
        // console.log(rButton.length);
        // rButton[].style.visibility = 'visible';
    //    myClass.style.visibility = "visible";
      }
    