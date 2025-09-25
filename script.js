function firstNonRepeatedChar(str) {
 // Write your code here
	freq={};
	for(let char : str){
		freq[char]=(freq[char] || 0) + 1;
	}
for(let char : str){
	if(freq[char] === 1) return char;
}
return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
