(self.webpackChunkhapin=self.webpackChunkhapin||[]).push([[433],{44454:function(a,c,t){"use strict";t.r(c),t.d(c,{default:function(){return T}});var h=t(861),x=t.n(h),u=t(27424),y=t.n(u),i=t(62435),e=t(86074),l={"zh-CN":{title:"\u54C8\u62FC\u6F14\u7EC3\u573A",desc:"\u54C8\u62FC\u6F14\u7EC3\u573A\u662F\u4E3A\u521D\u5B66\u8005\u51C6\u5907\u7684\u76F4\u89C2\u7EC3\u4E60",isMobile:"\u4E3A\u4E86\u66F4\u597D\u7684\u4F53\u9A8C\uFF0C\u8BF7\u4F7F\u7528PC\u6253\u5F00",hapin:"\u54C8\u62FC\u65B9\u6848",arabic:"\u8001\u6587\u5B57\u5B57\u6BCD",cyrillic:"\u897F\u91CC\u5C14\u5B57\u6BCD",x:"X \u6A21\u5F0F: \u54C8\u62FC\u5728\u501F\u9274\u8001\u6587\u5B57\u5BF9\u4E8E\u5F31\u97F3\u7B26\u53F7\u7684\u5904\u7406\u4E0A\u521B\u9020\u4E86 X \u6A21\u5F0F, \u4F8B\u5982: xa \u76F8\u5F53\u4E8E\u662F\u5728 a \u6DFB\u52A0\u4E86\u5F31\u97F3\u7B26\u53F7\u4FEE\u9970\u7B26\u3002\u652F\u6301\u7684\u4FEE\u9970\u7684\u5B57\u6BCD\u4EC5\u6709: xa, xe, xo, xu \u6784\u6210\u4E0E\u8001\u6587\u5B57\u4E00\u81F4\u3002\u53E6\u5916\u4E3A\u4E86\u5BF9\u897F\u91CC\u5C14\u5B57\u6BCD\u7684\u517C\u5BB9, xx \u8868\u793A \u042A \u044A, xy \u8868\u793A \u042C \u044C",y:"Y \u6A21\u5F0F: \u54C8\u62FC\u4E3A\u4E86\u652F\u6301\u6C49\u8BED\u540C\u97F3\u7684 ye\u3001yu (\u540C xu) \u548C\u54C8\u8428\u514B\u65AF\u5766\u73B0\u884C\u897F\u91CC\u5C14\u5B57\u6BCD, \u521B\u9020\u4E86 Y \u6A21\u5F0F\u3002\u8FD9\u4E5F\u5C31\u610F\u5473\u7740, \u9664\u4E86\u8F93\u5165\u97F3 ye\u3001yu (\u540C xu) \u4E4B\u5916, \u5176\u4F59 Y \u6A21\u5F0F\u5B57\u6BCD\u5168\u90FD\u4E3A\u897F\u91CC\u5C14\u54C8\u8428\u514B\u8BED\u7279\u6709\u5B57\u6BCD, \u4EC5\u6709: yi, yo, yw, ya, yy"},"en-US":{title:"Hapin Playground",desc:"Hapin playground is the practice for beginners",isMobile:"Please use PC to experience better",hapin:"Hapin Scheme",arabic:"The Persian-Arabic Alphabet",cyrillic:"The Cyrillic Alphabet",x:"X Mode: Hapin has created X mode based on how to handle the weak tone with Arabic Alphabet, ex: xa means that we add weak tone symbol to the alphabet a.",y:"Y Mode:"}},N=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l",";"],["z","x","c","v","b","n","m",",","?"]],p=new Map([["a",["\u0627","\u0410 \u0430"]],["b",["\u0628","\u0411 \u0431"]],["d",["\u062F","\u0414 \u0434"]],["e",["\u0649","\u042B \u044B"]],["f",["\u0641","\u0424 \u0444"]],["g",["\u06AF","\u0413 \u0433"]],["h",["\u062D","\u0425 \u0445"]],["i",["\u064A","\u0419 \u0439"]],["j",["\u062C","\u0416 \u0436"]],["k",["\u0643","\u041A \u043A"]],["l",["\u0644","\u041B \u043B"]],["m",["\u0645","\u041C \u043C"]],["n",["\u0646","\u041D \u043D"]],["o",["\u0648","\u041E \u043E"]],["p",["\u067E","\u041F \u043F"]],["q",["\u0642","\u049A \u049B"]],["r",["\u0631","\u0420 \u0440"]],["s",["\u0633","\u0421 \u0441"]],["t",["\u062A","\u0422 \u0442"]],["u",["\u06C7","\u04B0 \u04B1"]],["v",["\u06C6","\u0412 \u0432"]],["w",["\u06CB","\u0423 \u0443"]],["z",["\u0632","\u0417 \u0437"]],["ye",["\u06D5","\u0415 \u0435"]],["gh",["\u0639","\u0492 \u0493"]],["hh",["\u06BE","\u04BA \u04BB"]],["ng",["\u06AD","\u04A2 \u04A3"]],["sh",["\u0634","\u0428 \u0448"]],["ch",["\u0686","\u0427 \u0447"]],["xa",["\u0674\u0627 ","\u04D8 \u04D9"]],["xe",["\u0674\u0649 ","\u0406 \u0456"]],["xo",["\u0674\u0648","\u04E8 \u04E9"]],["xu",["\u0674\u06C7","\u04AE \u04AF"]],["yu",["\u0674\u06C7","\u04AE \u04AF"]],[",",["\u060C",","]],["?",["\u061F","?"]],[";",["	\u061B",";"]],["io",["\u064A\u0648","\u0401 \u0451"]],["yo",["\u064A\u0648","\u0401 \u0451"]],["yi",["\u064A","\u0418 \u0438"]],["ts",["\u062A\u0633","\u0426 \u0446"]],["c",["\u062A\u0633","\u0426 \u0446"]],["iw",["\u064A\u06CB","	\u042E \u044E"]],["yw",["\u064A\u06CB","	\u042E \u044E"]],["ia",["\u064A\u0627","\u042F \u044F"]],["ya",["\u064A\u0627","\u042F \u044F"]],["yy",["--","\u042D \u044D"]],["xx",["--","\u042A \u044A"]],["xy",["--","\u042C \u044C"]]]),M=["x","y","g","h","n","s","c","i","t"],E=["ye","gh","hh","ng","sh","ch","xa","xe","xo","xu","yu","io","yo","yi","ts","iw","yw","ia","ya","yy","xx","xy"];function T(){var K=(0,i.useState)(),v=y()(K,2),r=v[0],f=v[1],P=(0,i.useState)("en-US"),m=y()(P,2),d=m[0],b=m[1],z=(0,i.useState)([]),j=y()(z,2),g=j[0],w=j[1],S=(0,i.useRef)(),H=(0,i.useState)(window.innerWidth<768),A=y()(H,2),C=A[0],I=A[1];(0,i.useEffect)(function(){location.pathname.split("/")[1]==="zh-CN"?b("zh-CN"):b("en-US"),window.addEventListener("keypress",function(o){var n=o.key;k(n)}),window.addEventListener("resize",function(){I(window.innerWidth<768)})},[]),(0,i.useEffect)(function(){S.current=r,r&&p.has(r)?(w(p.get(r)),r.split("").forEach(function(o){return L(o)})):w([])},[r]);var L=function(n){var s;(s=document.getElementById("key-".concat(n)))===null||s===void 0||s.classList.add("key-active")},W=function(){x()(document.getElementsByClassName("key-active")).forEach(function(n){return n.classList.remove("key-active")})},k=function(n){var s=S.current;W(),/^[a-zA-Z,;\?]{1}$/.test(n)&&((s==null?void 0:s.length)===1&&M.includes(s)&&E.includes("".concat(s).concat(n))?f("".concat(s).concat(n)):f(n))},X=function(n){k(n)};return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{children:l[d].title}),(0,e.jsx)("p",{children:l[d].desc})]}),!C&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"keyboard",children:N.map(function(o,n){return(0,e.jsx)("ul",{id:"key-row-".concat(n),className:"key-row",children:o.map(function(s){return(0,e.jsx)("li",{className:"key",id:"key-".concat(s),onClick:function(){X(s)},children:s},"key-".concat(s))})},"key-row-".concat(n))})}),(0,e.jsxs)("div",{className:"maping",children:[(0,e.jsxs)("div",{className:"maping-item",children:[(0,e.jsxs)("span",{children:[l[d].hapin,": "]}),(0,e.jsx)("code",{className:"res-hapin",children:r})]}),r==="x"&&(0,e.jsx)("div",{children:l[d].x}),r==="y"&&(0,e.jsx)("div",{children:l[d].y}),(0,e.jsxs)("div",{className:"maping-item",children:[(0,e.jsxs)("span",{children:[l[d].arabic,": "]}),(0,e.jsx)("code",{className:"res-arabic",children:g[0]})]}),(0,e.jsxs)("div",{className:"maping-item",children:[(0,e.jsxs)("span",{children:[l[d].cyrillic,": "]}),(0,e.jsx)("code",{className:"res-cyrillic",children:g[1]})]})]})]}),C&&(0,e.jsx)("div",{children:l[d].isMobile})]})}},63405:function(a,c,t){var h=t(73897);function x(u){if(Array.isArray(u))return h(u)}a.exports=x,a.exports.__esModule=!0,a.exports.default=a.exports},79498:function(a){function c(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}a.exports=c,a.exports.__esModule=!0,a.exports.default=a.exports},42281:function(a){function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}a.exports=c,a.exports.__esModule=!0,a.exports.default=a.exports},861:function(a,c,t){var h=t(63405),x=t(79498),u=t(86116),y=t(42281);function i(e){return h(e)||x(e)||u(e)||y()}a.exports=i,a.exports.__esModule=!0,a.exports.default=a.exports}}]);
