import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import HomePage from "./views";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
