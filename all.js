//get username and page title
let username = document.location.host;
username = username.substring(0, username.indexOf("."));
let title;
document.querySelectorAll("meta").forEach((e) => {
  if (e.getAttribute("property") == "og:title") {
    title = e.getAttribute("content");
  }
});

//favicon
let icon = document.createElement("link");
icon.rel = "icon";
icon.href = "//github.com/" + username + ".png";
document.head.appendChild(icon);

function makeElement(type, innerHTML, parent) {
  let e = document.createElement(type);
  e.innerHTML = innerHTML;
  parent.appendChild(e);
}

//format a possibly null value to be user friendly
function f(e) {
  if (e == null) {
    return "N/A";
  } else {
    return e;
  }
}
