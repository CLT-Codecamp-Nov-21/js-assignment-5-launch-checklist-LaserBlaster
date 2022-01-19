// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
}

function validateInput(testInput) {
  
    if (testInput.value === "" ) {
         window.alert("All fields are required!");
      }
    if (isNaN(testInput.value)){

       window.alert("Enter string for pilot and co-pilot names and numbers for fuel and cargomass");
     }
   
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
     
      validateInput(pilot)
      validateInput(copilot)
      validateInput(fuelLevel)
      validateInput(cargoLevel)
       
    
     if(fuelLevel.value < 10000){
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`
         document.getElementById("fuelStatus").innerHTML = `There is not enough fuel for the journey.`
         document.getElementById("launchStatus").style.color = "red"
         document.getElementById("faultyItems").style.visibility = "visible"
      }
      // validate cargo conditions. And update DOM
      if(cargoLevel.value > 10000){
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`
         document.getElementById("cargoStatus").innerHTML = `There is too much mass for the shuttle to take off.`;
         document.getElementById("launchStatus").style.color = "red"
         document.getElementById("faultyItems").style.visibility = "visible"
      }
      
      
      // validate fuel and cargo conditions. And update DOM
      if(fuelLevel.value > 10000 && cargoLevel.value <10000){
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch.`
         document.getElementById("launchStatus").style.color = "green"
      }
      // update name and status
      if (pilot.value && copilot.value){
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} is ready for launch`
         document.getElementById("faultyItems").style.visibility = "visible"
      }
   
}

/*async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}
*/
//module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
//module.exports.pickPlanet = pickPlanet; 
//module.exports.myFetch = myFetch;
