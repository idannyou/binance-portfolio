(this["webpackJsonpbinance-portfolio"]=this["webpackJsonpbinance-portfolio"]||[]).push([[0],{32:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(20),r=n.n(i),s=(n(32),n(22)),o=n(19),l=n(3),u=a.a.createContext();function d(t){var e=new WebSocket("wss://ftx.com/ws/"),n=["RAY/USD","FTT/USDT"];return e.onopen=function(){n.forEach((function(t){e.send(JSON.stringify({op:"subscribe",channel:"ticker",market:t}))}))},e.onmessage=function(e){if(e.data){var n=function(t){if(!t.data)return{};var e=parseInt(parseFloat(t.data.time).toFixed(3).split(".").join(""));return{c:t.data.last,E:e,s:t.market}}(JSON.parse(e.data));n.s&&t((function(t){var e=Object(o.a)({},t);return e[n.s]=n,e}))}},function(){n.forEach((function(t){e.send(JSON.stringify({op:"unsubscribe",channel:"ticker",market:t}))}))}}function b(t){var e=t.children,n=a.a.useState({}),c=Object(s.a)(n,2),i=c[0],r=c[1];return a.a.useEffect((function(){!function(t){var e=new WebSocket("wss://stream.binance.com:9443/ws"),n=["solusdt@ticker","rsrusdt@ticker","oceanusdt@ticker","mirusdt@ticker","1inchusdt@ticker","bandusdt@ticker","bnbusdt@ticker","thetausdt@ticker","xtzusdt@ticker"];e.onopen=function(){e.send(JSON.stringify({method:"SUBSCRIBE",params:n,id:1}))},e.onmessage=function(e){if(e.data){var n=JSON.parse(e.data);n.s&&t((function(t){var e=Object(o.a)({},t);return e[n.s]=n,e}))}}}(r),d(r)}),[]),Object(l.jsx)(u.Provider,{value:i,children:e})}var j=n(59),h=n(65),f=n(69),m=n(68),x=n(64),O=n(66),p=n(67),g=n(39),S={BNBUSDT:1.91,BANDUSDT:680.01,RSRUSDT:54e4,MIRUSDT:1921.705,"1INCHUSDT":5753.45,USDCUSDT:58e3,THETAUSDT:988.55,OCEANUSDT:8663,XTZUSDT:401,"RAY/USD":1950,"FTT/USDT":35.47},k=n(61),T=n(62),v=n(63),y=Object(j.a)({root:{minWidth:275,position:"sticky",left:0},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function D(t){var e=y();return Object(l.jsx)(k.a,{className:e.root,children:Object(l.jsxs)(T.a,{children:[Object(l.jsx)(v.a,{variant:"h5",component:"h2",children:"Total"}),Object(l.jsx)(v.a,{className:e.pos,color:"textSecondary",children:t.total.toFixed(2)})]})})}var w=Object(j.a)({table:{minWidth:300},sticky:{position:"sticky",left:0,background:"white",boxShadow:"5px 2px 5px grey"}});function U(){var t=w(),e=function(){var t=a.a.useContext(u);if(void 0===t)throw new Error("useMarket must be used within a MarketProvider");return t}(),n=Object.keys(e).map((function(t){var n,c=parseFloat(e[t].c),a=c*S[t];return function(t,e,n,c){return{symbol:t,time:e,lastPrice:n,totalHolding:c}}(e[t].s,(n=new Date(e[t].E),"".concat(n.getHours(),":").concat(n.getMinutes(),":").concat(n.getSeconds())),c,a.toFixed(2))})),c=Object.keys(e).map((function(t){return parseFloat(e[t].c)*S[t]})),i=c.length&&c.reduce((function(t,e){return e+t}));return Object(l.jsxs)(x.a,{component:g.a,children:[Object(l.jsxs)(h.a,{className:t.table,"aria-label":"simple table",children:[Object(l.jsx)(O.a,{children:Object(l.jsxs)(p.a,{children:[Object(l.jsx)(m.a,{className:t.sticky,children:"Symbol"}),Object(l.jsx)(m.a,{align:"right",children:"Last Price"}),Object(l.jsx)(m.a,{align:"right",children:"Total Holding"}),Object(l.jsx)(m.a,{align:"right",children:"Time"})]})}),Object(l.jsx)(f.a,{children:n.map((function(e){return Object(l.jsxs)(p.a,{children:[Object(l.jsx)(m.a,{className:t.sticky,component:"th",scope:"row",children:e.symbol}),Object(l.jsx)(m.a,{align:"right",children:e.lastPrice}),Object(l.jsx)(m.a,{align:"right",children:e.totalHolding}),Object(l.jsx)(m.a,{align:"right",children:e.time})]},e.name)}))})]}),Object(l.jsx)(D,{total:i})]})}var N=function(){return Object(l.jsx)(b,{children:Object(l.jsx)(U,{})})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),F()}},[[38,1,2]]]);
//# sourceMappingURL=main.5fad48a7.chunk.js.map