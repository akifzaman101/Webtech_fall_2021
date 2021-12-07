function validateForm()
{
    var variable = 0;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    var des = document.getElementById("des").value;
    var pl1 = document.getElementById("lan1").value;
    var pl2 = document.getElementById("lan2").value;
    var pl3 = document.getElementById("lan3").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    var file = document.getElementById("file").value;
    var patt = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
    var res = patt.test(email);

    if(des == "")
    {
        document.getElementById("errordes").innerHTML="Please fill out designation";
        
        
    }
    else
    {
        document.getElementById("validate").innerHTML="Your designation is " + des;
        
    }

    if(pl1 == "" && pl2 == "" && pl3 == "")
    {
        document.getElementById("errorpl").innerHTML="Please fill out prefered Lnaguage";
        return false;
    }
    else
    {
        document.getElementById("validate").innerHTML="Your prefered languages are " + pl1 +" "+ pl2 +" "+ pl3;
    }

    if (email == "" && !res)
    {
        document.getElementById("erroremail").innerHTML="Please fill out email";
        return false;
    }
    if(!res)
    {
        document.getElementById("error").innerHTML="Email format is not correct";
        return false; 
    }
    else
    {
        document.getElementById("validate").innerHTML="Your email is " + email;
        
    }

    
    if (pwd == "" && pwd.length<8)
    {
        document.getElementById("errorpwd").innerHTML="Please fill out password";
        return false;
    }
    // if( pwd.length<8)
    // {
    //     document.getElementById("error").innerHTML= "Password cannot be less than 8 characters";
    //     return false;
    // }
    // else
    // {
    //     document.getElementById("validate").innerHTML="Your password is " + pwd;
    // }


    // if (file == "")
    // {
    //     document.getElementById("errorfile").innerHTML="Please fill out file";
    //     return false;
    // }

    if (fname == "")
    {
        document.getElementById("errorfname").innerHTML="Please fill out first name";
        
    }
    else if(fname.length<5)
    {
        document.getElementById("error").innerHTML="Firstname cannot be less than 5 characters!";
       
    }
    else
    {
        document.getElementById("validate").innerHTML= "Your first name is " + fname;
    }

    if(lname == "" && lname.length<5)
    {
        document.getElementById("errorlname").innerHTML="Please fill out Last name";
        return false;
    }
    if(lname.length<5)
    {
        document.getElementById("error").innerHTML="Lastname cannot be less than 5 characters!";
        return false;
    }
    else
    {
        document.getElementById("validate").innerHTML="Your last name is " + lname;
    }

    if(age == "")
    {
        document.getElementById("errorage").innerHTML="Please fill out age";
        
    }
    else
    {
        document.getElementById("validate").innerHTML="Your age is " + age;
        variable = variable+1;
        
    }

    if(des == "")
    {
        document.getElementById("errordes").innerHTML="Please fill out designation";
        return false;
    }
    else
    {
        document.getElementById("validate").innerHTML="Your designation is " + des;
    }

    if(pl1 == "" && pl2 == "" && pl3 == "")
    {
        document.getElementById("errorpl").innerHTML="Please fill out prefered Lnaguage";
        return false;
    }
    else
    {
        document.getElementById("validate").innerHTML="Your prefered languages are " + pl1 +" "+ pl2 +" "+ pl3;
    }

    if (email == "" && !res)
    {
        document.getElementById("erroremail").innerHTML="Please fill out email";
        return false;
    }
    if(!res)
    {
        document.getElementById("error").innerHTML="Email format is not correct";
        return false; 
    }
    else
    {
        document.getElementById("validate").innerHTML="Your email is " + email;
        
    }

    
    if (pwd == "" && pwd.length<8)
    {
        document.getElementById("errorpwd").innerHTML="Please fill out password";
        return false;
    }
    // if( pwd.length<8)
    // {
    //     document.getElementById("error").innerHTML= "Password cannot be less than 8 characters";
    //     return false;
    // }
    // else
    // {
    //     document.getElementById("validate").innerHTML="Your password is " + pwd;
    // }


    // if (file == "")
    // {
    //     document.getElementById("errorfile").innerHTML="Please fill out file";
    //     return false;
    // }
    return false;
}

    