// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:
export const drawTriangle = (length = 5) => {
  
    // ... write code ...
    for (let i = 0; i <= length; i++) {
      let output = "";
      for (let j = 0; j < i; j++) {
        output += "* ";
      }
      console.log(output);
    }
};

// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:
export const drawJavascriptWord = (word = "javascript") => {
  // ... write code ...
  for (let i = 0; i <= word.length; i++) {
    let toPrint = "";
    for (let j = 0; j < word.length - i; j++) {
      toPrint += "* ";
    }
    for (let j = word.length - i; j < word.length; j++) {
      toPrint += word[j].toUpperCase();
      toPrint += " ";
    }
    console.log(toPrint)
  }
};


// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
// const vehicles = [
//   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
//   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
//   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
// ];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
export const getVehiclesAndTopSpeed = (vehicles) => {
  return vehicles.map((vehicle) => {
    let topSpeed = 0;
    let speeds = vehicle.measuredSpeeds;
    for (let i = 0; i < speeds.length; i++) {
      if (speeds[i] > topSpeed) {
        topSpeed = speeds[i];
      }
    }

    let vehicleClone = JSON.parse(JSON.stringify(vehicle));
    vehicleClone.topSpeed = topSpeed;
    return vehicleClone;
  });
};