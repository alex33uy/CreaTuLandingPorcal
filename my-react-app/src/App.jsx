import Navbar from "./components/NavBar"
import CardWidget from "./components/CardWidget"
import ItemListContainer from "./components/ItemListContainer"

function App() {

  return (
    <>
      <Navbar/>

      <ItemListContainer/>

      <div style={{ padding: "20px" }}>
        <CardWidget
          title="Producto destacado"
          description="Aqui iran productos"
          image=""
        />
      </div>
    </>
  )
}

export default App
