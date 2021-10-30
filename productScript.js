$(function () {
  // Challenge 3
  // extract the query string parameters
  var paramLoc = window.location.href.indexOf("?");
  var paramStr = window.location.href.slice(paramLoc + 1);
  var prodName = "";
  var prodID = "";
  var i = paramStr.indexOf("prodName=") + 9;
  for (var j = i; j < paramStr.length; j++) {
    if (paramStr.charAt(j) == "&") break;
    prodName += paramStr.charAt(j);
  }
  var i = paramStr.indexOf("prodID=") + 7;
  for (var j = i; j < paramStr.length; j++) {
    if (paramStr.charAt(j) == "&") break;
    prodID += paramStr.charAt(j);
  }
  prodName = decodeURIComponent(prodName);
  prodID = decodeURIComponent(prodID);

  // set the product name in the proper placeholder
  $("#productName").text(prodName);

  // Challenge 4
  // retrieve the product information via AJAX
  $.getJSON("product-data.json").done(function (prodData) {
    // use the prodID to get this product information
    prodData.products.forEach(function (elem) {
      if (elem.prod_id == prodID) {
        $("#productStock").text(elem.in_stock);
        $("#productPrice").text(elem.retail_price);
        $("#productDesc").text(elem.description);
      }
    });
  });
});
