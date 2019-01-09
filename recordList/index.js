$(document).ready(function() {
	$(".order-warp li").click(function(){
      var index = $(this).attr("index");
      $(this).addClass('active').siblings().removeClass('active');
  })
});
