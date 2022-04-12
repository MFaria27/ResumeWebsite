//Modal Code from W3SCHOOLS and translated into d3 
//https://www.w3schools.com/howto/howto_css_modals.asp

var currentModal = 0;

d3.selectAll(".buttons")
    .on("click",function(){
        console.log(this.id);
        d3.select("div#" + this.id)
            .style("display", "block");
        currentModal = 2;
    });
d3.selectAll(".close")
    .on("click", function(){
        d3.selectAll(".modal")
            .style("display", "none");
    });

window.onclick = function(event) {
    if(currentModal == 1){
        d3.selectAll(".modal")
            .style("display", "none");
    }
    else{
        currentModal = 1;
    }
}


/*

var modal = document.getElementById("spotVisModal");
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
 }
}

*/