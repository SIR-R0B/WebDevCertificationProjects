function palindrome(str) {
  // Good luck!
  
  var lowstr = str.toLowerCase().split(" ").join('');
  
  var newstr = lowstr.replace(/\W|_/g,"");
  
  
  
  if (newstr == newstr.split("").reverse().join('')){
    return true;
  } else return false;
  //return true;
}



palindrome("0_0 (: /-\ :) 0-0");
