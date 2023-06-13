function convertToRoman(num) {
  var roma = num
 if (roma >= 1000) {
   roma = "M"
 } else if(roma > 500 && roma <= 900)
  { 
   roma = "CDM"
   }
 return roma
}

