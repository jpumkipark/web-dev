const ExploreComponents = () => {
  return ` <div class="mb-2 d-flex justify-content-between align-items-center">
    <i class="fa fa-search search-glass"></i>
    <input class="w-100 twitter-search" placeholder="Search Twitter" />
    <i class="fa fa-gear ps-4 twitter-gear"></i>
  </div>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="for-you.html">For you</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="trending.html">Trending</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="news.html">News</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="sports.html">Sports</a>
    </li>
    <li class="nav-item">
      <a
        class="
          nav-link
          d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block
        "
        href="entertainment.html"
        >Entertainment</a
      >
    </li>
  </ul>
  <ul class="list-group mt-2">
    <li class="list-group-item pa-inherit">
      <img class="spacex-img" src="../../images/spaceX.jpg" />
      <div class="img-title">SpaceX's Starship</div>
    </li>
    <li class="list-group-item">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <div class="twitter-greytext">Web Development</div>
          <div>
            <span class="fw-bolder">ReactJS</span>
            <i class="fa fa-check-circle"></i>
            <span class="twitter-greytext"> - 2h</span>
          </div>
          <p class="fw-bolder mb-0">
            React.js is a component based front end library that maeks
            it very easy to build Single Page Applications or SPAs
          </p>
        </div>
        <div class="px-1">
          <img
            class="article-img"
            width="100px"
            height="100px"
            src="../../images/react.webp"
          />
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <div>
            <span class="fw-bolder">JavaScript</span>
            <i class="fa fa-check-circle"></i>
            <span class="twitter-greytext"> - 2h</span>
          </div>
          <p class="fw-bolder mb-0">
            JavaScript is programming language that can run on browsers
            as well as desktops
          </p>
          <div class="twitter-greytext">123K Tweets</div>
        </div>
        <div class="px-1">
          <img
            class="article-img"
            width="100px"
            height="100px"
            src="../../images/Javascript.png"
          />
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <div class="twitter-greytext">Web Development</div>
          <div>
            <span class="fw-bolder">jQuery</span>
          </div>
          <div class="twitter-greytext">123K Tweets</div>
        </div>
        <div class="px-1">
          <img
            class="article-img"
            width="100px"
            height="100px"
            src="../../images/jQuery.png"
          />
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <div class="twitter-greytext">Web Development</div>
          <div>
            <span class="fw-bolder">NodeJS</span>
            <i class="fa fa-check-circle"></i>
            <span class="twitter-greytext"> - 2h</span>
          </div>
          <div class="twitter-greytext">123K Tweets</div>
        </div>
        <div class="px-1">
          <img
            class="article-img"
            width="100px"
            height="100px"
            src="../../images/Nodejs.png"
          />
        </div>
      </div>
    </li>
  </ul>`;
};

export default ExploreComponents;
