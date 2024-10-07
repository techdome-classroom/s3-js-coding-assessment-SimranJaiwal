/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    for(let i=0;i<s.length;i++){
        let char==='('){
            stack.push(')');
        } else if (char === '[') {
            stack.push(']');
        } else if (char === '{') {
            stack.push('}');
        } 
        // If it's a closing bracket, check if it matches the top of the stack
        else if (char === ')' || char === ']' || char === '}') {
            if (stack.pop() !== char) {
                return false;  // Mismatch found
            }
        }
    }
     return stack.length === 0;
};

module.exports = { isValid };


