import{aM as z,g as b,c4 as g,u as y,aN as O,k as u,n as B,t as h,x as m,s as a,bd as S,cs as w,ae as P,aF as R,aI as I,a as x,d as f,c as C,h as N,r as $,ct as F,cu as U,ax as E,cv as K,cC as M,D as k,a_ as V}from"./index-09938545.js";const _=z("n-popconfirm"),j={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},T=w(j),q=b({name:"NPopconfirmPanel",props:j,setup(e){const{localeRef:t}=g("Popconfirm"),{inlineThemeDisabled:s}=y(),{mergedClsPrefixRef:n,mergedThemeRef:p,props:l}=O(_),d=u(()=>{const{common:{cubicBezierEaseInOut:i},self:{fontSize:c,iconSize:v,iconColor:r}}=p.value;return{"--n-bezier":i,"--n-font-size":c,"--n-icon-size":v,"--n-icon-color":r}}),o=s?B("popconfirm-panel",void 0,d,l):void 0;return Object.assign(Object.assign({},g("Popconfirm")),{mergedClsPrefix:n,cssVars:s?void 0:d,localizedPositiveText:u(()=>e.positiveText||t.value.positiveText),localizedNegativeText:u(()=>e.negativeText||t.value.negativeText),positiveButtonProps:h(l,"positiveButtonProps"),negativeButtonProps:h(l,"negativeButtonProps"),handlePositiveClick(i){e.onPositiveClick(i)},handleNegativeClick(i){e.onNegativeClick(i)},themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender})},render(){var e;const{mergedClsPrefix:t,showIcon:s,$slots:n}=this,p=m(n.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&a(P,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&a(P,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${t}-popconfirm__panel`,this.themeClass],style:this.cssVars},S(n.default,l=>s||l?a("div",{class:`${t}-popconfirm__body`},s?a("div",{class:`${t}-popconfirm__icon`},m(n.icon,()=>[a(R,{clsPrefix:t},{default:()=>a(I,null)})])):null,l):null),p?a("div",{class:[`${t}-popconfirm__action`]},p):null)}}),D=x("popconfirm",[f("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[f("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),f("action",`
 display: flex;
 justify-content: flex-end;
 `,[C("&:not(:first-child)","margin-top: 8px"),x("button",[C("&:not(:last-child)","margin-right: 8px;")])])]),L=Object.assign(Object.assign(Object.assign({},N.props),K),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),H=b({name:"Popconfirm",props:L,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=y(),s=N("Popconfirm","-popconfirm",D,M,e,t),n=$(null);function p(o){const{onPositiveClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var r;v!==!1&&((r=n.value)===null||r===void 0||r.setShow(!1),c&&k(c,!1))})}function l(o){const{onNegativeClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var r;v!==!1&&((r=n.value)===null||r===void 0||r.setShow(!1),c&&k(c,!1))})}return V(_,{mergedThemeRef:s,mergedClsPrefixRef:t,props:e}),Object.assign(Object.assign({},{setShow(o){var i;(i=n.value)===null||i===void 0||i.setShow(o)},syncPosition(){var o;(o=n.value)===null||o===void 0||o.syncPosition()}}),{mergedTheme:s,popoverInstRef:n,handlePositiveClick:p,handleNegativeClick:l})},render(){const{$slots:e,$props:t,mergedTheme:s}=this;return a(E,U(t,T,{theme:s.peers.Popover,themeOverrides:s.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const n=F(t,T);return a(q,Object.assign(Object.assign({},n),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}});export{H as N};