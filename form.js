

let psdEl = document.getElementById("psd")
let psdWarningEl = document.getElementById("psdWarning")

let submitButtonEl = document.getElementById("submitButton")
let myFormEl = document.getElementById("myForm");


let phoneNumberEl = document.getElementById("phoneNumber")
let phoneNumberWarningEl = document.getElementById("phoneNumberWarning")

let emailEl = document.getElementById("email")
let emailWarningEl = document.getElementById("emailWarning")

let confirmEmailEl = document.getElementById("confirmEmail")
let confirmEmailWarningEl = document.getElementById("confirmEmailWarning")

let dateOfBirthEl = document.getElementById("dateOfBirth")
let dateOfBirthWarningEl = document.getElementById("dateOfBirthWarning")








psdEl.addEventListener("blur", function(event){
    if (event.target.value === ""){
        psdWarningEl.textContent = "Required*"
        psdWarningEl.style.color = "Red"
    }

    

    else{
        psdWarningEl.textContent = ""
    }
              
})






let passwordCheck = function(){
        psdByUser = psdEl.value

    if (passwordByUser === ""){

        psdWarningEl.textContent = "Required*"
        psdWarningEl.style.color = "Red"

    }

    else{



        let capitalLetter = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g
        let resultForCapitalLetter = psdByUser.match(capitalLetter).length

        let smallLetter = /[abcdefghijklmnopqrstuvwxyz]/g
        let resultForSmallLetter = psdByUser.match(smallLetter).length

        let numbers = /[0123456789]/g
        let resultForNumbers = psdByUser.match(numbers).length

        let specialChars = /[!@#]/g
        let resultForSpecialChars = psdByUser.match(specialChars).length

        let a = ((resultForCapitalLetter > 0) && (resultForSmallLetter > 0) && (resultForNumbers > 0) && (passwordByUser.length >= 8) && (resultForSpecialChars> 0))
           
            if (a)
            {
                psdWarningEl.textContent = "Valid Password"
                psdWarningEl.style.color = "green"
            }

            else if (psdByUser.length <= 8){
                psdWarningEl.textContent = "Invalid Password"
                psdWarningEl.style.color = "red"
            }

        }
}  



let phoneNumberCheck = function(){
    let userNumber = phoneNumberEl.value
    let strOfUserNumber = userNumber.toString()
   
    if (strOfUserNumber.includes("+91") && (strOfUserNumber.length === 13)){
        phoneNumberWarningEl.textContent = "Valid Number"
        phoneNumberWarningEl.style.color = "green"
    }
    else{
        phoneNumberWarningEl.textContent = "Invalid Number"
        phoneNumberWarningEl.style.color = "red"
    }

}



let confirmEmailCheck = function(){

    let userEmail = emailEl.value

    let confirmEmail = confirmEmailEl.value

    if (emailEl.value === ""){
        emailWarningEl.textContent = "required*"
        emailWarningEl.style.color = "red"
    }

    



    else{
        emailWarningEl.textContent = ""
        confirmEmailWarningEl.textContent = ""

        if (userEmail == confirmEmail){
            confirmEmailWarningEl.textContent = "email matched"
            confirmEmailWarningEl.style.color = "green"
        }

        else{
            confirmEmailWarningEl.textContent = "email doesn't matched"
            confirmEmailWarningEl.style.color = "red"
        }
    }
}
function validateDateOfBirth() {
    // Get the selected date from the input field
    let dobInput = document.getElementById('dob');
    let selectedDate = new Date(dobInput.value);

    // Calculate age based on the selected date
    let today = new Date();
    let age = today.getFullYear() - selectedDate.getFullYear();

    // Check if age is greater than 18
    if (age > 18) {
        document.getElementById('dateOfBirth').style.display = 'block';
        document.getElementById('dateOfBirth').style.color='green';
        document.getElementById('Warning').style.display = 'none';
    } else {
        
        
        document.getElementById('Warning').style.display = 'block';
        document.getElementById('dateOfBirth').style.display = 'none';
    }
}



let capcha = document.getElementById('capcha')
let capchainp = document.getElementById('capchainp')
let capchW = document.getElementById('capchW')
let code = generateRandomCode()
capcha.innerText=code


function generateRandomCode() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var code = '';

    for (var i = 0; i < 4; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }

    return code;
}
let vailCapcha =()=>{
    let capValu = capchainp.value.trim()
    if(capValu != capcha.innerText){
        code = generateRandomCode()
        capcha.innerText=code
        capchW.innerText='invailid capcha'
        capchW.style.color='red'
        
       
    }else{
        capchW.innerText='sccessful'
        capchW.style.color='green'
        
    }
}












submitButtonEl.onclick = function(){
   
    phoneNumberCheck()
    confirmEmailCheck()
   
    passwordCheck()
    
   
}




myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    vailCapcha()
  });
  
