// Write your helper functions here!
require('isomorphic-fetch');

//function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

   
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
//}

function validateInput(testInput) {
  
    if (testInput.value === "" ) {
         return "Empty"
      }
   if(typedef(testInput.value) == 'Number'){

      return "Is a Number"
   }
   if(typedef(testInput.value) != 'Number'){

      return "Not a Number"
   }
    //if (isNaN(testInput.value)){

   //    window.alert("Enter string for pilot and co-pilot names and numbers for fuel and cargomass");
   //  }
   
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
       
    
      //validate fuel level condition

     if(fuelLevel.value < 10000){
         document.getElementById("launchStatus").innerHTML = `Shuttle Not ready for Launch.`
         document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch.`
         document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)"
         document.getElementById("faultyItems").style.visibility = "visible"
      }
      
      // validate cargo conditions. And update DOM
      
      if(cargoLevel.value > 10000){
         document.getElementById("launchStatus").innerHTML = `Shuttle Not ready for Launch.`
         document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch.`;
         document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)"
         document.getElementById("faultyItems").style.visibility = "visible"
      }
      
      
      // validate fuel and cargo conditions. And update DOM
      if(fuelLevel.value > 10000 && cargoLevel.value <10000){
         document.getElementById("launchStatus").innerHTML = `Shuttle is Ready for Launch.`
         document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)"
      }
      // update name and status
      if (pilot.value && copilot.value){
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch`
         document.getElementById("faultyItems").style.visibility = "visible"
      }
   
}

async function myFetch() {

   /* // Fetch JSON data and display
    let listedPlanetsResponse = fetch("https://handlers.education.launchcode.org/static/planets.json")

    listedPlanetsResponse.then(function(result){
        let listedPlanets = result
      listedPlanets.json().then(function(json){
         const container = document.getElementById("missionTarget");
         
            container.innerHTML += `
            <div class="planetInfo">
               <h1> Mission Destination </h1>
               <ol>
                  <li>Name: ${json[3].name}</li>
                  <li>Diameter: ${json[3].diameter}</li>
                  <li>Star: ${json[3].star}</li>
                  <li>Distance: ${json[3].distance}</li>
                  <li>Moons: ${json[3].moons}</li>
               </ol>
            </div>
            <div>
               <img class="image" src="${json[3].image}">
            </div>
            `
         
      })
   }) */
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        
         response.json().then(function(json){
         const container = document.getElementById("missionTarget");
         
            container.innerHTML += `
            <div class="planetInfo">
               <h1> Mission Destination </h1>
               <ol>
                  <li>Name: ${json[3].name}</li>
                  <li>Diameter: ${json[3].diameter}</li>
                  <li>Star: ${json[3].star}</li>
                  <li>Distance: ${json[3].distance}</li>
                  <li>Moons: ${json[3].moons}</li>
               </ol>
            </div>
            <div>
               <img class="image" src="${json[3].image}">
            </div>
            `
         
      });


    return planetsReturned;
}

/*function pickPlanet(planets) {
}
*/

try{
//module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
//module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
}
catch(e){

}
