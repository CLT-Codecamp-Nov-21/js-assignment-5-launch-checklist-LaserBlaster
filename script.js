// Write your JavaScript code here!
/*try{
helper = require('./scriptHelper.js')
}catch(e){

}*/

//import { addDestinationInfo, validateInput, formSubmission, pickPlanet, myFetch } from './scriptHelper.js';
window.addEventListener("load", function() {
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
       
   let listedPlanetsResponse = myFetch();
           listedPlanetsResponse.then(function (response) {response.json().then(function (listedPlanets) {          
               let index = pickPlanet(listedPlanets);
                   console.log(myFetch());
                   //console.log(typeof jsonObject);
                   //console.log(listedPlanets); 
               let name = listedPlanets[index].name
               let diameter = listedPlanets[index].diameter
               let star = listedPlanets[index].star
               let distance = listedPlanets[index].distance
               let moons = listedPlanets[index].moons
               let imageUrl = listedPlanets[index].image 
               addDestinationInfo(name, diameter, star, distance, moons, imageUrl);
       })
   });

       
});

//pickPlanet();
                           
validateInput();






/*


helperFunctions = require('./scriptHelper.js');

window.addEventListener("load", function() {
   

   // Select all fields from form
   let form = document.querySelector('form');
   let pilot = document.querySelector('input[name="pilotName"]');
   let copilot = document.querySelector('input[name="copilotName"]');
   let fuelLevel = document.querySelector('input[name="fuelLevel"]');
   let cargoMass = document.querySelector('input[name="cargoMass"]');

   form.addEventListener("submit", function (event) {

      event.preventDefault();
      
      
      /*helperFunctions.validateInput(pilot.value)
      helperFunctions.validateInput(copilot.value)
      helperFunctions.validateInput(fuelLevel.value)
      helperFunctions.validateInput(cargoMass.value)*/

      /*
      
      if(helperFunctions.validateInput(pilot.value) === "Empty" || helperFunctions.validateInput(copilot.value) === "Empty"  
      || helperFunctions.validateInput(fuelLevel.value) === "Empty"  || helperFunctions.validateInput(cargoMass.value) === "Empty"  === "") {
         alert("All fields are required!");
      }
      
     if (helperFunctions.validateInput(pilot.value) === "Is a Number" || helperFunctions.validateInput(copilot.value) === "Is a Number"){
        alert("Pilot & Co-pilot need to be human names, not integers!");
        event.preventDefault();
     }

     //validate cargo and fuel inputs
      if (helperFunctions.validateInput(cargoMass.value) === "Not a Number" || helperFunctions.validateInput(fuelLevel.value) === "Not a Number") {
         alert("Enter a number in cargo mass and fuel level.");
      }
      
      launchStatus = document.getElementById("launchStatus");
      fuelStatus = document.getElementById("fuelStatus");
      faultyItems = document.getElementById("faultyItems");
      cargoStatus = document.getElementById("cargoStatus");
      pilotStatus = document.getElementById("pilotStatus");
      copilotStatus = document.getElementById("copilotStatus");
      
      document_list = [ launchStatus, fuelStatus, faultyItems, cargoStatus, pilotStatus, copilotStatus ]


      helperFunctions.formSubmission(document_list, pilot, copilot, fuelLevel, cargoMass);

      myFetch();
      
      
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

 //  });
//});
