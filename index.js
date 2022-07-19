// The Fortune Teller

const tellFortune = (childrenNumber, partnersName, location, job) => {
  console.log(
    `You will be a ${job} in ${location}, and married to ${partnersName} with ${childrenNumber} kids.`
  );
};
tellFortune(4, `Fifka`, `Berlin`, `Actor`);
tellFortune(1, `Bella`, `Polska`, `weterynarz`);
tellFortune(10, `Effi`, `Portugalia`, `lekarz`);
tellFortune(0, `Klara`, `Jemen`, `drag queen`);

// The Puppy Age Calculator

const calculateDogAge = (age, convert) => {
  const puppysRealAge = age * 7;
  const humanRealAge = age / 7;
  if (convert === "dogToHuman") {
    console.log(`Your human is ${humanRealAge} years old in human years`);
  } else if (convert === "humanToDog") {
    console.log(`Your doggie is ${puppysRealAge} years old in dog years`);
  }
};
calculateDogAge(5, "dogToHuman");
calculateDogAge(12, "humanToDog");
calculateDogAge(1, "humanToDog");

// The Lifetime Supply Calculator

// The Geometrizer
const calcCircumfrence = (radius) => {
  const diameter = radius * 2;
  console.log(`The circumference is ${diameter * Math.PI}`);
};
calcCircumfrence(3);
const calcArea = (radius) => {
  console.log(`The area is ${Math.PI * Math.pow(radius, 2)}`);
};
calcArea(3);
// The Temperature Converter
const celsiusToFahrenheit = (temp) => {
  const farenheit = temp * 1.8 + 32;
  console.log(`${temp}°C is ${farenheit}°F`);
};
celsiusToFahrenheit(31);

const fahrenheitToCelsius = (temperature) => {
  const celsius = (temperature * 9) / 5 + 32;
  console.log(`${temperature}°F is ${celsius}°C`);
};
fahrenheitToCelsius(20);
