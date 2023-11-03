import { BrowserRouter } from "react-router-dom";
import { About, Experience, Hero, Navbar, Team, Contact} from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-blue">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About/>
      <Experience/>
      <Team/>
      <div className="relative z-0">
        <Contact/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
