
const age_2 = 18;
const age_3 = 60;

const div = document.getElementById('d')
const checkAge6 = function(...age) {   
    age.forEach(el => {
        if(el && !isNaN(el)) {                        
            if (el < age_2){
                div.innerHTML +="You don’t have access cause your age is " + el + " It’s less then " + '<br />';
            } else if (el >= age_2 && el < age_3){
                div.innerHTML +="Welcome!" + '<br />';
            } else if (el > age_3){
                div.innerHTML +="Keep calm and look Culture channel" + '<br />';
            } else {
                div.innerHTML +="Technical work" + '<br />';
            }
        } else div.innerHTML +='Not an integer value'  + '<br />'
    })
}

checkAge6(17, 18, 60, 61, '', '20', 'fff', '0')
