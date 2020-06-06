
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
function avatar_pop_up() {
    
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

// -----------------------------------timer.........................------------------------------------------------------------------

function timer() {
    var dt = new Date();
    // console.log(dt)    
    var countDownDate = dt.setHours( dt.getHours() + 1);
    // console.log(countDownDate)
   // Update the count down every 1 second
   var x = setInterval(function() {
   
     // Get today's date and time
     var now = new Date().getTime();
     // Find the distance between now and the count down date
     var distance = countDownDate - now;
    //  var hours = Math.floor((distance % (1000 * 60 * 60*24)) / (1000 * 60*60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))+30;
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
     // Output the result in an element with id="timer"
     document.getElementById("timer").innerHTML =  minutes+":"+seconds;

     // If the count down is over, write some text 
     if (distance < 0) {
       clearInterval(x);
       document.getElementById("timer").innerHTML = "EXPIRED";
     }
   }, 1000);
}
// puzzle dynamic
// ------------------write to text-file------------------------------------------------------------------------------
