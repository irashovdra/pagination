import "./js/fetchPosts";
import "./js/createPosts";
import "./js/renderPosts";
import "./js/app";

// const postsList = document.querySelector(".posts");
// let perPage = 1;
// const moreBtn = document.querySelector(".more-btn");
// const posts = fetch(
//   `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${perPage}`
// )
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   console.log(data);
//   postsList.insertAdjacentHTML("beforeend", createPostsList(data));
// });

// const createPostsList = (posts) => {
//   const postCart = posts
//     .map((post) => {
//       return `
//         <li class="posts__item">
//         <h2 class="posts__id">${post.id}</h2>
//     <p class="posts__title">${post.title}</p>
//         </li>`;
//     })
//     .join("");
//   return postCart;
// };

// moreBtn.addEventListener("click", () => {
//   perPage++;
//   const updatedPosts = fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${perPage}`
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       postsList.insertAdjacentHTML("beforeend", createPostsList(data));
//     });
// });
