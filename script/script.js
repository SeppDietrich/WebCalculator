let deleteButton=document.getElementById('delete');
let removeButton=document.getElementById('remove');

let textBox = document.getElementById('textBox');
let text=textBox.childNodes[0];
let result= document.getElementById('result');






document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', () => {
        let value = item.innerHTML;
        if(text.nodeValue=='Numbers'){
            text.nodeValue='';
        }
        if(text.nodeValue=='Error'){
            text.nodeValue='';
        }
        switch (value) {
            case '=':
                try {
                    text.nodeValue= eval(text.nodeValue);
                    
                    result= document.getElementById('result');
                    result.innerText=eval(text.nodeValue);
                } catch {
                    text.nodeValue = 'Error'; 
                }
                break;
            case 'C':
                text.nodeValue = '';
                break;
            case '×':
                text.nodeValue+= '*';
                break;
            case '&lt;':
                text.nodeValue-=1;
            default:
                text.nodeValue += value;
                break;
        }


        
    });
});
deleteButton.addEventListener("click", function(){
    console.log(typeof(text));
    let str = text.nodeValue;  
    str = str.slice(0, str.length - 1);
    text.nodeValue = str;

})
