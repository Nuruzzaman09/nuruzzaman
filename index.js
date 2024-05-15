function openMenu(){
    const open = document.getElementById("open");
    const content = document.getElementsByClassName("content");
    open.style.height = "auto";
    
}
function closemenu(){
    const close= document.getElementById("open");
    close.style.height = "0px";
}
function stringToBit(event){
    event.preventDefault();
    let text = document.getElementById("textArea").value;
    let bit = "";
    text = text.toUpperCase();
    
	for(let i=0;i<text.length;i++){
		let value = text.charCodeAt(i) - 64;
		if(value == -32){
			value = 0;
		}
		else if(value == -18){
			value = 27;
		}
        let oneBit = [];
        let oneByte = "";
        for(let j = 4;j>=0;j--){
            let x = value%2;
            value = parseInt(value/2);
            oneBit[j] =  x;
        }
                 
        for(j=0;j<5;j++){
            oneByte = oneByte + oneBit[j];
        }
        bit=bit + oneByte;
	}
	document.getElementById("outPut").innerHTML = bit;
}