var i;
var url;
function reload() {
	$.getJSON("../../static/safenet/javascript/urls.json", function(json) {
		url = json;
	    for (i=0; i<8; i++){
	        if(url[i]=='TRUE'){
	            if(i==0){
	                document.getElementById("customCheck1").checked = true;
	            }
	            if(i==1){
	                document.getElementById("customCheck2").checked = true;
	            }
	            if(i==2){
	                document.getElementById("customCheck3").checked = true;
	            }
	            if(i==3){
	                document.getElementById("customCheck4").checked = true;
	            }
	            if(i==4){
	                document.getElementById("customCheck5").checked = true;
	            }
	            if(i==5){
	                document.getElementById("customCheck6").checked = true;
	            }
	            if(i==6){
	                document.getElementById("customCheck7").checked = true;
	            }
	            if(i==7){
	                document.getElementById("customCheck8").checked = true;
	            }
	        }
	        else if(url[i]=='NULL'){
	            continue;
	        }
	        else{
	            if(i==0){
	                document.getElementById("customCheck1").checked = true;
	                document.getElementById("customSwitch1").checked = true;
	                document.getElementById("URL1").value = url[i];
	            }
	            if(i==1){
	                document.getElementById("customCheck2").checked = true;
	                document.getElementById("customSwitch2").checked = true;
	                document.getElementById("URL2").value = url[i];
	            }
	            if(i==2){
	                document.getElementById("customCheck3").checked = true;
	                document.getElementById("customSwitch3").checked = true;
	                document.getElementById("URL3").value = url[i];
	            }
	            if(i==3){
	                document.getElementById("customCheck4").checked = true;
	                document.getElementById("customSwitch4").checked = true;
	                document.getElementById("URL4").value = url[i];
	            }
	            if(i==4){
	                document.getElementById("customCheck5").checked = true;
	                document.getElementById("customSwitch5").checked = true;
	                document.getElementById("URL5").value = url[i];
	            }
	            if(i==5){
	                document.getElementById("customCheck6").checked = true;
	                document.getElementById("customSwitch6").checked = true;
	                document.getElementById("URL6").value = url[i];
	            }
	            if(i==6){
	                document.getElementById("customCheck7").checked = true;
	                document.getElementById("customSwitch7").checked = true;
	                document.getElementById("URL7").value = url[i];
	            }
	            if(i==7){
	                document.getElementById("customCheck8").checked = true;
	                document.getElementById("customSwitch8").checked = true;
	                document.getElementById("URL8").value = url[i];
	            }
	        }
	    }

	    if (url.length > 8) {

    	    var count = 0;
    	    if (url[8] != 'NULL' && count==0 ){
    	        count++;
    	        if (url[9] == 'NULL'){
    	            document.getElementById("URLcust1").defaultValue = url[8];
    	            document.getElementById("customSwitchCust1").checked = false;
    	        }
    	        else{
    	            document.getElementById("URLcust1").defaultValue = url[8];
    	            document.getElementById("customSwitchCust1").checked = true;
    	            document.getElementById("CustURLRed1").value = url[9];
    	        }
    	    }

    	    if (url.length > 10)
    	    {
        	    if (url[10] != 'NULL' && count==1 ){
        	        count++;
        	        if (url[11] == 'NULL'){
        	            document.getElementById("URLcust2").defaultValue = url[10];
        	            document.getElementById("customSwitchCust2").checked = false;
        	        }
        	        else{
        	            document.getElementById("URLcust2").defaultValue = url[10];
        	            document.getElementById("customSwitchCust2").checked = true;
        	            document.getElementById("CustURLRed2").value = url[11];
        	        }
        	    }

        	    if (url.length > 12) {
        	    	if (url[12] != 'NULL' && count==2 ){
            	        count++;
            	        if (url[13] == 'NULL'){
            	            document.getElementById("URLcust3").defaultValue = url[12];
            	            document.getElementById("customSwitchCust3").checked = false;
            	        }
            	        else{
            	            document.getElementById("URLcust3").defaultValue = url[12];
            	            document.getElementById("customSwitchCust3").checked = true;
            	            document.getElementById("CustURLRed3").value = url[13];
            	        }
            	    }
            	}
        	}
    	}
	});
    
}

window.onload = reload();
