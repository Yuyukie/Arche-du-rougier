import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="root">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
