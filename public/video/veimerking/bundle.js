(()=>{var ya="185";var Wu=0,gc=1,Gu=2;var Hr=1,Ta=2,Vs=3,Ln=0,qt=1,kt=2,Qn=0,Yi=1,vc=2,Mc=3,xc=4,Vu=5;var Si=100,Xu=101,Hu=102,Yu=103,Qu=104,Zu=200,Ju=201,Ku=202,qu=203,Fo=204,jo=205,$u=206,eh=207,th=208,nh=209,ih=210,sh=211,rh=212,oh=213,ah=214,ko=0,Wo=1,Go=2,Qi=3,Vo=4,Xo=5,Ho=6,Yo=7,yc=0,Ah=1,ch=2,Nn=0,Tc=1,wc=2,bc=3,Yr=4,Pc=5,Sc=6,_c=7,ec="attached",lh="detached",Cc=300,Ni=301,ns=302,wa=303,ba=304,Qr=306,Gn=1e3,Pn=1001,Ps=1002,_t=1003,Pa=1004;var is=1005;var Ct=1006,Xs=1007;var On=1008;var cn=1009,Ec=1010,Dc=1011,Hs=1012,Sa=1013,zn=1014,yn=1015,Zn=1016,_a=1017,Ca=1018,Ys=1020,Ic=35902,Rc=35899,Lc=1021,Nc=1022,Tn=1023,Vn=1026,Oi=1027,Ea=1028,Da=1029,zi=1030,Ia=1031;var Ra=1033,Zr=33776,Jr=33777,Kr=33778,qr=33779,La=35840,Na=35841,Oa=35842,za=35843,Ua=36196,Ba=37492,Fa=37496,ja=37488,ka=37489,$r=37490,Wa=37491,Ga=37808,Va=37809,Xa=37810,Ha=37811,Ya=37812,Qa=37813,Za=37814,Ja=37815,Ka=37816,qa=37817,$a=37818,eA=37819,tA=37820,nA=37821,iA=36492,sA=36494,rA=36495,oA=36283,aA=36284,eo=36285,AA=36286;var Zi=2300,Ji=2301,Bo=2302,tc=2303,nc=2400,ic=2401,sc=2402,uh=2500;var Oc=0,to=1,Qs=2,hh=3200;var cA=0,dh=1,pi="",yt="srgb",Kt="srgb-linear",dr="linear",At="srgb";var Xi=7680;var rc=519,fh=512,ph=513,mh=514,lA=515,gh=516,vh=517,uA=518,Mh=519,Qo=35044;var zc="300 es",Rn=2e3,Ss=2001;function yd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Td(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xh(){let i=_s("canvas");return i.style.display="block",i}var Kl={},Cs=null;function fr(...i){let e="THREE."+i.shift();Cs?Cs("log",e,...i):console.log(e,...i)}function yh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=yh(i);let e="THREE."+i.shift();if(Cs)Cs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=yh(i);let e="THREE."+i.shift();if(Cs)Cs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Hi(...i){let e=i.join(" ");e in Kl||(Kl[e]=!0,Oe(...i))}function Th(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var wh={[ko]:Wo,[Go]:Ho,[Vo]:Yo,[Qi]:Xo,[Wo]:ko,[Ho]:Go,[Yo]:Vo,[Xo]:Qi},Xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ql=1234567,cr=Math.PI/180,Ki=180/Math.PI;function Sn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Uc(i,e){return(i%e+e)%e}function wd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function bd(i,e,t){return i!==e?(t-i)/(e-i):0}function lr(i,e,t){return(1-t)*i+t*e}function Pd(i,e,t,n){return lr(i,e,1-Math.exp(-t*n))}function Sd(i,e=1){return e-Math.abs(Uc(i,e*2)-e)}function _d(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ed(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Dd(i,e){return i+Math.random()*(e-i)}function Id(i){return i*(.5-Math.random())}function Rd(i){i!==void 0&&(ql=i);let e=ql+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ld(i){return i*cr}function Nd(i){return i*Ki}function Od(i){return(i&i-1)===0&&i!==0}function zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ud(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),A=o(t/2),c=r((e+n)/2),l=o((e+n)/2),h=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*l,A*h,A*u,a*c);break;case"YZY":i.set(A*u,a*l,A*h,a*c);break;case"ZXZ":i.set(A*h,A*u,a*l,a*c);break;case"XZX":i.set(a*l,A*m,A*d,a*c);break;case"YXY":i.set(A*d,a*l,A*m,a*c);break;case"ZYZ":i.set(A*m,A*d,a*l,a*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Bc={DEG2RAD:cr,RAD2DEG:Ki,generateUUID:Sn,clamp:$e,euclideanModulo:Uc,mapLinear:wd,inverseLerp:bd,lerp:lr,damp:Pd,pingpong:Sd,smoothstep:_d,smootherstep:Cd,randInt:Ed,randFloat:Dd,randFloatSpread:Id,seededRandom:Rd,degToRad:Ld,radToDeg:Nd,isPowerOfTwo:Od,ceilPowerOfTwo:zd,floorPowerOfTwo:Ud,setQuaternionFromProperEuler:Bd,normalize:ut,denormalize:In},Vc=class Vc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vc.prototype.isVector2=!0;var _e=Vc,pn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let A=n[s+0],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(h!==x||A!==u||c!==d||l!==m){let f=A*u+c*d+l*m+h*x;f<0&&(u=-u,d=-d,m=-m,x=-x,f=-f);let p=1-a;if(f<.9995){let w=Math.acos(f),T=Math.sin(w);p=Math.sin(p*w)/T,a=Math.sin(a*w)/T,A=A*p+u*a,c=c*p+d*a,l=l*p+m*a,h=h*p+x*a}else{A=A*p+u*a,c=c*p+d*a,l=l*p+m*a,h=h*p+x*a;let w=1/Math.sqrt(A*A+c*c+l*l+h*h);A*=w,c*=w,l*=w,h*=w}}e[t]=A,e[t+1]=c,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],A=n[s+1],c=n[s+2],l=n[s+3],h=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+l*h+A*d-c*u,e[t+1]=A*m+l*u+c*h-a*d,e[t+2]=c*m+l*d+a*u-A*h,e[t+3]=l*m-a*h-A*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,A=Math.sin,c=a(n/2),l=a(s/2),h=a(r/2),u=A(n/2),d=A(s/2),m=A(r/2);switch(o){case"XYZ":this._x=u*l*h+c*d*m,this._y=c*d*h-u*l*m,this._z=c*l*m+u*d*h,this._w=c*l*h-u*d*m;break;case"YXZ":this._x=u*l*h+c*d*m,this._y=c*d*h-u*l*m,this._z=c*l*m-u*d*h,this._w=c*l*h+u*d*m;break;case"ZXY":this._x=u*l*h-c*d*m,this._y=c*d*h+u*l*m,this._z=c*l*m+u*d*h,this._w=c*l*h-u*d*m;break;case"ZYX":this._x=u*l*h-c*d*m,this._y=c*d*h+u*l*m,this._z=c*l*m-u*d*h,this._w=c*l*h+u*d*m;break;case"YZX":this._x=u*l*h+c*d*m,this._y=c*d*h+u*l*m,this._z=c*l*m-u*d*h,this._w=c*l*h-u*d*m;break;case"XZY":this._x=u*l*h-c*d*m,this._y=c*d*h-u*l*m,this._z=c*l*m+u*d*h,this._w=c*l*h+u*d*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],A=t[9],c=t[2],l=t[6],h=t[10],u=n+a+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(l-A)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(l-A)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(A+l)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(A+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,A=t._y,c=t._z,l=t._w;return this._x=n*l+o*a+s*c-r*A,this._y=s*l+o*A+r*a-n*c,this._z=r*l+o*c+n*A-s*a,this._w=o*l-n*a-s*A-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let A=1-t;if(a<.9995){let c=Math.acos(a),l=Math.sin(c);A=Math.sin(A*c)/l,t=Math.sin(t*c)/l,this._x=this._x*A+n*t,this._y=this._y*A+s*t,this._z=this._z*A+r*t,this._w=this._w*A+o*t,this._onChangeCallback()}else this._x=this._x*A+n*t,this._y=this._y*A+s*t,this._z=this._z*A+r*t,this._w=this._w*A+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xc=class Xc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($l.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,A=e.w,c=2*(o*s-a*n),l=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+A*c+o*h-a*l,this.y=n+A*l+a*c-r*h,this.z=s+A*h+r*l-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,A=t.z;return this.x=s*A-r*a,this.y=r*o-n*A,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return PA.copy(this).projectOnVector(e),this.sub(PA)}reflect(e){return this.sub(PA.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xc.prototype.isVector3=!0;var L=Xc,PA=new L,$l=new pn,Hc=class Hc{constructor(e,t,n,s,r,o,a,A,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,A,c)}set(e,t,n,s,r,o,a,A,c){let l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=r,l[5]=A,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],A=n[6],c=n[1],l=n[4],h=n[7],u=n[2],d=n[5],m=n[8],x=s[0],f=s[3],p=s[6],w=s[1],T=s[4],M=s[7],S=s[2],b=s[5],C=s[8];return r[0]=o*x+a*w+A*S,r[3]=o*f+a*T+A*b,r[6]=o*p+a*M+A*C,r[1]=c*x+l*w+h*S,r[4]=c*f+l*T+h*b,r[7]=c*p+l*M+h*C,r[2]=u*x+d*w+m*S,r[5]=u*f+d*T+m*b,r[8]=u*p+d*M+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],A=e[6],c=e[7],l=e[8];return t*o*l-t*a*c-n*r*l+n*a*A+s*r*c-s*o*A}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],A=e[6],c=e[7],l=e[8],h=l*o-a*c,u=a*A-l*r,d=c*r-o*A,m=t*h+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(s*c-l*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(l*t-s*A)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*A-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let A=Math.cos(r),c=Math.sin(r);return this.set(n*A,n*c,-n*(A*o+c*a)+o+e,-s*c,s*A,-s*(-c*o+A*a)+a+t,0,0,1),this}scale(e,t){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(SA.makeScale(e,t)),this}rotate(e){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(SA.makeRotation(-e)),this}translate(e,t){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(SA.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hc.prototype.isMatrix3=!0;var Xe=Hc,SA=new Xe,eu=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fd(){let i={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Kt]:{primaries:e,whitePoint:n,transfer:dr,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:At,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),i}var qe=Fd();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cs,Zo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cs===void 0&&(cs=_s("canvas")),cs.width=e.width,cs.height=e.height;let s=cs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_s("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jd=0,Es=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_A(s[o].image)):r.push(_A(s[o]))}else r=_A(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function _A(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var kd=0,CA=new L,zt=class i extends Xn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Pn,s=Pn,r=Ct,o=On,a=Tn,A=cn,c=i.DEFAULT_ANISOTROPY,l=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Sn(),this.name="",this.source=new Es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=A,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(CA).x}get height(){return this.source.getSize(CA).y}get depth(){return this.source.getSize(CA).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Cc;zt.DEFAULT_ANISOTROPY=1;var Yc=class Yc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,A=e.elements,c=A[0],l=A[4],h=A[8],u=A[1],d=A[5],m=A[9],x=A[2],f=A[6],p=A[10];if(Math.abs(l-u)<.01&&Math.abs(h-x)<.01&&Math.abs(m-f)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+x)<.1&&Math.abs(m+f)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,M=(d+1)/2,S=(p+1)/2,b=(l+u)/4,C=(h+x)/4,v=(m+f)/4;return T>M&&T>S?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=C/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=v/r),this.set(n,s,r,t),this}let w=Math.sqrt((f-m)*(f-m)+(h-x)*(h-x)+(u-l)*(u-l));return Math.abs(w)<.001&&(w=1),this.x=(f-m)/w,this.y=(h-x)/w,this.z=(u-l)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yc.prototype.isVector4=!0;var ht=Yc,Jo=class extends Xn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new zt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Es(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends Jo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pr=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ko=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xa=class xa{constructor(e,t,n,s,r,o,a,A,c,l,h,u,d,m,x,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,A,c,l,h,u,d,m,x,f)}set(e,t,n,s,r,o,a,A,c,l,h,u,d,m,x,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=A,p[2]=c,p[6]=l,p[10]=h,p[14]=u,p[3]=d,p[7]=m,p[11]=x,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),A=Math.cos(s),c=Math.sin(s),l=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=o*l,d=o*h,m=a*l,x=a*h;t[0]=A*l,t[4]=-A*h,t[8]=c,t[1]=d+m*c,t[5]=u-x*c,t[9]=-a*A,t[2]=x-u*c,t[6]=m+d*c,t[10]=o*A}else if(e.order==="YXZ"){let u=A*l,d=A*h,m=c*l,x=c*h;t[0]=u+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*l,t[9]=-a,t[2]=d*a-m,t[6]=x+u*a,t[10]=o*A}else if(e.order==="ZXY"){let u=A*l,d=A*h,m=c*l,x=c*h;t[0]=u-x*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*l,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*A}else if(e.order==="ZYX"){let u=o*l,d=o*h,m=a*l,x=a*h;t[0]=A*l,t[4]=m*c-d,t[8]=u*c+x,t[1]=A*h,t[5]=x*c+u,t[9]=d*c-m,t[2]=-c,t[6]=a*A,t[10]=o*A}else if(e.order==="YZX"){let u=o*A,d=o*c,m=a*A,x=a*c;t[0]=A*l,t[4]=x-u*h,t[8]=m*h+d,t[1]=h,t[5]=o*l,t[9]=-a*l,t[2]=-c*l,t[6]=d*h+m,t[10]=u-x*h}else if(e.order==="XZY"){let u=o*A,d=o*c,m=a*A,x=a*c;t[0]=A*l,t[4]=-h,t[8]=c*l,t[1]=u*h+x,t[5]=o*l,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*l,t[10]=x*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wd,e,Gd)}lookAt(e,t,n){let s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Mi.crossVectors(n,dn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Mi.crossVectors(n,dn)),Mi.normalize(),co.crossVectors(dn,Mi),s[0]=Mi.x,s[4]=co.x,s[8]=dn.x,s[1]=Mi.y,s[5]=co.y,s[9]=dn.y,s[2]=Mi.z,s[6]=co.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],A=n[8],c=n[12],l=n[1],h=n[5],u=n[9],d=n[13],m=n[2],x=n[6],f=n[10],p=n[14],w=n[3],T=n[7],M=n[11],S=n[15],b=s[0],C=s[4],v=s[8],P=s[12],D=s[1],I=s[5],U=s[9],q=s[13],te=s[2],k=s[6],J=s[10],H=s[14],ae=s[3],ce=s[7],xe=s[11],be=s[15];return r[0]=o*b+a*D+A*te+c*ae,r[4]=o*C+a*I+A*k+c*ce,r[8]=o*v+a*U+A*J+c*xe,r[12]=o*P+a*q+A*H+c*be,r[1]=l*b+h*D+u*te+d*ae,r[5]=l*C+h*I+u*k+d*ce,r[9]=l*v+h*U+u*J+d*xe,r[13]=l*P+h*q+u*H+d*be,r[2]=m*b+x*D+f*te+p*ae,r[6]=m*C+x*I+f*k+p*ce,r[10]=m*v+x*U+f*J+p*xe,r[14]=m*P+x*q+f*H+p*be,r[3]=w*b+T*D+M*te+S*ae,r[7]=w*C+T*I+M*k+S*ce,r[11]=w*v+T*U+M*J+S*xe,r[15]=w*P+T*q+M*H+S*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],A=e[9],c=e[13],l=e[2],h=e[6],u=e[10],d=e[14],m=e[3],x=e[7],f=e[11],p=e[15],w=A*d-c*u,T=a*d-c*h,M=a*u-A*h,S=o*d-c*l,b=o*u-A*l,C=o*h-a*l;return t*(x*w-f*T+p*M)-n*(m*w-f*S+p*b)+s*(m*T-x*S+p*C)-r*(m*M-x*b+f*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],A=e[2],c=e[6],l=e[10];return t*(o*l-a*c)-n*(r*l-a*A)+s*(r*c-o*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],A=e[6],c=e[7],l=e[8],h=e[9],u=e[10],d=e[11],m=e[12],x=e[13],f=e[14],p=e[15],w=t*a-n*o,T=t*A-s*o,M=t*c-r*o,S=n*A-s*a,b=n*c-r*a,C=s*c-r*A,v=l*x-h*m,P=l*f-u*m,D=l*p-d*m,I=h*f-u*x,U=h*p-d*x,q=u*p-d*f,te=w*q-T*U+M*I+S*D-b*P+C*v;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/te;return e[0]=(a*q-A*U+c*I)*k,e[1]=(s*U-n*q-r*I)*k,e[2]=(x*C-f*b+p*S)*k,e[3]=(u*b-h*C-d*S)*k,e[4]=(A*D-o*q-c*P)*k,e[5]=(t*q-s*D+r*P)*k,e[6]=(f*M-m*C-p*T)*k,e[7]=(l*C-u*M+d*T)*k,e[8]=(o*U-a*D+c*v)*k,e[9]=(n*D-t*U-r*v)*k,e[10]=(m*b-x*M+p*w)*k,e[11]=(h*M-l*b-d*w)*k,e[12]=(a*P-o*I-A*v)*k,e[13]=(t*I-n*P+s*v)*k,e[14]=(x*T-m*S-f*w)*k,e[15]=(l*S-h*T+u*w)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,A=e.z,c=r*o,l=r*a;return this.set(c*o+n,c*a-s*A,c*A+s*a,0,c*a+s*A,l*a+n,l*A-s*o,0,c*A-s*a,l*A+s*o,r*A*A+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,A=t._w,c=r+r,l=o+o,h=a+a,u=r*c,d=r*l,m=r*h,x=o*l,f=o*h,p=a*h,w=A*c,T=A*l,M=A*h,S=n.x,b=n.y,C=n.z;return s[0]=(1-(x+p))*S,s[1]=(d+M)*S,s[2]=(m-T)*S,s[3]=0,s[4]=(d-M)*b,s[5]=(1-(u+p))*b,s[6]=(f+w)*b,s[7]=0,s[8]=(m+T)*C,s[9]=(f-w)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ls.set(s[0],s[1],s[2]).length(),a=ls.set(s[4],s[5],s[6]).length(),A=ls.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Cn.copy(this);let c=1/o,l=1/a,h=1/A;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=l,Cn.elements[5]*=l,Cn.elements[6]*=l,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,t.setFromRotationMatrix(Cn),n.x=o,n.y=a,n.z=A,this}makePerspective(e,t,n,s,r,o,a=Rn,A=!1){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),m,x;if(A)m=r/(o-r),x=o*r/(o-r);else if(a===Rn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ss)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Rn,A=!1){let c=this.elements,l=2/(t-e),h=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),m,x;if(A)m=1/(o-r),x=o/(o-r);else if(a===Rn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ss)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};xa.prototype.isMatrix4=!0;var He=xa,ls=new L,Cn=new He,Wd=new L(0,0,0),Gd=new L(1,1,1),Mi=new L,co=new L,dn=new L,nu=new He,iu=new pn,oi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],A=s[1],c=s[5],l=s[9],h=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(A,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(A,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(A,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,d),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var Ds=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vd=0,su=new L,us=new pn,$n=new He,lo=new L,er=new L,Xd=new L,Hd=new pn,ru=new L(1,0,0),ou=new L(0,1,0),au=new L(0,0,1),Au={type:"added"},Yd={type:"removed"},hs={type:"childadded",child:null},EA={type:"childremoved",child:null},vt=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new oi,n=new pn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Xe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lo.copy(e):lo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(er,lo,this.up):$n.lookAt(lo,er,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),us.setFromRotationMatrix($n),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),hs.child=e,this.dispatchEvent(hs),hs.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yd),EA.child=e,this.dispatchEvent(EA),EA.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,Xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,A){return a[A.uuid]===void 0&&(a[A.uuid]=A.toJSON(e)),A.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let A=a.shapes;if(Array.isArray(A))for(let c=0,l=A.length;c<l;c++){let h=A[c];r(e.shapes,h)}else r(e.shapes,A)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let A=0,c=this.material.length;A<c;A++)a.push(r(e.materials,this.material[A]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let A=this.animations[a];s.animations.push(r(e.animations,A))}}if(t){let a=o(e.geometries),A=o(e.materials),c=o(e.textures),l=o(e.images),h=o(e.shapes),u=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),A.length>0&&(n.materials=A),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let A=[];for(let c in a){let l=a[c];delete l.metadata,A.push(l)}return A}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};vt.DEFAULT_UP=new L(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qd={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,A=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let f=t.getJointPose(x,n),p=this._getHandJoint(c,x);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=l.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else A!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(A.matrix.fromArray(r.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,r.linearVelocity?(A.hasLinearVelocity=!0,A.linearVelocity.copy(r.linearVelocity)):A.hasLinearVelocity=!1,r.angularVelocity?(A.hasAngularVelocity=!0,A.angularVelocity.copy(r.angularVelocity)):A.hasAngularVelocity=!1,A.eventsEnabled&&A.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qd)))}return a!==null&&(a.visible=s!==null),A!==null&&(A.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function DA(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=Uc(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=DA(o,r,e+1/3),this.g=DA(o,r,e),this.b=DA(o,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return qe.workingToColorSpace(Ht.copy(this),e),Math.round($e(Ht.r*255,0,255))*65536+Math.round($e(Ht.g*255,0,255))*256+Math.round($e(Ht.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Ht.copy(this),t);let n=Ht.r,s=Ht.g,r=Ht.b,o=Math.max(n,s,r),a=Math.min(n,s,r),A,c,l=(a+o)/2;if(a===o)A=0,c=0;else{let h=o-a;switch(c=l<=.5?h/(o+a):h/(2-o-a),o){case n:A=(s-r)/h+(s<r?6:0);break;case s:A=(r-n)/h+2;break;case r:A=(n-s)/h+4;break}A/=6}return e.h=A,e.s=c,e.l=l,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=yt){qe.workingToColorSpace(Ht.copy(this),e);let t=Ht.r,n=Ht.g,s=Ht.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(uo);let n=lr(xi.h,uo.h,t),s=lr(xi.s,uo.s,t),r=lr(xi.l,uo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ht=new ke;ke.NAMES=bh;var mr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gr=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},En=new L,ei=new L,IA=new L,ti=new L,ds=new L,fs=new L,cu=new L,RA=new L,LA=new L,NA=new L,OA=new ht,zA=new ht,UA=new ht,Pi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),ei.subVectors(n,t),IA.subVectors(e,t);let o=En.dot(En),a=En.dot(ei),A=En.dot(IA),c=ei.dot(ei),l=ei.dot(IA),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(c*A-a*l)*u,m=(o*l-a*A)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,A){return this.getBarycoord(e,t,n,s,ti)===null?(A.x=0,A.y=0,"z"in A&&(A.z=0),"w"in A&&(A.w=0),null):(A.setScalar(0),A.addScaledVector(r,ti.x),A.addScaledVector(o,ti.y),A.addScaledVector(a,ti.z),A)}static getInterpolatedAttribute(e,t,n,s,r,o){return OA.setScalar(0),zA.setScalar(0),UA.setScalar(0),OA.fromBufferAttribute(e,t),zA.fromBufferAttribute(e,n),UA.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(OA,r.x),o.addScaledVector(zA,r.y),o.addScaledVector(UA,r.z),o}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),ei.subVectors(e,t),En.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),En.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ds.subVectors(s,n),fs.subVectors(r,n),RA.subVectors(e,n);let A=ds.dot(RA),c=fs.dot(RA);if(A<=0&&c<=0)return t.copy(n);LA.subVectors(e,s);let l=ds.dot(LA),h=fs.dot(LA);if(l>=0&&h<=l)return t.copy(s);let u=A*h-l*c;if(u<=0&&A>=0&&l<=0)return o=A/(A-l),t.copy(n).addScaledVector(ds,o);NA.subVectors(e,r);let d=ds.dot(NA),m=fs.dot(NA);if(m>=0&&d<=m)return t.copy(r);let x=d*c-A*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(fs,a);let f=l*m-d*h;if(f<=0&&h-l>=0&&d-m>=0)return cu.subVectors(r,s),a=(h-l)/(h-l+(d-m)),t.copy(s).addScaledVector(cu,a);let p=1/(f+x+u);return o=x*p,a=u*p,t.copy(n).addScaledVector(ds,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),fo.subVectors(this.max,tr),ps.subVectors(e.a,tr),ms.subVectors(e.b,tr),gs.subVectors(e.c,tr),yi.subVectors(ms,ps),Ti.subVectors(gs,ms),ki.subVectors(ps,gs);let t=[0,-yi.z,yi.y,0,-Ti.z,Ti.y,0,-ki.z,ki.y,yi.z,0,-yi.x,Ti.z,0,-Ti.x,ki.z,0,-ki.x,-yi.y,yi.x,0,-Ti.y,Ti.x,0,-ki.y,ki.x,0];return!BA(t,ps,ms,gs,fo)||(t=[1,0,0,0,1,0,0,0,1],!BA(t,ps,ms,gs,fo))?!1:(po.crossVectors(yi,Ti),t=[po.x,po.y,po.z],BA(t,ps,ms,gs,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ni=[new L,new L,new L,new L,new L,new L,new L,new L],Dn=new L,ho=new gn,ps=new L,ms=new L,gs=new L,yi=new L,Ti=new L,ki=new L,tr=new L,fo=new L,po=new L,Wi=new L;function BA(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Wi.fromArray(i,r);let a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),A=e.dot(Wi),c=t.dot(Wi),l=n.dot(Wi);if(Math.max(-Math.max(A,c,l),Math.min(A,c,l))>a)return!1}return!0}var It=new L,mo=new _e,Zd=0,Lt=class extends Xn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qo,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mo.fromBufferAttribute(this,t),mo.applyMatrix3(e),this.setXY(t,mo.x,mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var vr=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Mr=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jd=new gn,nr=new L,FA=new L,sn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);let t=nr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(FA.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(FA)),this.expandByPoint(nr.copy(e.center).sub(FA))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Kd=0,bn=new He,jA=new vt,vs=new L,fn=new gn,ir=new gn,jt=new L,bt=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?Mr:vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return jA.lookAt(e),jA.updateMatrix(),this.applyMatrix4(jA.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(fn.min,ir.min),fn.expandByPoint(jt),jt.addVectors(fn.max,ir.max),fn.expandByPoint(jt)):(fn.expandByPoint(ir.min),fn.expandByPoint(ir.max))}fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],A=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)jt.fromBufferAttribute(a,c),A&&(vs.fromBufferAttribute(e,c),jt.add(vs)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Lt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],A=[];for(let v=0;v<n.count;v++)a[v]=new L,A[v]=new L;let c=new L,l=new L,h=new L,u=new _e,d=new _e,m=new _e,x=new L,f=new L;function p(v,P,D){c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,D),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,P),m.fromBufferAttribute(r,D),l.sub(c),h.sub(c),d.sub(u),m.sub(u);let I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(x.copy(l).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(I),f.copy(h).multiplyScalar(d.x).addScaledVector(l,-m.x).multiplyScalar(I),a[v].add(x),a[P].add(x),a[D].add(x),A[v].add(f),A[P].add(f),A[D].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,P=w.length;v<P;++v){let D=w[v],I=D.start,U=D.count;for(let q=I,te=I+U;q<te;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let T=new L,M=new L,S=new L,b=new L;function C(v){S.fromBufferAttribute(s,v),b.copy(S);let P=a[v];T.copy(P),T.sub(S.multiplyScalar(S.dot(P))).normalize(),M.crossVectors(b,P);let I=M.dot(A[v])<0?-1:1;o.setXYZW(v,T.x,T.y,T.z,I)}for(let v=0,P=w.length;v<P;++v){let D=w[v],I=D.start,U=D.count;for(let q=I,te=I+U;q<te;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,A=new L,c=new L,l=new L,h=new L;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),x=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,f),l.subVectors(o,r),h.subVectors(s,r),l.cross(h),a.fromBufferAttribute(n,m),A.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),a.add(l),A.add(l),c.add(l),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,A.x,A.y,A.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),l.subVectors(o,r),h.subVectors(s,r),l.cross(h),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,A){let c=a.array,l=a.itemSize,h=a.normalized,u=new c.constructor(A.length*l),d=0,m=0;for(let x=0,f=A.length;x<f;x++){a.isInterleavedBufferAttribute?d=A[x]*a.data.stride+a.offset:d=A[x]*l;for(let p=0;p<l;p++)u[m++]=c[d++]}return new Lt(u,l,h)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let A=s[a],c=e(A,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let A=[],c=r[a];for(let l=0,h=c.length;l<h;l++){let u=c[l],d=e(u,n);A.push(d)}t.morphAttributes[a]=A}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,A=o.length;a<A;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let A=this.parameters;for(let c in A)A[c]!==void 0&&(e[c]=A[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let A in n){let c=n[A];e.data.attributes[A]=c.toJSON(e.data)}let s={},r=!1;for(let A in this.morphAttributes){let c=this.morphAttributes[A],l=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];l.push(d.toJSON(e.data))}l.length>0&&(s[A]=l,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let l=s[c];this.setAttribute(c,l.clone(t))}let r=e.morphAttributes;for(let c in r){let l=[],h=r[c];for(let u=0,d=h.length;u<d;u++)l.push(h[u].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,l=o.length;c<l;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let A=e.boundingSphere;return A!==null&&(this.boundingSphere=A.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qo,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Jt=new L,Ls=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){fr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qd=0,rn=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Yi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=jo,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let A=r[a];delete A.metadata,o.push(A)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ii=new L,kA=new L,go=new L,wi=new L,WA=new L,vo=new L,GA=new L,_i=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){kA.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(kA);let r=e.distanceTo(t)*.5,o=-this.direction.dot(go),a=wi.dot(this.direction),A=-wi.dot(go),c=wi.lengthSq(),l=Math.abs(1-o*o),h,u,d,m;if(l>0)if(h=o*A-a,u=o*a-A,m=r*l,h>=0)if(u>=-m)if(u<=m){let x=1/l;h*=x,u*=x,d=h*(h+o*u+2*a)+u*(o*h+u+2*A)+c}else u=r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*A)+c;else u=-r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*A)+c;else u<=-m?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-A),r),d=-h*h+u*(u+2*A)+c):u<=m?(h=0,u=Math.min(Math.max(-r,-A),r),d=u*(u+2*A)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-A),r),d=-h*h+u*(u+2*A)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*A)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(kA).addScaledVector(go,u),d}intersectSphere(e,t){ii.subVectors(e.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,A=n+o;return A<0?null:a<0?this.at(A,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,A,c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),l>=0?(r=(e.min.y-u.y)*l,o=(e.max.y-u.y)*l):(r=(e.max.y-u.y)*l,o=(e.min.y-u.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-u.z)*h,A=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,A=(e.min.z-u.z)*h),n>A||a>s)||((a>n||n!==n)&&(n=a),(A<s||s!==s)&&(s=A),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,s,r){WA.subVectors(t,e),vo.subVectors(n,e),GA.crossVectors(WA,vo);let o=this.direction.dot(GA),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);let A=a*this.direction.dot(vo.crossVectors(wi,vo));if(A<0)return null;let c=a*this.direction.dot(WA.cross(wi));if(c<0||A+c>o)return null;let l=-a*wi.dot(GA);return l<0?null:this.at(l/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lu=new He,Gi=new _i,Mo=new sn,uu=new L,xo=new L,yo=new L,To=new L,VA=new L,wo=new L,hu=new L,bo=new L,Nt=class extends vt{constructor(e=new bt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let A=0,c=r.length;A<c;A++){let l=a[A],h=r[A];l!==0&&(VA.fromBufferAttribute(h,e),o?wo.addScaledVector(VA,l):wo.addScaledVector(VA.sub(t),l))}t.add(wo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Mo.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Mo,uu)===null||Gi.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(lu.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(lu),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,A=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let f=u[m],p=o[f.materialIndex],w=Math.max(f.start,d.start),T=Math.min(a.count,Math.min(f.start+f.count,d.start+d.count));for(let M=w,S=T;M<S;M+=3){let b=a.getX(M),C=a.getX(M+1),v=a.getX(M+2);s=Po(this,p,e,n,c,l,h,b,C,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let f=m,p=x;f<p;f+=3){let w=a.getX(f),T=a.getX(f+1),M=a.getX(f+2);s=Po(this,o,e,n,c,l,h,w,T,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(A!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let f=u[m],p=o[f.materialIndex],w=Math.max(f.start,d.start),T=Math.min(A.count,Math.min(f.start+f.count,d.start+d.count));for(let M=w,S=T;M<S;M+=3){let b=M,C=M+1,v=M+2;s=Po(this,p,e,n,c,l,h,b,C,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(A.count,d.start+d.count);for(let f=m,p=x;f<p;f+=3){let w=f,T=f+1,M=f+2;s=Po(this,o,e,n,c,l,h,w,T,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function $d(i,e,t,n,s,r,o,a){let A;if(e.side===qt?A=n.intersectTriangle(o,r,s,!0,a):A=n.intersectTriangle(s,r,o,e.side===Ln,a),A===null)return null;bo.copy(a),bo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(bo);return c<t.near||c>t.far?null:{distance:c,point:bo.clone(),object:i}}function Po(i,e,t,n,s,r,o,a,A,c){i.getVertexPosition(a,xo),i.getVertexPosition(A,yo),i.getVertexPosition(c,To);let l=$d(i,e,t,n,xo,yo,To,hu);if(l){let h=new L;Pi.getBarycoord(hu,xo,yo,To,h),s&&(l.uv=Pi.getInterpolatedAttribute(s,a,A,c,h,new _e)),r&&(l.uv1=Pi.getInterpolatedAttribute(r,a,A,c,h,new _e)),o&&(l.normal=Pi.getInterpolatedAttribute(o,a,A,c,h,new L),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let u={a,b:A,c,normal:new L,materialIndex:0};Pi.getNormal(xo,yo,To,u.normal),l.face=u,l.barycoord=h}return l}var sr=new ht,du=new ht,fu=new ht,ef=new ht,pu=new He,So=new L,XA=new sn,mu=new He,HA=new _i,xr=class extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ec,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingBox.expandByPoint(So)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingSphere.expandByPoint(So)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),XA.copy(this.boundingSphere),XA.applyMatrix4(s),e.ray.intersectsSphere(XA)!==!1&&(mu.copy(s).invert(),HA.copy(e.ray).applyMatrix4(mu),!(this.boundingBox!==null&&HA.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,HA)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ec?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lh?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;du.fromBufferAttribute(s.attributes.skinIndex,e),fu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(sr.copy(t),t.set(0,0,0,0)):(sr.set(...t,1),t.set(0,0,0)),sr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=fu.getComponent(r);if(o!==0){let a=du.getComponent(r);pu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ef.copy(sr).applyMatrix4(pu),o)}}return t.isVector4&&(t.w=sr.w),t.applyMatrix4(this.bindMatrixInverse)}},Ns=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Os=class extends zt{constructor(e=null,t=1,n=1,s,r,o,a,A,c=_t,l=_t,h,u){super(null,o,a,A,c,l,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gu=new He,tf=new He,yr=class i{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:tf;gu.multiplyMatrices(a,t[r]),gu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Os(t,e,e,Tn,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Oe("Skeleton: No bone found with UUID:",r),o=new Ns),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ci=class extends Lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ms=new He,vu=new He,_o=[],Mu=new gn,nf=new He,rr=new Nt,or=new sn,on=class extends Nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),Mu.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Mu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),or.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(n),e.ray.intersectsSphere(or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),vu.multiplyMatrices(n,Ms),rr.matrixWorld=vu,rr.raycast(e,_o);for(let o=0,a=_o.length;o<a;o++){let A=_o[o];A.instanceId=r,A.object=this,t.push(A)}_o.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Os(new Float32Array(s*this.count),s,this.count,Ea,yn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,A=s*e;return r[A]=a,r.set(n,A+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},YA=new L,sf=new L,rf=new Xe,kn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=YA.subVectors(n,t).cross(sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(YA),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rf.getNormalMatrix(e),s=this.coplanarPoint(YA).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new sn,of=new _e(.5,.5),Co=new L,zs=class{constructor(e=new kn,t=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],A=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],x=r[9],f=r[10],p=r[11],w=r[12],T=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-o,d-l,p-m,S-w).normalize(),s[1].setComponents(c+o,d+l,p+m,S+w).normalize(),s[2].setComponents(c+a,d+h,p+x,S+T).normalize(),s[3].setComponents(c-a,d-h,p-x,S-T).normalize(),n)s[4].setComponents(A,u,f,M).normalize(),s[5].setComponents(c-A,d-u,p-f,S-M).normalize();else if(s[4].setComponents(c-A,d-u,p-f,S-M).normalize(),t===Rn)s[5].setComponents(c+A,d+u,p+f,S+M).normalize();else if(t===Ss)s[5].setComponents(A,u,f,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);let t=of.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Co.x=s.normal.x>0?e.max.x:e.min.x,Co.y=s.normal.y>0?e.max.y:e.min.y,Co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Us=class extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},qo=new L,$o=new L,xu=new He,ar=new _i,Eo=new sn,QA=new L,yu=new L,qi=class extends vt{constructor(e=new bt,t=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)qo.fromBufferAttribute(t,s-1),$o.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qo.distanceTo($o);e.setAttribute("lineDistance",new ct(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;xu.copy(s).invert(),ar.copy(e.ray).applyMatrix4(xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),A=a*a,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let x=d,f=m-1;x<f;x+=c){let p=l.getX(x),w=l.getX(x+1),T=Do(this,e,ar,A,p,w,x);T&&t.push(T)}if(this.isLineLoop){let x=l.getX(m-1),f=l.getX(d),p=Do(this,e,ar,A,x,f,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,f=m-1;x<f;x+=c){let p=Do(this,e,ar,A,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Do(this,e,ar,A,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Do(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(qo.fromBufferAttribute(a,s),$o.fromBufferAttribute(a,r),t.distanceSqToSegment(qo,$o,QA,yu)>n)return;QA.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(QA);if(!(c<e.near||c>e.far))return{distance:c,point:yu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Tu=new L,wu=new L,Tr=class extends qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Tu.fromBufferAttribute(t,s),wu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tu.distanceTo(wu);e.setAttribute("lineDistance",new ct(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wr=class extends qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Bs=class extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bu=new He,oc=new _i,Io=new sn,Ro=new L,br=class extends vt{constructor(e=new bt,t=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;bu.copy(s).invert(),oc.copy(e.ray).applyMatrix4(bu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),A=a*a,c=n.index,h=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=u,x=d;m<x;m++){let f=c.getX(m);Ro.fromBufferAttribute(h,f),Pu(Ro,f,A,s,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=u,x=d;m<x;m++)Ro.fromBufferAttribute(h,m),Pu(Ro,m,A,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pu(i,e,t,n,s,r,o){let a=oc.distanceSqToPoint(i);if(a<t){let A=new L;oc.closestPointToPoint(i,A),A.applyMatrix4(n);let c=s.ray.origin.distanceTo(A);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:A,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Pr=class extends zt{constructor(e=[],t=Ni,n,s,r,o,a,A,c,l){super(e,t,n,s,r,o,a,A,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ei=class extends zt{constructor(e,t,n,s,r,o,a,A,c){super(e,t,n,s,r,o,a,A,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ai=class extends zt{constructor(e,t,n=zn,s,r,o,a=_t,A=_t,c,l=Vn,h=1){if(l!==Vn&&l!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,s,r,o,a,A,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ea=class extends ai{constructor(e,t=zn,n=Ni,s,r,o=_t,a=_t,A,c=Vn){let l={width:e,height:e,depth:1},h=[l,l,l,l,l,l];super(e,e,t,n,s,r,o,a,A,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sr=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vn=class i extends bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let A=[],c=[],l=[],h=[],u=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(A),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(h,2));function m(x,f,p,w,T,M,S,b,C,v,P){let D=M/C,I=S/v,U=M/2,q=S/2,te=b/2,k=C+1,J=v+1,H=0,ae=0,ce=new L;for(let xe=0;xe<J;xe++){let be=xe*I-q;for(let Re=0;Re<k;Re++){let nt=Re*D-U;ce[x]=nt*w,ce[f]=be*T,ce[p]=te,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[f]=0,ce[p]=b>0?1:-1,l.push(ce.x,ce.y,ce.z),h.push(Re/C),h.push(1-xe/v),H+=1}}for(let xe=0;xe<v;xe++)for(let be=0;be<C;be++){let Re=u+be+k*xe,nt=u+be+k*(xe+1),Mt=u+(be+1)+k*(xe+1),it=u+(be+1)+k*xe;A.push(Re,nt,it),A.push(nt,Mt,it),ae+=6}a.addGroup(d,ae,P),d+=ae,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Di=class i extends bt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,A=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:A};let c=this;s=Math.floor(s),r=Math.floor(r);let l=[],h=[],u=[],d=[],m=0,x=[],f=n/2,p=0;w(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(l),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(d,2));function w(){let M=new L,S=new L,b=0,C=(t-e)/n;for(let v=0;v<=r;v++){let P=[],D=v/r,I=D*(t-e)+e;for(let U=0;U<=s;U++){let q=U/s,te=q*A+a,k=Math.sin(te),J=Math.cos(te);S.x=I*k,S.y=-D*n+f,S.z=I*J,h.push(S.x,S.y,S.z),M.set(k,C,J).normalize(),u.push(M.x,M.y,M.z),d.push(q,1-D),P.push(m++)}x.push(P)}for(let v=0;v<s;v++)for(let P=0;P<r;P++){let D=x[P][v],I=x[P+1][v],U=x[P+1][v+1],q=x[P][v+1];(e>0||P!==0)&&(l.push(D,I,q),b+=3),(t>0||P!==r-1)&&(l.push(I,U,q),b+=3)}c.addGroup(p,b,0),p+=b}function T(M){let S=m,b=new _e,C=new L,v=0,P=M===!0?e:t,D=M===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,f*D,0),u.push(0,D,0),d.push(.5,.5),m++;let I=m;for(let U=0;U<=s;U++){let te=U/s*A+a,k=Math.cos(te),J=Math.sin(te);C.x=P*J,C.y=f*D,C.z=P*k,h.push(C.x,C.y,C.z),u.push(0,D,0),b.x=k*.5+.5,b.y=J*.5*D+.5,d.push(b.x,b.y),m++}for(let U=0;U<s;U++){let q=S+U,te=I+U;M===!0?l.push(te,te+1,q):l.push(te+1,te,q),v+=3}c.addGroup(p,v,M===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ai=class i extends Di{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ta=class i extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),l(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let T=new L,M=new L,S=new L;for(let b=0;b<t.length;b+=3)d(t[b+0],T),d(t[b+1],M),d(t[b+2],S),A(T,M,S,w)}function A(w,T,M,S){let b=S+1,C=[];for(let v=0;v<=b;v++){C[v]=[];let P=w.clone().lerp(M,v/b),D=T.clone().lerp(M,v/b),I=b-v;for(let U=0;U<=I;U++)U===0&&v===b?C[v][U]=P:C[v][U]=P.clone().lerp(D,U/I)}for(let v=0;v<b;v++)for(let P=0;P<2*(b-v)-1;P++){let D=Math.floor(P/2);P%2===0?(u(C[v][D+1]),u(C[v+1][D]),u(C[v][D])):(u(C[v][D+1]),u(C[v+1][D+1]),u(C[v+1][D]))}}function c(w){let T=new L;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(w),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function l(){let w=new L;for(let T=0;T<r.length;T+=3){w.x=r[T+0],w.y=r[T+1],w.z=r[T+2];let M=f(w)/2/Math.PI+.5,S=p(w)/Math.PI+.5;o.push(M,1-S)}m(),h()}function h(){for(let w=0;w<o.length;w+=6){let T=o[w+0],M=o[w+2],S=o[w+4],b=Math.max(T,M,S),C=Math.min(T,M,S);b>.9&&C<.1&&(T<.2&&(o[w+0]+=1),M<.2&&(o[w+2]+=1),S<.2&&(o[w+4]+=1))}}function u(w){r.push(w.x,w.y,w.z)}function d(w,T){let M=w*3;T.x=e[M+0],T.y=e[M+1],T.z=e[M+2]}function m(){let w=new L,T=new L,M=new L,S=new L,b=new _e,C=new _e,v=new _e;for(let P=0,D=0;P<r.length;P+=9,D+=6){w.set(r[P+0],r[P+1],r[P+2]),T.set(r[P+3],r[P+4],r[P+5]),M.set(r[P+6],r[P+7],r[P+8]),b.set(o[D+0],o[D+1]),C.set(o[D+2],o[D+3]),v.set(o[D+4],o[D+5]),S.copy(w).add(T).add(M).divideScalar(3);let I=f(S);x(b,D+0,w,I),x(C,D+2,T,I),x(v,D+4,M,I)}}function x(w,T,M,S){S<0&&w.x===1&&(o[T]=w.x-1),M.x===0&&M.z===0&&(o[T]=S/2/Math.PI+.5)}function f(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,A=r-1,c;for(;a<=A;)if(s=Math.floor(a+(A-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)A=s-1;else{A=s;break}if(s=A,n[s]===o)return s/(r-1);let l=n[s],u=n[s+1]-l,d=(o-l)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),A=t||(o.isVector2?new _e:new L);return A.copy(a).sub(o).normalize(),A}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,A=new He;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,l=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);l<=c&&(c=l,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos($e(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(A.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos($e(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(A.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fs=class extends Mn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,A=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=A}getPoint(e,t=new _e){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,A=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let l=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=A-this.aX,d=c-this.aY;A=u*l-d*h+this.aX,c=u*h+d*l+this.aY}return n.set(A,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},na=class extends Fs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fc(){let i=0,e=0,t=0,n=0;function s(r,o,a,A){i=r,e=a,t=-3*r+3*o-2*a-A,n=2*r-2*o+a+A}return{initCatmullRom:function(r,o,a,A,c){s(o,a,c*(a-r),c*(A-o))},initNonuniformCatmullRom:function(r,o,a,A,c,l,h){let u=(o-r)/c-(a-r)/(c+l)+(a-o)/l,d=(a-o)/l-(A-o)/(l+h)+(A-a)/h;u*=l,d*=l,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Su=new L,_u=new L,ZA=new Fc,JA=new Fc,KA=new Fc,ia=class extends Mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),A=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:A===0&&a===r-1&&(a=r-2,A=1);let c,l;this.closed||a>0?c=s[(a-1)%r]:(_u.subVectors(s[0],s[1]).add(s[0]),c=_u);let h=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?l=s[(a+2)%r]:(Su.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=Su),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(u),d),f=Math.pow(u.distanceToSquared(l),d);x<1e-4&&(x=1),m<1e-4&&(m=x),f<1e-4&&(f=x),ZA.initNonuniformCatmullRom(c.x,h.x,u.x,l.x,m,x,f),JA.initNonuniformCatmullRom(c.y,h.y,u.y,l.y,m,x,f),KA.initNonuniformCatmullRom(c.z,h.z,u.z,l.z,m,x,f)}else this.curveType==="catmullrom"&&(ZA.initCatmullRom(c.x,h.x,u.x,l.x,this.tension),JA.initCatmullRom(c.y,h.y,u.y,l.y,this.tension),KA.initCatmullRom(c.z,h.z,u.z,l.z,this.tension));return n.set(ZA.calc(A),JA.calc(A),KA.calc(A)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Cu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,A=i*a;return(2*t-2*n+r+o)*A+(-3*t+3*n-2*r-o)*a+r*i+t}function af(i,e){let t=1-i;return t*t*e}function Af(i,e){return 2*(1-i)*i*e}function cf(i,e){return i*i*e}function ur(i,e,t,n){return af(i,e)+Af(i,t)+cf(i,n)}function lf(i,e){let t=1-i;return t*t*t*e}function uf(i,e){let t=1-i;return 3*t*t*i*e}function hf(i,e){return 3*(1-i)*i*i*e}function df(i,e){return i*i*i*e}function hr(i,e,t,n,s){return lf(i,e)+uf(i,t)+hf(i,n)+df(i,s)}var _r=class extends Mn{constructor(e=new _e,t=new _e,n=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(e,s.x,r.x,o.x,a.x),hr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends Mn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(e,s.x,r.x,o.x,a.x),hr(e,s.y,r.y,o.y,a.y),hr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cr=class extends Mn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends Mn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Er=class extends Mn{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ur(e,s.x,r.x,o.x),ur(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends Mn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ur(e,s.x,r.x,o.x),ur(e,s.y,r.y,o.y),ur(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dr=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,A=s[o===0?o:o-1],c=s[o],l=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Cu(a,A.x,c.x,l.x,h.x),Cu(a,A.y,c.y,l.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new _e().fromArray(s))}return this}},Eu=Object.freeze({__proto__:null,ArcCurve:na,CatmullRomCurve3:ia,CubicBezierCurve:_r,CubicBezierCurve3:sa,EllipseCurve:Fs,LineCurve:Cr,LineCurve3:ra,QuadraticBezierCurve:Er,QuadraticBezierCurve3:oa,SplineCurve:Dr}),aa=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],A=a.getLength(),c=A===0?0:1-o/A;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,A=o.getPoints(a);for(let c=0;c<A.length;c++){let l=A[c];n&&n.equals(l)||(t.push(l),n=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Eu[s.type]().fromJSON(s))}return this}},Ir=class extends aa{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Cr(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Er(this.currentPoint.clone(),new _e(e,t),new _e(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new _r(this.currentPoint.clone(),new _e(e,t),new _e(n,s),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Dr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,A=this.currentPoint.y;return this.absarc(e+a,t+A,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,A){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,s,r,o,a,A),this}absellipse(e,t,n,s,r,o,a,A){let c=new Fs(e,t,n,s,r,o,a,A);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},js=class extends Ir{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ir().fromJSON(s))}return this}};function ff(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ph(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,A,c;if(n&&(r=Mf(i,e,r,t)),i.length>80*t){a=i[0],A=i[1];let l=a,h=A;for(let u=t;u<s;u+=t){let d=i[u],m=i[u+1];d<a&&(a=d),m<A&&(A=m),d>l&&(l=d),m>h&&(h=m)}c=Math.max(l-a,h-A),c=c!==0?32767/c:0}return Rr(r,o,t,a,A,c,0),o}function Ph(i,e,t,n,s){let r;if(s===Df(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Du(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Du(o/n|0,i[o],i[o+1],r);return r&&ks(r,r.next)&&(Nr(r),r=r.next),r}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ks(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Nr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Rr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&bf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let A=i.prev,c=i.next;if(r?mf(i,n,s,r):pf(i)){e.push(A.i,i.i,c.i),Nr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=gf($i(i),e),Rr(i,e,t,n,s,r,2)):o===2&&vf(i,e,t,n,s,r):Rr($i(i),e,t,n,s,r,1);break}}}function pf(i){let e=i.prev,t=i,n=i.next;if(Tt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,A=t.y,c=n.y,l=Math.min(s,r,o),h=Math.min(a,A,c),u=Math.max(s,r,o),d=Math.max(a,A,c),m=n.next;for(;m!==e;){if(m.x>=l&&m.x<=u&&m.y>=h&&m.y<=d&&Ar(s,a,r,A,o,c,m.x,m.y)&&Tt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function mf(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Tt(s,r,o)>=0)return!1;let a=s.x,A=r.x,c=o.x,l=s.y,h=r.y,u=o.y,d=Math.min(a,A,c),m=Math.min(l,h,u),x=Math.max(a,A,c),f=Math.max(l,h,u),p=ac(d,m,e,t,n),w=ac(x,f,e,t,n),T=i.prevZ,M=i.nextZ;for(;T&&T.z>=p&&M&&M.z<=w;){if(T.x>=d&&T.x<=x&&T.y>=m&&T.y<=f&&T!==s&&T!==o&&Ar(a,l,A,h,c,u,T.x,T.y)&&Tt(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=d&&M.x<=x&&M.y>=m&&M.y<=f&&M!==s&&M!==o&&Ar(a,l,A,h,c,u,M.x,M.y)&&Tt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=p;){if(T.x>=d&&T.x<=x&&T.y>=m&&T.y<=f&&T!==s&&T!==o&&Ar(a,l,A,h,c,u,T.x,T.y)&&Tt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=w;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=f&&M!==s&&M!==o&&Ar(a,l,A,h,c,u,M.x,M.y)&&Tt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function gf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ks(n,s)&&_h(n,t,t.next,s)&&Lr(n,s)&&Lr(s,n)&&(e.push(n.i,t.i,s.i),Nr(t),Nr(t.next),t=i=s),t=t.next}while(t!==i);return $i(t)}function vf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_f(o,a)){let A=Ch(o,a);o=$i(o,o.next),A=$i(A,A.next),Rr(o,e,t,n,s,r,0),Rr(A,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Mf(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,A=r<o-1?e[r+1]*n:i.length,c=Ph(i,a,A,n,!1);c===c.next&&(c.steiner=!0),s.push(Sf(c))}s.sort(xf);for(let r=0;r<s.length;r++)t=yf(s[r],t);return t}function xf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function yf(i,e){let t=Tf(i,e);if(!t)return e;let n=Ch(t,i);return $i(n,n.next),$i(t,t.next)}function Tf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(ks(i,t))return t;do{if(ks(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,A=o.x,c=o.y,l=1/0;t=o;do{if(n>=t.x&&t.x>=A&&n!==t.x&&Sh(s<c?n:r,s,A,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);Lr(t,i)&&(h<l||h===l&&(t.x>o.x||t.x===o.x&&wf(o,t)))&&(o=t,l=h)}t=t.next}while(t!==a);return o}function wf(i,e){return Tt(i.prev,i,e.prev)<0&&Tt(e.next,i,i.next)<0}function bf(i,e,t,n){let s=i;do s.z===0&&(s.z=ac(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Pf(s)}function Pf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let A=t;for(;a>0||A>0&&o;)a!==0&&(A===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,A--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function ac(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Sf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Sh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ar(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Sh(i,e,t,n,s,r,o,a)}function _f(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Cf(i,e)&&(Lr(i,e)&&Lr(e,i)&&Ef(i,e)&&(Tt(i.prev,i,e.prev)||Tt(i,e.prev,e))||ks(i,e)&&Tt(i.prev,i,i.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ks(i,e){return i.x===e.x&&i.y===e.y}function _h(i,e,t,n){let s=No(Tt(i,e,t)),r=No(Tt(i,e,n)),o=No(Tt(t,n,i)),a=No(Tt(t,n,e));return!!(s!==r&&o!==a||s===0&&Lo(i,t,e)||r===0&&Lo(i,n,e)||o===0&&Lo(t,i,n)||a===0&&Lo(t,e,n))}function Lo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function No(i){return i>0?1:i<0?-1:0}function Cf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&_h(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Lr(i,e){return Tt(i.prev,i,i.next)<0?Tt(i,e,i.next)>=0&&Tt(i,i.prev,e)>=0:Tt(i,e,i.prev)<0||Tt(i,i.next,e)<0}function Ef(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ch(i,e){let t=Ac(i.i,i.x,i.y),n=Ac(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Du(i,e,t,n){let s=Ac(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ac(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Df(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var cc=class{static triangulate(e,t,n=2){return ff(e,t,n)}},bs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Iu(e),Ru(n,e);let o=e.length;t.forEach(Iu);for(let A=0;A<t.length;A++)s.push(o),o+=t[A].length,Ru(n,t[A]);let a=cc.triangulate(n,s);for(let A=0;A<a.length;A+=3)r.push(a.slice(A,A+3));return r}};function Iu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ru(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ws=class i extends ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ii=class i extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),A=Math.floor(s),c=a+1,l=A+1,h=e/a,u=t/A,d=[],m=[],x=[],f=[];for(let p=0;p<l;p++){let w=p*u-o;for(let T=0;T<c;T++){let M=T*h-r;m.push(M,-w,0),x.push(0,0,1),f.push(T/a),f.push(1-p/A)}}for(let p=0;p<A;p++)for(let w=0;w<a;w++){let T=w+c*p,M=w+c*(p+1),S=w+1+c*(p+1),b=w+1+c*p;d.push(T,M,b),d.push(M,S,b)}this.setIndex(d),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Or=class i extends bt{constructor(e=new js([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,A=0;if(Array.isArray(e)===!1)c(e);else for(let l=0;l<e.length;l++)c(e[l]),this.addGroup(a,A,l),a+=A,A=0;this.setIndex(n),this.setAttribute("position",new ct(s,3)),this.setAttribute("normal",new ct(r,3)),this.setAttribute("uv",new ct(o,2));function c(l){let h=s.length/3,u=l.extractPoints(t),d=u.shape,m=u.holes;bs.isClockWise(d)===!1&&(d=d.reverse());for(let f=0,p=m.length;f<p;f++){let w=m[f];bs.isClockWise(w)===!0&&(m[f]=w.reverse())}let x=bs.triangulateShape(d,m);for(let f=0,p=m.length;f<p;f++){let w=m[f];d=d.concat(w)}for(let f=0,p=d.length;f<p;f++){let w=d[f];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let f=0,p=x.length;f<p;f++){let w=x[f],T=w[0]+h,M=w[1]+h,S=w[2]+h;n.push(T,M,S),A+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return If(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function If(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function ss(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Lu(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Lu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Zt(i){let e={};for(let t=0;t<i.length;t++){let n=ss(i[t]);for(let s in n)e[s]=n[s]}return e}function Lu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var Eh={clone:ss,merge:Zt},Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lf,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Rf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new He().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Aa=class extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ci=class extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cA,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},an=class extends ci{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ca=class extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},la=class extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Of(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Nu(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let A=0;A!==e;++A)s[o++]=i[a+A]}return s}function zf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Hn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let A=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===A)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends Hn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nc,endingEnd:nc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],A=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ic:r=e,a=2*t-n;break;case sc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(A===void 0)switch(this.getSettings_().endingEnd){case ic:o=e,A=2*n-t;break;case sc:o=1,A=n+s[1]-s[0];break;default:o=e-1,A=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(A-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=e*a,c=A-a,l=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),x=m*m,f=x*m,p=-u*f+2*u*x-u*m,w=(1+u)*f+(-1.5-2*u)*x+(-.5+u)*m+1,T=(-1-d)*f+(1.5+d)*x+.5*m,M=d*f-d*x;for(let S=0;S!==a;++S)r[S]=p*o[l+S]+w*o[c+S]+T*o[A+S]+M*o[h+S];return r}},ha=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=e*a,c=A-a,l=(n-t)/(s-t),h=1-l;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[A+u]*l;return r}},da=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fa=class extends Hn{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=e*a,c=A-a,l=this.inTangents,h=this.outTangents;if(!l||!h){let m=(n-t)/(s-t),x=1-m;for(let f=0;f!==a;++f)r[f]=o[c+f]*x+o[A+f]*m;return r}let u=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[c+m],f=o[A+m],p=d*u+m*2,w=h[p],T=h[p+1],M=e*u+m*2,S=l[M],b=l[M+1],C=(n-t)/(s-t),v,P,D,I,U;for(let q=0;q<8;q++){v=C*C,P=v*C,D=1-C,I=D*D,U=I*D;let k=U*t+3*I*C*w+3*D*v*S+P*s-n;if(Math.abs(k)<1e-10)break;let J=3*I*(w-t)+6*D*C*(S-w)+3*v*(s-S);if(Math.abs(J)<1e-10)break;C=C-k/J,C=Math.max(0,Math.min(1,C))}r[m]=U*x+3*I*C*T+3*D*v*b+P*f}return r}},An=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oo(t,this.TimeBufferType),this.values=Oo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oo(e.times,Array),values:Oo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zi:t=this.InterpolantFactoryMethodDiscrete;break;case Ji:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break;case tc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zi;case this.InterpolantFactoryMethodLinear:return Ji;case this.InterpolantFactoryMethodSmooth:return Bo;case this.InterpolantFactoryMethodBezier:return tc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let A=n[a];if(typeof A=="number"&&isNaN(A)){We("KeyframeTrack: Time is not a valid number.",this,a,A),e=!1;break}if(o!==null&&o>A){We("KeyframeTrack: Out of order keys.",this,a,A,o),e=!1;break}o=A}if(s!==void 0&&Td(s))for(let a=0,A=s.length;a!==A;++a){let c=s[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Bo,r=e.length-1,o=1;for(let a=1;a<r;++a){let A=!1,c=e[a],l=e[a+1];if(c!==l&&(a!==1||c!==e[0]))if(s)A=!0;else{let h=a*n,u=h-n,d=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[u+m]||x!==t[d+m]){A=!0;break}}}if(A){if(a!==o){e[o]=e[a];let h=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,A=o*n,c=0;c!==n;++c)t[A+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Ji;var li=class extends An{constructor(e,t,n){super(e,t,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Zi;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var zr=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};zr.prototype.ValueTypeName="color";var ui=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};ui.prototype.ValueTypeName="number";var pa=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=(n-t)/(s-t),c=e*a;for(let l=c+a;c!==l;c+=4)pn.slerpFlat(r,0,o,c-a,o,c,A);return r}},hi=class extends An{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new pa(this.times,this.values,this.getValueSize(),e)}};hi.prototype.ValueTypeName="quaternion";hi.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends An{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Zi;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};Ri.prototype.ValueTypeName="vector";var Ur=class{constructor(e="",t=-1,n=[],s=uh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Sn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Bf(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(An.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let A=[],c=[];A.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let l=Of(A);A=Nu(A,1,l),c=Nu(c,1,l),!s&&A[0]===0&&(A.push(r),c.push(c[0])),o.push(new ui(".morphTargetInfluences["+t[a].name+"]",A,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,A=e.length;a<A;a++){let c=e[a],l=c.name.match(r);if(l&&l.length>1){let h=l[1],u=s[h];u||(s[h]=u=[]),u.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Uf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ui;case"vector":case"vector2":case"vector3":case"vector4":return Ri;case"color":return zr;case"quaternion":return hi;case"bool":case"boolean":return li;case"string":return di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Bf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Uf(i.type);if(i.times===void 0){let t=[],n=[];zf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Wn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ou(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ou(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ou(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ma=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,A,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(l){a++,r===!1&&s.onStart!==void 0&&s.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,s.onProgress!==void 0&&s.onProgress(l,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),A?A(l):l},this.setURLModifier=function(l){return A=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){let h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(l))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Dh=new ma,Yn=class{constructor(e){this.manager=e!==void 0?e:Dh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yn.DEFAULT_MATERIAL_NAME="__DEFAULT";var si={},lc=class extends Error{constructor(e,t){super(e),this.response=t}},Gs=class extends Yn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:n,onError:s});return}si[e]=[],si[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,A=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let l=si[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,m=d!==0,x=0,f=new ReadableStream({start(p){w();function w(){h.read().then(({done:T,value:M})=>{if(T)p.close();else{x+=M.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let b=0,C=l.length;b<C;b++){let v=l[b];v.onProgress&&v.onProgress(S)}p.enqueue(M),w()}},T=>{p.error(T)})}}});return new Response(f)}else throw new lc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(A){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(l=>new DOMParser().parseFromString(l,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Wn.add(`file:${e}`,c);let l=si[e];delete si[e];for(let h=0,u=l.length;h<u;h++){let d=l[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let l=si[e];if(l===void 0)throw this.manager.itemError(e),c;delete si[e];for(let h=0,u=l.length;h<u;h++){let d=l[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var xs=new WeakMap,ga=class extends Yn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=xs.get(o);h===void 0&&(h=[],xs.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=_s("img");function A(){l(),t&&t(this);let h=xs.get(this)||[];for(let u=0;u<h.length;u++){let d=h[u];d.onLoad&&d.onLoad(this)}xs.delete(this),r.manager.itemEnd(e)}function c(h){l(),s&&s(h),Wn.remove(`image:${e}`);let u=xs.get(this)||[];for(let d=0;d<u.length;d++){let m=u[d];m.onError&&m.onError(h)}xs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){a.removeEventListener("load",A,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",A,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Wn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Br=class extends Yn{constructor(e){super(e)}load(e,t,n,s){let r=new zt,o=new ga(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},es=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fr=class extends es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},qA=new He,zu=new L,Uu=new L,jr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(zu),Uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uu),t.updateMatrixWorld(),qA.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qA,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ss||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qA)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zo=new L,Uo=new pn,jn=new L,kr=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zo,Uo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,Uo,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(zo,Uo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,Uo,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bi=new L,Bu=new _e,Fu=new _e,Rt=class extends kr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Bu,Fu),t.subVectors(Fu,Bu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let A=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/A,t-=o.offsetY*n/c,s*=o.width/A,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},uc=class extends jr{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ki*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Wr=class extends es{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new uc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},hc=class extends jr{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0}},Gr=class extends es{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Li=class extends kr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,A=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=l*this.view.offsetY,A=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,A,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dc=class extends jr{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ts=class extends es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new dc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var fi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var $A=new WeakMap,Vr=class extends Yn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{$A.has(o)===!0?(s&&s($A.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let A=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Wn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),$A.set(A,c),Wn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wn.add(`image-bitmap:${e}`,A),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ys=-90,Ts=1,va=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(ys,Ts,e,t);s.layers=this.layers,this.add(s);let r=new Rt(ys,Ts,e,t);r.layers=this.layers,this.add(r);let o=new Rt(ys,Ts,e,t);o.layers=this.layers,this.add(o);let a=new Rt(ys,Ts,e,t);a.layers=this.layers,this.add(a);let A=new Rt(ys,Ts,e,t);A.layers=this.layers,this.add(A);let c=new Rt(ys,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,A]=t;for(let c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),A.up.set(0,1,0),A.lookAt(0,0,-1);else if(e===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),A.up.set(0,-1,0),A.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,A,c,l]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,A),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(h,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ma=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var kc="\\[\\]\\.:\\/",Ff=new RegExp("["+kc+"]","g"),Wc="[^"+kc+"]",jf="[^"+kc.replace("\\.","")+"]",kf=/((?:WC+[\/:])*)/.source.replace("WC",Wc),Wf=/(WCOD+)?/.source.replace("WCOD",jf),Gf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),Vf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),Xf=new RegExp("^"+kf+Wf+Gf+Vf+"$"),Hf=["material","materials","bones","map"],fc=class{constructor(e,t,n){let s=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ff,"")}static parseTrackName(e){let t=Xf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Hf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let A=n(a.children);if(A)return A}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===c){c=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let A=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}A=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(A=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(A=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[A],this.setValue=this.SetterByBindingTypeAndVersioning[A][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=fc;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z0=new Float32Array(1);var ju=new He,Xr=class{constructor(e,t,n=0,s=1/0){this.ray=new _i(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(e,t=!0,n=[]){return pc(e,this,n,t),n.sort(ku),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)pc(e[s],this,n,t);return n.sort(ku),n}};function ku(i,e){return i.distance-e.distance}function pc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)pc(r[o],e,t,!0)}}var Qc=class Qc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Qc.prototype.isMatrix2=!0;var mc=Qc;function Gc(i,e,t,n){let s=Yf(n);switch(t){case Lc:return i*e;case Ea:return i*e/s.components*s.byteLength;case Da:return i*e/s.components*s.byteLength;case zi:return i*e*2/s.components*s.byteLength;case Ia:return i*e*2/s.components*s.byteLength;case Nc:return i*e*3/s.components*s.byteLength;case Tn:return i*e*4/s.components*s.byteLength;case Ra:return i*e*4/s.components*s.byteLength;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:case za:return Math.max(i,16)*Math.max(e,8)/4;case La:case Oa:return Math.max(i,8)*Math.max(e,8)/2;case Ua:case Ba:case ja:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fa:case $r:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case eA:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tA:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nA:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case iA:case sA:case rA:return Math.ceil(i/4)*Math.ceil(e/4)*16;case oA:case aA:return Math.ceil(i/4)*Math.ceil(e/4)*8;case eo:case AA:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yf(i){switch(i){case cn:case Ec:return{byteLength:1,components:1};case Hs:case Dc:case Zn:return{byteLength:2,components:1};case _a:case Ca:return{byteLength:2,components:4};case zn:case Sa:case yn:return{byteLength:4,components:1};case Ic:case Rc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);function $h(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qf(i){let e=new WeakMap;function t(a,A){let c=a.array,l=a.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(A,u),i.bufferData(A,c,l),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,A,c){let l=A.array,h=A.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,l);else{h.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<h.length;d++){let m=h[u],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,h[u]=x)}h.length=u+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];i.bufferSubData(c,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}A.clearUpdateRanges()}A.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let A=e.get(a);A&&(i.deleteBuffer(A.buffer),e.delete(a))}function o(a,A){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,A));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,A),c.version=a.version}}return{get:s,remove:r,update:o}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ip=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ng=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ig=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Zf,alphahash_pars_fragment:Jf,alphamap_fragment:Kf,alphamap_pars_fragment:qf,alphatest_fragment:$f,alphatest_pars_fragment:ep,aomap_fragment:tp,aomap_pars_fragment:np,batching_pars_vertex:ip,batching_vertex:sp,begin_vertex:rp,beginnormal_vertex:op,bsdfs:ap,iridescence_fragment:Ap,bumpmap_pars_fragment:cp,clipping_planes_fragment:lp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:hp,clipping_planes_vertex:dp,color_fragment:fp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:vp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:xp,displacementmap_pars_vertex:yp,displacementmap_vertex:Tp,emissivemap_fragment:wp,emissivemap_pars_fragment:bp,colorspace_fragment:Pp,colorspace_pars_fragment:Sp,envmap_fragment:_p,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Ep,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:kp,envmap_vertex:Ip,fog_vertex:Rp,fog_pars_vertex:Lp,fog_fragment:Np,fog_pars_fragment:Op,gradientmap_pars_fragment:zp,lightmap_pars_fragment:Up,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:Fp,lights_pars_begin:jp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Gp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Xp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Qp,lights_fragment_maps:Zp,lights_fragment_end:Jp,lightprobes_pars_fragment:Kp,logdepthbuf_fragment:qp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:tm,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:om,metalnessmap_pars_fragment:am,morphinstance_vertex:Am,morphcolor_vertex:cm,morphnormal_vertex:lm,morphtarget_pars_vertex:um,morphtarget_vertex:hm,normal_fragment_begin:dm,normal_fragment_maps:fm,normal_pars_fragment:pm,normal_pars_vertex:mm,normal_vertex:gm,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:ym,iridescence_pars_fragment:Tm,opaque_fragment:wm,packing:bm,premultiplied_alpha_fragment:Pm,project_vertex:Sm,dithering_fragment:_m,dithering_pars_fragment:Cm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Rm,shadowmap_vertex:Lm,shadowmask_pars_fragment:Nm,skinbase_vertex:Om,skinning_pars_vertex:zm,skinning_vertex:Um,skinnormal_vertex:Bm,specularmap_fragment:Fm,specularmap_pars_fragment:jm,tonemapping_fragment:km,tonemapping_pars_fragment:Wm,transmission_fragment:Gm,transmission_pars_fragment:Vm,uv_pars_fragment:Xm,uv_pars_vertex:Hm,uv_vertex:Ym,worldpos_vertex:Qm,background_vert:Zm,background_frag:Jm,backgroundCube_vert:Km,backgroundCube_frag:qm,cube_vert:$m,cube_frag:eg,depth_vert:tg,depth_frag:ng,distance_vert:ig,distance_frag:sg,equirect_vert:rg,equirect_frag:og,linedashed_vert:ag,linedashed_frag:Ag,meshbasic_vert:cg,meshbasic_frag:lg,meshlambert_vert:ug,meshlambert_frag:hg,meshmatcap_vert:dg,meshmatcap_frag:fg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:vg,meshphysical_vert:Mg,meshphysical_frag:xg,meshtoon_vert:yg,meshtoon_frag:Tg,points_vert:wg,points_frag:bg,shadow_vert:Pg,shadow_frag:Sg,sprite_vert:_g,sprite_frag:Cg},we={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Kn={basic:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Zt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Zt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ke(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Zt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Zt([we.points,we.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Zt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Zt([we.common,we.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Zt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Zt([we.sprite,we.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Zt([we.common,we.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Zt([we.lights,we.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Kn.physical={uniforms:Zt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var hA={r:0,b:0,g:0},Eg=new He,ed=new Xe;ed.set(-1,0,0,0,1,0,0,0,1);function Dg(i,e,t,n,s,r){let o=new ke(0),a=s===!0?0:1,A,c,l=null,h=0,u=null;function d(w){let T=w.isScene===!0?w.background:null;if(T&&T.isTexture){let M=w.backgroundBlurriness>0;T=e.get(T,M)}return T}function m(w){let T=!1,M=d(w);M===null?f(o,a):M&&M.isColor&&(f(M,1),T=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(w,T){let M=d(T);M&&(M.isCubeTexture||M.mapping===Qr)?(c===void 0&&(c=new Nt(new vn(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ss(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ed),c.material.toneMapped=qe.getTransfer(M.colorSpace)!==At,(l!==M||h!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,l=M,h=M.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(A===void 0&&(A=new Nt(new Ii(2,2),new xn({name:"BackgroundMaterial",uniforms:ss(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),A.geometry.deleteAttribute("normal"),Object.defineProperty(A.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(A)),A.material.uniforms.t2D.value=M,A.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,A.material.toneMapped=qe.getTransfer(M.colorSpace)!==At,M.matrixAutoUpdate===!0&&M.updateMatrix(),A.material.uniforms.uvTransform.value.copy(M.matrix),(l!==M||h!==M.version||u!==i.toneMapping)&&(A.material.needsUpdate=!0,l=M,h=M.version,u=i.toneMapping),A.layers.enableAll(),w.unshift(A,A.geometry,A.material,0,0,null))}function f(w,T){w.getRGB(hA,jc(i)),t.buffers.color.setClear(hA.r,hA.g,hA.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),A!==void 0&&(A.geometry.dispose(),A.material.dispose(),A=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,T=1){o.set(w),a=T,f(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,f(o,a)},render:m,addToRenderList:x,dispose:p}}function Ig(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(I,U,q,te,k){let J=!1,H=h(I,te,q,U);r!==H&&(r=H,c(r.object)),J=d(I,te,q,k),J&&m(I,te,q,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,M(I,U,q,te),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function A(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function l(I){return i.deleteVertexArray(I)}function h(I,U,q,te){let k=te.wireframe===!0,J=n[U.id];J===void 0&&(J={},n[U.id]=J);let H=I.isInstancedMesh===!0?I.id:0,ae=J[H];ae===void 0&&(ae={},J[H]=ae);let ce=ae[q.id];ce===void 0&&(ce={},ae[q.id]=ce);let xe=ce[k];return xe===void 0&&(xe=u(A()),ce[k]=xe),xe}function u(I){let U=[],q=[],te=[];for(let k=0;k<t;k++)U[k]=0,q[k]=0,te[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:te,object:I,attributes:{},index:null}}function d(I,U,q,te){let k=r.attributes,J=U.attributes,H=0,ae=q.getAttributes();for(let ce in ae)if(ae[ce].location>=0){let be=k[ce],Re=J[ce];if(Re===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(Re=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(Re=I.instanceColor)),be===void 0||be.attribute!==Re||Re&&be.data!==Re.data)return!0;H++}return r.attributesNum!==H||r.index!==te}function m(I,U,q,te){let k={},J=U.attributes,H=0,ae=q.getAttributes();for(let ce in ae)if(ae[ce].location>=0){let be=J[ce];be===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(be=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(be=I.instanceColor));let Re={};Re.attribute=be,be&&be.data&&(Re.data=be.data),k[ce]=Re,H++}r.attributes=k,r.attributesNum=H,r.index=te}function x(){let I=r.newAttributes;for(let U=0,q=I.length;U<q;U++)I[U]=0}function f(I){p(I,0)}function p(I,U){let q=r.newAttributes,te=r.enabledAttributes,k=r.attributeDivisors;q[I]=1,te[I]===0&&(i.enableVertexAttribArray(I),te[I]=1),k[I]!==U&&(i.vertexAttribDivisor(I,U),k[I]=U)}function w(){let I=r.newAttributes,U=r.enabledAttributes;for(let q=0,te=U.length;q<te;q++)U[q]!==I[q]&&(i.disableVertexAttribArray(q),U[q]=0)}function T(I,U,q,te,k,J,H){H===!0?i.vertexAttribIPointer(I,U,q,k,J):i.vertexAttribPointer(I,U,q,te,k,J)}function M(I,U,q,te){x();let k=te.attributes,J=q.getAttributes(),H=U.defaultAttributeValues;for(let ae in J){let ce=J[ae];if(ce.location>=0){let xe=k[ae];if(xe===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor)),xe!==void 0){let be=xe.normalized,Re=xe.itemSize,nt=e.get(xe);if(nt===void 0)continue;let Mt=nt.buffer,it=nt.type,re=nt.bytesPerElement,me=it===i.INT||it===i.UNSIGNED_INT||xe.gpuType===Sa;if(xe.isInterleavedBufferAttribute){let he=xe.data,G=he.stride,Z=xe.offset;if(he.isInstancedInterleavedBuffer){for(let j=0;j<ce.locationSize;j++)p(ce.location+j,he.meshPerAttribute);I.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let j=0;j<ce.locationSize;j++)f(ce.location+j);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let j=0;j<ce.locationSize;j++)T(ce.location+j,Re/ce.locationSize,it,be,G*re,(Z+Re/ce.locationSize*j)*re,me)}else{if(xe.isInstancedBufferAttribute){for(let he=0;he<ce.locationSize;he++)p(ce.location+he,xe.meshPerAttribute);I.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let he=0;he<ce.locationSize;he++)f(ce.location+he);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let he=0;he<ce.locationSize;he++)T(ce.location+he,Re/ce.locationSize,it,be,Re*re,Re/ce.locationSize*he*re,me)}}else if(H!==void 0){let be=H[ae];if(be!==void 0)switch(be.length){case 2:i.vertexAttrib2fv(ce.location,be);break;case 3:i.vertexAttrib3fv(ce.location,be);break;case 4:i.vertexAttrib4fv(ce.location,be);break;default:i.vertexAttrib1fv(ce.location,be)}}}}w()}function S(){P();for(let I in n){let U=n[I];for(let q in U){let te=U[q];for(let k in te){let J=te[k];for(let H in J)l(J[H].object),delete J[H];delete te[k]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let q in U){let te=U[q];for(let k in te){let J=te[k];for(let H in J)l(J[H].object),delete J[H];delete te[k]}}delete n[I.id]}function C(I){for(let U in n){let q=n[U];for(let te in q){let k=q[te];if(k[I.id]===void 0)continue;let J=k[I.id];for(let H in J)l(J[H].object),delete J[H];delete k[I.id]}}}function v(I){for(let U in n){let q=n[U],te=I.isInstancedMesh===!0?I.id:0,k=q[te];if(k!==void 0){for(let J in k){let H=k[J];for(let ae in H)l(H[ae].object),delete H[ae];delete k[J]}delete q[te],Object.keys(q).length===0&&delete n[U]}}}function P(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:f,disableUnusedAttributes:w}}function Rg(i,e,t){let n;function s(A){n=A}function r(A,c){i.drawArrays(n,A,c),t.update(c,n,1)}function o(A,c,l){l!==0&&(i.drawArraysInstanced(n,A,c,l),t.update(c,n,l))}function a(A,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,A,0,c,0,l);let u=0;for(let d=0;d<l;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Lg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let v=C===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==cn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==yn&&!v)}function A(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",l=A(c);l!==c&&(Oe("WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:A,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:M,maxSamples:S,samples:b}}function Ng(i){let e=this,t=null,n=0,s=!1,r=!1,o=new kn,a=new Xe,A={value:null,needsUpdate:!1};this.uniform=A,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||s;return s=u,n=h.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let m=h.clippingPlanes,x=h.clipIntersection,f=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!f)r?l(null):c();else{let w=r?0:n,T=w*4,M=p.clippingState||null;A.value=M,M=l(m,u,T,d);for(let S=0;S!==T;++S)M[S]=t[S];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){A.value!==t&&(A.value=t,A.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,u,d,m){let x=h!==null?h.length:0,f=null;if(x!==0){if(f=A.value,m!==!0||f===null){let p=d+x*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<p)&&(f=new Float32Array(p));for(let T=0,M=d;T!==x;++T,M+=4)o.copy(h[T]).applyMatrix4(w,a),o.normal.toArray(f,M),f[M+3]=o.constant}A.value=f,A.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}var Ui=4,Ih=[.125,.215,.35,.446,.526,.582],rs=20,Og=256,no=new Li,Rh=new ke,Zc=null,Jc=0,Kc=0,qc=!1,zg=new L,fA=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=zg}=r;Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let A=this._allocateTargets();return A.depthBuffer=!0,this._sceneToCubeUV(e,n,s,A,a),t>0&&this._blur(A,0,0,t),this._applyPMREM(A),this._cleanup(A),A}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Jc,Kc),this._renderer.xr.enabled=qc,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Zn,format:Tn,colorSpace:Kt,depthBuffer:!1},s=Lh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ug(r)),this._blurMaterial=Fg(r,e,t),this._ggxMaterial=Bg(r,e,t)}return s}_compileMaterial(e){let t=new Nt(new bt,e);this._renderer.compile(t,no)}_sceneToCubeUV(e,t,n,s,r){let A=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Rh),h.toneMapping=Nn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new vn,new Qt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,f=x.material,p=!1,w=e.background;w?w.isColor&&(f.color.copy(w),e.background=null,p=!0):(f.color.copy(Rh),p=!0);for(let T=0;T<6;T++){let M=T%3;M===0?(A.up.set(0,c[T],0),A.position.set(r.x,r.y,r.z),A.lookAt(r.x+l[T],r.y,r.z)):M===1?(A.up.set(0,0,c[T]),A.position.set(r.x,r.y,r.z),A.lookAt(r.x,r.y+l[T],r.z)):(A.up.set(0,c[T],0),A.position.set(r.x,r.y,r.z),A.lookAt(r.x,r.y,r.z+l[T]));let S=this._cubeSize;Zs(s,M*S,T>2?S:0,S,S),h.setRenderTarget(s),p&&h.render(x,A),h.render(e,A)}h.toneMapping=d,h.autoClear=u,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ni||e.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let A=this._cubeSize;Zs(t,0,0,3*A,2*A),n.setRenderTarget(t),n.render(o,no)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let A=o.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-l*l),u=0+c*1.25,d=h*u,{_lodMax:m}=this,x=this._sizeLods[n],f=3*x*(n>m-Ui?n-m+Ui:0),p=4*(this._cubeSize-x);A.envMap.value=e.texture,A.roughness.value=d,A.mipInt.value=m-t,Zs(r,f,p,3*x,2*x),s.setRenderTarget(r),s.render(a,no),A.envMap.value=r.texture,A.roughness.value=0,A.mipInt.value=m-n,Zs(e,f,p,3*x,2*x),s.setRenderTarget(e),s.render(a,no)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let A=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");let l=3,h=this._lodMeshes[s];h.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*rs-1),x=r/m,f=isFinite(r)?1+Math.floor(l*x):rs;f>rs&&Oe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${rs}`);let p=[],w=0;for(let C=0;C<rs;++C){let v=C/x,P=Math.exp(-v*v/2);p.push(P),C===0?w+=P:C<f&&(w+=2*P)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:T}=this;u.dTheta.value=m,u.mipInt.value=T-n;let M=this._sizeLods[s],S=3*M*(s>T-Ui?s-T+Ui:0),b=4*(this._cubeSize-M);Zs(t,S,b,3*M,2*M),A.setRenderTarget(t),A.render(h,no)}};function Ug(i){let e=[],t=[],n=[],s=i,r=i-Ui+1+Ih.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let A=1/a;o>i-Ui?A=Ih[o-i+Ui-1]:o===0&&(A=0),t.push(A);let c=1/(a-2),l=-c,h=1+c,u=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,m=6,x=3,f=2,p=1,w=new Float32Array(x*m*d),T=new Float32Array(f*m*d),M=new Float32Array(p*m*d);for(let b=0;b<d;b++){let C=b%3*2/3-1,v=b>2?0:-1,P=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];w.set(P,x*m*b),T.set(u,f*m*b);let D=[b,b,b,b,b,b];M.set(D,p*m*b)}let S=new bt;S.setAttribute("position",new Lt(w,x)),S.setAttribute("uv",new Lt(T,f)),S.setAttribute("faceIndex",new Lt(M,p)),n.push(new Nt(S,null)),s>Ui&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Lh(i,e,t){let n=new mn(i,e,t);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Bg(i,e,t){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Og,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gA(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Fg(i,e,t){let n=new Float32Array(rs),s=new L(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gA(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Nh(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gA(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Oh(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gA(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function gA(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var pA=class extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Pr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vn(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Qn});r.uniforms.tEquirect.value=t;let o=new Nt(s,r),a=t.minFilter;return t.minFilter===On&&(t.minFilter=Ct),new va(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function jg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===wa||d===ba)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new pA(m.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,m=d===wa||d===ba,x=d===Ni||d===ns;if(m||x){let f=t.get(u),p=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new fA(i)),f=m?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),f.texture;if(f!==void 0)return f.texture;{let w=u.image;return m&&w&&w.height>0||x&&w&&A(w)?(n===null&&(n=new fA(i)),f=m?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),u.addEventListener("dispose",l),f.texture):null}}}return u}function a(u,d){return d===wa?u.mapping=Ni:d===ba&&(u.mapping=ns),u}function A(u){let d=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function l(u){let d=u.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function kg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hi("WebGLRenderer: "+n+" extension not supported."),s}}}function Wg(i,e,t,n){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function A(h){let u=h.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(h){let u=[],d=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(d!==null){let w=d.array;x=d.version;for(let T=0,M=w.length;T<M;T+=3){let S=w[T+0],b=w[T+1],C=w[T+2];u.push(S,b,b,C,C,S)}}else{let w=m.array;x=m.version;for(let T=0,M=w.length/3-1;T<M;T+=3){let S=T+0,b=T+1,C=T+2;u.push(S,b,b,C,C,S)}}let f=new(m.count>=65535?Mr:vr)(u,1);f.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,f)}function l(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:A,getWireframeAttribute:l}}function Gg(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function A(h,u){i.drawElements(n,u,r,h*o),t.update(u,n,1)}function c(h,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,h*o,d),t.update(u,n,d))}function l(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,d);let x=0;for(let f=0;f<d;f++)x+=u[f];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=A,this.renderInstances=c,this.renderMultiDraw=l}function Vg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Xg(i,e,t){let n=new WeakMap,s=new ht;function r(o,a,A){let c=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(a);if(u===void 0||u.count!==h){let P=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],T=0;d===!0&&(T=1),m===!0&&(T=2),x===!0&&(T=3);let M=a.attributes.position.count*T,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let b=new Float32Array(M*S*4*h),C=new pr(b,M,S,h);C.type=yn,C.needsUpdate=!0;let v=T*4;for(let D=0;D<h;D++){let I=f[D],U=p[D],q=w[D],te=M*S*4*D;for(let k=0;k<I.count;k++){let J=k*v;d===!0&&(s.fromBufferAttribute(I,k),b[te+J+0]=s.x,b[te+J+1]=s.y,b[te+J+2]=s.z,b[te+J+3]=0),m===!0&&(s.fromBufferAttribute(U,k),b[te+J+4]=s.x,b[te+J+5]=s.y,b[te+J+6]=s.z,b[te+J+7]=0),x===!0&&(s.fromBufferAttribute(q,k),b[te+J+8]=s.x,b[te+J+9]=s.y,b[te+J+10]=s.z,b[te+J+11]=q.itemSize===4?s.w:1)}}u={count:h,texture:C,size:new _e(M,S)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)A.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;A.getUniforms().setValue(i,"morphTargetBaseInfluence",m),A.getUniforms().setValue(i,"morphTargetInfluences",c)}A.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),A.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Hg(i,e,t,n,s){let r=new WeakMap;function o(c){let l=s.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",A)===!1&&c.addEventListener("dispose",A),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function a(){r=new WeakMap}function A(c){let l=c.target;l.removeEventListener("dispose",A),n.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:a}}var Yg={[Tc]:"LINEAR_TONE_MAPPING",[wc]:"REINHARD_TONE_MAPPING",[bc]:"CINEON_TONE_MAPPING",[Yr]:"ACES_FILMIC_TONE_MAPPING",[Sc]:"AGX_TONE_MAPPING",[_c]:"NEUTRAL_TONE_MAPPING",[Pc]:"CUSTOM_TONE_MAPPING"};function Qg(i,e,t,n,s,r){let o=new mn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new ai(e,t):void 0}),a=new mn(e,t,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),A=new bt;A.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),A.setAttribute("uv",new ct([0,2,0,0,2,0],2));let c=new Aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Nt(A,c),h=new Li(-1,1,1,-1,0,1),u=null,d=null,m=!1,x,f=null,p=[],w=!1;this.setSize=function(T,M){o.setSize(T,M),a.setSize(T,M);for(let S=0;S<p.length;S++){let b=p[S];b.setSize&&b.setSize(T,M)}},this.setEffects=function(T){p=T,w=p.length>0&&p[0].isRenderPass===!0;let M=o.width,S=o.height;for(let b=0;b<p.length;b++){let C=p[b];C.setSize&&C.setSize(M,S)}},this.begin=function(T,M){if(m||T.toneMapping===Nn&&p.length===0)return!1;if(f=M,M!==null){let S=M.width,b=M.height;(o.width!==S||o.height!==b)&&this.setSize(S,b)}return w===!1&&T.setRenderTarget(o),x=T.toneMapping,T.toneMapping=Nn,!0},this.hasRenderPass=function(){return w},this.end=function(T,M){T.toneMapping=x,m=!0;let S=o,b=a;for(let C=0;C<p.length;C++){let v=p[C];if(v.enabled!==!1&&(v.render(T,b,S,M),v.needsSwap!==!1)){let P=S;S=b,b=P}}if(u!==T.outputColorSpace||d!==T.toneMapping){u=T.outputColorSpace,d=T.toneMapping,c.defines={},qe.getTransfer(u)===At&&(c.defines.SRGB_TRANSFER="");let C=Yg[d];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,T.setRenderTarget(f),T.render(l,h),f=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),A.dispose(),c.dispose()}}var td=new zt,tl=new ai(1,1),nd=new pr,id=new Ko,sd=new Pr,zh=[],Uh=[],Bh=new Float32Array(16),Fh=new Float32Array(9),jh=new Float32Array(4);function Ks(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=zh[s];if(r===void 0&&(r=new Float32Array(s),zh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vA(i,e){let t=Uh[e];t===void 0&&(t=new Int32Array(e),Uh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function $g(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,n))return;jh.set(n),i.uniformMatrix2fv(this.addr,!1,jh),Bt(t,n)}}function ev(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),Bt(t,n)}}function tv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,n))return;Bh.set(n),i.uniformMatrix4fv(this.addr,!1,Bh),Bt(t,n)}}function nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function Av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function lv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tl.compareFunction=t.isReversedDepthBuffer()?uA:lA,r=tl):r=td,t.setTexture2D(e||r,s)}function uv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||id,s)}function hv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sd,s)}function dv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nd,s)}function fv(i){switch(i){case 5126:return Zg;case 35664:return Jg;case 35665:return Kg;case 35666:return qg;case 35674:return $g;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return ov;case 36294:return av;case 36295:return Av;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return dv}}function pv(i,e){i.uniform1fv(this.addr,e)}function mv(i,e){let t=Ks(e,this.size,2);i.uniform2fv(this.addr,t)}function gv(i,e){let t=Ks(e,this.size,3);i.uniform3fv(this.addr,t)}function vv(i,e){let t=Ks(e,this.size,4);i.uniform4fv(this.addr,t)}function Mv(i,e){let t=Ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xv(i,e){let t=Ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yv(i,e){let t=Ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Tv(i,e){i.uniform1iv(this.addr,e)}function wv(i,e){i.uniform2iv(this.addr,e)}function bv(i,e){i.uniform3iv(this.addr,e)}function Pv(i,e){i.uniform4iv(this.addr,e)}function Sv(i,e){i.uniform1uiv(this.addr,e)}function _v(i,e){i.uniform2uiv(this.addr,e)}function Cv(i,e){i.uniform3uiv(this.addr,e)}function Ev(i,e){i.uniform4uiv(this.addr,e)}function Dv(i,e,t){let n=this.cache,s=e.length,r=vA(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=tl:o=td;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Iv(i,e,t){let n=this.cache,s=e.length,r=vA(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||id,r[o])}function Rv(i,e,t){let n=this.cache,s=e.length,r=vA(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sd,r[o])}function Lv(i,e,t){let n=this.cache,s=e.length,r=vA(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nd,r[o])}function Nv(i){switch(i){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return vv;case 35674:return Mv;case 35675:return xv;case 35676:return yv;case 5124:case 35670:return Tv;case 35667:case 35671:return wv;case 35668:case 35672:return bv;case 35669:case 35673:return Pv;case 5125:return Sv;case 36294:return _v;case 36295:return Cv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Lv}}var nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fv(t.type)}},il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nv(t.type)}},sl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},$c=/(\w+)(\])?(\[|\.)?/g;function kh(i,e){i.seq.push(e),i.map[e.id]=e}function Ov(i,e,t){let n=i.name,s=n.length;for($c.lastIndex=0;;){let r=$c.exec(n),o=$c.lastIndex,a=r[1],A=r[2]==="]",c=r[3];if(A&&(a=a|0),c===void 0||c==="["&&o+2===s){kh(t,c===void 0?new nl(a,i,e):new il(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new sl(a),kh(t,h)),t=h}}}var Js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),A=e.getUniformLocation(t,a.name);Ov(a,A,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],A=n[a.id];A.needsUpdate!==!1&&a.setValue(e,A.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Wh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var zv=37297,Uv=0;function Bv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Gh=new Xe;function Fv(i){qe._getMatrix(Gh,qe.workingColorSpace,i);let e=`mat3( ${Gh.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case dr:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Bv(i.getShaderSource(e),a)}else return r}function jv(i,e){let t=Fv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var kv={[Tc]:"Linear",[wc]:"Reinhard",[bc]:"Cineon",[Yr]:"ACESFilmic",[Sc]:"AgX",[_c]:"Neutral",[Pc]:"Custom"};function Wv(i,e){let t=kv[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var dA=new L;function Gv(){qe.getLuminanceCoefficients(dA);let i=dA.x.toFixed(4),e=dA.y.toFixed(4),t=dA.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function Xv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function so(i){return i!==""}function Xh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(Yv,Zv)}var Qv=new Map;function Zv(i,e){let t=Je[e];if(t===void 0){let n=Qv.get(e);if(n!==void 0)t=Je[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return rl(t)}var Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(i){return i.replace(Jv,Kv)}function Kv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var qv={[Hr]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function $v(i){return qv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var e0={[Ni]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE_UV"};function t0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":e0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var n0={[ns]:"ENVMAP_MODE_REFRACTION"};function i0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":n0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var s0={[yc]:"ENVMAP_BLENDING_MULTIPLY",[Ah]:"ENVMAP_BLENDING_MIX",[ch]:"ENVMAP_BLENDING_ADD"};function r0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":s0[i.combine]||"ENVMAP_BLENDING_NONE"}function o0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function a0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,A=$v(t),c=t0(t),l=i0(t),h=r0(t),u=o0(t),d=Vv(t),m=Xv(r),x=s.createProgram(),f,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(so).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(so).join(`
`),p.length>0&&(p+=`
`)):(f=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,jv("linearToOutputTexel",t.outputColorSpace),Gv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=rl(o),o=Xh(o,t),o=Hh(o,t),a=rl(a),a=Xh(a,t),a=Hh(a,t),o=Yh(o),a=Yh(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=w+f+o,M=w+p+a,S=Wh(s,s.VERTEX_SHADER,T),b=Wh(s,s.FRAGMENT_SHADER,M);s.attachShader(x,S),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",q=s.getShaderInfoLog(S)||"",te=s.getShaderInfoLog(b)||"",k=U.trim(),J=q.trim(),H=te.trim(),ae=!0,ce=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,b);else{let xe=Vh(s,S,"vertex"),be=Vh(s,b,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+xe+`
`+be)}else k!==""?Oe("WebGLProgram: Program Info Log:",k):(J===""||H==="")&&(ce=!1);ce&&(I.diagnostics={runnable:ae,programLog:k,vertexShader:{log:J,prefix:f},fragmentShader:{log:H,prefix:p}})}s.deleteShader(S),s.deleteShader(b),v=new Js(s,x),P=Hv(s,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let P;this.getAttributes=function(){return P===void 0&&C(this),P};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(x,zv)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}var A0=0,ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new al(e),t.set(e,n)),n}},al=class{constructor(e){this.id=A0++,this.code=e,this.usedTimes=0}};function c0(i){return i===zi||i===$r||i===eo}function l0(i,e,t,n,s,r){let o=new Ds,a=new ol,A=new Set,c=[],l=new Map,h=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return A.add(v),v===0?"uv":`uv${v}`}function x(v,P,D,I,U,q){let te=I.fog,k=U.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ae=e.get(v.envMap||J,H),ce=ae&&ae.mapping===Qr?ae.image.height:null,xe=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Oe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let be=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Re=be!==void 0?be.length:0,nt=0;k.morphAttributes.position!==void 0&&(nt=1),k.morphAttributes.normal!==void 0&&(nt=2),k.morphAttributes.color!==void 0&&(nt=3);let Mt,it,re,me;if(xe){let fe=Kn[xe];Mt=fe.vertexShader,it=fe.fragmentShader}else{Mt=v.vertexShader,it=v.fragmentShader;let fe=a.getVertexShaderStage(v),Ue=a.getFragmentShaderStage(v);a.update(v,fe,Ue),re=fe.id,me=Ue.id}let he=i.getRenderTarget(),G=i.state.buffers.depth.getReversed(),Z=U.isInstancedMesh===!0,j=U.isBatchedMesh===!0,E=!!v.map,se=!!v.matcap,le=!!ae,oe=!!v.aoMap,Ae=!!v.lightMap,ye=!!v.bumpMap&&v.wireframe===!1,Fe=!!v.normalMap,Ze=!!v.displacementMap,Ve=!!v.emissiveMap,rt=!!v.metalnessMap,Ce=!!v.roughnessMap,R=v.anisotropy>0,at=v.clearcoat>0,Ye=v.dispersion>0,_=v.iridescence>0,g=v.sheen>0,F=v.transmission>0,X=R&&!!v.anisotropyMap,$=at&&!!v.clearcoatMap,ue=at&&!!v.clearcoatNormalMap,ge=at&&!!v.clearcoatRoughnessMap,ne=_&&!!v.iridescenceMap,ie=_&&!!v.iridescenceThicknessMap,Me=g&&!!v.sheenColorMap,Le=g&&!!v.sheenRoughnessMap,Te=!!v.specularMap,ve=!!v.specularColorMap,ze=!!v.specularIntensityMap,pe=F&&!!v.transmissionMap,Ge=F&&!!v.thicknessMap,O=!!v.gradientMap,z=!!v.alphaMap,N=v.alphaTest>0,K=!!v.alphaHash,ee=!!v.extensions,Y=Nn;v.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Y=i.toneMapping);let de={shaderID:xe,shaderType:v.type,shaderName:v.name,vertexShader:Mt,fragmentShader:it,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:j,batchingColor:j&&U._colorsTexture!==null,instancing:Z,instancingColor:Z&&U.instanceColor!==null,instancingMorph:Z&&U.morphTexture!==null,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:E,matcap:se,envMap:le,envMapMode:le&&ae.mapping,envMapCubeUVHeight:ce,aoMap:oe,lightMap:Ae,bumpMap:ye,normalMap:Fe,displacementMap:Ze,emissiveMap:Ve,normalMapObjectSpace:Fe&&v.normalMapType===dh,normalMapTangentSpace:Fe&&v.normalMapType===cA,packedNormalMap:Fe&&v.normalMapType===cA&&c0(v.normalMap.format),metalnessMap:rt,roughnessMap:Ce,anisotropy:R,anisotropyMap:X,clearcoat:at,clearcoatMap:$,clearcoatNormalMap:ue,clearcoatRoughnessMap:ge,dispersion:Ye,iridescence:_,iridescenceMap:ne,iridescenceThicknessMap:ie,sheen:g,sheenColorMap:Me,sheenRoughnessMap:Le,specularMap:Te,specularColorMap:ve,specularIntensityMap:ze,transmission:F,transmissionMap:pe,thicknessMap:Ge,gradientMap:O,opaque:v.transparent===!1&&v.blending===Yi&&v.alphaToCoverage===!1,alphaMap:z,alphaTest:N,alphaHash:K,combine:v.combine,mapUv:E&&m(v.map.channel),aoMapUv:oe&&m(v.aoMap.channel),lightMapUv:Ae&&m(v.lightMap.channel),bumpMapUv:ye&&m(v.bumpMap.channel),normalMapUv:Fe&&m(v.normalMap.channel),displacementMapUv:Ze&&m(v.displacementMap.channel),emissiveMapUv:Ve&&m(v.emissiveMap.channel),metalnessMapUv:rt&&m(v.metalnessMap.channel),roughnessMapUv:Ce&&m(v.roughnessMap.channel),anisotropyMapUv:X&&m(v.anisotropyMap.channel),clearcoatMapUv:$&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Le&&m(v.sheenRoughnessMap.channel),specularMapUv:Te&&m(v.specularMap.channel),specularColorMapUv:ve&&m(v.specularColorMap.channel),specularIntensityMapUv:ze&&m(v.specularIntensityMap.channel),transmissionMapUv:pe&&m(v.transmissionMap.channel),thicknessMapUv:Ge&&m(v.thicknessMap.channel),alphaMapUv:z&&m(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Fe||R),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(E||z),fog:!!te,useFog:v.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&Fe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:G,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:nt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Y,decodeVideoTexture:E&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===At,decodeVideoTextureEmissive:Ve&&v.emissiveMap.isVideoTexture===!0&&qe.getTransfer(v.emissiveMap.colorSpace)===At,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===kt,flipSided:v.side===qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ee&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&v.extensions.multiDraw===!0||j)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return de.vertexUv1s=A.has(1),de.vertexUv2s=A.has(2),de.vertexUv3s=A.has(3),A.clear(),de}function f(v){let P=[];if(v.shaderID?P.push(v.shaderID):(P.push(v.customVertexShaderID),P.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)P.push(D),P.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(p(P,v),w(P,v),P.push(i.outputColorSpace)),P.push(v.customProgramCacheKey),P.join()}function p(v,P){v.push(P.precision),v.push(P.outputColorSpace),v.push(P.envMapMode),v.push(P.envMapCubeUVHeight),v.push(P.mapUv),v.push(P.alphaMapUv),v.push(P.lightMapUv),v.push(P.aoMapUv),v.push(P.bumpMapUv),v.push(P.normalMapUv),v.push(P.displacementMapUv),v.push(P.emissiveMapUv),v.push(P.metalnessMapUv),v.push(P.roughnessMapUv),v.push(P.anisotropyMapUv),v.push(P.clearcoatMapUv),v.push(P.clearcoatNormalMapUv),v.push(P.clearcoatRoughnessMapUv),v.push(P.iridescenceMapUv),v.push(P.iridescenceThicknessMapUv),v.push(P.sheenColorMapUv),v.push(P.sheenRoughnessMapUv),v.push(P.specularMapUv),v.push(P.specularColorMapUv),v.push(P.specularIntensityMapUv),v.push(P.transmissionMapUv),v.push(P.thicknessMapUv),v.push(P.combine),v.push(P.fogExp2),v.push(P.sizeAttenuation),v.push(P.morphTargetsCount),v.push(P.morphAttributeCount),v.push(P.numDirLights),v.push(P.numPointLights),v.push(P.numSpotLights),v.push(P.numSpotLightMaps),v.push(P.numHemiLights),v.push(P.numRectAreaLights),v.push(P.numDirLightShadows),v.push(P.numPointLightShadows),v.push(P.numSpotLightShadows),v.push(P.numSpotLightShadowsWithMaps),v.push(P.numLightProbes),v.push(P.shadowMapType),v.push(P.toneMapping),v.push(P.numClippingPlanes),v.push(P.numClipIntersection),v.push(P.depthPacking)}function w(v,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),P.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function T(v){let P=d[v.type],D;if(P){let I=Kn[P];D=Eh.clone(I.uniforms)}else D=v.uniforms;return D}function M(v,P){let D=l.get(P);return D!==void 0?++D.usedTimes:(D=new a0(i,P,v,s),c.push(D),l.set(P,D)),D}function S(v){if(--v.usedTimes===0){let P=c.indexOf(v);c[P]=c[c.length-1],c.pop(),l.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:f,getUniforms:T,acquireProgram:M,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:C}}function u0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,A){i.get(o)[a]=A}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function h0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Zh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,x,f,p){let w=i[e];return w===void 0?(w={id:u.id,object:u,geometry:d,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:f,group:p},i[e]=w):(w.id=u.id,w.object=u,w.geometry=d,w.material=m,w.materialVariant=o(u),w.groupOrder=x,w.renderOrder=u.renderOrder,w.z=f,w.group=p),e++,w}function A(u,d,m,x,f,p){let w=a(u,d,m,x,f,p);m.transmission>0?n.push(w):m.transparent===!0?s.push(w):t.push(w)}function c(u,d,m,x,f,p){let w=a(u,d,m,x,f,p);m.transmission>0?n.unshift(w):m.transparent===!0?s.unshift(w):t.unshift(w)}function l(u,d,m){t.length>1&&t.sort(u||h0),n.length>1&&n.sort(d||Zh),s.length>1&&s.sort(d||Zh),m&&(t.reverse(),n.reverse(),s.reverse())}function h(){for(let u=e,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:A,unshift:c,finish:h,sort:l}}function d0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Jh,i.set(n,[o])):s>=r.length?(o=new Jh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function f0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ke};break;case"SpotLight":t={position:new L,direction:new L,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function p0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var m0=0;function g0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function v0(i){let e=new f0,t=p0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new He,o=new He;function a(c){let l=0,h=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,m=0,x=0,f=0,p=0,w=0,T=0,M=0,S=0,b=0,C=0;c.sort(g0);for(let P=0,D=c.length;P<D;P++){let I=c[P],U=I.color,q=I.intensity,te=I.distance,k=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===zi?k=I.shadow.map.texture:k=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)l+=U.r*q,h+=U.g*q,u+=U.b*q;else if(I.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(I.sh.coefficients[J],q);C++}else if(I.isDirectionalLight){let J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,ae=t.get(I);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,n.directionalShadow[d]=ae,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=I.shadow.matrix,w++}n.directional[d]=J,d++}else if(I.isSpotLight){let J=e.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(U).multiplyScalar(q),J.distance=te,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,n.spot[x]=J;let H=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,H.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[x]=H.matrix,I.castShadow){let ae=t.get(I);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,n.spotShadow[x]=ae,n.spotShadowMap[x]=k,M++}x++}else if(I.isRectAreaLight){let J=e.get(I);J.color.copy(U).multiplyScalar(q),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),n.rectArea[f]=J,f++}else if(I.isPointLight){let J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){let H=I.shadow,ae=t.get(I);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,ae.shadowCameraNear=H.camera.near,ae.shadowCameraFar=H.camera.far,n.pointShadow[m]=ae,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=I.shadow.matrix,T++}n.point[m]=J,m++}else if(I.isHemisphereLight){let J=e.get(I);J.skyColor.copy(I.color).multiplyScalar(q),J.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[p]=J,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=u;let v=n.hash;(v.directionalLength!==d||v.pointLength!==m||v.spotLength!==x||v.rectAreaLength!==f||v.hemiLength!==p||v.numDirectionalShadows!==w||v.numPointShadows!==T||v.numSpotShadows!==M||v.numSpotMaps!==S||v.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=f,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+S-b,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,v.directionalLength=d,v.pointLength=m,v.spotLength=x,v.rectAreaLength=f,v.hemiLength=p,v.numDirectionalShadows=w,v.numPointShadows=T,v.numSpotShadows=M,v.numSpotMaps=S,v.numLightProbes=C,n.version=m0++)}function A(c,l){let h=0,u=0,d=0,m=0,x=0,f=l.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let T=c[p];if(T.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),h++}else if(T.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),d++}else if(T.isRectAreaLight){let M=n.rectArea[m];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),o.identity(),r.copy(T.matrixWorld),r.premultiply(f),o.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(T.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),u++}else if(T.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(f),x++}}}return{setup:a,setupView:A,state:n}}function Kh(i){let e=new v0(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function A(u){s.push(u)}function c(){e.setup(t)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a,pushLightProbeGrid:A}}function M0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Kh(i),e.set(s,[a])):r>=o.length?(a=new Kh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var x0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,T0=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],w0=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],qh=new He,io=new L,el=new L;function b0(i,e,t){let n=new zs,s=new _e,r=new _e,o=new ht,a=new ca,A=new la,c={},l=t.maxTextureSize,h={[Ln]:qt,[qt]:Ln,[kt]:kt},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:x0,fragmentShader:y0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new bt;m.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Nt(m,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let p=this.type;this.render=function(b,C,v){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;this.type===Ta&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hr);let P=i.getRenderTarget(),D=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Qn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let q=p!==this.type;q&&C.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(k=>k.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,k=b.length;te<k;te++){let J=b[te],H=J.shadow;if(H===void 0){Oe("WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ae=H.getFrameExtents();s.multiply(ae),r.copy(H.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/ae.x),s.x=r.x*ae.x,H.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/ae.y),s.y=r.y*ae.y,H.mapSize.y=r.y));let ce=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ce,H.map===null||q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Vs){if(J.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new mn(s.x,s.y,{format:zi,type:Zn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),H.map.texture.name=J.name+".shadowMap",H.map.depthTexture=new ai(s.x,s.y,yn),H.map.depthTexture.name=J.name+".shadowMapDepth",H.map.depthTexture.format=Vn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=_t,H.map.depthTexture.magFilter=_t}else J.isPointLight?(H.map=new pA(s.x),H.map.depthTexture=new ea(s.x,zn)):(H.map=new mn(s.x,s.y),H.map.depthTexture=new ai(s.x,s.y,zn)),H.map.depthTexture.name=J.name+".shadowMap",H.map.depthTexture.format=Vn,this.type===Hr?(H.map.depthTexture.compareFunction=ce?uA:lA,H.map.depthTexture.minFilter=Ct,H.map.depthTexture.magFilter=Ct):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=_t,H.map.depthTexture.magFilter=_t);H.camera.updateProjectionMatrix()}let xe=H.map.isWebGLCubeRenderTarget?6:1;for(let be=0;be<xe;be++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,be),i.clear();else{be===0&&(i.setRenderTarget(H.map),i.clear());let Re=H.getViewport(be);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),U.viewport(o)}if(J.isPointLight){let Re=H.camera,nt=H.matrix,Mt=J.distance||Re.far;Mt!==Re.far&&(Re.far=Mt,Re.updateProjectionMatrix()),io.setFromMatrixPosition(J.matrixWorld),Re.position.copy(io),el.copy(Re.position),el.add(T0[be]),Re.up.copy(w0[be]),Re.lookAt(el),Re.updateMatrixWorld(),nt.makeTranslation(-io.x,-io.y,-io.z),qh.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),H._frustum.setFromProjectionMatrix(qh,Re.coordinateSystem,Re.reversedDepth)}else H.updateMatrices(J);n=H.getFrustum(),M(C,v,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===Vs&&w(H,v),H.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(P,D,I)};function w(b,C){let v=e.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new mn(s.x,s.y,{format:zi,type:Zn})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,v,u,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,v,d,x,null)}function T(b,C,v,P){let D=null,I=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)D=I;else if(D=v.isPointLight===!0?A:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=D.uuid,q=C.uuid,te=c[U];te===void 0&&(te={},c[U]=te);let k=te[q];k===void 0&&(k=D.clone(),te[q]=k,C.addEventListener("dispose",S)),D=k}if(D.visible=C.visible,D.wireframe=C.wireframe,P===Vs?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:h[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let U=i.properties.get(D);U.light=v}return D}function M(b,C,v,P,D){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Vs)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let q=e.update(b),te=b.material;if(Array.isArray(te)){let k=q.groups;for(let J=0,H=k.length;J<H;J++){let ae=k[J],ce=te[ae.materialIndex];if(ce&&ce.visible){let xe=T(b,ce,P,D);b.onBeforeShadow(i,b,C,v,q,xe,ae),i.renderBufferDirect(v,null,q,xe,b,ae),b.onAfterShadow(i,b,C,v,q,xe,ae)}}}else if(te.visible){let k=T(b,te,P,D);b.onBeforeShadow(i,b,C,v,q,k,null),i.renderBufferDirect(v,null,q,k,b,null),b.onAfterShadow(i,b,C,v,q,k,null)}}let U=b.children;for(let q=0,te=U.length;q<te;q++)M(U[q],C,v,P,D)}function S(b){b.target.removeEventListener("dispose",S);for(let v in c){let P=c[v],D=b.target.uuid;D in P&&(P[D].dispose(),delete P[D])}}}function P0(i,e){function t(){let O=!1,z=new ht,N=null,K=new ht(0,0,0,0);return{setMask:function(ee){N!==ee&&!O&&(i.colorMask(ee,ee,ee,ee),N=ee)},setLocked:function(ee){O=ee},setClear:function(ee,Y,de,fe,Ue){Ue===!0&&(ee*=fe,Y*=fe,de*=fe),z.set(ee,Y,de,fe),K.equals(z)===!1&&(i.clearColor(ee,Y,de,fe),K.copy(z))},reset:function(){O=!1,N=null,K.set(-1,0,0,0)}}}function n(){let O=!1,z=!1,N=null,K=null,ee=null;return{setReversed:function(Y){if(z!==Y){let de=e.get("EXT_clip_control");Y?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),z=Y;let fe=ee;ee=null,this.setClear(fe)}},getReversed:function(){return z},setTest:function(Y){Y?he(i.DEPTH_TEST):G(i.DEPTH_TEST)},setMask:function(Y){N!==Y&&!O&&(i.depthMask(Y),N=Y)},setFunc:function(Y){if(z&&(Y=wh[Y]),K!==Y){switch(Y){case ko:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Go:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case Ho:i.depthFunc(i.GREATER);break;case Yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=Y}},setLocked:function(Y){O=Y},setClear:function(Y){ee!==Y&&(ee=Y,z&&(Y=1-Y),i.clearDepth(Y))},reset:function(){O=!1,N=null,K=null,ee=null,z=!1}}}function s(){let O=!1,z=null,N=null,K=null,ee=null,Y=null,de=null,fe=null,Ue=null;return{setTest:function(De){O||(De?he(i.STENCIL_TEST):G(i.STENCIL_TEST))},setMask:function(De){z!==De&&!O&&(i.stencilMask(De),z=De)},setFunc:function(De,lt,et){(N!==De||K!==lt||ee!==et)&&(i.stencilFunc(De,lt,et),N=De,K=lt,ee=et)},setOp:function(De,lt,et){(Y!==De||de!==lt||fe!==et)&&(i.stencilOp(De,lt,et),Y=De,de=lt,fe=et)},setLocked:function(De){O=De},setClear:function(De){Ue!==De&&(i.clearStencil(De),Ue=De)},reset:function(){O=!1,z=null,N=null,K=null,ee=null,Y=null,de=null,fe=null,Ue=null}}}let r=new t,o=new n,a=new s,A=new WeakMap,c=new WeakMap,l={},h={},u={},d=new WeakMap,m=[],x=null,f=!1,p=null,w=null,T=null,M=null,S=null,b=null,C=null,v=new ke(0,0,0),P=0,D=!1,I=null,U=null,q=null,te=null,k=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ae=0,ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ce)[1]),H=ae>=1):ce.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),H=ae>=2);let xe=null,be={},Re=i.getParameter(i.SCISSOR_BOX),nt=i.getParameter(i.VIEWPORT),Mt=new ht().fromArray(Re),it=new ht().fromArray(nt);function re(O,z,N,K){let ee=new Uint8Array(4),Y=i.createTexture();i.bindTexture(O,Y),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<N;de++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(z,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(z+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return Y}let me={};me[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(i.DEPTH_TEST),o.setFunc(Qi),ye(!1),Fe(gc),he(i.CULL_FACE),oe(Qn);function he(O){l[O]!==!0&&(i.enable(O),l[O]=!0)}function G(O){l[O]!==!1&&(i.disable(O),l[O]=!1)}function Z(O,z){return u[O]!==z?(i.bindFramebuffer(O,z),u[O]=z,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=z),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=z),!0):!1}function j(O,z){let N=m,K=!1;if(O){N=d.get(z),N===void 0&&(N=[],d.set(z,N));let ee=O.textures;if(N.length!==ee.length||N[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,de=ee.length;Y<de;Y++)N[Y]=i.COLOR_ATTACHMENT0+Y;N.length=ee.length,K=!0}}else N[0]!==i.BACK&&(N[0]=i.BACK,K=!0);K&&i.drawBuffers(N)}function E(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let se={[Si]:i.FUNC_ADD,[Xu]:i.FUNC_SUBTRACT,[Hu]:i.FUNC_REVERSE_SUBTRACT};se[Yu]=i.MIN,se[Qu]=i.MAX;let le={[Zu]:i.ZERO,[Ju]:i.ONE,[Ku]:i.SRC_COLOR,[Fo]:i.SRC_ALPHA,[ih]:i.SRC_ALPHA_SATURATE,[th]:i.DST_COLOR,[$u]:i.DST_ALPHA,[qu]:i.ONE_MINUS_SRC_COLOR,[jo]:i.ONE_MINUS_SRC_ALPHA,[nh]:i.ONE_MINUS_DST_COLOR,[eh]:i.ONE_MINUS_DST_ALPHA,[sh]:i.CONSTANT_COLOR,[rh]:i.ONE_MINUS_CONSTANT_COLOR,[oh]:i.CONSTANT_ALPHA,[ah]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(O,z,N,K,ee,Y,de,fe,Ue,De){if(O===Qn){f===!0&&(G(i.BLEND),f=!1);return}if(f===!1&&(he(i.BLEND),f=!0),O!==Vu){if(O!==p||De!==D){if((w!==Si||S!==Si)&&(i.blendEquation(i.FUNC_ADD),w=Si,S=Si),De)switch(O){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",O);break}else switch(O){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mc:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xc:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",O);break}T=null,M=null,b=null,C=null,v.set(0,0,0),P=0,p=O,D=De}return}ee=ee||z,Y=Y||N,de=de||K,(z!==w||ee!==S)&&(i.blendEquationSeparate(se[z],se[ee]),w=z,S=ee),(N!==T||K!==M||Y!==b||de!==C)&&(i.blendFuncSeparate(le[N],le[K],le[Y],le[de]),T=N,M=K,b=Y,C=de),(fe.equals(v)===!1||Ue!==P)&&(i.blendColor(fe.r,fe.g,fe.b,Ue),v.copy(fe),P=Ue),p=O,D=!1}function Ae(O,z){O.side===kt?G(i.CULL_FACE):he(i.CULL_FACE);let N=O.side===qt;z&&(N=!N),ye(N),O.blending===Yi&&O.transparent===!1?oe(Qn):oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let K=O.stencilWrite;a.setTest(K),K&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ve(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):G(i.SAMPLE_ALPHA_TO_COVERAGE)}function ye(O){I!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),I=O)}function Fe(O){O!==Wu?(he(i.CULL_FACE),O!==U&&(O===gc?i.cullFace(i.BACK):O===Gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):G(i.CULL_FACE),U=O}function Ze(O){O!==q&&(H&&i.lineWidth(O),q=O)}function Ve(O,z,N){O?(he(i.POLYGON_OFFSET_FILL),(te!==z||k!==N)&&(te=z,k=N,o.getReversed()&&(z=-z),i.polygonOffset(z,N))):G(i.POLYGON_OFFSET_FILL)}function rt(O){O?he(i.SCISSOR_TEST):G(i.SCISSOR_TEST)}function Ce(O){O===void 0&&(O=i.TEXTURE0+J-1),xe!==O&&(i.activeTexture(O),xe=O)}function R(O,z,N){N===void 0&&(xe===null?N=i.TEXTURE0+J-1:N=xe);let K=be[N];K===void 0&&(K={type:void 0,texture:void 0},be[N]=K),(K.type!==O||K.texture!==z)&&(xe!==N&&(i.activeTexture(N),xe=N),i.bindTexture(O,z||me[O]),K.type=O,K.texture=z)}function at(){let O=be[xe];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ye(){try{i.compressedTexImage2D(...arguments)}catch(O){We("WebGLState:",O)}}function _(){try{i.compressedTexImage3D(...arguments)}catch(O){We("WebGLState:",O)}}function g(){try{i.texSubImage2D(...arguments)}catch(O){We("WebGLState:",O)}}function F(){try{i.texSubImage3D(...arguments)}catch(O){We("WebGLState:",O)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(O){We("WebGLState:",O)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(O){We("WebGLState:",O)}}function ue(){try{i.texStorage2D(...arguments)}catch(O){We("WebGLState:",O)}}function ge(){try{i.texStorage3D(...arguments)}catch(O){We("WebGLState:",O)}}function ne(){try{i.texImage2D(...arguments)}catch(O){We("WebGLState:",O)}}function ie(){try{i.texImage3D(...arguments)}catch(O){We("WebGLState:",O)}}function Me(O){return h[O]!==void 0?h[O]:i.getParameter(O)}function Le(O,z){h[O]!==z&&(i.pixelStorei(O,z),h[O]=z)}function Te(O){Mt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Mt.copy(O))}function ve(O){it.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),it.copy(O))}function ze(O,z){let N=c.get(z);N===void 0&&(N=new WeakMap,c.set(z,N));let K=N.get(O);K===void 0&&(K=i.getUniformBlockIndex(z,O.name),N.set(O,K))}function pe(O,z){let K=c.get(z).get(O);A.get(z)!==K&&(i.uniformBlockBinding(z,K,O.__bindingPointIndex),A.set(z,K))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),l={},h={},xe=null,be={},u={},d=new WeakMap,m=[],x=null,f=!1,p=null,w=null,T=null,M=null,S=null,b=null,C=null,v=new ke(0,0,0),P=0,D=!1,I=null,U=null,q=null,te=null,k=null,Mt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:G,bindFramebuffer:Z,drawBuffers:j,useProgram:E,setBlending:oe,setMaterial:Ae,setFlipSided:ye,setCullFace:Fe,setLineWidth:Ze,setPolygonOffset:Ve,setScissorTest:rt,activeTexture:Ce,bindTexture:R,unbindTexture:at,compressedTexImage2D:Ye,compressedTexImage3D:_,texImage2D:ne,texImage3D:ie,pixelStorei:Le,getParameter:Me,updateUBOMapping:ze,uniformBlockBinding:pe,texStorage2D:ue,texStorage3D:ge,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:Te,viewport:ve,reset:Ge}}function S0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,l=new WeakMap,h=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(_,g){return m?new OffscreenCanvas(_,g):_s("canvas")}function f(_,g,F){let X=1,$=Ye(_);if(($.width>F||$.height>F)&&(X=F/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let ue=Math.floor(X*$.width),ge=Math.floor(X*$.height);u===void 0&&(u=x(ue,ge));let ne=g?x(ue,ge):u;return ne.width=ue,ne.height=ge,ne.getContext("2d").drawImage(_,0,0,ue,ge),Oe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ue+"x"+ge+")."),ne}else return"data"in _&&Oe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),_;return _}function p(_){return _.generateMipmaps}function w(_){i.generateMipmap(_)}function T(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(_,g,F,X,$,ue=!1){if(_!==null){if(i[_]!==void 0)return i[_];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let ge;X&&(ge=e.get("EXT_texture_norm16"),ge||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=g;if(g===i.RED&&(F===i.FLOAT&&(ne=i.R32F),F===i.HALF_FLOAT&&(ne=i.R16F),F===i.UNSIGNED_BYTE&&(ne=i.R8),F===i.UNSIGNED_SHORT&&ge&&(ne=ge.R16_EXT),F===i.SHORT&&ge&&(ne=ge.R16_SNORM_EXT)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.R8UI),F===i.UNSIGNED_SHORT&&(ne=i.R16UI),F===i.UNSIGNED_INT&&(ne=i.R32UI),F===i.BYTE&&(ne=i.R8I),F===i.SHORT&&(ne=i.R16I),F===i.INT&&(ne=i.R32I)),g===i.RG&&(F===i.FLOAT&&(ne=i.RG32F),F===i.HALF_FLOAT&&(ne=i.RG16F),F===i.UNSIGNED_BYTE&&(ne=i.RG8),F===i.UNSIGNED_SHORT&&ge&&(ne=ge.RG16_EXT),F===i.SHORT&&ge&&(ne=ge.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.RG8UI),F===i.UNSIGNED_SHORT&&(ne=i.RG16UI),F===i.UNSIGNED_INT&&(ne=i.RG32UI),F===i.BYTE&&(ne=i.RG8I),F===i.SHORT&&(ne=i.RG16I),F===i.INT&&(ne=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),F===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),F===i.UNSIGNED_INT&&(ne=i.RGB32UI),F===i.BYTE&&(ne=i.RGB8I),F===i.SHORT&&(ne=i.RGB16I),F===i.INT&&(ne=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),F===i.UNSIGNED_INT&&(ne=i.RGBA32UI),F===i.BYTE&&(ne=i.RGBA8I),F===i.SHORT&&(ne=i.RGBA16I),F===i.INT&&(ne=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_SHORT&&ge&&(ne=ge.RGB16_EXT),F===i.SHORT&&ge&&(ne=ge.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),g===i.RGBA){let ie=ue?dr:qe.getTransfer($);F===i.FLOAT&&(ne=i.RGBA32F),F===i.HALF_FLOAT&&(ne=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ne=ie===At?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ge&&(ne=ge.RGBA16_EXT),F===i.SHORT&&ge&&(ne=ge.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(_,g){let F;return _?g===null||g===zn||g===Ys?F=i.DEPTH24_STENCIL8:g===yn?F=i.DEPTH32F_STENCIL8:g===Hs&&(F=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===zn||g===Ys?F=i.DEPTH_COMPONENT24:g===yn?F=i.DEPTH_COMPONENT32F:g===Hs&&(F=i.DEPTH_COMPONENT16),F}function b(_,g){return p(_)===!0||_.isFramebufferTexture&&_.minFilter!==_t&&_.minFilter!==Ct?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function C(_){let g=_.target;g.removeEventListener("dispose",C),P(g),g.isVideoTexture&&l.delete(g),g.isHTMLTexture&&h.delete(g)}function v(_){let g=_.target;g.removeEventListener("dispose",v),I(g)}function P(_){let g=n.get(_);if(g.__webglInit===void 0)return;let F=_.source,X=d.get(F);if(X){let $=X[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&D(_),Object.keys(X).length===0&&d.delete(F)}n.remove(_)}function D(_){let g=n.get(_);i.deleteTexture(g.__webglTexture);let F=_.source,X=d.get(F);delete X[g.__cacheKey],o.memory.textures--}function I(_){let g=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let $=0;$<g.__webglFramebuffer[X].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[X][$]);else i.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)i.deleteFramebuffer(g.__webglFramebuffer[X]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=_.textures;for(let X=0,$=F.length;X<$;X++){let ue=n.get(F[X]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(F[X])}n.remove(_)}let U=0;function q(){U=0}function te(){return U}function k(_){U=_}function J(){let _=U;return _>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),U+=1,_}function H(_){let g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.wrapR||0),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.colorSpace),g.join()}function ae(_,g){let F=n.get(_);if(_.isVideoTexture&&R(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&F.__version!==_.version){let X=_.image;if(X===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{G(F,_,g);return}}else _.isExternalTexture&&(F.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function ce(_,g){let F=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&F.__version!==_.version){G(F,_,g);return}else _.isExternalTexture&&(F.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function xe(_,g){let F=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&F.__version!==_.version){G(F,_,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function be(_,g){let F=n.get(_);if(_.isCubeDepthTexture!==!0&&_.version>0&&F.__version!==_.version){Z(F,_,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}let Re={[Gn]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Ps]:i.MIRRORED_REPEAT},nt={[_t]:i.NEAREST,[Pa]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[Xs]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},Mt={[fh]:i.NEVER,[Mh]:i.ALWAYS,[ph]:i.LESS,[lA]:i.LEQUAL,[mh]:i.EQUAL,[uA]:i.GEQUAL,[gh]:i.GREATER,[vh]:i.NOTEQUAL};function it(_,g){if(g.type===yn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ct||g.magFilter===Xs||g.magFilter===is||g.magFilter===On||g.minFilter===Ct||g.minFilter===Xs||g.minFilter===is||g.minFilter===On)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,Re[g.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,Re[g.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,Re[g.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,nt[g.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,nt[g.minFilter]),g.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Mt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===_t||g.minFilter!==is&&g.minFilter!==On||g.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function re(_,g){let F=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",C));let X=g.source,$=d.get(X);$===void 0&&($={},d.set(X,$));let ue=H(g);if(ue!==_.__cacheKey){$[ue]===void 0&&($[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[ue].usedTimes++;let ge=$[_.__cacheKey];ge!==void 0&&($[_.__cacheKey].usedTimes--,ge.usedTimes===0&&D(g)),_.__cacheKey=ue,_.__webglTexture=$[ue].texture}return F}function me(_,g,F){return Math.floor(Math.floor(_/F)/g)}function he(_,g,F,X){let ue=_.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,X,g.data);else{ue.sort((Le,Te)=>Le.start-Te.start);let ge=0;for(let Le=1;Le<ue.length;Le++){let Te=ue[ge],ve=ue[Le],ze=Te.start+Te.count,pe=me(ve.start,g.width,4),Ge=me(Te.start,g.width,4);ve.start<=ze+1&&pe===Ge&&me(ve.start+ve.count-1,g.width,4)===pe?Te.count=Math.max(Te.count,ve.start+ve.count-Te.start):(++ge,ue[ge]=ve)}ue.length=ge+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),Me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Le=0,Te=ue.length;Le<Te;Le++){let ve=ue[Le],ze=Math.floor(ve.start/4),pe=Math.ceil(ve.count/4),Ge=ze%g.width,O=Math.floor(ze/g.width),z=pe,N=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,Ge,O,z,N,F,X,g.data)}_.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function G(_,g,F){let X=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=i.TEXTURE_3D);let $=re(_,g),ue=g.source;t.bindTexture(X,_.__webglTexture,i.TEXTURE0+F);let ge=n.get(ue);if(ue.version!==ge.__version||$===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let N=qe.getPrimaries(qe.workingColorSpace),K=g.colorSpace===pi?null:qe.getPrimaries(g.colorSpace),ee=g.colorSpace===pi||N===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ie=f(g.image,!1,s.maxTextureSize);ie=at(g,ie);let Me=r.convert(g.format,g.colorSpace),Le=r.convert(g.type),Te=M(g.internalFormat,Me,Le,g.normalized,g.colorSpace,g.isVideoTexture);it(X,g);let ve,ze=g.mipmaps,pe=g.isVideoTexture!==!0,Ge=ge.__version===void 0||$===!0,O=ue.dataReady,z=b(g,ie);if(g.isDepthTexture)Te=S(g.format===Oi,g.type),Ge&&(pe?t.texStorage2D(i.TEXTURE_2D,1,Te,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Te,ie.width,ie.height,0,Me,Le,null));else if(g.isDataTexture)if(ze.length>0){pe&&Ge&&t.texStorage2D(i.TEXTURE_2D,z,Te,ze[0].width,ze[0].height);for(let N=0,K=ze.length;N<K;N++)ve=ze[N],pe?O&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,ve.width,ve.height,Me,Le,ve.data):t.texImage2D(i.TEXTURE_2D,N,Te,ve.width,ve.height,0,Me,Le,ve.data);g.generateMipmaps=!1}else pe?(Ge&&t.texStorage2D(i.TEXTURE_2D,z,Te,ie.width,ie.height),O&&he(g,ie,Me,Le)):t.texImage2D(i.TEXTURE_2D,0,Te,ie.width,ie.height,0,Me,Le,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){pe&&Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,z,Te,ze[0].width,ze[0].height,ie.depth);for(let N=0,K=ze.length;N<K;N++)if(ve=ze[N],g.format!==Tn)if(Me!==null)if(pe){if(O)if(g.layerUpdates.size>0){let ee=Gc(ve.width,ve.height,g.format,g.type);for(let Y of g.layerUpdates){let de=ve.data.subarray(Y*ee/ve.data.BYTES_PER_ELEMENT,(Y+1)*ee/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,Y,ve.width,ve.height,1,Me,de)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,ve.width,ve.height,ie.depth,Me,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,N,Te,ve.width,ve.height,ie.depth,0,ve.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,ve.width,ve.height,ie.depth,Me,Le,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,N,Te,ve.width,ve.height,ie.depth,0,Me,Le,ve.data)}else{pe&&Ge&&t.texStorage2D(i.TEXTURE_2D,z,Te,ze[0].width,ze[0].height);for(let N=0,K=ze.length;N<K;N++)ve=ze[N],g.format!==Tn?Me!==null?pe?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,N,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,N,Te,ve.width,ve.height,0,ve.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?O&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,ve.width,ve.height,Me,Le,ve.data):t.texImage2D(i.TEXTURE_2D,N,Te,ve.width,ve.height,0,Me,Le,ve.data)}else if(g.isDataArrayTexture)if(pe){if(Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,z,Te,ie.width,ie.height,ie.depth),O)if(g.layerUpdates.size>0){let N=Gc(ie.width,ie.height,g.format,g.type);for(let K of g.layerUpdates){let ee=ie.data.subarray(K*N/ie.data.BYTES_PER_ELEMENT,(K+1)*N/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,Me,Le,ee)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Me,Le,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,Me,Le,ie.data);else if(g.isData3DTexture)pe?(Ge&&t.texStorage3D(i.TEXTURE_3D,z,Te,ie.width,ie.height,ie.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Me,Le,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,Me,Le,ie.data);else if(g.isFramebufferTexture){if(Ge)if(pe)t.texStorage2D(i.TEXTURE_2D,z,Te,ie.width,ie.height);else{let N=ie.width,K=ie.height;for(let ee=0;ee<z;ee++)t.texImage2D(i.TEXTURE_2D,ee,Te,N,K,0,Me,Le,null),N>>=1,K>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let N=i.canvas;if(N.hasAttribute("layoutsubtree")||N.setAttribute("layoutsubtree","true"),ie.parentNode!==N){N.appendChild(ie),h.add(g),N.onpaint=K=>{let ee=K.changedElements;for(let Y of h)ee.includes(Y.image)&&(Y.needsUpdate=!0)},N.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let ee=i.RGBA,Y=i.RGBA,de=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ee,Y,de,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(pe&&Ge){let N=Ye(ze[0]);t.texStorage2D(i.TEXTURE_2D,z,Te,N.width,N.height)}for(let N=0,K=ze.length;N<K;N++)ve=ze[N],pe?O&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,Me,Le,ve):t.texImage2D(i.TEXTURE_2D,N,Te,Me,Le,ve);g.generateMipmaps=!1}else if(pe){if(Ge){let N=Ye(ie);t.texStorage2D(i.TEXTURE_2D,z,Te,N.width,N.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Le,ie)}else t.texImage2D(i.TEXTURE_2D,0,Te,Me,Le,ie);p(g)&&w(X),ge.__version=ue.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function Z(_,g,F){if(g.image.length!==6)return;let X=re(_,g),$=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+F);let ue=n.get($);if($.version!==ue.__version||X===!0){t.activeTexture(i.TEXTURE0+F);let ge=qe.getPrimaries(qe.workingColorSpace),ne=g.colorSpace===pi?null:qe.getPrimaries(g.colorSpace),ie=g.colorSpace===pi||ge===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Me=g.isCompressedTexture||g.image[0].isCompressedTexture,Le=g.image[0]&&g.image[0].isDataTexture,Te=[];for(let Y=0;Y<6;Y++)!Me&&!Le?Te[Y]=f(g.image[Y],!0,s.maxCubemapSize):Te[Y]=Le?g.image[Y].image:g.image[Y],Te[Y]=at(g,Te[Y]);let ve=Te[0],ze=r.convert(g.format,g.colorSpace),pe=r.convert(g.type),Ge=M(g.internalFormat,ze,pe,g.normalized,g.colorSpace),O=g.isVideoTexture!==!0,z=ue.__version===void 0||X===!0,N=$.dataReady,K=b(g,ve);it(i.TEXTURE_CUBE_MAP,g);let ee;if(Me){O&&z&&t.texStorage2D(i.TEXTURE_CUBE_MAP,K,Ge,ve.width,ve.height);for(let Y=0;Y<6;Y++){ee=Te[Y].mipmaps;for(let de=0;de<ee.length;de++){let fe=ee[de];g.format!==Tn?ze!==null?O?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,fe.width,fe.height,ze,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,Ge,fe.width,fe.height,0,fe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,fe.width,fe.height,ze,pe,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,Ge,fe.width,fe.height,0,ze,pe,fe.data)}}}else{if(ee=g.mipmaps,O&&z){ee.length>0&&K++;let Y=Ye(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,K,Ge,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Le){O?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te[Y].width,Te[Y].height,ze,pe,Te[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,Te[Y].width,Te[Y].height,0,ze,pe,Te[Y].data);for(let de=0;de<ee.length;de++){let Ue=ee[de].image[Y].image;O?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,Ue.width,Ue.height,ze,pe,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,Ge,Ue.width,Ue.height,0,ze,pe,Ue.data)}}else{O?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ze,pe,Te[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,ze,pe,Te[Y]);for(let de=0;de<ee.length;de++){let fe=ee[de];O?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,ze,pe,fe.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,Ge,ze,pe,fe.image[Y])}}}p(g)&&w(i.TEXTURE_CUBE_MAP),ue.__version=$.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function j(_,g,F,X,$,ue){let ge=r.convert(F.format,F.colorSpace),ne=r.convert(F.type),ie=M(F.internalFormat,ge,ne,F.normalized,F.colorSpace),Me=n.get(g),Le=n.get(F);if(Le.__renderTarget=g,!Me.__hasExternalTextures){let Te=Math.max(1,g.width>>ue),ve=Math.max(1,g.height>>ue);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ue,ie,Te,ve,g.depth,0,ge,ne,null):t.texImage2D($,ue,ie,Te,ve,0,ge,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),Ce(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,$,Le.__webglTexture,0,rt(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,$,Le.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function E(_,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,_),g.depthBuffer){let X=g.depthTexture,$=X&&X.isDepthTexture?X.type:null,ue=S(g.stencilBuffer,$),ge=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ce(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(g),ue,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(g),ue,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ue,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,_)}else{let X=g.textures;for(let $=0;$<X.length;$++){let ue=X[$],ge=r.convert(ue.format,ue.colorSpace),ne=r.convert(ue.type),ie=M(ue.internalFormat,ge,ne,ue.normalized,ue.colorSpace);Ce(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(g),ie,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(g),ie,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ie,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(_,g,F){let X=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(g.depthTexture);if($.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),it(i.TEXTURE_CUBE_MAP,g.depthTexture);let Me=r.convert(g.depthTexture.format),Le=r.convert(g.depthTexture.type),Te;g.depthTexture.format===Vn?Te=i.DEPTH_COMPONENT24:g.depthTexture.format===Oi&&(Te=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Te,g.width,g.height,0,Me,Le,null)}}else ae(g.depthTexture,0);let ue=$.__webglTexture,ge=rt(g),ne=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,ie=g.depthTexture.format===Oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Vn)Ce(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ne,ue,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ne,ue,0);else if(g.depthTexture.format===Oi)Ce(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ne,ue,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ne,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(_){let g=n.get(_),F=_.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==_.depthTexture){let X=_.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){let $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=X}if(_.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let X=0;X<6;X++)se(g.__webglFramebuffer[X],_,X);else{let X=_.texture.mipmaps;X&&X.length>0?se(g.__webglFramebuffer[0],_,0):se(g.__webglFramebuffer,_,0)}else if(F){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=i.createRenderbuffer(),E(g.__webglDepthbuffer[X],_,!1);else{let $=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=g.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ue)}}else{let X=_.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),E(g.__webglDepthbuffer,_,!1);else{let $=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(_,g,F){let X=n.get(_);g!==void 0&&j(X.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&le(_)}function Ae(_){let g=_.texture,F=n.get(_),X=n.get(g);_.addEventListener("dispose",v);let $=_.textures,ue=_.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=g.version,o.memory.textures++),ue){F.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[ne]=[];for(let ie=0;ie<g.mipmaps.length;ie++)F.__webglFramebuffer[ne][ie]=i.createFramebuffer()}else F.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)F.__webglFramebuffer[ne]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ge)for(let ne=0,ie=$.length;ne<ie;ne++){let Me=n.get($[ne]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}if(_.samples>0&&Ce(_)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){let ie=$[ne];F.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ne]);let Me=r.convert(ie.format,ie.colorSpace),Le=r.convert(ie.type),Te=M(ie.internalFormat,Me,Le,ie.normalized,ie.colorSpace,_.isXRRenderTarget===!0),ve=rt(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,Te,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,F.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),E(F.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),it(i.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)j(F.__webglFramebuffer[ne][ie],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ie);else j(F.__webglFramebuffer[ne],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(g)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ne=0,ie=$.length;ne<ie;ne++){let Me=$[ne],Le=n.get(Me),Te=i.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Te=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,Le.__webglTexture),it(Te,Me),j(F.__webglFramebuffer,_,Me,i.COLOR_ATTACHMENT0+ne,Te,0),p(Me)&&w(Te)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(ne=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,X.__webglTexture),it(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)j(F.__webglFramebuffer[ie],_,g,i.COLOR_ATTACHMENT0,ne,ie);else j(F.__webglFramebuffer,_,g,i.COLOR_ATTACHMENT0,ne,0);p(g)&&w(ne),t.unbindTexture()}_.depthBuffer&&le(_)}function ye(_){let g=_.textures;for(let F=0,X=g.length;F<X;F++){let $=g[F];if(p($)){let ue=T(_),ge=n.get($).__webglTexture;t.bindTexture(ue,ge),w(ue),t.unbindTexture()}}}let Fe=[],Ze=[];function Ve(_){if(_.samples>0){if(Ce(_)===!1){let g=_.textures,F=_.width,X=_.height,$=i.COLOR_BUFFER_BIT,ue=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(_),ne=g.length>1;if(ne)for(let Me=0;Me<g.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let ie=_.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Me=0;Me<g.length;Me++){if(_.resolveDepthBuffer&&(_.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Me]);let Le=n.get(g[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,F,X,0,0,F,X,$,i.NEAREST),A===!0&&(Fe.length=0,Ze.length=0,Fe.push(i.COLOR_ATTACHMENT0+Me),_.depthBuffer&&_.resolveDepthBuffer===!1&&(Fe.push(ue),Ze.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let Me=0;Me<g.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Me]);let Le=n.get(g[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&A){let g=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function rt(_){return Math.min(s.maxSamples,_.samples)}function Ce(_){let g=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function R(_){let g=o.render.frame;l.get(_)!==g&&(l.set(_,g),_.update())}function at(_,g){let F=_.colorSpace,X=_.format,$=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||F!==Kt&&F!==pi&&(qe.getTransfer(F)===At?(X!==Tn||$!==cn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",F)),g}function Ye(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=q,this.getTextureUnits=te,this.setTextureUnits=k,this.setTexture2D=ae,this.setTexture2DArray=ce,this.setTexture3D=xe,this.setTextureCube=be,this.rebindTextures=oe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _0(i,e){function t(n,s=pi){let r,o=qe.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===_a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ec)return i.BYTE;if(n===Dc)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===Sa)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===Lc)return i.ALPHA;if(n===Nc)return i.RGB;if(n===Tn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===Ea)return i.RED;if(n===Da)return i.RED_INTEGER;if(n===zi)return i.RG;if(n===Ia)return i.RG_INTEGER;if(n===Ra)return i.RGBA_INTEGER;if(n===Zr||n===Jr||n===Kr||n===qr)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Na||n===Oa||n===za)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Ba||n===Fa||n===ja||n===ka||n===$r||n===Wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Ba)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fa)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ja)return r.COMPRESSED_R11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$r)return r.COMPRESSED_RG11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Va||n===Xa||n===Ha||n===Ya||n===Qa||n===Za||n===Ja||n===Ka||n===qa||n===$a||n===eA||n===tA||n===nA)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eA)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tA)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nA)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===iA||n===sA||n===rA)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===iA)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sA)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rA)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oA||n===aA||n===eo||n===AA)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oA)return r.COMPRESSED_RED_RGTC1_EXT;if(n===aA)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===AA)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var C0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xn({vertexShader:C0,fragmentShader:E0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cl=class extends Xn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",A=1,c=null,l=null,h=null,u=null,d=null,m=null,x=typeof XRWebGLBinding<"u",f=new Al,p={},w=t.getContextAttributes(),T=null,M=null,S=[],b=[],C=new _e,v=null,P=new Rt;P.viewport=new ht;let D=new Rt;D.viewport=new ht;let I=[P,D],U=new Ma,q=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let me=S[re];return me===void 0&&(me=new Is,S[re]=me),me.getTargetRaySpace()},this.getControllerGrip=function(re){let me=S[re];return me===void 0&&(me=new Is,S[re]=me),me.getGripSpace()},this.getHand=function(re){let me=S[re];return me===void 0&&(me=new Is,S[re]=me),me.getHandSpace()};function k(re){let me=b.indexOf(re.inputSource);if(me===-1)return;let he=S[me];he!==void 0&&(he.update(re.inputSource,re.frame,c||o),he.dispatchEvent({type:re.type,data:re.inputSource}))}function J(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",H);for(let re=0;re<S.length;re++){let me=b[re];me!==null&&(b[re]=null,S[re].disconnect(me))}q=null,te=null,f.reset();for(let re in p)delete p[re];e.setRenderTarget(T),d=null,u=null,h=null,s=null,M=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",J),s.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,G=null,Z=null;w.depth&&(Z=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=w.stencil?Oi:Vn,G=w.stencil?Ys:zn);let j={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(j),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new mn(u.textureWidth,u.textureHeight,{format:Tn,type:cn,depthTexture:new ai(u.textureWidth,u.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let he={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new mn(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(A),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function H(re){for(let me=0;me<re.removed.length;me++){let he=re.removed[me],G=b.indexOf(he);G>=0&&(b[G]=null,S[G].disconnect(he))}for(let me=0;me<re.added.length;me++){let he=re.added[me],G=b.indexOf(he);if(G===-1){for(let j=0;j<S.length;j++)if(j>=b.length){b.push(he),G=j;break}else if(b[j]===null){b[j]=he,G=j;break}if(G===-1)break}let Z=S[G];Z&&Z.connect(he)}}let ae=new L,ce=new L;function xe(re,me,he){ae.setFromMatrixPosition(me.matrixWorld),ce.setFromMatrixPosition(he.matrixWorld);let G=ae.distanceTo(ce),Z=me.projectionMatrix.elements,j=he.projectionMatrix.elements,E=Z[14]/(Z[10]-1),se=Z[14]/(Z[10]+1),le=(Z[9]+1)/Z[5],oe=(Z[9]-1)/Z[5],Ae=(Z[8]-1)/Z[0],ye=(j[8]+1)/j[0],Fe=E*Ae,Ze=E*ye,Ve=G/(-Ae+ye),rt=Ve*-Ae;if(me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(rt),re.translateZ(Ve),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Z[10]===-1)re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{let Ce=E+Ve,R=se+Ve,at=Fe-rt,Ye=Ze+(G-rt),_=le*se/R*Ce,g=oe*se/R*Ce;re.projectionMatrix.makePerspective(at,Ye,_,g,Ce,R),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function be(re,me){me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let me=re.near,he=re.far;f.texture!==null&&(f.depthNear>0&&(me=f.depthNear),f.depthFar>0&&(he=f.depthFar)),U.near=D.near=P.near=me,U.far=D.far=P.far=he,(q!==U.near||te!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),q=U.near,te=U.far),U.layers.mask=re.layers.mask|6,P.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;let G=re.parent,Z=U.cameras;be(U,G);for(let j=0;j<Z.length;j++)be(Z[j],G);Z.length===2?xe(U,P,D):U.projectionMatrix.copy(P.projectionMatrix),Re(re,U,G)};function Re(re,me,he){he===null?re.matrix.copy(me.matrixWorld):(re.matrix.copy(he.matrixWorld),re.matrix.invert(),re.matrix.multiply(me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ki*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&d===null))return A},this.setFoveation=function(re){A=re,u!==null&&(u.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(U)},this.getCameraTexture=function(re){return p[re]};let nt=null;function Mt(re,me){if(l=me.getViewerPose(c||o),m=me,l!==null){let he=l.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let G=!1;he.length!==U.cameras.length&&(U.cameras.length=0,G=!0);for(let se=0;se<he.length;se++){let le=he[se],oe=null;if(d!==null)oe=d.getViewport(le);else{let ye=h.getViewSubImage(u,le);oe=ye.viewport,se===0&&(e.setRenderTargetTextures(M,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(M))}let Ae=I[se];Ae===void 0&&(Ae=new Rt,Ae.layers.enable(se),Ae.viewport=new ht,I[se]=Ae),Ae.matrix.fromArray(le.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(le.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(oe.x,oe.y,oe.width,oe.height),se===0&&(U.matrix.copy(Ae.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),G===!0&&U.cameras.push(Ae)}let Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let se=h.getDepthInformation(he[0]);se&&se.isValid&&se.texture&&f.init(se,s.renderState)}if(Z&&Z.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let se=0;se<he.length;se++){let le=he[se].camera;if(le){let oe=p[le];oe||(oe=new Sr,p[le]=oe);let Ae=h.getCameraImage(le);oe.sourceTexture=Ae}}}}for(let he=0;he<S.length;he++){let G=b[he],Z=S[he];G!==null&&Z!==void 0&&Z.update(G,me,c||o)}nt&&nt(re,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),m=null}let it=new $h;it.setAnimationLoop(Mt),this.setAnimationLoop=function(re){nt=re},this.dispose=function(){}}},D0=new He,rd=new Xe;rd.set(-1,0,0,0,1,0,0,0,1);function I0(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,jc(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,w,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),h(f,p)):p.isMeshPhongMaterial?(r(f,p),l(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&d(f,p,M)):p.isMeshMatcapMaterial?(r(f,p),m(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),x(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?A(f,p,w,T):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===qt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===qt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let w=e.get(p),T=w.envMap,M=w.envMapRotation;T&&(f.envMap.value=T,f.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(rd),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function A(f,p,w,T){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*w,f.scale.value=T*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,w){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function x(f,p){let w=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function A(M,S){let b=S.program;n.uniformBlockBinding(M,b)}function c(M,S){let b=s[M.id];b===void 0&&(f(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",w));let C=S.program;n.updateUBOMapping(M,C);let v=e.render.frame;r[M.id]!==v&&(u(M),r[M.id]=v)}function l(M){let S=h();M.__bindingPointIndex=S;let b=i.createBuffer(),C=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let S=s[M.id],b=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,P=b.length;v<P;v++){let D=b[v];if(Array.isArray(D))for(let I=0,U=D.length;I<U;I++)d(D[I],v,I,C);else d(D,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,S,b,C){if(x(M,S,b,C)===!0){let v=M.__offset,P=M.value;if(Array.isArray(P)){let D=0;for(let I=0;I<P.length;I++){let U=P[I],q=p(U);m(U,M.__data,D),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(P,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function m(M,S,b){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,b)}function x(M,S,b,C){let v=M.value,P=S+"_"+b;if(C[P]===void 0)return typeof v=="number"||typeof v=="boolean"?C[P]=v:ArrayBuffer.isView(v)?C[P]=v.slice():C[P]=v.clone(),!0;{let D=C[P];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return C[P]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function f(M){let S=M.uniforms,b=0,C=16;for(let P=0,D=S.length;P<D;P++){let I=Array.isArray(S[P])?S[P]:[S[P]];for(let U=0,q=I.length;U<q;U++){let te=I[U],k=Array.isArray(te.value)?te.value:[te.value];for(let J=0,H=k.length;J<H;J++){let ae=k[J],ce=p(ae),xe=b%C,be=xe%ce.boundary,Re=xe+be;b+=be,Re!==0&&C-Re<ce.storage&&(b+=C-Re),te.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=b,b+=ce.storage}}}let v=b%C;return v>0&&(b+=C-v),M.__size=b,M.__cache={},this}function p(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",M),S}function w(M){let S=M.target;S.removeEventListener("dispose",w);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function T(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:A,update:c,dispose:T}}var L0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function N0(){return Jn===null&&(Jn=new Os(L0,16,16,zi,Zn),Jn.name="DFG_LUT",Jn.minFilter=Ct,Jn.magFilter=Ct,Jn.wrapS=Pn,Jn.wrapT=Pn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var mA=class{constructor(e={}){let{canvas:t=xh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:A=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=cn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,f=new Set([Ra,Ia,Da]),p=new Set([cn,zn,Hs,Ys,_a,Ca]),w=new Uint32Array(4),T=new Int32Array(4),M=new L,S=null,b=null,C=[],v=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,I=!1,U=null,q=null,te=null,k=null;this._outputColorSpace=yt;let J=0,H=0,ae=null,ce=-1,xe=null,be=new ht,Re=new ht,nt=null,Mt=new ke(0),it=0,re=t.width,me=t.height,he=1,G=null,Z=null,j=new ht(0,0,re,me),E=new ht(0,0,re,me),se=!1,le=new zs,oe=!1,Ae=!1,ye=new He,Fe=new L,Ze=new ht,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function Ce(){return ae===null?he:1}let R=n;function at(y,B){return t.getContext(y,B)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:A,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ya}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",lt,!1),R===null){let B="webgl2";if(R=at(B,y),R===null)throw at(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw We("WebGLRenderer: "+y.message),y}let Ye,_,g,F,X,$,ue,ge,ne,ie,Me,Le,Te,ve,ze,pe,Ge,O,z,N,K,ee,Y;function de(){Ye=new kg(R),Ye.init(),K=new _0(R,Ye),_=new Lg(R,Ye,e,K),g=new P0(R,Ye),_.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),q=R.createFramebuffer(),te=R.createFramebuffer(),k=R.createFramebuffer(),F=new Vg(R),X=new u0,$=new S0(R,Ye,g,X,_,K,F),ue=new jg(D),ge=new Qf(R),ee=new Ig(R,ge),ne=new Wg(R,ge,F,ee),ie=new Hg(R,ne,ge,ee,F),O=new Xg(R,_,$),ze=new Ng(X),Me=new l0(D,ue,Ye,_,ee,ze),Le=new I0(D,X),Te=new d0,ve=new M0(Ye),Ge=new Dg(D,ue,g,ie,m,A),pe=new b0(D,ie,_),Y=new R0(R,F,_,g),z=new Rg(R,Ye,F),N=new Gg(R,Ye,F),F.programs=Me.programs,D.capabilities=_,D.extensions=Ye,D.properties=X,D.renderLists=Te,D.shadowMap=pe,D.state=g,D.info=F}de(),x!==cn&&(P=new Qg(x,t.width,t.height,a,s,r));let fe=new cl(D,R);this.xr=fe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let y=Ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(y){y!==void 0&&(he=y,this.setSize(re,me,!1))},this.getSize=function(y){return y.set(re,me)},this.setSize=function(y,B,Q=!0){if(fe.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}re=y,me=B,t.width=Math.floor(y*he),t.height=Math.floor(B*he),Q===!0&&(t.style.width=y+"px",t.style.height=B+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(re*he,me*he).floor()},this.setDrawingBufferSize=function(y,B,Q){re=y,me=B,he=Q,t.width=Math.floor(y*Q),t.height=Math.floor(B*Q),this.setViewport(0,0,y,B)},this.setEffects=function(y){if(x===cn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let B=0;B<y.length;B++)if(y[B].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(be)},this.getViewport=function(y){return y.copy(j)},this.setViewport=function(y,B,Q,W){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,B,Q,W),g.viewport(be.copy(j).multiplyScalar(he).round())},this.getScissor=function(y){return y.copy(E)},this.setScissor=function(y,B,Q,W){y.isVector4?E.set(y.x,y.y,y.z,y.w):E.set(y,B,Q,W),g.scissor(Re.copy(E).multiplyScalar(he).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(y){g.setScissorTest(se=y)},this.setOpaqueSort=function(y){G=y},this.setTransparentSort=function(y){Z=y},this.getClearColor=function(y){return y.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(y=!0,B=!0,Q=!0){let W=0;if(y){let V=!1;if(ae!==null){let Se=ae.texture.format;V=f.has(Se)}if(V){let Se=ae.texture.type,Ie=p.has(Se),Pe=Ge.getClearColor(),Ne=Ge.getClearAlpha(),Be=Pe.r,Qe=Pe.g,Ke=Pe.b;Ie?(w[0]=Be,w[1]=Qe,w[2]=Ke,w[3]=Ne,R.clearBufferuiv(R.COLOR,0,w)):(T[0]=Be,T[1]=Qe,T[2]=Ke,T[3]=Ne,R.clearBufferiv(R.COLOR,0,T))}else W|=R.COLOR_BUFFER_BIT}B&&(W|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),Ge.dispose(),Te.dispose(),ve.dispose(),X.dispose(),ue.dispose(),ie.dispose(),ee.dispose(),Y.dispose(),Me.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Gt),fe.removeEventListener("sessionend",Bn),ji.stop()};function Ue(y){y.preventDefault(),fr("WebGLRenderer: Context Lost."),I=!0}function De(){fr("WebGLRenderer: Context Restored."),I=!1;let y=F.autoReset,B=pe.enabled,Q=pe.autoUpdate,W=pe.needsUpdate,V=pe.type;de(),F.autoReset=y,pe.enabled=B,pe.autoUpdate=Q,pe.needsUpdate=W,pe.type=V}function lt(y){We("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function et(y){let B=y.target;B.removeEventListener("dispose",et),xt(B)}function xt(y){tn(y),X.remove(y)}function tn(y){let B=X.get(y).programs;B!==void 0&&(B.forEach(function(Q){Me.releaseProgram(Q)}),y.isShaderMaterial&&Me.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,Q,W,V,Se){B===null&&(B=Ve);let Ie=V.isMesh&&V.matrixWorld.determinantAffine()<0,Pe=vd(y,B,Q,W,V);g.setMaterial(W,Ie);let Ne=Q.index,Be=1;if(W.wireframe===!0){if(Ne=ne.getWireframeAttribute(Q),Ne===void 0)return;Be=2}let Qe=Q.drawRange,Ke=Q.attributes.position,je=Qe.start*Be,dt=(Qe.start+Qe.count)*Be;Se!==null&&(je=Math.max(je,Se.start*Be),dt=Math.min(dt,(Se.start+Se.count)*Be)),Ne!==null?(je=Math.max(je,0),dt=Math.min(dt,Ne.count)):Ke!=null&&(je=Math.max(je,0),dt=Math.min(dt,Ke.count));let Pt=dt-je;if(Pt<0||Pt===1/0)return;ee.setup(V,W,Pe,Q,Ne);let wt,ft=z;if(Ne!==null&&(wt=ge.get(Ne),ft=N,ft.setIndex(wt)),V.isMesh)W.wireframe===!0?(g.setLineWidth(W.wireframeLinewidth*Ce()),ft.setMode(R.LINES)):ft.setMode(R.TRIANGLES);else if(V.isLine){let Vt=W.linewidth;Vt===void 0&&(Vt=1),g.setLineWidth(Vt*Ce()),V.isLineSegments?ft.setMode(R.LINES):V.isLineLoop?ft.setMode(R.LINE_LOOP):ft.setMode(R.LINE_STRIP)}else V.isPoints?ft.setMode(R.POINTS):V.isSprite&&ft.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))ft.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Vt=V._multiDrawStarts,Ee=V._multiDrawCounts,hn=V._multiDrawCount,st=Ne?ge.get(Ne).bytesPerElement:1,wn=X.get(W).currentProgram.getUniforms();for(let Fn=0;Fn<hn;Fn++)wn.setValue(R,"_gl_DrawID",Fn),ft.render(Vt[Fn]/st,Ee[Fn])}else if(V.isInstancedMesh)ft.renderInstances(je,Pt,V.count);else if(Q.isInstancedBufferGeometry){let Vt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ee=Math.min(Q.instanceCount,Vt);ft.renderInstances(je,Pt,Ee)}else ft.render(je,Pt)};function Dt(y,B,Q){y.transparent===!0&&y.side===kt&&y.forceSinglePass===!1?(y.side=qt,y.needsUpdate=!0,Ao(y,B,Q),y.side=Ln,y.needsUpdate=!0,Ao(y,B,Q),y.side=kt):Ao(y,B,Q)}this.compile=function(y,B,Q=null){Q===null&&(Q=y),b=ve.get(Q),b.init(B),v.push(b),Q.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),y!==Q&&y.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();let W=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Se=V.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){let Pe=Se[Ie];Dt(Pe,Q,V),W.add(Pe)}else Dt(Se,Q,V),W.add(Se)}),b=v.pop(),W},this.compileAsync=function(y,B,Q=null){let W=this.compile(y,B,Q);return new Promise(V=>{function Se(){if(W.forEach(function(Ie){X.get(Ie).currentProgram.isReady()&&W.delete(Ie)}),W.size===0){V(y);return}setTimeout(Se,10)}Ye.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let nn=null;function Ot(y){nn&&nn(y)}function Gt(){ji.stop()}function Bn(){ji.start()}let ji=new $h;ji.setAnimationLoop(Ot),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(y){nn=y,fe.setAnimationLoop(y),y===null?ji.stop():ji.start()},fe.addEventListener("sessionstart",Gt),fe.addEventListener("sessionend",Bn),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(y,B);let Q=fe.enabled===!0&&fe.isPresenting===!0,W=P!==null&&(ae===null||Q)&&P.begin(D,ae);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(B),B=fe.getCamera()),y.isScene===!0&&y.onBeforeRender(D,y,B,ae),b=ve.get(y,v.length),b.init(B),b.state.textureUnits=$.getTextureUnits(),v.push(b),ye.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),le.setFromProjectionMatrix(ye,Rn,B.reversedDepth),Ae=this.localClippingEnabled,oe=ze.init(this.clippingPlanes,Ae),S=Te.get(y,C.length),S.init(),C.push(S),fe.enabled===!0&&fe.isPresenting===!0){let Ie=D.xr.getDepthSensingMesh();Ie!==null&&bA(Ie,B,-1/0,D.sortObjects)}bA(y,B,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(G,Z,B.reversedDepth),rt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,rt&&Ge.addToRenderList(S,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&ze.beginShadows();let V=b.state.shadowsArray;if(pe.render(V,y,B),oe===!0&&ze.endShadows(),(W&&P.hasRenderPass())===!1){let Ie=S.opaque,Pe=S.transmissive;if(b.setupLights(),B.isArrayCamera){let Ne=B.cameras;if(Pe.length>0)for(let Be=0,Qe=Ne.length;Be<Qe;Be++){let Ke=Ne[Be];Hl(Ie,Pe,y,Ke)}rt&&Ge.render(y);for(let Be=0,Qe=Ne.length;Be<Qe;Be++){let Ke=Ne[Be];Xl(S,y,Ke,Ke.viewport)}}else Pe.length>0&&Hl(Ie,Pe,y,B),rt&&Ge.render(y),Xl(S,y,B)}ae!==null&&H===0&&($.updateMultisampleRenderTarget(ae),$.updateRenderTargetMipmap(ae)),W&&P.end(D),y.isScene===!0&&y.onAfterRender(D,y,B),ee.resetDefaultState(),ce=-1,xe=null,v.pop(),v.length>0?(b=v[v.length-1],$.setTextureUnits(b.state.textureUnits),oe===!0&&ze.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,U!==null&&U.renderEnd()};function bA(y,B,Q,W){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)Q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||le.intersectsSprite(y)){W&&Ze.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ye);let Ie=ie.update(y),Pe=y.material;Pe.visible&&S.push(y,Ie,Pe,Q,Ze.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||le.intersectsObject(y))){let Ie=ie.update(y),Pe=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ze.copy(y.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ze.copy(Ie.boundingSphere.center)),Ze.applyMatrix4(y.matrixWorld).applyMatrix4(ye)),Array.isArray(Pe)){let Ne=Ie.groups;for(let Be=0,Qe=Ne.length;Be<Qe;Be++){let Ke=Ne[Be],je=Pe[Ke.materialIndex];je&&je.visible&&S.push(y,Ie,je,Q,Ze.z,Ke)}}else Pe.visible&&S.push(y,Ie,Pe,Q,Ze.z,null)}}let Se=y.children;for(let Ie=0,Pe=Se.length;Ie<Pe;Ie++)bA(Se[Ie],B,Q,W)}function Xl(y,B,Q,W){let{opaque:V,transmissive:Se,transparent:Ie}=y;b.setupLightsView(Q),oe===!0&&ze.setGlobalState(D.clippingPlanes,Q),W&&g.viewport(be.copy(W)),V.length>0&&ao(V,B,Q),Se.length>0&&ao(Se,B,Q),Ie.length>0&&ao(Ie,B,Q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Hl(y,B,Q,W){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){let je=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new mn(1,1,{generateMipmaps:!0,type:je?Zn:cn,minFilter:On,samples:Math.max(4,_.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let Se=b.state.transmissionRenderTarget[W.id],Ie=W.viewport||be;Se.setSize(Ie.z*D.transmissionResolutionScale,Ie.w*D.transmissionResolutionScale);let Pe=D.getRenderTarget(),Ne=D.getActiveCubeFace(),Be=D.getActiveMipmapLevel();D.setRenderTarget(Se),D.getClearColor(Mt),it=D.getClearAlpha(),it<1&&D.setClearColor(16777215,.5),D.clear(),rt&&Ge.render(Q);let Qe=D.toneMapping;D.toneMapping=Nn;let Ke=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),oe===!0&&ze.setGlobalState(D.clippingPlanes,W),ao(y,Q,W),$.updateMultisampleRenderTarget(Se),$.updateRenderTargetMipmap(Se),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let dt=0,Pt=B.length;dt<Pt;dt++){let wt=B[dt],{object:ft,geometry:Vt,material:Ee,group:hn}=wt;if(Ee.side===kt&&ft.layers.test(W.layers)){let st=Ee.side;Ee.side=qt,Ee.needsUpdate=!0,Yl(ft,Q,W,Vt,Ee,hn),Ee.side=st,Ee.needsUpdate=!0,je=!0}}je===!0&&($.updateMultisampleRenderTarget(Se),$.updateRenderTargetMipmap(Se))}D.setRenderTarget(Pe,Ne,Be),D.setClearColor(Mt,it),Ke!==void 0&&(W.viewport=Ke),D.toneMapping=Qe}function ao(y,B,Q){let W=B.isScene===!0?B.overrideMaterial:null;for(let V=0,Se=y.length;V<Se;V++){let Ie=y[V],{object:Pe,geometry:Ne,group:Be}=Ie,Qe=Ie.material;Qe.allowOverride===!0&&W!==null&&(Qe=W),Pe.layers.test(Q.layers)&&Yl(Pe,B,Q,Ne,Qe,Be)}}function Yl(y,B,Q,W,V,Se){y.onBeforeRender(D,B,Q,W,V,Se),y.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(D,B,Q,W,y,Se),V.transparent===!0&&V.side===kt&&V.forceSinglePass===!1?(V.side=qt,V.needsUpdate=!0,D.renderBufferDirect(Q,B,W,V,y,Se),V.side=Ln,V.needsUpdate=!0,D.renderBufferDirect(Q,B,W,V,y,Se),V.side=kt):D.renderBufferDirect(Q,B,W,V,y,Se),y.onAfterRender(D,B,Q,W,V,Se)}function Ao(y,B,Q){B.isScene!==!0&&(B=Ve);let W=X.get(y),V=b.state.lights,Se=b.state.shadowsArray,Ie=V.state.version,Pe=Me.getParameters(y,V.state,Se,B,Q,b.state.lightProbeGridArray),Ne=Me.getProgramCacheKey(Pe),Be=W.programs;W.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let Qe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;W.envMap=ue.get(y.envMap||W.environment,Qe),W.envMapRotation=W.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,Be===void 0&&(y.addEventListener("dispose",et),Be=new Map,W.programs=Be);let Ke=Be.get(Ne);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===Ie)return Zl(y,Pe),Ke}else Pe.uniforms=Me.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,Q,Pe),y.onBeforeCompile(Pe,D),Ke=Me.acquireProgram(Pe,Ne),Be.set(Ne,Ke),W.uniforms=Pe.uniforms;let je=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(je.clippingPlanes=ze.uniform),Zl(y,Pe),W.needsLights=xd(y),W.lightsStateVersion=Ie,W.needsLights&&(je.ambientLightColor.value=V.state.ambient,je.lightProbe.value=V.state.probe,je.directionalLights.value=V.state.directional,je.directionalLightShadows.value=V.state.directionalShadow,je.spotLights.value=V.state.spot,je.spotLightShadows.value=V.state.spotShadow,je.rectAreaLights.value=V.state.rectArea,je.ltc_1.value=V.state.rectAreaLTC1,je.ltc_2.value=V.state.rectAreaLTC2,je.pointLights.value=V.state.point,je.pointLightShadows.value=V.state.pointShadow,je.hemisphereLights.value=V.state.hemi,je.directionalShadowMatrix.value=V.state.directionalShadowMatrix,je.spotLightMatrix.value=V.state.spotLightMatrix,je.spotLightMap.value=V.state.spotLightMap,je.pointShadowMatrix.value=V.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=Ke,W.uniformsList=null,Ke}function Ql(y){if(y.uniformsList===null){let B=y.currentProgram.getUniforms();y.uniformsList=Js.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function Zl(y,B){let Q=X.get(y);Q.outputColorSpace=B.outputColorSpace,Q.batching=B.batching,Q.batchingColor=B.batchingColor,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.instancingMorph=B.instancingMorph,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function gd(y,B){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let Q=0,W=y.length;Q<W;Q++){let V=y[Q];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function vd(y,B,Q,W,V){B.isScene!==!0&&(B=Ve),$.resetTextureUnits();let Se=B.fog,Ie=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,Pe=ae===null?D.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:qe.workingColorSpace,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Be=ue.get(W.envMap||Ie,Ne),Qe=W.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ke=!!Q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),je=!!Q.morphAttributes.position,dt=!!Q.morphAttributes.normal,Pt=!!Q.morphAttributes.color,wt=Nn;W.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(wt=D.toneMapping);let ft=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Vt=ft!==void 0?ft.length:0,Ee=X.get(W),hn=b.state.lights;if(oe===!0&&(Ae===!0||y!==xe)){let gt=y===xe&&W.id===ce;ze.setState(W,y,gt)}let st=!1;W.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==hn.state.version||Ee.outputColorSpace!==Pe||V.isBatchedMesh&&Ee.batching===!1||!V.isBatchedMesh&&Ee.batching===!0||V.isBatchedMesh&&Ee.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ee.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ee.instancing===!1||!V.isInstancedMesh&&Ee.instancing===!0||V.isSkinnedMesh&&Ee.skinning===!1||!V.isSkinnedMesh&&Ee.skinning===!0||V.isInstancedMesh&&Ee.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ee.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ee.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ee.instancingMorph===!1&&V.morphTexture!==null||Ee.envMap!==Be||W.fog===!0&&Ee.fog!==Se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ze.numPlanes||Ee.numIntersection!==ze.numIntersection)||Ee.vertexAlphas!==Qe||Ee.vertexTangents!==Ke||Ee.morphTargets!==je||Ee.morphNormals!==dt||Ee.morphColors!==Pt||Ee.toneMapping!==wt||Ee.morphTargetsCount!==Vt||!!Ee.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Ee.__version=W.version);let wn=Ee.currentProgram;st===!0&&(wn=Ao(W,B,V),U&&W.isNodeMaterial&&U.onUpdateProgram(W,wn,Ee));let Fn=!1,mi=!1,as=!1,pt=wn.getUniforms(),St=Ee.uniforms;if(g.useProgram(wn.program)&&(Fn=!0,mi=!0,as=!0),W.id!==ce&&(ce=W.id,mi=!0),Ee.needsLights){let gt=gd(b.state.lightProbeGridArray,V);Ee.lightProbeGrid!==gt&&(Ee.lightProbeGrid=gt,mi=!0)}if(Fn||xe!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),pt.setValue(R,"projectionMatrix",y.projectionMatrix),pt.setValue(R,"viewMatrix",y.matrixWorldInverse);let vi=pt.map.cameraPosition;vi!==void 0&&vi.setValue(R,Fe.setFromMatrixPosition(y.matrixWorld)),_.logarithmicDepthBuffer&&pt.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pt.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),xe!==y&&(xe=y,mi=!0,as=!0)}if(Ee.needsLights&&(hn.state.directionalShadowMap.length>0&&pt.setValue(R,"directionalShadowMap",hn.state.directionalShadowMap,$),hn.state.spotShadowMap.length>0&&pt.setValue(R,"spotShadowMap",hn.state.spotShadowMap,$),hn.state.pointShadowMap.length>0&&pt.setValue(R,"pointShadowMap",hn.state.pointShadowMap,$)),V.isSkinnedMesh){pt.setOptional(R,V,"bindMatrix"),pt.setOptional(R,V,"bindMatrixInverse");let gt=V.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),pt.setValue(R,"boneTexture",gt.boneTexture,$))}V.isBatchedMesh&&(pt.setOptional(R,V,"batchingTexture"),pt.setValue(R,"batchingTexture",V._matricesTexture,$),pt.setOptional(R,V,"batchingIdTexture"),pt.setValue(R,"batchingIdTexture",V._indirectTexture,$),pt.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&pt.setValue(R,"batchingColorTexture",V._colorsTexture,$));let gi=Q.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&O.update(V,Q,wn),(mi||Ee.receiveShadow!==V.receiveShadow)&&(Ee.receiveShadow=V.receiveShadow,pt.setValue(R,"receiveShadow",V.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(St.envMapIntensity.value=B.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=N0()),mi){if(pt.setValue(R,"toneMappingExposure",D.toneMappingExposure),Ee.needsLights&&Md(St,as),Se&&W.fog===!0&&Le.refreshFogUniforms(St,Se),Le.refreshMaterialUniforms(St,W,he,me,b.state.transmissionRenderTarget[y.id]),Ee.needsLights&&Ee.lightProbeGrid){let gt=Ee.lightProbeGrid;St.probesSH.value=gt.texture,St.probesMin.value.copy(gt.boundingBox.min),St.probesMax.value.copy(gt.boundingBox.max),St.probesResolution.value.copy(gt.resolution)}Js.upload(R,Ql(Ee),St,$)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Js.upload(R,Ql(Ee),St,$),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pt.setValue(R,"center",V.center),pt.setValue(R,"modelViewMatrix",V.modelViewMatrix),pt.setValue(R,"normalMatrix",V.normalMatrix),pt.setValue(R,"modelMatrix",V.matrixWorld),W.uniformsGroups!==void 0){let gt=W.uniformsGroups;for(let vi=0,As=gt.length;vi<As;vi++){let Jl=gt[vi];Y.update(Jl,wn),Y.bind(Jl,wn)}}return wn}function Md(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function xd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(y,B,Q){let W=X.get(y);W.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=B,X.get(y.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,B){let Q=X.get(y);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,Q=0){ae=y,J=B,H=Q;let W=null,V=!1,Se=!1;if(y){let Pe=X.get(y);if(Pe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(R.FRAMEBUFFER,Pe.__webglFramebuffer),be.copy(y.viewport),Re.copy(y.scissor),nt=y.scissorTest,g.viewport(be),g.scissor(Re),g.setScissorTest(nt),ce=-1;return}else if(Pe.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(Pe.__hasExternalTextures)$.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Qe=y.depthTexture;if(Pe.__boundDepthTexture!==Qe){if(Qe!==null&&X.has(Qe)&&(y.width!==Qe.image.width||y.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}let Ne=y.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Se=!0);let Be=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Be[B])?W=Be[B][Q]:W=Be[B],V=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?W=X.get(y).__webglMultisampledFramebuffer:Array.isArray(Be)?W=Be[Q]:W=Be,be.copy(y.viewport),Re.copy(y.scissor),nt=y.scissorTest}else be.copy(j).multiplyScalar(he).floor(),Re.copy(E).multiplyScalar(he).floor(),nt=se;if(Q!==0&&(W=q),g.bindFramebuffer(R.FRAMEBUFFER,W)&&g.drawBuffers(y,W),g.viewport(be),g.scissor(Re),g.setScissorTest(nt),V){let Pe=X.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,Q)}else if(Se){let Pe=B;for(let Ne=0;Ne<y.textures.length;Ne++){let Be=X.get(y.textures[Ne]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ne,Be.__webglTexture,Q,Pe)}}else if(y!==null&&Q!==0){let Pe=X.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Pe.__webglTexture,Q)}ce=-1},this.readRenderTargetPixels=function(y,B,Q,W,V,Se,Ie,Pe=0){if(!(y&&y.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){g.bindFramebuffer(R.FRAMEBUFFER,Ne);try{let Be=y.textures[Pe],Qe=Be.format,Ke=Be.type;if(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Pe),!_.textureFormatReadable(Qe)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_.textureTypeReadable(Ke)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-W&&Q>=0&&Q<=y.height-V&&R.readPixels(B,Q,W,V,K.convert(Qe),K.convert(Ke),Se)}finally{let Be=ae!==null?X.get(ae).__webglFramebuffer:null;g.bindFramebuffer(R.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(y,B,Q,W,V,Se,Ie,Pe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne)if(B>=0&&B<=y.width-W&&Q>=0&&Q<=y.height-V){g.bindFramebuffer(R.FRAMEBUFFER,Ne);let Be=y.textures[Pe],Qe=Be.format,Ke=Be.type;if(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Pe),!_.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.bufferData(R.PIXEL_PACK_BUFFER,Se.byteLength,R.STREAM_READ),R.readPixels(B,Q,W,V,K.convert(Qe),K.convert(Ke),0);let dt=ae!==null?X.get(ae).__webglFramebuffer:null;g.bindFramebuffer(R.FRAMEBUFFER,dt);let Pt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Th(R,Pt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Se),R.deleteBuffer(je),R.deleteSync(Pt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,B=null,Q=0){let W=Math.pow(2,-Q),V=Math.floor(y.image.width*W),Se=Math.floor(y.image.height*W),Ie=B!==null?B.x:0,Pe=B!==null?B.y:0;$.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,Q,0,0,Ie,Pe,V,Se),g.unbindTexture()},this.copyTextureToTexture=function(y,B,Q=null,W=null,V=0,Se=0){let Ie,Pe,Ne,Be,Qe,Ke,je,dt,Pt,wt=y.isCompressedTexture?y.mipmaps[Se]:y.image;if(Q!==null)Ie=Q.max.x-Q.min.x,Pe=Q.max.y-Q.min.y,Ne=Q.isBox3?Q.max.z-Q.min.z:1,Be=Q.min.x,Qe=Q.min.y,Ke=Q.isBox3?Q.min.z:0;else{let St=Math.pow(2,-V);Ie=Math.floor(wt.width*St),Pe=Math.floor(wt.height*St),y.isDataArrayTexture?Ne=wt.depth:y.isData3DTexture?Ne=Math.floor(wt.depth*St):Ne=1,Be=0,Qe=0,Ke=0}W!==null?(je=W.x,dt=W.y,Pt=W.z):(je=0,dt=0,Pt=0);let ft=K.convert(B.format),Vt=K.convert(B.type),Ee;B.isData3DTexture?($.setTexture3D(B,0),Ee=R.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?($.setTexture2DArray(B,0),Ee=R.TEXTURE_2D_ARRAY):($.setTexture2D(B,0),Ee=R.TEXTURE_2D),g.activeTexture(R.TEXTURE0),g.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),g.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),g.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);let hn=g.getParameter(R.UNPACK_ROW_LENGTH),st=g.getParameter(R.UNPACK_IMAGE_HEIGHT),wn=g.getParameter(R.UNPACK_SKIP_PIXELS),Fn=g.getParameter(R.UNPACK_SKIP_ROWS),mi=g.getParameter(R.UNPACK_SKIP_IMAGES);g.pixelStorei(R.UNPACK_ROW_LENGTH,wt.width),g.pixelStorei(R.UNPACK_IMAGE_HEIGHT,wt.height),g.pixelStorei(R.UNPACK_SKIP_PIXELS,Be),g.pixelStorei(R.UNPACK_SKIP_ROWS,Qe),g.pixelStorei(R.UNPACK_SKIP_IMAGES,Ke);let as=y.isDataArrayTexture||y.isData3DTexture,pt=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){let St=X.get(y),gi=X.get(B),gt=X.get(St.__renderTarget),vi=X.get(gi.__renderTarget);g.bindFramebuffer(R.READ_FRAMEBUFFER,gt.__webglFramebuffer),g.bindFramebuffer(R.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let As=0;As<Ne;As++)as&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,X.get(y).__webglTexture,V,Ke+As),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,X.get(B).__webglTexture,Se,Pt+As)),R.blitFramebuffer(Be,Qe,Ie,Pe,je,dt,Ie,Pe,R.DEPTH_BUFFER_BIT,R.NEAREST);g.bindFramebuffer(R.READ_FRAMEBUFFER,null),g.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||X.has(y)){let St=X.get(y),gi=X.get(B);g.bindFramebuffer(R.READ_FRAMEBUFFER,te),g.bindFramebuffer(R.DRAW_FRAMEBUFFER,k);for(let gt=0;gt<Ne;gt++)as?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,St.__webglTexture,V,Ke+gt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,St.__webglTexture,V),pt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,gi.__webglTexture,Se,Pt+gt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,gi.__webglTexture,Se),V!==0?R.blitFramebuffer(Be,Qe,Ie,Pe,je,dt,Ie,Pe,R.COLOR_BUFFER_BIT,R.NEAREST):pt?R.copyTexSubImage3D(Ee,Se,je,dt,Pt+gt,Be,Qe,Ie,Pe):R.copyTexSubImage2D(Ee,Se,je,dt,Be,Qe,Ie,Pe);g.bindFramebuffer(R.READ_FRAMEBUFFER,null),g.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else pt?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(Ee,Se,je,dt,Pt,Ie,Pe,Ne,ft,Vt,wt.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(Ee,Se,je,dt,Pt,Ie,Pe,Ne,ft,wt.data):R.texSubImage3D(Ee,Se,je,dt,Pt,Ie,Pe,Ne,ft,Vt,wt):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Se,je,dt,Ie,Pe,ft,Vt,wt.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Se,je,dt,wt.width,wt.height,ft,wt.data):R.texSubImage2D(R.TEXTURE_2D,Se,je,dt,Ie,Pe,ft,Vt,wt);g.pixelStorei(R.UNPACK_ROW_LENGTH,hn),g.pixelStorei(R.UNPACK_IMAGE_HEIGHT,st),g.pixelStorei(R.UNPACK_SKIP_PIXELS,wn),g.pixelStorei(R.UNPACK_SKIP_ROWS,Fn),g.pixelStorei(R.UNPACK_SKIP_IMAGES,mi),Se===0&&B.generateMipmaps&&R.generateMipmap(Ee),g.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){J=0,H=0,ae=null,g.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};function ll(i,e){if(e===Oc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Qs||e===to){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let A=0;A<a.count;A++)o.push(A);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Qs)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function od(i){let e=new Map,t=new Map,n=i.clone();return ad(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(A){return t.get(A)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ad(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)ad(i.children[n],e.children[n],t)}var MA=class extends Yn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gl(t)}),this.register(function(t){return new vl(t)}),this.register(function(t){return new _l(t)}),this.register(function(t){return new Cl(t)}),this.register(function(t){return new El(t)}),this.register(function(t){return new xl(t)}),this.register(function(t){return new yl(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new wl(t)}),this.register(function(t){return new ml(t)}),this.register(function(t){return new bl(t)}),this.register(function(t){return new Ml(t)}),this.register(function(t){return new Sl(t)}),this.register(function(t){return new Pl(t)}),this.register(function(t){return new fl(t)}),this.register(function(t){return new xA(t,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new xA(t,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Dl(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=fi.extractUrlBase(e);o=fi.resolveURL(c,this.path)}else o=fi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},A=new Gs(this.manager);A.setPath(this.path),A.setResponseType("arraybuffer"),A.setRequestHeader(this.requestHeader),A.setWithCredentials(this.withCredentials),A.load(e,function(c){try{r.parse(c,o,function(l){t(l),r.manager.itemEnd(e)},a)}catch(l){a(l)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},A=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(A.decode(new Uint8Array(e,0,4))===hd){try{o[tt.KHR_BINARY_GLTF]=new Il(e)}catch(h){s&&s(h);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(A.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Bl(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let h=this.pluginCallbacks[l](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let l=0;l<r.extensionsUsed.length;++l){let h=r.extensionsUsed[l],u=r.extensionsRequired||[];switch(h){case tt.KHR_MATERIALS_UNLIT:o[h]=new pl;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Rl(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[h]=new Ll;break;case tt.KHR_MESH_QUANTIZATION:o[h]=new Nl;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function z0(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Et(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fl=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,A=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,l=new ke(16777215);A.color!==void 0&&l.setRGB(A.color[0],A.color[1],A.color[2],Kt);let h=A.range!==void 0?A.range:0;switch(A.type){case"directional":c=new ts(l),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gr(l),c.distance=h;break;case"spot":c=new Wr(l),c.distance=h,A.spot=A.spot||{},A.spot.innerConeAngle=A.spot.innerConeAngle!==void 0?A.spot.innerConeAngle:0,A.spot.outerConeAngle=A.spot.outerConeAngle!==void 0?A.spot.outerConeAngle:Math.PI/4,c.angle=A.spot.outerConeAngle,c.penumbra=1-A.spot.innerConeAngle/A.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+A.type)}return c.position.set(0,0,0),qn(c,A),A.intensity!==void 0&&(c.intensity=A.intensity),c.name=t.createUniqueName(A.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(A){return n._getNodeRef(t.cache,a,A)})}},pl=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){let s=[];e.color=new ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(s)}},ml=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},gl=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Et(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(r,r)}return Promise.all(s)}},vl=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Ml=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Et(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},xl=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Et(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Kt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,yt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},yl=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Tl=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Et(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(r[0],r[1],r[2],Kt),Promise.all(s)}},wl=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},bl=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(r[0],r[1],r[2],Kt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,yt)),Promise.all(s)}},Pl=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return Et(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Sl=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Et(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},_l=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Cl=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],A=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(A=c)}return n.loadTextureImage(e,o.source,A)}},El=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],A=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(A=c)}return n.loadTextureImage(e,o.source,A)}},xA=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let A=s.byteOffset||0,c=s.byteLength||0,l=s.count,h=s.byteStride,u=new Uint8Array(a,A,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(l,h,u,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(l*h);return o.decodeGltfBuffer(new Uint8Array(d),l,h,u,s.mode,s.filter),d})})}else return null}},Dl=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==_n.TRIANGLES&&c.mode!==_n.TRIANGLE_STRIP&&c.mode!==_n.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],A={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(l=>(A[c]=l,A[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let l=c.pop(),h=l.isGroup?l.children:[l],u=c[0].count,d=[];for(let m of h){let x=new He,f=new L,p=new pn,w=new L(1,1,1),T=new on(m.geometry,m.material,u);for(let M=0;M<u;M++)A.TRANSLATION&&f.fromBufferAttribute(A.TRANSLATION,M),A.ROTATION&&p.fromBufferAttribute(A.ROTATION,M),A.SCALE&&w.fromBufferAttribute(A.SCALE,M),T.setMatrixAt(M,x.compose(f,p,w));for(let M in A)if(M==="_COLOR_0"){let S=A[M];T.instanceColor=new Ci(S.array,S.itemSize,S.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,A[M]);vt.prototype.copy.call(T,m),this.parser.assignFinalMaterial(T),d.push(T)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}},hd="glTF",ro=12,Ad={JSON:1313821514,BIN:5130562},Il=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ro),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ro,r=new DataView(e,ro),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let A=r.getUint32(o,!0);if(o+=4,A===Ad.JSON){let c=new Uint8Array(e,ro+o,a);this.content=n.decode(c)}else if(A===Ad.BIN){let c=ro+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Rl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},A={},c={};for(let l in o){let h=zl[l]||l.toLowerCase();a[h]=o[l]}for(let l in e.attributes){let h=zl[l]||l.toLowerCase();if(o[l]!==void 0){let u=n.accessors[e.attributes[l]],d=qs[u.componentType];c[h]=d.name,A[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(l){return new Promise(function(h,u){s.decodeDracoFile(l,function(d){for(let m in d.attributes){let x=d.attributes[m],f=A[m];f!==void 0&&(x.normalized=f)}h(d)},a,c,Kt,u)})})}},Ll=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Nl=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},yA=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=a*2,c=a*3,l=s-t,h=(n-t)/l,u=h*h,d=u*h,m=e*c,x=m-c,f=-2*d+3*u,p=d-u,w=1-f,T=p-u+h;for(let M=0;M!==a;M++){let S=o[x+M+a],b=o[x+M+A]*l,C=o[m+M+a],v=o[m+M]*l;r[M]=w*S+T*b+f*C+p*v}return r}},U0=new pn,Ol=class extends yA{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return U0.fromArray(r).normalize().toArray(r),r}},_n={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cd={9728:_t,9729:Ct,9984:Pa,9985:Xs,9986:is,9987:On},ld={33071:Pn,33648:Ps,10497:Gn},ul={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},B0={CUBICSPLINE:void 0,LINEAR:Ji,STEP:Zi},hl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function F0(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ci({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),i.DefaultMaterial}function os(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function j0(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,l=e.length;c<l;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],A=[];for(let c=0,l=e.length;c<l;c++){let h=e[c];if(n){let u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(u)}if(s){let u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(u)}if(r){let u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;A.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(A)]).then(function(c){let l=c[0],h=c[1],u=c[2];return n&&(i.morphAttributes.position=l),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function k0(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function W0(i){let e,t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dl(t.attributes):e=i.indices+":"+dl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+dl(i.targets[n]);return e}function dl(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ul(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function G0(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var V0=new He,Bl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new z0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let A=a.match(/Version\/(\d+)/);s=n&&A?parseInt(A[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Br(this.options.manager):this.textureLoader=new Vr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return os(r,a,s),qn(a,s),Promise.all(n._invokeAll(function(A){return A.afterRoot&&A.afterRoot(a)})).then(function(){for(let A of a.scenes)A.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,A=o.length;a<A;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let A=this.associations.get(o);A!=null&&this.associations.set(a,A);for(let[c,l]of o.children.entries())r(l,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(fi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=ul[s.type],a=qs[s.componentType],A=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Lt(c,o,A))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],A=ul[s.type],c=qs[s.componentType],l=c.BYTES_PER_ELEMENT,h=l*A,u=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,f;if(d&&d!==h){let p=Math.floor(u/d),w="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,T=t.cache.get(w);T||(x=new c(a,p*d,s.count*d/l),T=new Rs(x,d/l),t.cache.add(w,T)),f=new Ls(T,A,u%d/l,m)}else a===null?x=new c(s.count*A):x=new c(a,u,s.count*A),f=new Lt(x,A,m);if(s.sparse!==void 0){let p=ul.SCALAR,w=qs[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,S=new w(o[1],T,s.sparse.count*p),b=new c(o[2],M,s.sparse.count*A);a!==null&&(f=new Lt(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let C=0,v=S.length;C<v;C++){let P=S[C];if(f.setX(P,b[C*A]),A>=2&&f.setY(P,b[C*A+1]),A>=3&&f.setZ(P,b[C*A+2]),A>=4&&f.setW(P,b[C*A+3]),A>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=m}return f})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let A=n.manager.getHandler(o.uri);A!==null&&(a=A)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],A=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[A])return this.textureCache[A];let c=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=o.name||a.name||"",l.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(l.name=a.uri);let u=(r.samplers||{})[o.sampler]||{};return l.magFilter=cd[u.magFilter]||Ct,l.minFilter=cd[u.minFilter]||On,l.wrapS=ld[u.wrapS]||Gn,l.wrapT=ld[u.wrapT]||Gn,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==_t&&l.minFilter!==Ct,s.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[A]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,A=o.uri||"",c=!1;if(o.bufferView!==void 0)A=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let u=new Blob([h],{type:o.mimeType});return A=a.createObjectURL(u),A});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(A).then(function(h){return new Promise(function(u,d){let m=u;t.isImageBitmapLoader===!0&&(m=function(x){let f=new zt(x);f.needsUpdate=!0,u(f)}),t.load(fi.resolveURL(h,r.path),m,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(A),qn(h,o),h.userData.mimeType=o.mimeType||G0(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",A),h});return this.sourceCache[e]=l,l}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let A=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,A)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,A=this.cache.get(a);A||(A=new Bs,rn.prototype.copy.call(A,n),A.color.copy(n.color),A.map=n.map,A.sizeAttenuation=!1,this.cache.add(a,A)),n=A}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,A=this.cache.get(a);A||(A=new Us,rn.prototype.copy.call(A,n),A.color.copy(n.color),A.map=n.map,this.cache.add(a,A)),n=A}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let A=this.cache.get(a);A||(A=n.clone(),r&&(A.vertexColors=!0),o&&(A.flatShading=!0),s&&(A.normalScale&&(A.normalScale.y*=-1),A.clearcoatNormalScale&&(A.clearcoatNormalScale.y*=-1)),this.cache.add(a,A),this.associations.set(A,this.associations.get(n))),n=A}e.material=n}getMaterialType(){return ci}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},A=r.extensions||{},c=[];if(A[tt.KHR_MATERIALS_UNLIT]){let h=s[tt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Kt),a.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,yt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=kt);let l=r.alphaMode||hl.OPAQUE;if(l===hl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,l===hl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Qt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Qt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Qt){let h=r.emissiveFactor;a.emissive=new ke().setRGB(h[0],h[1],h[2],Kt)}return r.emissiveTexture!==void 0&&o!==Qt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),qn(h,r),t.associations.set(h,{materials:e}),r.extensions&&os(s,h,r),h})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(A){return ud(A,a,t)})}let o=[];for(let a=0,A=e.length;a<A;a++){let c=e[a],l=W0(c),h=s[l];if(h)o.push(h.promise);else{let u;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=ud(new bt,c,t),s[l]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let A=0,c=o.length;A<c;A++){let l=o[A].material===void 0?F0(this.cache):this.getDependency("material",o[A].material);a.push(l)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(A){let c=A.slice(0,A.length-1),l=A[A.length-1],h=[];for(let d=0,m=l.length;d<m;d++){let x=l[d],f=o[d],p,w=c[d];if(f.mode===_n.TRIANGLES||f.mode===_n.TRIANGLE_STRIP||f.mode===_n.TRIANGLE_FAN||f.mode===void 0)p=r.isSkinnedMesh===!0?new xr(x,w):new Nt(x,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),f.mode===_n.TRIANGLE_STRIP?p.geometry=ll(p.geometry,to):f.mode===_n.TRIANGLE_FAN&&(p.geometry=ll(p.geometry,Qs));else if(f.mode===_n.LINES)p=new Tr(x,w);else if(f.mode===_n.LINE_STRIP)p=new qi(x,w);else if(f.mode===_n.LINE_LOOP)p=new wr(x,w);else if(f.mode===_n.POINTS)p=new br(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(p.geometry.morphAttributes).length>0&&k0(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),qn(p,r),f.extensions&&os(s,p,f),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&os(s,h[0],r),h[0];let u=new Yt;r.extensions&&os(s,u,r),t.associations.set(u,{meshes:e});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(Bc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Li(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],A=[];for(let c=0,l=o.length;c<l;c++){let h=o[c];if(h){a.push(h);let u=new He;r!==null&&u.fromArray(r.array,c*16),A.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new yr(a,A)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],A=[],c=[],l=[];for(let h=0,u=s.channels.length;h<u;h++){let d=s.channels[h],m=s.samplers[d.sampler],x=d.target,f=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,w=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",f)),a.push(this.getDependency("accessor",p)),A.push(this.getDependency("accessor",w)),c.push(m),l.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(A),Promise.all(c),Promise.all(l)]).then(function(h){let u=h[0],d=h[1],m=h[2],x=h[3],f=h[4],p=[];for(let T=0,M=u.length;T<M;T++){let S=u[T],b=d[T],C=m[T],v=x[T],P=f[T];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let D=n._createAnimationTracks(S,b,C,v,P);if(D)for(let I=0;I<D.length;I++)p.push(D[I])}let w=new Ur(r,void 0,p);return qn(w,s),w})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let A=0,c=s.weights.length;A<c;A++)a.morphTargetInfluences[A]=s.weights[A]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,l=a.length;c<l;c++)o.push(n.getDependency("node",a[c]));let A=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),A]).then(function(c){let l=c[0],h=c[1],u=c[2];u!==null&&l.traverse(function(d){d.isSkinnedMesh&&d.bind(u,V0)});for(let d=0,m=h.length;d<m;d++)l.add(h[d]);if(l.userData.pivot!==void 0&&h.length>0){let d=l.userData.pivot,m=h[0];l.pivot=new L().fromArray(d),l.position.x-=d[0],l.position.y-=d[1],l.position.z-=d[2],m.position.set(0,0,0),delete l.userData.pivot}return l})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],A=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return A&&a.push(A),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let l;if(r.isBone===!0?l=new Ns:c.length>1?l=new Yt:c.length===1?l=c[0]:l=new vt,l!==c[0])for(let h=0,u=c.length;h<u;h++)l.add(c[h]);if(r.name&&(l.userData.name=r.name,l.name=o),qn(l,r),r.extensions&&os(n,l,r),r.matrix!==void 0){let h=new He;h.fromArray(r.matrix),l.applyMatrix4(h)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);if(!s.associations.has(l))s.associations.set(l,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(l);s.associations.set(l,{...h})}return s.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Yt;n.name&&(r.name=s.createUniqueName(n.name)),qn(r,n),n.extensions&&os(t,r,n);let o=n.nodes||[],a=[];for(let A=0,c=o.length;A<c;A++)a.push(s.getDependency("node",o[A]));return Promise.all(a).then(function(A){for(let l=0,h=A.length;l<h;l++){let u=A[l];u.parent!==null?r.add(od(u)):r.add(u)}let c=l=>{let h=new Map;for(let[u,d]of s.associations)(u instanceof rn||u instanceof zt)&&h.set(u,d);return l.traverse(u=>{let d=s.associations.get(u);d!=null&&h.set(u,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,A=[];function c(d){d.morphTargetInfluences&&A.push(d.name?d.name:d.uuid)}Bi[r.path]===Bi.weights?(c(e),e.isGroup&&e.children.forEach(c)):A.push(a);let l;switch(Bi[r.path]){case Bi.weights:l=ui;break;case Bi.rotation:l=hi;break;case Bi.translation:case Bi.scale:l=Ri;break;default:switch(n.itemSize){case 1:l=ui;break;case 2:case 3:default:l=Ri;break}break}let h=s.interpolation!==void 0?B0[s.interpolation]:Ji,u=this._getArrayFromAccessor(n);for(let d=0,m=A.length;d<m;d++){let x=new l(A[d]+"."+Bi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ul(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof hi?Ol:yA;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function X0(i,e,t){let n=e.attributes,s=new gn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],A=a.min,c=a.max;if(A!==void 0&&c!==void 0){if(s.set(new L(A[0],A[1],A[2]),new L(c[0],c[1],c[2])),a.normalized){let l=Ul(qs[a.componentType]);s.min.multiplyScalar(l),s.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,A=new L;for(let c=0,l=r.length;c<l;c++){let h=r[c];if(h.POSITION!==void 0){let u=t.json.accessors[h.POSITION],d=u.min,m=u.max;if(d!==void 0&&m!==void 0){if(A.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),A.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),A.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),u.normalized){let x=Ul(qs[u.componentType]);A.multiplyScalar(x)}a.max(A)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new sn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function ud(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(A){i.setAttribute(a,A)})}for(let o in n){let a=zl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return qe.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),qn(i,e),X0(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?j0(i,e.targets,t):i})}var dd="Z2xURgIAAABIvQEAzEsAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NC41LjUxIiwidmVyc2lvbiI6IjIuMCJ9LCJleHRlbnNpb25zVXNlZCI6WyJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIl0sInNjZW5lIjowLCJzY2VuZXMiOlt7Im5hbWUiOiJCaWwiLCJub2RlcyI6WzIzXX1dLCJub2RlcyI6W3sibWVzaCI6MCwibmFtZSI6IkJfc3RvbHBlX0giLCJyb3RhdGlvbiI6WzAsMCwtMC4xNDM1MzAzMDkyMDAyODY4NywwLjk4OTY0NTk1Nzk0Njc3NzNdLCJzY2FsZSI6WzEsMS4wNzk5OTk5MjM3MDYwNTQ3LDFdLCJ0cmFuc2xhdGlvbiI6Wy0wLjczMTk5OTk5MzMyNDI3OTgsMS4xNjk5OTk5NTcwODQ2NTU4LC0wLjQxOTk5OTk4Njg4Njk3ODE1XX0seyJtZXNoIjoxLCJuYW1lIjoiQl9zdG9scGVfViIsInJvdGF0aW9uIjpbMCwwLDAuMTQzNTMwMzA5MjAwMjg2ODcsMC45ODk2NDU5NTc5NDY3NzczXSwic2NhbGUiOlsxLDEuMDc5OTk5OTIzNzA2MDU0NywxXSwidHJhbnNsYXRpb24iOlswLjczMTk5OTk5MzMyNDI3OTgsMS4xNjk5OTk5NTcwODQ2NTU4LC0wLjQxOTk5OTk4Njg4Njk3ODE1XX0seyJtZXNoIjoyLCJuYW1lIjoiQmFrbHlzX0giLCJ0cmFuc2xhdGlvbiI6Wy0wLjYwMDAwMDAyMzg0MTg1NzksMC43MjAwMDAwMjg2MTAyMjk1LC0yLjAxOTk5OTk4MDkyNjUxMzddfSx7Im1lc2giOjMsIm5hbWUiOiJCYWtseXNfViIsInRyYW5zbGF0aW9uIjpbMC42MDAwMDAwMjM4NDE4NTc5LDAuNzIwMDAwMDI4NjEwMjI5NSwtMi4wMTk5OTk5ODA5MjY1MTM3XX0seyJtZXNoIjo0LCJuYW1lIjoiRnJvbnRseXNfSCIsInRyYW5zbGF0aW9uIjpbLTAuNTc5OTk5OTgzMzEwNjk5NSwwLjY4MDAwMDAwNzE1MjU1NzQsMi4wMTk5OTk5ODA5MjY1MTM3XX0seyJtZXNoIjo1LCJuYW1lIjoiRnJvbnRseXNfViIsInRyYW5zbGF0aW9uIjpbMC41Nzk5OTk5ODMzMTA2OTk1LDAuNjgwMDAwMDA3MTUyNTU3NCwyLjAxOTk5OTk4MDkyNjUxMzddfSx7Im1lc2giOjYsIm5hbWUiOiJHcmlsbCIsInRyYW5zbGF0aW9uIjpbMCwwLjYwMDAwMDAyMzg0MTg1NzksMi4wMzk5OTk5NjE4NTMwMjczXX0seyJtZXNoIjo3LCJuYW1lIjoiSGp1bF9CSCIsInRyYW5zbGF0aW9uIjpbLTAuODAwMDAwMDExOTIwOTI5LDAuMzQwMDAwMDAzNTc2Mjc4NywtMS4yOTk5OTk5NTIzMTYyODQyXX0seyJtZXNoIjo4LCJuYW1lIjoiSGp1bF9CViIsInRyYW5zbGF0aW9uIjpbMC44MDAwMDAwMTE5MjA5MjksMC4zNDAwMDAwMDM1NzYyNzg3LC0xLjI5OTk5OTk1MjMxNjI4NDJdfSx7Im1lc2giOjksIm5hbWUiOiJIanVsX0ZIIiwidHJhbnNsYXRpb24iOlstMC44MDAwMDAwMTE5MjA5MjksMC4zNDAwMDAwMDM1NzYyNzg3LDEuMjk5OTk5OTUyMzE2Mjg0Ml19LHsibWVzaCI6MTAsIm5hbWUiOiJIanVsX0ZWIiwidHJhbnNsYXRpb24iOlswLjgwMDAwMDAxMTkyMDkyOSwwLjM0MDAwMDAwMzU3NjI3ODcsMS4yOTk5OTk5NTIzMTYyODQyXX0seyJtZXNoIjoxMSwibmFtZSI6Ikthcm9zc2VyaSJ9LHsibWVzaCI6MTIsIm5hbWUiOiJLdXBlIn0seyJtZXNoIjoxMywibmFtZSI6IlNraWx0X2JhayIsInRyYW5zbGF0aW9uIjpbMCwwLjQ2MDAwMDAwODM0NDY1MDI3LC0yLjA4OTk5OTkxNDE2OTMxMTVdfSx7Im1lc2giOjE0LCJuYW1lIjoiU2tpbHRfZm9yYW4iLCJ0cmFuc2xhdGlvbiI6WzAsMC40MDAwMDAwMDU5NjA0NjQ1LDIuMDg5OTk5OTE0MTY5MzExNV19LHsibWVzaCI6MTUsIm5hbWUiOiJTcGVpbF9IIiwidHJhbnNsYXRpb24iOlstMC45MzAwMDAwMDcxNTI1NTc0LDAuOTkwMDAwMDA5NTM2NzQzMiwwLjkyMDAwMDAxNjY4OTMwMDVdfSx7Im1lc2giOjE2LCJuYW1lIjoiU3BlaWxfViIsInRyYW5zbGF0aW9uIjpbMC45MzAwMDAwMDcxNTI1NTc0LDAuOTkwMDAwMDA5NTM2NzQzMiwwLjkyMDAwMDAxNjY4OTMwMDVdfSx7Im1lc2giOjE3LCJuYW1lIjoiU3BlaWxnbGFzc19IIiwidHJhbnNsYXRpb24iOlstMC45Mzk5OTk5OTc2MTU4MTQyLDAuOTkwMDAwMDA5NTM2NzQzMiwwLjg3OTk5OTk5NTIzMTYyODRdfSx7Im1lc2giOjE4LCJuYW1lIjoiU3BlaWxnbGFzc19WIiwidHJhbnNsYXRpb24iOlswLjkzOTk5OTk5NzYxNTgxNDIsMC45OTAwMDAwMDk1MzY3NDMyLDAuODc5OTk5OTk1MjMxNjI4NF19LHsibWVzaCI6MTksIm5hbWUiOiJTdG90ZmFuZ2VyX2JhayIsInRyYW5zbGF0aW9uIjpbMCwwLjM2MDAwMDAxNDMwNTExNDc1LC0yLjAxOTk5OTk4MDkyNjUxMzddfSx7Im1lc2giOjIwLCJuYW1lIjoiU3RvdGZhbmdlcl9mb3JhbiIsInRyYW5zbGF0aW9uIjpbMCwwLjM2MDAwMDAxNDMwNTExNDc1LDIuMDE5OTk5OTgwOTI2NTEzN119LHsibWVzaCI6MjEsIm5hbWUiOiJUZXJza2VsX0giLCJ0cmFuc2xhdGlvbiI6Wy0wLjg4NDk5OTk5MDQ2MzI1NjgsMC4zMTk5OTk5OTI4NDc0NDI2LDBdfSx7Im1lc2giOjIyLCJuYW1lIjoiVGVyc2tlbF9WIiwidHJhbnNsYXRpb24iOlswLjg4NDk5OTk5MDQ2MzI1NjgsMC4zMTk5OTk5OTI4NDc0NDI2LDBdfSx7ImNoaWxkcmVuIjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMl0sIm5hbWUiOiJCaWwifV0sIm1hdGVyaWFscyI6W3siZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJMYWtrIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsiYmFzZUNvbG9yRmFjdG9yIjpbMC44OTEyNjIwNTQ0NDMzNTk0LDAuNTYwNDk5MTMxNjc5NTM0OSwwLjEwNjE1NjA2NjA2MDA2NjIyLDFdLCJtZXRhbGxpY0ZhY3RvciI6MCwicm91Z2huZXNzRmFjdG9yIjowLjQ0OTk5OTk4ODA3OTA3MTA0fX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwiZW1pc3NpdmVGYWN0b3IiOlswLjY5NDA4MDUzMTU5NzEzNzUsMC4wMjc3NTUyNzkwOTM5ODA3OSwwLjAxOTkxNzgzODI3NTQzMjU4N10sIm5hbWUiOiJCYWtseXMiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjY5NDA4MDUzMTU5NzEzNzUsMC4wMjc3NTUyNzkwOTM5ODA3OSwwLjAxOTkxNzgzODI3NTQzMjU4NywxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC4zMDAwMDAwMTE5MjA5Mjg5Nn19LHsiZG91YmxlU2lkZWQiOnRydWUsImVtaXNzaXZlRmFjdG9yIjpbMSwwLjkwNzU0NzE3NTg4NDI0NjgsMC42ODAwMjAzMzIzMzY0MjU4XSwiZXh0ZW5zaW9ucyI6eyJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIjp7ImVtaXNzaXZlU3RyZW5ndGgiOjEuNX19LCJuYW1lIjoiRnJvbnRseXMiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlsxLDAuOTA3NTQ3MTc1ODg0MjQ2OCwwLjY4MDAyMDMzMjMzNjQyNTgsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuMzAwMDAwMDExOTIwOTI4OTZ9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiVHJpbSIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDM4NDcyNzQ1NTY3NTYwMTk2LDAuMDQ2MTQ4ODQ0MDYzMjgyMDEsMC4wNTYzNzQwOTkxMDU1OTY1NCwxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC42OTk5OTk5ODgwNzkwNzF9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiRGVrayIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDA5Njk2MzI5MDEyNTEzMTYsMC4wMTE4ODEzMzQ3MDcxNDA5MjMsMC4wMTUxNzUyMzgyNTE2ODYwOTYsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuODk5OTk5OTc2MTU4MTQyMX19LHsiZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJGZWxnIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsiYmFzZUNvbG9yRmFjdG9yIjpbMC41NTQyMjcxMTM3MjM3NTQ5LDAuNTg1OTcyOTY0NzYzNjQxNCwwLjYxODY4NTcyMjM1MTA3NDIsMV0sIm1ldGFsbGljRmFjdG9yIjowLjMwMDAwMDAxMTkyMDkyODk2LCJyb3VnaG5lc3NGYWN0b3IiOjAuNDAwMDAwMDA1OTYwNDY0NX19LHsiZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJHbGFzcyIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDIzMTAzNTU1NjY0NDIwMTI4LDAuMDM4NDcyNzQ1NTY3NTYwMTk2LDAuMDU2Mzc0MDk5MTA1NTk2NTQsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuMjAwMDAwMDAyOTgwMjMyMjR9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiU2tpbHQiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjg5MTI2MjA1NDQ0MzM1OTQsMC44OTEyNjIwNTQ0NDMzNTk0LDAuODkxMjYyMDU0NDQzMzU5NCwxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC42MDAwMDAwMjM4NDE4NTc5fX1dLCJtZXNoZXMiOlt7Im5hbWUiOiJCX3N0b2xwZV9ILjAwMSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjAsIk5PUk1BTCI6MX0sImluZGljZXMiOjIsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IkJfc3RvbHBlX1YiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjozLCJOT1JNQUwiOjR9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJCYWtseXNfSC4wMDEiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo1LCJOT1JNQUwiOjZ9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6MX1dfSx7Im5hbWUiOiJCYWtseXNfViIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjgsIk5PUk1BTCI6OX0sImluZGljZXMiOjcsIm1hdGVyaWFsIjoxfV19LHsibmFtZSI6IkZyb250bHlzX0guMDAxIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTAsIk5PUk1BTCI6MTF9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6Mn1dfSx7Im5hbWUiOiJGcm9udGx5c19WIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTIsIk5PUk1BTCI6MTN9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6Mn1dfSx7Im5hbWUiOiJHcmlsbCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjE0LCJOT1JNQUwiOjE1fSwiaW5kaWNlcyI6NywibWF0ZXJpYWwiOjN9XX0seyJuYW1lIjoiSGp1bF9CSC4wMDEiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxNiwiTk9STUFMIjoxN30sImluZGljZXMiOjE4LCJtYXRlcmlhbCI6NH0seyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxOSwiTk9STUFMIjoyMH0sImluZGljZXMiOjIxLCJtYXRlcmlhbCI6NX1dfSx7Im5hbWUiOiJIanVsX0JWIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MjIsIk5PUk1BTCI6MjN9LCJpbmRpY2VzIjoyNCwibWF0ZXJpYWwiOjR9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MjUsIk5PUk1BTCI6MjZ9LCJpbmRpY2VzIjoyNywibWF0ZXJpYWwiOjV9XX0seyJuYW1lIjoiSGp1bF9GSC4wMDEiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoyOCwiTk9STUFMIjoyOX0sImluZGljZXMiOjE4LCJtYXRlcmlhbCI6NH0seyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjozMCwiTk9STUFMIjozMX0sImluZGljZXMiOjIxLCJtYXRlcmlhbCI6NX1dfSx7Im5hbWUiOiJIanVsX0ZWIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MzIsIk5PUk1BTCI6MzN9LCJpbmRpY2VzIjoyNCwibWF0ZXJpYWwiOjR9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MzQsIk5PUk1BTCI6MzV9LCJpbmRpY2VzIjoyNywibWF0ZXJpYWwiOjV9XX0seyJuYW1lIjoiS2Fyb3NzZXJpIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MzYsIk5PUk1BTCI6Mzd9LCJpbmRpY2VzIjozOCwibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiS3VwZSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjM5LCJOT1JNQUwiOjQwfSwiaW5kaWNlcyI6NDEsIm1hdGVyaWFsIjowfSx7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjQyLCJOT1JNQUwiOjQzfSwiaW5kaWNlcyI6NDQsIm1hdGVyaWFsIjo2fV19LHsibmFtZSI6IlNraWx0X2JhayIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjQ1LCJOT1JNQUwiOjQ2fSwiaW5kaWNlcyI6NywibWF0ZXJpYWwiOjd9XX0seyJuYW1lIjoiU2tpbHRfZm9yYW4iLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo0NywiTk9STUFMIjo0OH0sImluZGljZXMiOjcsIm1hdGVyaWFsIjo3fV19LHsibmFtZSI6IlNwZWlsX0guMDAxIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NDksIk5PUk1BTCI6NTB9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJTcGVpbF9WIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTEsIk5PUk1BTCI6NTJ9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJTcGVpbGdsYXNzX0guMDAxIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTMsIk5PUk1BTCI6NTR9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6Nn1dfSx7Im5hbWUiOiJTcGVpbGdsYXNzX1YiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo1NSwiTk9STUFMIjo1Nn0sImluZGljZXMiOjIsIm1hdGVyaWFsIjo2fV19LHsibmFtZSI6IlN0b3RmYW5nZXJfYmFrIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTcsIk5PUk1BTCI6NTh9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6M31dfSx7Im5hbWUiOiJTdG90ZmFuZ2VyX2ZvcmFuIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTksIk5PUk1BTCI6NjB9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6M31dfSx7Im5hbWUiOiJUZXJza2VsX0guMDAxIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NjEsIk5PUk1BTCI6NjJ9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6M31dfSx7Im5hbWUiOiJUZXJza2VsX1YiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo2MywiTk9STUFMIjo2NH0sImluZGljZXMiOjcsIm1hdGVyaWFsIjozfV19XSwiYWNjZXNzb3JzIjpbeyJidWZmZXJWaWV3IjowLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDE0OTk5OTk5NjY0NzIzODczLDAuMjUsMC4wNDUwMDAwMDE3ODgxMzkzNF0sIm1pbiI6Wy0wLjAxNDk5OTk5OTY2NDcyMzg3MywtMC4yNSwtMC4wNDUwMDAwMDE3ODgxMzkzNF0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MzYsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4wMTQ5OTk5OTk2NjQ3MjM4NzMsMC4yNSwwLjA0NTAwMDAwMTc4ODEzOTM0XSwibWluIjpbLTAuMDE0OTk5OTk5NjY0NzIzODczLC0wLjI1LC0wLjA0NTAwMDAwMTc4ODEzOTM0XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4xNTAwMDAwMDU5NjA0NjQ0OCwwLjA1OTk5OTk5ODY1ODg5NTQ5LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuMTUwMDAwMDA1OTYwNDY0NDgsLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjYsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjcsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoxMzIsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjgsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4xNTAwMDAwMDU5NjA0NjQ0OCwwLjA1OTk5OTk5ODY1ODg5NTQ5LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuMTUwMDAwMDA1OTYwNDY0NDgsLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjksImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsIm1heCI6WzAuMTcwMDAwMDAxNzg4MTM5MzQsMC4wNTk5OTk5OTg2NTg4OTU0OSwwLjAyOTk5OTk5OTMyOTQ0Nzc0Nl0sIm1pbiI6Wy0wLjE3MDAwMDAwMTc4ODEzOTM0LC0wLjA1OTk5OTk5ODY1ODg5NTQ5LC0wLjAyOTk5OTk5OTMyOTQ0Nzc0Nl0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4xNzAwMDAwMDE3ODgxMzkzNCwwLjA1OTk5OTk5ODY1ODg5NTQ5LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuMTcwMDAwMDAxNzg4MTM5MzQsLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEzLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlswLjM0OTk5OTk5NDAzOTUzNTUsMC4wNTk5OTk5OTg2NTg4OTU0OSwwLjAyNTAwMDAwMDM3MjUyOTAzXSwibWluIjpbLTAuMzQ5OTk5OTk0MDM5NTM1NSwtMC4wNTk5OTk5OTg2NTg4OTU0OSwtMC4wMjUwMDAwMDAzNzI1MjkwM10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTYsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNzIsIm1heCI6WzAuMTIwMDAwMDE5NjY5NTMyNzgsMC4zNDAwMDAwMDM1NzYyNzg3LDAuMzQwMDAwMDAzNTc2Mjc4N10sIm1pbiI6Wy0wLjExMTk2Mjg1NDg2MjIxMzEzLC0wLjM0MDAwMDAwMzU3NjI3ODcsLTAuMzQwMDAwMDAzNTc2Mjc4N10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI3MiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE4LCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6NDI2LCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjoxOSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE2LCJtYXgiOlstMC4wODk5OTk5ODEyMjQ1MzY5LDAuMjMwMDAwMDA0MTcyMzI1MTMsMC4yMzAwMDAwMDQxNzIzMjUxM10sIm1pbiI6Wy0wLjA5MDAwMDAxMTAyNjg1OTI4LC0wLjIzMDAwMDAwNDE3MjMyNTEzLC0wLjIzMDAwMDAwNDE3MjMyNTEzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyMSwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjQyLCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjoyMiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI3MiwibWF4IjpbMC4xMTE5NjI4NTQ4NjIyMTMxMywwLjM0MDAwMDAwMzU3NjI3ODcsMC4zNDAwMDAwMDM1NzYyNzg3XSwibWluIjpbLTAuMTIwMDAwMDE5NjY5NTMyNzgsLTAuMzQwMDAwMDAzNTc2Mjc4NywtMC4zNDAwMDAwMDM1NzYyNzg3XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIzLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjcyLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MjQsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50Ijo0MjYsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjI1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsIm1heCI6WzAuMDkwMDAwMDExMDI2ODU5MjgsMC4yMzAwMDAwMDQxNzIzMjUxMywwLjIzMDAwMDAwNDE3MjMyNTEzXSwibWluIjpbMC4wODk5OTk5ODEyMjQ1MzY5LC0wLjIzMDAwMDAwNDE3MjMyNTEzLC0wLjIzMDAwMDAwNDE3MjMyNTEzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjI2LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyNywiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjQyLCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjoyOCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI3MiwibWF4IjpbMC4xMjAwMDAwMTk2Njk1MzI3OCwwLjM0MDAwMDAwMzU3NjI3ODcsMC4zNDAwMDAwMDM1NzYyNzg3XSwibWluIjpbLTAuMTExOTYyODU0ODYyMjEzMTMsLTAuMzQwMDAwMDAzNTc2Mjc4NywtMC4zNDAwMDAwMDM1NzYyNzg3XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjI5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjcyLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MzAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNiwibWF4IjpbLTAuMDg5OTk5OTgxMjI0NTM2OSwwLjIzMDAwMDAwNDE3MjMyNTEzLDAuMjMwMDAwMDA0MTcyMzI1MTNdLCJtaW4iOlstMC4wOTAwMDAwMTEwMjY4NTkyOCwtMC4yMzAwMDAwMDQxNzIzMjUxMywtMC4yMzAwMDAwMDQxNzIzMjUxM10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozMSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MzIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNzIsIm1heCI6WzAuMTExOTYyODU0ODYyMjEzMTMsMC4zNDAwMDAwMDM1NzYyNzg3LDAuMzQwMDAwMDAzNTc2Mjc4N10sIm1pbiI6Wy0wLjEyMDAwMDAxOTY2OTUzMjc4LC0wLjM0MDAwMDAwMzU3NjI3ODcsLTAuMzQwMDAwMDAzNTc2Mjc4N10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozMywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI3MiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjM0LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsIm1heCI6WzAuMDkwMDAwMDExMDI2ODU5MjgsMC4yMzAwMDAwMDQxNzIzMjUxMywwLjIzMDAwMDAwNDE3MjMyNTEzXSwibWluIjpbMC4wODk5OTk5ODEyMjQ1MzY5LC0wLjIzMDAwMDAwNDE3MjMyNTEzLC0wLjIzMDAwMDAwNDE3MjMyNTEzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjM1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozNiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjg2MCwibWF4IjpbMC44Nzk5OTk5OTUyMzE2Mjg0LDAuOTQ5OTk5OTg4MDc5MDcxLDIuMDI5MTU2Njg0ODc1NDg4M10sIm1pbiI6Wy0wLjg3OTk5OTk5NTIzMTYyODQsMC4yODAwMDAwMDExOTIwOTI5LC0yLjAzOTk5OTk2MTg1MzAyNzNdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MzcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo4NjAsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozOCwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjEzNTYsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjM5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MzEyLCJtYXgiOlswLjc4NzAwMjQ0NDI2NzI3MywxLjQ0MDAwMDA1NzIyMDQ1OSwxLjA2NDgwNTYyNjg2OTIwMTddLCJtaW4iOlstMC43ODcwMDI0NDQyNjcyNzMsMC44OTk5OTk5NzYxNTgxNDIxLC0xLjQwNTY1OTQzNzE3OTU2NTRdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NDAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjozMTIsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0MSwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjQ2OCwidHlwZSI6IlNDQUxBUiJ9LHsiYnVmZmVyVmlldyI6NDIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC43Nzk0MjA4NTI2NjExMzI4LDEuMzk3MjM5OTIzNDc3MTcyOSwxLjAzNDMwMzMwNzUzMzI2NDJdLCJtaW4iOlstMC43Nzk0MjA4NTI2NjExMzI4LDAuOTEzMzkyMzA1Mzc0MTQ1NSwtMS4zODA4MjY0NzMyMzYwODRdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NDMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjQ0LCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6NDgsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjQ1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsIm1heCI6WzAuMjE5OTk5OTk4ODA3OTA3MSwwLjA1NDk5OTk5OTcwMTk3Njc3NiwwLjAwOTk5OTk5OTc3NjQ4MjU4Ml0sIm1pbiI6Wy0wLjIxOTk5OTk5ODgwNzkwNzEsLTAuMDU0OTk5OTk5NzAxOTc2Nzc2LC0wLjAwOTk5OTk5OTc3NjQ4MjU4Ml0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0NiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NDcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4yMTk5OTk5OTg4MDc5MDcxLDAuMDU0OTk5OTk5NzAxOTc2Nzc2LDAuMDA5OTk5OTk5Nzc2NDgyNTgyXSwibWluIjpbLTAuMjE5OTk5OTk4ODA3OTA3MSwtMC4wNTQ5OTk5OTk3MDE5NzY3NzYsLTAuMDA5OTk5OTk5Nzc2NDgyNTgyXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjQ4LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0OSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlswLjA3OTk5OTk5ODIxMTg2MDY2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wMzk5OTk5OTkxMDU5MzAzM10sIm1pbiI6Wy0wLjA3OTk5OTk5ODIxMTg2MDY2LC0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjAzOTk5OTk5OTEwNTkzMDMzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo1MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlswLjA3OTk5OTk5ODIxMTg2MDY2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wMzk5OTk5OTkxMDU5MzAzM10sIm1pbiI6Wy0wLjA3OTk5OTk5ODIxMTg2MDY2LC0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjAzOTk5OTk5OTEwNTkzMDMzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUyLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo1MywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjA2NDk5OTk5NzYxNTgxNDIxLDAuMDM1MDAwMDAwMTQ5MDExNjEsMC4wMDQ5OTk5OTk4ODgyNDEyOTFdLCJtaW4iOlstMC4wNjQ5OTk5OTc2MTU4MTQyMSwtMC4wMzUwMDAwMDAxNDkwMTE2MSwtMC4wMDQ5OTk5OTk4ODgyNDEyOTFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NTQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjU1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDY0OTk5OTk3NjE1ODE0MjEsMC4wMzUwMDAwMDAxNDkwMTE2MSwwLjAwNDk5OTk5OTg4ODI0MTI5MV0sIm1pbiI6Wy0wLjA2NDk5OTk5NzYxNTgxNDIxLC0wLjAzNTAwMDAwMDE0OTAxMTYxLC0wLjAwNDk5OTk5OTg4ODI0MTI5MV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo1NiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NTcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC44ODk5OTk5ODU2OTQ4ODUzLDAuMDcwMDAwMDAwMjk4MDIzMjIsMC4wNTk5OTk5OTg2NTg4OTU0OV0sIm1pbiI6Wy0wLjg4OTk5OTk4NTY5NDg4NTMsLTAuMDcwMDAwMDAwMjk4MDIzMjIsLTAuMDU5OTk5OTk4NjU4ODk1NDldLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NTgsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjU5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsIm1heCI6WzAuODg5OTk5OTg1Njk0ODg1MywwLjA3MDAwMDAwMDI5ODAyMzIyLDAuMDU5OTk5OTk4NjU4ODk1NDldLCJtaW4iOlstMC44ODk5OTk5ODU2OTQ4ODUzLC0wLjA3MDAwMDAwMDI5ODAyMzIyLC0wLjA1OTk5OTk5ODY1ODg5NTQ5XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjYwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo2MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlswLjAyNTAwMDAwMDM3MjUyOTAzLDAuMDM5OTk5OTk5MTA1OTMwMzMsMC43NzQ5OTk5NzYxNTgxNDIxXSwibWluIjpbLTAuMDI1MDAwMDAwMzcyNTI5MDMsLTAuMDM5OTk5OTk5MTA1OTMwMzMsLTAuNzc0OTk5OTc2MTU4MTQyMV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo2MiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NjMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4wMjUwMDAwMDAzNzI1MjkwMywwLjAzOTk5OTk5OTEwNTkzMDMzLDAuNzc0OTk5OTc2MTU4MTQyMV0sIm1pbiI6Wy0wLjAyNTAwMDAwMDM3MjUyOTAzLC0wLjAzOTk5OTk5OTEwNTkzMDMzLC0wLjc3NDk5OTk3NjE1ODE0MjFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NjQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6Mjg4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6NzIsImJ5dGVPZmZzZXQiOjU3NiwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6NjQ4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo5MzYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0IjoxMjI0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6MjM3NiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI2NCwiYnl0ZU9mZnNldCI6MzUyOCwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjM3OTIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo0OTQ0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6NjA5NiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjcyNDgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo4NDAwLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6OTU1MiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjEwNzA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6MTE4NTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjozMjY0LCJieXRlT2Zmc2V0IjoxMzAwOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjMyNjQsImJ5dGVPZmZzZXQiOjE2MjcyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6ODUyLCJieXRlT2Zmc2V0IjoxOTUzNiwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE5MiwiYnl0ZU9mZnNldCI6MjAzODgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxOTIsImJ5dGVPZmZzZXQiOjIwNTgwLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6ODQsImJ5dGVPZmZzZXQiOjIwNzcyLCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MzI2NCwiYnl0ZU9mZnNldCI6MjA4NTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjozMjY0LCJieXRlT2Zmc2V0IjoyNDEyMCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjg1MiwiYnl0ZU9mZnNldCI6MjczODQsInRhcmdldCI6MzQ5NjN9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxOTIsImJ5dGVPZmZzZXQiOjI4MjM2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTkyLCJieXRlT2Zmc2V0IjoyODQyOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjg0LCJieXRlT2Zmc2V0IjoyODYyMCwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjMyNjQsImJ5dGVPZmZzZXQiOjI4NzA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MzI2NCwiYnl0ZU9mZnNldCI6MzE5NjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxOTIsImJ5dGVPZmZzZXQiOjM1MjMyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTkyLCJieXRlT2Zmc2V0IjozNTQyNCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjMyNjQsImJ5dGVPZmZzZXQiOjM1NjE2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MzI2NCwiYnl0ZU9mZnNldCI6Mzg4ODAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxOTIsImJ5dGVPZmZzZXQiOjQyMTQ0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTkyLCJieXRlT2Zmc2V0Ijo0MjMzNiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjEwMzIwLCJieXRlT2Zmc2V0Ijo0MjUyOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjEwMzIwLCJieXRlT2Zmc2V0Ijo1Mjg0OCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI3MTIsImJ5dGVPZmZzZXQiOjYzMTY4LCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mzc0NCwiYnl0ZU9mZnNldCI6NjU4ODAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjozNzQ0LCJieXRlT2Zmc2V0Ijo2OTYyNCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjkzNiwiYnl0ZU9mZnNldCI6NzMzNjgsInRhcmdldCI6MzQ5NjN9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjc0MzA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo3NDU5MiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjk2LCJieXRlT2Zmc2V0Ijo3NDg4MCwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjc0OTc2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6NzYxMjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo3NzI4MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjc4NDMyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6Nzk1ODQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo4MDczNiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjgxODg4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6ODMwNDAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg0MTkyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo4NDQ4MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6ODQ3NjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg1MDU2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6ODUzNDQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo4NjQ5NiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjg3NjQ4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6ODg4MDAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo4OTk1MiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjkxMTA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6OTIyNTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo5MzQwOCwidGFyZ2V0IjozNDk2Mn1dLCJidWZmZXJzIjpbeyJieXRlTGVuZ3RoIjo5NDU2MH1dfSBgcQEAQklOAI/CdbwAAIC+7FE4PY/CdbwAAIC+7FE4PY/CdbwAAIC+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIC+7FE4vY/CdbwAAIC+7FE4vY/CdbwAAIC+7FE4vY/CdbwAAIA+7FE4vY/CdbwAAIA+7FE4vY/CdbwAAIA+7FE4vY/CdTwAAIC+7FE4PY/CdTwAAIC+7FE4PY/CdTwAAIC+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIC+7FE4vY/CdTwAAIC+7FE4vY/CdTwAAIC+7FE4vY/CdTwAAIA+7FE4vY/CdTwAAIA+7FE4vY/CdTwAAIA+7FE4vQAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAIABQALAAIACwAIAAYACQAVAAYAFQASABQAFwARABQAEQAOAAwADwADAAwAAwAAAAcAEwANAAcADQABABYACgAEABYABAAQAI/CdbwAAIC+7FE4PY/CdbwAAIC+7FE4PY/CdbwAAIC+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIC+7FE4vY/CdbwAAIC+7FE4vY/CdbwAAIC+7FE4vY/CdbwAAIA+7FE4vY/CdbwAAIA+7FE4vY/CdbwAAIA+7FE4vY/CdTwAAIC+7FE4PY/CdTwAAIC+7FE4PY/CdTwAAIC+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIC+7FE4vY/CdTwAAIC+7FE4vY/CdTwAAIC+7FE4vY/CdTwAAIA+7FE4vY/CdTwAAIA+7FE4vY/CdTwAAIA+7FE4vQAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAALkeBb6PwnW9CtcjPLkeBb6PwnW9CtcjPLkeBb6PwnW9CtcjPLkeBb6PwnW9CtcjPLkeBb4K1yO9j8L1PLkeBb4K1yO9j8L1PLkeBb4K1yO9j8L1PLkeBb4K1yO9j8L1PJqZGb4K1yO9CtcjPJqZGb4K1yO9CtcjPJqZGb4K1yO9CtcjPJqZGb4K1yO9CtcjPLkeBb4K1yM9j8L1PLkeBb4K1yM9j8L1PLkeBb4K1yM9j8L1PLkeBb4K1yM9j8L1PLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT4K1yO9j8L1vLkeBT4K1yO9j8L1vLkeBT4K1yO9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j8L1PLkeBb4K1yM9j8L1PLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT4K1yO9j8L1vLkeBT4K1yO9j8L1vLkeBT4K1yO9j8L1vLkeBT4K1yO9j8L1vJqZGT4K1yO9CtcjvJqZGT4K1yO9CtcjvJqZGT4K1yO9CtcjvJqZGT4K1yO9CtcjvLkeBT6PwnU9CtcjvLkeBT6PwnU9CtcjvLkeBT6PwnU9CtcjvLkeBT6PwnU9CtcjvJqZGT4K1yM9CtcjvJqZGT4K1yM9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j8L1PJqZGb4K1yO9j8L1PJqZGb4K1yO9j8L1PHsULr4K1yO9CtcjPHsULr4K1yO9CtcjPHsULr4K1yO9CtcjPHsULr4K1yO9CtcjPJqZGb4K1yM9j8L1PJqZGb4K1yM9j8L1PJqZGb4K1yM9j8L1PJqZGb4K1yM9j8L1PJqZGb6PwnU9CtcjPJqZGb6PwnU9CtcjPJqZGb6PwnU9CtcjPJqZGb6PwnU9CtcjPHsULr4K1yM9CtcjPHsULr4K1yM9CtcjPHsULr4K1yM9CtcjPHsULr4K1yM9CtcjPJqZGb6PwnW9CtcjvJqZGb6PwnW9CtcjvJqZGb6PwnW9CtcjvJqZGb6PwnW9CtcjvHsULr4K1yO9CtcjvHsULr4K1yO9CtcjvHsULr4K1yO9CtcjvHsULr4K1yO9CtcjvJqZGb4K1yO9j8L1vJqZGb4K1yO9j8L1vJqZGb4K1yO9j8L1vJqZGb4K1yO9j8L1vJqZGb6PwnU9CtcjvJqZGb6PwnU9CtcjvJqZGb6PwnU9CtcjvJqZGb6PwnU9CtcjvJqZGb4K1yM9j8L1vJqZGb4K1yM9j8L1vJqZGb4K1yM9j8L1vJqZGb4K1yM9j8L1vHsULr4K1yM9CtcjvHsULr4K1yM9CtcjvHsULr4K1yM9CtcjvHsULr4K1yM9CtcjvJqZGT6PwnW9CtcjPJqZGT6PwnW9CtcjPJqZGT6PwnW9CtcjPJqZGT6PwnW9CtcjPHsULj4K1yO9CtcjPHsULj4K1yO9CtcjPHsULj4K1yO9CtcjPHsULj4K1yO9CtcjPJqZGT4K1yO9j8L1PJqZGT4K1yO9j8L1PJqZGT4K1yO9j8L1PJqZGT4K1yO9j8L1PJqZGT6PwnU9CtcjPJqZGT6PwnU9CtcjPJqZGT6PwnU9CtcjPJqZGT6PwnU9CtcjPJqZGT4K1yM9j8L1PJqZGT4K1yM9j8L1PJqZGT4K1yM9j8L1PJqZGT4K1yM9j8L1PHsULj4K1yM9CtcjPHsULj4K1yM9CtcjPHsULj4K1yM9CtcjPHsULj4K1yM9CtcjPJqZGT6PwnW9CtcjvJqZGT6PwnW9CtcjvJqZGT6PwnW9CtcjvJqZGT6PwnW9CtcjvJqZGT4K1yO9j8L1vJqZGT4K1yO9j8L1vJqZGT4K1yO9j8L1vJqZGT4K1yO9j8L1vHsULj4K1yO9CtcjvHsULj4K1yO9CtcjvHsULj4K1yO9CtcjvHsULj4K1yO9CtcjvJqZGT6PwnU9CtcjvJqZGT6PwnU9CtcjvJqZGT6PwnU9CtcjvJqZGT6PwnU9CtcjvHsULj4K1yM9CtcjvHsULj4K1yM9CtcjvHsULj4K1yM9CtcjvHsULj4K1yM9CtcjvJqZGT4K1yM9j8L1vJqZGT4K1yM9j8L1vJqZGT4K1yM9j8L1vJqZGT4K1yM9j8L1vAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNE786zRO/Os0TP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNE786zRM/Os0TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNE786zRM/Os0TP/QENb/0BDU/AAAAADrNE786zRM/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNE786zRO/Os0Tv/QENb/0BDW/AAAAADrNE786zRO/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNE786zRO/Os0Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNE786zRM/Os0Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNEz86zRO/Os0TP/QENT/0BDW/AAAAADrNEz86zRO/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNEz86zRO/Os0TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNEz86zRM/Os0TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNEz86zRO/Os0Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNEz86zRM/Os0Tv/QENT/0BDU/AAAAADrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1vx+Fq76PwnW9DNcjPB+Fq76PwnW9DNcjPB+Fq76PwnW9DNcjPB+Fq76PwnW9DNcjPB+Fq77rUTi9zczMPB+Fq77rUTi9zczMPB+Fq77rUTi9zczMPB+Fq77rUTi9zczMPDMzs77qUTi9C9cjPDMzs77qUTi9C9cjPDMzs77qUTi9C9cjPDMzs77qUTi9C9cjPB+Fq77rUTg9zczMPB+Fq77rUTg9zczMPB+Fq77rUTg9zczMPB+Fq77rUTg9zczMPB+Fq76PwnU9C9cjPB+Fq76PwnU9C9cjPB+Fq76PwnU9C9cjPB+Fq76PwnU9C9cjPDMzs77rUTg9CtcjPDMzs77rUTg9CtcjPDMzs77rUTg9CtcjPDMzs77rUTg9CtcjPB+Fq76PwnW9C9cjvB+Fq76PwnW9C9cjvB+Fq76PwnW9C9cjvB+Fq76PwnW9C9cjvDMzs77rUTi9CtcjvDMzs77rUTi9CtcjvDMzs77rUTi9CtcjvDMzs77rUTi9CtcjvB+Fq77rUTi9zczMvB+Fq77rUTi9zczMvB+Fq77rUTi9zczMvB+Fq77rUTi9zczMvB+Fq76PwnU9DNcjvB+Fq76PwnU9DNcjvB+Fq76PwnU9DNcjvB+Fq76PwnU9DNcjvB+Fq77rUTg9zczMvB+Fq77rUTg9zczMvB+Fq77rUTg9zczMvB+Fq77rUTg9zczMvDMzs77qUTg9C9cjvDMzs77qUTg9C9cjvDMzs77qUTg9C9cjvDMzs77qUTg9C9cjvB+Fqz6PwnW9C9cjPB+Fqz6PwnW9C9cjPB+Fqz6PwnW9C9cjPB+Fqz6PwnW9C9cjPDMzsz7rUTi9CtcjPDMzsz7rUTi9CtcjPDMzsz7rUTi9CtcjPDMzsz7rUTi9CtcjPB+Fqz7rUTi9zczMPB+Fqz7rUTi9zczMPB+Fqz7rUTi9zczMPB+Fqz7rUTi9zczMPB+Fqz6PwnU9DNcjPB+Fqz6PwnU9DNcjPB+Fqz6PwnU9DNcjPB+Fqz6PwnU9DNcjPB+Fqz7rUTg9zczMPB+Fqz7rUTg9zczMPB+Fqz7rUTg9zczMPB+Fqz7rUTg9zczMPDMzsz7qUTg9C9cjPDMzsz7qUTg9C9cjPDMzsz7qUTg9C9cjPDMzsz7qUTg9C9cjPB+Fqz6PwnW9DNcjvB+Fqz6PwnW9DNcjvB+Fqz6PwnW9DNcjvB+Fqz6PwnW9DNcjvB+Fqz7rUTi9zczMvB+Fqz7rUTi9zczMvB+Fqz7rUTi9zczMvB+Fqz7rUTi9zczMvDMzsz7qUTi9C9cjvDMzsz7qUTi9C9cjvDMzsz7qUTi9C9cjvDMzsz7qUTi9C9cjvB+Fqz6PwnU9C9cjvB+Fqz6PwnU9C9cjvB+Fqz6PwnU9C9cjvB+Fqz6PwnU9C9cjvDMzsz7rUTg9CtcjvDMzsz7rUTg9CtcjvDMzsz7rUTg9CtcjvDMzsz7rUTg9CtcjvB+Fqz7rUTg9zczMvB+Fqz7rUTg9zczMvB+Fqz7rUTg9zczMvB+Fqz7rUTg9zczMvAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPE79pzxO/28gTP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPE79pzxO/28gTP/QENb8AAAAA9AQ1P2nPE79pzxO/28gTP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPE7/byBM/ac8TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPE7/byBM/ac8TP/QENb/0BDU/AAAAAGnPE7/byBM/ac8TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPE7/byBO/ac8Tv/QENb/0BDW/AAAAAGnPE7/byBO/ac8Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPE7/byBO/ac8Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPE79pzxM/28gTv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1v2nPE79pzxM/28gTv/QENb8AAAAA9AQ1v2nPE79pzxM/28gTv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPEz/byBO/ac8TP/QENT/0BDW/AAAAAGnPEz/byBO/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPEz/byBO/ac8TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPEz9pzxM/28gTP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPEz9pzxM/28gTP/QENT8AAAAA9AQ1P2nPEz9pzxM/28gTP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPEz9pzxO/28gTv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPEz9pzxO/28gTv/QENT8AAAAA9AQ1v2nPEz9pzxO/28gTv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPEz/byBM/ac8Tv/QENT/0BDU/AAAAAGnPEz/byBM/ac8Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAA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C8sAvzzUSz+LqvE9aukXvzYAPAA3ADYANwAxAC8AIwAlAC8AJQApAD0AQwA+AD0APgA4AKYALgAoAKYAKACgAEQASwBGAEQARgA/AK4ApwChAK4AoQCoAEoAUgBNAEoATQBFALcArwCpALcAqQCxAFEAWABTAFEAUwBMAL8AtgCwAL8AsAC5AFkAYABbAFkAWwBUAMcAvgC4AMcAuADBAF8AZwBiAF8AYgBaAM4AxgDAAM4AwADIAGYAbgBpAGYAaQBhANcAzwDJANcAyQDRAG0AdABvAG0AbwBoAN8A1gDQAN8A0ADZAHUAewB2AHUAdgBwAOYA3gDYAOYA2ADgAHwAgwB+AHwAfgB3AO4A5wDhAO4A4QDoAIIAiQCEAIIAhAB9APYA7wDpAPYA6QDwAIoAkACLAIoAiwCFAP8A9wDxAP8A8QD5AJEAmACTAJEAkwCMAAcB/gD4AAcB+AABAZcAnwCaAJcAmgCSAA4BBgEAAQ4BAAEIAZ4ANQAwAJ4AMACZACIADwEJASIACQEkAAAAAgAqAAAAKgAmAB4AAQAnAB4AJwAKATQAIQAsADQALAA6AJwADAEgAJwAIAAzADsALQCkADsApABBAAMABACiAAMAogArAJsAMgA5ADkAQABHAEcATgBVAFUAXABjAGMAagBxAHEAeAB/AH8AhgCNAI0AlACbAJsAOQBHAEcAVQBjAGMAcQB/AH8AjQCbAJsARwBjAGMAfwCbAEIApQCsAEIArABIAEkArQC1AEkAtQBQAE8AtAC9AE8AvQBXAFYAvADFAFYAxQBeAF0AxADNAF0AzQBlAGQAzADVAGQA1QBsAGsA1ADcAGsA3AByAHMA3QDkAHMA5AB5AHoA5QDsAHoA7ACAAIEA7QD0AIEA9ACHAIgA9QD9AIgA/QCPAI4A/AAFAY4ABQGWAJUABAENAZUADQGdAAUABwCrAAUAqwCjAAYACACyAAYAsgCqAAkACgC6AAkAugCzAAsADQDDAAsAwwC7AAwADwDLAAwAywDCAA4AEADSAA4A0gDKABEAEgDaABEA2gDTABMAFADiABMA4gDbABUAFwDrABUA6wDjABYAGQDzABYA8wDqABgAGgD6ABgA+gDyABsAHQADARsAAwH7ABwAHwALARwACwECAetRuD12wPIxH4VrvuxRuD1aQrS9lJdZvuxRuD2siSa+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MwEvASsBOgExASsBMQE0AUkBUwFYAUkBWAFhAUsBXAFZAUsBWQFVAVEBYAFXAVEBVwFaAXoBhAGJAXoBiQGSAXwBjQGKAXwBigGGAYIBkQGIAYIBiAGLAZUBogGkAZUBpAGqAZkBpgGjAZkBowGhAZsBrAGlAZsBpQGoAbABugG+AbABvgHHAbIBwwHAAbIBwAG8AbgByAG/AbgBvwHBAcsB2AHaAcsB2gHgAc8B3AHZAc8B2QHXAdEB4gHbAdEB2wHeATMCPwJBAjMCQQJIAjcCRAJCAjcCQgJAAjkCSgJDAjkCQwJGAk4CWwJdAk4CXQJjAlICXwJcAlICXAJaAlQCZQJeAlQCXgJhArYCwwLFArYCxQLLAroCxwLEAroCxALCArwCzQLGArwCxgLJAtEC3gLgAtEC4ALmAtUC4gLfAtUC3wLdAtcC6ALhAtcC4QLkAvcCBAMGA/cCBgMMA/sCCAMFA/sCBQMDA/0CDgMHA/0CBwMKAygDNQM3AygDNwM9AywDOQM2AywDNgM0Ay4DPwM4Ay4DOAM7A0MDTwNRA0MDUQNYA0cDVANSA0cDUgNQA0kDWgNTA0kDUwNWA5wBBQAPAJwBDwCtAasBDQADAKsBAwCWAQYAIAAqAAYAKgAWABQAKAAeABQAHgALACEANgA/ACEAPwAxAC8APQA7AC8AOwAmADcAQgBLADcASwBAAD4ASQBHAD4ARwA8AEEATABVAEEAVQBKAEgAUwBRAEgAUQBGAE0AWABhAE0AYQBWAFQAXwBdAFQAXQBSAFcAYwBsAFcAbABgAF4AagBoAF4AaABcAGIAbQB2AGIAdgBrAGkAdAByAGkAcgBnAG4AeQCCAG4AggB3AHUAgAB+AHUAfgBzAHgAiACSAHgAkgCBAH8AkACGAH8AhgB9AIkApACtAIkArQCZAJcAqwChAJcAoQCOAKMAuQDCAKMAwgC0ALIAwAC+ALIAvgCpALoAxQDOALoAzgDDAMEAzADKAMEAygC/AMQAzwDYAMQA2ADNAMsA1gDUAMsA1ADJANAA2wDkANAA5ADZANcA4gDgANcA4ADVANoA5gDvANoA7wDjAOEA7QDrAOEA6wDfAOUA8AD5AOUA+QDuAOwA9wD1AOwA9QDqAPEA/AAFAfEABQH6APgAAgEAAfgAAAH2APsADAEVAfsAFQEEAQMBEwEJAQMBCQEBAQsBJgEwAQsBMAEcARoBLgEkARoBJAERAScBPAFFAScBRQE3ATUBRAFCATUBQgEsAT0BTAFWAT0BVgFGAUMBVAFKAUMBSgFBAU0BYgFrAU0BawFdAVsBagFoAVsBaAFSAWMBbQF2AWMBdgFsAWkBdQFzAWkBcwFnAW4BfgGHAW4BhwF3AXQBhQF7AXQBewFyAX0BnQGpAX0BqQGOAYwBpwGaAYwBmgGDAbEBzAHhAbEB4QG7Ab0B4wHSAb0B0gG0AdAB5gHrAdAB6wHdAd8B7QHoAd8B6AHTAecB8gH3AecB9wHsAe4B+QH0Ae4B9AHpAfEB/AEBAvEBAQL2AfgBAwL+AfgB/gHzAf0BCAINAv0BDQICAgQCDwIKAgQCCgL/AQcCEwIYAgcCGAIMAg4CGgIVAg4CFQIJAhICHQIiAhICIgIXAhkCJAIfAhkCHwIUAh4CKQIuAh4CLgIjAiUCMAIrAiUCKwIgAigCNAJJAigCSQItAi8CSwI6Ai8COgIqAjgCTwJkAjgCZAJFAkcCZgJWAkcCVgI7AlMCaQJuAlMCbgJgAmICcAJrAmICawJVAmoCdQJ6AmoCegJvAnECfAJ3AnECdwJsAnQCfwKEAnQChAJ5AnsChgKBAnsCgQJ2AoACiwKQAoACkAKFAocCkgKNAocCjQKCAooClgKbAooCmwKPApECnQKYApECmAKMApUCoAKlApUCpQKaApwCpwKiApwCogKXAqECqwKwAqECsAKmAqgCswKuAqgCrgKjAqwCtwLMAqwCzAKxArICzgK+ArICvgKtArsC0gLnArsC5wLIAsoC6QLYAsoC2AK9AtYC7QLyAtYC8gLjAuUC8wLuAuUC7gLZAuwC+AINA+wCDQPxAvQCDwP+AvQC/gLvAvwCEwMYA/wCGAMJAwsDGQMUAwsDFAP/AhIDHgMjAxIDIwMXAxoDJAMfAxoDHwMVAx0DKQM+Ax0DPgMiAyUDQAMwAyUDMAMgAy0DRANZAy0DWQM6AzwDWwNLAzwDSwMvA0gDuQHCAUgDwgFVA1cDxAGzAVcDswFKA6cAUQJYAqcAWAK1ALYAWQJMArYATAKeADIChACaADICmgA9Aj4CmwCLAD4CiwA1ApMBRQNOA5MBTgOgAZ8BTQNBA58BQQOXASYDeAGQASYDkAEzAzIDjwGBATIDgQErAw4BuALBAg4B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CtcjPK5HYb7NzEy9CtejO65HYb7NzEy9CtejO65HYb7NzEy9CtejO65HYb7NzEy9CtejO/YoXL7NzEw9CtcjPPYoXL7NzEw9CtcjPPYoXL7NzEw9CtcjPPYoXL7NzEw9CtcjPPYoXL6uR2E9CtejO/YoXL6uR2E9CtejO/YoXL6uR2E9CtejO/YoXL6uR2E9CtejO65HYb7NzEw9CtejO65HYb7NzEw9CtejO65HYb7NzEw9CtejO65HYb7NzEw9CtejO/YoXL6uR2G9Cteju/YoXL6uR2G9Cteju/YoXL6uR2G9Cteju/YoXL6uR2G9Cteju65HYb7NzEy9Cteju65HYb7NzEy9Cteju65HYb7NzEy9Cteju65HYb7NzEy9Cteju/YoXL7NzEy9CtcjvPYoXL7NzEy9CtcjvPYoXL7NzEy9CtcjvPYoXL7NzEy9CtcjvPYoXL6uR2E9Cteju/YoXL6uR2E9Cteju/YoXL6uR2E9Cteju/YoXL6uR2E9Cteju/YoXL7NzEw9CtcjvPYoXL7NzEw9CtcjvPYoXL7NzEw9CtcjvPYoXL7NzEw9CtcjvK5HYb7NzEw9Cteju65HYb7NzEw9Cteju65HYb7NzEw9Cteju65HYb7NzEw9Cteju/YoXD6uR2G9CtejO/YoXD6uR2G9CtejO/YoXD6uR2G9CtejO/YoXD6uR2G9CtejO65HYT7NzEy9CtejO65HYT7NzEy9CtejO65HYT7NzEy9CtejO65HYT7NzEy9CtejO/YoXD7NzEy9CtcjPPYoXD7NzEy9CtcjPPYoXD7NzEy9CtcjPPYoXD7NzEy9CtcjPPYoXD6uR2E9CtejO/YoXD6uR2E9CtejO/YoXD6uR2E9CtejO/YoXD6uR2E9CtejO/YoXD7NzEw9CtcjPPYoXD7NzEw9CtcjPPYoXD7NzEw9CtcjPPYoXD7NzEw9CtcjPK5HYT7NzEw9CtejO65HYT7NzEw9CtejO65HYT7NzEw9CtejO65HYT7NzEw9CtejO/YoXD6uR2G9Cteju/YoXD6uR2G9Cteju/YoXD6uR2G9Cteju/YoXD6uR2G9Cteju/YoXD7NzEy9CtcjvPYoXD7NzEy9CtcjvPYoXD7NzEy9CtcjvPYoXD7NzEy9CtcjvK5HYT7NzEy9Cteju65HYT7NzEy9Cteju65HYT7NzEy9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AAAAADrNE786zRM/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNE786zRO/Os0Tv/QENb/0BDW/AAAAADrNE786zRO/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNE786zRO/Os0Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNE786zRM/Os0Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNEz86zRO/Os0TP/QENT/0BDW/AAAAADrNEz86zRO/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNEz86zRO/Os0TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNEz86zRM/Os0TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNEz86zRO/Os0Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNEz86zRM/Os0Tv/QENT/0BDU/AAAAADrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v4/Cdb3NzEy9CtejPI/Cdb3NzEy9CtejPI/Cdb3NzEy9CtejPI/Cdb3NzEy9CtejPI/Cdb2QwvW8CtcjPY/Cdb2QwvW8CtcjPY/Cdb2QwvW8CtcjPY/Cdb2QwvW8CtcjPQrXo72QwvW8CtejPArXo72QwvW8CtejPArXo72QwvW8CtejPArXo72QwvW8CtejPI/Cdb2QwvU8CtcjPY/Cdb2QwvU8CtcjPY/Cdb2QwvU8CtcjPY/Cdb2QwvU8CtcjPY/Cdb3NzEw9CtejPI/Cdb3NzEw9CtejPI/Cdb3NzEw9CtejPI/Cdb3NzEw9CtejPArXo72QwvU8CtejPArXo72QwvU8CtejPArXo72QwvU8CtejPArXo72QwvU8CtejPI/Cdb3NzEy9CtejvI/Cdb3NzEy9CtejvI/Cdb3NzEy9CtejvI/Cdb3NzEy9CtejvArXo72QwvW8CtejvArXo72QwvW8CtejvArXo72QwvW8CtejvArXo72QwvW8CtejvI/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvQrXo72QwvU8CtejvArXo72QwvU8CtejvArXo72QwvU8CtejvArXo72QwvU8CtejvI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPI/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPQrXoz2QwvU8CtejPArXoz2QwvU8CtejPArXoz2QwvU8CtejPArXoz2QwvU8CtejPI/CdT3NzEy9CtejvI/CdT3NzEy9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CtejvI/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvQrXo72QwvU8CtejvArXo72QwvU8CtejvArXo72QwvU8CtejvArXo72QwvU8CtejvI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPI/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPQrXoz2QwvU8CtejPArXoz2QwvU8CtejPArXoz2QwvU8CtejPArXoz2QwvU8CtejPI/CdT3NzEy9CtejvI/CdT3NzEy9CtejvI/CdT3NzEy9CtejvI/CdT3NzEy9CtejvI/CdT2QwvW8CtcjvY/CdT2QwvW8CtcjvY/CdT2QwvW8CtcjvY/CdT2QwvW8CtcjvQrXoz2QwvW8CtejvArXoz2QwvW8CtejvArXoz2QwvW8CtejvArXoz2QwvW8CtejvI/CdT3NzEw9CtejvI/CdT3NzEw9CtejvI/CdT3NzEw9CtejvI/CdT3NzEw9CtejvArXoz2QwvU8CtejvArXoz2QwvU8CtejvArXoz2QwvU8CtejvArXoz2QwvU8CtejvI/CdT2QwvU8CtcjvY/CdT2QwvU8CtcjvY/CdT2QwvU8CtcjvY/CdT2QwvU8CtcjvQAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNE786zRO/Os0TP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNE786zRM/Os0TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNE786zRM/Os0TP/QENb/0BDU/AAAAADrNE786zRM/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNE786zRO/Os0Tv/QENb/0BDW/AAAAADrNE786zRO/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNE786zRO/Os0Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNE786zRM/Os0Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNEz86zRO/Os0TP/QENT/0BDW/AAAAADrNEz86zRO/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNEz86zRO/Os0TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNEz86zRM/Os0TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNEz86zRO/Os0Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNEz86zRM/Os0Tv/QENT/0BDU/AAAAADrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v7gehb0pXA+9CtejO7gehb0pXA+9CtejO7gehb0pXA+9CtejO7gehb0pXA89CtejO7gehb0pXA89CtejO7gehb0pXA89CtejO7gehb0pXA+9Cteju7gehb0pXA+9Cteju7gehb0pXA+9Cteju7gehb0pXA89Cteju7gehb0pXA89Cteju7gehb0pXA89Cteju7gehT0pXA+9CtejO7gehT0pXA+9CtejO7gehT0pXA+9CtejO7gehT0pXA89CtejO7gehT0pXA89CtejO7gehT0pXA89CtejO7gehT0pXA+9Cteju7gehT0pXA+9Cteju7gehT0pXA+9Cteju7gehT0pXA89Cteju7gehT0pXA89Cteju7gehT0pXA89CtejuwAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAALgehb0pXA+9CtejO7gehb0pXA+9CtejO7gehb0pXA+9CtejO7gehb0pXA89CtejO7gehb0pXA89CtejO7gehb0pXA89CtejO7gehb0pXA+9Cteju7gehb0pXA+9Cteju7gehb0pXA+9Cteju7gehb0pXA89Cteju7gehb0pXA89Cteju7gehb0pXA89Cteju7gehT0pXA+9CtejO7gehT0pXA+9CtejO7gehT0pXA+9CtejO7gehT0pXA89CtejO7gehT0pXA89CtejO7gehT0pXA89CtejO7gehT0pXA+9Cteju7gehT0pXA+9Cteju7gehT0pXA+9Cteju7gehT0pXA89Cteju7gehT0pXA89Cteju7gehT0pXA89CtejuwAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAJmZWb8pXI+9DNejPJmZWb8pXI+9DNejPJmZWb8pXI+9DNejPJmZWb8pXI+9DNejPJmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PQrXY7+QwvW8CtejPArXY7+QwvW8CtejPArXY7+QwvW8CtejPArXY7+QwvW8CtejPJmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb8pXI89DNejPJmZWb8pXI89DNejPJmZWb8pXI89DNejPJmZWb8pXI89DNejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvJmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vZmZWb+SwvU8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DNejPJmZWb8pXI+9DNejPJmZWb8pXI+9DNejPJmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PQrXY7+QwvW8CtejPArXY7+QwvW8CtejPArXY7+QwvW8CtejPArXY7+QwvW8CtejPJmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb8pXI89DNejPJmZWb8pXI89DNejPJmZWb8pXI89DNejPJmZWb8pXI89DNejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvJmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vQrXY7+QwvU8CtejvArXY7+QwvU8CtejvArXY7+QwvU8CtejvArXY7+QwvU8CtejvJmZWT8pXI+9DNejPJmZWT8pXI+9DNejPJmZWT8pXI+9DNejPJmZWT8pXI+9DNejPArXYz+QwvW8CtejPArXYz+QwvW8CtejPArXYz+QwvW8CtejPArXYz+QwvW8CtejPJmZWT+SwvW8j8J1PZmZWT+SwvW8j8J1PZmZWT+SwvW8j8J1PZmZWT+SwvW8j8J1PZmZWT8pXI89DNejPJmZWT8pXI89DNejPJmZWT8pXI89DNejPJmZWT8pXI89DNejPJmZWT+SwvU8j8J1PZmZWT+SwvU8j8J1PZmZWT+SwvU8j8J1PZmZWT+SwvU8j8J1PQrXYz+QwvU8CtejPArXYz+QwvU8CtejPArXYz+QwvU8CtejPArXYz+QwvU8CtejPJmZWT8pXI+9DNejvJmZWT8pXI+9DNejvJmZWT8pXI+9DNejvJmZWT8pXI+9DNejvJmZWT+SwvW8j8J1vZmZWT+SwvW8j8J1vZmZWT+SwvW8j8J1vZmZWT+SwvW8j8J1vQrXYz+QwvW8CtejvArXYz+QwvW8CtejvArXYz+QwvW8CtejvArXYz+QwvW8CtejvJmZWT8pXI89DNejvJmZWT8pXI89DNejvJmZWT8pXI89DNejvJmZWT8pXI89DNejvArXYz+QwvU8CtejvArXYz+QwvU8CtejvArXYz+QwvU8CtejvArXYz+QwvU8CtejvJmZWT+SwvU8j8J1vZmZWT+SwvU8j8J1vZmZWT+SwvU8j8J1vZmZWT+SwvU8j8J1vQAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAArLE78KyxO/mdETP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PwrLE78KyxO/mdETP/QENb8AAAAA9AQ1PwrLE78KyxO/mdETP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PwrLE78KyxM/mdETP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAArLE78KyxM/mdETP/QENb/0BDU/AAAAAArLE78KyxM/mdETP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAArLE78KyxO/mdETv/QENb/0BDW/AAAAAArLE78KyxO/mdETv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vwrLE78KyxO/mdETv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAArLE78KyxM/mdETv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vwrLE78KyxM/mdETv/QENb8AAAAA9AQ1vwrLE78KyxM/mdETv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAArLEz8KyxO/mdETP/QENT/0BDW/AAAAAArLEz8KyxO/mdETP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PwrLEz8KyxO/mdETP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAArLEz8KyxM/mdETP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PwrLEz8KyxM/mdETP/QENT8AAAAA9AQ1PwrLEz8KyxM/mdETP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAArLEz8KyxO/mdETv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vwrLEz8KyxO/mdETv/QENT8AAAAA9AQ1vwrLEz8KyxO/mdETv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAArLEz8KyxM/mdETv/QENT/0BDU/AAAAAArLEz8KyxM/mdETv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vwrLEz8KyxM/mdETv/QENT8AAAAA9AQ1vwzXo7sK1yO9rkdBPwzXo7sK1yO9rkdBPwzXo7sK1yO9rkdBPwzXo7sK1yO9rkdBPwzXo7sK16O8ZmZGPwzXo7sK16O8ZmZGPwzXo7sK16O8ZmZGPwzXo7sK16O8ZmZGP83MzLwK16O8rkdBP83MzLwK16O8rkdBP83MzLwK16O8rkdBP83MzLwK16O8rkdBPwzXo7sK16M8ZmZGPwzXo7sK16M8ZmZGPwzXo7sK16M8ZmZGPwzXo7sK16M8ZmZGPxDXo7sK1yM9rkdBPxDXo7sK1yM9rkdBPxDXo7sK1yM9rkdBPxDXo7sK1yM9rkdBP83MzLwK16M8rkdBP83MzLwK16M8rkdBP83MzLwK16M8rkdBP83MzLwK16M8rkdBPxDXo7sK1yO9rkdBvxDXo7sK1yO9rkdBvxDXo7sK1yO9rkdBvxDXo7sK1yO9rkdBv83MzLwK16O8rkdBv83MzLwK16O8rkdBv83MzLwK16O8rkdBv83MzLwK16O8rkdBvwzXo7sK16O8ZmZGvwzXo7sK16O8ZmZGvwzXo7sK16O8ZmZGvwzXo7sK16O8ZmZGvwzXo7sK1yM9rkdBvwzXo7sK1yM9rkdBvwzXo7sK1yM9rkdBvwzXo7sK1yM9rkdBvwzXo7sK16M8ZmZGvwzXo7sK16M8ZmZGvwzXo7sK16M8ZmZGvwzXo7sK16M8ZmZGv83MzLwK16M8rkdBv83MzLwK16M8rkdBv83MzLwK16M8rkdBv83MzLwK16M8rkdBvxDXozsK1yO9rkdBPxDXozsK1yO9rkdBPxDXozsK1yO9rkdBPxDXozsK1yO9rkdBP83MzDwK16O8rkdBP83MzDwK16O8rkdBP83MzDwK16O8rkdBP83MzDwK16O8rkdBPwzXozsK16O8ZmZGPwzXozsK16O8ZmZGPwzXozsK16O8ZmZGPwzXozsK16O8ZmZGPwzXozsK1yM9rkdBPwzXozsK1yM9rkdBPwzXozsK1yM9rkdBPwzXozsK1yM9rkdBPwzXozsK16M8ZmZGPwzXozsK16M8ZmZGPwzXozsK16M8ZmZGPwzXozsK16M8ZmZGP83MzDwK16M8rkdBP83MzDwK16M8rkdBP83MzDwK16M8rkdBP83MzDwK16M8rkdBPwzXozsK1yO9rkdBvwzXozsK1yO9rkdBvwzXozsK1yO9rkdBvwzXozsK1yO9rkdBvwzXozsK16O8ZmZGvwzXozsK16O8ZmZGvwzXozsK16O8ZmZGvwzXozsK16O8ZmZGv83MzDwK16O8rkdBv83MzDwK16O8rkdBv83MzDwK16O8rkdBv83MzDwK16O8rkdBvxDXozsK1yM9rkdBvxDXozsK1yM9rkdBvxDXozsK1yM9rkdBvxDXozsK1yM9rkdBv83MzDwK16M8rkdBv83MzDwK16M8rkdBv83MzDwK16M8rkdBv83MzDwK16M8rkdBvwzXozsK16M8ZmZGvwzXozsK16M8ZmZGvwzXozsK16M8ZmZGvwzXozsK16M8ZmZGvwAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPE7/byBO/ac8TP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPE7/byBO/ac8TP/QENb8AAAAA9AQ1P2nPE7/byBO/ac8TP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPE7/byBM/ac8TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPE7/byBM/ac8TP/QENb/0BDU/AAAAAGnPE7/byBM/ac8TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPE7/byBO/ac8Tv/QENb/0BDW/AAAAAGnPE7/byBO/ac8Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPE7/byBO/ac8Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPE7/byBM/ac8Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1v2nPE7/byBM/ac8Tv/QENb8AAAAA9AQ1v2nPE7/byBM/ac8Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPEz/byBO/ac8TP/QENT/0BDW/AAAAAGnPEz/byBO/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPEz/byBO/ac8TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPEz/byBM/ac8TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPEz/byBM/ac8TP/QENT8AAAAA9AQ1P2nPEz/byBM/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPEz/byBO/ac8Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPEz/byBO/ac8Tv/QENT8AAAAA9AQ1v2nPEz/byBO/ac8Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPEz/byBM/ac8Tv/QENT/0BDU/AAAAAGnPEz/byBM/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AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPEz/byBO/ac8TP/QENT/0BDW/AAAAAGnPEz/byBO/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPEz/byBO/ac8TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPEz/byBM/ac8TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPEz/byBM/ac8TP/QENT8AAAAA9AQ1P2nPEz/byBM/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPEz/byBO/ac8Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPEz/byBO/ac8Tv/QENT8AAAAA9AQ1v2nPEz/byBO/ac8Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPEz/byBM/ac8Tv/QENT/0BDU/AAAAAGnPEz/byBM/ac8Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1v2nPEz/byBM/ac8Tv/QENT8AAAAA9AQ1vw==";var Un={duration:169.9662,end_card:3,rate:24e3,note:"ElevenLabs-opptakene (30.10.2026) er uendret; kun stillhet f\xF8r/etter hvert kapittel. sentences = scenetid, audioSentences = taletid.",chapters:[{chapter:1,title:"Farger",start:0,speech:0,audio:29.5706,end:30.0706,sentences:[0,3.6,7.2,11.1,13.8,17.35,20.85,24.45],audioSentences:[0,4.21,7.77,11.92,14.55,18.47,22.47,26.7],sceneAudio:27.8625},{chapter:2,title:"Kj\xF8refeltlinje",start:30.0706,speech:30.5706,audio:12.6694,end:43.74,sentences:[0,2.76,5.79,10.07],audioSentences:[0,2.5,5.64,10.2],sceneAudio:12.425},{chapter:3,title:"Varsellinje",start:43.74,speech:44.24,audio:20.1927,end:64.9327,sentences:[0,3.6,6.34,11.15,14.64],audioSentences:[0,4.03,6.83,12.4,16.4],sceneAudio:18.2125},{chapter:4,title:"Sperrelinje",start:64.9327,speech:65.4327,audio:18.6775,end:84.6102,sentences:[0,3.94,6.71,9.74,13.29],audioSentences:[0,4.47,7.93,11.14,14.72],sceneAudio:16.675},{chapter:5,title:"Kombinerte linjer",start:84.6102,speech:86.1102,audio:22.5959,end:109.2061,sentences:[0,4.44,7.14,11.96,16.15],audioSentences:[0,5.54,8.11,13.19,17.64],sceneAudio:21.125},{chapter:6,title:"Sperreomr\xE5de",start:109.2061,speech:109.7061,audio:11.729,end:121.9351,sentences:[0,2.58,6.91,9.39],audioSentences:[0,2.28,6.77,8.74],sceneAudio:12.7},{chapter:7,title:"Kj\xF8refeltpiler",start:121.9351,speech:122.4351,audio:12.2775,end:135.2127,sentences:[0,3.77,7.3],audioSentences:[0,3.91,7.87],sceneAudio:11.7625},{chapter:8,title:"Skillelinje",start:135.2127,speech:135.7127,audio:14.6025,end:150.8151,sentences:[0,6.3,10.43],audioSentences:[0,7.41,11.77],sceneAudio:13.4375},{chapter:9,title:"Kantlinje",start:150.8151,speech:151.3151,audio:15.151,end:166.9662,sentences:[0,3.12,6.45,10.22,12.69],audioSentences:[0,3.23,7.04,11.16,13.16],sceneAudio:15.1}]};var Y0=[{label:"01 \xB7 FARGER",points:[["Veimerkingen viser","hvordan veien brukes"],["Fargen forteller","hva merkingen betyr"],["Gult skiller","motg\xE5ende retninger"],["Hvit oppmerking","har flere oppgaver"],["Hvitt kan skille felt","i samme retning"],["Kantlinjen markerer","kj\xF8rebanens ytterkant"],["Utenfor kj\xF8rebanen:","veiskulder eller veikant"],["Gangfelt er ogs\xE5","hvit oppmerking"]]},{label:"02 \xB7 KJ\xD8REFELTLINJE",points:[["Kj\xF8refeltlinje"],["Korte streker,","lange mellomrom"],["Kan krysses for \xE5 skifte","felt eller kj\xF8re forbi"],["Bare n\xE5r det er","trygt og lovlig"]]},{label:"03 \xB7 VARSELLINJE",points:[["Lange streker,","korte mellomrom"],["Motsatt av","kj\xF8refeltlinjen"],["Gul: for kort sikt til","vanlig forbikj\xF8ring"],["Hvit: fare ved","\xE5 skifte felt"],["Brutt linje betyr ikke","at det er trygt"]]},{label:"04 \xB7 SPERRELINJE",points:[["Hvit sperrelinje mellom","felt i samme retning"],["Ikke kj\xF8r p\xE5","eller over"],["Dobbel gul","sperrelinje"],["Begge retninger har","sperrelinje n\xE6rmest"],["Samme forbud:","ikke p\xE5 eller over"]]},{label:"05 \xB7 KOMBINERTE LINJER",points:[["Brutt og heltrukken","side om side"],["Linjen n\xE6rmest","deg gjelder"],["Brutt linje n\xE6rmest:","forbikj\xF8ring n\xE5r trygt"],["M\xF8tende trafikk har","sperrelinjen n\xE6rmest"],["Retur til h\xF8yre","side er tillatt"]]},{label:"06 \xB7 SPERREOMR\xC5DE",points:[["Sperreomr\xE5de"],["Skr\xE5 striper og","heltrukken kant"],["Ikke kj\xF8r","inn i det"],["F\xF8lg kj\xF8refeltet","videre"]]},{label:"07 \xB7 KJ\xD8REFELTPILER",points:[["Pilene viser hvilket","felt du skal bruke"],["Velg felt","i god tid"],["Sperrelinje og pil:","kj\xF8r dit pilen viser"]]},{label:"08 \xB7 SKILLELINJE",points:[["Skiller vanlig felt","fra kollektivfelt"],["Like lange streker","og mellomrom"],["Skiltene viser hvem","som kan bruke feltet"]]},{label:"09 \xB7 KANTLINJE",points:[["Kantlinjen viser hvor","kj\xF8rebanen slutter"],["Heltrukken kantlinje","er ikke sperrelinje"],["Smal vei uten midtlinje:","brutt kantlinje"],["Se p\xE5 farge","og m\xF8nster"],["Da forst\xE5r du hva","linjen betyr"]]}],TA={wide:{W:1920,H:1080,sceneH:850,pad:64,font:62,line:74,label:28,logo:28,labelY:46,firstY:118},mobile:{W:1080,H:1350,sceneH:1090,pad:56,font:52,line:64,label:26,logo:26,labelY:44,firstY:114}};function fd(i,e,t,n,s,r){let{W:o,H:a,sceneH:A,pad:c,font:l,line:h}=e,u=Y0[n],d=t.chapters[n].sentences,m=0;for(let S=0;S<d.length;S++)s>=d[S]-.15&&(m=S);let x=u.points[Math.min(m,u.points.length-1)];i.save(),i.fillStyle="#14363f",i.fillRect(0,A,o,a-A),i.fillStyle="#e6c65e",i.fillRect(c,A+e.labelY-e.label-8,40,4),i.textBaseline="alphabetic",i.textAlign="left",i.fillStyle="#a9c2c4",i.font=`600 ${e.label}px Arial`,i.fillText(u.label,c,A+e.labelY),i.textAlign="right",i.fillStyle="#dce8e7",i.font=`700 ${e.logo}px Arial`,i.fillText("teori-test.no",o-c,A+e.labelY),i.textAlign="left",i.fillStyle="#ffffff",i.font=`700 ${l}px Arial`;let f=s-(d[m]-.15);i.globalAlpha=Math.min(1,.35+f/.25);let p=x.map((S,b)=>{let C=A+e.firstY+b*h,v=i.measureText(S).width;return i.fillText(S,c,C),{text:S,x:c,y:C-l,width:v,height:l*1.25,fontSize:l}});i.globalAlpha=1;let w=t.duration,T=a-16,M=o-c*2;i.fillStyle="#ffffff22",i.fillRect(c,T,M,4),i.fillStyle="#e6c65e",i.fillRect(c,T,M*Math.max(0,Math.min(1,r/w)),4),i.fillStyle="#14363f";for(let S of t.chapters.slice(1))i.fillRect(c+M*S.start/w-1,T,3,4);return i.restore(),{point:x.join(" "),bounds:p,sceneHeight:A,width:o,height:a}}var Fi=TA.wide,ot=Fi.W,$t=Fi.H,Wt=Fi.sceneH,Fl=Un.duration,Gl=(i,e=0,t=1)=>Math.max(e,Math.min(t,i)),ln=i=>(i=Gl(i),i*i*i*(i*(i*6-15)+10)),$s=(i,e,t)=>i+(e-i)*t,oo=(i,e,t)=>new L(i,e,t),Ft=(i,e={})=>new ci({color:i,roughness:.95,...e}),pd=i=>new Qt({color:i,toneMapped:!1,side:kt});function md(i,e,t,n,s){let r=document.createElement("canvas");r.width=r.height=i;let o=r.getContext("2d"),a=o.createImageData(i,i),A=s,c=()=>(A=Math.imul(A,1664525)+1013904223>>>0,A/4294967296);for(let h=0;h<i*i;h++){let u=e+(c()-.5)*t;c()<n&&(u+=(c()<.5?-1:1)*t*1.6),u=Math.max(0,Math.min(255,u)),a.data.set([u,u,u,255],h*4)}o.putImageData(a,0,0);let l=new Ei(r);return l.wrapS=l.wrapT=Gn,l.colorSpace=yt,l.anisotropy=4,l}var Vl=pd("#ffd342"),en=pd("#faf8ed"),wA=Ft("#6b757d",{map:md(256,212,34,.05,7)}),jl=Ft("#cfcfbd",{map:md(128,205,60,.12,11)}),kl={yellow:Vl,white:en},Wl=17921;function un(){return Wl=Math.imul(Wl,1664525)+1013904223>>>0,Wl/4294967296}async function Q0(){let i=document.getElementById("film");i.width=ot,i.height=$t;let e=i.getContext("2d",{alpha:!1,willReadFrequently:!0}),t=new mA({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setSize(ot,Wt),t.setPixelRatio(1),t.outputColorSpace=yt,t.toneMapping=Yr,t.toneMappingExposure=1.03,t.shadowMap.enabled=!0,t.shadowMap.type=Ta;let n=new gr;{let G=document.createElement("canvas");G.width=4,G.height=256;let Z=G.getContext("2d"),j=Z.createLinearGradient(0,0,0,256);j.addColorStop(0,"#6ea6d4"),j.addColorStop(.55,"#a9cfe6"),j.addColorStop(1,"#dcebea"),Z.fillStyle=j,Z.fillRect(0,0,4,256);let E=new Ei(G);E.colorSpace=yt,n.background=E}n.fog=new mr("#d3e4e4",120,430);let s=new Rt(32,ot/Wt,.15,800);n.add(new Fr("#d9ecff","#5c7745",1.55));let r=new ts("#ffe5bf",3.1);r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:130}),r.shadow.bias=-4e-4,r.shadow.normalBias=.025,n.add(r,r.target);function o(G,Z,j){let E=new Nt(G,Z);return E.receiveShadow=!0,j.add(E),E}function a(G,Z,j,E=.06){let se=new js;G.forEach(([Ae,ye],Fe)=>Fe?se.lineTo(Ae,ye):se.moveTo(Ae,ye)),se.closePath();let le=new Or(se);le.rotateX(-Math.PI/2);let oe=o(le,Z,j);return oe.position.y=E,oe}function A(G,{curve:Z=!1,narrow:j=!1,urban:E=!1,fork:se=!1,junction:le=!1,combined:oe=!1}={}){let Ae=new Yt;n.add(Ae),Ae.visible=!1;let ye=z=>oe?-32+32*ln((z+15)/70):Z?38*ln((z-65)/95):0,Fe=z=>(ye(z+.02)-ye(z-.02))/.04,Ze=(z,N=0,K=.06)=>{let ee=Fe(z),Y=Math.hypot(1,ee);return oo(ye(z)+N/Y,K,-z+N*ee/Y)},Ve=[0];for(let z=1;z<=5e3;z++)Ve.push(Ve[z-1]+Math.hypot(.1,ye(z*.1)-ye((z-1)*.1)));function rt(z){if(z<=0)return z;let N=0,K=Ve.length-1;for(;K-N>1;){let ee=N+K>>1;Ve[ee]<z?N=ee:K=ee}return .1*(N+(z-Ve[N])/(Ve[K]-Ve[N]))}function Ce(z,N,K,ee,Y,de=Ae,fe=.061){let Ue=Math.max(1,Math.ceil((N-z)/1.2)),De=[],lt=[],et=[];for(let tn=0;tn<=Ue;tn++){let Dt=$s(z,N,tn/Ue),nn=typeof K=="function"?K(Dt):K,Ot=typeof ee=="function"?ee(Dt):ee;for(let Gt of[-1,1]){let Bn=Ze(Dt,nn+Gt*Ot/2,fe);De.push(Bn.x,Bn.y,Bn.z),et.push((nn+Gt*Ot/2)/3,Dt/3)}if(tn<Ue){let Gt=tn*2;lt.push(Gt,Gt+1,Gt+2,Gt+1,Gt+3,Gt+2)}}let xt=new bt;return xt.setAttribute("position",new ct(De,3)),xt.setAttribute("uv",new ct(et,2)),xt.setIndex(lt),xt.computeVertexNormals(),o(xt,Y,de)}function R(z,N,K,ee,Y=0,de=.15,fe=-60,Ue=410){for(let De=fe;De<Ue;De+=K+ee)Ce(De,Math.min(De+K,Ue),Y,de,kl[N],z)}function at(z,N="yellow"){let K=new Yt;if(Ae.add(K),z==="dash"&&R(K,N,3,9),z==="warning"&&R(K,N,9,3),z==="solid"&&Ce(-60,410,0,.15,kl[N],K),z==="double")for(let ee of[-.15,.15])Ce(-60,410,ee,.15,kl[N],K);return z==="combined"&&(R(K,"yellow",9,3,0,.15,-60,55),Ce(55,245,-.15,.15,Vl,K),R(K,"yellow",3,9,.15,.15,55,245),R(K,"yellow",3,9,0,.15,245,410)),z==="bus"&&R(K,"white",2,2,0,.2),K.visible=!1,K}let Ye=j?2.65:3.9;if(se){Ce(-60,150,0,ee=>7.8+Math.max(0,ee-70)*.16,jl,Ae,.01),Ce(-60,150,0,ee=>7.2+Math.max(0,ee-70)*.16,wA,Ae,.035);for(let ee of[-1,1]){Ce(-60,150,de=>ee*(3.3+Math.max(0,de-70)*.08),.15,en);let Y=de=>ee*(8.2+(de-150)*.08);Ce(150,410,Y,4.2,jl,Ae,.01),Ce(150,410,Y,3.6,wA,Ae,.035);for(let de of[-1.5,1.5])Ce(150,410,fe=>Y(fe)+de,.15,en)}let z=70,N=150,K=ee=>Math.max(0,ee-z)*.08;for(let ee of[-1,1])Ce(z,N,Y=>ee*K(Y),.15,en);a([[-K(N),N],[K(N),N],[K(N),N+.15],[-K(N),N+.15]],en,Ae),a([[0,z],[-.5,z+6.25],[.5,z+6.25]],en,Ae);for(let ee=79;ee<146;ee+=4){let Y=K(ee)-.12;a([[-Y,ee],[0,ee-2],[Y,ee],[Y,ee+.5],[0,ee-1.5],[-Y,ee+.5]],en,Ae)}R(Ae,"white",1,3,0,.15,-60,66)}else{Ce(-60,410,0,Ye*2+.6,jl,Ae,.01),Ce(-60,410,0,Ye*2,wA,Ae,.035);for(let z of[-1,1])j?R(Ae,"white",3,3,z*(Ye-.25),.1):le&&z===1?(Ce(-60,108,3.62,.15,en),Ce(124,410,3.62,.15,en)):Ce(-60,410,z*(Ye-.28),.15,en)}let _={dash:at("dash"),warning:at("warning"),double:at("double"),combined:at("combined"),whiteDash:at("dash","white"),whiteWarning:at("warning","white"),whiteSolid:at("solid","white"),bus:at("bus","white")},g=Ft(E?"#9cae7d":"#8eaf60",{flatShading:!0,vertexColors:!0,side:kt});function F(z,N){if(E||se)return-.12;let K=(z-ye(N))/Math.hypot(1,Fe(N)),ee=ln((Math.abs(K)-9)/13),Y=Z||oe?15*Math.exp(-(((N-(oe?20:112))/29)**2))*Math.exp(-(((K-18)/14)**2)):0;return-.12+ee*(.5+.6*Math.sin(N*.035+z*.02)+Y)}let X=[],$=[],ue=Z||oe?2:4;for(let z=-80;z<420;z+=ue)for(let N=-140;N<160;N+=ue)for(let K of[[[N,z],[N+ue,z],[N,z+ue]],[[N+ue,z],[N+ue,z+ue],[N,z+ue]]]){let ee=.96+un()*.08,Y=K[0][0],de=K[0][1],fe=E?0:.5*Math.sin(Y*.045+de*.013)+.5*Math.sin(de*.031-Y*.022),Ue=Math.abs(Y-ye(de)),De=fe>.55&&Ue>16?[1.13,1.07,.78]:fe<-.5&&Ue>14?[.8,.9,.8]:[1,1,1];!E&&Ue>8&&Ue<11&&(De=[De[0]*.9,De[1]*.94,De[2]*.9]);for(let[lt,et]of K)X.push(lt,F(lt,et),-et),$.push(ee*De[0],ee*De[1],ee*De[2])}let ge=new bt;ge.setAttribute("position",new ct(X,3)),ge.setAttribute("color",new ct($,3)),ge.computeVertexNormals();let ne=o(ge,g,Ae);if(oe){let z=o(new Ws(1,1),Ft("#82918a",{flatShading:!0}),Ae);z.position.copy(Ze(17,18,4.7)),z.scale.set(7,6,11)}let ie=Ft("#7b7052"),Me=Ft("#608858",{flatShading:!0}),Le=180,Te=o(new Di(.14,.2,1,5),ie,new Yt),ve=new on(Te.geometry,ie,Le),ze=new on(new Ws(1,0),Me,Le),pe=new vt;for(let z=0;z<Le;z++){let N=-40+un()*420,K=z%2?-1:1;le&&K===1&&N>95&&N<137&&(N+=55);let ee=K*(se?34+un()*60:12+un()*72),Y=ye(N)+ee,de=F(Y,N),fe=3+un()*3;pe.position.set(Y,de+fe*.28,-N),pe.scale.set(1,fe*.56,1),pe.updateMatrix(),ve.setMatrixAt(z,pe.matrix),pe.position.set(Y,de+fe*.72,-N),pe.scale.set(fe*.31,fe*.43,fe*.31),pe.rotation.y=un()*6,pe.updateMatrix(),ze.setMatrixAt(z,pe.matrix),ze.setColorAt(z,new ke().setHSL(.25+un()*.045,.29+un()*.1,.36+un()*.1))}Ae.add(ve,ze);for(let z=0;z<8;z++)o(new Ai(45+un()*30,50+un()*60,5),Ft("#8eafb5",{flatShading:!0}),Ae).position.set(-170+z*48,10,-330-un()*50);{let z=[...G].reduce((Ue,De)=>Ue*31+De.charCodeAt(0)>>>0,977),N=()=>(z=Math.imul(z,1664525)+1013904223>>>0,z/4294967296),K=Ft("#3d6643",{flatShading:!0}),ee=E?40:150,Y=new on(new Ai(1,1,6),K,ee),de=new on(new Ai(1,1,6),K,ee),fe=new on(new Di(.12,.16,1,5),ie,ee);for(let Ue=0;Ue<ee;Ue++){let De=-40+N()*440,lt=N()<.5?-1:1;le&&lt===1&&De>95&&De<137&&(De+=60);let et=lt*(se?36+N()*70:E?26+N()*40:13+N()*85),xt=ye(De)+et,tn=F(xt,De),Dt=4+N()*6,nn=Dt*.24;pe.rotation.set(0,N()*6,0),pe.position.set(xt,tn+Dt*.12,-De),pe.scale.set(1,Dt*.25,1),pe.updateMatrix(),fe.setMatrixAt(Ue,pe.matrix),pe.position.set(xt,tn+Dt*.45,-De),pe.scale.set(nn*1.15,Dt*.6,nn*1.15),pe.updateMatrix(),Y.setMatrixAt(Ue,pe.matrix),pe.position.set(xt,tn+Dt*.78,-De),pe.scale.set(nn*.75,Dt*.42,nn*.75),pe.updateMatrix(),de.setMatrixAt(Ue,pe.matrix);let Ot=new ke().setHSL(.36+N()*.04,.28+N()*.1,.22+N()*.08);Y.setColorAt(Ue,Ot),de.setColorAt(Ue,Ot)}if(Ae.add(Y,de,fe),!E&&!se){let Ue=[];for(let et=-40;et<400;et+=40)for(let xt of[-1,1])Ue.push(Ze(et,xt*(Ye+.75),0));let De=new on(new vn(.12,1,.12),Ft("#f4f4ee"),Ue.length),lt=new on(new vn(.13,.22,.13),Ft("#1d2224"),Ue.length);Ue.forEach((et,xt)=>{pe.rotation.set(0,0,0),pe.scale.set(1,1,1),pe.position.set(et.x,.38,et.z),pe.updateMatrix(),De.setMatrixAt(xt,pe.matrix),pe.position.set(et.x,.77,et.z),pe.updateMatrix(),lt.setMatrixAt(xt,pe.matrix)}),De.castShadow=lt.castShadow=!0,Ae.add(De,lt)}if(Z){let Ue=-(Ye+.65),De=[],lt=[],et=0;for(let Ot=60;Ot<=170;Ot+=1.2){for(let Gt of[.5,.82]){let Bn=Ze(Ot,Ue,Gt);De.push(Bn.x,Bn.y,Bn.z)}Ot>60&&lt.push(et-2,et-1,et,et-1,et+1,et),et+=2}let xt=new bt;xt.setAttribute("position",new ct(De,3)),xt.setIndex(lt),xt.computeVertexNormals();let tn=o(xt,Ft("#b9c1c3",{metalness:.55,roughness:.4,side:kt}),Ae);tn.castShadow=!0;let Dt=[];for(let Ot=60;Ot<=170;Ot+=4)Dt.push(Ze(Ot,Ue-.05,0));let nn=new on(new vn(.09,.85,.09),Ft("#8b9496"),Dt.length);Dt.forEach((Ot,Gt)=>{pe.rotation.set(0,0,0),pe.scale.set(1,1,1),pe.position.set(Ot.x,.42,Ot.z),pe.updateMatrix(),nn.setMatrixAt(Gt,pe.matrix)}),Ae.add(nn)}if(!E)for(let Ue=0;Ue<9;Ue++){let De=70+N()*80,lt=50+N()*45,et=-220+Ue*55+N()*20,xt=-400-N()*60;o(new Ai(lt,De,6),Ft("#7f9aa6",{flatShading:!0}),Ae).position.set(et,De/2-8,xt),o(new Ai(lt*.3,De*.3,6),Ft("#eef3f4",{flatShading:!0}),Ae).position.set(et,De-8-De*.15+.5,xt)}}if(E){let z=Ft("#d3d3c4");for(let N of[-1,1])le&&N===1?(Ce(-60,108,5,1.6,z,Ae,.1),Ce(124,410,5,1.6,z,Ae,.1)):Ce(-60,410,N*5,1.6,z,Ae,.1);for(let N=-15;N<320;N+=25)for(let K of[-1,1]){if(le&&K===1&&N>90&&N<145)continue;let ee=4+un()*7,Y=o(new vn(9,ee,11),Ft(["#c5d2ca","#d7ccb5","#a8bfc4"][Math.floor(un()*3)]),Ae);Y.position.set(K*17,ee/2,-N),Y.castShadow=!0;for(let de=1.6;de<ee-1;de+=2.4)for(let fe=-3;fe<=3;fe+=3)o(new vn(.03,.95,1.2),Ft("#537d8a"),Ae).position.set(K*12.48,de,-N+fe)}}let Ge=new Yt;Ae.add(Ge);for(let z=-3.5;z<3.6;z+=1)Ce(65,69,z,.5,en,Ge);if(Ge.visible=!1,le){a([[3.3,108],[8,112],[145,112],[145,120],[8,120],[3.3,124]],wA,Ae,.04);for(let z of[112,120])a([[8,z-.075],[145,z-.075],[145,z+.075],[8,z+.075]],en,Ae);for(let z=13;z<145;z+=12)a([[z,115.925],[z+3,115.925],[z+3,116.075],[z,116.075]],Vl,Ae);for(let z of[110.8,121.2])a([[8,z-.8],[145,z-.8],[145,z+.8],[8,z+.8]],Ft("#d3d3c4"),Ae,.1);for(let z of[!1,!0]){let N=[];for(let K=0;K<=24;K++){let ee=K/24*Math.PI/2,Y=7.62-4*Math.cos(ee),de=z?124-4*Math.sin(ee):108+4*Math.sin(ee);N.push([Y,de])}for(let K=0;K<N.length-1;K++){let[ee,Y]=N[K],[de,fe]=N[K+1];a([[ee-.07,Y],[ee+.07,Y],[de+.07,fe],[de-.07,fe]],en,Ae)}}for(let z of[50,75,98])c(Ae,-1.8,z,!1),c(Ae,1.8,z,!0);for(let z of Object.values(_))z.visible=!1;R(Ae,"white",1,3,0,.15,-60,62),Ce(66,110,0,.15,en)}function O(z){Object.entries(_).forEach(([N,K])=>K.visible=N===z)}return{name:G,root:Ae,road:Ze,slope:Fe,route:rt,strip:Ce,markings:O,crosswalk:Ge,half:Ye,terrain:ne}}function c(G,Z,j,E){a((E?[[-.15,-3],[.15,-3],[.15,.4],[1,.4],[1,-.35],[2,1],[1,2.3],[1,1.5],[-.15,1.5]]:[[-.16,-3],[.16,-3],[.16,1],[.8,1],[0,3],[-.8,1],[-.16,1]]).map(([le,oe])=>[Z+le*(E?.65:1),j+oe]),en,G,.064)}let l={rural:A("Toveisvei"),curve:A("Toveisvei med kurve",{curve:!0}),same:A("To felt i samme retning"),sameCurve:A("Samme retning gjennom kurve",{curve:!0}),combined:A("Avgrenset sperrelinje ved kurve",{combined:!0}),fork:A("Veideling",{fork:!0}),junction:A("Feltvalg foran kryss",{urban:!0,junction:!0}),bus:A("Vanlig felt og kollektivfelt",{urban:!0}),narrow:A("Smal toveisvei",{narrow:!0})};function h(G,Z,j,E){let se=document.createElement("canvas");se.width=512,se.height=256;let le=se.getContext("2d");le.fillStyle="#fffdf2",le.font="bold 100px Arial",le.textAlign="center",le.fillText(Z,256,175);let oe=new Ei(se);oe.colorSpace=yt;let Ae=o(new Ii(2.5,4),new Qt({map:oe,transparent:!0,depthWrite:!1,toneMapped:!1}),G);Ae.rotation.x=-Math.PI/2,Ae.position.set(j,.07,-E)}for(let G=30;G<190;G+=30)h(l.bus.root,"BUSS",1.8,G);let u=document.createElement("canvas");u.width=256,u.height=320;let d=u.getContext("2d");d.fillStyle="#1565aa",d.fillRect(0,0,256,320),d.strokeStyle="white",d.lineWidth=10,d.strokeRect(8,8,240,304),d.fillStyle="white",d.beginPath(),d.roundRect(64,64,128,160,16),d.fill(),d.fillStyle="#1565aa",d.fillRect(77,95,102,68),d.fillRect(91,76,74,10),d.fillRect(77,190,18,14),d.fillRect(161,190,18,14),d.fillStyle="white",d.fillRect(74,219,20,27),d.fillRect(162,219,20,27);let m=new Ei(u);m.colorSpace=yt;let x=[35,95,155].map(G=>{let Z=o(new Ii(1.6,2),new Qt({map:m,side:kt,toneMapped:!1}),l.bus.root);return Z.position.set(4.8,3,-G),o(new Di(.05,.05,2.6,6),Ft("#85949a"),l.bus.root).position.set(4.8,1,-G),Z}),f=Uint8Array.from(atob(dd),G=>G.charCodeAt(0)),p=(await new MA().parseAsync(f.buffer,"")).scene;function w(G){let Z=p.clone(!0),j=[];Z.traverse(se=>{if(se.name.startsWith("Hjul_")&&j.push(se),se.isMesh){se.castShadow=!0,se.receiveShadow=!0,se.material=Array.isArray(se.material)?se.material.map(le=>le.clone()):se.material.clone();for(let le of Array.isArray(se.material)?se.material:[se.material])le.name==="Lakk"&&le.color.set(G)}});let E=[];for(let se of[-1,1])for(let le of[-1.85,1.85]){let oe=new Nt(new vn(.19,.13,.06),new Qt({color:"#ffb629",toneMapped:!1}));oe.position.set(se*.78,.65,le),Z.add(oe),E.push({light:oe,side:se})}return n.add(Z),{obj:Z,wheels:j,signals:E}}let T=w("#1689c9"),M=w("#acb6b9"),S=w("#c4473b");function b(G,Z,j,E,se=0,le=0,oe=0){let Ae=Z.route(j);G.obj.position.copy(Z.road(Ae,E,.065)),G.obj.rotation.y=Math.PI-Math.atan(Z.slope(Ae))-se,G.wheels.forEach(ye=>ye.rotation.x=j/.34),G.signals.forEach(({light:ye,side:Fe})=>ye.visible=Fe===-le&&Math.floor(oe*2.4)%2===0)}function C(G,Z,{height:j=11,behind:E=19,ahead:se=12,x:le=0}={}){s.position.copy(G.road(G.route(Z-E),le,j)),s.lookAt(G.road(G.route(Z+se*.4),0,.3))}function v(G,Z,j,E,se,le){e.beginPath(),e.roundRect(G,Z,j,E,se),e.fillStyle=le,e.fill()}function P(G,Z,j,E,se="#fff",le=600){e.font=`${le} ${E}px Arial,sans-serif`,e.fillStyle=se,e.fillText(G,Z,j)}function D(G,Z,j,E=!1){let se=G.road(Z,j,.12).project(s),le=G.road(Z+(E?-9:9),j,.12).project(s),oe=rt=>Math.round(rt*64)/64,Ae=oe((se.x+1)*ot/2),ye=oe((1-se.y)*Wt/2),Fe=oe((le.x+1)*ot/2),Ze=oe((1-le.y)*Wt/2),Ve=Math.atan2(Ze-ye,Fe-Ae);e.strokeStyle="#79e5f0",e.fillStyle="#79e5f0",e.lineWidth=6,e.beginPath(),e.moveTo(Ae,ye),e.lineTo(Fe,Ze),e.stroke(),e.beginPath(),e.moveTo(Fe,Ze),e.lineTo(Fe-21*Math.cos(Ve-.5),Ze-21*Math.sin(Ve-.5)),e.lineTo(Fe-21*Math.cos(Ve+.5),Ze-21*Math.sin(Ve+.5)),e.closePath(),e.fill()}let I=(G,Z,j)=>{let E=G.road(Z,j,.11).project(s);return[Math.round((E.x+1)*ot*32)/64,Math.round((1-E.y)*Wt*32)/64,E.z]};function U(G,Z,j=!1){G.some(E=>E[2]>1||E[2]<-1)||(e.save(),e.beginPath(),G.forEach(([E,se],le)=>le?e.lineTo(E,se):e.moveTo(E,se)),e.closePath(),e.strokeStyle=`rgba(111,231,234,${.62+.1*Math.sin(Z*3)})`,e.lineWidth=$t>ot?4:4.5,e.lineJoin="round",j&&e.setLineDash([10,8]),e.shadowColor="#6fe7ea",e.shadowBlur=10,e.stroke(),e.restore())}function q(G,Z,j,E,se,le,oe=!1){let Ae=G.route(Z),ye=G.route(j);U([[Ae,E-se/2],[ye,E-se/2],[ye,E+se/2],[Ae,E+se/2]].map(([Fe,Ze])=>I(G,Fe,Ze)),le,oe)}function te(G,Z){let j=E=>Math.max(0,E-70)*.08;U([[70,0],[150,j(150)+.12],[150,-j(150)-.12]].map(([E,se])=>I(G,E,se)),Z)}function k(G,Z){let j=[[-.75,-1],[.75,-1],[.75,1],[-.75,1]].map(([E,se])=>{let le=oo(4.8+E*1.15,3+se*1.1,-Z).project(s);return[Math.round((le.x+1)*ot/2),Math.round((1-le.y)*Wt/2),le.z]});U(j,G)}let J=(G,Z=12,j=22)=>Math.ceil((G+j)/Z)*Z,H=7,ae=5;function ce(G,Z,j,E,se){let le=E-se;if(G<=le)return Z+j*G;let oe=Math.min(G-le,se);return Z+j*le+j*oe-j*oe*oe/(2*se)}let xe=G=>{let Z=[...G.audioSentences||G.sentences,G.audio],j=[...G.sentences,G.sceneAudio||G.audio];return[Z,j]},be=(G,Z,j)=>{if(G<=Z[0])return j[0]+(G-Z[0]);for(let E=1;E<Z.length;E++)if(G<=Z[E])return j[E-1]+(G-Z[E-1])*(j[E]-j[E-1])/(Z[E]-Z[E-1]);return j.at(-1)+(G-Z.at(-1))},Re=(G,Z)=>{let[j,E]=xe(Un.chapters[G]);return be(Z,j,E)},nt=(G,Z)=>{let[j,E]=xe(Un.chapters[G]);return be(Z,E,j)},Mt=Un.chapters.map(G=>G.start),it={0:[11.1],2:[11.15],3:[6.71],8:[6.45]},re=[];Un.chapters.forEach((G,Z)=>{Z&&re.push(G.start),(it[Z]||[]).forEach(j=>re.push(G.speech+nt(Z,j)))});let me=Un.chapters.at(-1).end;function he(G,Z,j){let E={oncoming:null,w:l.rural,d:0,lane:1.82,turn:0,signal:0,mark:"dash",cam:{height:13,behind:21,ahead:13},hl:[],dirs:[],crosswalk:!1,gray:null,cameraD:null},se=Un.chapters[G].sentences,le=oe=>j>=se[oe]-.1&&(oe+1>=se.length||j<se[oe+1]-.1);if(G===0)if(E.cam=$t>ot?{height:14,behind:18,ahead:15}:{height:9,behind:14,ahead:12},j<11.1){if(E.d=20+H*j,j>=7.2){let oe=J(20+H*7.2,12,24);E.hl.push(["band",oe,oe+3,0,.55]),E.dirs=[[E.d+17,-1.8,!0],[E.d+8,1.8,!1]]}}else if(E.w=l.same,E.mark="whiteDash",E.crosswalk=!0,E.d=ce(j-11.1,-27,H,13.9,3.5),j>=13.8&&j<17.35){let oe=J(-27+H*2.7,12,22);E.hl.push(["band",oe,oe+3,0,.55]),E.dirs=[[E.d+16,-1.8,!1],[E.d+9,1.8,!1]]}else j>=17.35&&j<24.45?E.hl.push(["band",E.d+3,E.d+20,3.62,.55]):j>=24.45&&E.hl.push(["band",64.6,69.4,0,7.9]);if(G===1){if(E.d=20+H*Z,E.cam={height:10+14*ln((j-2.6)/1.6)-14*ln((j-6)/2),behind:20,ahead:13},le(0)){let oe=J(20+H*(se[0]+.5),12,24);E.hl.push(["band",oe,oe+3,0,.55])}if(le(1)){let oe=J(20+H*(se[1]+.5),12,18);E.hl.push(["band",oe,oe+3,0,.55],["band",oe+3,oe+12,0,.55,!0])}}if(G===2){if(j<11.15){E.w=l.curve,E.mark="warning",E.d=40+H*Z;let oe=ln((j-6.2)/2.5);if(E.cam={height:$s(10,3.4,oe),behind:$s(18,13,oe),ahead:19},j>=6.3&&(E.oncoming=150-8*(j-6.5)),j<6.2){let Ae=J(40+H*(j<3.5?.5:4.1),12,24);E.hl.push(["band",Ae,Ae+9,0,.55],["band",Ae+9,Ae+12,0,.55,!0])}}else if(E.w=l.sameCurve,E.mark="whiteWarning",E.d=56+H*(j-11.15),E.cam={height:13,behind:22,ahead:16},E.dirs=[[E.d+20,-1.8,!1],[E.d+12,1.8,!1]],le(3)){let oe=J(56,12,26);E.hl.push(["band",oe,oe+9,0,.55])}}if(G===3&&(E.cam={height:13,behind:21,ahead:12},j<6.71?(E.w=l.same,E.mark="whiteSolid",E.d=20+H*Z,E.hl.push(["band",E.d+6,E.d+30,0,.5]),le(0)&&(E.dirs=[[E.d+20,-1.8,!1],[E.d+12,1.8,!1]])):(E.mark="double",E.d=20+H*(j-6.71),le(3)?(E.hl.push(["band",E.d+6,E.d+30,.15,.3],["band",E.d+6,E.d+30,-.15,.3]),E.dirs=[[E.d+22,-1.8,!0],[E.d+12,1.8,!1]]):E.hl.push(["band",E.d+6,E.d+30,0,.75]))),G===4){let oe=E.w=l.combined;E.mark="combined";let Ae=_=>1.82-3.64*ln((_-10.5)/2)+3.64*ln((_-16.2)/2),ye=_=>(_=Gl(_),_*_*(3-2*_)),Fe=_=>65+6*(_+1.5)+30*ye((_-11)/5);E.lane=Ae(j),E.d=Fe(j);let Ze=79+6*Z;E.gray=Ze;let Ve=.005,rt=(Fe(j+Ve)-Fe(j-Ve))/(2*Ve);E.turn=Math.atan((Ae(j+Ve)-Ae(j-Ve))/(2*Ve)/rt),E.signal=j>=8.5&&j<12.5?-1:j>=15.2&&j<18.2?1:0;let Ce=1-ln((Z-.3)/2.7);E.cameraD=(E.d+Ze)/2-28*Ce,E.cam={height:40+45*Ce,behind:9+33*Ce,ahead:-9*Ce};let R=E.cameraD,at=Math.max(56,R-4),Ye=Math.min(244,R+34);j>=-.1&&j<se[1]-.1?E.hl.push(["band",at,Ye,0,.7]):j<se[3]-.1?E.hl.push(["band",at,Ye,.15,.28]):j<se[4]-.1?E.hl.push(["band",at,Ye,-.15,.28]):E.hl.push(["band",at,Ye,-.15,.28])}if(G===5&&(E.w=l.fork,E.mark=null,E.d=40+H*Z,E.lane=1.8+Math.max(0,E.d-70)*.08,E.turn=Math.atan(E.d>70?.08:0),E.cam={height:28,behind:26,ahead:18},j<se[3]-.1&&E.hl.push(["gore"])),G===6&&(E.w=l.junction,E.mark=null,E.d=ce(Z,46.5,ae,12.2,3),E.cam={height:23,behind:24,ahead:19},E.signal=j>=5?1:0,le(0)&&E.hl.push(["band",72,78.5,1.8,2.4],["band",72,78.5,-1.8,2.4],["band",95,101.5,1.8,2.4],["band",95,101.5,-1.8,2.4]),le(2)&&E.hl.push(["band",66,110,0,.5],["band",95,101.5,1.8,2.4])),G===7){E.w=l.bus,E.mark="bus",E.lane=-1.8,E.d=15+ae*Z;{let oe=ln((j-se[2]+.3)/1.6);E.cam={height:$s(15,24,ln((j-5.5)/2.5))-11*oe,behind:23-6*oe,ahead:17+4*oe}}if(le(0)&&E.hl.push(["band",E.d+8,E.d+30,0,.45]),le(1)){let oe=J(15+ae*(se[1]+.5),4,24);E.hl.push(["band",oe,oe+2,0,.5],["band",oe+2,oe+4,0,.5,!0],["band",oe+4,oe+6,0,.5],["band",oe+6,oe+8,0,.5,!0])}if(le(2)){let oe=[35,95,155].find(Ae=>Ae>E.d+8);oe&&E.hl.push(["sign",oe])}}if(G===8)if(j<6.45)E.d=25+H*Z,E.cam={height:13,behind:21,ahead:14},E.hl.push(["band",E.d+3,E.d+20,3.62,.55]);else{E.w=l.narrow,E.mark=null,E.lane=1.25,E.d=20+5.5*(j-6.45);let oe=ln((j-10.2)/3);E.cam={height:$s(13,26,oe),behind:$s(21,28,oe),ahead:14},j<10.1&&E.hl.push(["band",E.d+3,E.d+22,2.4,.45],["band",E.d+3,E.d+22,-2.4,.45])}return $t>ot&&G!==0&&(E.cam={...E.cam,height:E.cam.height*1.3,behind:E.cam.behind*1.15,ahead:(E.cam.ahead||0)*1.1}),E}window.setFilmFormat=function(G){let Z=G==="mobile";return Fi=Z?TA.mobile:TA.wide,ot=Fi.W,$t=Fi.H,Wt=Fi.sceneH,i.width=ot,i.height=$t,t.setSize(ot,Wt),s.aspect=ot/Wt,s.fov=Z?40:32,s.updateProjectionMatrix(),window.filmFormat=Z?"mobile":"wide",{width:ot,height:$t}},window.chapterTimes=Un.chapters.map(G=>({chapter:G.chapter,title:G.title,start:G.start})),window.filmDuration=Fl,window.renderFrame=function(G){e.reset();let Z=Gl(Number(G)||0,0,Fl),j=Math.max(0,Z-me),E=Math.min(Z,me-.001),se=0;for(;se<Mt.length-1&&E>=Mt[se+1];)se++;let le=Un.chapters[se],oe=Re(se,E-le.speech),Ae=oe+(le.speech-le.start),ye=he(se,Ae,oe),Fe=ye.w;M.obj.visible=ye.gray!==null,Object.values(l).forEach(Ce=>{Ce.root.visible=!1,Ce.crosswalk.visible=!1}),Fe.root.visible=!0,Fe.crosswalk.visible=ye.crosswalk,Fe.markings(ye.mark),b(T,Fe,ye.d,ye.lane,ye.turn,ye.signal,E),S.obj.visible=ye.oncoming!==null,ye.oncoming!==null&&b(S,Fe,ye.oncoming,-1.82,Math.PI,0,E),ye.gray!==null&&b(M,Fe,ye.gray,1.82,0,0,E),C(Fe,ye.cameraD??ye.d,ye.cam);let Ze=Fe.road(Fe.route(ye.d),0,0);r.position.copy(Ze).add(oo(-30,48,20)),r.target.position.copy(Ze),s.updateMatrixWorld(),t.render(n,s),e.drawImage(t.domElement,0,0,ot,Wt);{let Ce=e.createRadialGradient(ot/2,Wt*.55,Math.min(ot,Wt)*.45,ot/2,Wt*.55,Math.max(ot,Wt)*.85);Ce.addColorStop(0,"rgba(20,40,45,0)"),Ce.addColorStop(1,"rgba(20,40,45,.16)"),e.fillStyle=Ce,e.fillRect(0,0,ot,Wt)}for(let[Ce,...R]of ye.hl)Ce==="band"&&q(Fe,R[0],R[1],R[2],R[3],E,R[4]),Ce==="gore"&&te(Fe,E),Ce==="sign"&&k(E,R[0]);ye.dirs.forEach(([Ce,R,at])=>D(Fe,Fe.route(Ce),R,at)),window.infoLayout=fd(e,Fi,Un,se,oe,Z);let Ve=0;for(let Ce of re)Z>=Ce&&Z<Ce+.32&&(Ve=Math.max(Ve,1-(Z-Ce)/.32));if(Ve&&(e.fillStyle=`rgba(17,41,51,${Ve*.85})`,e.fillRect(0,0,ot,Wt)),Z>=me){let Ce=ln(j/.7);e.fillStyle=`rgba(20,54,63,${Ce})`,e.fillRect(0,0,ot,$t),e.globalAlpha=ln((j-.4)/.6),e.textAlign="center",e.fillStyle="#e6c65e",e.fillRect(ot/2-30,$t*.4,60,5),e.fillStyle="#fff",e.font=`700 ${$t>ot?74:84}px Arial`,e.fillText("teori-test.no",ot/2,$t*.4+($t>ot?100:110)),e.fillStyle="#b9ced0",e.font=`600 ${$t>ot?34:36}px Arial`,e.fillText("\xD8v p\xE5 veimerking med gratis teoripr\xF8ver",ot/2,$t*.4+($t>ot?160:175)),e.globalAlpha=1}let rt=Ce=>{let R=Ce.position.clone().add(oo(0,.75,0)).project(s);return[(R.x+1)*ot/2,(1-R.y)*Wt/2]};return window.frameInfo={t:Z,chapter:se+1,title:le.title,speechTime:oe,environment:Fe.name,marking:ye.mark,laneOffset:ye.lane,routeDistance:ye.d,bluePosition:T.obj.position.toArray(),grayPosition:ye.gray!==null?M.obj.position.toArray():null,blueScreen:rt(T.obj),grayScreen:ye.gray!==null?rt(M.obj):null,signal:ye.signal,crosswalkVisible:ye.crosswalk,endCard:Z>=me,point:window.infoLayout.point,duration:Fl},i},window.auditRoadGeometry=function(){let G={},Z=new Xr,j=oo(0,-1,0);n.updateMatrixWorld(!0);for(let E of["curve","sameCurve","combined"]){let se=l[E],le=-1/0,oe=0,Ae=0;for(let ye=-10;ye<=250;ye+=3)for(let Fe of[-3.85,-2,0,2,3.85]){let Ze=se.road(ye,Fe,50);Z.set(Ze,j);let Ve=Z.intersectObject(se.terrain,!1)[0];if(!Ve)throw Error("Missing terrain at "+E+" "+ye);le=Math.max(le,Ve.point.y),Ve.point.y>=.034&&oe++,Ae++}G[E]={samples:Ae,maxHeight:le,violations:oe}}return G},window.renderFrame(.5),window.animationReady=!0}Q0().catch(i=>{window.animationError=String(i),console.error(i)});})();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
