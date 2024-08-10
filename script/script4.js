var timerstop=false;

function start()
{
    
    let totalTime=3600;
    let min=0;
    let sec=0;
    let counter =0;

    let timer=setInterval(function(){
        counter++;
        min=Math.floor((totalTime-counter)/60);
        sec=totalTime-(min*60)-counter;
        document.getElementById("timertext").innerHTML="<b>"+min+ ":" + sec+"</b>";

        if (counter==totalTime){
            clearInterval(timer);
            //alert("Time is over. Exam will close automatically");
            timerstop=true;
           $('#savedata').trigger('click');
           //savetestdata();
            
        }
        else if(counter==totalTime/2)
        {
            document.getElementById("btndone").style.visibility='visible';
        }
    }, 1000);
}