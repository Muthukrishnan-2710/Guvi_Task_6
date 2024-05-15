// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Get all the countries from Asia continent /region using Filter method
// Get all the countries with a population of less than 2 lakhs using Filter method
// Print the following details name, capital, flag, using forEach method
// Print the total population of countries using reduce method
// Print the country that uses US dollars as currency.

// calling the API using the Fetch method.

fetch ("https://restcountries.com/v3.1/all")
.then((resposne)=>resposne.json())
.then((data)=>{
// Get all the countries from Asia continent /region using Filter method

const Asiacountries = data.filter((country)=>country.region === "Asia")
console.log('countries in Asia:', Asiacountries);

// Get all the countries with a population of less than 2 lakhs using Filter method;

const population = data.filter((country)=> country.population < 2000000);
console.log("population is less than 2000000 :",population)

// Print the following details name, capital, flag, using forEach method

data.forEach((country)=>{
    console.log("Name:", country.name.common);
    console.log("Capital:",country.capital);
    console.log("flag", country.flags.png);
})

// Print the total population of countries using reduce method;

const totalpopulation = data.reduce((acc,country)=>
    acc + country.population,0);

console.log("Total population:",totalpopulation);

// Print the country that uses US dollars as currency;

const uscurrency = data.filter((country)=> 
    country.currencies ? country.currencies.USD : false
)
console.log("Country using the US doller:", uscurrency);
});

