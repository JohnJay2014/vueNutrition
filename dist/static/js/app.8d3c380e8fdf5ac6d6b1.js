webpackJsonp([2,0],[function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=e(6),n=i(a),r=e(189),l=i(r),o=e(208),c=i(o),u=e(192),d=i(u),v=e(194),f=i(v),p=e(195),_=i(p),h=e(188),m=i(h),C=e(184),j=(i(C),e(210)),g=i(j);n.default.use(m.default),n.default.use(c.default),n.default.use(g.default);var w=new g.default.Store({state:{count:0},addCartEl:{},mutations:{increment:function(t){t.count++}}}),y=new c.default({routes:[{path:"/goods",component:d.default},{path:"/ratings",component:f.default},{path:"/seller",component:_.default}],linkActiveClass:"active"});new n.default({router:y,store:w,template:"<App/>",components:{App:l.default},data:{eventHub:new n.default}}).$mount("#app"),y.push("goods")},,,,,,,,function(t,s,e){e(180);var i=e(3)(e(164),e(204),null,null);t.exports=i.exports},function(t,s,e){e(183);var i=e(3)(e(172),e(207),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s,e){e(175);var i=e(3)(e(168),e(199),"data-v-14d5ae28",null);t.exports=i.exports},,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=e(6),n=i(a),r=e(1),l=i(r);n.default.filter("time",function(t,s){return s=s||"YYYY-MM-DD HH:mm",(0,l.default)(t).format(s)})},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(193),n=i(a),r=e(5),l=i(r);s.default={data:function(){return{seller:{}}},created:function(){var t=this;l.default.get("static/data.json").then(function(s){t.seller=s.data.seller})},components:{"v-header":n.default}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{isShow:Boolean}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(6),n=i(a);s.default={props:{food:Object},methods:{addCart:function(t){console.log(t.target),t._constructed&&(this.food.count||n.default.set(this.food,"count",0),this.food.count++,this.$root.eventHub.$emit("cart.add",t.target))},decreaseCart:function(){event._constructed&&this.food.count&&this.food.count--}}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0}),e(161);var a=e(4),n=i(a),r=e(8),l=i(r);s.default={components:{cartcontrol:l.default},props:{food:Object},data:function(){return{showDetail:!1,classifyArr:[{name:"全部",count:this.food.ratings.length,active:!0},{name:"推荐",count:this.food.ratings.filter(function(t){return 0===t.rateType}).length,active:!1},{name:"吐槽",count:this.food.ratings.filter(function(t){return t.rateType}).length,active:!1}],evelflag:!0}},computed:{evelArr:function(){var t=this,s=0;return this.classifyArr.forEach(function(t,e){t.active&&(s=e)}),this.detailWrapper&&this.$nextTick(function(){t.detailWrapper.refresh()}),s?this.food.ratings.filter(function(e){return t.evelflag?e.rateType===s-1&&e.text:e.rateType===s-1}):this.food.ratings.filter(function(s){return!t.evelflag||s.text})}},methods:{showToggle:function(){var t=this;this.showDetail=!this.showDetail,this.showDetail&&this.$nextTick(function(){t._initScroll()})},_initScroll:function(){this.detailWrapper?this.detailWrapper.refresh():this.detailWrapper=new n.default(this.$refs.detailWrapper,{click:!0})},addCart:function(t){t._constructed&&(this.$set(this.food,"count",1),this.$root.eventHub.$emit("cart.add",t.target))},filterEvel:function(t){this.classifyArr.forEach(function(t){t.active=!1}),t.active=!0}}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(143),n=i(a),r=e(4),l=i(r),o=e(196),c=i(o),u=e(8),d=i(u),v=e(191),f=i(v),p=e(5),_=i(p),h=e(6),m=i(h);new m.default;s.default={props:{seller:Object},created:function(){var t=this;_.default.get("static/data.json").then(function(s){t.goods=s.data.goods,t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})},data:function(){return{goods:[],listHeight:[],foodsScrollY:0,selectedFood:""}},computed:{menuCurrentIndex:function(){for(var t=0,s=this.listHeight.length;t<s;t++){var e=this.listHeight[t],i=this.listHeight[t+1];if(!i||this.foodsScrollY>=e&&this.foodsScrollY<i)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{_initScroll:function(){var t=this;this.menuWrapper=new l.default(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new l.default(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.foodsScrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.querySelectorAll(".food-list-hook"),s=0;this.listHeight.push(s);for(var e=0,i=t.length;e<i;e++){var a=t[e];s+=a.clientHeight,this.listHeight.push(s)}},menuClick:function(t,s){s._constructed&&this.foodsScroll.scrollTo(0,-this.listHeight[t],300)},goDetail:function(t){var s=this;this.selectedFood=t,this.$nextTick(function(){s.$refs.myFood.showToggle()})}},components:{iconMap:n.default,shopCart:c.default,cartcontrol:d.default,foodDetail:f.default}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(9),n=i(a);s.default={props:{seller:{type:Object}},created:function(){this.iconClassMap=["decrease","discount","special","invoice","guarantee"]},components:{star:n.default},data:function(){return{detailShow:!1}},methods:{showDetails:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{iconType:Number},created:function(){this.iconClassMap=["decrease","discount","special","invoice","guarantee"]}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(5),n=i(a),r=e(9),l=i(r),o=e(4),c=i(o);s.default={components:{star:l.default},data:function(){return{ratings:[],seller:{},classifyArr:[{name:"全部",count:0,active:!0},{name:"蛋白质",count:0,active:!1},{name:"锌",count:0,active:!1}],evelflag:!0}},created:function(){this._init()},computed:{evelArr:function(){var t=this,s=0;return this.classifyArr.forEach(function(t,e){t.active&&(s=e)}),this.scroll&&this.$nextTick(function(){t.scroll.refresh()}),s?this.ratings.filter(function(e){return t.evelflag?e.rateType===s-1&&e.text:e.rateType===s-1}):this.ratings.filter(function(s){return!t.evelflag||s.text})}},methods:{_init:function(){var t=this;n.default.get("static/data.json").then(function(s){t.ratings=s.data.ratings,t.seller=s.data.seller,t._initClassifyArr(),t.$nextTick(function(){t.scroll=new c.default(t.$refs.ratingsWrapper,{click:!0})})})},_initClassifyArr:function(){var t=this;this.classifyArr.forEach(function(s,e){e?s.count=t.ratings.filter(function(t){return t.rateType===e-1}).length:s.count=t.ratings.length})},filterEvel:function(t){this.classifyArr.forEach(function(t){t.active=!1}),t.active=!0}}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(5),n=i(a),r=e(4),l=i(r),o=e(9),c=i(o),u=e(143),d=i(u);s.default={components:{star:c.default,iconMap:d.default},data:function(){return{seller:{},collectflag:!1}},created:function(){this._init()},methods:{_init:function(){var t=this;n.default.get("static/data.json").then(function(s){t.seller=s.data.seller,t.$nextTick(function(){t.sellerScroll=new l.default(t.$refs.sellerWrapper,{click:!0}),t._initPicScroll()})})},_initPicScroll:function(){if(!this.picsScroll){var t=120,s=6,e=this.seller.pics.length;this.$refs.picList.style.width=t*e+s*(e-1)+"px",this.picsScroll=new l.default(this.$refs.picsWrapper,{scrollX:!0})}}}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(8),n=i(a),r=e(190),l=i(r),o=e(4),c=i(o);s.default={props:{selectFoods:{type:Array,default:[]},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],listShow:!1}},created:function(){this.$root.eventHub.$on("cart.add",this.drop)},computed:{showBackdrop:function(){return!(!this.listShow||!this.totalPrice)||(this.listShow=!1,!1)},totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){s.count&&(t+=s.price*s.count)}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},leftAmount:function(){return!!(this.minPrice-this.totalPrice>0&&totalPrice)},payDesc:function(){var t=this.minPrice-this.totalPrice;return this.totalPrice?t>0?"还差￥"+t+"元":"去结算":"￥"+this.totalPrice+"起送"}},methods:{drop:function(t){for(var s=0,e=this.balls.length;s<e;s++){var i=this.balls[s];if(!i.show)return i.show=!0,i.el=t,void this.dropBalls.push(i)}},setEmpty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideBackdrop:function(){this.listShow=!1},_initScroll:function(){this.foodlistScroll=new c.default(this.$refs.foodlist,{click:!0})},listToggle:function(){var t=this;this.selectFoods.length&&(this.listShow=!this.listShow,this.listShow&&this.$nextTick(function(){t.foodlistScroll?t.foodlistScroll.refresh():t._initScroll()}))},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var r=t.querySelector(".inner-hook");r.style.webkitTransform="translate3d("+a+"px,0,0)",r.style.transform="translate3d("+a+"px,0,0)"}}},enter:function(t){t.offsetHeight,this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var s=t.querySelector(".inner-hook");s.style.webkitTransform="translate3d(0,0,0)",s.style.transform="translate3d(0,0,0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")}},components:{cartcontrol:n.default,backdrop:l.default}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=5,i="on",a="half",n="off";s.default={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,r=s%1!==0,l=Math.floor(s),o=0;o<l;o++)t.push(i);for(r&&t.push(a);t.length<e;)t.push(n);return t}}}},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,function(t,s,e){function i(t){return e(a(t))}function a(t){return n[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var n={"./af":15,"./af.js":15,"./ar":22,"./ar-dz":16,"./ar-dz.js":16,"./ar-kw":17,"./ar-kw.js":17,"./ar-ly":18,"./ar-ly.js":18,"./ar-ma":19,"./ar-ma.js":19,"./ar-sa":20,"./ar-sa.js":20,"./ar-tn":21,"./ar-tn.js":21,"./ar.js":22,"./az":23,"./az.js":23,"./be":24,"./be.js":24,"./bg":25,"./bg.js":25,"./bm":26,"./bm.js":26,"./bn":27,"./bn.js":27,"./bo":28,"./bo.js":28,"./br":29,"./br.js":29,"./bs":30,"./bs.js":30,"./ca":31,"./ca.js":31,"./cs":32,"./cs.js":32,"./cv":33,"./cv.js":33,"./cy":34,"./cy.js":34,"./da":35,"./da.js":35,"./de":38,"./de-at":36,"./de-at.js":36,"./de-ch":37,"./de-ch.js":37,"./de.js":38,"./dv":39,"./dv.js":39,"./el":40,"./el.js":40,"./en-SG":41,"./en-SG.js":41,"./en-au":42,"./en-au.js":42,"./en-ca":43,"./en-ca.js":43,"./en-gb":44,"./en-gb.js":44,"./en-ie":45,"./en-ie.js":45,"./en-il":46,"./en-il.js":46,"./en-nz":47,"./en-nz.js":47,"./eo":48,"./eo.js":48,"./es":51,"./es-do":49,"./es-do.js":49,"./es-us":50,"./es-us.js":50,"./es.js":51,"./et":52,"./et.js":52,"./eu":53,"./eu.js":53,"./fa":54,"./fa.js":54,"./fi":55,"./fi.js":55,"./fo":56,"./fo.js":56,"./fr":59,"./fr-ca":57,"./fr-ca.js":57,"./fr-ch":58,"./fr-ch.js":58,"./fr.js":59,"./fy":60,"./fy.js":60,"./ga":61,"./ga.js":61,"./gd":62,"./gd.js":62,"./gl":63,"./gl.js":63,"./gom-latn":64,"./gom-latn.js":64,"./gu":65,"./gu.js":65,"./he":66,"./he.js":66,"./hi":67,"./hi.js":67,"./hr":68,"./hr.js":68,"./hu":69,"./hu.js":69,"./hy-am":70,"./hy-am.js":70,"./id":71,"./id.js":71,"./is":72,"./is.js":72,"./it":74,"./it-ch":73,"./it-ch.js":73,"./it.js":74,"./ja":75,"./ja.js":75,"./jv":76,"./jv.js":76,"./ka":77,"./ka.js":77,"./kk":78,"./kk.js":78,"./km":79,"./km.js":79,"./kn":80,"./kn.js":80,"./ko":81,"./ko.js":81,"./ku":82,"./ku.js":82,"./ky":83,"./ky.js":83,"./lb":84,"./lb.js":84,"./lo":85,"./lo.js":85,"./lt":86,"./lt.js":86,"./lv":87,"./lv.js":87,"./me":88,"./me.js":88,"./mi":89,"./mi.js":89,"./mk":90,"./mk.js":90,"./ml":91,"./ml.js":91,"./mn":92,"./mn.js":92,"./mr":93,"./mr.js":93,"./ms":95,"./ms-my":94,"./ms-my.js":94,"./ms.js":95,"./mt":96,"./mt.js":96,"./my":97,"./my.js":97,"./nb":98,"./nb.js":98,"./ne":99,"./ne.js":99,"./nl":101,"./nl-be":100,"./nl-be.js":100,"./nl.js":101,"./nn":102,"./nn.js":102,"./pa-in":103,"./pa-in.js":103,"./pl":104,"./pl.js":104,"./pt":106,"./pt-br":105,"./pt-br.js":105,"./pt.js":106,"./ro":107,"./ro.js":107,"./ru":108,"./ru.js":108,"./sd":109,"./sd.js":109,"./se":110,"./se.js":110,"./si":111,"./si.js":111,"./sk":112,"./sk.js":112,"./sl":113,"./sl.js":113,"./sq":114,"./sq.js":114,"./sr":116,"./sr-cyrl":115,"./sr-cyrl.js":115,"./sr.js":116,"./ss":117,"./ss.js":117,"./sv":118,"./sv.js":118,"./sw":119,"./sw.js":119,"./ta":120,"./ta.js":120,"./te":121,"./te.js":121,"./tet":122,"./tet.js":122,"./tg":123,"./tg.js":123,"./th":124,"./th.js":124,"./tl-ph":125,"./tl-ph.js":125,"./tlh":126,"./tlh.js":126,"./tr":127,"./tr.js":127,"./tzl":128,"./tzl.js":128,"./tzm":130,"./tzm-latn":129,"./tzm-latn.js":129,"./tzm.js":130,"./ug-cn":131,"./ug-cn.js":131,"./uk":132,"./uk.js":132,"./ur":133,"./ur.js":133,"./uz":135,"./uz-latn":134,"./uz-latn.js":134,"./uz.js":135,"./vi":136,"./vi.js":136,"./x-pseudo":137,"./x-pseudo.js":137,"./yo":138,"./yo.js":138,"./zh-cn":139,"./zh-cn.js":139,"./zh-hk":140,"./zh-hk.js":140,"./zh-tw":141,"./zh-tw.js":141};i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id=185},,,,function(t,s,e){e(181);var i=e(3)(e(162),e(205),null,null);t.exports=i.exports},function(t,s,e){e(174);var i=e(3)(e(163),e(198),null,null);t.exports=i.exports},function(t,s,e){e(176);var i=e(3)(e(165),e(200),"data-v-16288740",null);t.exports=i.exports},function(t,s,e){e(179);var i=e(3)(e(166),e(203),null,null);t.exports=i.exports},function(t,s,e){e(178);var i=e(3)(e(167),e(202),null,null);t.exports=i.exports},function(t,s,e){e(182);var i=e(3)(e(169),e(206),"data-v-a8aeee64",null);t.exports=i.exports},function(t,s,e){e(177);var i=e(3)(e(170),e(201),"data-v-43235a40",null);t.exports=i.exports},function(t,s,e){e(173);var i=e(3)(e(171),e(197),"data-v-0fffe0c0",null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[e("transition",{attrs:{name:"fade-backdrop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showBackdrop,expression:"showBackdrop"}],staticClass:"backdrop",on:{click:t.hideBackdrop}})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade-backdrop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"backdrop"})])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"iconMap",class:t.iconClassMap[t.iconType]})},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],ref:"detailWrapper",staticClass:"detailWrapper"},[e("div",{staticClass:"foodDetail"},[e("div",{staticClass:"back",on:{click:function(s){return t.showToggle()}}},[e("i",{staticClass:"icon-arrow_lift"})]),t._v(" "),e("img",{attrs:{src:t.food.image,height:"425",width:"100%"}}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"desc"},[e("span",[t._v("月售"+t._s(t.food.sellCount))]),t._v(" "),e("span",[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(t.food.price)+"\n          "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"shopCart"},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count,expression:"!food.count"}],staticClass:"text",on:{click:function(s){return t.addCart(s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"desc"},[e("div",{staticClass:"title"},[t._v("食品介绍")]),t._v(" "),e("div",{staticClass:"content"},[t._v(t._s(t.food.info))])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"evaluation"},[e("div",{staticClass:"title"},[t._v("\n          商品评价\n        ")]),t._v(" "),e("div",{staticClass:"classify"},t._l(t.classifyArr,function(s,i){return e("span",{staticClass:"item",class:{active:s.active,bad:2==i,badActive:s.active&&2==i},on:{click:function(e){return t.filterEvel(s)}}},[t._v("\n            "+t._s(s.name)),e("span",{staticClass:"count"},[t._v(t._s(s.count))])])}),0),t._v(" "),e("div",{staticClass:"switch",on:{click:function(s){t.evelflag=!t.evelflag}}},[e("span",{staticClass:"icon-check_circle",class:{on:t.evelflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),e("div",{staticClass:"evel-list"},[e("ul",t._l(t.evelArr,function(s){return e("li",{staticClass:"evel"},[e("div",{staticClass:"userInfo"},[e("div",{staticClass:"time"},[t._v(t._s(t._f("time")(s.rateTime)))]),t._v(" "),e("div",{staticClass:"user"},[e("span",[t._v(t._s(s.username))]),t._v(" "),e("span",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"12",height:"12"}})])])]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"icon",class:s.rateType?"icon-thumb_down":"icon-thumb_up"}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.text))])])])}),0)])])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"sellerWrapper",staticClass:"seller-wrapper"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"rate-count"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("div",{staticClass:"collect",on:{click:function(s){t.collectflag=!t.collectflag}}},[e("span",{staticClass:"icon-favorite",class:{active:t.collectflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.collectflag?"已收藏":"收藏"))])])]),t._v(" "),e("div",{staticClass:"remark"},[e("div",{staticClass:"block"},[e("h2",[t._v("体重")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.minPrice))]),t._v("公斤\n          ")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("基础代谢率")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("大卡\n          ")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"activities"},[e("div",{staticClass:"bulletin"},[e("h1",[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content"},[t._v("\n          "+t._s(t.seller.bulletin)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"supports"},[e("ul",t._l(t.seller.supports,function(s){return e("li",{staticClass:"item"},[e("iconMap",{attrs:{iconType:s.type}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)}),0)]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-imgs"},[e("h1",[t._v("期望身材")]),t._v(" "),e("div",{ref:"picsWrapper",staticClass:"img-wrapper"},[e("div",{ref:"picList"},t._l(t.seller.pics,function(t){return e("img",{attrs:{src:t,width:"120",height:"90"}})}),0)])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-info"},[e("h1",[t._v("个人信息")]),t._v(" "),e("ul",{staticClass:"info-list"},t._l(t.seller.infos,function(s){return e("li",{staticClass:"info"},[t._v(t._s(s))])}),0)])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n                "+t._s(t.seller.description+" / 健身")+"\n            ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("div",{staticClass:"supports_desc"},[e("span",{staticClass:"text"},[t._v(t._s("民以食为天"))])])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:function(s){return t.showDetails()}}},[e("span",{staticClass:"count"},[t._v(t._s("概览"))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:function(s){return t.showDetails()}}},[e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.detailShow?e("div",{staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("饮食目标")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.iconClassMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])}),0):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("饮食理念")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[t._v(t._s(t.seller.bulletin))])])]),t._v(" "),e("div",{staticClass:"detail-close"},[e("i",{staticClass:"icon-close",on:{click:function(s){return t.hideDetail()}}})])]):t._e()])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{class:i==t.menuCurrentIndex?"menu-item-selected":"menu-item",on:{click:function(s){return t.menuClick(i,s)}}},[e("span",{staticClass:"text"},[e("iconMap",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],attrs:{iconType:s.type}}),t._v("\n          "+t._s(s.name)+"\n        ")],1)])}),0)]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper",attrs:{id:"wrapper"}},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item"},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",[t._v(t._s(s.name))]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:s.description,expression:"food.description"}],staticClass:"description"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"sell-info"}),t._v(" "),e("div",{staticClass:"price"}),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])])}),0)])}),0)]),t._v(" "),e("shopCart",{attrs:{deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice,selectFoods:t.selectFoods}}),t._v(" "),t.selectedFood?e("foodDetail",{ref:"myFood",attrs:{food:t.selectedFood}}):t._e()],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"fadeRotate"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.decreaseCart()}}},[e("span",{staticClass:"icon-remove_circle_outline inner"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v("\n    "+t._s(t.food.count)+"\n  ")]),t._v(" "),e("div",{staticClass:"cart-add",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addCart(s)}}},[e("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("消费")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("知识")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("目标")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratingsWrapper",staticClass:"ratingsWrapper"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"mark"},[e("div",{staticClass:"num"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"text"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"contrast"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"stars"},[e("div",{staticClass:"serviceScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"foodScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"deliveryTime"},[e("span",{staticClass:"text"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"evaluation"},[e("div",{staticClass:"classify"},t._l(t.classifyArr,function(s,i){return e("span",{staticClass:"item",class:{active:s.active,bad:2==i,badActive:s.active&&2==i},on:{click:function(e){return t.filterEvel(s)}}},[t._v("\n          "+t._s(s.name)),e("span",{staticClass:"count"},[t._v(t._s(s.count))])])}),0),t._v(" "),e("div",{staticClass:"evel-list"},[e("ul",t._l(t.evelArr,function(s){return e("li",{staticClass:"evel"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("span",{staticClass:"rateTime"},[t._v(t._s(t._f("time")(s.rateTime)))])]),t._v(" "),e("div",{staticClass:"star-wrapper"}),t._v(" "),e("div",{staticClass:"text"},[t._v("\n                "+t._s(s.text)+"\n              ")]),t._v(" "),e("div",{staticClass:"recommend"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.recommend.length,expression:"evel.recommend.length"}],staticClass:"icon icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"dish"},[t._v(t._s(s))])})],2)])])}),0)])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t){return e("span",{staticClass:"star-item",class:t,attrs:{"track-by":"$index"}})}),0)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.8d3c380e8fdf5ac6d6b1.js.map