let repos = document.getElementById("repos");
  repos.innerHTML = "";
  fetch("//api.github.com/users/" + username + "/repos").then((r) => {
    if (r.status == 200) {
      r.text().then((t) => {
        let allRepos = JSON.parse(t);
        allRepos.forEach((e) => {
          let url = e.html_url;
          if (e.homepage != null && e.homepage != "") {
            url = e.homepage;
          } else if (e.has_pages) {
            url = "//" + username + ".github.io/" + e.name;
          }
          let license = "N/A";
          if (e.license != null) {
            license = e.license.spdx_id;
          }
          if (url != null) {
            makeElement("tr", `
              <td><a href="${url}">${e.name}</a></td>
              <td>${license}</td>
              <td>${f(e.language)}</td>
              <td>${e.watchers}</td>
              <td>${e.stargazers_count}</td>
              <td>${new Date(e.updated_at).toLocaleString()}</td>
            `, repos);
          }
        });
      });
    } else {
      makeElement("li", "Couldn't get repos!", repos);
    }
  });
