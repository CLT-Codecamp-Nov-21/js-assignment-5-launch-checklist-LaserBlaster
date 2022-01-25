// Write your JavaScript code here!
/*try{
helper = require('./scriptHelper.js')
}catch(e){

}*/

window.addEventListener("load", function() {
   let listedPlanets;
   
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
       
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
      const planet = pickPlanet(listedPlanets);
      //console.log(planet);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   });
      
   // Select all fields from form
   let form = document.querySelector('form');
   let pilot = document.querySelector('input[name="pilotName"]');
   let copilot = document.querySelector('input[name="copilotName"]');
   let fuelLevel = document.querySelector('input[name="fuelLevel"]');
   let cargoMass = document.querySelector('input[name="cargoMass"]');

   form.addEventListener("submit", function (event) {

      event.preventDefault();
   
      
      if(validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty"  
      || validateInput(fuelLevel.value) === "Empty"  || validateInput(cargoMass.value) === "Empty"  === "") {
         alert("All fields are required!");
      }
      
     if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number"){
        alert("Pilot & Co-pilot need to be human names, not integers!");
        event.preventDefault();
     }

     //validate cargo and fuel inputs
      if (validateInput(cargoMass.value) === "Not a Number" || validateInput(fuelLevel.value) === "Not a Number") {
         alert("Enter a number in cargo mass and fuel level.");
      }
      
      /*launchStatus = document.getElementById("launchStatus");
     // fuelStatus = document.getElementById("fuelStatus");
     // faultyItems = document.getElementById("faultyItems");
     // cargoStatus = document.getElementById("cargoStatus");
     // pilotStatus = document.getElementById("pilotStatus");
     // copilotStatus = document.getElementById("copilotStatus");*/
      
      //document_list = [ launchStatus, fuelStatus, faultyItems, cargoStatus, pilotStatus, copilotStatus ]


      formSubmission(document, pilot, copilot, fuelLevel, cargoMass);
});


  


});





 