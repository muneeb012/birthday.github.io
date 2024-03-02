function s1() {
    var s1Element = document.getElementById("s1");
    if (s1Element) {
        s1Element.style.display = "none";
        
    }

    var s2Element = document.getElementById("s2");
    if (s2Element) {
        s2Element.style.display = "block";
    }

    var video = document.getElementById("Video");
    if (video) {
        video.play();

        // Listen for when the video playback completes
        video.onended = function() {
            // Hide s1 and s2, show s3
            if (s1Element) {
                s1Element.style.display = "none";
            }

            if (s2Element) {
                s2Element.style.display = "none";
            }

            var s3Element = document.getElementById("s3");
            if (s3Element) {
                s3Element.style.display = "block";
            }
        };
    }
}
setTimeout(s1,5000)


function s0(){
    document.getElementById("s1").style.display="block";
    document.getElementById("s2").style.display="none";
    document.getElementById("s3").style.display="none";
    }
    function s3() {
        var s3Element = document.getElementById("s3");
        if (s3Element) {
            s3Element.style.display = "block";
        }
    
        // Execute another function after 5 seconds
        setTimeout(function() {
            // Call your second function here
            anotherFunction();
        }, 5000); // 5 seconds delay
    }
    
    function anotherFunction() {
    {
      location.href="https://wa.me/923234673347?text=Thank%20you%20";
       }
        console.log("Second function executed after 5 seconds.");
    }
    