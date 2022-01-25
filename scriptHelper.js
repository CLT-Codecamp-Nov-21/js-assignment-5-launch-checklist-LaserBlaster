// Write your helper functions here!
/*try{
require('isomorphic-fetch');
}catch(e){

}*/

//export { addDestinationInfo, validateInput, formSubmission, pickPlanet, myFetch  };

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget");

   
   missionTarget.innerHTML += `
   <div>
   <ol>        
         <li>Name: ${name}</li>
         <li>Diameter: ${diameter}</li>
         <li>Star: ${star}</li>
         <li>Distance: ${distance}</li>
         <li>Moons: ${moons}</li>
   </ol>
   <img src=${imageUrl}></img>
   </div>
`
   
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
       
    
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
      if(fuelLevel.value >= 10000 && cargoLevel.value <= 10000){
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch.`
         document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)"
      }
      // update name and status
      if (pilot.value && copilot.value){
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch`
         document.getElementById("faultyItems").style.visibility = "visible"
   
}
}

function validateInput(testInput) {
   //document.addEventListener("submit", function (event) {
    //   event.preventDefault();
   
               /*const pilotName = document.querySelector('input[name="pilotName"]').value;
               const copilotName = document.querySelector('input[name="copilotName"]').value;
               const fuelLevel = document.querySelector('input[name="fuelLevel"]').value;
               const cargoMass = document.querySelector('input[name="cargoMass"]').value;
               let emptyFields = "";
               let nonAlpha = "";
               let nonNumeric = "";*/
   
               if (!testInput) {
                   return "Empty";
               //emptyFields = "All fields must be filled in.\n";
               }
               if(isNaN(testInput)){
                   return "Not a Number"
               }
               if(!isNaN(testInput)){
                   return "Is a Number"
               }
   
               /*if (pilotName.match(/[0-9]/g) != null || copilotName.match(/[0-9]/g) != null) {
               nonAlpha = "Pilots names must be alpha characters.\n";
               }
               
               if (isNaN(fuelLevel) || isNaN(cargoMass)) {
               nonNumeric = "Fuel levels and Cargo mass must be numeric.\n";
               }
               
               if (emptyFields || nonAlpha || nonNumeric) {
               let errorMessage = `${emptyFields}${nonAlpha}${nonNumeric}`;
               alert(errorMessage);
               }
   
               else { formSubmission(event, pilotName, copilotName, fuelLevel, cargoMass); }
   
    });*/
   }

   async function myFetch() {
      let planetsReturned; 
      
      
      
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });
      
      return planetsReturned;
        
      
      
      }


function pickPlanet (planetaryData) {
   //window.addEventListener("load", () => {
   //    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    //       response.json().then(function (planetaryData) {
    //           const missionTarget = document.getElementById("missionTarget");
                   let index = Math.floor(Math.random() * (planetaryData.length));
                   return planetaryData[index]
                      // missionTarget.innerHTML += `
                        /*   <div>                            
                               <h2>Mission Destination</h2>   
                                   <ol>        
                                       <li>Name:       ${planetaryData[index].name}</li>
                                       <li>Diameter:   ${planetaryData[index].diameter}</li>
                                       <li>Star:       ${planetaryData[index].star}</li>
                                       <li>Distance:   ${planetaryData[index].distance}</li>
                                       <li>Moons:      ${planetaryData[index].moons}</li>
                                   </ol>
                                   <img id="missionTarget img" src=${planetaryData[index].image}></img>
                               </div>
                           `;*/
         //  });
     //  });
  // });
}

try{
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
}catch(e){

}


