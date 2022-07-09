const blogPostObj = (title, body, author) => ({
  title,
  body,
  author,
  views: 0,
  comments: [],
  isLive: false,
});

console.log(blogPostObj("Covid19", "How to prevent covid.", "Ahmadi"));
