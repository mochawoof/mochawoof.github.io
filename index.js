let repos = document.getElementById("repos");
  repos.innerHTML = "";
  fetch("//api.github.com/users/" + username + "/repos").then((r) => {
    if (r.status == 200) {
      r.text().then((t) => {
        let allRepos = JSON.parse(t);
        //sort repos
        allRepos.sort((a, b) => {
          if (a.updated_at != null && b.updated_at != null) {
            if (new Date(a.updated_at).getTime() > new Date(b.updated_at).getTime()) {
              return -1;
            } else {
              return 1;
            }
          } else {
            return 0;
          }
        });
        //for each repo
        allRepos.forEach((e) => {
          //get github url
          let url = e.html_url;
          //set it to its homepage if it has one
          if (e.homepage != null && e.homepage != "") {
            url = e.homepage;
          } else if (e.has_pages) {
            url = "//" + username + ".github.io/" + e.name;
          }
          //get license
          let license = "N/A";
          if (e.license != null) {
            license = e.license.spdx_id;
          }
          //element title and style (for coloring)
          let title = e.full_name;
          let style = "";
          if (e.archived) {
            title = "Archived";
            style = "color: #b8860b;"
          }
          if (url != null) {
            makeElement("tr", `
              <td><a style="${style}" href="${url}" title="${title}">${e.name}</a></td>
              <td>${f(e.description)}</td>
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
