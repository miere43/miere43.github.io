var W=Object.defineProperty;var X=(s,t,r)=>t in s?W(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r;var a=(s,t,r)=>(X(s,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const x of o.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&i(x)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();function c(s,t){if(!s)throw new Error(t??"Assertion failed.")}let f,e;function z(){f=document.getElementById("app"),f.oncontextmenu=t=>t.preventDefault();const s=f.getContext("webgl2",{desynchronized:!1,antialias:!0});c(s,"Failed to initialize WebGL 2"),e=s}function B(){return f.width}function u(){return f.height}let P;function O(s){P(s),requestAnimationFrame(O)}function Q(s){P=s,requestAnimationFrame(O)}function y(){const s=e.createBuffer();return c(s,"Failed to create WebGL buffer"),s}function H(){const s=e.createVertexArray();return c(s,"Failed to create WebGL vertex array"),s}function K(s,t){const r=e.getUniformLocation(s,t);return c(r,"Failed to get WebGL uniform location"),r}function q(s,t){const r=e.createProgram();c(r,"Failed to create WebGL program");const i=D(e.VERTEX_SHADER,s),n=D(e.FRAGMENT_SHADER,t);e.attachShader(r,i),e.attachShader(r,n),e.linkProgram(r);const o=e.getProgramInfoLog(r);return o&&o.length>0&&console.log("Program linkage log: "+o),c(e.getProgramParameter(r,e.LINK_STATUS),"Failed to link program"),e.deleteShader(i),e.deleteShader(n),r}function D(s,t){const r=e.createShader(s);c(r,"Failed to create WebGL shader"),e.shaderSource(r,t),e.compileShader(r);const i=e.getShaderInfoLog(r);return i&&i.length>0&&console.log(`Shader compilation log: ${i}

Shader source: ${t}`),c(e.getShaderParameter(r,e.COMPILE_STATUS),"Failed to compile shader"),r}var N=(s=>(s[s.Left=0]="Left",s))(N||{});class M{constructor(){a(this,"downFrame",0)}}const b=new Map,w=new Map;function $(s){let t=b.get(s.code);t||(t=new M,t.downFrame=p,b.set(s.code,t))}function k(s){b.delete(s.code)}function j(s){let t=w.get(s.button);t||(t=new M,t.downFrame=p,w.set(s.button,t))}function J(s){w.delete(s.button)}function Z(){window.addEventListener("keydown",$),window.addEventListener("keyup",k),window.addEventListener("mousedown",j),window.addEventListener("mouseup",J)}function m(s){const t=b.get(s);return(t==null?void 0:t.downFrame)===p}function tt(s){const t=w.get(s);return(t==null?void 0:t.downFrame)===p}const E=[];let A;function V(){const s=e.createTexture();return c(s,"Failed to create WebGL texture"),s}function et(){A=V(),e.bindTexture(e.TEXTURE_2D,A),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,255,255,255])),e.bindTexture(e.TEXTURE_2D,null)}function rt(s){const t=V(),r=new Image;return r.onload=()=>{E.push({texture:t,image:r})},r.src=s,t}function st(){for(const s of E){const t=s.image;e.bindTexture(e.TEXTURE_2D,s.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t.width,t.height,0,e.RGBA,e.UNSIGNED_BYTE,t)}e.bindTexture(e.TEXTURE_2D,null),E.length=0}const it=`#version 300 es\r
\r
layout(location = 0) in vec2 position;\r
layout(location = 1) in vec4 inColor;\r
uniform vec2 viewportSize;\r
\r
out vec4 color;\r
\r
void main() {\r
    gl_Position = vec4(\r
        position.x / (viewportSize.x / 2.0) - 1.0,\r
        position.y / (viewportSize.y / 2.0) - 1.0,\r
        1.0,\r
        1.0\r
    );\r
    color = inColor;\r
}\r
`,nt=`#version 300 es\r
precision highp float;\r
\r
in vec4 color;\r
uniform sampler2D currentTexture;\r
\r
out vec4 outColor;\r
\r
void main() {\r
    outColor = color;\r
}\r
`,L=4,ot=6,R=1024;let d=null,C;function at(){return d||(d=q(it,nt),C=K(d,"viewportSize"),d)}class ct{constructor(){a(this,"vao");a(this,"positionBuffer");a(this,"colorBuffer");a(this,"indexBuffer");a(this,"positions",new Float32Array(L*2*R));a(this,"colors",new Uint32Array(L*R));a(this,"indices",new Uint16Array(ot*R));a(this,"numVertices",0);a(this,"numIndices",0);a(this,"started",!1);this.vao=H(),this.positionBuffer=y(),this.colorBuffer=y(),this.indexBuffer=y(),e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,this.positionBuffer),e.bufferData(e.ARRAY_BUFFER,this.positions.length,e.DYNAMIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,this.colorBuffer),e.bufferData(e.ARRAY_BUFFER,this.colors.length,e.DYNAMIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.UNSIGNED_BYTE,!0,0,0),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices.length,e.DYNAMIC_DRAW),e.bindVertexArray(null)}begin(){c(!this.started),this.started=!0}vertex(t,r,i){let n=this.numVertices*2;this.positions[n++]=t,this.positions[n++]=r,this.colors[this.numVertices]=i,++this.numVertices}colorQuadCorners(t,r,i,n,o=4294967295){c(this.started),this.indices[this.numIndices++]=this.numVertices+0,this.indices[this.numIndices++]=this.numVertices+1,this.indices[this.numIndices++]=this.numVertices+2,this.indices[this.numIndices++]=this.numVertices+1,this.indices[this.numIndices++]=this.numVertices+2,this.indices[this.numIndices++]=this.numVertices+3,this.vertex(t,r,o),this.vertex(t,n,o),this.vertex(i,r,o),this.vertex(i,n,o)}colorQuad(t,r,i,n,o=4294967295){c(this.started),this.colorQuadCorners(t,r,t+i,r+n,o)}end(){c(this.started),e.bindTexture(e.TEXTURE_2D,A),e.bindBuffer(e.ARRAY_BUFFER,this.positionBuffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.positions,0,this.numVertices*2),e.bindBuffer(e.ARRAY_BUFFER,this.colorBuffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.colors,0,this.numVertices),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer),e.bufferSubData(e.ELEMENT_ARRAY_BUFFER,0,this.indices,0,this.numIndices),e.useProgram(at()),e.uniform2f(C,B(),u()),e.bindVertexArray(this.vao),e.drawElements(e.TRIANGLES,this.numIndices,e.UNSIGNED_SHORT,0),e.bindVertexArray(null),e.bindTexture(e.TEXTURE_2D,null),this.numVertices=0,this.numIndices=0,this.started=!1}}function g(){return Math.random()*2**32>>>0}class F{constructor(t,r,i,n){this.a=t,this.b=r,this.c=i,this.d=n,c((t|r|i|n)!==0,"At least one value must be non-zero")}static newRandom(){let t=0,r=0,i=0,n=0;for(;!(t|r|i|n);)t=g(),r=g(),i=g(),n=g();return new F(t,r,i,n)}nextFloat(){let t=this.b<<9,r=this.b*5;return r=(r<<7|r>>>25)*9,this.c^=this.a,this.d^=this.b,this.b^=this.c,this.a^=this.d,this.c^=t,this.d=this.d<<11|this.d>>>21,(r>>>0)/4294967296}nextFloatBetween(t,r){return t+this.nextFloat()*(r-t)}}function ht(s){const t=document.createElement("audio");return t.src=s,t}let G;function ut(){rt("/flappy-bird/test.png"),G=ht("/flappy-bird/score.wav")}class v{constructor(t=0,r=0,i=0,n=0){this.x=t,this.y=r,this.width=i,this.height=n}containsPoint(t,r){return t>=this.x&&t<=this.x+this.width&&r>=this.y&&r<=this.y+this.height}containsRect(t){return this.containsPoint(t.x,t.y)||this.containsPoint(t.x+t.width,t.y)||this.containsPoint(t.x,t.y+t.height)||this.containsPoint(t.x+t.width,t.y+t.height)}}const T=150,lt=-15,h=20;class dt{constructor(){a(this,"y",0);a(this,"vy",0);this.reset()}get x(){return T}reset(){this.y=(u()-h)/2,this.vy=0}calcRect(){return new v(this.x,this.y,h,h)}update(t,r){this.vy+=lt,r&&(this.vy=400);let i=0;return this.y+=this.vy*t,this.y+h>=u()?(this.y=u()-h,this.vy=0):this.y<=0&&(this.y=0,this.vy=0,i=1),i}draw(t){t.colorQuad(this.x,this.y,h,h)}}const U=180,ft=-100,pt=100;var l=(s=>(s[s.No=0]="No",s[s.Yes=1]="Yes",s))(l||{});class _{constructor(t,r){a(this,"x",0);a(this,"gapOffsetY",0);a(this,"scored",!1);this.x=t,this.reset(r)}get vx(){return-180}get centerX(){return this.x+this.width/2}get width(){return 70}containsRect(t){for(const r of this.calcRects())if(r.containsRect(t))return!0;return!1}calcRects(){const r=u()/2+this.gapOffsetY-U/2,i=r+U;return[new v(this.x,0,this.width,r),new v(this.x,i,this.width,u()-i)]}reset(t){this.gapOffsetY=t.nextFloatBetween(ft,pt),this.scored=!1}update(t){return this.x+=this.vx*t,!this.scored&&this.centerX<=T?(this.scored=!0,1):0}draw(t){for(const r of this.calcRects())t.colorQuad(r.x,r.y,r.width,r.height,4278255360)}}const Y=200,mt=300;class gt{constructor(t){a(this,"obstacles",[]);this.random=t,this.reset()}reset(){this.obstacles.length=0,this.obstacles.push(new _(T+mt,this.random))}getNearestObstacle(t){let r=this.obstacles[0],i=1/0;for(const n of this.obstacles){const o=Math.abs(t-n.centerX);o<i&&(r=n,i=o)}return r}getFarthestObstacle(){let t=this.obstacles[0];for(let r=1;r<this.obstacles.length;++r){const i=this.obstacles[r];i.x>=t.x&&(t=i)}return t}reuseObstacle(t){t.x=this.getFarthestObstacle().x+Y,t.reset(this.random)}spawnObstacles(){let t=this.getFarthestObstacle();for(;t.x<=B();)t=new _(t.x+Y,this.random),this.obstacles.push(t)}update(t){let r=l.No;for(const i of this.obstacles)i.update(t)===l.Yes&&(c(r===l.No),r=l.Yes),i.x+i.width<0&&this.reuseObstacle(i);return r}draw(t){for(const r of this.obstacles)r.draw(t)}}class bt{constructor(){a(this,"started",!1);a(this,"score",0);a(this,"died",!1);a(this,"spriteBatch",new ct);a(this,"player",new dt);a(this,"obstacleManager",new gt(new F(100,200,300,400)));ut(),this.reset()}reset(){this.died=!1,this.player.reset(),this.obstacleManager.reset(),this.started=!1,this.score=0}update(t){let r=m("Space")||m("Enter")||m("W")||m("ArrowUp")||tt(N.Left);if(this.died){if(!r)return;r=!1,this.reset()}if(this.obstacleManager.spawnObstacles(),!this.started&&(this.started=r,!this.started))return;const i=this.player.update(t,r);this.obstacleManager.update(t)===l.Yes&&(this.score+=1,G.play(),console.log("Score:",this.score));const n=this.obstacleManager.getNearestObstacle(this.player.x);(i||n.containsRect(this.player.calcRect()))&&(console.log("Died"),this.died=!0)}draw(){this.spriteBatch.begin(),this.player.draw(this.spriteBatch),this.obstacleManager.draw(this.spriteBatch),this.died&&this.spriteBatch.colorQuad(100,100,B()-200,u()-200),this.spriteBatch.end()}}let p=0,S,I=performance.now()/1e3;function wt(s){let t=s-I;t>1/20&&(t=1/20),I=s,st(),S.update(t)}function xt(s){wt(s/1e3);const t=e.canvas;e.viewport(0,0,t.clientWidth,t.clientHeight),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),S.draw(),++p}function yt(){z(),Z(),et(),S=new bt,Q(xt)}document.addEventListener("DOMContentLoaded",yt);
