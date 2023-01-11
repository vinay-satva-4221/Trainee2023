//Elements
const elements=document.querySelectorAll('.btn');


//Events
elements.forEach(Element => {
Element.addEventListener('click', () =>{
let command=Element.dataset['element'];

if(command=='createLink'){
    let url=prompt('Enter the Link Here:', 'http://')
    document.execCommand(command, false, url);
}else{
document.execCommand(command, false, null);
}
});
});