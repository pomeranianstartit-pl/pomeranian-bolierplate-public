export function Exercise() {

function canDrive1 (age, hasDriverLicense, hasCar) {
let resultRomTenary = '';

if (age < 18) resultRomTenary = "You are too young to drive.";
if (age >= 18 && hasDriverLicense ) resultRomTenary = "You can't drive without a driver's license.";
if (age >= 18 && hasDriverLicense && hasCar ) resultRomTenary = "You can drive your car!";
if (!hasDriverLicense) resultRomTenary = "You can't drive without a driver's license.";
if (!hasCar) resultRomTenary = "You can drive a rental car.";

 function hasEnough(hasEnough) {
  if (hasEnough) {
     return true
  } else {
     return false
  } 
};
};
};