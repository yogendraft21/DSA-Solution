function categoryOfString(N,str) {
    var alpha="abcdefghijklmnopqrstuvwxyz";
var bag="";
for(var i=0;i<N;i++)
{
    for(var j=0;j<alpha.length;j++)
    {
        if(str[i]===alpha[j])
        {
            bag+=(j+1);
        }
    }
}
console.log(bag);
    
}
