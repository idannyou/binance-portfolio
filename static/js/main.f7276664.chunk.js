(this["webpackJsonpbinance-portfolio"]=this["webpackJsonpbinance-portfolio"]||[]).push([[0],{28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(18),a=n.n(i),s=(n(28),n(21)),o=n(20),d=n(3),u=r.a.createContext();function l(e){var t=e.children,n=r.a.useState({}),c=Object(o.a)(n,2),i=c[0],a=c[1];return r.a.useEffect((function(){var e=new WebSocket("wss://stream.binance.com:9443/ws");return e.onopen=function(){e.send(JSON.stringify({method:"SUBSCRIBE",params:["solusdt@ticker","rsrusdt@ticker","oceanusdt@ticker","mirusdt@ticker","1inchusdt@ticker","bandusdt@ticker","bnbusdt@ticker","thetausdt@ticker","xtzusdt@ticker"],id:1}))},e.onmessage=function(e){if(e.data){var t=JSON.parse(e.data);t.s&&a((function(e){var n=Object(s.a)({},e);return n[t.s]=t,n}))}},function(){e.send(JSON.stringify({method:"UNSUBSCRIBE",params:["btcusdt@ticker"],id:1}))}}),[]),Object(d.jsx)(u.Provider,{value:i,children:t})}var b=n(54),j=n(58),h=n(61),O=n(63),g=n(56),m=n(59),f=n(60),S=n(57),x={BNBUSDT:1,BANDUSDT:1,RSRUSDT:1,MIRUSDT:1,"1INCHUSDT":1,SOLUSDT:1,THETAUSDT:1,OCEANUSDT:1,XTZUSDT:1},p=Object(b.a)({table:{minWidth:650}});function k(){var e=p(),t=function(){var e=r.a.useContext(u);if(void 0===e)throw new Error("useMarket must be used within a MarketProvider");return e}(),n=Object.keys(t).map((function(e){var n,c=parseFloat(t[e].c),r=c*x[e];return function(e,t,n,c){return{symbol:e,time:t,lastPrice:n,myHoldingPrice:c}}(t[e].s,(n=new Date(t[e].E),"".concat(n.getHours(),":").concat(n.getMinutes(),":").concat(n.getSeconds())),c,r)}));return Object(d.jsx)(g.a,{component:S.a,children:Object(d.jsxs)(j.a,{className:e.table,"aria-label":"simple table",children:[Object(d.jsx)(m.a,{children:Object(d.jsxs)(f.a,{children:[Object(d.jsx)(O.a,{children:"Symbol"}),Object(d.jsx)(O.a,{align:"right",children:"Time"}),Object(d.jsx)(O.a,{align:"right",children:"Last Price"}),Object(d.jsx)(O.a,{align:"right",children:"My Holding Price"})]})}),Object(d.jsx)(h.a,{children:n.map((function(e){return Object(d.jsxs)(f.a,{children:[Object(d.jsx)(O.a,{component:"th",scope:"row",children:e.symbol}),Object(d.jsx)(O.a,{align:"right",children:e.time}),Object(d.jsx)(O.a,{align:"right",children:e.lastPrice}),Object(d.jsx)(O.a,{align:"right",children:e.myHoldingPrice})]},e.name)}))})]})})}var v=function(){return Object(d.jsx)(l,{children:Object(d.jsx)(k,{})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),T()}},[[34,1,2]]]);
//# sourceMappingURL=main.f7276664.chunk.js.map