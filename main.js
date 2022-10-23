const confirmButton = document.querySelector('.confirm');
confirmButton.onclick = function () {
    // Inputs 
    let nameInput = document.querySelector('#inputName').value;
    let cardNumberInput = document.querySelector('#inputNumber').value;
    let expMonthInput = document.querySelector('#expiryMonth').value;
    let expYearInput = document.querySelector('#expiryYear').value;
    let cvcInput = document.querySelector('#cvc').value;

    //Error messages
    let numberError = document.querySelector('.numberError');   
    let nameError = document.querySelector('.nameError');   
    let dateError = document.querySelector('.dateError');

    // Conditions for execution
    if ( nameInput !== '' && cardNumberInput.length === 19 && cardNumberInput !== '' && expMonthInput !== '' && expYearInput !== '' 
        && cvcInput !== '' && expMonthInput.length === 2 && expYearInput.length === 2 && cvcInput.length === 3) {
        // Thank you card
        let remove = document.querySelector('.remove');
        let add = document.querySelector('.add');
        let cardNumber = document.querySelector('.digits');
        let name = document.querySelector('.name');
        let expiryDate = document.querySelector('.expDate'); 
        let cvc = document.querySelector('.cvc');
        remove.style.display = "none";
        add.style.display = "initial";
        name.innerHTML = nameInput;    
        cardNumber.innerHTML = cardNumberInput;        
        expiryDate.innerHTML = expMonthInput + '/' + expYearInput;         
        cvc.innerHTML = cvcInput;
    } else if (nameInput === '') {
        nameError.style.display = "initial"
    } else if (nameInput !== '') {
        nameError.style.display = "none"
    } 
    
    // Card number errors
    if (cardNumberInput === '' ) {
        console.log('error')  
        numberError.innerHTML = 'Please fill out this field.'
        numberError.style.display = "initial"; 
    } else if (cardNumberInput.length < 19) {
        numberError.style.display = "initial";
        numberError.innerHTML = 'Wrong format.';     
    } else if (cardNumberInput !== '' && cardNumberInput.length === 19) {
        numberError.style.display = "none"
    }
    
    // Expiry date errors
    if (expMonthInput === '' || expYearInput === '' || cvcInput === '') {
        dateError.style.display = "initial";
        dateError.innerHTML = "Please fill out this field.";
    } else if (expMonthInput.length !== 2 || expYearInput.length !==2 || cvcInput.length !== 3) {
        dateError.innerHTML = 'Wrong format.';
        dateError.style.display = "initial";
    } else if (expMonthInput !== '' && expYearInput !== '' && cvcInput !== '' && expMonthInput.length === 2 && expYearInput.length === 2
        && cvcInput.length === 3) {
        dateError.style.display = "none";
    }
}