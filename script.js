
$(document).ready(function() {
  var interval;
    //When page loads...
    $(".tab_content").hide(); //Hide all content
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab
    $(".tab_content:first").show(); //Show first tab content

    //On Click Event
  $("ul.tabs li").click(function() {

    $("ul.tabs li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active"); //Add "active" class to selected tab
    $(".tab_content").hide(); //Hide all tab content

    var activeTab = $(this).find("a").attr("href");
    //$(activeTab).parent().height($(activeTab).height());

    //Find the href attribute value to identify the active tab + content
    $(activeTab).fadeIn(); //Fade in the active ID content
    interval = clearInterval(interval);
    return false;
  });

  var toggleSlide = function(){
    var active = $("ul.tabs li.active").removeClass("active").next();
    if (!active.length) {
      active = $("ul.tabs li:eq(0)");
    }

    active.addClass('active');

    $(".tab_content").hide(); //Hide all tab content
    var activeTab = active.find("a").attr("href");
    $(activeTab).fadeIn(); //Fade in the active ID content
  };
  interval = setInterval(toggleSlide, 5000);
});
