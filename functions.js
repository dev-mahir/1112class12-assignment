/**
 *  Calculate age
 * @param {*} year 
 * @returns age
 */

function ageCheck( year ){
       let date = new Date();
       return date.getFullYear() - year;
}

/**
 * Age check status
 * @param {*} age 
 * @returns 
 */

function ageStatusCheck( age ){
       
       if( age >= 0 && age <= 6 ){
           return 'tumi shisu';
       }else if( age >= 7 && age <= 12 ){
           return 'tumi kishor';
       }else if( age >= 13 && age <= 17 ){
           return 'tumi young';
       }else if( age >= 18 && age <= 35 ){
           return 'tumi adult';
       }else{
           return 'tumi old'
       }
}

