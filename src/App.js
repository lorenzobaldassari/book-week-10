import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wellcome from "./components/Wellcome";
import Library from "./components/Bookshelf";
import Booklist from "./components/Booklist";

function App() {
  return (
    <div id="app">
      <CustomNavbar />
      <Wellcome />
      {/* <Library /> */}
      <Booklist />
      <Footer />
    </div>
  );
}

export default App;
