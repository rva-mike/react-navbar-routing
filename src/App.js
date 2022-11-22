import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Home from "./components/Home";
import About from "./components/About"


function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break;
    case '/about':
      component = <About />
      break;
    case '/pricing':
      component = <Pricing />
      break;
    default:
      component = <Home />
      break;
  }
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
