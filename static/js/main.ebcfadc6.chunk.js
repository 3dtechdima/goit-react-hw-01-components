(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},15:function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},25:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);t(1);var a,i,c,s,r=t(10),d=t.n(r),o=t(0),l=function(e){var n=e.friend;return Object(o.jsxs)("li",{className:"friends-list__item",children:[Object(o.jsx)("div",{className:n.isOnline.toString(),children:n.isOnline}),Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{className:"avatar",src:n.avatar,alt:"{friend.name}",width:"48"}),Object(o.jsx)("p",{className:"name",children:n.name})]})]})},p=t(2),b=t(3),m=b.a.section(a||(a=Object(p.a)(["\n  background-color: #dadada;\n  padding: 50px;\n  margin: auto;\n\n  .friends-list {\n    list-style: none;\n  }\n  .friends-list__item {\n    border-radius: 10px;\n    border: 1px solid gray;\n    margin-top: 20px;\n    padding: 40px 50px 40px 20px;\n    width: 100px;\n    height: 100px;\n    display: flex;\n    text-align: center;\n    margin: auto;\n  }\n  .true,\n  .false {\n    margin-top: 35px;\n    margin-right: 20px;\n    text-align: center;\n    width: 30px;\n    height: 30px;\n    border-radius: 15px;\n  }\n  .true {\n    background-color: green;\n  }\n  .false {\n    background-color: red;\n  }\n"]))),u=function(e){var n=e.friends;return Object(o.jsx)(m,{children:Object(o.jsx)("ul",{className:"friends-list",children:n.map((function(e){return Object(o.jsx)(l,{friend:e},e.id)}))})})},j=b.a.section(i||(i=Object(p.a)(["\n  background-color: #dadada;\n  padding: 50px;\n\n  .profile-items__img {\n    display: flex;\n    margin: auto;\n    width: 200px;\n  }\n  .profile-items__tag,\n  .profile-items__location {\n    color: gray;\n    text-align: center;\n    padding-bottom: 10px;\n  }\n  .profile-items__name {\n    text-align: center;\n    font-weight: bold;\n  }\n  .profile-items {\n    margin: 0 auto;\n    background-color: white;\n    width: 400px;\n  }\n  .stats-items {\n    color: #5e68ec;\n    margin: 0 auto;\n    padding-left: 0px;\n    width: 400px;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    background-color: #a0a7b8;\n    font-weight: bold;\n  }\n  .stats-items__item {\n    list-style: none;\n    margin: 20px;\n  }\n"]))),f=function(e){var n=e.avatar,t=e.name,a=e.tag,i=e.location,c=e.stats;return Object(o.jsxs)(j,{children:[Object(o.jsxs)("div",{className:"profile-items",children:[Object(o.jsx)("img",{className:"profile-items__img",src:n,alt:t}),Object(o.jsx)("p",{className:"profile-items__name",children:t}),Object(o.jsxs)("p",{className:"profile-items__tag",children:["@",a]}),Object(o.jsx)("p",{className:"profile-items__location",children:i})]}),Object(o.jsx)("ul",{className:"stats-items",children:Object.entries(c).map((function(e){return Object(o.jsxs)("li",{className:"stats-items__item",children:[Object(o.jsxs)("span",{children:[" ",e[0]]}),Object(o.jsxs)("span",{children:[" ",e[1]]})]},e[0])}))})]})},x=b.a.section(c||(c=Object(p.a)(["\n  background-color: #dadada;\n  margin-bottom: -15px;\n  .statistics-title {\n    text-align: center;\n    margin: 0 auto;\n    color: #9199e2;\n  }\n  .statistics-items {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .statistics-item {\n    list-style: none;\n    text-align: center;\n    width: 150px;\n    height: 100px;\n    border: 1px solid gray;\n  }\n"]))),g=function(e){var n=e.title,t=e.stats;return Object(o.jsxs)(x,{children:[n&&Object(o.jsx)("h2",{className:"statistics-title",children:n}),Object(o.jsx)("ul",{className:"statistics-items",children:t.map((function(e){return Object(o.jsxs)("li",{className:"statistics-item",children:[Object(o.jsx)("p",{className:"statistics-list",children:e.label}),Object(o.jsxs)("p",{className:"statistics-percentage",children:[e.percentage,"%"]})]},e.id)}))})]})},h=t(4),y=b.a.section(s||(s=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #dadada;\n  padding: 50px;\n  .transaction-history__title {\n    text-align: center;\n    background-color: gray;\n  }\n  tr:nth-child(odd) {\n    background: #cdced3;\n  }\n  .transaction-history__tab {\n    text-align: center;\n    border: 1px solid gray;\n  }\n"]))),O=function(e){var n=e.items;return Object(o.jsx)(y,{children:Object(o.jsxs)("table",{className:"transaction-history__tab",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"transaction-history__title",children:[Object(o.jsx)("th",{children:"Type"}),Object(o.jsx)("th",{children:"Amount"}),Object(o.jsx)("th",{children:"Currency"})]})}),Object(o.jsx)("tbody",{className:"transaction-history__item",children:n.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.type}),Object(o.jsx)("td",{children:e.amount}),Object(o.jsx)("td",{children:e.currency})]},e.id)}))})]})})},_=t(14),v=t(15),w=t(8),N=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f,{avatar:h.avatar,name:h.name,tag:h.tag,location:h.location,stats:h.stats}),Object(o.jsx)(u,{friends:v}),Object(o.jsx)(g,{title:"Upload stats",stats:w}),Object(o.jsx)(g,{stats:w}),";",Object(o.jsx)(O,{items:_})]})};t(25);d.a.render(Object(o.jsx)(N,{}),document.getElementById("root"))},4:function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},8:function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')}},[[26,1,2]]]);
//# sourceMappingURL=main.ebcfadc6.chunk.js.map