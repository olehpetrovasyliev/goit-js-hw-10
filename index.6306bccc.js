const e={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),err:document.querySelector(".error"),catWrapper:document.querySelector(".cat-info")};fetch("https://api.thecatapi.com/v1/breeds?api_key=live_Fx8aWtobi7nw45bvdMbnYxmBD1D3nvFGVPaXAj6F3RhDDbZnW7ML1sHaD6SV2LQQ").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>{console.log(e)})).then((t=>e.select.insertAdjacentHTML("beforeend",t.map((e=>`<option value = ${e.id}>${e.name}</option>`)).join("")))).catch((e=>{console.log(e)})),e.select.addEventListener("change",(function(t){e.err.classList.toggle(".is-hidden"),e.catWrapper.innerHTML=`<img src="${t.url}" alt=${t.name}><h1>Name: ${t.name}</h1><p>Description:${t.description}</p> <p>Temperament: ${t.temperament}</p>`}));
//# sourceMappingURL=index.6306bccc.js.map
