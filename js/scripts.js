/*!
 * Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
/*window.onload = (Event)=>{
    let myAlert=document.querySelector('.toast');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();

}*/

$(document).ready(function () {
  $("#btnUparrow").click(function () {
    $(".toast").toast("show");
  });
});
$(document).ready(function () {
  $("#btnDownarrow").click(function () {
    $(".toast").toast("show");
  });
});
$(document).ready(function () {
  $("#btnDoubleup").click(function () {
    $(".toast").toast("show");
  });
});
$(document).ready(function () {
  $("#btnDoubledown").click(function () {
    $(".toast").toast("show");
  });
});

