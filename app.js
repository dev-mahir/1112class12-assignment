// Age check with status

const ageCheckform = document.querySelector('.age-check-form');


ageCheckform.addEventListener('submit',function(e){

    e.preventDefault();

    
    let year = ageCheckform.querySelector('input[type = "number"]');
    let  ageResult = document.querySelector('.age-result');
    let  error = document.querySelector('.age-error');
    let  ageStatus = document.querySelector('.age-status');

    let age =  ageCheck(year.value);
    let status = ageStatusCheck(age);


    if( year.value == ''){
        error.innerHTML = 'All fields are required';
    }else{
        ageStatus.innerHTML = `Status: ${status}`;
        ageResult.innerHTML = `Age: ${age}`;
        error.innerHTML = '';
    }

});


// Currency converter part
const cConverter = document.querySelector('.currency-converter');

cConverter.addEventListener('submit',function(e){
    e.preventDefault();

    let amount = document.querySelector('#amount');
    let currency = document.querySelector('#currency');
    let error = document.querySelector('.error-msg');
    let showResult = document.querySelector('.resultshow');


    if( amount.value == '' || currency.value == ''){
        error.innerHTML = ` <p class="alert alert-danger">All fields are required.</p>`;
        showResult.innerHTML = '';
    }else{
        showResult.innerHTML = `Total: ${amount.value * currency.value} Taka`;
        error.innerHTML = '';
    }
});



// Marriage age check 

const marriageAge = document.querySelector('.marriage-check-form');

marriageAge.addEventListener('submit',function (e) {
    e.preventDefault();

    let age = document.querySelector('#input-age');
    let genders = marriageAge.querySelector('input[type = "radio"]:checked');
    let showStatus = document.querySelector('#resultshow');
    let error = document.querySelector('#error-msg');
    let checkGender = document.querySelector('#gender-check');


    let status  = marriageStatus(age,genders);

    error.innerHTML = status.status;
    checkGender.innerHTML = status.gender;


    function marriageStatus( age , gender ) {
        if( age.value == '' || gender.value == ''){
            return{
                status : `<p class="alert alert-danger">All fields are required.</p>`,
                gender : ''
            }   
            
        }else if( age.value >= 0 && age.value <= 6 ){
            
            return{
                status : `<p class="alert alert-danger"> Tomar biyer boyos hoyni . tumi shisu </p>`,
                gender : gender.value
            } 
    
        }else if( age.value >= 7 && age.value <= 12 ){
            return{
                status : `<p class="alert alert-danger">Tomar biyer boyos hoyni . tumi ekhono shishu </p>`,
                gender : gender.value
            } 
    
        }else if( age.value >= 13 && age.value <= 17 ){
            return{
                status :  `<p class="alert alert-danger">Tomar biyer boyos hoyni . tumi kishor .</p>`,
                gender : gender.value
            } 

        }else if( age.value >= 18 && age.value <= 30 ){
            return{
                status :   `<p class="alert alert-success">Tomar biyer boyos hoyese . tumi ekhon jubok </p>`,
                gender : gender.value
            } 
        }else if( age.value >= 31 && age.value <= 40 ){
            return{
                status :    `<p class="alert alert-danger">Tomar biyer boyos hoyese . taratari biye korun . boyos beshi hoye jasche</p>`,
                gender : gender.value
            } 
        }else if( age.value >= 41 && age.value <= 50 ){
            return{
                status :     `<p class="alert alert-danger">tomar boyos onek beshi</p>`,
                gender : gender.value
            }
        }else{
            return{
                status :    `<p class="alert alert-danger">tomi boyosko.</p>`,
                gender : gender.value
            }

        }
    }

    

});


