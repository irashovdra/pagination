import { fetchPosts } from "./fetchPosts";
import { createPostsList } from "./createPosts";
const postsList = document.querySelector(".posts");

export const postRender = (perPage) => {
  fetchPosts(perPage)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      postsList.insertAdjacentHTML("beforeend", createPostsList(data));
    });
};
