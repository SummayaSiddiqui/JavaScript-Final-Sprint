fetch("./houses.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((house) => {
      console.log(getAddress(house));
      console.log(getStatus(house));
    });
  })

  .catch((error) => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

function getAddress(house) {
  return `${house.Staddress}, ${house.city}, ${house.PostalCode}, ${house.country}.`;
}

function getStatus(house) {
  switch (house.Status) {
    case "vacant":
      return `HOUSE ID: ${house.houseId} - Available for a viewing - The listed price is $${house.price} has ${house.bedrooms} bedrooms and ${house.bathrooms} bathrooms.`;
      break;
    case "sold":
      return `HOUSE ID: ${house.houseId} - Sold Out - The listed price was $${house.price} has ${house.bedrooms} bedrooms and ${house.bathrooms} bathrooms.`;
      break;
    default:
      return `HOUSE ID: ${house.houseId} - Decision Pending - The listed price is $${house.price} has ${house.bedrooms} bedrooms and ${house.bathrooms} bathrooms.`;
  }
}
