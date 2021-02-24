const prompt = require("prompt-sync")();
 let InitialOdemter = +prompt( " please Enter the initial odemeter");
 let FinalOdemter = +prompt(" please Enter Final Odemter");
 let  GasoilConsumed = +prompt( "  please Enter total Gas oil  gallon consumed");
  let milePerGallon = (FinalOdemter-InitialOdemter)/GasoilConsumed;
  console.log(milePerGallon);