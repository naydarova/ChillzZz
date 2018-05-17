$( document ).ready(function() {
	
	$("input").value = "";
	
	$("#search").click(function(){
		if(document.getElementById("field1_star3").checked = true){
			document.location.href = 'result.html';
			document.getElementById("field1_star3").checked = false;
			document.getElementById("checkBox").checked = false;
		}

	    if(document.getElementById("resto").value == "Choongman"){
			document.location.href = 'result3.html';
			document.getElementById("resto").value == "";
		}
        $("#field1_star3").checked = false;
		$("input").value = "";
    });

});