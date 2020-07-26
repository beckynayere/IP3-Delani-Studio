            // pop up the message with the name
            if(name == "" || email == "" || message == "") {
                document.getElementById("popUp").innerHTML = "Sorry! you did not enter a name or email or a message."
                alert("Sorry! you did not enter a name or email or a message.")
            }else{
                document.getElementById("popUp").innerHTML = "*"  + name + myMessage ; // 
                alert("*"  + name + myMessage );
                
                
                // $(document).ready(function(){
                //     var $content = $(".content").hide();
                //     $(".toggle").on("click", function(e){
                //         $(this).toggleClass("expanded");
                //         $content.slideToggle();
                //     });
                // });
        