const axios = require("axios");

const showProducts = async () => {
  const response = await axios.get("https://dummyjson.com/products");
  console.log(response.data);
};

showProducts();
