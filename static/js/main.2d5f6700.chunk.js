(this.webpackJsonpneobit=this.webpackJsonpneobit||[]).push([[0],{35:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(0),c=n.n(a),u=n(8),s=n.n(u),o=(n(35),n(23)),i=n(24),p=n(28),f=n(27),d=n(9),v=n(1),l=n.n(v),b=n(2),h=n(3),j=n(7),O=n.n(j),w=function(){return Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://extreme-ip-lookup.com/json");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},y=function(){return Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://counter-d86e4.firebaseio.com/count.json");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},x=function(e){return Object(b.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.put("https://counter-d86e4.firebaseio.com/count.json",{count:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},m=function(e){return Object(b.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.put("https://counter-d86e4.firebaseio.com/userDdata.json",{users:e.users});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},I=function(){return Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://counter-d86e4.firebaseio.com/userDdata.json");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},g={businessName:" ",businessWebsite:"",city:"",continent:"",country:"",countryCode:"",ipName:"",ipType:"",isp:"",lat:"",lon:"",org:"",query:"",region:"",status:""},T="dataReducer/SET_DATA",k=n(29);function U(){return C.apply(this,arguments)}function C(){return(C=Object(b.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.load();case 2:return t=e.sent,e.next=5,t.get({});case 5:return n=e.sent,e.abrupt("return",n.visitorId);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E={visitorId:"",userPlatform:""},_="fingerPrintReducer/SET_DATA",D={count:0},P="counterReducer/SET_DATA",S=n(14),A={users:[]},z="usersReducer/SET_DATA",F=function(e){return{type:z,payload:e}},N={initialized:!1},L="SET_INITIALIZED",R=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.setInitializedTC()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsx)("div",{children:Object(r.jsx)("div",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0439 : ".concat(this.props.viewCount)})}):"Loading"}}]),n}(c.a.Component),q=Object(d.b)((function(e){return{initialized:e.app.initialized,ip:e.currentIpUserInfo.query,ipName:e.currentIpUserInfo.ipName,viewCount:e.viewCount.count,city:e.currentIpUserInfo.region,country:e.currentIpUserInfo.country,provider:e.currentIpUserInfo.org}}),{setInitializedTC:function(){return function(){var e=Object(b.a)(l.a.mark((function e(t,n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return r=e.sent,e.next=5,t(F(r));case 5:return e.next=7,y();case 7:return a=e.sent,t({type:P,payload:a}),e.next=11,t(function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:n=e.sent,console.log(n),t({type:T,payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 11:return e.next=13,t(function(){var e=Object(b.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:return n=e.sent,e.next=5,window.navigator.platform;case 5:r=e.sent,console.log({visitorId:n,userPlatform:r}),t({type:_,payload:{visitorId:n,userPlatform:r}});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 13:return e.next=15,t(function(){var e=Object(b.a)(l.a.mark((function e(t,n){var r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n().currentFPUserInfo.visitorId,a=n().currentIpUserInfo.query,c=n().currentFPUserInfo.userPlatform,0===n().savedUsers.users.filter((function(e){return e.id===r||e.ip===a||e.platform===c})).length&&(t(F({users:[{id:r,ip:a,platform:c}]})),m(n().savedUsers),t(function(){var e=Object(b.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().viewCount.count+=1,e.next=3,x(r);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 15:t({type:L});case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})(R),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),r(e),a(e),c(e),u(e)}))},B=n(6),J=n(26),X=Object(B.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(h.a)(Object(h.a)({},e),{},{initialized:!0});default:return e}},currentIpUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(h.a)(Object(h.a)({},e),t.payload);default:return e}},currentFPUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(h.a)(Object(h.a)({},e),t.payload);default:return e}},viewCount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(h.a)(Object(h.a)({},e),{},{count:t.payload.count});default:return e}},savedUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(h.a)(Object(h.a)({},e),{},{users:[].concat(Object(S.a)(e.users),Object(S.a)(t.payload.users))});default:return e}}}),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d,W=Object(B.e)(X,V(Object(B.a)(J.a)));window.store=W,s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d.a,{store:W,children:Object(r.jsx)(q,{})})}),document.getElementById("root")),M()}},[[60,1,2]]]);
//# sourceMappingURL=main.2d5f6700.chunk.js.map