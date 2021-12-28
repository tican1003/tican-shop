var like = document.querySelectorAll(".home-product-item__like");

for (var i = 0; i < like.length; i++) {
  like[i].onclick = function () {
    if (this.classList.contains("home-product-item__like--liked"))
      this.classList.remove("home-product-item__like--liked");
    else this.classList.add("home-product-item__like--liked");
  };
}

var switch_page = document.querySelectorAll(".pagination-item");
for (var i = 0; i < switch_page.length; i++) {
  switch_page[i].onclick = function () {
    for (var j = 0; j < switch_page.length; j++) {
      switch_page[j].classList.remove("pagination-item--active");
    }
    this.classList.add("pagination-item--active");
  };
}
