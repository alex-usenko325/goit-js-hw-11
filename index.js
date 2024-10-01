import{a as p,S as g,i as c}from"./assets/vendor-mdVVRe9K.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="46174966-07e02f6c406b1cfe44f6656da",h="https://pixabay.com/api/";async function b(s,t=1){try{const o=await p.get(`${h}`,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}});if(o.data.hits.length===0)throw new Error("No images found");return o.data}catch(o){throw console.error("Error fetching images:",o),o}}function w(s){const t=document.querySelector(".gallery"),o=s.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:d,comments:f,downloads:m})=>`
        <li class="gallery-item">
           <a href="${e}">
            <img src="${a}" alt="${r}" loading="lazy" class="preview-image"/>
          </a>
          <div class="info">
            <p><b>Likes:</b> ${i}</p>
            <p><b>Views:</b> ${d}</p>
            <p><b>Comments:</b> ${f}</p>
            <p><b>Downloads:</b> ${m}</p>
          </div>
        </li>
      `).join("");t.innerHTML=o}const L=document.getElementById("search-form"),S=document.querySelector(".gallery"),n=document.querySelector(".loader");let l=1,u="";const q=new g(".gallery a");L.addEventListener("submit",async s=>{s.preventDefault(),u=s.currentTarget.elements.query.value.trim(),S.innerHTML="",l=1,n.style.display="block";try{const t=await b(u,l);if(n.style.display="none",t.hits.length===0){c.error({message:"Sorry, no images found for your search query. Please try again!",position:"topRight",class:"custom-iziToast-error"});return}w(t.hits),q.refresh()}catch{n.style.display="none",c.error({message:"Something went wrong. Please try again later!",position:"topRight",class:"custom-iziToast-error"})}});
//# sourceMappingURL=index.js.map
