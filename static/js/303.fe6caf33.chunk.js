"use strict";(self.webpackChunkfinancetechsystem=self.webpackChunkfinancetechsystem||[]).push([[303],{7146:function(e,n,t){t.d(n,{FH:function(){return l},Ld:function(){return c}});var r=t(4165),s=t(5861),a=(t(2062),t(4801)),i=t(1620),c=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n,t,s,i){var c,o=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=o.length>5&&void 0!==o[5]?o[5]:{},"fetch"===(o.length>4&&void 0!==o[4]?o[4]:"fetch")?l(n,t,i,s):parseInt(t)!==parseInt(c.instLinker)&&parseInt(c.softwareId)!==parseInt(parseInt("".concat(t).split("").reverse().join(""))/1e3)||s((0,a.m$)(c));case 3:case"end":return e.stop()}}),e)})));return function(n,t,r,s){return e.apply(this,arguments)}}(),l=function(e,n,t,r){fetch("".concat(i.l,"/sub/get"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(e)},body:JSON.stringify({online:t,instLinker:n})}).then((function(e){return e.json()})).then((function(e){200===e.status&&r((0,a.U6)(e.subs))})).catch((function(){}))}},3303:function(e,n,t){t.r(n),t.d(n,{default:function(){return ue}});var r=t(9439),s=t(2791),a=t(7689),i=t(9434),c=t(1162),l=t(2007),o=t.n(l),u=["color","size","title"];function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var m=(0,s.forwardRef)((function(e,n){var t=e.color,r=e.size,a=e.title,i=p(e,u);return s.createElement("svg",d({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:t},i),a?s.createElement("title",null,a):null,s.createElement("path",{d:"M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"}))}));m.propTypes={color:o().string,size:o().oneOfType([o().string,o().number]),title:o().string},m.defaultProps={color:"currentColor",size:"1em",title:null};var f=m,h=t(8598),x=t(555),k=t(7856),v=t(184),j=function(e){var n=e.setDrawer,t=e.navigate;return"Kenya"===(0,i.v9)((function(e){return e.inst.activeInst})).sub?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("modes/mpesa-setup")},children:"Mpesa SetUp"})}),(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("mpesa-payments")},children:"Mpesa Payments"})})]}):(0,v.jsx)(v.Fragment,{})},g=function(e){var n=e.setDrawer,t=(0,a.s0)(),r=(0,i.v9)((function(e){return e.inst.activeInst}));return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(c.Z,{style:{width:"100%"},children:[(0,v.jsxs)(c.Z.Toggle,{variant:"transparent",className:"nav-link",children:[(0,v.jsx)(f,{})," Admin"," "]}),(0,v.jsxs)(c.Z.Menu,{variant:"dark",children:[(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("branches")},children:"Branches"})}),(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("groups")},children:"Groups"})}),(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("accounts")},children:"Accounts"})}),(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("modes")},children:"Payment Modes"})})," ",(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("dividend")},children:"Dividend Calculation"})})," ",(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("income-statement")},children:"Profit & Loss"})})," ",(0,v.jsx)(j,{setDrawer:n,navigate:t}),(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("edit")},children:"Edit Institution"})})]})]}),(0,v.jsx)("hr",{}),(0,v.jsxs)(c.Z,{style:{width:"100%"},children:[(0,v.jsxs)(c.Z.Toggle,{variant:"transparent",className:"nav-link",children:[(0,v.jsx)(h.Z,{})," Notifications"]}),(0,v.jsxs)(c.Z.Menu,{variant:"dark",children:["Kenya"===r.sub?(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("bulk-sms")},children:"Bulk Sms"})}):null,(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("notifications")},children:"Notifications"})})]})]}),(0,v.jsx)("hr",{}),(0,v.jsxs)(c.Z,{style:{width:"100%"},children:[(0,v.jsxs)(c.Z.Toggle,{variant:"transparent",className:"nav-link",children:[(0,v.jsx)(x.Z,{})," H.R. Manager"]}),(0,v.jsxs)(c.Z.Menu,{variant:"dark",children:[(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("staffs")},children:"Staffs"})}),(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("payroll-items")},children:"Payroll Items"})})," ",(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){window.scroll(0,0),n(!1),t("payroll-summary")},children:"Payroll Summary"})})]})]}),(0,v.jsx)("hr",{}),(0,v.jsxs)(c.Z,{style:{width:"100%"},children:[(0,v.jsxs)(c.Z.Toggle,{className:"nav-link",variant:"transparent",children:[(0,v.jsx)(k.Z,{})," Expenses"]}),(0,v.jsxs)(c.Z.Menu,{variant:"dark",children:[(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){n(!1),t("expensecats")},children:"Expense Categories"})}),(0,v.jsx)(c.Z.Item,{children:(0,v.jsx)("p",{className:"nav-link",onClick:function(){n(!1),t("expenses")},children:"Expenses"})})," "]})]})," ",(0,v.jsx)("hr",{})]})},w=t(3872),y=t(2841),b=t(1838),I=t(3427),O=t(8090),z=t(7444),C=["color","size","title"];function N(){return N=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},N.apply(this,arguments)}function Z(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var L=(0,s.forwardRef)((function(e,n){var t=e.color,r=e.size,a=e.title,i=Z(e,C);return s.createElement("svg",N({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:t},i),a?s.createElement("title",null,a):null,s.createElement("path",{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"}))}));L.propTypes={color:o().string,size:o().oneOfType([o().string,o().number]),title:o().string},L.defaultProps={color:"currentColor",size:"1em",title:null};var T=L,V=["color","size","title"];function E(){return E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},E.apply(this,arguments)}function M(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var P=(0,s.forwardRef)((function(e,n){var t=e.color,r=e.size,a=e.title,i=M(e,V);return s.createElement("svg",E({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:t},i),a?s.createElement("title",null,a):null,s.createElement("path",{d:"M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"}),s.createElement("path",{d:"M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"}))}));P.propTypes={color:o().string,size:o().oneOfType([o().string,o().number]),title:o().string},P.defaultProps={color:"currentColor",size:"1em",title:null};var A=P,S=t(4169),H=t(2463),F=t(7866),D=t(3750),Y=t(645),R=t(9362),B=t(9807),X=t(7001),W=t(9904),U=t(4915),$=t(6554),q=t(7146),K=t(1455),G=t(4979),J=t(2389),Q=t(8715),_=t(8086),ee=t(390),ne=function(){var e=(0,i.I0)(),n=(0,i.v9)((function(e){return e.auth.user})),t=(0,i.v9)((function(e){return e.online.online})),r=(0,i.v9)((function(e){return e.cred.activeCred}));return(0,s.useEffect)((function(){H.W.on("message",(function(s){"notification"===s.messageType&&("serviceWorker"in navigator&&"PushManager"in window&&navigator.serviceWorker.ready.then((function(e){e.showNotification(s.dataValues.title,{body:s.dataValues.note,icon:""})})).catch((function(e){return console.log(e)})),(0,J.gQ)(n.token,r.instLinker,e,t,"socket",s.dataValues)),"staff"===s.messageType&&(0,F.Ui)(r.instLinker,n.token,e,t,"socket",s.dataValues),"mode"===s.messageType&&(0,D.yl)(n.token,r.instLinker,e,t,"socket",s.dataValues),"expenseCat"===s.messageType&&(0,Y.kt)(n.token,r.instLinker,e,t,"socket",s.dataValues),"expense"===s.messageType&&(0,R.mX)(n.token,r.instLinker,e,t,"socket",s.dataValues),"account"===s.messageType&&(0,B.xY)(n.token,r.instLinker,e,t,"socket",s.dataValues),"application"===s.messageType&&(0,X.Xk)(n.token,r.instLinker,e,t,"socket",s.dataValues),"branch"===s.messageType&&(0,W.YR)(n.token,r.instLinker,e,t,"socket",s.dataValues),"entry"===s.messageType&&(0,U.Zj)(n.token,r.instLinker,e,t,"socket",s.dataValues),"online-payment"===s.messageType&&(0,K.a)(n.token,r.instLinker,e,t,"socket",s.dataValues),"group"===s.messageType&&(0,$.xc)(n.token,r.instLinker,e,t,"socket",s.dataValues),"client"===s.messageType&&(0,F.lX)(r.instLinker,n.token,e,t,"socket",s.dataValues),"payrollCat"===s.messageType&&(0,Q.$O)(n.token,r.instLinker,e,t,"socket",s.dataValues),"payrollItem"===s.messageType&&(0,ee.qI)(n.token,r.instLinker,e,t,"socket",s.dataValues),"payrollEntry"===s.messageType&&(0,_.gI)(n.token,r.instLinker,e,t,"socket",s.dataValues),"sub"===s.messageType&&(0,q.Ld)(n.token,r.instLinker,e,t,"socket",s.dataValues),"sms"===s.messageType&&(0,G.Vc)(n.token,r.instLinker,e,t,"socket",s.dataValues)}))}),[]),(0,v.jsx)(v.Fragment,{})},te=t(4165),re=t(5861),se=t(6461),ae=t(6548),ie=t(5420),ce=t(7185),le=function(){var e=(0,i.I0)(),n=(0,i.v9)((function(e){return e.auth.user})),t=(0,i.v9)((function(e){return e.cred.activeCred})),a=(0,i.v9)((function(e){return e.online.online})),c=(0,i.v9)((function(e){return e.inst.activeInst})),l=(0,i.v9)((function(e){return e.cred.creds})),o=(0,s.useState)(!1),u=(0,r.Z)(o,2),d=u[0],p=u[1],m=(0,s.useState)(!1),f=(0,r.Z)(m,2),h=f[0],x=f[1];(0,s.useEffect)((function(){k()}),[h,n]);var k=function(){var t=(0,re.Z)((0,te.Z)().mark((function t(){var r;return(0,te.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(d){t.next=15;break}if(p(!0),n.token){t.next=8;break}return t.next=5,j();case 5:t.t0=t.sent,t.next=9;break;case 8:t.t0=n;case 9:if(r=t.t0,c.id&&0!=c.id){t.next=13;break}return t.next=13,(0,ie.jB)(c,r,e);case 13:g(r),p(!1);case 15:H.W.on("connect",(function(){x(!0)})),H.W.on("disconnect",(function(){x(!1)})),(0,H.z)({clientId:"".concat(parseInt(parseInt("".concat(c.linker).split("").reverse().join(""))/1e3))}),l.map((function(e){e.email!=n.logger&&e.contact!=n.logger||(0,H.z)({token:n.token,instLinker:e.instLinker,room:e.instLinker})}));case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=(0,re.Z)((0,te.Z)().mark((function t(){var r,s;return(0,te.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,se.F6)(n.logger);case 2:if("register"!==(r=t.sent)&&0!==r){t.next=9;break}return t.next=6,(0,se.a4)(n.logger,n.password,n.linker,n.linker);case 6:s=t.sent,t.next=12;break;case 9:return t.next=11,(0,se.YV)(n.logger,n.password);case 11:s=t.sent;case 12:if(!s.token||!s.user){t.next=15;break}return e((0,ae.x4)({name:n.name,email:n.logger,password:n.password,linker:n.linker,live:1,token:s.token,logger:n.logger,id:s.user.id})),t.abrupt("return",{name:n.name,email:n.logger,password:n.password,linker:n.linker,live:1,token:s.token,logger:n.logger,id:s.user.id});case 15:return t.abrupt("return",n);case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(n){1===parseInt(t.admin)&&(0,F.Ui)(t.instLinker,n.token,e,a),1!==parseInt(t.admin)&&1!==parseInt(t.staff)||((0,U.Zj)(n.token,t.instLinker,e,a),(0,$.xc)(n.token,t.instLinker,e,a),(0,X.Xk)(n.token,t.instLinker,e,a),(0,W.YR)(n.token,t.instLinker,e,a),(0,F.lX)(t.instLinker,n.token,e,a),(0,R.mX)(n.token,t.instLinker,e,a),(0,Y.kt)(n.token,t.instLinker,e,a),(0,ce.f_)(n.token,t.instLinker,e,a),(0,K.a)(n.token,t.instLinker,e,a),(0,G.Vc)(n.token,t.instLinker,e,a),(0,Q.$O)(n.token,t.instLinker,e,a),(0,_.gI)(n.token,t.instLinker,e,a),(0,ee.qI)(n.token,t.instLinker,e,a)),(0,D.yl)(n.token,t.instLinker,e,a),(0,q.Ld)(n.token,t.instLinker,e,a),(0,B.xY)(n.token,t.instLinker,e,a)};return(0,v.jsx)(v.Fragment,{})},oe=t(8920),ue=function(){var e=(0,a.s0)(),n=(0,i.v9)((function(e){return e.inst.activeInst})),t=(0,i.v9)((function(e){return e.auth.user})),c=(0,i.v9)((function(e){return e.sub.subs})),l=(0,i.v9)((function(e){return e.cred.activeCred})),o=(0,S.C)(c,l.instLinker),u=(0,s.useState)(!1),d=(0,r.Z)(u,2),p=d[0],m=d[1];return(0,s.useEffect)((function(){l.linker||e("/")}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(oe.Z,{ToggleDrawer:function(){return m(!p)}}),(0,v.jsxs)("div",{style:{marginTop:"40px"},children:[(0,v.jsx)(ne,{}),(0,v.jsx)(le,{}),(0,v.jsxs)("div",{className:"d-flex",children:[(0,v.jsxs)("div",{className:"bg-secondary ".concat(p?"side-menu-open":"side-menu"),style:{zIndex:5e3},children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{onClick:function(){window.scroll(0,0),m(!1),e("/".concat(n.name))},children:(0,v.jsxs)("span",{className:"nav-link",children:[" ",(0,v.jsxs)("p",{className:"text-truncate text-capitalize m-0 p-0",children:[(0,v.jsx)(w.Z,{})," ",n.name]})," ",(0,v.jsx)("small",{children:parseInt(parseInt("".concat(n.linker).split("").reverse().join(""))/1e3)})]})}),(0,v.jsx)("hr",{}),(0,v.jsx)("p",{onClick:function(){window.scroll(0,0),m(!1),e("profile")},children:(0,v.jsxs)("strong",{className:"nav-link text-truncate",children:[(0,v.jsx)(y.Z,{})," ",t.name||t.logger]})}),(0,v.jsx)("hr",{}),1===parseInt(l.admin)&&o>0?(0,v.jsx)(g,{setDrawer:m}):null,(1===parseInt(l.admin)||1===parseInt(l.staff))&&o>0?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{onClick:function(){window.scroll(0,0),m(!1),e("clients")},children:(0,v.jsxs)("strong",{className:"nav-link text-truncate",children:[(0,v.jsx)(b.Z,{})," Clients"]})}),(0,v.jsx)("hr",{})," ",(0,v.jsx)("p",{onClick:function(){window.scroll(0,0),m(!1),e("entries")},children:(0,v.jsxs)("strong",{className:"nav-link text-truncate",children:[(0,v.jsx)(I.Z,{})," Entries"]})}),(0,v.jsx)("hr",{})," ",(0,v.jsx)("p",{onClick:function(){window.scroll(0,0),m(!1),e("applications")},children:(0,v.jsxs)("strong",{className:"nav-link text-truncate",children:[(0,v.jsx)(O.Z,{})," Applications"]})})," ",(0,v.jsx)("hr",{})," "]}):null,1===parseInt(l.client)&&o>0?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{onClick:function(){window.scroll(0,0),m(!1),e("client/applications")},children:(0,v.jsxs)("strong",{className:"nav-link text-truncate",children:[(0,v.jsx)(O.Z,{})," Applications"]})})," ",(0,v.jsx)("hr",{})," "]}):null,(0,v.jsx)("p",{onClick:function(){window.scroll(0,0),m(!1),e("calculator")},children:(0,v.jsxs)("strong",{className:"nav-link text-truncate",children:[(0,v.jsx)(z.Z,{})," Loan Calculator"]})})," "]}),(0,v.jsxs)("p",{children:[o-2592e3<0&&1===parseInt(l.admin)?(0,v.jsx)("span",{onClick:function(){window.scroll(0,0),m(!1),e(n.sub&&0!=n.sub&&""!=n.sub&&isNaN(parseInt(n.sub))?"/".concat(n.name,"/activate-web/").concat(n.name,"/").concat(n.clientId):"/".concat(n.name,"/activate/").concat(n.name,"/").concat(n.clientId))},className:"text-center",style:{color:"hotpink",cursor:"pointer"},children:(0,v.jsx)("small",{children:"Activate "})}):null," ",(0,v.jsx)("br",{}),(0,v.jsx)("span",{onClick:function(){window.scroll(0,0),e("/".concat(n.name,"/terms")),m(!1)},className:"text-center text-info",style:{cursor:"pointer",fontSize:"12px"},children:(0,v.jsx)("small",{children:"Terms And Conditions "})})," ",(0,v.jsx)("br",{}),(0,v.jsx)("span",{onClick:function(){window.scroll(0,0),e("/".concat(n.name,"/privacy")),m(!1)},className:"text-center text-info",style:{cursor:"pointer",fontSize:"12px"},children:(0,v.jsx)("small",{children:"Privacy Policy "})})," ",(0,v.jsx)("br",{}),(0,v.jsx)("span",{className:"text-center text-light",style:{cursor:"pointer",fontSize:"12px"},children:(0,v.jsxs)("small",{children:[(0,v.jsx)(T,{})," www.techsystems.world"]})}),(0,v.jsx)("br",{}),(0,v.jsx)("span",{className:"text-center text-light",style:{cursor:"pointer",fontSize:"12px"},children:(0,v.jsxs)("small",{children:[(0,v.jsx)(A,{})," contact.techsystems@gmail.com"]})}),(0,v.jsx)("br",{}),(0,v.jsx)("span",{className:"text-center text-light",style:{cursor:"pointer",fontSize:"12px"},children:(0,v.jsxs)("small",{children:["\xa9 ",(new Date).getFullYear()," Techsystems"]})})]})]}),(0,v.jsxs)("div",{className:"".concat(p?"main-page-drawer-open":"main-page-drawer-closed"),children:[o<0?(0,v.jsx)(v.Fragment,{children:c.length>0?(0,v.jsxs)("p",{className:"text-danger text-center h6",children:["Subscription Lapsed"," ",1===parseInt(l.admin)?(0,v.jsx)("span",{className:"text-primary btn-link",style:{cursor:"pointer"},onClick:function(){window.scroll(0,0),e(n.sub&&0!=n.sub&&""!=n.sub&&isNaN(parseInt(n.sub))?"/".concat(n.name,"/activate-web/").concat(n.name,"/").concat(n.clientId):"/".concat(n.name,"/activate/").concat(n.name,"/").concat(n.clientId))},children:(0,v.jsx)("em",{children:"Click To Activate"})}):"Contact Your Institution Admin to Activate"]}):(0,v.jsxs)("p",{className:"text-danger text-center h6",children:["Trial Period Lapsed"," ",1===parseInt(l.admin)?(0,v.jsx)("span",{className:"text-primary btn-link",style:{cursor:"pointer"},onClick:function(){window.scroll(0,0),e(n.sub&&0!=n.sub&&""!=n.sub&&isNaN(parseInt(n.sub))?"/".concat(n.name,"/activate-web/").concat(n.name,"/").concat(n.clientId):"/".concat(n.name,"/activate/").concat(n.name,"/").concat(n.clientId))},children:(0,v.jsx)("em",{children:"Click To Activate"})}):"Contact Your Institution Admin to Activate"]})}):o<432e3?(0,v.jsx)(v.Fragment,{children:c.length>0?(0,v.jsxs)("p",{className:"text-danger text-center h6",children:["Subscription Lapsing in ",parseInt(o/86400)," ","Days",1===parseInt(l.admin)?(0,v.jsx)("span",{className:"text-primary btn-link",style:{cursor:"pointer"},onClick:function(){window.scroll(0,0),e(n.sub&&0!=n.sub&&""!=n.sub&&isNaN(parseInt(n.sub))?"/".concat(n.name,"/activate-web/").concat(n.name,"/").concat(n.clientId):"/".concat(n.name,"/activate/").concat(n.name,"/").concat(n.clientId))},children:(0,v.jsx)("em",{children:"Click To Activate"})}):"Contact Your Institution Admin to Activate"]}):(0,v.jsxs)("p",{className:"text-danger text-center h6",children:["Trial Period Lapsing in ",parseInt(o/86400)," ","Days",1===parseInt(l.admin)?(0,v.jsx)("span",{className:"text-primary btn-link",style:{cursor:"pointer"},onClick:function(){window.scroll(0,0),e(n.sub&&0!=n.sub&&""!=n.sub&&isNaN(parseInt(n.sub))?"/".concat(n.name,"/activate-web/").concat(n.name,"/").concat(n.clientId):"/".concat(n.name,"/activate/").concat(n.name,"/").concat(n.clientId))},children:(0,v.jsx)("em",{children:"Click To Activate"})}):"Contact Your Institution Admin to Activate"]})}):null,(0,v.jsx)("div",{className:"bg-light",children:(0,v.jsx)(a.j3,{})})]})]})]})]})}},4169:function(e,n,t){t.d(n,{C:function(){return r}});var r=function(e,n){return e.filter((function(e){return e.softwareId==parseInt(parseInt("".concat(n).split("").reverse().join(""))/1e3)})).sort((function(e,n){return e.linker-n.linker})).reduce((function(e,n){return e.some((function(e){return e.code==n.code}))||e.push(n),e}),[]).map((function(e,t){var r=parseInt(parseInt("".concat(n).split("").reverse().join(""))/1e3),s=0;if(r==e.softwareId){var a=(e.code-r)/(t+2);s=99===a&&0===t||29===a&&t>0?31622400:31622400===a||15811200===a||7905600===a||2635200===a?a:63244800===a?632448e5:0}return s})).reduce((function(e,n){return+e+ +n}),0)+parseInt(n/1e3)+2592e3-parseInt(Date.now()/1e3)}},8598:function(e,n,t){var r=t(2791),s=t(2007),a=t.n(s),i=["color","size","title"];function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=(0,r.forwardRef)((function(e,n){var t=e.color,s=e.size,a=e.title,o=l(e,i);return r.createElement("svg",c({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:s,height:s,fill:t},o),a?r.createElement("title",null,a):null,r.createElement("path",{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"}))}));o.propTypes={color:a().string,size:a().oneOfType([a().string,a().number]),title:a().string},o.defaultProps={color:"currentColor",size:"1em",title:null},n.Z=o},7856:function(e,n,t){var r=t(2791),s=t(2007),a=t.n(s),i=["color","size","title"];function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=(0,r.forwardRef)((function(e,n){var t=e.color,s=e.size,a=e.title,o=l(e,i);return r.createElement("svg",c({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:s,height:s,fill:t},o),a?r.createElement("title",null,a):null,r.createElement("path",{fillRule:"evenodd",d:"M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"}),r.createElement("path",{d:"M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"}),r.createElement("path",{d:"M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"}),r.createElement("path",{d:"M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"}))}));o.propTypes={color:a().string,size:a().oneOfType([a().string,a().number]),title:a().string},o.defaultProps={color:"currentColor",size:"1em",title:null},n.Z=o}}]);
//# sourceMappingURL=303.fe6caf33.chunk.js.map