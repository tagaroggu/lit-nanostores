"use strict";var o=Object.defineProperty;var n=(e,t,s)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var i=(e,t,s)=>(n(e,typeof t!="symbol"?t+"":t,s),s);const r=require("@preact/signals-core");class h{constructor(t,s){i(this,"host");i(this,"value");i(this,"store");i(this,"unbind");(this.host=t).addController(this),this.store=s}hostConnected(){this.unbind=r.effect(()=>{this.value=this.store.value,this.host.requestUpdate()})}hostDisconnected(){this.unbind()}}module.exports=h;