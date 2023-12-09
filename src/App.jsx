import "./App.css";
import Header from "./Component/Header";
import Blogs from "./Component/Blogs"
import Footer from "./Component/Footer";

function App() {
  console.log("Checking");
  return (
    <div>
      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
