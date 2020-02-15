


//// =================================>Initial functions
function getHistory () {
    return document.getElementById('history-value').innerText
  }
  function printHistory (number) {
    document.getElementById('history-value').innerText = number
  }
 
  function getOutput () {
    return document.getElementById('output-value').innerText
  }
  
  function printOutput (number) {
    if (number === '') {
      document.getElementById('output-value').innerText = number
    } else {
      document.getElementById('output-value').innerText = implementComma(number)
    }
  }
  
  function implementComma (number) {
    if (number === '-') {
      return ''
    }
    var num = Number(number)
    var value = num.toLocaleString('en') /// =====> applying comma to larger numbers
    return value
  }
  
  function removeComma (number) {
    return Number(number.replace(/,/g, ''))      //removing any comma form the number.
  }
  
  
  
  //..................................................................................................
  
  
  
  const numbers = document.querySelectorAll('.number')
  for (let indx = 0; indx < numbers.length; indx++) {
    const current = numbers[indx]
    current.addEventListener('click', function () {
      var output = removeComma(getOutput())
      if (typeof output === 'number') {
        output = output + this.id
        printOutput(output)
      }
    })
  };
  
  const operatortions = document.getElementsByClassName('operator')
  for (let element = 0; element < operatortions.length; element++) {
    const current = operatortions[element]
    current.addEventListener('click', function () {
      if (this.id === 'clear') {  //Giving C functionality 
        printOutput('')
        printHistory('')
      } else if (this.id === 'backspace') { //Giving CE functionality
        var result = String(removeComma(getOutput()))
        if (result) {
          result = result.substr(0, result.length - 1) //= =========> remove number starting from the end. (this function will return everything except for the last number!!)
          printOutput(result)
        }
      } else {
        var output = getOutput()
        var history = getHistory()
        if (output === '' && history !== '') {                 
          if (typeof history[history.length - 1] !== 'number') { /// // This is to enable us to change operators, incase someone changed their mind...!
            history = history.substr(0, history.length - 1)      //==> If typeof last element in history is not a number(so, its an operator), its going to be removed using "substr"
          }
        }
        if (output !== '' || history !== '') {
          output = output === '' ? output : removeComma(output)
          history = history + output
          if (this.id === '=') {
            var result = eval(history)
            printOutput(result)           //When we click = it evaluates the history and prints the result, also it clears the history!!
            printHistory('')
          } else {
            history = history + this.id
            printHistory(history)            //If we clicked any other operator, the clicked Id will be added to history and it clears the output, by printOutput('') 
            printOutput('')
          }
        }
      }
    })
  }

 





    