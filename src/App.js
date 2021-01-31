import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
