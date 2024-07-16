function onTabClick(e) {
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

element.addEventListener("click", onTabClick);

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
    console.log(menData);

    menData.category_products.forEach((item) => {
      document.getElementById("men").insertAdjacentHTML(
        "afterBegin",
        `<div class="card">
                    <p class="tag">On offer</p>
                    <img src="" alt="">
                    <p>Title</p>
                    <li>Myntra</li>
                    <div>

                        <p>Price</p>
                        <p>Previous Price</p>
                        <p>Discount</p>
                    </div>
                    <button>Add to cart</button>`
      );
    });
  } catch (err) {
    throw new Error(err.message);
  }

  // 2.Setting up the markup
};
getData();
