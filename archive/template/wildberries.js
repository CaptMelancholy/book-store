const getWildberriesData = async () => {
  const products = await fetch('https://fakestoreapi.com/products').then((response) => response.json());
  const users = await fetch('https://fakestoreapi.com/users').then((response) => response.json());

  return {
    products,
    users
  }
}

const runWildberriesApplication = async () => {
  const { users, products } = await getWildberriesData();
  console.log(users,products)
  

  // Write your code

}

runWildberriesApplication()