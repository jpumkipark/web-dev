const PostSummaryItem = (post) => {
  return `<li class="list-group-item">
  <div class="d-flex justify-content-between align-items-center">
    <div>
      <div class="twitter-greytext">${post.topic}</div>
      <div>
        <span class="fw-bolder">${post.userName}</span>
        <i class="fa fa-check-circle"></i>
        <span class="twitter-greytext"> - ${post.time}</span>
      </div>
      <p class="fw-bolder mb-0">
         ${post.title}
      </p>
    </div>
    <div class="px-1">
      <img
        class="article-img"
        width="100px"
        height="100px"
        src="${post.image}"
      />
    </div>
  </div>
</li>`;
};

export default PostSummaryItem;
