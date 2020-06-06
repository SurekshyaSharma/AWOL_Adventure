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

// reading puzzle_question.csv------------------------------------------------------------------------------------------------------------------------
    var fileName = "puzzle_question.csv";
    var data = "";

    req = new XMLHttpRequest();
    req.open("GET", fileName, false);

    req.addEventListener("readystatechange", function (e) {
      data = req.responseText ;
    //   console.log(data)
    });

    req.send();
//.........................................reading the puzzle_question.csv, file and converting into array..................................................
function csv_array(data){
    
    var result = [];
    var h=[];
    // var currentline=[];
    var allRows = data.split(/\r?\n|\r/); 
    
    var headers = allRows[0].split("|");
    var arrayLength = allRows.length;

    for(var i=1;i<arrayLength;i++){
  
        var obj = {};
        var currentline = allRows[i].split("|");
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
            
        }
        result.push(obj);
    }
    
//-------testing-------------------------------------------------------------------------------

    if (toggle == 1){
        $(".csv-read").empty();
        for (var i=1;i<arrayLength;i++) {
            $(".csv-read").append((currentline[i]));
        }
       
        $(".csv-read").append("<br>"+"<input onclick=\"csv_json(data)\"></input>"+"<br>"+"<br>");
        $(".csv-read").append("<br>"+"<button onclick=\"tracking_Teams()\">Submit</button>"+"<br>"+"<br>");

    }
    if (toggle == -1){
      
        $(".csv-read").empty();
        $(".csv-read").append("<button onclick=\"csv_json(data)\">Question</button>"+"<br>"+"<br>");

    }
    toggle *= -1;
    console.log(result)
    // testing ends--------------------------------------------------------------------------------
    return result;
   
  }
//   write
