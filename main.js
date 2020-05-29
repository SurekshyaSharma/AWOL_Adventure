// Global variables                                                                                                    *
// difine global variables that will be use throughout the code                                                        *
// *********************************************************************************************************************
var _csvfile = 'puzzle_questions';
var _jsonData; 
var text_Array="Empty Array";
var toggle = 1;
var toggle1= 1;
var toggle2= 1;



// --------when the page load -------reading and loading the csv content on the help display text--------------------------------------------------------------

   
    var http = new XMLHttpRequest();
    http.open("GET", "help.csv", true);
    http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("help_display").innerHTML = this.responseText;
        text_Array = this.responseText;
        console.log(text_Array);
    }
    };    
    http.send();

// -----------------------------------submit the answer with the submit button-------------------------------------------------------------------
function puzzle_answer() {

    var p_answer = document.getElementById("puzzle_answer").value;
    console.log("Guesses:",p_answer);
    var awol_answer="happy";
    // if (p_answer == ""){
    //     alert("Enter the answer.")
    // }

    if (p_answer == awol_answer && p_answer !=""){
        $(".content-div").empty();
        $(".content-div").append(
            "<p>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +"</p>"  
            +"<input>"+"<br>"+"<br>"+"<button>"+"Submit"+"</button>"
            ) ;
    } else if(p_answer == ""){
        $(".wrong_answer_alert").empty();
        $(".wrong_answer_alert").append("<p>Enter the answer.</p>");
    }else {
        $(".wrong_answer_alert").empty();
        $(".wrong_answer_alert").append("<p>Wrong Answer. Look for the hint or ask your guide.</p>");
    } 
}

//   -------------------------show_notepad()"---------------------------------------------------------------------------------------------------
function show_notepad(){
    
    if (toggle1 == 1){
        $("#notepad-content").show();
        document.getElementById("notepad-content").innerHTML = localStorage["text"] || "Text is automatically saved every second. Feel free to edit. "; // default text

        setInterval(function() {
        localStorage["text"] = document.getElementById("notepad-content").innerHTML; // content div
         }, 1000);
        console.log( localStorage["text"]);
    }
    if (toggle1 == -1){
        $(".content-div").empty();
        $(".content-div").append("<p>Main Page</p>");
        console.log(toggle1);
        
    }
   
    toggle1 *= -1;
}

function display_help(){
    // $(".p_questions").hide();
    if (toggle != -1 || toggle != -1){
        $(".content-div").empty();
        $(".content-div").append("<div id=\"help-display\">"+"This is the help text."+"<br>"+"<br>"+"<p>"+text_Array+"</p></div>");
        
        
    }
    if (toggle == -1){
        $(".content-div").empty();
        $(".content-div").append("<p>Main Page</p>");
    }

    toggle *= -1;
    
}
//-------------------------------------------------------------------- pop up-----------------------------------------------------------------
function pop_Up() {
    
    if (toggle2 == 1){
        
        $(".guide").append("<p>"+"Hi I am your guide for this AWOL journey. I will give you hint for all the questions. Click for help.</p>");
        console.log(toggle2);
    }
    if (toggle2 == -1){
        
        $(".guide").empty();
        console.log(toggle2);
    }

    toggle2 *= -1;
  }
