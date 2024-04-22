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

//https://gist.github.com/PiJoules/7d78a95d53177468d479
function sort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
};

function f(e) {
  if (e == null) {
    return "N/A";
  } else {
    return e;
  }
}
