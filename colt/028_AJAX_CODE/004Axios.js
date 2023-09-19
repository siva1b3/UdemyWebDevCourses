// ! create a get request in Axios
const request = axios.get("https://swapi.dev/api/people/1/");
request
  .then((responseData) => {
    console.table(responseData.data);
  })
  .catch((err) => console.log(err));

// *  create async request uisng axios
async function getStarWarsCharaterData(id) {
  try {
    const req = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(req.data);
  } catch (err) {
    console.log(err);
  }
}
getStarWarsCharaterData(2);
getStarWarsCharaterData(3);
