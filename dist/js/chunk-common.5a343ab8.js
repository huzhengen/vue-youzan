(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{3251:function(t,a,e){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList1:"/category/subList1",subList2:"/category/subList2",subList3:"/category/subList3",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"},s="https://www.easy-mock.com/mock/5b332b95f384324226646940/youzan";for(var r in n)n.hasOwnProperty(r)&&(n[r]=s+n[r]);a["a"]=n},"48a9":function(t,a,e){"use strict";var n=e("bc3a"),s=e.n(n);function r(t,a){return new Promise(function(e,n){s.a.post(t,a).then(function(t){var a=t.data.data._req.status;200===a&&e(t),n(t)}).catch(function(t){n(t)})})}a["a"]=r},"4b52":function(t,a,e){},5262:function(t,a,e){},"5fb6":function(t,a,e){"use strict";var n=e("4b52"),s=e.n(n);s.a},"73f6":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom-nav"},[e("ul",t._l(t.navConfig,function(a,n){return e("li",{key:a.id,class:{active:t.curIndex===n},on:{click:function(e){t.changeNav(a,n)}}},[e("a",[e("i",{class:a.icon}),e("div",[t._v(t._s(a.name))])])])}),0)])},s=[],r=(e("386d"),e("cadf"),e("551c"),e("097d"),e("4328")),i=e.n(r),c=i.a.parse(location.search.substr(1)),o=c.index,d=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],u={data:function(){return{navConfig:d,curIndex:parseInt(o)||0}},methods:{changeNav:function(t,a){location.href="".concat(t.href,"?index=").concat(a)}}},l=u,f=(e("5fb6"),e("2877")),p=Object(f["a"])(l,n,s,!1,null,null,null);p.options.__file="Foot.vue";a["a"]=p.exports},a127:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t){return e("div",{key:t.id,staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),0),e("div",{staticClass:"swiper-pagination"})])},s=[],r=(e("cadf"),e("551c"),e("097d"),e("41d6")),i=(e("dfa4"),{name:"swipe",props:{lists:{type:Array,required:!0},name:{}},created:function(){},mounted:function(){new r["a"](".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}})}}),c=i,o=(e("b8b9"),e("2877")),d=Object(o["a"])(c,n,s,!1,null,null,null);d.options.__file="Swipe.vue";a["a"]=d.exports},a2c0:function(t,a,e){"use strict";e("28a5");var n=e("73f6"),s={filters:{currency:function(t){var a=""+t;if(a.indexOf(".")>-1){var e=a.split(".");return e[0]+"."+(e[1]+"0").substr(0,2)}return a+".00"}},components:{Foot:n["a"]}};a["a"]=s},b8b9:function(t,a,e){"use strict";var n=e("5262"),s=e.n(n);s.a},d1a6:function(t,a,e){}}]);
//# sourceMappingURL=chunk-common.5a343ab8.js.map