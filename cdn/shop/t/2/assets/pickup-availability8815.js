customElements.get("pickup-availability")||customElements.define("pickup-availability",class extends HTMLElement{constructor(){super(),this.hasAttribute("available")&&(this.errorHtml=this.querySelector("template").content.firstElementChild.cloneNode(!0),this.onClickRefreshList=this.onClickRefreshList.bind(this),this.fetchAvailability(this.dataset.variantId))}fetchAvailability(variantId){let rootUrl=this.dataset.rootUrl;rootUrl.endsWith("/")||(rootUrl=rootUrl+"/");const variantSectionUrl=`${rootUrl}variants/${variantId}/?section_id=pickup-availability`;fetch(variantSectionUrl).then(response=>response.text()).then(text=>{const sectionInnerHTML=new DOMParser().parseFromString(text,"text/html").querySelector(".shopify-section");this.renderPreview(sectionInnerHTML)}).catch(e=>{const button=this.querySelector("button");button&&button.removeEventListener("click",this.onClickRefreshList),this.renderError()})}onClickRefreshList(evt){this.fetchAvailability(this.dataset.variantId)}renderError(){this.innerHTML="",this.appendChild(this.errorHtml),this.querySelector("button").addEventListener("click",this.onClickRefreshList)}renderPreview(sectionInnerHTML){const drawer=document.querySelector("pickup-availability-drawer");if(drawer&&drawer.remove(),!sectionInnerHTML.querySelector("pickup-availability-preview")){this.innerHTML="",this.removeAttribute("available");return}this.innerHTML=sectionInnerHTML.querySelector("pickup-availability-preview").outerHTML,this.setAttribute("available",""),document.body.appendChild(sectionInnerHTML.querySelector("pickup-availability-drawer")),this.dataset.productPageColorScheme.split(" ").forEach(colorClass=>{document.querySelector("pickup-availability-drawer").classList.add(colorClass)});const button=this.querySelector("button");button&&button.addEventListener("click",evt=>{document.querySelector("pickup-availability-drawer").show(evt.target)})}}),customElements.get("pickup-availability-drawer")||customElements.define("pickup-availability-drawer",class extends HTMLElement{constructor(){super(),this.onBodyClick=this.handleBodyClick.bind(this),this.querySelector("button").addEventListener("click",()=>{this.hide()}),this.addEventListener("keyup",event=>{event.code.toUpperCase()==="ESCAPE"&&this.hide()})}handleBodyClick(evt){const target=evt.target;target!=this&&!target.closest("pickup-availability-drawer")&&target.id!="ShowPickupAvailabilityDrawer"&&this.hide()}hide(){this.removeAttribute("open"),document.body.removeEventListener("click",this.onBodyClick),document.body.classList.remove("overflow-hidden"),removeTrapFocus(this.focusElement)}show(focusElement){this.focusElement=focusElement,this.setAttribute("open",""),document.body.addEventListener("click",this.onBodyClick),document.body.classList.add("overflow-hidden"),trapFocus(this)}});
//# sourceMappingURL=/cdn/shop/t/2/assets/pickup-availability.js.map?v=66138958121968076331701790373
