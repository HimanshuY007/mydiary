(this["webpackJsonpmydiary-app"]=this["webpackJsonpmydiary-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(5),n=a.n(s),r=(a(10),a(2)),i=(a(11),a(0)),l=function(e){var t=e.weeks,a=e.data,c=0;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("div",{className:"arrow",children:Object(i.jsx)("span",{className:"material-icons",children:"west"})}),Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("span",{className:"My",children:"My "}),"Diary"]}),Object(i.jsxs)("div",{className:"month",children:[" ",a," "]})]}),Object(i.jsx)("div",{className:"weeks",children:t.map((function(e){return c++,Object(i.jsx)("div",{children:e},c)}))})]})},o=a.p+"static/media/img1.e6e4f8a4.jpg",d=(a(13),function(e){var t=e.tracker;return Object(i.jsxs)("div",{className:"displaycontainer",children:[Object(i.jsx)("div",{className:"pic",children:Object(i.jsx)("img",{src:o,alt:"pic"})}),Object(i.jsxs)("div",{className:"imagetitle",children:[Object(i.jsxs)("div",{className:"titleflex",children:[Object(i.jsxs)("div",{className:"displaytitlename",children:[Object(i.jsx)("span",{children:"W"}),Object(i.jsx)("span",{children:"DC"})]}),Object(i.jsx)("div",{className:"material-icons displaystars",children:"star star star star star_border"})]}),Object(i.jsx)("h3",{children:"Image"}),Object(i.jsx)("p",{className:"imagedate",children:t.format("DD MMM YYYY")}),Object(i.jsx)("p",{className:"paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),Object(i.jsx)("div",{className:"post",children:" View Full Post"})]})}),j=a(3),m=a.n(j),f=(a(15),function(e){for(var t=e.scrolling,a=e.getheight,s=m()(),n=0,l=-1,j=0,f=0,u=s.clone().startOf("year").startOf("month").startOf("week"),h=s.clone().endOf("year").endOf("month").endOf("week"),O=s.clone().endOf("year").endOf("month"),b=s.clone().startOf("year").startOf("month").subtract(1,"month"),p=u.clone().subtract(1,"days"),x=[],v=[5,9,12,25,32,60,78,83,90,95,103,118,126,143,145],y=Object(c.useState)(O.clone()),g=Object(r.a)(y,2),N=g[0],k=g[1];p.isBefore(h,"days");)x.push(Array(7).fill(0).map((function(){return p.add(1,"days").clone()})));var w=Object(c.useState)(x),M=Object(r.a)(w,2),Y=M[0],S=M[1];var D=Object(c.useRef)(),F=Object(c.useRef)(),T=Object(c.useRef)();function C(e){var t=0;F.current.style.display="block";for(var a=Number(e.target.getAttribute("data-key")),c=0;c<15;c++)if(a===v[c]){t=c;break}var s=T.current.children[t].clientWidth;T.current.scrollLeft=t*(s+30)-.4*s}return Object(c.useEffect)((function(){a(D.current);for(var e=Math.floor(D.current.children.length/4.3),t=0;t<e;){b.add(1,"months");var c=b.clone().startOf("week").diff(u,"days");document.getElementById("".concat(c)).innerHTML="".concat(b.format("MMM")," <br/> ").concat(b.format("YYYY")),t++}})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"dates",ref:D,onScroll:function(e){t(e),function(e){var t=e.target.scrollHeight-e.target.scrollTop-1;if(e.target.clientHeight>=t){var a=N.clone().endOf("week").add(1,"days");k(N.add(1,"year"));for(var c=a.clone().subtract(1,"days"),s=[];c.isBefore(N.clone().endOf("week"),"days");)s.push(Array(7).fill(0).map((function(){return c.add(1,"days").clone()})));S(Y.concat(s))}}(e)},children:Y.map((function(e){return n++,Object(i.jsx)("div",{className:"weekly",children:e.map((function(e){return l++,Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{id:l,children:[" ",e.format("D")," "]},l),v.map((function(e){return j++,l===e?Object(i.jsxs)("div",{className:"thumbnailcontainer",children:[Object(i.jsx)("div",{className:"material-icons stars",children:"star star star star star_border"}),Object(i.jsx)("section",{className:"thumbnail",children:Object(i.jsx)("img",{src:o,alt:"sky",onClick:C,"data-key":l},j)}),Object(i.jsxs)("div",{className:"titlename",children:[" ",Object(i.jsx)("span",{children:"W"})," ",Object(i.jsx)("span",{children:"DC"})," "]})]}):Object(i.jsx)("div",{},j)}))]})}))},n)}))}),Object(i.jsxs)("div",{className:"containerimage",ref:F,children:[Object(i.jsxs)("div",{className:"cancel",children:[" ",Object(i.jsx)("span",{className:"material-icons",onClick:function(e){return e.target.parentElement.parentElement.style.display="none"},children:"close"})]}),Object(i.jsx)("div",{className:"containsimages",ref:T,children:v.map((function(e){f++;var t=s.clone().startOf("year").startOf("month").startOf("week").add(e-1,"days");return Object(i.jsx)(d,{tracker:t},f)}))})]})]})}),u=(a(16),function(){return Object(i.jsxs)("div",{className:"footbar",children:[Object(i.jsx)("div",{className:"material-icons",style:{fontSize:32},children:"home"}),Object(i.jsx)("div",{className:"material-icons",style:{fontSize:32},children:"search"}),Object(i.jsx)("div",{className:"material-icons",style:{fontSize:32},children:"add_circle_outline"}),Object(i.jsx)("div",{className:"material-icons",style:{fontSize:32,color:"rgb(51, 99, 201)"},children:"date_range"}),Object(i.jsx)("div",{className:"material-icons",style:{fontSize:32},children:"account_circle"})]})});a(17);var h=function(){var e=m()(),t=e.clone().startOf("year").startOf("month").startOf("week"),a=e.clone().startOf("month").startOf("week"),s=e.clone().startOf("year").startOf("month"),n=t.clone(),o=s.clone().add(1,"month").startOf("week"),d=a.diff(t,"days")/7,j=[],h=Object(c.useState)(e.clone().startOf("year").startOf("month").format("MMM YYYY")),O=Object(r.a)(h,2),b=O[0],p=O[1];return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(l,{weeks:["S","M","T","W","T","F","S"],data:b}),Object(i.jsx)(f,{difference:d,scrolling:function(e){j.forEach((function(t){e.target.scrollTop>=t.a&&e.target.scrollTop<=t.b&&p(t.c)}))},getheight:function(e){for(var a=e.scrollHeight/e.children.length,c=Math.floor(e.children.length/4)-j.length,r=0;r<c;r++){var i={a:n.diff(t,"days")/7*a-100,b:o.diff(t,"days")/7*a-100,c:s.format("MMM YYYY")};j.push(i),s.add(1,"month"),n=s.clone().startOf("week"),o=s.clone().add(1,"month").startOf("week")}}}),Object(i.jsx)(u,{})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};n.a.render(Object(i.jsx)(h,{}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.b8e95b15.chunk.js.map