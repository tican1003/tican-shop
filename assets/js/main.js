var like = document.querySelectorAll(".home-product-item__like");
console.log(like);

for (var i = 0; i < like.length; i++) {
  like[i].onclick = function () {
    if (this.classList.contains("home-product-item__like--liked"))
      this.classList.remove("home-product-item__like--liked");
    else this.classList.add("home-product-item__like--liked");
  };
}
