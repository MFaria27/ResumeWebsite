
let styleName = getCookie("css"); 

if (styleName) {
    console.log(styleName);
    d3.select(".currentStyle")
        .attr("href",styleName);
    if(styleName === "simple.css"){
        d3.select('#switcher')
            .text("styled.css")
    }
    if(styleName === "styled.css"){
        d3.select('#switcher')
            .text("simple.css")
    }
    
}

d3.select("#switcher")
    .on("click", function(){
        eraseCookie("css");
        console.log("Clicked");
        if(d3.select(this).text() === "styled.css"){
            console.log("Switching to styled");
            d3.selectAll(".currentStyle")
                .attr("href", "styled.css");
            d3.selectAll("#switcher")
                .text("simple.css");
            setCookie("css", "styled.css", 1);
        }
        else if(d3.select(this).text()  === "simple.css"){
            console.log("Switching to simple");
            d3.selectAll(".currentStyle")
                .attr("href", "simple.css");
            d3.selectAll("#switcher")
                .text("styled.css");
            setCookie("css", "simple.css", 1);
        }
    });


//Cookie helper functions from StackOverflow user Mandeep Janjua
//https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}  

particlesJS.load('particles', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});