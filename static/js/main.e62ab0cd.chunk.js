(this.webpackJsonpneobit=this.webpackJsonpneobit||[]).push([[0],{35:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var r=n(5),a=n(0),c=n.n(a),u=n(8),o=n.n(u),s=(n(35),n(23)),i=n(24),p=n(28),f=n(27),d=n(9),v=n(1),l=n.n(v),b=n(2),h=n(3),y=n(7),j=n.n(y),I=function(){return Object(b.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://extreme-ip-lookup.com/json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},O=function(){return Object(b.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://counter-d86e4.firebaseio.com/count.json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},w=function(t){return Object(b.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.put("https://counter-d86e4.firebaseio.com/count.json",{count:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))()},x=function(t){return Object(b.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.put("https://counter-d86e4.firebaseio.com/userDdata.json",{users:t.users});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))()},g=function(){return Object(b.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://counter-d86e4.firebaseio.com/userDdata.json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},m={businessName:" ",businessWebsite:"",city:"",continent:"",country:"",countryCode:"",ipName:"",ipType:"",isp:"",lat:"",lon:"",org:"",query:"",region:"",status:""},U="dataReducer/SET_DATA",k=n(29);function T(){return C.apply(this,arguments)}function C(){return(C=Object(b.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.load();case 2:return e=t.sent,t.next=5,e.get({});case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var E={visitorId:""},_="fingerPrintReducer/SET_DATA",D={count:0},S="counterReducer/SET_DATA",A=n(14),z={users:[{city:"",country:"",continent:"",ip:"",id:""}]},F="usersReducer/SET_DATA",N=function(t){return{type:F,payload:t}},P={initialized:!1},L="SET_INITIALIZED",R=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.setInitializedTC()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsx)("div",{children:Object(r.jsx)("div",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0439 : ".concat(this.props.viewCount)})}):"Loading"}}]),n}(c.a.Component),q=Object(d.b)((function(t){return{initialized:t.app.initialized,ip:t.currentIpUserInfo.query,ipName:t.currentIpUserInfo.ipName,viewCount:t.viewCount.count,city:t.currentIpUserInfo.region,country:t.currentIpUserInfo.country,provider:t.currentIpUserInfo.org}}),{setInitializedTC:function(){return function(){var t=Object(b.a)(l.a.mark((function t(e,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:return r=t.sent,t.next=5,e(N(r));case 5:return t.next=7,e(function(){var t=Object(b.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I();case 2:n=t.sent,console.log(n),e({type:U,payload:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 7:return t.next=9,e(function(){var t=Object(b.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:n=t.sent,console.log(n),e({type:_,payload:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 9:return t.next=11,e(function(){var t=Object(b.a)(l.a.mark((function t(e,n){var r,a,c,u,o,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:if(r=t.sent,e({type:S,payload:r}),a=n().currentFPUserInfo.visitorId,c=n().currentIpUserInfo.query,u=n().currentIpUserInfo.continent,o=n().currentIpUserInfo.country,s=n().currentIpUserInfo.city,0!==n().savedUsers.users.filter((function(t){return t.id===a&&t.ip===c&&t.continent===u&&t.country===o&&t.city===s})).length){t.next=14;break}return i=n().viewCount.count+=1,t.next=14,w(i);case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 11:return t.next=13,e(function(){var t=Object(b.a)(l.a.mark((function t(e,n){var r,a,c,u,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n().currentFPUserInfo.visitorId,a=n().currentIpUserInfo.query,c=n().currentIpUserInfo.continent,u=n().currentIpUserInfo.country,o=n().currentIpUserInfo.city,0===n().savedUsers.users.filter((function(t){return t.id===r&&t.ip===a&&t.continent===c&&t.country===u&&t.city===o})).length&&(e(N({users:[{id:r,ip:a,continent:c,country:u,city:o}]})),x(n().savedUsers));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 13:e({type:L});case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(R),M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,u=e.getTTFB;n(t),r(t),a(t),c(t),u(t)}))},B=n(6),J=n(26),X=Object(B.c)({app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case L:return Object(h.a)(Object(h.a)({},t),{},{initialized:!0});default:return t}},currentIpUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case U:return Object(h.a)(Object(h.a)({},t),e.payload);default:return t}},currentFPUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _:return Object(h.a)(Object(h.a)({},t),{},{visitorId:e.payload.visitorId});default:return t}},viewCount:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:return Object(h.a)(Object(h.a)({},t),{},{count:e.payload.count});default:return t}},savedUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F:return Object(h.a)(Object(h.a)({},t),{},{users:[].concat(Object(A.a)(t.users),Object(A.a)(e.payload.users))});default:return t}}}),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d,W=Object(B.e)(X,V(Object(B.a)(J.a)));window.store=W,o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d.a,{store:W,children:Object(r.jsx)(q,{})})}),document.getElementById("root")),M()}},[[60,1,2]]]);
//# sourceMappingURL=main.e62ab0cd.chunk.js.map