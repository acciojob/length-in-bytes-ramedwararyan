const byteSize = (str) => {
  // write your code 
	return new TextEncoder().encode(str).length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
