const getTrelloData = async () => {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json());
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());

  return {
    todos,
    users
  }
}

const runTrelloApplication = async () => {
  const { users, todos } = await getTrelloData();
  console.log(users,todos)
  

  // Write your code

}

runTrelloApplication()