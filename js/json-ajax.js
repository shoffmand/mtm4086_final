function loadJSON(){
   var data_file = "data.json";
   var http_request = new XMLHttpRequest();
   try{
      //for Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      //if Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            //in case something goes wrong
            alert("Your browser may not support AJAX, or refresh because something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        // My Entire JSON Object from data.json
        console.log(jsonObj);
		
		console.log(jsonObj[0].title);
		
		//Div to append all my results
		var feed = document.getElementById('col-3');
		
		for (var key in jsonObj){
			console.log(jsonObj[key]);
			
		//title for project
		var title = document.createElement('h2');
		title.innerHTML = jsonObj[key].title;
		//team name (currently project details)
		var team = document.createElement('h4');
		team.innerHTML = jsonObj[key].team;
		//information on project
		var info = document.createElement('p');
		info.innerHTML = jsonObj[key].info;
		//create Img
		var pImg = document.createElement('img');
		pImg.setAttribute('src', jsonObj[key].pImgUrl);
		//create Img
		var tImg = document.createElement('img');
		tImg.setAttribute('src', jsonObj[key].pImgUrl);
		var li = document.createElement('a');
		li.setAttribute('href', jsonObj[key].li);
		
	

		//append the Image to the article-feed div
		feed.appendChild(title);
		feed.appendChild(team);	
		feed.appendChild(info);
		feed.appendChild(pImg);
		feed.appendChild(tImg);
		feed.appendChild(li);
	
		}
		
		
      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
}

//auto load loadJSON();