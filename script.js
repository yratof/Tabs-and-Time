$fb = jQuery.noConflict();
$fb(document).ready(function() {
    //When page loads...
    $fb(".tab_content").hide(); //Hide all content
    $fb("ul.tabs li:first").addClass("active").show(); //Activate first tab
    $fb(".tab_content:first").show(); //Show first tab content
	
    //On Click Event
	$fb("ul.tabs li").click(function() {
	
		$fb(activeTab).parent().height($fb(activeTab).height());
		$fb("ul.tabs li").removeClass("active"); //Remove any "active" class
		$fb(this).addClass("active"); //Add "active" class to selected tab
		$fb(".tab_content").hide(); //Hide all tab content
		
		var activeTab = $fb(this).find("a").attr("href");
		//Find the href attribute value to identify the active tab + content
		$fb(activeTab).fadeIn(); //Fade in the active ID content
		return false;
    });

	var toggleSlide = function(){
	  $fb("ul.tabs li").removeClass("active"); 
	   .next().add("ul.tabs li:first").last().addClass("active");
	}
	setInterval(toggleSlide, 5000);
    
});


