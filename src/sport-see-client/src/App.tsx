import client from "./api/client";

const App = () => {

  client
  .getUser(18)
  .then(data => console.log(data))
  .catch(error => console.log(error));

  return <div className="app">App</div>;
};

export default App;
