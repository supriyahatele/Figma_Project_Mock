
import './App.css'
import { Details } from './components/Details'
import { Events } from './components/Events'
import { FandAndLogo } from './components/FandAndLogo'
import { FAQ } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { RoadMap } from './components/RoadMap'

import { TokenNomics } from "./components/TokenNomics"

function App() {
  

  return (
    <>
    {/* bg-[#0a0a0a] */}
    <div className="w-[1512px] h-auto bg-[#0a0a0a] ">
       <Header/>
        <Details/>
        <Events/>
     <TokenNomics/>
     <RoadMap/>
     <FandAndLogo/>
     <Footer/>
    </div>
    </>
  )
}

export default App
