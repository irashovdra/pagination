import { postRender } from "./renderPosts";
const moreBtn = document.querySelector(".more-btn");
let perPage = 1;
postRender(perPage);

moreBtn.addEventListener("click", () => {
  perPage++;
  postRender(perPage);
});
