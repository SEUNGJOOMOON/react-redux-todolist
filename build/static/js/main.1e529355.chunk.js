(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(t,e,n){t.exports=n(32)},32:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(18),i=n(0),r=n.n(i),c=n(9),u=n.n(c),l=n(2),d="ADD_TODO",p="DELETE_TODO",s="CHANGE_STATE_TODO";var h=n(4),f=n(5),b=n(7),m=n(6),v=n(8),g=n(3);function O(){var t=Object(o.a)(["\n  width:200px;\n  height:25px;\n  text-align:left;\n  margin-left: -35px;\n  color: blue;\n"]);return O=function(){return t},t}function k(){var t=Object(o.a)(["\n  width:200px;\n  height:25px;\n  text-align:left;\n  margin-left: -35px;\n  color: red;\n"]);return k=function(){return t},t}function C(){var t=Object(o.a)(["\n  width:200px;\n  height:25px;\n  text-align:left;\n  margin-left: -35px;\n"]);return C=function(){return t},t}var E=l.a.li(C()),j=l.a.li(k()),x=l.a.li(O()),T=function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(b.a)(this,Object(m.a)(e).call(this,t)))._onDelete=n._onDelete.bind(Object(g.a)(n)),n._onChangeState=n._onChangeState.bind(Object(g.a)(n)),n}return Object(v.a)(e,t),Object(f.a)(e,[{key:"_onDelete",value:function(t){t.preventDefault(),(0,this.props.deleteTodo)(t.target.id)}},{key:"_onChangeState",value:function(t){t.preventDefault(),(0,this.props.changeStateTodo)(t.target.getAttribute("state"),t.target.id)}},{key:"render",value:function(){var t=this.props.todo.state;return"complete"===t?r.a.createElement(j,null,this.props.todo.text,r.a.createElement("button",{id:this.props.todo.id,onClick:this._onDelete},"delete"),r.a.createElement("button",{id:this.props.todo.id,onClick:this._onChangeState,state:"uncomplete"},"cancel"),r.a.createElement("button",{id:this.props.todo.id,onClick:this._onChangeState,state:"keep"},"keep")):"keep"===t?r.a.createElement(x,null,this.props.todo.text,r.a.createElement("button",{id:this.props.todo.id,onClick:this._onDelete},"delete"),r.a.createElement("button",{id:this.props.todo.id,onClick:this._onChangeState,state:"complete"},"complete"),r.a.createElement("button",{id:this.props.todo.id,onClick:this._onChangeState,state:"uncomplete"},"cancel")):r.a.createElement(E,null,this.props.todo.text,r.a.createElement("button",{id:this.props.todo.id,onClick:this._onDelete},"delete"),r.a.createElement("button",{id:this.props.todo.id,onClick:this._onChangeState,state:"complete"},"complete"),r.a.createElement("button",{id:this.props.todo.id,onClick:this._onChangeState,state:"keep"},"keep"))}}]),e}(i.Component);function _(){var t=Object(o.a)(["\n  list-style: none;\n"]);return _=function(){return t},t}var D=l.a.ul(_()),y=function(t){function e(){return Object(h.a)(this,e),Object(b.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(f.a)(e,[{key:"render",value:function(){for(var t=this.props.todos,e=[],n=0;n<t.length;n++)t[n].id=n,e.push(r.a.createElement(T,{key:n,todo:t[n],deleteTodo:this.props.deleteTodo,changeStateTodo:this.props.changeStateTodo}));return r.a.createElement(D,null,e)}}]),e}(i.Component);function S(){var t=Object(o.a)(["\n    \n  "]);return S=function(){return t},t}var w=l.a.button(S()),A=function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(b.a)(this,Object(m.a)(e).call(this,t))).onClick=n.onClick.bind(Object(g.a)(n)),n}return Object(v.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){this.inputTodo=document.querySelector("#inputTodo")}},{key:"onClick",value:function(t){(t.preventDefault(),this.inputTodo.value)?((0,this.props.addTodo)(this.inputTodo.value),this.inputTodo.value=""):alert("please input value")}},{key:"render",value:function(){return r.a.createElement("form",{id:"addTodo"},r.a.createElement("input",{id:"inputTodo",placeholder:"Enter todo"}),r.a.createElement(w,{type:"submit",onClick:this.onClick},"ADD"))}}]),e}(i.Component);function N(){var t=Object(o.a)(["\n  width:500px;\n  min-height: 700px;\n  margin:0 auto;\n"]);return N=function(){return t},t}var q=l.a.div(N()),J=Object(a.a)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:var n={id:e.id,text:e.text,state:"uncomplete"};return t.concat(n);case p:return t.filter(function(t){var n=t.id;return Number(n)!==Number(e.id)});case s:var o={id:e.id,text:t[e.id].text,state:e.state};return t.splice(e.id,1,o),t;default:return t}}),G=function(){return u.a.render(r.a.createElement(q,null,r.a.createElement(A,{addTodo:function(t){J.dispatch(function(t){return{type:d,text:t}}(t))}}),r.a.createElement(y,{todos:J.getState(),deleteTodo:function(t){J.dispatch({type:p,id:t})},changeStateTodo:function(t,e){J.dispatch(function(t,e){return{type:s,state:t,id:e}}(t,e))}})),document.querySelector("#root"))};G(),J.subscribe(G)}},[[21,1,2]]]);
//# sourceMappingURL=main.1e529355.chunk.js.map