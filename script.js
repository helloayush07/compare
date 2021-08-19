

$(document).ready(function() {
  var gsearch = function() {
    var url = 'https://shopping.google.com/search?q=' + document.getElementById('searchme').value;
    window.open(url,"_top");
  };
  var glucky = function() {
    var url = 'https://www.bing.com/shop?q=' + document.getElementById('searchme').value + '&btnI';
    window.open(url,"_top");
  };

  $(".left").click(gsearch);
  $(".right").click(glucky);

 
});
