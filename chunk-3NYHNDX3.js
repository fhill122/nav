import{g as f}from"./chunk-EXTZUAM4.js";import{$ as c}from"./chunk-RYTWHCKD.js";import{Kd as s,Ld as a,Md as p,ma as i,ra as n}from"./chunk-ZV5ZKCXV.js";var m=class o{constructor(e){this.router=e}goUrl(e,t){if(e?.stopPropagation?.(),e?.preventDefault?.(),typeof t!="string"||!t)return;let r=t[0];if(r===s)return;if(t==="@apply"){c.emit("CREATE_WEB");return}if(r===p){this.router.navigate([t.slice(1)]);return}r===a?window.open(t.slice(1),"_self"):window.open(t)}static \u0275fac=function(t){return new(t||o)(n(f))};static \u0275prov=i({token:o,factory:o.\u0275fac,providedIn:"root"})};export{m as a};
