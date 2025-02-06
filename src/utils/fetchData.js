function fetachData() {
  return new Promise((resolve, reject) => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network no responding");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

let productData;

async function fetchAndDisplayProducts() {
  try {
    productData = await fetachData();

    productData.forEach((prod, index) => {
      console.log(`Product[${index+1}]:`, prod);
    });
  } catch (error) {
    console.log(`Error fetching data ${error}`);
  }
}

fetchAndDisplayProducts();

export {productData};