// Global variables                                                                                                                      

var jsonData; 
var text_Array="Empty Array";
var toggle = 1;

// --------when the page load -------reading and loading the csv content on the help display text-------------------------------------------

    var http = new XMLHttpRequest();
    http.open("GET", "help.csv", true);
    http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("help_display").innerHTML = this.responseText;
        text_Array = this.responseText;
        // console.log(text_Array);
    }
    };    
    http.send();

// reading csv file--------------------------------------------------------------------------------------------------------------------------
    var fileName = "puzzle_question.csv";
    var data = "";

    req = new XMLHttpRequest();
    req.open("GET", fileName, false);

    req.addEventListener("readystatechange", function (e) {
      data = req.responseText ;
    //   console.log(data)
    });

    req.send();


//   -------------------------show_notepad()"---------------------------------------------------------------------------------------------------

function show_notepad(){
    if (toggle != -1 ){
        // $(".content-div").empty();
        $(".content-div").append( "<div id=\"notepad-content\" contenteditable=\"true\"><h1>This is the notepad</h1><br></div>");
        document.getElementById("notepad-content").innerHTML = localStorage["text"] || "This is the notepad. "; // default text
        // saving context every sec

        setInterval(function() {
        localStorage["text"] = document.getElementById("notepad-content").innerHTML; // content div
         }, 1000);
    }
    if (toggle == -1){
        $(".content-div").empty();
        $(".content-div").append("<p>Main Page</p>");
    }

    toggle *= -1;
    
}

// ...............................display help display by reading csv file...............................................................
function display_help(){
    // $(".p_questions").hide();
    if (toggle != -1){
        $(".content-div").empty();
        $(".content-div").append("<div id=\"help-display\">"+"<h6>This is the help text.</h6>"+"<br>"+text_Array+"</div>")
    }
    if (toggle == -1){
        $(".content-div").empty();
        $(".content-div").append("<p>Main Page</p>");
    }

    toggle *= -1;
    
}

//-------------------------------------------------------------------- pop up-----------------------------------------------------------------
function pop_up() {
    
    if (toggle == 1){
        $(".bubble").show();
        $(".bubble").append("<p>"+"Hi I am your guide for this AWOL journey. I will give you hint for all the questions.</p>");
    }
    if (toggle == -1){
        
        $(".bubble").hide();
        $(".bubble").empty();

    }

    toggle *= -1;
  }


//.........................................reading the file and converting into array..................................................
function csv_array(data){
    
    var result = [];
    var h=[];
    // var currentline=[];
    var allRows = data.split(/\r?\n|\r/); 
    
    var headers = allRows[0].split(",");
    var arrayLength = allRows.length;

    for(var i=1;i<arrayLength;i++){
  
        var obj = {};
        var currentline = allRows[i].split(",");
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
            // console.log(headers[j])
            // console.log(currentline[j])
            console.log(currentline[1])
            
        }
        result.push(obj);
    }
//    testing-------------------------------------------------------------------------------
    if (toggle == 1){
        $(".csv-read").empty();
        for (var i=1;i<arrayLength;i++) {
            $(".csv-read").append((currentline[i]));
        }
       
        $(".csv-read").append("<br>"+"<input onclick=\"csv_json(data)\"></input>"+"<br>"+"<br>");
        $(".csv-read").append("<br>"+"<button onclick=\"csv_json(data)\">Question</button>"+"<br>"+"<br>");


    }
    if (toggle == -1){
      
        $(".csv-read").empty();
        $(".csv-read").append("<button onclick=\"csv_json(data)\">Question</button>"+"<br>"+"<br>");

      
    }
    toggle *= -1;
    console.log(result)
    // testing
    return result;
   
  }

// -----------------------------------timer.........................------------------------------------------------------------------

function timer() {
    var dt = new Date();
    console.log(dt)    
    var countDownDate = dt.setHours( dt.getHours() + 1 );
   
   // Update the count down every 1 second
   var x = setInterval(function() {
   
     // Get today's date and time
     var now = new Date().getTime();
       
     // Find the distance between now and the count down date
     var distance = countDownDate - now;
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
     // Output the result in an element with id="timer"
     document.getElementById("timer").innerHTML =  minutes + ":" + seconds;

     // If the count down is over, write some text 
     if (distance < 0) {
       clearInterval(x);
       document.getElementById("timer").innerHTML = "TIMER EXPIRED";
     }
   }, 1000);
}
// puzzle dynamic