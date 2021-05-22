(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{67:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(26),i=c.n(a),s=(c(67),c(28)),o=c(7),j=c(61),l=c(13),u=c(10),b=c(50),h=c(12),d=c(27),O=c(29),f=c(1),m=function(){var e=Object(n.useState)(),t=Object(h.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),i=Object(h.a)(a,2),s=i[0],j=i[1],b=Object(n.useState)(!1),m=Object(h.a)(b,2),p=m[0],x=m[1],v=Object(o.f)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{children:Object(f.jsx)(u.a,{className:"mt-3",children:Object(f.jsx)("p",{className:"font-weight-bold setting-title",children:"Configure BattleShip Game"})})}),Object(f.jsx)(l.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsxs)(d.a,{noValidate:!0,validated:p,onSubmit:function(e){!1===e.currentTarget.checkValidity()?(e.preventDefault(),e.stopPropagation(),x(!0)):v.push("/game/".concat(c,"/").concat(s?1:0))},children:[Object(f.jsxs)(d.a.Group,{children:[Object(f.jsx)(d.a.Label,{children:"Level"}),Object(f.jsxs)(d.a.Control,{as:"select",value:c,"aria-label":"Default select example",onChange:function(e){r(e.target.value)},required:!0,size:"lg",children:[Object(f.jsx)("option",{value:"",children:"Level"}),Object(f.jsx)("option",{value:"0",children:"Easy"}),Object(f.jsx)("option",{value:"100",children:"Medium"}),Object(f.jsx)("option",{value:"50",children:"Hard"})]}),Object(f.jsx)(d.a.Control.Feedback,{type:"invalid",children:"Please provide a valid level."})]}),Object(f.jsx)(d.a.Group,{children:Object(f.jsx)(d.a.Check,{type:"checkbox",label:"Show ships",checked:s,onChange:function(){return j(!s)}})}),Object(f.jsx)(O.a,{variant:"primary",type:"submit",size:"lg",block:!0,children:"Enter"})]})})})]})},p=c(14),x=c(21),v=c(62),g=c(81),y=c(82),A=new g.a,S="default-alert",k={onAlert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return A.asObservable().pipe(Object(y.a)((function(t){return t&&t.id===e})))},success:function(e,t){B(Object(p.a)(Object(p.a)({},t),{},{type:C,message:e}))},error:function(e,t){B(Object(p.a)(Object(p.a)({},t),{},{type:N,message:e}))},info:function(e,t){B(Object(p.a)(Object(p.a)({},t),{},{type:w,message:e}))},warn:function(e,t){B(Object(p.a)(Object(p.a)({},t),{},{type:I,message:e}))},alert:B,clear:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;A.next({id:e})}},C="Success",N="Error",w="Info",I="Warning";function B(e){e.id=e.id||S,A.next(e)}var F=c(58),G=c(59),E=["A","B","C","D","E","F","G","H","I","J"],T=function(e,t){return Array(t-e+1).fill().map((function(t,c){return e+c}))},D=function(e,t){return e.filter((function(e){return!t.some((function(t){return t===e}))}))},P=function(){function e(t,c,n,r,a,i,s){Object(F.a)(this,e),this.index=t,this.rowName=c,this.columNumber=n||0,this.isShip=r||!1,this.isActiveShip=a||!1,this.shipKey=i||"0000",this.isAttacked=s||!1}return Object(G.a)(e,[{key:"Display",value:function(){return"".concat(this.rowName).concat(this.columNumber.toString())}}]),e}(),R=c(31);function L(e){var t=e.id,c=e.fade,r=Object(o.f)(),a=Object(n.useState)([]),i=Object(h.a)(a,2),s=i[0],j=i[1];function l(e){if(c){var t=Object(p.a)(Object(p.a)({},e),{},{fade:!0});j((function(c){return c.map((function(c){return c===e?t:c}))})),setTimeout((function(){j((function(e){return e.filter((function(e){return e!==t}))}))}),250)}else j((function(t){return t.filter((function(t){return t!==e}))}))}function u(e){var t;if(e){var c=["alert","alert-dismissable"],n=(t={},Object(R.a)(t,C,"alert alert-success"),Object(R.a)(t,N,"alert alert-danger"),Object(R.a)(t,w,"alert alert-info"),Object(R.a)(t,I,"alert alert-warning"),t);return c.push(n[e.type]),e.fade&&c.push("fade"),c.join(" ")}}return Object(n.useEffect)((function(){var e=k.onAlert(t).subscribe((function(e){e.message?(j((function(t){return[].concat(Object(x.a)(t),[e])})),e.autoClose&&setTimeout((function(){return l(e)}),3e3)):j((function(e){var t=e.filter((function(e){return e.keepAfterRouteChange}));return t.forEach((function(e){return delete e.keepAfterRouteChange})),t}))})),c=r.listen((function(){k.clear(t)}));return function(){e.unsubscribe(),c()}}),[]),s.length?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"m-3",children:s.map((function(e,t){return Object(f.jsxs)("div",{className:u(e),children:[Object(f.jsx)("a",{className:"close",onClick:function(){return l(e)},children:"\xd7"}),Object(f.jsx)("span",{dangerouslySetInnerHTML:{__html:e.message}})]},t)}))})}):null}L.defaultProps={id:"default-alert",fade:!0};var H=function(e){var t=e.isShip,c=e.displayShips,n=e.isAttacked,r=e.fire,a=e.index,i=e.display;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"ocean-block ".concat(t&&c?"red":""," \n        ").concat(n?"darkgrey":""),onClick:function(){return r(a)},children:"".concat(i)})})},M=c(40),_=function(e){var t=e.isInfinitive,c=e.thereIsActiveShipBlocks,n=e.currentAttempts;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(l.a,{className:"NotificationSection mb-3",children:Object(f.jsxs)(u.a,{children:[t&&Object(f.jsx)(l.a,{className:"AttempsTitle",children:Object(f.jsx)(u.a,{children:"You have infinitive attempts"})}),!t&&c&&n>0&&Object(f.jsx)(l.a,{className:"AttempsTitle",children:Object(f.jsx)(u.a,{children:"You just have ".concat(n," attempts")})}),Object(f.jsx)(l.a,{children:Object(f.jsxs)(u.a,{children:[!t&&c&&n<1&&Object(f.jsx)(M.a,{variant:"danger",children:Object(f.jsx)(M.a.Heading,{children:"You lose the game"})}),!c&&Object(f.jsx)(M.a,{variant:"success",children:Object(f.jsx)(M.a.Heading,{children:"You won the game"})})]})})]})})})};_.defaultProps={isInfinitive:!0,thereIsActiveShipBlocks:!1,currentAttempts:0};var K=function(e){var t=e.restartGame;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(l.a,{className:"ActionSection mb-3",children:Object(f.jsx)(u.a,{children:Object(f.jsx)(O.a,{onClick:t,variant:"danger",size:"lg",className:"ml-3",children:"Restart Game"})})})})},Y=c(35),z=function(e){var t=e.show,c=e.body,n=e.title,r=e.onCancel,a=e.onAccept;return Object(f.jsxs)(Y.a,{show:t,onHide:r,children:[Object(f.jsx)(Y.a.Header,{closeButton:!0,children:Object(f.jsx)(Y.a.Title,{children:n})}),Object(f.jsx)(Y.a.Body,{children:c}),Object(f.jsxs)(Y.a.Footer,{children:[Object(f.jsx)(O.a,{variant:"secondary",onClick:r,children:"Cancel"}),Object(f.jsx)(O.a,{variant:"primary",onClick:a,children:"Accept"})]})]})},J=c(6),W=c.n(J),V={games:[]},q=function(e,t){var c=t.type,n=t.payload;switch(c){case"LOAD_DATA_GAMES":return Object(p.a)(Object(p.a)({},e),{},{games:n});default:throw new Error}},Q=Object(n.createContext)({}),U=function(e){var t=e.children,c=Object(n.useReducer)(q,V),r=Object(h.a)(c,2),a=r[0],i=r[1];return Object(f.jsx)(Q.Provider,{value:{loadGames:function(e){i({payload:e,type:"LOAD_DATA_GAMES"})},globalState:a},children:t})};W.a.object;U.defaultProps={children:{}};c(75);var X=function(){var e=Object(n.useState)(new Array(100)),t=Object(h.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!0),i=Object(h.a)(a,2),s=i[0],j=i[1],b=Object(n.useState)(0),d=Object(h.a)(b,2),O=d[0],m=d[1],g=Object(n.useState)(!0),y=Object(h.a)(g,2),A=y[0],S=y[1],C=Object(n.useState)(!0),N=Object(h.a)(C,2),w=N[0],I=N[1],B=Object(n.useState)(!1),F=Object(h.a)(B,2),G=F[0],R=F[1],L=Object(n.useState)(""),M=Object(h.a)(L,2),Y=M[0],J=M[1],W=Object(n.useState)(0),V=Object(h.a)(W,2),q=V[0],U=V[1],X=Object(n.useContext)(Q),Z=X.loadGames,$=X.globalState,ee=Object(o.g)(),te=ee.attemptsParam,ce=ee.showShips,ne=+te,re={autoClose:!0,keepAfterRouteChange:!1},ae=function(e,t,c){for(var n=0;n<e.length;n++){var r=e[n];ie(r,t,c,n)}},ie=function(e,t,c,n){for(var r=0;r<e.length;r++){var a=e[r];t[a].isShip=!0,t[a].isActiveShip=!0,t[a].shipKey="".concat(c.toString(),"S00").concat(n.toString())}},se=function(e,t){for(var c=[],n=!1;!n;){for(var r=Math.floor(100*Math.random()),a=T(r,r+t),i=!0,s=a.length,o=0;i&&s>o;){e.some((function(e){return e===a[o]}))||(i=!1);var j=a[o];t>0&&(t>1?0<o&&o<s&&(j%10!==0&&j%10!==9||(i=!1)):0==o&&j%10===9&&(i=!1)),o++}i&&(c.push.apply(c,Object(x.a)(a)),n=!0)}return c},oe=function(e,t,c){for(var n=0,r=[],a=Array.from(t);n<e;)r.push(se(a,c)),a=Array.from(D(a,r[n])),n++;return{groupResult:r,currentBaseNumbers:a}},je=function(){S(!0),0===parseInt(ne)?j(!0):(j(!1),m(ne)),I(ce>0),function(e){var t=Object(x.a)($.games),c=t.length+1;U(c);var n={id:c,attemps:ne,restOfAttemps:e,thereIsActiveShipBlocks:!0};t.push(n),Z(Object(x.a)(t))}(parseInt(ne));var e=function(e){for(var t=[],c=3,n={groupResult:[],currentBaseNumbers:Array.from(e)},r=1;r<=4;r++)n=Object.create(oe(r,n.currentBaseNumbers,c)),t.push(Array.from(n.groupResult)),c--;return t}(Array.from(Array(100).keys())),t=Array.from(Array(100).keys()).map((function(e){var t=new P;return E.forEach((function(c,n){!function(e,t,c,n){var r=10*e;r<=c&&c<=r+9&&(n.rowName=t,n.columNumber=c+1-10*e),n.index=c}(n,c,e,t)})),t}));!function(e,t){for(var c=0;c<e.length;c++){var n=e[c];ae(n,t,c)}}(e,t),r(t)};Object(n.useEffect)((function(){je()}),[]);var le=function(e){if(!s&&0===O){var t="You do not have more shots!!. Would you like to restart the game?";return k.error(t,re),J(t),be(),!1}var n=Array.from(c),a=n[e],i=O;a.isAttacked?k.warn("This area was atacked!!",re):(a.isShip?(!function(e,t){for(var c=0;c<e.length;c++){var n=e[c];n.shipKey===t.shipKey&&(n.isAttacked=!0,n.isActiveShip=!1)}}(n,a),k.info("ship destroyed!!",re)):(a.isAttacked=!0,k.warn("you failed the shot!!",re)),s||m(i=O-1));var o=n.some((function(e){return e.isActiveShip}));if(S(o),!o){var j="you won the game!!. Would you like to restart the game?";k.success(j,re),J(j),be()}r(n),function(e,t){var c=Object(x.a)($.games),n=c[q-1];n.restOfAttemps=e,n.thereIsActiveShipBlocks=t,Z(Object(x.a)(c))}(i,o)},ue=function(){je()},be=function(){return R(!0)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{children:Object(f.jsx)(z,{show:G,body:Y,title:"Finished Game",onCancel:function(){return R(!1)},onAccept:function(){R(!1),ue()}})}),Object(f.jsx)(l.a,{className:"GameContainer mt-4",children:Object(f.jsxs)(u.a,{children:[Object(f.jsx)(K,{restartGame:ue}),Object(f.jsx)(_,{isInfinitive:s,thereIsActiveShipBlocks:A,currentAttempts:O}),Object(f.jsx)(v.a,{style:{padding:"1rem"},children:Object(f.jsx)("div",{className:"ocean-container",children:c.map((function(e){return Object(f.jsx)(H,Object(p.a)(Object(p.a)({},e),{},{fire:le,displayShips:w,display:e.Display()}),e.index)}))})})]})})]})},Z=c(60),$=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],a=Object(n.useContext)(Q).globalState;return Object(n.useEffect)((function(){r(Object(x.a)(a.games.slice(0).reverse()))}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(l.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsxs)(Z.a,{striped:!0,bordered:!0,hover:!0,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"#"}),Object(f.jsx)("th",{children:"Level"}),Object(f.jsx)("th",{children:"Attemps"}),Object(f.jsx)("th",{children:"Rest Of Attemps"}),Object(f.jsx)("th",{children:"Completed Game"})]})}),Object(f.jsx)("tbody",{children:c.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.id}),Object(f.jsx)("td",{children:0===e.attemps?"easy":100===e.attemps?"medium":50===e.attemps?"hard":"Other"}),Object(f.jsx)("td",{children:e.attemps}),Object(f.jsx)("td",{children:e.restOfAttemps}),Object(f.jsx)("td",{children:(!e.thereIsActiveShipBlocks).toString()})]},e.id)}))})]})})})})};c(76);var ee=function(){return Object(f.jsx)(U,{children:Object(f.jsx)(s.a,{children:Object(f.jsxs)(j.a,{fluid:!0,children:[Object(f.jsxs)(b.a,{defaultActiveKey:"/",as:"ul",children:[Object(f.jsx)(b.a.Item,{as:"li",children:Object(f.jsx)(s.b,{to:"/",className:"nav-link",children:"Setting"})}),Object(f.jsx)(b.a.Item,{as:"li",children:Object(f.jsx)(s.b,{to:"/records",className:"nav-link",children:"Records"})})]}),Object(f.jsx)(l.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/game/:attemptsParam/:showShips",children:Object(f.jsx)(X,{})}),Object(f.jsx)(o.a,{path:"/records/",children:Object(f.jsx)($,{})}),Object(f.jsx)(o.a,{path:"/",children:Object(f.jsx)(m,{})})]})})}),Object(f.jsx)(l.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsx)(L,{})})})]})})})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(ee,{})}),document.getElementById("root")),te()}},[[77,1,2]]]);
//# sourceMappingURL=main.7bff32ae.chunk.js.map