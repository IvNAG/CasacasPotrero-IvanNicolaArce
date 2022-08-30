import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Proximamente Camisetas."}/>
    </>
  );
}

export default App;
