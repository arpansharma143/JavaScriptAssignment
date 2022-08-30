fetch("https://gorest.co.in/public/v2/posts", {
  method: "GET",
}).then((response) =>
  response.json().then((res) => {
    console.log(res);
    for (let key of res) {
      document.write("Title => ", key.title, "</br>");
      document.write("userId => ", key.user_id, "</br>");
      document.write("____________________  </br>");
    }
  })
);
