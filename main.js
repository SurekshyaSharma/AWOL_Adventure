// Global variables                                                                                                    *
// define global variables that will be use throughout the code                                                        *
// *********************************************************************************************************************

var jsonData; 
var text_Array="Empty Array";
var toggle = 1;




// --------when the page load -------reading and loading the csv content on the help display text--------------------------------------------------------------

   
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

// reading xlsx file--------------------------------------------------------------------------------------------------------------------------
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
    $(".content-div").show();
    if (toggle != -1 ){
        $(".content-div").empty();
        $("#notepad-content").append("<p>"+"This is your notepad."+"</p>");
    }
    if (toggle == -1){
        $(".content-div").empty();
        $(".content-div").append("<p>Main Page</p>");
    }

    toggle *= -1;
    
}
//  display help display by reading csv file.
function display_help(){
    // $(".p_questions").hide();
    if (toggle != -1){
        $(".content-div").empty();
        $(".content-div").append("<div id=\"help-display\">"+"This is the help text."+"<br>"+"<br>"+"<p>"+text_Array+"</p></div>")
    }
    if (toggle == -1){
        $(".content-div").empty();
        $(".content-div").append("<p>Main Page</p>");
    }

    toggle *= -1;
    
}
//-------------------------------------------------------------------- pop up-----------------------------------------------------------------
function pop_Up() {
    
    if (toggle == 1){
        
        $(".guide").append("<p>"+"Hi I am your guide for this AWOL journey. I will give you hint for all the questions. Click for help.</p>");
        console.log(toggle);
    }
    if (toggle == -1){
        
        $(".guide").empty();
        console.log(toggle);
    }

    toggle *= -1;
  }


//.........................................reading the file and converting into format..................................................
function csv_json(data){
    
    var result_json = [];
    // var puzzle=[];
    var allRows = data.split(/\r?\n|\r/); 
    console.log(allRows)
    var headers = allRows[0].split(",");
  
    for(var i=1;i<allRows.length;i++){
  
        var obj = {};
        var currentline = allRows[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result_json.push(obj);
  
    }
    puzzle=JSON.stringify(result_json)
    console.log(puzzle)
    var arrayLength = puzzle.length;
    if (toggle == 1){

        for (var i = 0; i < arrayLength; i++) {
        
            $(".csv-read").append((puzzle[i]));
    
        }
    }
    if (toggle == -1){
      
        $(".csv-read").empty();
        $(".csv-read").append("<button onclick=\"csv_json(data)\">Question</button>")
      
    }
    toggle *= -1;
    return puzzle;
     //JavaScript object
   
  }

  // -----------------------------------submit the answer with the submit button-------------------------------------------------------------------
