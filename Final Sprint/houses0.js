// Fetch the JSON data using Fetch API

fetch("./houses.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((house) => {
      console.log(getAdress(house));
    });
  })

  .catch((error) => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

function getAdress(house) {
  return `${house.Staddress}, ${house.city}, ${house.PostalCode}, ${house.country}.`;
}
