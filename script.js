// Write your JavaScript code here!
//helperFunctions = require('./scriptHelper.js');

window.addEventListener("load", function() {
   
    // Fetch JSON data and display
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
   })
   

   // Select all fields from form
   let form = document.querySelector('form');
   let pilot = document.querySelector('input[name="pilotName"]');
   let copilot = document.querySelector('input[name="copilotName"]');
   let fuelLevel = document.querySelector('input[name="fuelLevel"]');
   let cargoMass = document.querySelector('input[name="cargoMass"]');

   form.addEventListener("submit", function (event) {

      event.preventDefault();
      
      /*helperFunctions.validateInput(copilot)
      helperFunctions.validateInput(fuelLevel)
      helperFunctions.validateInput(cargoMass)*/
      
      if (pilot.value === "" || copilot.value === "" || cargoMass.value === "" || fuelLevel.value === "") {
         alert("All fields are required!");
      }
      
     if (isNaN(pilotName.value) || isNaN(copilotName.value)){
        alert("Pilot & Co-pilot need to be human names, not integers!");
        event.preventDefault();
     }



     //validate cargo and fuel inputs
      if (isNaN(cargoMass.value) || isNaN(fuelLevel.value)) {
         alert("Enter a number in cargo mass and fuel level.");
      }

      formSubmission(document, pilot.value, copilot.value, fuelLevel.value, cargoMass.value)
      
      
      //validate fuel conditions. And update DOM
      /*if(fuelLevel.value < 10000){
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`
         document.getElementById("fuelStatus").innerHTML = `There is not enough fuel for the journey.`
         document.getElementById("launchStatus").style.color = "red"
         document.getElementById("faultyItems").style.visibility = "visible"
      }
      // validate cargo conditions. And update DOM
      if(cargoMass.value > 10000){
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`
         document.getElementById("cargoStatus").innerHTML = `There is too much mass for the shuttle to take off.`;
         document.getElementById("launchStatus").style.color = "red"
         document.getElementById("faultyItems").style.visibility = "visible"
      }
      
      
      // validate fuel and cargo conditions. And update DOM
      if(fuelLevelInput.value > 10000 && cargoMassInput.value <10000){
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch.`
         document.getElementById("launchStatus").style.color = "green"
      }
      // update name and status
      if (pilot.value && copilot.value){
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} is ready for launch`
         document.getElementById("faultyItems").style.visibility = "visible"
      }*/

   });
});