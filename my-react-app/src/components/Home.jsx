import "../styles/Home.css"
import { db } from "../firebase/config"

export default function Home() {
    console.log(db);
    return (
       <main className="landing">
      <div className="overlay">
        <div className="landing-content">
          <h1>Elegi tu estilo a cada momento</h1>
          <p>Productos originales · Envíos a todo el país</p>
          <button className="landing-btn">Ver catálogo</button>
        </div>
      </div>
    </main>
    )
}