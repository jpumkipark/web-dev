const NavigationSidebar = () => {
  return `<div class="list-group">
  <a class="list-group-item list-group-item-action cursor-pointer">
    <i class="fa fa-twitter"></i>
  </a>
  <a
    class="
      list-group-item list-group-item-action
      d-flex
      align-items-center
      cursor-pointer
    "
  >
    <i class="fa fa-home pe-2"></i>
    <span
      class="
        d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
      "
      >Home</span
    ></a
  >
  <a
    class="
      list-group-item list-group-item-action
      active
      d-flex
      align-items-center
      cursor-pointer
    "
    aria-current="true"
  >
    <i class="fa fa-hashtag pe-2"></i>
    <span
      class="
        d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
      "
      >Explore</span
    ></a
  >
  <a
    class="
      list-group-item list-group-item-action
      d-flex
      align-items-center
      cursor-pointer
    "
  >
    <i class="fa fa-bell pe-2"></i>
    <span
      class="
        d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
      "
      >Notifications</span
    ></a
  >
  <a
    class="
      list-group-item list-group-item-action
      d-flex
      align-items-center
      cursor-pointer
    "
  >
    <i class="fa fa-envelope pe-2"></i>
    <span
      class="
        d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
      "
      >Messages</span
    ></a
  >
  <a
    class="
      list-group-item list-group-item-action
      d-flex
      align-items-center
      cursor-pointer
    "
  >
    <i class="fa fa-bookmark pe-2"></i>
    <span
      class="
        d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
      "
      >Bookmarks</span
    >
  </a>
  <a
    class="
      list-group-item list-group-item-action
      d-flex
      align-items-center
      cursor-pointer
    "
  >
    <i class="fa fa-list pe-2"></i>
    <span
      class="
        d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
      "
      >Lists</span
    ></a
  >
  <a
    class="
      list-group-item list-group-item-action
      d-flex
      align-items-center
      cursor-pointer
    "
  >
    <i class="fa fa-user pe-2"></i>
    <span
      class="
        d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
      "
      >Profile</span
    ></a
  >
  <a
    class="
      list-group-item list-group-item-action
      d-flex
      align-items-center
      cursor-pointer
    "
  >
    <i class="fa fa-ellipsis-h pe-2"></i>
    <span
      class="
        d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
      "
      >More</span
    ></a
  >
</div>
<button class="btn btn-primary btn-tweet mt-2">Tweet</button>`;
};

export default NavigationSidebar;
