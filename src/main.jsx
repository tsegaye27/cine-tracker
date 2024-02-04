import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'
// import StarRating from "./components/StarRating";
import TextExpander from "./components/TextExpander";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating maxRating={5} /> */}
    <TextExpander>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque
      fuga similique dolor error et asperiores consequatur eos vitae minus!
    </TextExpander>
    <TextExpander collapsedNumWords={8} color="blue">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque
      fuga similique dolor error et asperiores consequatur eos vitae minus!
    </TextExpander>
    <TextExpander className="box" expand={true}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque
      fuga similique dolor error et asperiores consequatur eos vitae minus!
    </TextExpander>
  </React.StrictMode>
);
