// Get the modal
var modal = document.getElementById("myModalendexam");


// Get the button that opens the modal
var btn = document.getElementById("btndone");

// Get the <span> element that closes the modal


// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";    
}

// When the user clicks on <span> (x), close the modal
/*
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/*
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    */

//when the user clicks on back to exm button

var btnback = document.getElementById("btnbacktotest");
btnback.onclick = function() {
    modal.style.display = "none";    
}
 var count=1;
var btnback = document.getElementById("btnfinishtest");
btnback.onclick = function() {
    modal.style.display = "none";

    if(count<3){
        setTimeout(function(){
            modal.style.display = "block";
        }, 100);
        count++;
    } 
    else
    {
    
        $('#savedata').trigger('click');
    }   
}
