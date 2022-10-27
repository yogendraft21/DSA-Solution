function findBalance(s){
    let sa = []
    if(s.length<=1){
        return "not balanced"
    }
    for(let i=0;i<s.length;i++){
        let x  = s[i]
        if(s[i]==='{' || s[i]==='(' || s[i]==='['){
            sa.push(s[i]);
            continue;
        }
        
        
         let check;
        switch(x){
           case ')':
               check = sa.pop();
               if(check=='{' || check=='[')
                    return "not balanced";
                break;
           case '}':
               check = sa.pop();
               if(check=='(' || check=='[')
                    return "not balanced";
                break;
           case ']':
               check = sa.pop();
               if(check=='(' || check=='{')
                    return "not balanced";
                break;
        }
    }
    if(sa.length==0){
        return "balanced";
    }else{
        return "not balanced";
    }
}

let str = "}(()){}";//
// (()
// ))))))
console.log(findBalance(str));