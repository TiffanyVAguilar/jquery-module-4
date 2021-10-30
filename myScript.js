$(function () {
  // Challenge 1
  $(".product-list h2.product-name[data-type='mineralwater']").css(
    "background-color",
    "#8D3120"
  );
  $(".product-list h2.product-name[data-type='vitamin']").css(
    "background-color",
    "#1C9347"
  );
  $(".product-list h2.product-name[data-type='proteinbar']").css(
    "background-color",
    "#544D54"
  );

  // Challenge 2
  // filter when checked
  document
    .querySelector("#vitaminsCheck")
    .addEventListener("change", function (evt) {
      filterProducts("vitamins", evt.target.checked);
    });
  document
    .querySelector("#mineralCheck")
    .addEventListener("change", function (evt) {
      filterProducts("mineralwater", evt.target.checked);
    });
  document
    .querySelector("#proteinCheck")
    .addEventListener("change", function (evt) {
      filterProducts("proteinbar", evt.target.checked);
    });
  // show all products
  $("#showAll").click(function () {
    $("#vitaminsCheck").prop("checked", true);
    $("#mineralCheck").prop("checked", true);
    $("#proteinCheck").prop("checked", true);

    filterProducts("vitamins", true);
    filterProducts("mineralwater", true);
    filterProducts("proteinbar", true);
  });

  // Challenge 3

  $(".product-item").each(function () {
    var prodName = encodeURIComponent($(this).children("h2").text());
    var prodID = encodeURIComponent($(this).data("prod_id"));

    var link = $(
      "<a href='product.html?prodName=" + prodName + "&prodID=" + prodID + "'/>"
    );
    $(this).children("img").wrap(link);
  });
});

function filterProducts(categoryName, show) {
  // get a list of the product items for the given category.
  // Use the data attributes to narrow the list
  var dataSelectorVal = "";
  switch (categoryName) {
    case "vitamins":
      dataSelectorVal = "h2[data-type='vitamin']";
      break;
    case "mineralwater":
      dataSelectorVal = "h2[data-type='mineralwater']";
      break;
    case "proteinbar":
      dataSelectorVal = "h2[data-type='proteinbar']";
      break;
  }
  // use the has() function to select the li tags that are product items
  // that contain the h2 tag with the corresponding data attribute value
  $(".product-item")
    .has(dataSelectorVal)
    .css("display", show ? "" : "none");
}
