import style from "./detail.scss";

const component = () => {
  let h = document.createElement("header");
  let h2 = document.createElement("h2");
  h.append(h2);
  h2.innerHTML += "Detail";
  return h;
};

document.body.append(component());
