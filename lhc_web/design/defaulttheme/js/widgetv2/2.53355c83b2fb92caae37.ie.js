(window.webpackJsonpLHCReactAPP=window.webpackJsonpLHCReactAPP||[]).push([[2],{500:function(e,t,i){"use strict";i.r(t);var a=i(135),s=i.n(a),n=i(191),r=i.n(n),o=i(5),c=i.n(o),l=i(6),u=i.n(l),d=i(9),h=i.n(d),p=i(10),m=i.n(p),f=i(2),g=i.n(f),v=i(11),w=i.n(v),b=i(12),y=i.n(b),R=i(0),k=i.n(R);function U(){function e(e,t){return new Promise((i,a)=>{const s=new XMLHttpRequest;s.open("GET",e),s.responseType="arraybuffer",s.onload=()=>{i(WebAssembly.instantiate(s.response,t))},s.onerror=a,s.send()})}let t=null,i=5242880;function a(e){const t=i;return i+=e,t}function s(e){postMessage({type:"internal-error",data:e})}let n=null,r=null,o=null;onmessage=i=>{const c=i.data;switch(c.type){case"init":const{wasmURL:i,shimURL:u}=c.data;Promise.resolve().then(()=>(self.WebAssembly&&!function(){const e=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),t=new WebAssembly.Module(e);return 0!==new WebAssembly.Instance(t,{}).exports.test(4)}()&&delete self.WebAssembly,self.WebAssembly||importScripts(u),t=new WebAssembly.Memory({initial:256,maximum:256}),{memory:t,pow:Math.pow,exit:s,powf:Math.pow,exp:Math.exp,sqrtf:Math.sqrt,cos:Math.cos,log:Math.log,sin:Math.sin,sbrk:a})).then(t=>function(t,i){if(!WebAssembly.instantiateStreaming)return e(t,i);const a=fetch(t,{credentials:"same-origin"});return WebAssembly.instantiateStreaming(a,i).catch(a=>{if(a.message&&a.message.indexOf("Argument 0 must be provided and must be a Response")>0)return e(t,i);throw a})}(i,{env:t})).then(e=>{n=e.instance.exports,postMessage({type:"init",data:null})}).catch(e=>{postMessage({type:"init-error",data:e.toString()})});break;case"start":if(!function(e){if(r=n.vmsg_init(e),!r)return!1;const i=new Uint32Array(t.buffer,r,1)[0];return o=new Float32Array(t.buffer,i),!0}(c.data))return postMessage({type:"error",data:"vmsg_init"});break;case"data":if(l=c.data,o.set(l),!(n.vmsg_encode(r,l.length)>=0))return postMessage({type:"error",data:"vmsg_encode"});break;case"stop":const d=function(){if(n.vmsg_flush(r)<0)return null;const e=new Uint32Array(t.buffer,r+4,1)[0],i=new Uint32Array(t.buffer,r+8,1)[0],a=new Uint8Array(t.buffer,e,i),s=new Blob([a],{type:"audio/mpeg"});return n.vmsg_free(r),r=null,o=null,s}();if(!d)return postMessage({type:"error",data:"vmsg_flush"});postMessage({type:"stop",data:d})}var l}}class L{constructor(e={},t=null){this.wasmURL=new URL(e.wasmURL||"/static/js/vmsg.wasm",location).href,this.shimURL=new URL(e.shimURL||"/static/js/wasm-polyfill.js",location).href,this.onStop=t,this.pitch=e.pitch||0,this.stream=null,this.audioCtx=null,this.gainNode=null,this.pitchFX=null,this.encNode=null,this.worker=null,this.workerURL=null,this.blob=null,this.blobURL=null,this.resolve=null,this.reject=null,Object.seal(this)}close(){this.encNode&&this.encNode.disconnect(),this.encNode&&(this.encNode.onaudioprocess=null),this.stream&&this.stopTracks(),this.audioCtx&&this.audioCtx.close(),this.worker&&this.worker.terminate(),this.workerURL&&URL.revokeObjectURL(this.workerURL),this.blobURL&&URL.revokeObjectURL(this.blobURL)}initAudio(){return(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?function(e){return navigator.mediaDevices.getUserMedia(e)}:function(e){const t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(i,a){t.call(navigator,e,i,a)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))})({audio:!0}).then(e=>{this.stream=e;const t=this.audioCtx=new(window.AudioContext||window.webkitAudioContext),i=t.createMediaStreamSource(e),a=this.gainNode=(t.createGain||t.createGainNode).call(t);a.gain.value=1,i.connect(a);const s=this.pitchFX=new x(t);s.setPitchOffset(this.pitch);const n=this.encNode=(t.createScriptProcessor||t.createJavaScriptNode).call(t,0,1,1);s.output.connect(n),a.connect(0===this.pitch?n:s.input)})}initWorker(){if(!this.stream)throw new Error("missing audio initialization");const e=new Blob(["(",U.toString(),")()"],{type:"application/javascript"}),t=this.workerURL=URL.createObjectURL(e),i=this.worker=new Worker(t),{wasmURL:a,shimURL:s}=this;return i.postMessage({type:"init",data:{wasmURL:a,shimURL:s}}),new Promise((e,t)=>{i.onmessage=i=>{const a=i.data;switch(a.type){case"init":e();break;case"init-error":t(new Error(a.data));break;case"error":case"internal-error":console.error("Worker error:",a.data),this.reject&&this.reject(a.data);break;case"stop":this.blob=a.data,this.blobURL=URL.createObjectURL(a.data),this.onStop&&this.onStop(),this.resolve&&this.resolve(this.blob)}}})}init(){return this.initAudio().then(this.initWorker.bind(this))}startRecording(){if(!this.stream)throw new Error("missing audio initialization");if(!this.worker)throw new Error("missing worker initialization");this.blob=null,this.blobURL&&URL.revokeObjectURL(this.blobURL),this.blobURL=null,this.resolve=null,this.reject=null,this.worker.postMessage({type:"start",data:this.audioCtx.sampleRate}),this.encNode.onaudioprocess=e=>{const t=e.inputBuffer.getChannelData(0);this.worker.postMessage({type:"data",data:t})},this.encNode.connect(this.audioCtx.destination)}stopRecording(){if(!this.stream)throw new Error("missing audio initialization");if(!this.worker)throw new Error("missing worker initialization");return this.encNode.disconnect(),this.encNode.onaudioprocess=null,this.stopTracks(),this.worker.postMessage({type:"stop",data:null}),new Promise((e,t)=>{this.resolve=e,this.reject=t})}stopTracks(){this.stream.getTracks&&this.stream.getTracks().forEach(e=>e.stop())}}var G=L;function N(e,t,i,a){for(var s=t*e.sampleRate,n=s+(t-2*i)*e.sampleRate,r=e.createBuffer(1,n,e.sampleRate),o=r.getChannelData(0),c=0;c<s;++c)o[c]=a?(s-c)/n:c/s;for(c=s;c<n;++c)o[c]=0;return r}function x(e){this.context=e;var t=(e.createGain||e.createGainNode).call(e),i=(e.createGain||e.createGainNode).call(e);this.input=t,this.output=i;var a=e.createBufferSource(),s=e.createBufferSource(),n=e.createBufferSource(),r=e.createBufferSource();this.shiftDownBuffer=N(e,.1,.05,!1),this.shiftUpBuffer=N(e,.1,.05,!0),a.buffer=this.shiftDownBuffer,s.buffer=this.shiftDownBuffer,n.buffer=this.shiftUpBuffer,r.buffer=this.shiftUpBuffer,a.loop=!0,s.loop=!0,n.loop=!0,r.loop=!0;var o=(e.createGain||e.createGainNode).call(e),c=(e.createGain||e.createGainNode).call(e),l=(e.createGain||e.createGainNode).call(e);l.gain.value=0;var u=(e.createGain||e.createGainNode).call(e);u.gain.value=0,a.connect(o),s.connect(c),n.connect(l),r.connect(u);var d=(e.createGain||e.createGainNode).call(e),h=(e.createGain||e.createGainNode).call(e),p=(e.createDelay||e.createDelayNode).call(e),m=(e.createDelay||e.createDelayNode).call(e);o.connect(d),c.connect(h),l.connect(d),u.connect(h),d.connect(p.delayTime),h.connect(m.delayTime);var f=e.createBufferSource(),g=e.createBufferSource(),v=function(e,t,i){for(var a=t*e.sampleRate,s=a+(t-2*i)*e.sampleRate,n=e.createBuffer(1,s,e.sampleRate),r=n.getChannelData(0),o=i*e.sampleRate,c=o,l=a-o,u=0;u<a;++u){var d;d=u<c?Math.sqrt(u/o):u>=l?Math.sqrt(1-(u-l)/o):1,r[u]=d}for(u=a;u<s;++u)r[u]=0;return n}(e,.1,.05);f.buffer=v,g.buffer=v,f.loop=!0,g.loop=!0;var w=(e.createGain||e.createGainNode).call(e),b=(e.createGain||e.createGainNode).call(e);w.gain.value=0,b.gain.value=0,f.connect(w.gain),g.connect(b.gain),t.connect(p),t.connect(m),p.connect(w),m.connect(b),w.connect(i),b.connect(i);var y=e.currentTime+.05,R=y+.1-.05;a.start(y),s.start(R),n.start(y),r.start(R),f.start(y),g.start(R),this.mod1=a,this.mod2=s,this.mod1Gain=o,this.mod2Gain=c,this.mod3Gain=l,this.mod4Gain=u,this.modGain1=d,this.modGain2=h,this.fade1=f,this.fade2=g,this.mix1=w,this.mix2=b,this.delay1=p,this.delay2=m,this.setDelay(.1)}x.prototype.setDelay=function(e){this.modGain1.gain.setTargetAtTime(.5*e,0,.01),this.modGain2.gain.setTargetAtTime(.5*e,0,.01)},x.prototype.setPitchOffset=function(e){e>0?(this.mod1Gain.gain.value=0,this.mod2Gain.gain.value=0,this.mod3Gain.gain.value=1,this.mod4Gain.gain.value=1):(this.mod1Gain.gain.value=1,this.mod2Gain.gain.value=1,this.mod3Gain.gain.value=0,this.mod4Gain.gain.value=0),this.setDelay(.1*Math.abs(e))};var M=i(25),S=new G({wasmURL:window.lhcChat.staticJS.chunk_js+"/vmsg.8c4a15f2.wasm",shimURL:"https://unpkg.com/wasm-polyfill.js@0.2.0/wasm-polyfill.js"}),P=function(e){function t(e){var i;return c()(this,t),i=h()(this,m()(t).call(this,e)),y()(g()(i),"state",{isLoading:!1,isRecording:!1,isPlaying:!1,recording:null,audioDuration:0,currentTime:0}),i.startRecording=i.startRecording.bind(g()(i)),i.stopRecording=i.stopRecording.bind(g()(i)),i.playRecord=i.playRecord.bind(g()(i)),i.stopPlayRecord=i.stopPlayRecord.bind(g()(i)),i.sendRecord=i.sendRecord.bind(g()(i)),i.durationInterval=null,i.playInterval=null,i}var i,a;return w()(t,e),u()(t,[{key:"startRecording",value:(a=r()(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.stopPlayRecord(),this.setState({isLoading:!0,audioDuration:0,recording:null,isPlaying:!1,currentTime:0}),e.prev=2,e.next=5,S.initAudio();case 5:return e.next=7,S.initWorker();case 7:S.startRecording(),this.setState({isLoading:!1,isRecording:!0}),this.durationInterval=setInterval((function(){t.setState({audioDuration:t.state.audioDuration+1}),t.state.audioDuration>=t.props.maxSeconds&&t.stopRecording()}),1e3),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),alert("Sorry but voice messages are not supported on your browser!"),this.setState({isLoading:!1});case 16:case"end":return e.stop()}}),e,this,[[2,12]])}))),function(){return a.apply(this,arguments)})},{key:"stopRecording",value:(i=r()(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.stopRecording();case 2:t=e.sent,this.audio=new Audio,this.audio.src=URL.createObjectURL(t),this.setState({isLoading:!1,isRecording:!1,recording:t}),clearInterval(this.durationInterval);case 7:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"playRecord",value:function(){var e=this;this.audio.currentTime=0,this.audio.play(),this.setState({isPlaying:!0}),this.playInterval=setInterval((function(){e.setState({currentTime:Math.round(e.audio.currentTime)}),(e.audio.ended||e.audio.paused)&&e.stopPlayRecord()}),1e3)}},{key:"stopPlayRecord",value:function(){this.state.isPlaying&&(clearInterval(this.playInterval),this.audio.currentTime=0,this.audio.pause(),this.setState({isPlaying:!1,currentTime:0}))}},{key:"sendRecord",value:function(){var e=this,t=this.props.t;this.props.progress(t("file.uploading"));var i=new XMLHttpRequest,a=new FormData;a.append("files",this.state.recording,"record.mp3"),i.open("POST",this.props.base_url+"/file/uploadfile/"+this.props.chat_id+"/"+this.props.hash),i.upload.addEventListener("load",(function(t){e.props.progress("100%"),e.props.onCompletion(),e.props.cancel()})),i.send(a)}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.stopPlayRecord(),this.state.isRecording&&S.stopRecording()}},{key:"pad",value:function(e){return e<10?"0"+e:e}},{key:"render",value:function(){var e=this,t=this.state,i=(t.isLoading,t.isRecording),a=t.recording,s=t.isPlaying,n=this.props.t;return k.a.createElement("div",{className:"text-nowrap"},k.a.createElement("i",{className:"material-icons pointer text-danger fs25",title:n("voice.cancel_voice_message"),onClick:function(){return e.props.cancel()}},"close"),!i&&k.a.createElement("i",{className:"material-icons fs25 pointer text-danger mr-0",title:n("voice.record_voice_message"),onClick:this.startRecording},"fiber_manual_record"),i&&k.a.createElement("i",{className:"material-icons fs25 pointer text-danger mr-0",title:n("voice.stop_recording"),onClick:this.stopRecording},"stop"),a&&!1===s&&k.a.createElement("i",{className:"material-icons pointer text-success mr-0 fs25",title:n("voice.play_recorded"),onClick:this.playRecord},"play_arrow"),a&&!0===s&&k.a.createElement("i",{className:"material-icons pointer text-success mr-0 fs25",title:n("voice.stop_playing_recorded"),onClick:this.stopPlayRecord},"stop"),k.a.createElement("span",{className:"fs12 pl-1 pr-1"},i?"":s?this.pad(this.state.currentTime)+":":"",i||!a?this.props.maxSeconds-this.state.audioDuration+" s.":this.pad(this.state.audioDuration)+(s?"":"s.")),a&&k.a.createElement("i",{className:"material-icons pointer text-success mr-0 fs25",title:n("voice.send"),onClick:this.sendRecord},"send"))}}]),t}(R.PureComponent);t.default=Object(M.b)()(P)}}]);