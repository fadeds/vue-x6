(function(e){function t(t){for(var o,i,s=t[0],n=t[1],d=t[2],h=0,g=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&g.push(a[i][0]),a[i]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);c&&c(t);while(g.length)g.shift()();return l.push.apply(l,d||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],o=!0,s=1;s<r.length;s++){var n=r[s];0!==a[n]&&(o=!1)}o&&(l.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},a={app:0},l=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],n=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=n;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0f78":function(e,t,r){"use strict";r("169a")},"169a":function(e,t,r){},2780:function(e,t,r){"use strict";r("3218")},3218:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var o=r("5923"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},l=[],i=(r("0f78"),r("1805")),s={},n=Object(i["a"])(s,a,l,!1,null,null,null),d=n.exports,c=r("f191"),h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},g=[],f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main"},[t("div",{staticClass:"operating",staticStyle:{display:"flex",height:"100%",width:"100%"}},[t("div",{staticClass:"top_tool"},[t("div",{staticClass:"btn-group"},[t("div",{staticClass:"btn",attrs:{title:"正方形节点"},on:{mousedown:function(t){return e.startDrag("Rect",t)}}},[t("i",{staticClass:"iconfont icon-changfangxing"})])]),t("div",{staticClass:"btn-group"},[t("el-tooltip",{attrs:{content:"删除",placement:"bottom"}},[t("div",{staticClass:"btn",on:{click:function(t){return e.deleteNode()}}},[t("i",{staticClass:"iconfont icon-shanchu"})])]),t("el-tooltip",{attrs:{content:"保存PNG",placement:"bottom"}},[t("div",{staticClass:"btn",attrs:{title:"保存"},on:{click:function(t){return e.saveToPNG()}}},[t("i",{staticClass:"iconfont icon-baocun"})])]),t("el-tooltip",{attrs:{content:"输出JSON到控制台",placement:"bottom"}},[t("div",{staticClass:"btn",attrs:{title:"保存"},on:{click:function(t){return e.toJSON()}}},[t("i",{staticClass:"iconfont el-icon-download"})])])],1)]),t("div",{staticStyle:{flex:"1",width:"100%"},attrs:{id:"container"}})]),t("RightDrawer",{staticClass:"right_drawer",attrs:{drawerType:e.type,selectCell:e.selectCell,graph:e.graph,grid:e.grid},on:{deleteNode:e.deleteNode}})],1)},p=[],u=(r("a71c"),r("d24d"),r("3522"));const m=(e,t,r)=>{const o="Rect"===t?e.createNode({width:100,height:60,attrs:{label:{text:"正方形节点",fill:"#000000",fontSize:14,textWrap:{width:-10,height:-10,ellipsis:!0}},body:{stroke:"#000000",strokeWidth:1,fill:"#ffffff"}},ports:b}):"Circle"===t?e.createNode({shape:"ellipse",width:100,height:100,attrs:{label:{text:"圆形节点",fill:"#000000",fontSize:14,textWrap:{width:-20,height:-10,ellipsis:!0}},body:{stroke:"#000000",strokeWidth:1,fill:"#ffffff"}},ports:b}):e.createNode({shape:"polygon",x:40,y:40,width:120,height:120,attrs:{label:{text:"条件节点",fill:"#000000",fontSize:14,textWrap:{width:-50,height:"70%",ellipsis:!0}},body:{fill:"#ffffff",stroke:"#000000",refPoints:"0,10 10,0 20,10 10,20",strokeWidth:1}},ports:b}),a=new u["a"].Dnd({target:e});a.start(o,r)},b={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#2D8CF0",strokeWidth:2,fill:"#fff"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#2D8CF0",strokeWidth:2,fill:"#fff"}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#2D8CF0",strokeWidth:2,fill:"#fff"}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#2D8CF0",strokeWidth:2,fill:"#fff"}}}},items:[{id:"port1",group:"top"},{id:"port2",group:"bottom"},{id:"port3",group:"left"},{id:"port4",group:"right"}]};var w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"drawer_container"},["grid"===e.drawerType?t("div",[t("div",{staticClass:"drawer_title"},[e._v("画布背景设置")]),t("div",{staticClass:"drawer_wrap"},[t("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[t("el-form-item",{attrs:{label:"是否显示网格","label-width":"100px"}},[t("el-switch",{on:{change:e.changeGrid},model:{value:e.showGrid,callback:function(t){e.showGrid=t},expression:"showGrid"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showGrid,expression:"showGrid"}]},[t("el-form-item",{attrs:{label:"网格类型"}},[t("el-radio-group",{on:{change:e.changeGridType},model:{value:e.grid.type,callback:function(t){e.$set(e.grid,"type",t)},expression:"grid.type"}},e._l(e.gridTypeList,(function(r){return t("el-radio",{key:r.value,attrs:{label:r.value}},[t("span",[e._v(e._s(r.label))])])})),1)],1),t("el-form-item",{attrs:{label:"网格大小"}},[t("el-slider",{attrs:{min:0,max:30},on:{change:e.changeGrid},model:{value:e.grid.size,callback:function(t){e.$set(e.grid,"size",t)},expression:"grid.size"}})],1),t("el-form-item",{attrs:{label:"网格颜色"}},[t("el-color-picker",{on:{change:e.changeGrid},model:{value:e.grid.args.color,callback:function(t){e.$set(e.grid.args,"color",t)},expression:"grid.args.color"}})],1),t("el-form-item",{attrs:{label:"网格线宽度","label-width":"100px"}},[t("el-slider",{attrs:{min:0,max:20},on:{change:e.changeGrid},model:{value:e.grid.args.thickness,callback:function(t){e.$set(e.grid.args,"thickness",t)},expression:"grid.args.thickness"}})],1)],1)],1)],1)]):e._e(),"node"===e.drawerType?t("div",[t("div",{staticClass:"drawer_title"},[e._v("节点设置")]),t("div",{staticClass:"drawer_wrap"},[t("el-form",{attrs:{"label-position":"left","label-width":"100px"}},[t("el-form-item",{attrs:{label:"节点文本"}},[t("el-input",{on:{change:e.changeNodeText},model:{value:e.drawerNode.nodeText,callback:function(t){e.$set(e.drawerNode,"nodeText",t)},expression:"drawerNode.nodeText"}})],1),t("el-form-item",{attrs:{label:"节点背景"}},[t("el-color-picker",{on:{change:e.changeFill},model:{value:e.drawerNode.fill,callback:function(t){e.$set(e.drawerNode,"fill",t)},expression:"drawerNode.fill"}})],1),t("el-form-item",{attrs:{label:"字体大小"}},[t("el-slider",{attrs:{min:10,max:20},on:{change:e.changefontSize},model:{value:e.drawerNode.fontSize,callback:function(t){e.$set(e.drawerNode,"fontSize",t)},expression:"drawerNode.fontSize"}})],1),t("el-form-item",{attrs:{label:"字体颜色"}},[t("el-color-picker",{on:{change:e.changeFontFill},model:{value:e.drawerNode.fontFill,callback:function(t){e.$set(e.drawerNode,"fontFill",t)},expression:"drawerNode.fontFill"}})],1),t("el-form-item",{attrs:{label:"边框宽度"}},[t("el-slider",{attrs:{min:0,max:10},on:{change:e.changeStrokeWidth},model:{value:e.drawerNode.strokeWidth,callback:function(t){e.$set(e.drawerNode,"strokeWidth",t)},expression:"drawerNode.strokeWidth"}})],1),t("el-form-item",{attrs:{label:"边框颜色"}},[t("el-color-picker",{on:{change:e.changeStroke},model:{value:e.drawerNode.stroke,callback:function(t){e.$set(e.drawerNode,"stroke",t)},expression:"drawerNode.stroke"}})],1),t("el-form-item",{attrs:{label:"功能"}},[t("el-button",{attrs:{type:"primary",icon:"md-trending-up"},on:{click:e.toTopZIndex}},[e._v("置顶")]),t("el-button",{staticClass:"margin-left-10",attrs:{type:"error",icon:"md-trash"},on:{click:e.deleteNode}},[e._v("删除")])],1)],1)],1)]):e._e(),"edge"===e.drawerType?t("div",[t("div",{staticClass:"drawer_title"},[e._v("线条设置")]),t("div",{staticClass:"drawer_wrap"},[t("el-form",{attrs:{"label-position":"left","label-width":"100px"}},[t("el-form-item",{attrs:{label:"线条文本"}},[t("el-input",{on:{change:e.changeEdgeText},model:{value:e.drawerEdge.EdgeText,callback:function(t){e.$set(e.drawerEdge,"EdgeText",t)},expression:"drawerEdge.EdgeText"}})],1),t("el-form-item",{attrs:{label:"线条宽度"}},[t("el-slider",{attrs:{min:1,max:10},on:{change:e.changeEdgeWidth},model:{value:e.drawerEdge.edgeWidth,callback:function(t){e.$set(e.drawerEdge,"edgeWidth",t)},expression:"drawerEdge.edgeWidth"}})],1),t("el-form-item",{attrs:{label:"线条颜色"}},[t("el-color-picker",{on:{change:e.changeEdgeColor},model:{value:e.drawerEdge.edgeColor,callback:function(t){e.$set(e.drawerEdge,"edgeColor",t)},expression:"drawerEdge.edgeColor"}})],1),t("el-form-item",{attrs:{label:"功能"}},[t("el-button",{attrs:{type:"primary",icon:"md-trending-up"},on:{click:e.toTopZIndex}},[e._v("置顶")]),t("el-button",{staticClass:"margin-left-10",attrs:{type:"error",icon:"md-trash"},on:{click:e.deleteNode}},[e._v("删除")])],1)],1)],1)]):e._e()])},k=[],x={name:"RightDrawer",data(){return{gridTypeList:[{label:"四边网格",value:"mesh"},{label:"点状网格",value:"dot"}],showGrid:!0,drawerNode:{fill:"",nodeText:"",fontSize:null,fontFill:"",strokeWidth:null,stroke:""},drawerEdge:{EdgeText:"",edgeWidth:null,edgeColor:""}}},props:{drawerType:{type:String},selectCell:{},graph:{},grid:{type:Object}},created(){},mounted(){},watch:{selectCell:{handler(e){e&&(e.isNode()?(this.drawerNode.fill=e.store.data.attrs.body.fill,this.drawerNode.nodeText=e.store.data.attrs.label.text,this.drawerNode.fontFill=e.store.data.attrs.label.fill,this.drawerNode.fontSize=Number(e.store.data.attrs.label.fontSize),this.drawerNode.strokeWidth=Number(e.store.data.attrs.body.strokeWidth),this.drawerNode.stroke=e.store.data.attrs.body.stroke):(this.drawerEdge.EdgeText=e.store.data.labels?e.store.data.labels[0].text:"",this.drawerEdge.edgeWidth=Number(e.store.data.attrs.line.strokeWidth),this.drawerEdge.edgeColor=e.store.data.attrs.line.stroke))},deep:!1}},methods:{changeGrid(){this.graph.drawGrid({...this.grid}),this.showGrid?this.graph.showGrid():this.graph.hideGrid()},changeGridType(e){this.grid.type=e,this.changeGrid()},changeStrokeWidth(e){this.selectCell.attr("body/strokeWidth",e)},changefontSize(e){this.selectCell.attr("label/fontSize",e)},changeNodeText(){console.log(this.selectCell.attr),this.selectCell.attr("label/text",this.drawerNode.nodeText)},changeStroke(e){this.drawerNode.stroke=e,this.selectCell.attr("body/stroke",this.drawerNode.stroke)},changeFontFill(e){this.drawerNode.fontFill=e,this.selectCell.attr("label/fill",this.drawerNode.fontFill)},changeFill(e){this.drawerNode.fill=e,this.selectCell.attr("body/fill",e)},changeEdgeText(){console.log(this.drawerEdge.EdgeText),this.selectCell.setLabels([{attrs:{label:{text:this.drawerEdge.EdgeText}}}])},changeEdgeWidth(e){this.drawerEdge.edgeWidth=e,this.selectCell.attr("line/strokeWidth",this.drawerEdge.edgeWidth)},changeEdgeColor(e){this.drawerEdge.stroke=e,this.selectCell.attr("line/stroke",this.drawerEdge.stroke)},toTopZIndex(){this.selectCell.toFront()},deleteNode(){this.$emit("deleteNode")}}},v=x,y=(r("84ea"),Object(i["a"])(v,w,k,!1,null,"aaa8ba42",null)),N=y.exports;let C={group1:{attrs:{circle:{r:6,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}},markup:{tagName:"circle",selector:"circle",attrs:{r:10,fill:"#fff",stroke:"#000"}},zIndex:1,position:{name:"top",args:{}},label:{markup:{tagName:"text",selector:"text",attrs:{fill:"#000"}}}},group2:{attrs:{circle:{r:6,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}},markup:{tagName:"circle",selector:"circle",attrs:{r:10,fill:"#fff",stroke:"#000"}},zIndex:1,position:{name:"right",args:{}},label:{markup:{tagName:"text",selector:"text",attrs:{fill:"#000"}}}},group3:{attrs:{circle:{r:6,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}},markup:{tagName:"circle",selector:"circle",attrs:{r:10,fill:"#fff",stroke:"#000"}},zIndex:1,position:{name:"bottom",args:{}},label:{markup:{tagName:"text",selector:"text",attrs:{fill:"#000"}}}},group4:{attrs:{circle:{r:6,magnet:!0,stroke:"#31d0c6",strokeWidth:2,fill:"#fff"}},markup:{tagName:"circle",selector:"circle",attrs:{r:10,fill:"#fff",stroke:"#000"}},zIndex:1,position:{name:"left",args:{}},label:{markup:{tagName:"text",selector:"text",attrs:{fill:"#000"}}}}};const E={nodes:[{id:"node1",x:40,y:40,width:80,height:40,attrs:{label:{text:"正方形节点",fill:"#000000",fontSize:14,textWrap:{width:-10,height:-10,ellipsis:!0}},body:{stroke:"#000000",strokeWidth:1,fill:"#ffffff"}},ports:{groups:C,items:[{id:"port1",group:"group1"},{id:"port2",group:"group2"},{id:"port3",group:"group3"},{id:"port4",group:"group4"}]}},{id:"node2",x:160,y:180,width:80,height:40,attrs:{label:{text:"正方形节点",fill:"#000000",fontSize:14,textWrap:{width:-10,height:-10,ellipsis:!0}},body:{stroke:"#000000",strokeWidth:1,fill:"#ffffff"}},ports:{groups:C,items:[{id:"port1",group:"group1"},{id:"port2",group:"group2"},{id:"port3",group:"group3"},{id:"port4",group:"group4"}]}},{id:"node3",x:300,y:300,width:80,height:40,attrs:{label:{text:"正方形节点",fill:"#000000",fontSize:14,textWrap:{width:-10,height:-10,ellipsis:!0}},body:{stroke:"#000000",strokeWidth:1,fill:"#ffffff"}},ports:{groups:C,items:[{id:"port1",group:"group1"},{id:"port2",group:"group2"},{id:"port3",group:"group3"},{id:"port4",group:"group4"}]}}],edges:[]};var W={name:"HelloWorld",props:{msg:String},components:{RightDrawer:N},data(){return{data:E,graph:null,currentArrow:1,selectCell:null,grid:{size:20,visible:!0,type:"mesh",args:{color:"#D0D0D0",thickness:1,factor:10}},type:"",connectEdgeType:{connector:"normal",router:{name:""}}}},mounted(){const e=this;this.graph=new u["c"]({container:document.getElementById("container"),autoResize:!0,grid:e.grid,keyboard:{enabled:!0},resizing:{enabled:!0,orthogonal:!1},snapline:{enabled:!0,tolerance:10},embedding:{enabled:!0,validate(t){return console.log(t),e.createdEdge(t.child.id,t.parent.id),!0}},connecting:{anchor:"center",connectionPoint:"anchor",allowBlank:!1,allowMulti:!1,allowNode:!1,allowLoop:!1,highlight:!0,snap:!0,createEdge(){return new u["d"].Edge({attrs:{line:{stroke:"#1890ff",strokeWidth:1,targetMarker:{name:"classic",size:8},strokeDasharray:0,style:{animation:"ant-line 30s infinite linear"}}},label:{text:""},connector:"normal",router:{name:"manhattan"},zIndex:0})}},selecting:{enabled:!0},scroller:{enabled:!0,pannable:!0,pageVisible:!0,pageBreak:!1},mousewheel:{enabled:!0,modifiers:["ctrl","meta"]}}),this.graph.fromJSON(this.data),this.graph.history.redo(),this.graph.history.undo(),this.graph.on("cell:mouseleave",e=>{e.cell.removeTools()}),this.graph.on("blank:click",()=>{this.type="grid"}),this.graph.on("cell:click",({cell:e})=>{this.type=e.isNode()?"node":"edge"}),this.graph.on("selection:changed",e=>{e.added.forEach(e=>{this.selectCell=e,e.isEdge()&&(e.isEdge()&&e.attr("line/strokeDasharray",5),e.addTools([{name:"vertices",args:{padding:4,attrs:{strokeWidth:.1,stroke:"#2d8cf0",fill:"#ffffff"}}}]))}),e.removed.forEach(e=>{e.isEdge()&&e.attr("line/strokeDasharray",0),e.removeTools()})})},methods:{createdEdge(e,t){let r=new u["d"].Edge({source:e,target:t,attrs:{line:{stroke:"#1890ff",strokeWidth:1,targetMarker:{name:"classic",size:8},strokeDasharray:0,style:{animation:"ant-line 30s infinite linear"}}},label:{text:""},connector:"normal",router:{name:"manhattan"},zIndex:0});this.graph.addEdge(r)},startDrag(e,t){m(this.graph,e,t)},deleteNode(){const e=this.graph.getSelectedCells();console.log(e),this.graph.removeCells(e)},saveToPNG(){this.$nextTick(()=>{this.graph.toPNG(e=>{u["b"].downloadDataUri(e,"资产拓扑图.png")},{backgroundColor:"white",padding:{top:50,right:50,bottom:50,left:50},quality:1,copyStyles:!1})})},toJSON(){console.log(this.graph.toJSON())},changeEdgeType(e){"normal"===e?(this.connectEdgeType={connector:"normal",router:{name:""}},this.currentArrow=1):"smooth"===e?(this.connectEdgeType={connector:"smooth",router:{name:""}},this.currentArrow=2):(this.connectEdgeType={connector:"normal",router:{name:"manhattan"}},this.currentArrow=3)}}},T=W,S=(r("64cc"),Object(i["a"])(T,f,p,!1,null,"90231a1c",null)),_=S.exports,z={name:"Home",components:{HelloWorld:_}},G=z,O=(r("2780"),Object(i["a"])(G,h,g,!1,null,"8590ba8c",null)),D=O.exports;o["default"].use(c["a"]);const F=[{path:"/",name:"Home",component:D}],$=new c["a"]({routes:F});var j=$,P=r("f0a4");o["default"].use(P["a"]);var I=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),J=r("2e36"),M=r.n(J);r("5ba9");o["default"].use(M.a),o["default"].config.productionTip=!1,new o["default"]({router:j,store:I,render:e=>e(d)}).$mount("#app")},"64cc":function(e,t,r){"use strict";r("f7dd")},"84ea":function(e,t,r){"use strict";r("d6a2")},d6a2:function(e,t,r){},f7dd:function(e,t,r){}});
//# sourceMappingURL=app.3b417398.js.map