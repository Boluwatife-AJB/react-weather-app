export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd08c69e912msh8a63cca67fd80bdp1804fdjsna08d6952cb7c',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
