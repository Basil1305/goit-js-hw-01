import _ from "lodash";
import "./style.css";
import listIt from "./list-item.hbs";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}
document.body.appendChild(component());
