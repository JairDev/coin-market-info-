(this["webpackJsonpcoin-market"]=this["webpackJsonpcoin-market"]||[]).push([[0],[,,,,,function(e,t,a){"use strict";var n=a(2),c=a.n(n),r=a(4);function l(){return(l=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Error: ".concat(a.status));case 6:return e.abrupt("return",a.json());case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}t.a=function(e){return l.apply(this,arguments)}},function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){var t=e.array,a=e.property,n=e.onClick,r=e.Component;return t.map((function(e){return c.a.createElement(r,{key:e[a],item:e,onClick:n})}))}},,,function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(17),c=a(0),r=a.n(c),l=a(18);a(33);function o(){var e=Object(n.a)(["\n  background: none;\n  border: 1px solid #f7a400;\n  border-radius: 50%;\n  box-shadow: 0 0px 25px 1px rgba(547, 164, 0, 0.3);\n  color: #3e4491;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  position: relative;\n"]);return o=function(){return e},e}var i=l.a.button(o());t.b=function(e){var t=e.classButton,a=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{className:t,onClick:a},r.a.createElement("svg",{className:"icon icon-plus"},r.a.createElement("use",{xlinkHref:"#icon-plus"}))))}},,,,,function(e,t,a){"use strict";var n=a(1),c=a(0),r=a.n(c),l=a(9);a(36);t.a=r.a.memo((function(e){var t=e.updateKeyword,a=e.label,o=e.placeHolder,i=e.classButton,s=e.classError,u=Object(c.useState)(""),m=Object(n.a)(u,2),p=m[0],f=m[1];return r.a.createElement("form",{className:"form-data",onSubmit:function(e){p?(t(p),f(""),e.preventDefault()):e.preventDefault()},"aria-label":"add new currency"},r.a.createElement("div",{className:"App-section-coin-content-input"},r.a.createElement("label",null,r.a.createElement("span",null,a),r.a.createElement("div",{className:"App-section-coin-content-input-button  ".concat(s),classactive:s,tooltip:"Data not found..."},r.a.createElement("input",{className:"form-input",type:"text",value:p,onChange:function(e){f(e.target.value)},placeholder:"E.g ".concat(o)}),r.a.createElement(l.a,{className:i,primary:!0},r.a.createElement("svg",{className:"icon icon-plus"},r.a.createElement("use",{xlinkHref:"#icon-plus"})))))))}))},function(e,t,a){"use strict";var n=a(1),c=a(0);t.a=function(e){var t=e.distance,a=void 0===t?"0px":t,r=Object(c.useState)(!1),l=Object(n.a)(r,2),o=l[0],i=l[1],s=Object(c.useRef)();return Object(c.useEffect)((function(){new IntersectionObserver((function(e,t){var a=e[0];a.isIntersecting&&("content-articles"===a.target.className?(a.target.classList.add("display"),i(!0),t.disconnect()):i(!0))}),{rootMargin:a}).observe(s.current)})),{show:o,elementRef:s}}},,,,,,,function(e,t,a){},function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=(a(28),a(29),a(2)),i=a.n(o),s=a(4),u=a(3),m=a(1),p=a(6);a(31);var f=function(e){var t=e.item,a=e.onClick,n=(new Intl.NumberFormat).format(t.current_price),r=t.price_change_percentage_24h.toFixed(2),l=r<0?"low-percentage":"high-percentage",o=(new Intl.NumberFormat).format(t.market_cap);return c.a.createElement("tr",{className:"App-section-coin-table-coin ro"},c.a.createElement("td",null,c.a.createElement("div",null,t.market_cap_rank)),c.a.createElement("td",null,c.a.createElement("div",{className:"App-section-coin-table-coindata"},c.a.createElement("div",{className:"App-section-coin-table-coindata-img"},c.a.createElement("img",{src:t.image,alt:""})),c.a.createElement("span",null,t.name))),c.a.createElement("td",null,c.a.createElement("div",null,"$",o)),c.a.createElement("td",null,c.a.createElement("div",null,"$",n)),c.a.createElement("td",null,c.a.createElement("div",{className:l},r,"%"),c.a.createElement("div",{className:"remove",onClick:function(){return a(t.id)},"data-id":t.id},c.a.createElement("span",null,c.a.createElement("svg",{className:"icon icon-cancel-circle"},c.a.createElement("use",{xlinkHref:"#icon-cancel-circle"}))))))};a(32);var d=function(e){var t=e.array,a=e.onClick;return c.a.createElement("div",{className:"App-section-coin-info"},c.a.createElement("table",{className:"App-section-coin-table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("div",null,c.a.createElement("span",null,"Rank"))),c.a.createElement("th",null,c.a.createElement("div",null,c.a.createElement("span",null,"Name"))),c.a.createElement("th",null,c.a.createElement("div",null,c.a.createElement("span",null,"Market Cap"))),c.a.createElement("th",null,c.a.createElement("div",null,c.a.createElement("span",null,"Price"))),c.a.createElement("th",null,c.a.createElement("div",null,c.a.createElement("span",null,"Change (24h)"))))),c.a.createElement("tbody",null,t.length?c.a.createElement(p.a,{array:t,property:"id",Component:f,onClick:a}):c.a.createElement("tr",{className:"empty-chart"},c.a.createElement("th",null,"Add a coin, buddy...")))))};var E=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("coin"))||[]),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){localStorage.setItem("coin",JSON.stringify(a))}),[a]),[a,c]},v=a(14),b=a(5),h="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";var g=function(e){var t=e.keyword,a=Object(n.useState)([]),c=Object(m.a)(a,2),r=c[0],l=c[1],o=Object(n.useState)([]),p=Object(m.a)(o,2),f=p[0],d=p[1],E=Object(n.useState)(""),v=Object(m.a)(E,2),g=v[0],k=v[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)(h);case 2:if(a=e.sent,d(a),n=a.find((function(e){return e.id===t})),!t||n){e.next=9;break}return k("error"),setTimeout((function(){k("")}),800),e.abrupt("return");case 9:t&&l((function(e){return-1===e.findIndex((function(e){return e.id===t}))?[].concat(Object(u.a)(e),[n]):Object(u.a)(e)}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(e){throw new Error(e)}))}),[t]),{coinId:r,setCoinID:l,arrayCoins:f,classError:g}};function k(e,t,a){return a?e.filter((function(e){return e.id!==t})):e.filter((function(e){return e.id===t}))}var N=function(e){var t=e.label,a=e.keyword,r=e.updateKeyword,l=g({keyword:a}),o=l.coinId,p=l.setCoinID,f=l.arrayCoins,h=l.classError,N=E(),O=Object(m.a)(N,2),j=O[0],w=O[1];Object(n.useEffect)((function(){a&&w((function(e){return-1===e.findIndex((function(e){return e===a}))?[].concat(Object(u.a)(e),[a]):Object(u.a)(e)}))}),[a,w]),Object(n.useEffect)((function(){j.map((function(e){var t=k(f,e,!1);p((function(a){return-1===a.findIndex((function(t){return t.id===e}))?[].concat(Object(u.a)(a),Object(u.a)(t)):Object(u.a)(a)}))}))}),[j,f,p]);var y=Object(n.useCallback)((function(e){var t=Object(u.a)(o),a=Object(u.a)(j),n=k(t,e,!0),c=a.filter((function(t){return t!==e}));w(c),p(n)}),[o,j,p,w]),x=Object(n.useCallback)(Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");case 2:t=e.sent,a=t.filter((function(e){return j.includes(e.id)})),p(a);case 5:case"end":return e.stop()}}),e)}))),[j,p]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App-section-content-form"},c.a.createElement("div",{onClick:x,className:"update"},c.a.createElement("span",{className:"refresh"},"Refresh"),c.a.createElement("span",{className:"content-icon-refresh"},c.a.createElement("svg",{className:"icon icon-loop2"},c.a.createElement("use",{xlinkHref:"#icon-loop2"})))),c.a.createElement(v.a,{updateKeyword:r,label:t,placeHolder:"bitcoin, ethereum",classError:h,classButton:"button-add-coin"})),c.a.createElement(d,{array:o,onClick:y}))};a(37);var O=function(e){var t=e.spanTitle;return c.a.createElement("div",{className:"content-title-coin"},c.a.createElement("div",{className:"content-no-flip-text"},c.a.createElement("span",null,t),c.a.createElement("span",{className:"text-flip"},"ETH"),c.a.createElement("span",{className:"text-flip"},"XRP"),c.a.createElement("span",{className:"text-flip"},"BTC"),c.a.createElement("span",{className:"text-flip"},"BNB"),c.a.createElement("span",{className:"text-flip"},"ETH"),c.a.createElement("span",{className:"text-flip"},"XRP"),c.a.createElement("span",{className:"text-flip"},"BTC"),c.a.createElement("span",{className:"text-flip"},"BNB")))};a(38);var j=function(e){var t=e.item,a=t.price_change_percentage_24h.toFixed(2),n=a<0?"low-percentage":"high-percentage";return c.a.createElement("div",{className:"parent-content-coins"},c.a.createElement("div",{className:"content-coins"},c.a.createElement("div",{className:"img-coin-band"},c.a.createElement("div",{className:"content-img-coin-band"},c.a.createElement("img",{alt:"",src:t.image})),c.a.createElement("div",{className:"coin-name"},c.a.createElement("span",null,t.id))),c.a.createElement("span",{className:"coin-price"},"$",t.current_price),c.a.createElement("span",{className:n},a,"%")))};var w=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=".concat(10,"&page=1&sparkline=false"),e.next=3,Object(b.a)(t);case 3:a=e.sent,r(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){return console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{array:a,property:"id",Component:j}),c.a.createElement(p.a,{array:a,property:"id",Component:j}))},y=a(15),x=a(9),C=(a(22),c.a.lazy((function(){return a.e(3).then(a.bind(null,43))})));var _=function(e){var t=e.label,a=e.keyword,r=e.updateKeyword,l=Object(y.a)({distance:"0px"}),o=l.show,i=l.elementRef,s=Object(n.useState)(0),u=Object(m.a)(s,2),p=u[0],f=u[1];return Object(n.useEffect)((function(){f(0)}),[a]),c.a.createElement("div",{className:"content-all-news",ref:i},o?c.a.createElement(n.Suspense,{fallback:"cargando..."},c.a.createElement(C,{label:t,keyword:a,updateKeyword:r,current:p})):null,c.a.createElement(x.b,{onClick:function(){f((function(e){return e+1}))},classButton:"more"}))};a(39);var S=function(e){return function(t){var a=t.label,r=Object(n.useState)(),l=Object(m.a)(r,2),o=l[0],i=l[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(e,{label:a,keyword:o,updateKeyword:function(e){i(e)}}))}};var A=function(){var e=S(N),t=S(_);return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"App-section-headband"},c.a.createElement("div",{className:"App-section-headband-content-coins"},c.a.createElement(w,null))),c.a.createElement("section",{className:"App-section-main"},c.a.createElement("section",{className:"App-section-coin"},c.a.createElement(O,{spanTitle:"Coins Market"}),c.a.createElement("div",{className:"toBottom"},c.a.createElement("svg",{className:"icon icon-ctrl"},c.a.createElement("use",{xlinkHref:"#icon-ctrl"})),c.a.createElement("svg",{className:"icon icon-ctrl"},c.a.createElement("use",{xlinkHref:"#icon-ctrl"})),c.a.createElement("svg",{className:"icon icon-ctrl"},c.a.createElement("use",{xlinkHref:"#icon-ctrl"}))),c.a.createElement(e,{label:"Add currency to chart"})),c.a.createElement("section",{className:"App-section-news"},c.a.createElement(O,{spanTitle:"News about"}),c.a.createElement(t,{label:"Search news by keyword"}))))};var I=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.53269ac3.chunk.js.map