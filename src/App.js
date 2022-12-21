import './App.css';




function App() {

  fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
  .then((response) => response.json())
  .then((data) => console.log(data));

  return (
   <article>
    <h1></h1>
    <span></span>
   </article>
  );
}

export default App;
