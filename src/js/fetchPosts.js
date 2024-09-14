export const fetchPosts = (perPage) => {
  const posts = fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${perPage}`
  );
  return posts;
};
