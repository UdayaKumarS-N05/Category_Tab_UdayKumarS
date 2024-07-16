function onTabClick(e) {
  console.log(e.target);
  let activeTabs = document.querySelectorAll(".active");

  // deactivate existing active tab and panel
  activeTabs.forEach(function (tab) {
    tab.className = tab.className.replace("active", "");
  });

  // activate new tab and panel
  e.target.parentElement.className += " active";

  document.getElementById(e.target.href.split("#")[1]).className += " active";
}

const element = document.getElementById("nav-tab");

element.addEventListener("click", onTabClick, true);

const getData = async function () {
  // 1. Loading the Data
  try {
    const res = await fetch(
      "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
    );
    const data = await res.json();
    let menData = data.categories[0];
    let womenData = data.categories[1];
    let kidsData = data.categories[2];

    // 2.Setting up the markup

    menData.category_products.forEach((item) => {
      document.getElementById("menGallery").insertAdjacentHTML(
        "afterBegin",
        `<div class="card">
                    <p class="badge">
                    <span style="display:grid;place-items:center; margin-top:8px; font-weight:bold;">
                      ${item.badge_text == null ? "" : item.badge_text}
                    </span>
                    </p>
                    <img src=${item.image} alt="">
                    <div class="info">
                    <div class="main">
                    <p class="title">${item.title}</p>
                    <li class="vendor">${item.vendor}</li>
                    </div>
                    <div class="prices">
                    <p class="sellPrice">Rs. ${item.price}</p>
                    <p class="oldPrice">${item.compare_at_price}</p>
                    <p class="discount">${Math.round(
                      ((item.compare_at_price - item.price) /
                        +item.compare_at_price) *
                        100
                    )}% Off</p>
                    </div>
                    </div>
                    <button >Add to cart</button>`
      );
    });
    womenData.category_products.forEach((item) => {
      document.getElementById("womenGallery").insertAdjacentHTML(
        "afterBegin",
        `<div class="card">
                    <p class="badge">
                    <span style="display:grid;place-items:center; margin-top:8px; font-weight:bold;">
                      ${item.badge_text == null ? "" : item.badge_text}
                    </span>
                    </p>
                    <img src=${item.image} alt="">
                    <div class="info">
                    <div class="main">
                    <p class="title">${
                      item.title.split("").length > 10
                        ? item.title.split("").slice(0, 11).join("") + ".."
                        : item.title
                    }</p>
                    <li class="vendor">${item.vendor}</li>
                    </div>
                    <div class="prices">
                    <p class="sellPrice">Rs. ${item.price}</p>
                    <p class="oldPrice">${item.compare_at_price}</p>
                    <p class="discount">${Math.round(
                      ((item.compare_at_price - item.price) /
                        item.compare_at_price) *
                        100
                    )}% Off</p>
                    </div>
                    </div>
                    <button >Add to cart</button>`
      );
    });
    kidsData.category_products.forEach((item) => {
      document.getElementById("kidsGallery").insertAdjacentHTML(
        "afterBegin",
        `<div class="card">
                    <p class="badge">
                    <span style="display:grid;place-items:center; margin-top:8px; font-weight:bold;">
                      ${item.badge_text == null ? "" : item.badge_text}
                    </span>
                    </p>
                    <img src=${item.image} alt="">
                    <div class="info">
                    <div class="main">
                    <p class="title">${
                      item.title.split("").length > 10
                        ? item.title.split("").slice(0, 11).join("") + ".."
                        : item.title
                    }</p>
                    <li class="vendor">${item.vendor}</li>
                    </div>
                    <div class="prices">
                    <p class="sellPrice">Rs. ${item.price}</p>
                    <p class="oldPrice">${item.compare_at_price}</p>
                    <p class="discount">${Math.round(
                      ((item.compare_at_price - item.price) /
                        item.compare_at_price) *
                        100
                    )}% Off</p>
                    </div>
                    </div>
                    <button >Add to cart</button>`
      );
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
getData();
