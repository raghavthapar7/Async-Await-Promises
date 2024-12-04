"use strict";

const getDataFunction = async function (country) {
  // This returns a promise
  const data = await fetch(`https://restcountries.com/v3.1/name/${country}`);

  const jsonData = await data.json();
  console.log(jsonData);
};

const getDataFunctionThen = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((data) => data.json())
    .then((response) => console.log(response))
    .catch((error) => console.log(`There is some error here`));
};

getDataFunction("Republic of India");
getDataFunctionThen("Singapore");
