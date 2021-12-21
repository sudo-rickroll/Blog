(this['webpackJsonpbloglist-frontend']=this['webpackJsonpbloglist-frontend']||[]).push([[0],{ 42:function(e,t,n){'use strict';n.r(t);var r=n(2),a=n.n(r),s=n(17),c=n.n(s),o=n(1),i=n.n(o),u=n(3),l=n(5),d=n(0),p=function(e){var t=e.blog,n=e.updateBlog,a=e.deleteBlog,s={ marginRight:5 },c=Object(r.useState)(!1),o=Object(l.a)(c,2),p=o[0],b=o[1],j=Object(r.useState)(t.likes),f=Object(l.a)(j,2),g=f[0],h=f[1],x={ display:p?'':'none' },v=p?'hide':'show',O=function(){var e=Object(u.a)(i.a.mark((function e(){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(g+1),r={ title:t.title,author:t.author,url:t.url,likes:g+1 },e.next=4,n(t.id,r);case 4:case'end':return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm('Remove blog \''.concat(t.title,'\' by ').concat(t.user.username))){e.next=3;break}return e.next=3,a(t.id);case 3:case'end':return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)('div',{ 'data-testid':'blog-container',style:{ paddingTop:10,paddingLeft:2,border:'solid',borderWidth:1,marginBottom:5 },children:[Object(d.jsxs)('div',{ 'data-testid':'static-elements',children:[Object(d.jsx)('span',{ 'data-testid':'blog-title',style:s,children:t.title }),' ',Object(d.jsx)('span',{ 'data-testid':'blog-author',style:s,children:t.author }),' ',Object(d.jsx)('input',{ type:'button',value:v,onClick:function(){return b(!p)},'data-testid':'toggle-details' })] }),Object(d.jsxs)('div',{ 'data-testid':'dynamic-elements',style:x,children:[Object(d.jsxs)('div',{ 'data-testid':'blog-url',children:[t.url,Object(d.jsx)('br',{})] }),Object(d.jsx)('span',{ 'data-testid':'blog-likes',style:s,children:g }),Object(d.jsx)('input',{ type:'button',value:'like',onClick:O,'data-testid':'increase-likes' }),Object(d.jsx)('br',{}),Object(d.jsxs)('div',{ 'data-testid':'blog-username',children:[t.user.username,Object(d.jsx)('br',{})] }),Object(d.jsx)('input',{ type:'button','data-testid':'remove-blogs',onClick:m,value:'remove' })] })] })},b=a.a.forwardRef((function(e,t){b.displayName='Togglable';var n=Object(r.useState)(!1),a=Object(l.a)(n,2),s=a[0],c=a[1],o={ display:s?'':'none' },i={ display:s?'none':'' },u=function(){c(!s)};return Object(r.useImperativeHandle)(t,(function(){return{ toggleVisibility:u }})),Object(d.jsxs)('div',{ children:[Object(d.jsx)('div',{ style:i,children:Object(d.jsx)('input',{ type:'button','data-testid':'createNew-show',value:e.buttonLabel,onClick:u }) }),Object(d.jsxs)('div',{ style:o,children:[e.children,Object(d.jsx)('input',{ type:'button',value:'cancel',onClick:u })] })] })})),j=b,f=n(6),g=function(e){var t=e.addBlog,n=e.style,a=Object(r.useState)({}),s=Object(l.a)(a,2),c=s[0],o=s[1],p=function(e,t){var n={};n[e]=t,o(Object(f.a)(Object(f.a)({},c),n))},b=function(){var e=Object(u.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t(c);case 3:case'end':return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)('div',{ children:[Object(d.jsx)('h2',{ children:'create new' }),Object(d.jsxs)('form',{ onSubmit:function(e){return b(e)},'data-testid':'createNew-submit',children:[Object(d.jsxs)('div',{ style:n,children:['title ',Object(d.jsx)('input',{ type:'text','data-testid':'title',onChange:function(e){p('title',e.target.value)} })] }),Object(d.jsxs)('div',{ style:n,children:['author ',Object(d.jsx)('input',{ type:'text','data-testid':'author',onChange:function(e){p('author',e.target.value)} })] }),Object(d.jsxs)('div',{ style:n,children:['url ',Object(d.jsx)('input',{ type:'text','data-testid':'url',onChange:function(e){p('url',e.target.value)} })] }),Object(d.jsx)('div',{ style:n,children:Object(d.jsx)('button',{ type:'submit','data-testid':'createNew',children:'create' }) })] })] })},h=function(e){var t=e.clear,n=e.style,a=e.getBlogs,s=e.addBlog,c=e.updateBlog,o=e.deleteBlog,b=Object(r.useState)([]),f=Object(l.a)(b,2),h=f[0],x=f[1],v=Object(r.useRef)();Object(r.useEffect)((function(){h.length||a().then((function(e){return x(e)}))}),[h]);var O=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:return v.current.toggleVisibility(),e.t0=x,e.next=6,a();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case'end':return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t);case 2:x(h.filter((function(e){return e.id!==t})));case 3:case'end':return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)('div',{ children:[Object(d.jsx)('h2',{ children:'blogs' }),Object(d.jsxs)('p',{ children:[window.localStorage.getItem('user'),' has logged in ',Object(d.jsx)('button',{ onClick:t,children:'logout' })] }),Object(d.jsx)(j,{ buttonLabel:'Add Blog',ref:v,children:Object(d.jsx)(g,{ addBlog:O,style:n }) }),h?h.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(d.jsx)(p,{ blog:e,updateBlog:c,deleteBlog:m },e.id)})):null] })},x=function(e){var t=e.message,n=e.style,r=Object(f.a)(Object(f.a)({},n),{},{ color:'green' });return Object(d.jsx)('div',{ 'data-testid':'text-notification',style:r,children:t.success })},v=function(e){var t=e.message,n=e.style,r=Object(f.a)(Object(f.a)({},n),{},{ color:'red' });return Object(d.jsx)('div',{ 'data-testid':'text-notification',style:r,children:t.error })},O=function(e){var t=e.message,n={ color:'black',background:'lightgrey',fontSize:20,borderStyle:'solid',borderRadius:5,padding:5,marginBottom:10 };return'error'in t?Object(d.jsx)('div',{ children:Object(d.jsx)(v,{ message:t,style:n }) }):'success'in t?Object(d.jsx)('div',{ children:Object(d.jsx)(x,{ message:t,style:n }) }):null},m=function(e){var t=e.setUsername,n=e.setPassword,r=e.handleSubmit,a=e.style;return Object(d.jsxs)('div',{ children:[Object(d.jsx)('h2',{ children:'login to the application' }),Object(d.jsxs)('form',{ onSubmit:function(e){return r(e)},children:[Object(d.jsxs)('div',{ style:a,children:['username ',Object(d.jsx)('input',{ type:'text','data-testid':'username-txt',onChange:function(e){return t(e.target.value)} })] }),Object(d.jsxs)('div',{ style:a,children:['password ',Object(d.jsx)('input',{ type:'password','data-testid':'password-txt',onChange:function(e){return n(e.target.value)} })] }),Object(d.jsx)('div',{ style:a,children:Object(d.jsx)('input',{ type:'submit','data-testid':'submit-cred',value:'login' }) })] })] })},w=n(7),y=n.n(w),k={ validateLogin:function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post('/api/login',t);case 2:return n=e.sent,e.abrupt('return',n.data);case 4:case'end':return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}() },S='/api/blogs',B={ getAll:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(S);case 2:return t=e.sent,e.abrupt('return',t.data);case 4:case'end':return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createNew:function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={ headers:{ Authorization:'bearer '.concat(n) } },e.next=3,y.a.post(S,t,r);case 3:return a=e.sent,e.abrupt('return',a.data);case 5:case'end':return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),updateExisting:function(){var e=Object(u.a)(i.a.mark((function e(t,n,r){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={ headers:{ Authorization:'bearer '.concat(r) } },e.next=3,y.a.put(''.concat(S,'/').concat(t),n,a);case 3:case'end':return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),deleteExisting:function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={ headers:{ Authorization:'bearer '.concat(n) } },e.next=3,y.a.delete(''.concat(S,'/').concat(t),r);case 3:case'end':return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}() },C=function(){var e=Object(r.useState)({}),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(''),c=Object(l.a)(s,2),o=c[0],p=c[1],b=Object(r.useState)(''),j=Object(l.a)(b,2),f=j[0],g=j[1],x={ marginBottom:5 },v=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.getAll();case 3:return t=e.sent,e.abrupt('return',t);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.error||e.t0.response.data),a({ error:e.t0.response.data.error||e.t0.response.data }),setTimeout((function(){return a({})}),5e3),e.abrupt('return',null);case 13:case'end':return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.createNew(t,window.localStorage.getItem('token'));case 3:a({ success:'Blog added successfully' }),setTimeout((function(){return a({})}),5e3),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.error||e.t0.response.data||e.t0.message),a({ error:e.t0.response.data.error||e.t0.response.data||e.t0.message }),setTimeout((function(){return a({})}),5e3);case 12:case'end':return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.updateExisting(t,n,window.localStorage.getItem('token'));case 3:e.next=10;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.response.data.error||e.t0.response.data||e.t0.message),a({ error:e.t0.response.data.error||e.t0.response.data||e.t0.message }),setTimeout((function(){return a({})}),5e3);case 10:case'end':return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.deleteExisting(t,window.localStorage.getItem('token'));case 3:e.next=10;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.response.data.error||e.t0.response.data||e.t0.message),a({ error:e.t0.response.data.error||e.t0.response.data||e.t0.message }),setTimeout((function(){return a({})}),5e3);case 10:case'end':return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k.validateLogin({ username:o,password:f });case 4:n=e.sent,window.localStorage.setItem('token',n.token),window.localStorage.setItem('user',n.name),a({ success:'Successfully logged in, user '.concat(n.name) }),setTimeout((function(){return a({})}),5e3),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.response.data.error||e.t0.response.data),a({ error:e.t0.response.data.error }),setTimeout((function(){return a({})}),5e3);case 16:case'end':return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)('div',{ children:[Object(d.jsx)(O,{ message:n }),window.localStorage.getItem('token')?Object(d.jsx)(h,{ clear:function(){window.localStorage.removeItem('token'),window.localStorage.removeItem('user'),a({ success:'Successfully logged out' }),setTimeout((function(){return a({})}),5e3)},style:x,getBlogs:v,addBlog:w,updateBlog:y,deleteBlog:S }):Object(d.jsx)(m,{ setUsername:p,setPassword:g,handleSubmit:C,style:x })] })};c.a.render(Object(d.jsx)(C,{}),document.getElementById('root'))} },[[42,1,2]]])
//# sourceMappingURL=main.bc0ab9c9.chunk.js.map