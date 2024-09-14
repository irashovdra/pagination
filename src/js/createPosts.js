export const createPostsList = (posts) => {
  const postCart = posts
    .map((post) => {
      return `
        <li class="posts__item">
        <h2 class="posts__id">${post.id}</h2>
    <p class="posts__title">${post.title}</p>
        </li>`;
    })
    .join("");
  return postCart;
};
