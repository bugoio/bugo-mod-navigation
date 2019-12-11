$(document).ready(function(){
  ////console.log(document.menus);
  if(typeof(document.menus) == 'undefined'){
    document.menus = document. querySelectorAll ("[role=menubar]");
    ////console.log(document.menus);
  }
  var menubar = new Menubar(document.getElementById('menubar-main'));
  menubar.init();

  $('.skip-link').on('click',function(){
    var target = $(this).attr("href");
    $(target).focus();
  });
});
