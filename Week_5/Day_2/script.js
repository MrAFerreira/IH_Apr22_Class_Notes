//Axios
/* 
function getCountries() {
  axios
    .get('https://restcountries.com/v2/all')
    .then((countries) => console.log(countries.data))
    .catch((err) => console.log(err));
}

getCountries();
 */

const getCountryInfo = (countryName) => {
  axios
    .get(`https://restcountries.com/v2/name/${countryName}`)
    .then((response) => {
      console.log('Response from API is: ', response);
      const countryDetail = response.data[0];
      document.getElementById('country-name').innerText = countryDetail.name;
      document.getElementById('country-capital').innerText = countryDetail.capital;
      document.getElementById('country-flag').setAttribute('src', countryDetail.flags.png);
    })
    .catch((err) => console.log(err));
};

document.getElementById('get-country-btn').addEventListener('click', () => {
  const userInput = document.getElementById('country-name-input').value;
  getCountryInfo(userInput);
});
