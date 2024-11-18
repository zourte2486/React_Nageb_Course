import ReactDOM from "react-dom/client";
import Content from "./Content";
import "./style.css";
import NavBar from "./Components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <di v className="container">
    <NavBar />
    <Content />
  </di>
);
