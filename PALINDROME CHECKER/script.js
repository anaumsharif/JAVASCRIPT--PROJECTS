

// palindrome function declaration
//palindrome logic : whn a loop is passed ,the half string is traversed reversed and the two strings is compared
function isPalindrome(str){
    //using reguklar expression 
    // providing clea string 
    const cleanStr =str.toLowerCase().replace(/[^a-z0-9]/g,'');

    //console.log(cleanStr);
    
    //reversing the string and converting into array :              const  reversedStr = cleanStr.split('').reverse()
    //if happy is passed it turns as  ['y', 'p', 'p', 'a', 'h']
    const  reversedStr = cleanStr.split('').reverse().join('');
    //console.log(reversedStr);
    return cleanStr===reversedStr;

}


// palindrome checker : function declaration 
function palindromeChecker(){
    const inputText=document.getElementById("inputText");
    const result=document.getElementById("result");

    if(isPalindrome(inputText.value)){
        result.textContent =`"${inputText.value}" is a Palindrome`;
    }
    else{
        result.textContent =`"${inputText.value}" is not a Palindrome`;

    }
    //sliding animation
    result.classList.add('fadeIn');
    // to empty the input type
    inputText.value ='';
}




document.getElementById('checkbutton').addEventListener("click",palindromeChecker)