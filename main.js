// El geometrizador
const PI = 3.14;

const calcCircumfrence = (radius) => {
  console.log(`La circunferencia es ${radius * (PI * 2)}`);
};

calcCircumfrence(4);

const calcArea = (radius) => {
  console.log(`El área es ${PI * radius ** 2}`);
};

calcArea(4);

// La calculadora de la edad del cachorro

const calculateDogAge = function (age, typeToConv) {
  if (typeToConv === "Humano") {
    console.log(`Tu perrito tiene ${age * 7} años en edad humana.`);
  } else if (typeToConv === "Perro") {
    console.log(`Tu perrito tiene ${age / 7} años en años de perro.`);
  } else {
    console.log(`Hubo un error.`);
  }
};

calculateDogAge(7, "Humano");
calculateDogAge(14, "Perro");
