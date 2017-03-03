$(document).ready(function(){
  
  $(".tab-button, .switch-button").click(function() {
    var id = $(this).attr("data-tab"); //id of tab to show

    $(".tab-button, .tab-content").removeClass("show"); //remove show class from all tab buttons and content
    $("li[data-tab=" + id + "], #" + id).addClass("show"); //add show class to appropriate button and content
  })

})
