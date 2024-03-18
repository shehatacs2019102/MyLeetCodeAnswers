function isPalindrome(s){
    s= s.toLowerCase().replace(/[/W_]/g,"")
    let left = 0;
    let right = s.length-1;
    while (left< right){
        if(s[left] !== s[right]){
            console.log("false")
        }
        left++;
        right--;
    }
    console.log("true");
}
var Pals = "civic"
isPalindrome('abba')
function LongestPalindrom(s){
    let maxLength = 1;
    let startIndex = 0;
    function expandAroundMiddle (left, right){
        while (left >= 0 && right < s.length && s[left] === s[right]){
            const currentPalLength = right - left + 1;
            if (currentPalLength> maxLength){
                maxLength = currentPalLength;
                startIndex = left;
            }
            left -= 1;
            right += 1;

        }
    } 
    for (let i = 0; i<s.length; i++){
        expandAroundMiddle(i - 1, i + 1);
        expandAroundMiddle(i, i + 1);
    }
    console.log(s.slice(startIndex, startIndex + maxLength).length);
}
LongestPalindrom(Pals);