let username = document.location.host;
username = username.substring(0, username.indexOf("."));
let title;
document.querySelectorAll("meta").forEach((e) => {
  if (e.getAttribute("property") == "og:title") {
    title = e.getAttribute("content");
  }
});

function makeElement(type, innerHTML, parent) {
  let e = document.createElement(type);
  e.innerHTML = innerHTML;
  parent.appendChild(e);
}

function f(e) {
  if (e == null) {
    return "N/A";
  } else {
    return e;
  }
}
