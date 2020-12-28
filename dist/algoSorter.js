!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("algoSorter",[],r):"object"==typeof exports?exports.algoSorter=r():e.algoSorter=r()}(this,(function(){return(()=>{"use strict";var e={436:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if(r)for(let t=0;t<e.length-1;t++){let t=!1;for(let o=0;o<e.length-1;o++){if(!e[o][r]||"number"!=typeof e[o][r]||"number"!=typeof e[o+1][r])return void console.error("each item in the array must contain the provided key and its value must be a number");if(e[o][r]>e[o+1][r]){t=!0;const n=e[o+1][r];e[o+1][r]=e[o][r],e[o][r]=n}}if(!t)return e}else for(let r=0;r<e.length-1;r++){let r=!1;for(let t=0;t<e.length-1;t++){if("number"!=typeof e[t]||"number"!=typeof e[t+1])return void console.error("all array items must be numbers");if(e[t]>e[t+1]){r=!0;const o=e[t+1];e[t+1]=e[t],e[t]=o}}if(!r)return e}return e}},820:function(e,r,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.quick=r.selection=r.insertion=r.bubble=void 0;const n=o(t(436));r.bubble=n.default;const u=o(t(761));r.insertion=u.default;const f=o(t(599));r.selection=f.default;const i=o(t(387));r.quick=i.default},761:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if(r)for(let t=0;t<e.length;t++){if(!e[t][r]||"number"!=typeof e[t][r])return void console.error("must have all numeric elements and key must exist on all items");const o=e[t][r];let n=t-1;for(;n>=0&&e[n][r]>o;)e[n+1][r]=e[n][r],n-=1;e[n+1][r]=o}else for(let r=0;r<e.length;r++){if("number"!=typeof e[r])return void console.error("must have all numeric elements");const t=e[r];let o=r-1;for(;o>=0&&e[o]>t;)e[o+1]=e[o],o-=1;e[o+1]=t}return e}},387:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function e(r,t,o=0,n=r.length-1){if(t){const u=((e,o,n)=>{const u=e[Math.floor((n+o)/2)][t];if("number"==typeof u){for(;o<=n;){for(;e[o][t]<u;){if("number"!=typeof e[o][t])return void(r=void 0);o++}for(;e[n][t]>u;){if("number"!=typeof e[n][t])return void(r=void 0);n--}if(o<=n){const r=e[o][t];e[o][t]=e[n][t],e[n][t]=r,o++,n--}}return o}r=void 0})(r,o,n);return o<u-1&&e(r,t,o,u-1),u<n&&e(r,t,u,n),r}const u=((e,t,o)=>{const n=e[Math.floor((o+t)/2)];if("number"==typeof n){for(;t<=o;){for(;e[t]<n;){if("number"!=typeof e[t])return void(r=void 0);t++}for(;e[o]>n;){if("number"!=typeof e[o])return void(r=void 0);o--}if(t<=o){if("number"!=typeof e[t]||"number"!=typeof e[o])return;const r=e[t];if(e[t]=e[o],e[o]=r,o--,"number"!=typeof e[++t]||"number"!=typeof e[o])return}}return t}r=void 0})(r,o,n);if(u)return o<u-1&&e(r,null,o,u-1),u<n&&e(r,null,u,n),r}},599:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if(r)for(let t=0;t<e.length;t++){if("number"!=typeof e[t][r]||!e[t][r])return void console.error("missing key or non number array value");let o=t;for(let n=t+1;n<e.length;n++){if("number"!=typeof e[n][r]||!e[n][r])return void console.error("missing key or non number array value");e[n][r]<e[o][r]&&(o=n)}if(e[o][r]!==e[t][r]){const n=e[t][r];e[t][r]=e[o][r],e[o][r]=n}}else for(let r=0;r<e.length;r++){if("number"!=typeof e[r])return void console.error("must provide an array of numbers");let t=r;for(let o=r+1;o<e.length;o++){if("number"!=typeof e[o])return void console.error("must provide an array of numbers");e[o]<e[t]&&(t=o)}if(e[t]!==e[r]){const o=e[r];e[r]=e[t],e[t]=o}}return e}}},r={};return function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{}};return e[o].call(n.exports,n,n.exports,t),n.exports}(820)})()}));