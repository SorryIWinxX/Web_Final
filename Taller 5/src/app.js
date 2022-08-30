


//--------------------------------VALID CONFIRM--------------------//




//Function always active when people write something
// validate for ifs


function validateUserName() {

    
    var name1 = document.getElementById('username').value; //value of input
    var name2 = document.getElementById('username'); // All element of input
    var nameControl= name2.parentNode.parentNode; // Node father to element



    // least 1 character entered

    if (name1.length == 0 ) {
        

        
        var small = nameControl.querySelector('small');
        small.innerHTML = 'Name is required'
        nameControl.className ='form-control error';


        return false;
    }


    // Only letters

    if (!name1.match(/^[A-Za-z]+$/)) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Write Name'
        nameControl.className ='form-control error';

        return false;
    }

    // least 3 character entered

    if (name1.length <= 3) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Write Name'
        nameControl.className ='form-control error';

        return false;
    }

    // Less than 25 characters

    if (name1.length >= 25) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Limit 25 characters'
        nameControl.className ='form-control error';

        return false;
    }
    

    // input validate

    nameControl.className = 'form-control success';
    return true;


}


function validatePassword() {

    
    var password = document.getElementById('password').value; //value of input
    var password1 = document.getElementById('password'); // All element of input
    var passwordControl= password1.parentNode.parentNode; // Node father to element
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{15,})");


    // least 1 character entered

    if (password.length == 0 ) {
        
        
        var small = passwordControl.querySelector('small');
        small.innerHTML = 'Password is required'
        passwordControl.className ='form-control error';


        return false;
    }


    // Only digits

    if (!password.match(strongRegex)) {

        var small = passwordControl.querySelector('small');
        small.innerHTML = 'Password so easy';
        passwordControl.className ='form-control error';

        return false;
    }

    // least 3 character entered

    if (password.length <= 15) {

        var small = passwordControl.querySelector('small');
        small.innerHTML = 'Less 15 numbers'
        passwordControl.className ='form-control error';

        return false;
    }

    // Less than 25 characters

    if (password.length >= 20) {

        var small = passwordControl.querySelector('small');
        small.innerHTML = 'Limit 20 characters'
        passwordControl.className ='form-control error';

        return false;
    }
    

    // input validate

    passwordControl.className = 'form-control success';
    return true;


}

function validateEmail() {

    
    var email = document.getElementById('email').value; //value of input
    var email1 = document.getElementById('email'); // All element of input
    var emailControl= email1.parentNode.parentNode; // Node father to element
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{15,})");


    // least 1 character entered

    if (email.length == 0 ) {
        
        
        var small = emailControl.querySelector('small');
        small.innerHTML = 'Email is required'
        emailControl.className ='form-control error';


        return false;
    }


  

    if (email.length <= 10) {

        var small = emailControl.querySelector('small');
        small.innerHTML = 'Write your Email'
        emailControl.className ='form-control error';

        return false;
    }

    // Less than 25 characters

    if (email.length >= 120) {

        var small = emailControl.querySelector('small');
        small.innerHTML = 'Limit 120 characters'
        emailControl.className ='form-control error';

        return false;
    }
    

    // input validate

    emailControl.className = 'form-control success';
    return true;


}



function confirmPass() {
    

    var password = document.getElementById('password').value;

    console.log(password);

    var confirmPassword = document.getElementById('confirmPassword').value;
    var confirmPassword1 = document.getElementById('confirmPassword');
    var confirmControl = confirmPassword1.parentNode.parentNode;

    if (password!=confirmPassword) {
        var small =confirmControl.querySelector('small');
        small.innerHTML='your Password no coincide';
        confirmControl.className='form-control error';
    }

    if(password==confirmPassword){
        confirmControl.className='form-control success';
    }


}




//Checkbox validate

function clickBox() {
    let textBox = document.getElementById('textbox');

    if (document.getElementById('checkbox').checked) {
        textBox.innerHTML = '<label for="" style="float: center;">Describe your sick</label>\
                <div class="input-addon">\
                    <i class="material-icons">border_color</i>\
                </div>\
                <textarea></textarea>'        
    }else{
        textBox.innerHTML = ''
    }

}


