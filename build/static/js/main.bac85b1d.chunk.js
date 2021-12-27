(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{44:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),s=r(18),c=r.n(s),i=r(1),o=r.n(i),l=r(4),u=r(5),d=r(0),b=function(e){var t=e.blog,r=e.updateBlog,a=e.deleteBlog,s={marginRight:5},c=Object(n.useState)(!1),i=Object(u.a)(c,2),b=i[0],p=i[1],j=Object(n.useState)(t.likes),f=Object(u.a)(j,2),g=f[0],O=f[1],h={display:b?"":"none"},x=b?"hide":"show",v=function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(g+1),n={title:t.title,author:t.author,url:t.url,likes:g+1},e.next=4,r(t.id,n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Remove blog '".concat(t.title,"' by ").concat(t.user.username))){e.next=3;break}return e.next=3,a(t.id);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{"data-testid":"blog-container",style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},children:[Object(d.jsxs)("div",{"data-testid":"static-elements",children:[Object(d.jsx)("span",{"data-testid":"blog-title",style:s,children:t.title})," ",Object(d.jsx)("span",{"data-testid":"blog-author",style:s,children:t.author})," ",Object(d.jsx)("input",{type:"button",value:x,onClick:function(){return p(!b)},"data-testid":"toggle-details"})]}),Object(d.jsxs)("div",{"data-testid":"dynamic-elements",style:h,children:[Object(d.jsxs)("div",{"data-testid":"blog-url",children:[t.url,Object(d.jsx)("br",{})]}),Object(d.jsx)("span",{"data-testid":"blog-likes",style:s,children:g}),Object(d.jsx)("input",{type:"button",value:"like",onClick:v,"data-testid":"increase-likes"}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{"data-testid":"blog-username",children:[t.user.username,Object(d.jsx)("br",{})]}),Object(d.jsx)("input",{type:"button","data-testid":"remove-blogs",onClick:y,value:"remove"})]})]})},p=r(2),j=function(e){var t=e.register,r=e.toggleVisibility,a=Object(n.useState)({}),s=Object(u.a)(a,2),c=s[0],i=s[1],b=function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,t(c);case 4:r(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0.response.data.error||e.t0.response.data||e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e,t){var r={};r[e]=t,i(Object(p.a)(Object(p.a)({},c),r))},f={marginRight:5};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Register"}),Object(d.jsx)("form",{onSubmit:b,"data-testid":"form-register",style:{display:"table"},children:Object(d.jsxs)("fieldset",{style:{border:"none"},children:[Object(d.jsxs)("div",{style:{display:"table-row"},children:[Object(d.jsx)("label",{htmlFor:"name_register",style:Object(p.a)(Object(p.a)({},f),{},{display:"table-cell"}),children:"Enter Name"}),Object(d.jsx)("input",{type:"text",id:"name_register","data-testid":"name-register",onChange:function(e){var t=e.target;return j("name",t.value)},style:Object(p.a)(Object(p.a)({},f),{},{display:"table-cell"})})]}),Object(d.jsxs)("div",{style:{display:"table-row"},children:[Object(d.jsx)("label",{htmlFor:"username_register",style:Object(p.a)(Object(p.a)({},f),{},{display:"table-cell"}),children:"Enter Username"}),Object(d.jsx)("input",{type:"text",id:"username_register","data-testid":"username-register",onChange:function(e){var t=e.target;return j("username",t.value)},style:Object(p.a)(Object(p.a)({},f),{},{display:"table-cell"})})]}),Object(d.jsxs)("div",{style:{display:"table-row"},children:[Object(d.jsx)("label",{htmlFor:"password_register",style:Object(p.a)(Object(p.a)({},f),{},{display:"table-cell"}),children:"Enter Password"}),Object(d.jsx)("input",{type:"password",id:"password_register","data-testid":"password-register",onChange:function(e){var t=e.target;return j("password",t.value)},style:Object(p.a)(Object(p.a)({},f),{},{display:"table-cell"})})]}),Object(d.jsxs)("div",{style:{display:"table-row"},children:[Object(d.jsx)("input",{type:"submit",value:"register","data-testid":"register-user",style:Object(p.a)(Object(p.a)({},f),{},{display:"table-cell",float:"left"})}),Object(d.jsx)("input",{type:"button",value:"cancel",onClick:r,"data-testid":"toggle-register",style:Object(p.a)(Object(p.a)({},f),{},{display:"table-cell"})})]})]})})]})},f=function(e){var t=e.setUsername,r=e.setPassword,n=e.handleSubmit,a=e.style,s=e.toggleVisibility;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"login to the application"}),Object(d.jsx)("form",{onSubmit:function(e){return n(e)},style:{display:"table"},children:Object(d.jsxs)("fieldset",{style:{border:"none"},children:[Object(d.jsxs)("div",{style:{display:"table-row"},children:[Object(d.jsx)("label",{htmlFor:"username",style:Object(p.a)(Object(p.a)({},a),{},{display:"table-cell"}),children:"username"}),Object(d.jsx)("input",{type:"text",id:"username","data-testid":"username-txt",onChange:function(e){return t(e.target.value)},style:Object(p.a)(Object(p.a)({},a),{},{display:"table-cell"})})]}),Object(d.jsxs)("div",{style:{display:"table-row"},children:[Object(d.jsx)("label",{htmlFor:"password",style:Object(p.a)(Object(p.a)({},a),{},{display:"table-cell"}),children:"password"}),Object(d.jsx)("input",{type:"password","data-testid":"password-txt",onChange:function(e){return r(e.target.value)},style:Object(p.a)(Object(p.a)({},a),{},{display:"table-cell"})})]}),Object(d.jsxs)("div",{style:{display:"table-row"},children:[Object(d.jsx)("input",{type:"submit","data-testid":"submit-cred",value:"login",style:Object(p.a)(Object(p.a)({},a),{},{float:"left",display:"table-cell"})}),Object(d.jsx)("input",{type:"button","data-testid":"register-view",value:"register",onClick:s,style:Object(p.a)(Object(p.a)({},a),{},{float:"left",display:"table-cell"})})]})]})})]})},g=a.a.forwardRef((function(e,t){g.displayName="TogglableBlogEntry";var r=Object(n.useState)(!1),a=Object(u.a)(r,2),s=a[0],c=a[1],i={display:s?"":"none"},o={display:s?"none":""},l=function(){c(!s)};return Object(n.useImperativeHandle)(t,(function(){return{toggleVisibility:l}})),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:o,children:Object(d.jsx)("input",{type:"button","data-testid":"createNew-show",value:e.buttonLabel,onClick:l})}),Object(d.jsxs)("div",{style:i,children:[e.children,Object(d.jsx)("input",{type:"button",value:"cancel",onClick:l})]})]})})),O=function(e){var t=e.registerHandle,r=e.setUsername,a=e.setPassword,s=e.handleSubmit,c=e.style,i=Object(n.useState)(!1),o=Object(u.a)(i,2),l=o[0],b=o[1],p={display:l?"":"none"},g={display:l?"none":""},O=function(){b(!l)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:p,children:Object(d.jsx)(j,{register:t,toggleVisibility:O})}),Object(d.jsx)("div",{style:g,children:Object(d.jsx)(f,{setUsername:r,setPassword:a,handleSubmit:s,style:c,toggleVisibility:O})})]})},h=function(e){var t=e.addBlog,r=e.style,a=Object(n.useState)({}),s=Object(u.a)(a,2),c=s[0],i=s[1],b=function(e,t){var r={};r[e]=t,i(Object(p.a)(Object(p.a)({},c),r))},j=function(){var e=Object(l.a)(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,t(c);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"create new"}),Object(d.jsxs)("form",{onSubmit:function(e){return j(e)},"data-testid":"createNew-submit",children:[Object(d.jsxs)("div",{style:r,children:["title ",Object(d.jsx)("input",{type:"text","data-testid":"title",onChange:function(e){b("title",e.target.value)}})]}),Object(d.jsxs)("div",{style:r,children:["author ",Object(d.jsx)("input",{type:"text","data-testid":"author",onChange:function(e){b("author",e.target.value)}})]}),Object(d.jsxs)("div",{style:r,children:["url ",Object(d.jsx)("input",{type:"text","data-testid":"url",onChange:function(e){b("url",e.target.value)}})]}),Object(d.jsx)("div",{style:r,children:Object(d.jsx)("button",{type:"submit","data-testid":"createNew",children:"create"})})]})]})},x=function(e){var t=e.clear,r=e.style,a=e.getBlogs,s=e.addBlog,c=e.updateBlog,i=e.deleteBlog,p=Object(n.useState)([]),j=Object(u.a)(p,2),f=j[0],O=j[1],x=Object(n.useRef)();Object(n.useEffect)((function(){f.length||a().then((function(e){return O(e)}))}),[f]);var v=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:return x.current.toggleVisibility(),e.t0=O,e.next=6,a();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t);case 2:O(f.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{"data-testid":"blogs-screen",children:[Object(d.jsx)("h2",{children:"blogs"}),Object(d.jsxs)("p",{children:[window.localStorage.getItem("user")," has logged in ",Object(d.jsx)("button",{onClick:t,children:"logout"})]}),Object(d.jsx)(g,{buttonLabel:"Add Blog",ref:x,children:Object(d.jsx)(h,{addBlog:v,style:r})}),f?f.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(d.jsx)(b,{blog:e,updateBlog:c,deleteBlog:y},e.id)})):null]})},v=function(e){var t=e.message,r=e.style,n=Object(p.a)(Object(p.a)({},r),{},{color:"green"});return Object(d.jsx)("div",{"data-testid":"text-notification",style:n,children:t.success})},y=function(e){var t=e.message,r=e.style,n=Object(p.a)(Object(p.a)({},r),{},{color:"red"});return Object(d.jsx)("div",{"data-testid":"text-notification",style:n,children:t.error})},m=function(e){var t=e.message,r={color:"black",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:5,marginBottom:10};return"error"in t?Object(d.jsx)("div",{children:Object(d.jsx)(y,{message:t,style:r})}):"success"in t?Object(d.jsx)("div",{children:Object(d.jsx)(v,{message:t,style:r})}):null},w=r(7),k=r.n(w),S={validateLogin:function(){var e=Object(l.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/login",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B="/api/blogs",C={getAll:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(B);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createNew:function(){var e=Object(l.a)(o.a.mark((function e(t,r){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:"bearer ".concat(r)}},e.next=3,k.a.post(B,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),updateExisting:function(){var e=Object(l.a)(o.a.mark((function e(t,r,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:"bearer ".concat(n)}},e.next=3,k.a.put("".concat(B,"/").concat(t),r,a);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),deleteExisting:function(){var e=Object(l.a)(o.a.mark((function e(t,r){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:"bearer ".concat(r)}},e.next=3,k.a.delete("".concat(B,"/").concat(t),n);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},T={register:function(){var e=Object(l.a)(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,n=t.name,a=t.password,e.next=3,k.a.post("/api/users",{username:r,name:n,password:a});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),r=t[0],a=t[1],s=Object(n.useState)(""),c=Object(u.a)(s,2),i=c[0],b=c[1],p=Object(n.useState)(""),j=Object(u.a)(p,2),f=j[0],g=j[1],h={marginBottom:5,marginRight:5},v=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.getAll();case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.error||e.t0.response.data||e.t0.message),a({error:e.t0.response.data.error||e.t0.response.data||e.t0.message}),setTimeout((function(){return a({})}),5e3),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.createNew(t,window.localStorage.getItem("token"));case 3:a({success:"Blog added successfully"}),setTimeout((function(){return a({})}),5e3),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.error||e.t0.response.data||e.t0.message),a({error:e.t0.response.data.error||e.t0.response.data||e.t0.message}),setTimeout((function(){return a({})}),5e3);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.updateExisting(t,r,window.localStorage.getItem("token"));case 3:e.next=10;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.response.data.error||e.t0.response.data||e.t0.message),a({error:e.t0.response.data.error||e.t0.response.data||e.t0.message}),setTimeout((function(){return a({})}),5e3);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,r){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.deleteExisting(t,window.localStorage.getItem("token"));case 3:e.next=10;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.response.data.error||e.t0.response.data||e.t0.message),a({error:e.t0.response.data.error||e.t0.response.data||e.t0.message}),setTimeout((function(){return a({})}),5e3);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,S.validateLogin({username:i,password:f});case 4:r=e.sent,window.localStorage.setItem("token",r.token),window.localStorage.setItem("user",r.name),a({success:"Successfully logged in, user ".concat(r.name)}),setTimeout((function(){return a({})}),5e3),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.response.data.error||e.t0.response.data||e.t0.message),a({error:e.t0.response.data.error||e.t0.response.data||e.t0.message}),setTimeout((function(){return a({})}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.register(t);case 3:a({success:"User registered successfully"}),setTimeout((function(){return a({})}),5e3),e.next=12;break;case 7:throw e.prev=7,e.t0=e.catch(0),a({error:e.t0.response.data.error||e.t0.response.data||e.t0.message}),setTimeout((function(){return a({})}),5e3),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{message:r}),window.localStorage.getItem("token")?Object(d.jsx)(x,{clear:function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("user"),b(""),g(""),a({success:"Successfully logged out"}),setTimeout((function(){return a({})}),5e3)},style:h,getBlogs:v,addBlog:y,updateBlog:w,deleteBlog:k}):Object(d.jsx)(O,{registerHandle:I,setUsername:b,setPassword:g,handleSubmit:B,style:h})]})};c.a.render(Object(d.jsx)(I,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.bac85b1d.chunk.js.map