
document.getElementById("button").addEventListener("click",function() {
     
  checkboxval();

});


function checkboxval()
    {
        var checkboxs=document.getElementsByClassName("form-check-input");
        var count = 0;
        for(var i=0,l=checkboxs.length;i<l;i++)
        {
            if(checkboxs[i].checked)
            {
                count++
                
            }
        }
        if(count >= 2)alert("Thank you for checking a checkbox");
        else alert("Please check a checkbox");
    }  

function submitform() {
        $('#submit_handle').click();
    }   