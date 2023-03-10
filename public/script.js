//navbar
const collapseNav=document.getElementById('collapse-navbar');
const burgerIcon=document.getElementById('burger-icon');

burgerIcon.onclick=()=>{
   collapseNav.classList.contains('show') ? collapseNav.classList.remove('show') : collapseNav.classList.add('show');
}

//api
const inputContiner=document.querySelector('.url-shortening .input-container')
const inputField=document.querySelector('.url-shortening input');
const shorten=document.querySelector('.url-shortening button');
const shortenedUrls=document.querySelector('.shortened-urls');

let arr=[];
//geting data from local storage
if(localStorage.urls){
   arr=JSON.parse(localStorage.urls);
   arr.forEach(url => {
      addUrl(url.link, url.shortenedLink);
   });
}

shorten.onclick=()=>{
   if(inputField.value===''){
      inputContiner.classList.add('empty');
   }else{
      inputContiner.classList.remove('empty');
      getUrl(inputField.value);
   }
}

//calling api
function getUrl(url){
   fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
   .then(repo=> repo.json())
   .then(res=> {
      addUrl(url, res.result.full_short_link);
      addToLocalStorage(url, res.result.full_short_link);
   });
}

//add data to page
function addUrl(url, shortenedUrl){
   const Input=document.createElement('div');
   const Output=document.createElement('div');
   const btnContainer=document.createElement('div');
   const button=document.createElement('button');
   const urlContainer=document.createElement('div');

   Input.classList.add('input');
   Output.classList.add('output');
   btnContainer.classList.add('btn');
   urlContainer.classList.add('url-container');

   if(url.startsWith('https://www.')){
      Input.textContent=url;
   }else{
      Input.textContent=`https://www.${url}`;
   }
   Output.textContent=shortenedUrl;
   button.textContent='Copy';

   btnContainer.appendChild(button);
   urlContainer.appendChild(Input);
   urlContainer.appendChild(Output);
   urlContainer.appendChild(btnContainer);
   shortenedUrls.appendChild(urlContainer);
   
   button.onclick=()=>{
      navigator.clipboard.writeText(shortenedUrl);
      button.style.background='hsl(257, 27%, 26%)';
      button.style.padding='4px 14px'
      button.textContent='Copied!';
   }

   inputField.value='';
   shortenedUrls.classList.remove('hidden');
}

//add data to local storage
function addToLocalStorage(url, shortenedUrl){
   let data={
      link: url,
      shortenedLink: shortenedUrl
   }
   arr.push(data);
   localStorage.setItem('urls', JSON.stringify(arr));
}


