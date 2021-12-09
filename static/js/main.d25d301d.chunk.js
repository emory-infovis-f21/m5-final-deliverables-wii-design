(this.webpackJsonpinfovis=this.webpackJsonpinfovis||[]).push([[0],{158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(63),c=a.n(n),i=(a(158),a(159),a(9)),s=(a(160),a(2));var o=function(){return Object(s.jsxs)("div",{className:"navbar",children:[Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("h3",{children:"Wii Recommend"})}),Object(s.jsxs)("ul",{className:"menu",children:[Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"/",children:"HOME"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"/about",children:"ABOUT"})})]})]})},u=a(3),d=a(5),h=a(1),v=a(26),f=(a(163),function(e){var t=Object(r.useRef)(),a=Object(r.useState)([]),n=Object(d.a)(a,2),c=n[0],i=n[1],o=new Array,u=Object(r.useRef)("Critic Score"),f=Object(r.useRef)("North America Sales"),p=Object(r.useRef)("Genres"),b=[{value:"Critic Score",label:"Critic Score"},{value:"User Score",label:"User Score"},{value:"Global Sales",label:"Global Sales"},{value:"North America Sales",label:"North America Sales"},{value:"Average Play Length_All PlayStyles",label:"Average All Playstyles Play Time"},{value:"Average Play Length_Leisure",label:"Average Leisure Play Time"}],j=[{value:"North America Sales",label:"North America Sales"},{value:"Average Play Length_All PlayStyles",label:"Average All Playstyles Play Time"},{value:"Average Play Length_Leisure",label:"Average Leisure Play Time"},{value:"Critic Score",label:"Critic Score"},{value:"User Score",label:"User Score"},{value:"Global Sales",label:"Global Sales"}],g=[{value:"Genres",label:"Genres"},{value:"Platform",label:"Platform"},{value:"Developer",label:"Developer"},{value:"Rating",label:"Rating"}];return Object(r.useEffect)((function(){h.c("%PUBLIC_URL%/data/clean_data.csv").then((function(t){var a=e.dataSet.map((function(e){return e.row}));i(a)}))}),[e.dataSet]),Object(r.useEffect)((function(){h.i("circle").remove(),h.i("#legendArea").remove(),h.i("text").remove(),h.i("text").remove(),h.h("#x-cat").selectAll("option").remove(),h.h("#y-cat").selectAll("option").remove(),h.h("#color-cat").selectAll("option").remove(),u.current="Critic Score",f.current="North America Sales",p.current="Genres";var e="",a="",r=h.f().domain(c.map((function(e){return e[p.current]}))).range(h.g),l=800,n=400,i=h.h(t.current).attr("width",l).attr("height",n).style("overflow","visible").style("margin-top","10px").style("margin-bottom","50px").style("position","absolute").style("left","100px").append("g");h.h("#x-cat").selectAll("option").data(b).join("option").text((function(e){return e.label})).attr("value",(function(e){return e.value})).attr("label",(function(e){return e.label})),h.h("#y-cat").selectAll("option").data(j).join("option").text((function(e){return e.label})).attr("value",(function(e){return e.value})).attr("label",(function(e){return e.label})),h.h("#color-cat").selectAll("option").data(g).join("option").text((function(e){return e.label})).attr("value",(function(e){return e.value})).attr("label",(function(e){return e.label}));var s=h.e().domain([0,h.d(c,(function(e){return e[f.current]}))]).range([n,0]),d=h.e().domain([0,h.d(c,(function(e){return e[u.current]}))]).range([0,l]),x=Object(v.a)().shapeWidth(20).shapeHeight(5).scale(r);h.i("#chartArea").append("div").attr("id","legendArea").style("height","400px").style("width","500px").style("position","absolute").style("left","930px").style("overflow-y","scroll").append("svg").attr("id","legend").attr("height","120vh").attr("width","100vh").style("overflow","scroll").style("display","flex").call(x);var m=h.j().on("zoom",(function(e){var t=e.transform.rescaleY(s),a=e.transform.rescaleX(d);y.call(h.a(a)),O.call(h.b(t)),S.selectAll("circle").attr("cy",(function(e){return t(e[f.current])})).attr("cx",(function(e){return a(e[u.current])}))}));i.append("defs").append("svg:clipPath").attr("id","clip").append("svg:rect").attr("width",l).attr("height",n).attr("x",0).attr("y",0),i.append("rect").attr("width",l).attr("height",n).style("fill","none").style("pointer-events","all").call(m);var y=h.h("#x-axis").attr("transform","translate(0, ".concat(n,")")).call(h.a(d)),O=h.h("#y-axis").call(h.b(s));i.append("text").attr("id","x-label").attr("x",400).attr("y",450).text("Critic Score"),i.append("text").attr("id","y-label").attr("y",-50).attr("x",-320).attr("transform","rotate(270)").text("North America Sales");var A=h.h("#chartArea").append("div").style("visibility","hidden").style("position","absolute").style("background-color","#ccc").style("padding","10px").style("border-radius","5px").style("color","black"),S=i.append("g").attr("clip-path","url(#clip)");S.selectAll("circle").data(c).join("circle").attr("cx",(function(e){return d(e[u.current])})).attr("cy",(function(e){return s(e[f.current])})).attr("r",5).attr("fill",(function(e){return r(e[p.current])})).on("mouseover",(function(e,t){h.h(e.currentTarget).attr("r",10).attr("fill","orange"),A.style("visibility","visible").text("".concat(t.Title))})).on("mousemove",(function(e,t){A.style("top",e.pageY-50+"px").style("left",e.pageX-50+"px")})).on("mouseout",(function(e,t){h.h(e.currentTarget).attr("r",5).attr("fill","#ff00ad"),A.style("visibility","hidden")})).on("click",(function(e,t){o.push(t);_.selectAll("tr").data(o).join("tr").selectAll("td").data((function(e){return N.map((function(t){return{column:t,value:e[t]}}))})).enter().append("td").text((function(e){return e.value}))})),h.h("#x-cat").on("change",(function(t,o){var d=h.h(this).property("value");e=t.target.selectedOptions[0].getAttribute("label"),h.i("#x-label").text(e),function(t){u.current=t,console.log(u.current+" "+f.current);var o=h.e().domain([0,h.d(c,(function(e){return e[u.current]}))]).range([0,l]),d=h.e().domain([0,h.d(c,(function(e){return e[f.current]}))]).range([n,0]);h.h("#x-axis").call(h.a(o)),h.h("#y-axis").call(h.b().scale(s));var v=h.j().on("zoom",(function(e){var a=e.transform.rescaleY(d),r=e.transform.rescaleX(o);y.call(h.a(r)),O.call(h.b(a)),S.selectAll("circle").attr("cy",(function(e){return a(e[f.current])})).attr("cx",(function(e){return r(e[t])}))}));i.selectAll("rect").call(v),S.selectAll("circle").on("mouseover",(function(r,l){"Title"!==t?(h.h(r.currentTarget).attr("r",10).attr("fill","orange"),A.style("visibility","visible").text("Title: ".concat(l.Title,"  ").concat(e,": ").concat(l[t]," ").concat(a,": ").concat(l[f.current]))):(h.h(r.currentTarget).attr("r",10).attr("fill","orange"),A.style("visibility","visible").text("".concat(l.Title)))})).transition().duration(1e3).attr("fill",(function(e){return r(e.Genres)})).attr("cx",(function(e){return o(e[t])})).attr("cy",(function(e){return d(e[f.current])}))}(d)})),h.h("#y-cat").on("change",(function(e,t){var s=h.h(this).property("value");a=e.target.selectedOptions[0].getAttribute("label"),h.i("#y-label").text(a),function(e){f.current=e,console.log(u.current+" "+f.current);var t=h.e().domain([0,h.d(c,(function(e){return e[u.current]}))]).range([0,l]),a=h.e().domain([0,h.d(c,(function(t){return t[e]}))]).range([n,0]);h.h("#y-axis").call(h.b(a)),h.h("#x-axis").call(h.a(t));var s=h.j().on("zoom",(function(r){var l=r.transform.rescaleY(a),n=r.transform.rescaleX(t);y.call(h.a(n)),O.call(h.b(l)),S.selectAll("circle").attr("cy",(function(t){return l(t[e])})).attr("cx",(function(e){return n(e[u.current])}))}));i.selectAll("rect").call(s),S.selectAll("circle").transition().duration(1e3).attr("cy",(function(t){return a(t[e])})).attr("cx",(function(e){return t(e[u.current])})).attr("fill",(function(e){return r(e.Genres)}))}(s)})),h.h("#color-cat").on("change",(function(e,t){!function(e){p.current=e;var t=h.f().domain(c.map((function(t){return t[e]}))).range(h.g),a=Object(v.a)().shapeWidth(20).shapeHeight(5).scale(t);h.i("#legendArea").remove(),"Rating"===e||"Platform"===e?h.i("#chartArea").append("div").attr("id","legendArea").style("height","400px").style("width","500px").style("position","absolute").style("left","930px").style("overflow-y","scroll").append("svg").attr("id","legend").style("overflow","scroll").style("display","flex").call(a):"Developer"===e?h.i("#chartArea").append("div").attr("id","legendArea").style("height","400px").style("width","500px").style("position","absolute").style("left","930px").style("overflow-y","scroll").append("svg").attr("id","legend").attr("height","90vh").style("overflow","scroll").style("display","flex").call(a):h.i("#chartArea").append("div").attr("id","legendArea").style("height","400px").style("width","500px").style("position","absolute").style("left","930px").style("overflow-y","scroll").append("svg").attr("id","legend").attr("height","120vh").attr("width","100vh").style("overflow","scroll").style("display","flex").call(a),S.selectAll("circle").attr("fill",(function(a){return t(a[e])}))}(h.h(this).property("value"))})),h.i("table").remove();var w=h.h("#tableArea").append("table"),P=w.append("thead"),_=w.append("tbody"),N=["Title","Year","Platform","Critic Score","User Score","Developer","Genres","Rating"];P.append("tr").selectAll("th").data(N).join("th").text((function(e){return e}))}),[c]),Object(s.jsxs)(l.a.Fragment,{children:[Object(s.jsxs)("div",{className:"selection",style:{display:"flex",margin:"20px"},children:[Object(s.jsx)("p",{children:"Select X Value"}),Object(s.jsx)("select",{id:"x-cat",children:"Select X Value"}),"\xa0\xa0",Object(s.jsx)("p",{children:"Select Y Value"}),Object(s.jsx)("select",{id:"y-cat",children:"Select Y Value"}),"\xa0\xa0",Object(s.jsx)("p",{children:"Select Color Code"}),Object(s.jsx)("select",{id:"color-cat"})]}),Object(s.jsx)("div",{id:"chartArea",style:{overflow:"auto",height:"500px",width:"800px",display:"flex"},children:Object(s.jsxs)("svg",{ref:t,children:[Object(s.jsx)("g",{id:"x-axis"}),Object(s.jsx)("g",{id:"y-axis"})]})}),Object(s.jsx)("div",{id:"tableArea",style:{align:"center",display:"flex",padding:"20px",margin:"20px"}})]})});a(164),a(165);var p=function(e){var t=Object(r.useState)(""),a=Object(d.a)(t,2),n=a[0],c=a[1],i=Object(r.useState)(""),o=Object(d.a)(i,2),u=o[0],v=o[1],p=Object(r.useState)([]),b=Object(d.a)(p,2),j=b[0],g=b[1];Object(r.useEffect)((function(){h.c("%PUBLIC_URL%/data/clean_data.csv").then((function(e){g(e)}))}),[]);var x=Object(r.useState)(j),m=Object(d.a)(x,2),y=m[0],O=m[1],A=Object(r.useState)(j),S=Object(d.a)(A,2),w=S[0],P=S[1],_=Object(r.useState)(j),N=Object(d.a)(_,2),L=N[0],T=N[1];return Object(r.useEffect)((function(){h.c("%PUBLIC_URL%/data/clean_data.csv").then((function(e){if(e[n]){console.log(e[n]);var t=e.columns,a=e.map((function(a){var r=0;return t.forEach((function(t){a[t]===e[n][t]&&a[t]&&(r+=1)})),{row:a,value:r}}));return a.sort((function(e,t){return e.value<t.value})),P(a.slice(0,100)),console.log(w),w}}))}),[n]),Object(s.jsxs)(l.a.Fragment,{children:[Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("input",{type:"search",value:u,onChange:function(e){var t=e.target.value,a={id:999999,Title:"Select an option",Platform:"",Year:""};if(""!==t){var r=j.filter((function(e){return e.Title.toLowerCase().startsWith(t.toLowerCase())}));if(T(r),L.length>0){var l=L.slice(0,10);l.splice(0,0,a),O(l)}}else if(T(j),L.length>0){var n=L.slice(0,10);n.splice(0,0,a),O(n)}v(t)},className:"input",placeholder:"\uf002 Search for a Game"}),Object(s.jsx)("div",{className:"game-list",children:Object(s.jsx)("select",{value:n,onChange:function(e){console.log("Game Selected: "+e.target.value),c(e.target.value)},className:"game-dropdown",children:y&&y.length>0?y.map((function(e){return Object(s.jsxs)("option",{className:"game",value:e.id,children:[e.Title,", ",e.Platform,", ",e.Year]},e.id)})):Object(s.jsx)("option",{})})})]}),w&&w.length>0?Object(s.jsx)(f,{dataSet:w}):Object(s.jsx)("h1",{children:"Select a Game"})]})};var b=function(){return Object(s.jsx)("div",{id:"container",children:Object(s.jsx)(p,{})})};a(166);var j=function(){return Object(s.jsxs)("div",{className:"about",children:[Object(s.jsxs)("div",{className:"intro",children:[Object(s.jsx)("h1",{children:"Introduction"}),Object(s.jsx)("p",{children:"With the growth of the video industry and the wide choice of gaming options, it may be overwhelming for video game novices and even video game enthusiasts to find video games that they like. Utilizing datasets from Metacritic and video game sales, we developed an algorithm that allows users to search the title of their favorite video games and generate recommendations based on their most preferred features, such as genre, critic score, and sales."})]}),Object(s.jsxs)("div",{className:"data",children:[Object(s.jsx)("p",{children:"Datasets from Kaggle:"}),Object(s.jsx)("a",{href:"https://drive.google.com/file/d/1rxdKOFH5RDHmLZjnA4h9yimVebv-nSpt/view?usp=sharing",children:"video_games.csv"}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:"https://drive.google.com/file/d/1kRfRqaf8m6OPksgCFHvUftjr_h-WGeHq/view?usp=sharing",children:"Video_Games_Sales_as_at_22_Dec_2016.csv"}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:"https://drive.google.com/file/d/10mjBYAN7r04ktLkDDlziiIEvjIOSxvUO/view?usp=sharing",children:"Metacritic_games_of_all_time.csv"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"The dataset that we integrated ourselves:"}),Object(s.jsx)("a",{href:"https://drive.google.com/file/d/1xZKWRaKUQ1vyjfv-ljts-G2pWLPfspRu/view?usp=sharing",children:"clean_data.csv"})]})]})};var g=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/",element:Object(s.jsx)(b,{})}),Object(s.jsx)(u.a,{path:"/about",element:Object(s.jsx)(j,{})})]})]})};c.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(i.a,{children:Object(s.jsx)(g,{})})}),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.d25d301d.chunk.js.map