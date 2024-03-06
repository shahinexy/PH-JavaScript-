function submit(){
    const inputFild = document.getElementById('input_fild');
    const errorFild = document.getElementById('error_fild');
    const inputValue = inputFild.value;

    // if we use try catch we can throe the error and it will also execut the below code. we use this when we know that this code may throw a error.
    try{
        // this code have possibility to give an error
        // console.log(a);
        const age = parseInt(inputValue);
        if(isNaN(age)){
            throw 'Pleace enter a valid number'
        }
        else if(age < 18){
            throw 'Child not allowed';
        }

        errorFild.innerText = '';
    }
    catch(error){
        console.log('ERROR:', error);
        errorFild.innerText = 'ERROR: ' + error;
    }
    // finally will execute no matter what, it throw an error or not.
    finally{
        console.log('finally alawys execute the code');
    }

    console.log('It will show after showing my custom error');
}