class Solution{
    armstrongNumber(n){
        //code here
        let num = 0;

        for(let i=n; i>0; i=Math.floor(i/10)){
            num = num + (i%10)**3;
        }

        return num === n ? "Yes" : "No"
    }
}