(this.webpackJsonpneobit=this.webpackJsonpneobit||[]).push([[0],{35:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var r=n(5),a=n(0),c=n.n(a),u=n(8),o=n.n(u),i=(n(35),n(23)),s=n(24),p=n(28),d=n(27),f=n(9),l=n(3),h=n(1),v=n.n(h),b=n(2),j=n(7),O=n.n(j),y=function(){return Object(b.a)(v.a.mark((function t(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://extreme-ip-lookup.com/json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},w=function(){return Object(b.a)(v.a.mark((function t(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://counter-d86e4.firebaseio.com/count.json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},x=function(t){return Object(b.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.put("https://counter-d86e4.firebaseio.com/count.json",{count:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))()},g=function(t){return Object(b.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.put("https://counter-d86e4.firebaseio.com/userDdata.json",{users:t.users,usersCount:t.usersCount});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))()},m=function(){return Object(b.a)(v.a.mark((function t(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://counter-d86e4.firebaseio.com/userDdata.json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},I={businessName:" ",businessWebsite:"",city:"",continent:"",country:"",countryCode:"",ipName:"",ipType:"",isp:"",lat:"",lon:"",org:"",query:"",region:"",status:""},C="dataReducer/SET_DATA",T=n(29);function k(){return E.apply(this,arguments)}function E(){return(E=Object(b.a)(v.a.mark((function t(){var e,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.a.load();case 2:return e=t.sent,t.next=5,e.get();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var _={},D="fingerPrintReducer/SET_DATA",S={count:0},A="counterReducer/SET_DATA",N=function(t){return{type:A,payload:t}},z=n(14),P={usersCount:0,users:[]},L="usersReducer/SET_DATA",R=function(t){return{type:L,payload:t}},F={initialized:!1},q="SET_INITIALIZED",M=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.setInitializedTC()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"\u0412\u0430\u0448 IP \u0430\u0434\u0440\u0435\u0441 : ".concat(this.props.ip)}),Object(r.jsx)("div",{children:"\u0418\u043c\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 : ".concat(this.props.ipName)}),Object(r.jsx)("div",{children:"\u0412\u0430\u0448\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: : ".concat(this.props.country,", ").concat(this.props.city)}),Object(r.jsx)("div",{children:"\u0412\u0430\u0448 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 : ".concat(this.props.provider)}),Object(r.jsx)("div",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0439 : ".concat(this.props.viewCount)})]}):"Loading"}}]),n}(c.a.Component),B=Object(f.b)((function(t){return{initialized:t.app.initialized,ip:t.ipInfo.query,ipName:t.ipInfo.ipName,viewCount:t.viewCount.count,city:t.ipInfo.region,country:t.ipInfo.country,provider:t.ipInfo.org}}),{setInitializedTC:function(){return function(t){var e=t(function(){var t=Object(b.a)(v.a.mark((function t(e){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:n=t.sent,e({type:C,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n=t(function(){var t=Object(b.a)(v.a.mark((function t(e){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:n=t.sent,console.log(n),e({type:D,payload:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r=t(function(){var t=Object(b.a)(v.a.mark((function t(e,n){var r,a,c,u,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return r=t.sent,console.log(r),e(R(r)),t.next=7,k();case 7:a=t.sent,c=a.visitorId,u=n().ipInfo.query,o=n().usersInfo.users.length,e(R({usersCount:o,users:[{id:c,ip:u}]})),g(n().usersInfo);case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),a=t(function(){var t=Object(b.a)(v.a.mark((function t(e,n){var r,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return r=t.sent,e(N(r)),a=n().viewCount.count+=1,t.next=7,x(a);case 7:e(N(r));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());Promise.all([e,n,r,a]).then((function(){t({type:q})}))}}})(M),J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,u=e.getTTFB;n(t),r(t),a(t),c(t),u(t)}))},X=n(6),U=n(26),V=Object(X.c)({app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case q:return Object(l.a)(Object(l.a)({},t),{},{initialized:!0});default:return t}},ipInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C:return Object(l.a)(Object(l.a)({},t),e.payload);default:return t}},fingerPrintInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:return Object(l.a)(Object(l.a)({},t),e.payload);default:return t}},viewCount:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case A:return Object(l.a)(Object(l.a)({},t),{},{count:e.payload.count});default:return t}},usersInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case L:return Object(l.a)(Object(l.a)({},t),{},{usersCount:e.payload.usersCount,users:[].concat(Object(z.a)(t.users),Object(z.a)(e.payload.users))});default:return t}}}),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,Z=Object(X.e)(V,W(Object(X.a)(U.a)));window.store=Z,o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(f.a,{store:Z,children:Object(r.jsx)(B,{})})}),document.getElementById("root")),J()}},[[60,1,2]]]);
//# sourceMappingURL=main.bf9fa599.chunk.js.map