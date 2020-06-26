fetchHeadlines = () => {
  fetch("https://devtest.equisolve-dev.com/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.sort((a, b) => {
        let da = new Date(a.published_at),
          db = new Date(b.published_at);
        return db - da;
      });

      data.forEach((headlines) => {
        let li = document.createElement("li");
        li.classList.add("title");
        li.innerText = `${headlines.published_at}: ${headlines.title}`;
        document.querySelector(".headlines").appendChild(li);
      });
    })
    .catch(function (err) {
      console.log(err);
    });
};
