function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function p(e,t,n){var i,o,r,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function w(e){return l=e,f=setTimeout(O,t),c?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function O(){var e=g();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,r-(e-l)):n}(e))}function h(e){return f=void 0,p&&i?b(e):(i=o=void 0,a)}function E(){var e=g(),n=j(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return w(u);if(s)return f=setTimeout(O,t),b(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=y(t)||0,v(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),E.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=o=f=void 0},E.flush=function(){return void 0===f?a:h(g())},E}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const b={email:"",message:""},w=document.getElementById("form"),j=e(t)((e=>window.localStorage.setItem("feedback-form-state",e)),1e3),O=()=>JSON.parse(window.localStorage.getItem("feedback-form-state"))||b,h=O();document.getElementById("input").value=h.email,document.getElementById("textarea").value=h.message,w.addEventListener("input",(({target:e})=>{let t=O();t||(t=b),t[e.getAttribute("name")]=e.value,j(JSON.stringify(t))})),w.addEventListener("submit",(e=>{e.preventDefault();const t=O();console.log(t),window.localStorage.setItem("feedback-form-state",JSON.stringify({email:"",message:""})),w.reset()}));
//# sourceMappingURL=03-feedback.f075963f.js.map
