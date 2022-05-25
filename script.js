const fileInput = document.querySelector('input'),
dawnloadBtn = document.querySelector('button');

dawnloadBtn.addEventListener('click', e => {
    e.preventDefault();
    fetchUrl(fileInput.value);
});

function fetchUrl(url){
   fetch(url)
   .then(res => res.blob())
   .then(file => {
       let tempUrl = URL.createObjectURL(file);
       let aTag = document.createElement('a');
       aTag.href = tempUrl;
       aTag.download = 'filename';
       document.body.appendChild(aTag);
       aTag.click();
       aTag.remove();
       URL.revokeObjectURL(tempUrl);
       dawnloadBtn.innerHTML = "Dawnload File";

    
   }).catch(() => {
       alert("feald dawnload file");
   })
}