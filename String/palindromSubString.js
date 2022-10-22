function masaiPalSubString(str){
    let n = str.length;
    let max=0;
    let s1="";
    for(let i=0;i<n;i++){
        s1 = "";
        for(let j=i;j<n;j++){
            s1 += str[j]
            
            if(s1 === s1.split('').reverse().join('')){
                if(s1.length>max){
                    max = s1.length;
                }
            }
        }
    }console.log(max);
  }
  let str = "theracareisgood"
  masaiPalSubString(str);