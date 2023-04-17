const itemInput = document.getElementById('item-input')
const priorityInput = document.getElementById('priority-input')
const checkbox = document.getElementById('checkbox')
const heading = document.querySelector('h1')


function oninput(e) {
    // console.log('input')
    // console.log(e.target.value);
    // console.log(e.key);
    heading.textContent = e.target.value;

}
function onChecked(e) {
    const isChecked = e.target.cheacked ;
    heading.textContent = isChecked ? 'cheacked': 'Not Cheacked'
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1 px';
    itemInput.style.outlineColor = 'red';
}
function onfocus() {
   console.log('input is focussed') 
   itemInput.style.outlineStyle = 'solid';
   itemInput.style.outlineWidth = '1 px';
   itemInput.style.outlineColor = 'red';
   
  
}
function onblur() {
    console.log('input is not focussed')
    itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input',oninput)
priorityInput.addEventListener('change',oninput) 
checkbox.addEventListener('input',onChecked);
itemInput.addEventListener('focus',onfocus);
itemInput.addEventListener('blur',onblur);