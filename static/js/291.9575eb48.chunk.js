"use strict";(self.webpackChunkgoit_react_hw_test=self.webpackChunkgoit_react_hw_test||[]).push([[291],{4739:function(n,e,t){t.r(e),t.d(e,{UserLIst:function(){return V}});var i,o,a,r,s,l,p,x,d=t(9439),c=t(2791),f=t(9434),u=t(6299),g=t(168),h=t(4934),m=h.Z.div(i||(i=(0,g.Z)(["\n  position: relative;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  text-align: center;\n  color: #ebd8ff;\n\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n\n  padding-top: 284px;\n\n  &::before {\n    content: '';\n    z-index: 10;\n    position: absolute;\n    left: 0px;\n    top: 214px;\n    \n    display: block;\n    height: 8px;\n    width: 100%;\n\n    background: #ebd8ff;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 100%;\n    height: 460px;\n  }\n"]))),b=h.Z.img(o||(o=(0,g.Z)(["\n  position: absolute;\n  left: 20px;\n  top: 20px;\n"]))),w=h.Z.img(a||(a=(0,g.Z)(["\n  position: absolute;\n  left: 28px;\n  top: 36px;\n  width: 308px;\n  height: 168px;\n"]))),v=h.Z.div(r||(r=(0,g.Z)(["\n  position: absolute;\n  left: 150px;\n  top: 178px;\n  z-index: 999;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  height: 80px;\n\n  border-radius: 50%;\n  background: #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n"]))),Z=h.Z.img(s||(s=(0,g.Z)(["\n  width: 62px;\n  height: 62px;\n\n  border-radius: 50%;\n"]))),j=h.Z.p(l||(l=(0,g.Z)(["\n  margin-bottom: 16px;\n"]))),k=h.Z.p(p||(p=(0,g.Z)(["\n  margin-bottom: 26px;\n"]))),y=h.Z.button(x||(x=(0,g.Z)(["\n  align-items: center;\n  padding: 14px 28px;\n  gap: 6px;\n  width: 196px;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: none;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n\n  text-transform: uppercase;\n"])));var S,z,I,L,F=t.p+"static/media/logo.e917114d7945c04c85a8946a331d28b6.svg",N=t.p+"static/media/messages.74a3d0a511d2f9354195.png",_=t(184),C=function(n){var e=n.userItem,t=e.tweets,i=e.followers,o=e.avatar,a=e.id,r=function(n){var e=(0,c.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem(n)))&&void 0!==e&&e})),t=(0,d.Z)(e,2),i=t[0],o=t[1];return(0,c.useEffect)((function(){window.localStorage.setItem(n,JSON.stringify(i))}),[n,i]),[i,o]}("follow-".concat(a)),s=(0,d.Z)(r,2),l=s[0],p=s[1],x=(0,f.I0)();return(0,_.jsxs)(m,{className:l?"all followings":"all follow",children:[(0,_.jsx)(b,{src:F,alt:"logo"}),(0,_.jsx)(w,{src:N,alt:"messages"}),(0,_.jsx)(v,{children:(0,_.jsx)(Z,{src:o,alt:"avatar"})}),(0,_.jsxs)(j,{children:[t.toLocaleString("en-US")," tweets"]}),(0,_.jsxs)(k,{children:[i.toLocaleString("en-US")," followers"]}),(0,_.jsx)(y,{type:"button",onClick:function(){p(!l),x(l?(0,u.HO)({id:a,followers:i}):(0,u.R3)({id:a,followers:i}))},className:l?"following":"follow",children:l?"Following":"Follow"})]})},U=function(n){return n.users.items},E=function(n){return n.users.page},O=h.Z.ul(S||(S=(0,g.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 20px;\n\n    gap: 12px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    gap: 50px;\n  }\n"]))),A=h.Z.li(z||(z=(0,g.Z)(["\n  height: 460px;\n\n  @media screen and (max-width: 767px) {\n    margin-bottom: 12px;\n  }\n\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 12px) / 2);\n  }\n\n  @media screen and (min-width: 1280px) {\n    flex-basis: 380px;\n  }\n\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n"]))),H=h.Z.button(I||(I=(0,g.Z)(["\n  /* display: flex;\n  flex-direction: row;\n  justify-content: center; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 28px;\n  gap: 6px;\n  width: 196px;\n\n  margin-left: auto;\n  margin-right: auto;\n\n  background: #5cd3a8;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: none;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n\n  text-transform: uppercase;\n"]))),J=t(9114),R=t(7821),T=t.n(R),q=t(1315),B=t(3433),D=function(n){var e=n.value,t=document.querySelectorAll("div.all");(0,B.Z)(t).forEach((function(n){return n.classList.contains(e)?n.closest("li").classList.remove("hidden"):n.closest("li").classList.add("hidden")}))},G=t(9128),K=t(7689),M=t(1087),P=(0,h.Z)(M.rU)(L||(L=(0,g.Z)(["\n    display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 28px;\n  gap: 6px;\n  width: 196px;\n\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 24px;\n\n\n  background: #5cd3a8;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: none;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n\n  text-transform: uppercase;\n"]))),Q=function(){var n,e,t=(0,K.TH)(),i=(0,c.useRef)(null!==(n=null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,_.jsxs)(P,{to:i.current,state:{from:t},children:[(0,_.jsx)(G.jTe,{size:"24"}),"Back"]})},V=function(){var n=(0,f.v9)(E),e=(0,f.v9)(U),t=[{value:"all",label:"Show All"},{value:"follow",label:"Follow"},{value:"followings",label:"Followings"}],i=t[0],o=(0,f.I0)();(0,c.useEffect)((function(){o((0,u.uh)(n))}),[o,n]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(Q,{}),(0,_.jsx)(q.Z,{options:t,onChange:D,value:i,placeholder:"Select an option",className:"dropdown"}),(0,_.jsx)(O,{children:e.map((function(n){return(0,_.jsx)(A,{children:(0,_.jsx)(C,{userItem:n})},n.id)}))}),n<4&&(0,_.jsx)(H,{onClick:function(){return o((0,J.fz)())},children:"Load more"}),(0,_.jsx)(T(),{smooth:!0,color:"#6f00ff",className:"top-button"})]})}},1917:function(n,e,t){t.r(e);var i=t(184),o=t(4739).UserLIst;e.default=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o,{})})}}}]);
//# sourceMappingURL=291.9575eb48.chunk.js.map