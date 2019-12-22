(this["webpackJsonpmister-bitcoin"]=this["webpackJsonpmister-bitcoin"]||[]).push([[0],{16:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),o=a.n(c),s=(a(16),a(4)),i=a(5),u=a(7),l=a(6),m=a(8),p=a(1),d=a.n(p),h=a(79),f=a.n(h),v=a(80),b=a.n(v),E=a(15),g=a(24),C=a.n(g),y={getRate:function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(C.a.get("https://blockchain.info/tobtc?currency=USD&value=1&cors=true"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}))},getMarketPrice:function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(C.a.get("https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}))},getConfirmedTransactions:function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(C.a.get("https://api.blockchain.info/charts/median-confirmation-time?timespan=1months&format=json&cors=true"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))}};var w=function(e){return{type:"SET_RATE",rate:e}},O=function(e){return{type:"SET_MARKET_PRICE",marketPrice:e}},j=function(e){return{type:"SET_TRANSACTIONS",transactions:e}},x={getUser:function(){if(e=JSON.parse(localStorage.getItem("user")))return e;var e={name:"Dror Uzi",coins:100,moves:[{to:{id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu"},at:1576999121932,amount:20}]};localStorage.setItem("user",JSON.stringify(e))},addMove:function(e,t){var a=JSON.parse(localStorage.getItem("user"));if(a)return a.coins-=t,a.moves.unshift({to:{id:e._id,name:e.name},at:Date.now(),amount:t}),localStorage.setItem("user",JSON.stringify(a)),Promise.resolve(a)}};var _=function(e){return{type:"SET_CURR_USER",user:e}},N=function(){return function(e){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(x.getUser());case 2:return t=a.sent,a.abrupt("return",e(_(t)));case 4:case"end":return a.stop()}}))}},S=function(e){return{type:"SET_MOVE",user:e}},k=a(82),T=a.n(k);function M(e){var t=e.user;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"move-list-container"},!t.moves.length&&r.a.createElement("h1",null,"No Transfers yet"),t.moves.length&&r.a.createElement("div",{className:"moves"},r.a.createElement("h1",null,"Your Transfers"),t.moves.map((function(e){return r.a.createElement("div",{className:"trans",key:e.at},r.a.createElement("h2",null,"To ",e.to.name),r.a.createElement("h3",null," \u20bf",e.amount),r.a.createElement("h3",null,"status: ",r.a.createElement("span",null,"Approve")),r.a.createElement("h4",null,new Date(e.at).toLocaleString()))}))),r.a.createElement("img",{src:T.a,alt:""})))}var A=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(this.props.loadCurrUser());case 2:this.props.loadRate();case 3:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props,t=e.currUser,a=e.rate;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"hero-txt"},r.a.createElement("h2",null,r.a.createElement("span",null,"New")," Currency - ",r.a.createElement("br",null),"New ",r.a.createElement("span",null,"Lifestyle!")))),t&&r.a.createElement("section",{className:"user-details-home"},r.a.createElement("h1",null,"Welcome ",t.name,"!"),r.a.createElement("div",{className:"user-info-imgs"},r.a.createElement("div",{className:"coins-img"},r.a.createElement("img",{src:f.a,alt:""}),r.a.createElement("h2",null,"Coins"),r.a.createElement("h3",null,t.coins)),r.a.createElement("div",{className:"coins-img"},r.a.createElement("img",{src:b.a,alt:""}),r.a.createElement("h2",null,"BTC"),r.a.createElement("h3",null,a))),r.a.createElement(M,{user:t})))}}]),t}(r.a.Component),R={loadRate:function(){return function(e){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(y.getRate());case 2:return t=a.sent,a.abrupt("return",e(w(t)));case 4:case"end":return a.stop()}}))}},loadCurrUser:N},P=Object(E.b)((function(e){return{currUser:e.user.currUser,rate:e.bitCoin.rate}}),R)(A),U=a(12),L=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.contact;return e&&r.a.createElement("div",{className:"contact-preview"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://robohash.org/".concat(e._id,"?set=set5"),alt:"profile"})),r.a.createElement("h1",null,e.name))}}]),t}(r.a.Component),z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.contacts;return e&&r.a.createElement("section",{className:"contacts-list"},e.map((function(e){return r.a.createElement(U.b,{to:"/contact/".concat(e._id),key:e._id},r.a.createElement(L,{contact:e}))})))}}]),t}(r.a.Component),D={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t,a){var n=I;e&&e.term&&(n=function(e){var t;e=e.toLocaleLowerCase();var a=JSON.parse(localStorage.getItem("contacts"));t=a||I;return t.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))}(e.term)),t(n.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0})))}))},getContactById:function(e){return new Promise((function(t,a){var n=I.find((function(t){return t._id===e}));n?t(n):a("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){return new Promise((function(t,a){var n=I.findIndex((function(t){return t._id===e}));-1!==n&&I.splice(n,1),t(I)}))},saveContact:function(e){return e._id?function(e){return new Promise((function(t,a){var n=I.findIndex((function(t){return e._id===t._id}));-1!==n&&(I[n]=e),t(e)}))}(e):function(e){return new Promise((function(t,a){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}(),I.push(e),t(e)}))}(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}},getImgUrl:function(){var e,t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=Math.random(),a.next=3,d.a.awrap(C.a.get("https://robohash.org/".concat(e,"?set=set5")));case 3:return t=a.sent,a.abrupt("return",t.config.url);case 5:case"end":return a.stop()}}))}},I=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];var J=function(e){return{type:"SET_CURR_CONTACT",contact:e}},F=function(e){return function(t){var a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.awrap(D.getContactById(e));case 2:return a=n.sent,n.abrupt("return",t(J(a)));case 4:case"end":return n.stop()}}))}},B=function(e){return{type:"SET_CONTACTS",contacts:e}},W=function(e){return{type:"SAVE_CONTACT",contact:e}},H=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.loadContacts();case 1:case"end":return e.stop()}}),null,this)}},{key:"handleFilter",value:function(e){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t={term:e},this.props.loadContacts(t);case 2:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this,t=this.props.contacts;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("section",{className:"list-container"},r.a.createElement("h1",{className:"list-header"},"Contact List"),r.a.createElement("div",{className:"filter-add"},r.a.createElement(U.b,{className:"add-btn",to:"/contact/edit"},"Add contact"),r.a.createElement("input",{className:"filter-input",placeholder:"Find contact   \ud83d\udd0e",type:"text",onChange:function(t){return e.handleFilter(t.target.value)}})),r.a.createElement(z,{contacts:t})))}}]),t}(r.a.Component),V={loadContacts:function(e){return function(t){var a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.awrap(D.getContacts(e));case 2:return a=n.sent,n.abrupt("return",t(B(a)));case 4:case"end":return n.stop()}}))}}},q=Object(E.b)((function(e){return{contacts:e.contact.contacts}}),V)(H),G=a(53),K=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={priceData:null,transData:null},a.priceChart={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"",backgroundColor:"rgba(75,192,192,0.4)",data:[]}]},a.transChart={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"",backgroundColor:"rgba(247, 107, 107, 0.801)",data:[]}]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(this.props.loadMarketPrice());case 2:return a.next=4,d.a.awrap(this.props.loadTransactions());case 4:e=this.props.transactions.values.map((function(e){return e})),this.transChart.datasets[0].data=e,t=this.props.marketPrice.values.map((function(e){return e})),this.priceChart.datasets[0].data=t,this.priceChart.datasets[0].label=this.props.marketPrice.name,this.transChart.datasets[0].label=this.props.transactions.name,this.setState({priceData:t,transData:e});case 11:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props,t=e.marketPrice,a=e.transactions;return r.a.createElement("section",{className:"statistic-page"},t&&r.a.createElement(G.a,{data:this.priceChart}),a&&r.a.createElement(G.a,{data:this.transChart}))}}]),t}(r.a.Component),Q={loadTransactions:function(){return function(e){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(y.getConfirmedTransactions());case 2:return t=a.sent,a.abrupt("return",e(j(t)));case 4:case"end":return a.stop()}}))}},loadMarketPrice:function(){return function(e){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(y.getMarketPrice());case 2:return t=a.sent,a.abrupt("return",e(O(t)));case 4:case"end":return a.stop()}}))}}},Y=Object(E.b)((function(e){return{marketPrice:e.bitCoin.marketPrice,transactions:e.bitCoin.marketPrice}}),Q)(K),X=a(21);function Z(e){return r.a.createElement("div",{className:"main-header"},r.a.createElement("h1",{className:"logo"},"MisterBitcoin"),r.a.createElement("div",{className:"pages"},r.a.createElement(U.b,{to:"/"},"Home"),r.a.createElement(U.b,{to:"/contact"},"Contacts"),r.a.createElement(U.b,{to:"/statistic"},"Statistic")))}var $=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={amount:""},a.handleMove=function(e){var t=e.target.value;a.setState({amount:t})},a.addMove=function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(a.props.loadCurrUser());case 2:return e.next=4,d.a.awrap(a.props.addMove(a.props.contact,+a.state.amount));case 4:case"end":return e.stop()}}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.props.match.params.id,this.props.loadCurrContact(e);case 2:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props.contact;return e&&r.a.createElement("section",{className:"contact-details"},r.a.createElement("img",{src:"https://robohash.org/".concat(e._id,"?set=set5"),alt:"profile"}),r.a.createElement("h1",null,"Name: ",e.name),r.a.createElement("h1",null,"Phone: ",e.phone),r.a.createElement("h1",null,"Email: ",e.email),r.a.createElement(U.b,{to:"/contact/edit/".concat(e._id)},"Edit contact"),r.a.createElement("hr",null),r.a.createElement("div",{className:"send-coins-container"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1558588942-930faae5a389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",alt:""}),r.a.createElement("div",{className:"send-input"},r.a.createElement("label",{htmlFor:"amount"},"Send ",r.a.createElement("span",null,e.name)," some coins!"),r.a.createElement("input",{id:"amount",placeholder:"Amount",onChange:this.handleMove,type:"text"}),r.a.createElement("button",{onClick:this.addMove},"Send"))))}}]),t}(r.a.Component),ee={loadCurrContact:F,addMove:function(e,t){return function(a){var n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.a.awrap(x.addMove(e,t));case 2:return n=r.sent,console.log(n,"inactions"),r.abrupt("return",a(S(n)));case 5:case"end":return r.stop()}}))}},loadCurrUser:N},te=Object(E.b)((function(e){return{contact:e.contact.currContact,currUser:e.contact.currUser}}),ee)($),ae=a(38),ne=a(13),re=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={contact:{name:"",email:"",phone:""}},a.saveContact=function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,d.a.awrap(a.props.saveContact(a.state.contact));case 3:a.props.history.push("/contact");case 4:case"end":return t.stop()}}))},a.updateContact=function(e,t){var n=e.target.value;a.setState((function(e){return{contact:Object(ne.a)({},e.contact,Object(ae.a)({},t,n))}}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e=this.props.match.params.id)){a.next=6;break}return a.next=4,d.a.awrap(this.props.loadCurrContact(e));case 4:t=this.props.contact,this.setState({contact:t});case 6:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this,t=this.state.contact;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("section",{className:"contact-edit-container"},t._id&&r.a.createElement("h1",null,"Edit your profile"),!t._id&&r.a.createElement("h1",null,"New Contact"),r.a.createElement("form",{onSubmit:this.saveContact},r.a.createElement("label",null," Name:",r.a.createElement("input",{value:t.name,onChange:function(t){return e.updateContact(t,"name")},type:"text"})),r.a.createElement("label",null," Phone:",r.a.createElement("input",{value:t.phone,onChange:function(t){return e.updateContact(t,"phone")},type:"text"})),r.a.createElement("label",null," Email:",r.a.createElement("input",{value:t.email,onChange:function(t){return e.updateContact(t,"email")},type:"email"})),r.a.createElement("button",null,"Save Contact"))))}}]),t}(r.a.Component),ce={loadCurrContact:F,saveContact:function(e){return function(t){var a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.awrap(D.saveContact(e));case 2:return a=n.sent,n.abrupt("return",t(W(a)));case 4:case"end":return n.stop()}}))}}},oe=Object(E.b)((function(e){return{contact:e.contact.currContact}}),ce)(re),se=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"main-app"},r.a.createElement(Z,null),r.a.createElement(X.c,null,r.a.createElement(X.a,{exact:!0,path:"/",component:P}),r.a.createElement(X.a,{exact:!0,path:"/contact/",component:q}),r.a.createElement(X.a,{exact:!0,path:"/contact/edit/:id?",component:oe}),r.a.createElement(X.a,{exact:!0,path:"/contact/:id",component:te}),r.a.createElement(X.a,{exact:!0,path:"/statistic",component:Y})),r.a.createElement("footer",{className:"footer"},r.a.createElement("h1",{className:"logo"},"MisterBitcoin"),r.a.createElement("p",null,"\xa9 Dror Uzi")))}}]),t}(r.a.Component),ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var le=a(23),me=a(85),pe={rate:null,marketPrice:null,transactions:null};var de=a(86),he={currContact:null,contacts:[]};var fe={currUser:null};var ve=Object(le.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURR_CONTACT":return Object(ne.a)({},e,{currContact:t.contact});case"SET_CONTACTS":return Object(ne.a)({},e,{contacts:t.contacts});case" SAVE_CONTACT":var a=e.contacts.findIndex((function(e){return e._id===t.contact._id}));return Object(ne.a)({},e,{contacts:Object(de.a)(e.contacts.splice(a,1,t.contact))});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURR_USER":case"SET_MOVE":return Object(ne.a)({},e,{currUser:t.user});default:return e}},bitCoin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RATE":return Object(ne.a)({},e,{rate:t.rate});case"SET_MARKET_PRICE":return Object(ne.a)({},e,{marketPrice:t.marketPrice});case"SET_TRANSACTIONS":return Object(ne.a)({},e,{transactions:t.transactions});default:return e}}}),be=Object(le.d)(ve,Object(le.a)(me.a)),Ee=a(10),ge=Object(Ee.a)();o.a.render(r.a.createElement(E.a,{store:be},r.a.createElement(U.a,{history:ge},r.a.createElement(se,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/misterBitcoin-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/misterBitcoin-react","/service-worker.js");ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ue(t,e)}))}}()},79:function(e,t,a){e.exports=a.p+"static/media/coins.bd8997ff.png"},80:function(e,t,a){e.exports=a.p+"static/media/bitcoin.d331535d.png"},82:function(e,t,a){e.exports=a.p+"static/media/moves.977b3fef.png"},87:function(e,t,a){e.exports=a(205)}},[[87,1,2]]]);
//# sourceMappingURL=main.7fd6858c.chunk.js.map