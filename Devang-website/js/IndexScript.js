window.onload = (function(){
    "use strict";

    //manual typewriter effect for home page title and description
    var i = 0;
    var b = 0;
    var titleText = 'Hello!';
    var descriptionText = "My name is Devang Pandey and I am a Bachelor of Science in Statistics with a double minor in Economics and International Development Studies from the University of Toronto!";
    var speedSlow = 75;
    var speedFast = 20;
    typeWriter();
    function typeWriter() {
        if (i < titleText.length) {
            document.getElementById("intro_title").innerHTML += titleText.charAt(i);
            i++;
            if (i == 6){
                document.getElementById("intro_title").innerHTML += "<br/>";
            }
            setTimeout(typeWriter, speedSlow);
        }
        else if (b < descriptionText.length) {
            document.getElementById("intro_description").innerHTML += descriptionText.charAt(b);
            b++;
            setTimeout(typeWriter, speedFast);
        }
    }
    

});
