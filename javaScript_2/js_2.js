//2я домашка по JS со звездочками:

//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, 
//начиная со степени 1

const fillArray = n => {
  let arr = [];
  if (n) for (let i = 1; i <= n;) arr.push(2 ** (i++));
  return arr;
}

console.log(fillArray(10));

for(let i = 1; i < 11; i++){
  console.log(2 ** i)
}

for(let i = 1; i < 11; i++){
  console.log(Math.pow(2,i))
}

const pow = function(counter) {
  for(let i =1; i <=counter; i++)
  console.log(2 ** i)
}


//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2


//2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось 
//:), во второй :):) и так далее
//Пример в консоли:
//:)
//:):)
//:):):)
//:):):):)

let result = ''
let smile = ':)'

for(let i =1; i<6; i++) {
  console.log(smile.repeat(i))
}





//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль 
//  	(как в условии смайлик), а также количество строк для вывода 
//	  e.g. function printSmile(stroka, numberOfRows)

function smilik(str, numberOfRows) {
  for(let i = 1; i<=numberOfRows; i++) {
    result = result + str
    console.log(result)
  }
}

smilik(':(', 10)

//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, 
//	   сколько в слове гласных, и сколько согласных букв.
//  	e.g. function getWordStructure(word)
//
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв

//Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word) {
  const vowels = 'aeiouy'.split('')
  const consonants = 'bcdfghlmnpqrstvwxz'.split('')
  console.log(vowels)

  let vowelsCount = 0;
  let consonantsCount = 0;
  for(const char of word) {
    console.log(char)
    if(char.includes(char)) vowelsCount++
    else if(consonants.includes(char)) consonantsCount++
  }
  console.log('В слове ${word} : ${vowelsCount} гласных и ${consonantsCount} согласных букв')
}
getWordStructure("Check-list")

function getWordStructure2(word) {
  console.log('В слове ${word} содержится ${(word.match(/[eiouy]/gi} гласных и ${consonantsCount} согласных букв')
}



//4**. Написать функцию, которая проверяет, является ли слово палиндромом
//e.g. function isPalindrom(word)

//Проверки: 'abba', 'Abba'

function isPalindrom(word) {
  word = word.toLowerClass()
  for(let i=0, j=word.length-1; i<word.length, j>=0; i++, j--) {
    if (word[i] !== word[j]) {

    }
  }
  return true
}
console.log(isPalindrom('abba'))


function isPalindrom2(word) {
  return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
}
console.log(isPalindrom2('Abba'))


function isPalindrom3(word) {
  word.toLowerCase();
  for(let i = 0; i<=word.length/2; i++) {
    if(word[i] !== word[word.length-1-i])
    return false
  }
  return true
}
console.log(isPalindrom3('Abba'))
