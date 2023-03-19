(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("@vue/reactivity"),require("@preact/signals-core")):typeof define=="function"&&define.amd?define(["exports","@vue/reactivity","@preact/signals-core"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.litStores={},t.Vue,t.PreactSignals))})(this,function(t,e,n){"use strict";var c=Object.defineProperty;var a=(t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var s=(t,e,n)=>(a(t,typeof e!="symbol"?e+"":e,n),n);class r{constructor(i,o){s(this,"host");s(this,"store");s(this,"value");s(this,"unbind");(this.host=i).addController(this),this.store=o}hostConnected(){this.unbind=this.store.listen(i=>{this.value=i,this.host.requestUpdate()}),this.value=this.store.get()}hostDisconnected(){this.unbind()}}class u{constructor(i,o){s(this,"host");s(this,"value");s(this,"store");s(this,"unbind");(this.host=i).addController(this),this.store=o}hostConnected(){let i=e.effect(()=>{this.value=e.unref(this.store),this.host.requestUpdate()});this.unbind=()=>e.stop(i),this.value=e.unref(this.store)}hostDisconnected(){this.unbind()}}class d{constructor(i,o){s(this,"host");s(this,"value");s(this,"store");s(this,"unbind");(this.host=i).addController(this),this.store=o}hostConnected(){this.unbind=n.effect(()=>{this.value=this.store.value,this.host.requestUpdate()})}hostDisconnected(){this.unbind()}}t.LitUseNanostores=r,t.LitUsePreactSignals=d,t.LitUseVueReactivity=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});