// Creating new Promise

// const promise = new Promise((resolve, reject) => {
//   const status = true;

//   if (status) {
//     resolve("Success");
//   } else {
//     reject("Error");
//   }
// });

// promise.then((data) => console.log(data)).catch((err) => console.log(err));

// ===============================================================================

// XMLHttpRequest

// const request = new XMLHttpRequest();

// request.open("GET", "https://www.omdbapi.com/?apikey=aa58f87f&s=hulk");

// request.onload = () => {
//   console.log(request.response);
// };

// request.responseType = "json";

// request.onerror = () => {
//   console.log("client error");
// };

// request.onabort = () => {
//   console.log("server error");
// };

// request.send();

// ===============================================================================

// Creating Fetch using XMLHttpRequest and Promise

const axios = {
  get: (link) =>
    new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.open("GET", link);

      request.responseType = "json";

      request.onload = () => {
        resolve(request.response);
      };

      request.onerror = () => {
        reject("Xato bizdan");
      };

      request.onabort = () => {
        reject("Xato serverdan");
      };

      request.send();
    }),
};

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
