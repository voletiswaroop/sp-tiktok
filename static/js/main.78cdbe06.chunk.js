(this.webpackJsonpsp_tiktok=this.webpackJsonpsp_tiktok||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(9),c=t.n(s),r=t(1),i=t(2),o=t(4),m=t(3),u=(t(17),t(18),t(19),t.p+"static/media/1.496d2ac0.jpg"),f=t.p+"static/media/2.941e25b1.jpg",p=t(6),E=(t(20),t.p+"static/media/profile.e32e68cc.jpg"),d=t(10),N=t(12),v=(t(21),[{name:"Swaroop",comment:"Lorem ipsum",time:"1w"},{name:"Voleti",comment:"hahaha",time:"2w"},{name:"Gupta",comment:"hahaha",time:"2m"},{name:"SP",comment:"hahaha",time:"1hr"},{name:"Tiktok",comment:"hahaha",time:"2days"},{name:"User",comment:"hahaha",time:"1m"},{name:"Unkown",comment:"hahaha",time:"1min"}]),h=function(){var e=l.a.useState(v),a=Object(p.a)(e,2),t=a[0],n=a[1],s=Array.from(t).map((function(e,a){return l.a.createElement("div",{className:"comment-details",key:a},l.a.createElement("i",{className:"fas fa-user-circle"}),l.a.createElement("div",{className:"comment-group"},l.a.createElement("p",{className:"user-name"},e.name?e.name:"Author"),l.a.createElement("p",{className:"user-comment"},e.comment),l.a.createElement("p",{className:"comment-date"},e.time?e.time:"Just now")))}));return l.a.createElement("section",{className:"comments-wrapper"},l.a.createElement("p",{className:"comments-count"},t.length," comments ",l.a.createElement("i",{className:"fas fa-times close-comments",onClick:function(e){return function(e){e.currentTarget.closest(".comments-wrapper").classList.remove("active-comments-widget")}(e)}})),l.a.createElement("div",{className:"comments-container"},s," "),l.a.createElement("div",{className:"add-comment"},l.a.createElement("input",{type:"text",placeholder:"Say something"}),l.a.createElement("i",{className:"fas fa-paper-plane",onClick:function(e){return function(e){n([Object(d.a)({},"name",e.target.previousSibling.value)].concat(Object(N.a)(t))),e.target.previousSibling.value=""}(e)}}),l.a.createElement("i",{className:"fas fa-at"}),l.a.createElement("i",{className:"far fa-smile"})))},w=(t(22),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={selected:n.props.selected||0},n}return Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({selected:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"tabs-wrapper"},l.a.createElement("ul",{className:"tabs-heading"},this.props.children.map((function(a,t){var n=t==e.state.selected?"selected":"";return l.a.createElement("li",{className:n,key:t,onClick:e.handleChange.bind(e,t)},l.a.createElement("i",{className:a.props.dataIcon})," ",a.props.title," ")}))),l.a.createElement("div",{className:"tabs-content"},this.props.children[this.state.selected]))}}]),t}(n.Component)),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,this.props.children)}}]),t}(n.Component),k=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"toggleUserProfile",value:function(e){e.currentTarget.closest(".nonloggedinuser-profile-wrapper").classList.remove("show-user-profile")}},{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:"nonloggedinuser-profile-wrapper"},l.a.createElement("div",{className:"header"},l.a.createElement("i",{className:"fas fa-chevron-left",onClick:function(a){return e.toggleUserProfile(a)}}),l.a.createElement("p",{className:"user-name"},"Swaroop Gupta Voleti"),l.a.createElement("i",{className:"fas fa-ellipsis-h"})),l.a.createElement("div",{className:"user-details"},l.a.createElement("img",{src:E,alt:"Swaroop gupta voleti"}),l.a.createElement("p",{className:"user-info"},"@swaroopvoleti"),l.a.createElement("p",{className:"user-videos-count"},l.a.createElement("i",{className:"fas fa-check-circle"}),"Popular creator"),l.a.createElement("div",{className:"profile-followers-details"},l.a.createElement("p",{className:"user-following"},l.a.createElement("span",{className:"count"},"20"),"Following"),l.a.createElement("p",{className:"user-followers"},l.a.createElement("span",{className:"count"},"15.12m"),"Followers"),l.a.createElement("p",{className:"user-total-likes"},l.a.createElement("span",{className:"count"},"15.20m"),"Likes")),l.a.createElement("div",{className:"profile-settings"},l.a.createElement("div",{className:"edit-profile"},"Message"),l.a.createElement("i",{className:"far fa-bookmark"}),l.a.createElement("i",{className:"fas fa-user-check"}),l.a.createElement("i",{className:"fab fa-instagram"}),l.a.createElement("i",{className:"fab fa-youtube"})),l.a.createElement("div",{className:"about-user"},"Traveller ",l.a.createElement("i",{className:"fas fa-plane-departure"})," visit my ",l.a.createElement("a",{href:"https://voletiswaroop.github.io/"},"portfolio"))),l.a.createElement("div",{className:"user-video-gallery"},l.a.createElement(w,{selected:0},l.a.createElement(g,{dataIcon:"fas fa-photo-video",title:""},"Videos Gallery"),l.a.createElement(g,{dataIcon:"far fa-kiss-wink-heart",title:""},"Liked Videos"))))}}]),t}(n.Component),b=function(){var e=l.a.useState(1520),a=Object(p.a)(e,2),t=a[0],n=a[1],s=l.a.useState(!1),c=Object(p.a)(s,2);c[0],c[1];return l.a.createElement("aside",{className:"tiktok-moreinfo-wrapper"},l.a.createElement("div",{className:"tiktok-moreinfo"},l.a.createElement("span",{className:"profile",onClick:function(e){return function(e){e.currentTarget.closest(".tiktok-moreinfo").nextSibling.nextSibling.classList.add("show-user-profile")}(e)}},l.a.createElement("img",{className:"profilepic",src:E,alt:"User profile picture"}),l.a.createElement("i",{className:"fas fa-plus-circle"})),l.a.createElement("span",{className:"likes",onClick:function(){document.getElementsByClassName("fa-heart")[0].classList.contains("liked")?(n(t-1),document.getElementsByClassName("fa-heart")[0].classList.remove("liked")):(n(t+1),document.getElementsByClassName("fa-heart")[0].classList.add("liked"))}},l.a.createElement("i",{className:"fas fa-heart"}),t),l.a.createElement("span",{className:"comments",onClick:function(e){return function(e){e.currentTarget.closest(".tiktok-moreinfo").nextSibling.classList.add("active-comments-widget")}(e)}},l.a.createElement("i",{className:"fas fa-comment-dots"}),"21"),l.a.createElement("span",{className:"share"},l.a.createElement("i",{className:"fas fa-share"}),"21")),l.a.createElement(h,null),l.a.createElement(k,null),l.a.createElement("div",{className:"share-wrapper"}))},y=(t(23),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"user-track-wrapper"},l.a.createElement("div",{className:"user-track-container"},l.a.createElement("p",{className:"user-info"},"@swaroopvoleti"),l.a.createElement("p",{className:"video-desc"},"#dance #slowmotion"),l.a.createElement("span",{className:"track-info"},l.a.createElement("i",{className:"fas fa-music"}),l.a.createElement("marquee",{scrollamount:"4",className:"track-name"},"ButtaBomma Buttab... Sound-by SP..."))),l.a.createElement("i",{className:"fas fa-compact-disc"}))}}]),t}(n.Component)),j=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("span",null,"Following |")," ",l.a.createElement("span",{className:"active"}," For You")),l.a.createElement("section",{className:"tiktok-player-wrapper"},l.a.createElement("div",{className:"media-wrapper"},l.a.createElement("div",{className:"media-container"},l.a.createElement("img",{src:u})),l.a.createElement(b,null),l.a.createElement(y,null)),l.a.createElement("div",{className:"media-wrapper"},l.a.createElement("div",{className:"media-container"},l.a.createElement("img",{src:f})),l.a.createElement(b,null),l.a.createElement(y,null))))}}]),t}(n.Component),O=(t(24),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"loggedinuser-profile-wrapper"},l.a.createElement("div",{className:"header"},l.a.createElement("i",{className:"fas fa-user-plus"}),l.a.createElement("p",{className:"user-name"},"Swaroop Gupta Voleti",l.a.createElement("i",{className:"fas fa-caret-down"})),l.a.createElement("i",{className:"fas fa-ellipsis-v"})),l.a.createElement("div",{className:"user-details"},l.a.createElement("img",{src:E,alt:"Swaroop gupta voleti"}),l.a.createElement("p",{className:"user-info"},"@swaroopvoleti"),l.a.createElement("p",{className:"user-videos-count"},"21 Video"),l.a.createElement("div",{className:"profile-followers-details"},l.a.createElement("p",{className:"user-following"},l.a.createElement("span",{className:"count"},"20")," Following"),l.a.createElement("p",{className:"user-followers"},l.a.createElement("span",{className:"count"},"1512")," Followers"),l.a.createElement("p",{className:"user-total-likes"},l.a.createElement("span",{className:"count"},"1520")," Likes")),l.a.createElement("div",{className:"profile-settings"},l.a.createElement("div",{className:"edit-profile"},"Edit profile"),l.a.createElement("i",{className:"far fa-bookmark"}))),l.a.createElement("div",{className:"user-video-gallery"},l.a.createElement(w,{selected:0},l.a.createElement(g,{dataIcon:"fas fa-photo-video",title:""},"Videos Gallery"),l.a.createElement(g,{dataIcon:"far fa-kiss-wink-heart",title:""},"Liked Videos"))))}}]),t}(n.Component)),S=(t(25),{Today:[{name:"Swaroop",notification:"Started following you",time:"Just Now",status:"Follow"},{name:"Pravallika",comment:"Started following you",time:"Today",status:"Following"}],Yesterday:[{name:"Tiktok Team",notification:"Started following you",time:"1d",status:"Follow"}],"This week":[{name:"Gutpa & Patnam",notification:"Watched your profile",time:"3d",status:"Follow"}],Ealier:[{name:"Voleti",notification:"Started following you",time:"6w",status:"Follow"},{name:"Lorem",comment:"Started following you",time:"5w",status:"Following"},{name:"Gupta",notification:"Started following you",time:"5w",status:"Follow"},{name:"Ipsum",comment:"Started following you",time:"4w",status:"Following"},{name:"Author",notification:"Started following you",time:"4w",status:"Follow"},{name:"New user",comment:"Started following you",time:"4w",status:"Following"}]}),F=function(){var e=Object.entries(S).map((function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"notification-date",key:a},e[0]),"Ealier"===e[0]?l.a.createElement("div",{className:"notification-details lives"},l.a.createElement("i",{className:"fas fa-user-circle"}),l.a.createElement("div",{className:"notification-group"},l.a.createElement("p",{className:"user-name"},"Top Lives"),l.a.createElement("p",{className:"user-notification"}," ",l.a.createElement("span",null," 5w"))),l.a.createElement("p",{className:"empty-cell"}),l.a.createElement("i",{className:"fas fa-chevron-right"})):null,Array.from(e[1]).map((function(e,a){return l.a.createElement("div",{className:"notification-details",key:a},l.a.createElement("i",{className:"fas fa-user-circle"}),l.a.createElement("div",{className:"notification-group"},l.a.createElement("p",{className:"user-name"},e.name),l.a.createElement("p",{className:"user-notification"},e.notification,l.a.createElement("span",null," ",e.time))),l.a.createElement("p",{className:"empty-cell"}),l.a.createElement("p",{className:"follow-btn ".concat("Following"===e.status?"following":"")},e.status))})))}));return l.a.createElement("section",{className:"notifications-wrapper"},l.a.createElement("div",{className:"header"},l.a.createElement("p",null),l.a.createElement("p",{className:"user-name"},"Inbox",l.a.createElement("i",{className:"fas fa-caret-down"})),l.a.createElement("i",{className:"fas fa-inbox"})),l.a.createElement("div",{className:"notifications-container",onClick:function(e){return function(e){e.target.classList.contains("follow-btn")&&(e.target.classList.toggle("following"),"Follow"==e.target.innerText?e.target.innerText="Following":"Following"==e.target.innerText&&(e.target.innerText="Follow"))}(e)}},e))},C=(t(26),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"videocreator-wrapper"},"Tap + create your short video Panel is under progress.....")}}]),t}(n.Component)),T=t(11),L=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"tiktok-panel"},l.a.createElement(T.a,{selected:0},l.a.createElement("section",{dataicon:"fas fa-home",title:"Home"},l.a.createElement(j,null)),l.a.createElement("section",{dataicon:"fas fa-search",title:"Discover"},l.a.createElement(j,null)),l.a.createElement("section",{dataicon:"fas fa-plus-square",title:""},l.a.createElement(C,null)),l.a.createElement("section",{dataicon:"fas fa-inbox",title:"Inbox"},l.a.createElement(F,null)),l.a.createElement("section",{dataicon:"fas fa-user",title:"Me"},l.a.createElement(O,null))))}}]),t}(n.Component),x=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("main",{className:"tiktok-wrapper"},l.a.createElement(L,null))}}]),t}(n.Component);t(27);c.a.render(l.a.createElement(x,null),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.78cdbe06.chunk.js.map