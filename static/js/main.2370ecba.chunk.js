(this.webpackJsonpneobit=this.webpackJsonpneobit||[]).push([[0],{35:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var r=n(5),a=n(0),c=n.n(a),i=n(8),u=n.n(i),o=(n(35),n(23)),s=n(24),p=n(28),f=n(27),d=n(9),v=n(3),h=n(1),b=n.n(h),l=n(2),j=n(7),O=n.n(j),y=function(){return Object(l.a)(b.a.mark((function t(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://extreme-ip-lookup.com/json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},w=function(){return Object(l.a)(b.a.mark((function t(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://counter-d86e4.firebaseio.com/count.json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},x=function(t){return Object(l.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.put("https://counter-d86e4.firebaseio.com/count.json",{count:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))()},g=function(t){return Object(l.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.put("https://counter-d86e4.firebaseio.com/userDdata.json",{users:t.users});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))()},I=function(){return Object(l.a)(b.a.mark((function t(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://counter-d86e4.firebaseio.com/userDdata.json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},m={businessName:" ",businessWebsite:"",city:"",continent:"",country:"",countryCode:"",ipName:"",ipType:"",isp:"",lat:"",lon:"",org:"",query:"",region:"",status:""},T="dataReducer/SET_DATA",k=n(29);function C(){return E.apply(this,arguments)}function E(){return(E=Object(l.a)(b.a.mark((function t(){var e,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.load();case 2:return e=t.sent,t.next=5,e.get();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var _={visitorId:""},D="fingerPrintReducer/SET_DATA",P={count:0},S="counterReducer/SET_DATA",A=n(14),N={users:[]},z="usersReducer/SET_DATA",R=function(t){return{type:z,payload:t}},L={initialized:!1},F="appReducer/SET_INITIALIZED",q=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.setInitializedTC()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"\u0412\u0430\u0448 IP \u0430\u0434\u0440\u0435\u0441 : ".concat(this.props.ip)}),Object(r.jsx)("div",{children:"\u0418\u043c\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 : ".concat(this.props.ipName)}),Object(r.jsx)("div",{children:"\u0412\u0430\u0448\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: : ".concat(this.props.country,", ").concat(this.props.city)}),Object(r.jsx)("div",{children:"\u0412\u0430\u0448 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 : ".concat(this.props.provider)}),Object(r.jsx)("div",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0439 : ".concat(this.props.viewCount)})]}):"Loading"}}]),n}(c.a.Component),M=Object(d.b)((function(t){return{initialized:t.app.initialized,ip:t.ipInfo.query,ipName:t.ipInfo.ipName,viewCount:t.viewCount.count,city:t.ipInfo.region,country:t.ipInfo.country,provider:t.ipInfo.org}}),{setInitializedTC:function(){return function(t,e){var n=t(function(){var t=Object(l.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:n=t.sent,e({type:T,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r=t(function(){var t=Object(l.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:n=t.sent,e({type:D,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),a=t(function(){var t=Object(l.a)(b.a.mark((function t(e,n){var r,a,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I();case 2:r=t.sent,e(R(r)),a=n().fingerPrintInfo.visitorId,c=n().ipInfo.query,i=n().fingerPrintInfo.visitorId,n().usersInfo.users.filter((function(t){return t.id===i}))||(e(R({users:[{id:a,ip:c}]})),g(n().usersInfo));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),c=t(function(){var t=Object(l.a)(b.a.mark((function t(e,n){var r,a,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:if(r=t.sent,e({type:S,payload:r}),a=n().fingerPrintInfo.visitorId,n().usersInfo.users.filter((function(t){return t.id===a}))){t.next=9;break}return c=n().viewCount.count+=1,t.next=9,x(c);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());Promise.all([n,r,a,c]).then((function(){t({type:F})}))}}})(q),B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))},J=n(6),X=n(26),U=Object(J.c)({app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F:return Object(v.a)(Object(v.a)({},t),{},{initialized:!0});default:return t}},ipInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T:return Object(v.a)(Object(v.a)({},t),e.payload);default:return t}},fingerPrintInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:return Object(v.a)(Object(v.a)({},t),e.payload);default:return t}},viewCount:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:return Object(v.a)(Object(v.a)({},t),{},{count:e.payload.count});default:return t}},usersInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case z:return Object(v.a)(Object(v.a)({},t),{},{users:[].concat(Object(A.a)(t.users),Object(A.a)(e.payload.users))});default:return t}}}),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,W=Object(J.e)(U,V(Object(J.a)(X.a)));window.store=W,u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d.a,{store:W,children:Object(r.jsx)(M,{})})}),document.getElementById("root")),B()}},[[60,1,2]]]);
//# sourceMappingURL=main.2370ecba.chunk.js.map