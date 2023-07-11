const bar= document.getElementById('bar');
const nav=document.getElementById('navbar');

if(bar) {
bar.addEventListener('click',() => {
nav.classlist.add('active');
})
}
