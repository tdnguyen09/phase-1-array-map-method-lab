const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*const titleCased = () => {let tutorials = tutorials.map(str => str.charAt(0).toUpperCase() + str.slice(1))
  return tutorials
}


let hey = 'what does the this keyword mean?'.split("")*/
const titleCased = () => {
  return tutorials.map(tutorial => {
    let words=tutorial.split(' ')
    let capitalizedWords=words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    let result=capitalizedWords.join(' ')
    return result
  })
}
console.log(titleCased())