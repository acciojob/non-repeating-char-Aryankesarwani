function firstNonRepeatedChar(str) {
 // Write your code here
	
	freq={};
	for(let chars of str){
		freq[chars]=(freq[chars] || 0) + 1;
	}
	
for(let chars of str){
	if(freq[chars] === 1) {
		// console.log(freq[chars]);
		return chars;
	}
}
return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
