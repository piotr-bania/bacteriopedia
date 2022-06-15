import './styles/App.css'
import Header from "./components/Header"
import './styles/Header.css'
import Scene1 from "./components/Scene1"
import './styles/Scene1.css'

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

function App() {
  return (
    <div>
      <Header />
      <Canvas id="canvas">
        <Suspense fallback={null}>
          <Scene1 />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
