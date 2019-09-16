function rot13(str) { // LBH QVQ VG!
  
  var newarr = [];
  var newstr = "";
  
  for (i=0; i < str.length; i++){
    
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
      
      switch(str.charCodeAt(i)){
          
          case 65:
          newarr[i] = 78;
          break;
          case 66:
          newarr[i] = 79;
          break;
          case 67:
          newarr[i] = 80;
          break;
          case 68:
          newarr[i] = 81;
          break;
          case 69:
          newarr[i] = 82;
          break;
          case 70:
          newarr[i] = 83;
          break;
          case 71:
          newarr[i] = 84;
          break;
          case 72:
          newarr[i] = 85;
          break;
          case 73:
          newarr[i] = 86;
          break;
          case 74:
          newarr[i] = 87;
          break;
          case 75:
          newarr[i] = 88;
          break;
          case 76:
          newarr[i] = 89;
          break;
          case 77:
          newarr[i] = 90; //switch M to Z
          break;
          case 78:
          newarr[i] = 65; 
          break;  
          case 79:
          newarr[i] = 66; 
          break;  
          case 80:
          newarr[i] = 67; 
          break;  
          case 81:
          newarr[i] = 68; 
          break;  
          case 82:
          newarr[i] = 69; 
          break;  
          case 83:
          newarr[i] = 70;
          break;  
          case 84:
          newarr[i] = 71;
          break;  
          case 85:
          newarr[i] = 72; 
          break;  
          case 86:
          newarr[i] = 73; 
          break;  
          case 87:
          newarr[i] = 74; 
          break;  
          case 88:
          newarr[i] = 75; 
          break;  
          case 89:
          newarr[i] = 76; 
          break;  
          case 90:
          newarr[i] = 77;
          break;  
      }//end switch
    }//end if
    else {
      newarr[i] = str.charAt(i);
    }
      
     
    }//end for
  
 
  
  for (i = 0; i < newarr.length; i++){
     if(newarr[i] >= 65 && newarr[i] <= 90){
    newarr[i] = String.fromCharCode(newarr[i]);
    
  }//endif
  }//endfor
  
  newstr = newarr.join('');
  
  return newstr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
