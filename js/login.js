// -----------------------------------------login in to the portal-----------------------------------------------------------------------------

function loginPortal(){
    var  teamName =document.getElementById("team-name").value;
    // console.log(teamName)
    
    var code="1234"
    var  teamCode =document.getElementById("team-password").value;
    if (code==teamCode){
        $(".login").empty();
        $(".right-bar").show();
        $(".p_questions").show();
        
    }
    // team name dynamic
    
    $(".team").append("<h6>Team: "+teamName.toLowerCase() +"</h6>");

  }

