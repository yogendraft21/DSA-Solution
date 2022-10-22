function binaryString3(n,str){
    // optimal solution O(n)
    
        let start = 0;
        let end = n-1;
        let x=0;
        let y=0;
        while(start<=end){
            if(str[start]=='1'){
                x = start;
                break;
            }
            start++;
        }
        while(end>=start){
            if(str[end]=='1'){
                y = end;
                break;
            }
            end--;
        }
        let result  = (y-x)+1;
        
        if(result<=1){
            console.log("0")
        }else{
            
        console.log(result)
        }
       
    }
    let str = "100010";
    let n = str.length;
    binaryString3(n,str)


      //   let ans=0;
    //   for(let i=0;i<n;i++){
    //     for(let j=i;j<n;j++){
    //       if(str[i]==str[j] && str[i]==='1'){
    //         ans = Math.max(ans,j-i+1)
    //       }
    //     }
    //   }
    //      if(ans<=1){
    //          console.log("0")
    //      } else{
    //      console.log(ans)
    //      }  
    
    