module.exports = function check1(str, bracketsConfig) {
  let chars = str.split(''),
        stack = [],
        open = [],
        close = [],
        equals = [],
        closeIndex,
        equalsIndex,
        countEqualsBrackets = 0,
        openIndex;

  for (let i = 0; i < bracketsConfig.length; i++){
    if (bracketsConfig[i][1] !== bracketsConfig[i][0]) {
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);}
    else {equals.push(bracketsConfig[i][1]);}
  }

        for (let i = 0; i < chars.length; i++) {
          equalsIndex = equals.indexOf(chars[i])
           if (equalsIndex !== -1) {
              countEqualsBrackets++;
              if (countEqualsBrackets % 2 !== 0){
                stack.push(chars[i]);
              continue;}
              else {
                if (chars[i] !== stack.pop()) {
                  return false;
                }
              }
           }
          openIndex = open.indexOf(chars[i]);
          if (openIndex !== -1) {
              stack.push(openIndex);

              continue;
          }
          closeIndex = close.indexOf(chars[i]);
       if (closeIndex !== -1) {
           openIndex = stack.pop();
           if (closeIndex !== openIndex) {
               return false;
           }
          }
        }
           if (stack.length !== 0) {
            return false;


    }
        return true;
}

module.exports = function check(str, bracketsConfig) {

  let chars = str.split('');
  const open = [];
  const close = [];
  const stack = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < chars.length; i++) {
    if (stack.length === 0) {
    if (open.indexOf(chars[i]) >= 0) {
      stack.push(chars[i]);
    }
    else {
      if (open.indexOf(stack[stack.length - 1]) === close.indexOf(chars[i])) {
        stack.pop();
      } else {
        return false;
      }
    }
  } else {
    if (close.indexOf(chars[i]) >= 0){
        if (open.indexOf(stack[stack.length - 1]) === close.indexOf(chars[i])) {
        stack.pop();
      } else if (close.indexOf(chars[i]) === open.indexOf(chars[i])) {stack.push(chars[i])}
      else  {
        return false;
      }
    } else {
      stack.push(chars[i]);
    }
  }
}
  return stack.length === 0 ? true : false;
}