//1*:
// 26. Создать переменную “age_1” и присвоить ей значение 10
// 27. Создать переменную “age_2” и присвоить ей значение 18
// 28. Создать переменную “age_3” и присвоить ей значение 60
// 29. Создать if в котором будите проверять значение переменной age_1
// 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// 33. Иначе выводите “Technical work”.
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования
//}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61

age_2 = 18
age_3 = 60

const checkAge = function(age) {
    if (age < age_2){
        console.log("You don’t have access cause your age is " + age + " It’s less then " + age_2)
    } else if (age >= age_2 && age < age_3){
        console.log("Welcome!")
    } else if (age > age_3){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }  
}
checkAge(17)
checkAge(18)
checkAge(60)
checkAge(61)


//2*:
//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
//И если он не Number - кидалась ошибка.

age_2 = 18
age_3 = 60

const checkAge1 = function(age) {
if (typeof age == 'number') {
    if (age < age_2){
        console.log("You don’t have access cause your age is " + age + " It’s less then " + age_2)
    } else if (age >= age_2 && age < age_3){
        console.log("Welcome!")
    } else if (age > age_3){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
} else console.log('Not an integer value')   
}
checkAge1(17)
checkAge1(18)
checkAge1(60)
checkAge1(61)
checkAge1('aaa')
checkAge1('20')   //Not an integer value

//3**:
//Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) 
//пропускалось, преобразовываясь в number

age_2 = 18
age_3 = 60

const checkAge2 = function(age) {
    age = Number(age)
    console.log(age)
//if (typeof age == 'number') {
if(age) {                       // проверяет false или true
    if (age < age_2){
        console.log("You don’t have access cause your age is " + age + " It’s less then " + age_2)
    } else if (age >= age_2 && age < age_3){
        console.log("Welcome!")
    } else if (age > age_3){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
} else console.log('Not an integer value')   
}
checkAge2(17)
checkAge2(18)
checkAge2(60)
checkAge2(61)
checkAge2('aaa')  //Nan - not a number
checkAge2('20')
checkAge2('0')    //Nan - not a number, по стандарту ложное значение

age_2 = 18
age_3 = 60

const checkAge3 = function(age) {
    age = Number(age)  // при преобразовании в Number всегда false: 0, ' ', NaN, Null, Undefind
    console.log(age)

if(! isNaN(age)) {        //проверяем что будет не false                  
    if (age < age_2){
        console.log("You don’t have access cause your age is " + age + " It’s less then " + age_2)
    } else if (age >= age_2 && age < age_3){
        console.log("Welcome!")
    } else if (age > age_3){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
} else console.log('Not an integer value')   
}
checkAge3(17)
checkAge3(18)
checkAge3(60)
checkAge3(61)
checkAge3('aaa')  
checkAge3('20')
checkAge3('0')   //You don’t have access cause your age is 0 It’s less then 18
checkAge3('')   //пустая строка преобразовывается в ноль

const checkAge4 = function(age) {
if(age && !isNaN(age)) {        //проверяем что это значение и будет не false                  
    if (age < age_2){
        console.log("You don’t have access cause your age is " + age + " It’s less then " + age_2)
    } else if (age >= age_2 && age < age_3){
        console.log("Welcome!")
    } else if (age > age_3){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
} else console.log('Not an integer value')   
}
checkAge4(17)
checkAge4(18)
checkAge4(60)
checkAge4(61)
checkAge4('aaa')  
checkAge4('20')
checkAge4('0')   //You don’t have access cause your age is 0 It’s less then 18
checkAge4('')  //Not an integer value

//4***:
//Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в 
//привязанной верстке


//const checkAge5 = function(age) {
//    if(age && !isNaN(age)) {                         
//        if (age < age_2){
//            alert("You don’t have access cause your age is " + age + " It’s less then " + age_2)
//        } else if (age >= age_2 && age < age_3){
//            alert("Welcome!")
//        } else if (age > age_3){
//            alert("Keep calm and look Culture channel")
//        } else {
//            alert("Technical work")
//        }
//    } else alert('Not an integer value')   //alert для браузера
//    }
//let a = prompt('Enter your age')
//checkAge5(a)


const div = document.getElementById('d')
const checkAge6 = function(...age) {   //... создается массив
    age.forEach(el => {
        if(el && !isNaN(el)) {                        
            if (el < age_2){
                div.innerHTML += "You don’t have access cause your age is " + el + " It’s less then " + age_2
            } else if (el >= age_2 && el < age_3){
                div.innerHTML += "Welcome!"
            } else if (el > age_3){
                div.innerHTML += "Keep calm and look Culture channel"
            } else {
                div.innerHTML += "Technical work"
            }
        } else div.innerHTML += 'Not an integer value' 
    })
}

checkAge6(17, 18, 60, 61, '', '20', 'fff', '0')
