// FETCH and READ the people.json disk file

fetch("./houses.json")
  .then((response) => response.json())
  .then((data) => {
    // Create a container to hold the houses data
    const container = document.createElement("div");
    container.id = "houseContainer";

    // Loop through an array in the JSON data
    data.forEach((house) => {
      // Create a new div for each person
      const houseDiv = document.createElement("div");
      houseDiv.className = "house";

      // Add the person's data to the div
      houseDiv.innerHTML = `
        <h2>${gethouseID(house)}</h2>
        <p>Address: ${getAddress(house)}</p>
        <p>Listed Price ($): ${getprice(house)}</p>
        <p>Number of Bedrooms: ${getbedroom(house)}</p>
        <p>Number of Bathrooms: ${getbathroom(house)}</p>
        <p>House Status: ${getStatus(house)}</p>
      `;

      // Add the house's div to the container
      container.appendChild(houseDiv);

      // Also log the data to the console
      console.log(gethouseID(house));
      console.log(getAddress(house));
      console.log(getprice(house));
      console.log(getbedroom(house));
      console.log(getbathroom(house));
      console.log(getStatus(house));
    });

    // Add the container to the body of the HTML
    document.body.appendChild(container);
  })
  .catch((error) => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

function gethouseID(house) {
  return `House ID: ${house.houseId}`;
}

function getAddress(house) {
  return `${house.Staddress}, ${house.city}, ${house.PostalCode}, ${house.country}.`;
}

function getprice(house) {
  return `${house.price}`;
}

function getbedroom(house) {
  return `${house.bedrooms}`;
}

function getbathroom(house) {
  return `${house.bathrooms}`;
}

function getStatus(house) {
  switch (house.status) {
    case "vacant":
      return `Available for a veiwing.`;
      break;
    case "sold":
      return `Sold out.`;
      break;
    default:
      return `Decision Pending.`;
  }
}
