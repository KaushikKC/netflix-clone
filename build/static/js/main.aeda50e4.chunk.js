(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},60:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(23),a=n.n(r),s=(n(48),n(49),n(16)),o=(n(50),n(9)),l=n(3);var u=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(o.f)(),a=function(){window.scrollY>100?i(!0):i(!1)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[]),Object(l.jsx)("div",{className:"nav ".concat(n&&"nav_black"),children:Object(l.jsxs)("div",{className:"nav_contents",children:[Object(l.jsx)("img",{onClick:function(){return r.push("/")},className:"nav_logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(l.jsx)("img",{onClick:function(){return r.push("/profile")},className:"nav_avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:""})]})})},d=n(25),j=n(20),b=n.n(j),h=(n(60),n(42)),f=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3/"}),p="cbf45b03ce3033a1b340974c720411c4",m={fetchTrending:"/trending/all/day?api_key=".concat(p),fetchNetflixOriginals:"/discover/tv?api_key=".concat(p,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(p,"&language=en-US"),fetchActionMovies:"/discover/movie/?api_key=".concat(p,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(p,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(p,"&with_genres=27"),fetchRomanticMovies:"/discover/movie?api_key=".concat(p,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(p,"&with_genres=99")};var v=function(){var e,t,n=Object(c.useState)([]),i=Object(s.a)(n,2),r=i[0],a=i[1];return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(m.fetchNetflixOriginals);case 2:return t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(null===r||void 0===r?void 0:r.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(l.jsxs)("div",{className:"banner__contents",children:[Object(l.jsx)("h1",{className:"banner__title",children:(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.orginal_name)}),Object(l.jsxs)("div",{className:"banner__buttons",children:[Object(l.jsx)("button",{className:"banner__button",children:"Play"}),Object(l.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(l.jsx)("h1",{className:"banner__description",children:(e=null===r||void 0===r?void 0:r.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+" ....":e)})]}),Object(l.jsx)("div",{className:"banner__fadeBottom"}),"    "]})};n(79);var O=function(e){var t=e.title,n=e.fetchUrl,i=e.isLargeRow,r=void 0!==i&&i,a=Object(c.useState)([]),o=Object(s.a)(a,2),u=o[0],j=o[1];return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,j(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("div",{className:"row__posters",children:u.map((function(e){return(r&&e.poster_path||!r&&e.backdrop_path)&&Object(l.jsx)("img",{className:"row__poster ".concat(r&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(r?e.poster_path:e.backdrop_path),alt:"{movie.name}"},e.id)}))})]})};var g=function(){return Object(l.jsxs)("div",{className:"homeScreen",children:[Object(l.jsx)(u,{}),Object(l.jsx)(v,{}),Object(l.jsx)(O,{title:"NETFLIX ORGINALS",fetchUrl:m.fetchNetflixOriginals,isLargeRow:!0}),Object(l.jsx)(O,{title:"Trending Now",fetchUrl:m.fetchTrending,isLargeRow:!0}),Object(l.jsx)(O,{title:"Top Rated",fetchUrl:m.fetchTopRated,isLargeRow:!0}),Object(l.jsx)(O,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(l.jsx)(O,{title:"Comedy Movies",fetchUrl:m.fetchComedyMovies}),Object(l.jsx)(O,{title:"Horror Movies",fetchUrl:m.fetchHorrorMovies}),Object(l.jsx)(O,{title:"Romance",fetchUrl:m.fetchRomanticMovies}),Object(l.jsx)(O,{title:"Documentaries",fetchUrl:m.fetchDocumentaries})]})},x=(n(80),n(24)),_=n(32),w=(_.a.initializeApp({apiKey:"AIzaSyBu_-xrJVauNg0gFNSB4ky4aUivtuDvLwA",authDomain:"netflix-clone-efcd3.firebaseapp.com",projectId:"netflix-clone-efcd3",storageBucket:"netflix-clone-efcd3.appspot.com",messagingSenderId:"99107609129",appId:"1:99107609129:web:58735e81296bee5cd4da38"}).firestore(),_.a.auth()),N=n(18),k=n(26),y=Object(k.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),S=y.actions,E=S.login,R=S.logout,M=function(e){return e.user.user},U=y.reducer;n(86),n(87);var A=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null);return Object(l.jsx)("div",{className:"signupScreen",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsx)("input",{ref:e,type:"email",placeholder:"Email"}),Object(l.jsx)("input",{ref:t,type:"password",placeholder:"Password"}),Object(l.jsx)("button",{onClick:function(n){n.preventDefault(),w.signInWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},type:"submit",children:"Sign In"}),Object(l.jsxs)("h4",{children:[Object(l.jsx)("span",{className:"signupScreen__grey",children:"New to netflix?"}),Object(l.jsx)("span",{className:"signupScreen__link",onClick:function(n){n.preventDefault(),w.createUserWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign Up now"})]})]})})};var C=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(l.jsxs)("div",{className:"loginscreen",children:[Object(l.jsxs)("div",{className:"loginScreen__Background",children:[Object(l.jsx)("img",{className:"loginScreen__logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(l.jsx)("button",{onClick:function(){return i(!0)},className:"loginScreen__button",children:"Sign In"}),Object(l.jsx)("div",{className:"loginScreen__gradient"})]}),Object(l.jsx)("div",{className:"loginScreen__body",children:n?Object(l.jsx)(A,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Unlimited movies, TV shows and more."}),Object(l.jsx)("h2",{children:"Watch anywhere. Cancel at any time"}),Object(l.jsx)("h3",{children:"Ready to watch? Enter your email to create or restart your membership."}),Object(l.jsx)("div",{className:"loginScreen__input",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"email",placeholder:"Email Address"}),Object(l.jsx)("button",{onClick:function(){return i(!0)},className:"loginScreen__getStarted",children:"GET STARTED"})]})})]})})]})},I=(n(88),function(){var e=Object(N.c)(M);return Object(l.jsxs)("div",{className:"profileScreen",children:[Object(l.jsx)(u,{}),Object(l.jsxs)("div",{className:"profileScreen__body",children:[Object(l.jsx)("h1",{children:"Edit profile"}),Object(l.jsxs)("div",{className:"profileScreen__info",children:[Object(l.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"avatar"}),Object(l.jsxs)("div",{className:"profileScreen__details",children:[Object(l.jsx)("h2",{children:e.email}),Object(l.jsxs)("div",{className:"profileScreen__plans",children:[Object(l.jsx)("h3",{children:"Plans"}),Object(l.jsx)("button",{className:"profileScreen__signout",onClick:function(){return w.signOut()},children:"Sign Out"})]})]})]})]})]})});var L=function(){var e=Object(N.b)();Object(c.useEffect)((function(){return w.onAuthStateChanged((function(t){e(t?E({uid:t.uid,email:t.email}):R())}))}),[e]);var t=Object(N.c)(M);return Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(x.a,{children:t?Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/profile",children:Object(l.jsx)(I,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(g,{})})]}):Object(l.jsx)(C,{})})})},T=Object(k.a)({reducer:{user:U}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(N.a,{store:T,children:Object(l.jsx)(L,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[89,1,2]]]);
//# sourceMappingURL=main.aeda50e4.chunk.js.map