<!DOCTYPE HTML>
<html>
    <head>
        <link rel="stylesheet" href="CSS/style.css">
    </head>

    <body>   
        <div class="header">
            <h2>ABC Mangement System</h2>
            <h4>We Create Future</h4>
        </div>

        <div class="nav">
            <a href="#home">Home</a>
            <a href="#about us">About US</a>
            <a href="#shop">Shop</a>
        </div>
            
        <div class = "registration">  
            <h2>
                Registration From
            </h2>
        </div>
        <hr>
        
        <form action="" method="POST">
            <table>
                <tr>
                    <td class="table"><label for="fname" >First Name:</label></td>                       
                    <td class="table"><input type="text" id="fname" name="fname"></td>
                                                      
                </tr>
                <tr>
                    <td class="table"><label for="lname">Last Name:</label></td>                       
                    <td class="table"><input type="text" id="lname" name="lname" ></td>                                     
                </tr>
                <tr>
                    <td class="table"><label for="age">Age:</label></td>                       
                    <td class="table"><input type="text" id="age" name="age"></td>                                    
                </tr>
                <tr>
                    <td class="table"><label for="designation">Designation:</label></td>                       
                    <td class="table">
                        <input type="radio" id="jp" name="r1" value="Junior Programmer">
                        <label for="jp">Junior Programmer</label>
                        <input type="radio" id="sp" name="r1" value="Senior Programmer">
                        <label for="sp">Senior Programmer</label>
                        <input type="radio" id="pl" name="r1" value="Project Lead">
                        <label for="pl">Project Lead</label>
                    </td>
                                                                                                          
                </tr>
                <tr>
                    <td class="table"><label for="prflan">Prefered Language:</label></td>
                    <td class="table">
                        <input type="checkbox" id="lan1" name="lan1" value="JAVA">
                        <label for="lan1">JAVA</label>
                        <input type="checkbox" id="lan2" name="lan2" value="PHP">
                        <label for="lan2">PHP</label>
                        <input type="checkbox" id="lan3" name="lan3" value="C++">
                        <label for="lan3">C++</label>
                    </td>
                    
                </tr>
                <tr>
                    <td class="table"><label for="email">Email:</label></td>                       
                    <td class="table"><input type="email" id="email" name="email"></td>                                  
                </tr>
                <tr>
                    <td class="table"><label for="pwd">Password:</label></td>                       
                    <td class="table"><input type="password" id="pwd" name="pwd"></td>                                  
                </tr>  
                <tr>
                    <td class="table"><label for="file">Please choose a file</label></td>
                    <td class="table"><input type="file" id="file" name="file"></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Submit" id="submit">
                    <input type="reset" id="reset"></td>
                </tr>
            </table>           
        </form>       
    </body>
</html>