// Yêu thích sản phẩm
var like = document.querySelectorAll(".home-product-item__like");

for (var i = 0; i < like.length; i++) {
  like[i].onclick = function () {
    if (this.classList.contains("home-product-item__like--liked"))
      this.classList.remove("home-product-item__like--liked");
    else this.classList.add("home-product-item__like--liked");
  };
}

// Chuyển trang sản phẩm
var switch_page = document.querySelectorAll(".pagination-item");
for (var i = 0; i < switch_page.length; i++) {
  switch_page[i].onclick = function () {
    if (!this.classList.contains("pagination-item__link--no-pointer")) {
      for (var j = 0; j < switch_page.length; j++) {
        switch_page[j].classList.remove("pagination-item--active");
      }
      this.classList.add("pagination-item--active");
    }
  };
}

// Danh mục
var category = document.getElementsByClassName("category-item");
var categoryLength = category.length;
for (let i = 0; i < categoryLength; i++) {
  category[i].addEventListener("click", function () {
    for (let j = 0; j < categoryLength; j++) {
      category[j].classList.remove("category-item--active");
    }
    this.classList.add("category-item--active");
  });
}

// Chuyển trang sản phẩm dạng 2 nút nhỏ góc trên
var btnPage = document.querySelectorAll(".home-filter__page-btn");
btnPage[0].addEventListener("click", function () {
  let numPage = document.querySelector(".home-filter__page-current").innerHTML;
  if (Number(numPage) > 1) {
    btnPage[1].classList.remove("home-filter__page-btn--disabled");
    document.querySelector(".home-filter__page-current").innerHTML =
      Number(numPage) - 1;
    if (Number(numPage) - 1 === 1) {
      btnPage[0].classList.add("home-filter__page-btn--disabled");
    }
  } else {
    btnPage[0].classList.add("home-filter__page-btn--disabled");
  }
});
btnPage[1].addEventListener("click", function () {
  let numPage = document.querySelector(".home-filter__page-current").innerHTML;
  if (Number(numPage) < 14) {
    btnPage[0].classList.remove("home-filter__page-btn--disabled");
    document.querySelector(".home-filter__page-current").innerHTML =
      Number(numPage) + 1;
    if (Number(numPage) + 1 === 14) {
      btnPage[1].classList.add("home-filter__page-btn--disabled");
    }
  } else {
    btnPage[1].classList.add("home-filter__page-btn--disabled");
  }
});

// Sắp xếp theo
var sapXepTheo = document.getElementsByClassName("home-filter__btn");
var sapXepTheoLeng = sapXepTheo.length;
for (let i = 0; i < sapXepTheoLeng; i++) {
  sapXepTheo[i].addEventListener("click", function () {
    for (let j = 0; j < sapXepTheoLeng; j++) {
      sapXepTheo[j].classList.remove("btn--primary");
    }
    this.classList.add("btn--primary");
  });
}
