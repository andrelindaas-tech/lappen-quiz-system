(()=>{var Fu=0,al=1,ju=2;var kr=1,fa=2,Bs=3,Gn=0,Kt=1,Ft=2,Vn=0,Fs=1,Al=2,ll=3,cl=4,ku=5;var Yi=100,Wu=101,Gu=102,Vu=103,Xu=104,Hu=200,Yu=201,Qu=202,Zu=203,ul=204,hl=205,Ju=206,Ku=207,qu=208,$u=209,eh=210,th=211,nh=212,ih=213,sh=214,Oo=0,zo=1,Uo=2,gs=3,Bo=4,Fo=5,jo=6,ko=7,dl=0,rh=1,oh=2,Dn=0,fl=1,pl=2,ml=3,Wr=4,gl=5,vl=6,Ml=7,XA="attached",ah="detached",xl=300,Ei=301,Qi=302,pa=303,ma=304,Gr=306,Bn=1e3,yn=1001,vs=1002,bt=1003,ga=1004;var Zi=1005;var St=1006,js=1007;var In=1008;var an=1009,yl=1010,Tl=1011,ks=1012,va=1013,Rn=1014,gn=1015,Ln=1016,Ma=1017,xa=1018,Ws=1020,wl=35902,bl=35899,Sl=1021,Pl=1022,vn=1023,Fn=1026,Di=1027,ya=1028,Ta=1029,Ii=1030,wa=1031;var ba=1033,Vr=33776,Xr=33777,Hr=33778,Yr=33779,Sa=35840,Pa=35841,_a=35842,Ca=35843,Ea=36196,Da=37492,Ia=37496,Ra=37488,La=37489,Qr=37490,Na=37491,Oa=37808,za=37809,Ua=37810,Ba=37811,Fa=37812,ja=37813,ka=37814,Wa=37815,Ga=37816,Va=37817,Xa=37818,Ha=37819,Ya=37820,Qa=37821,Za=36492,Ja=36494,Ka=36495,qa=36283,$a=36284,Zr=36285,eA=36286;var ji=2300,ki=2301,Ro=2302,HA=2303,YA=2400,QA=2401,ZA=2402,Ah=2500;var _l=0,Jr=1,Gs=2,lh=3200;var tA=0,ch=1,ci="",Mt="srgb",Jt="srgb-linear",lr="linear",at="srgb";var Lo=7680;var uh=519,hh=512,dh=513,fh=514,nA=515,ph=516,mh=517,iA=518,gh=519,Cl=35044;var El="300 es",En=2e3,Ms=2001;function xd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vh(){let i=xs("canvas");return i.style.display="block",i}var Yc={},ys=null;function cr(...i){let e="THREE."+i.shift();ys?ys("log",e,...i):console.log(e,...i)}function Mh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=Mh(i);let e="THREE."+i.shift();if(ys)ys("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=Mh(i);let e="THREE."+i.shift();if(ys)ys("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fi(...i){let e=i.join(" ");e in Yc||(Yc[e]=!0,ze(...i))}function xh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var yh={[Oo]:zo,[Uo]:jo,[Bo]:ko,[gs]:Fo,[zo]:Oo,[jo]:Uo,[ko]:Bo,[Fo]:gs},jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=1234567,rr=Math.PI/180,Wi=180/Math.PI;function Tn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function Dl(i,e){return(i%e+e)%e}function Td(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function wd(i,e,t){return i!==e?(t-i)/(e-i):0}function or(i,e,t){return(1-t)*i+t*e}function bd(i,e,t,n){return or(i,e,1-Math.exp(-t*n))}function Sd(i,e=1){return e-Math.abs(Dl(i,e*2)-e)}function Pd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _d(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ed(i,e){return i+Math.random()*(e-i)}function Dd(i){return i*(.5-Math.random())}function Id(i){i!==void 0&&(Qc=i);let e=Qc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rd(i){return i*rr}function Ld(i){return i*Wi}function Nd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Od(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ud(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),A=o(t/2),l=r((e+n)/2),c=o((e+n)/2),h=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*c,A*h,A*u,a*l);break;case"YZY":i.set(A*u,a*c,A*h,a*l);break;case"ZXZ":i.set(A*h,A*u,a*c,a*l);break;case"XZX":i.set(a*c,A*m,A*d,a*l);break;case"YXY":i.set(A*d,a*c,A*m,a*l);break;case"ZYZ":i.set(A*m,A*d,a*c,a*l);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Il={DEG2RAD:rr,RAD2DEG:Wi,generateUUID:Tn,clamp:Ke,euclideanModulo:Dl,mapLinear:Td,inverseLerp:wd,lerp:or,damp:bd,pingpong:Sd,smoothstep:Pd,smootherstep:_d,randInt:Cd,randFloat:Ed,randFloatSpread:Dd,seededRandom:Id,degToRad:Rd,radToDeg:Ld,isPowerOfTwo:Nd,ceilPowerOfTwo:Od,floorPowerOfTwo:zd,setQuaternionFromProperEuler:Ud,normalize:ct,denormalize:Cn},Ul=class Ul{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ul.prototype.isVector2=!0;var Ee=Ul,hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let A=n[s+0],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o+0],d=r[o+1],m=r[o+2],y=r[o+3];if(h!==y||A!==u||l!==d||c!==m){let p=A*u+l*d+c*m+h*y;p<0&&(u=-u,d=-d,m=-m,y=-y,p=-p);let f=1-a;if(p<.9995){let T=Math.acos(p),P=Math.sin(T);f=Math.sin(f*T)/P,a=Math.sin(a*T)/P,A=A*f+u*a,l=l*f+d*a,c=c*f+m*a,h=h*f+y*a}else{A=A*f+u*a,l=l*f+d*a,c=c*f+m*a,h=h*f+y*a;let T=1/Math.sqrt(A*A+l*l+c*c+h*h);A*=T,l*=T,c*=T,h*=T}}e[t]=A,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],A=n[s+1],l=n[s+2],c=n[s+3],h=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+c*h+A*d-l*u,e[t+1]=A*m+c*u+l*h-a*d,e[t+2]=l*m+c*d+a*u-A*h,e[t+3]=c*m-a*h-A*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,A=Math.sin,l=a(n/2),c=a(s/2),h=a(r/2),u=A(n/2),d=A(s/2),m=A(r/2);switch(o){case"XYZ":this._x=u*c*h+l*d*m,this._y=l*d*h-u*c*m,this._z=l*c*m+u*d*h,this._w=l*c*h-u*d*m;break;case"YXZ":this._x=u*c*h+l*d*m,this._y=l*d*h-u*c*m,this._z=l*c*m-u*d*h,this._w=l*c*h+u*d*m;break;case"ZXY":this._x=u*c*h-l*d*m,this._y=l*d*h+u*c*m,this._z=l*c*m+u*d*h,this._w=l*c*h-u*d*m;break;case"ZYX":this._x=u*c*h-l*d*m,this._y=l*d*h+u*c*m,this._z=l*c*m-u*d*h,this._w=l*c*h+u*d*m;break;case"YZX":this._x=u*c*h+l*d*m,this._y=l*d*h+u*c*m,this._z=l*c*m-u*d*h,this._w=l*c*h-u*d*m;break;case"XZY":this._x=u*c*h-l*d*m,this._y=l*d*h-u*c*m,this._z=l*c*m+u*d*h,this._w=l*c*h+u*d*m;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],A=t[9],l=t[2],c=t[6],h=t[10],u=n+a+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-A)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(c-A)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(A+c)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(A+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,A=t._y,l=t._z,c=t._w;return this._x=n*c+o*a+s*l-r*A,this._y=s*c+o*A+r*a-n*l,this._z=r*c+o*l+n*A-s*a,this._w=o*c-n*a-s*A-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let A=1-t;if(a<.9995){let l=Math.acos(a),c=Math.sin(l);A=Math.sin(A*l)/c,t=Math.sin(t*l)/c,this._x=this._x*A+n*t,this._y=this._y*A+s*t,this._z=this._z*A+r*t,this._w=this._w*A+o*t,this._onChangeCallback()}else this._x=this._x*A+n*t,this._y=this._y*A+s*t,this._z=this._z*A+r*t,this._w=this._w*A+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Bl=class Bl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,A=e.w,l=2*(o*s-a*n),c=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+A*l+o*h-a*c,this.y=n+A*c+a*l-r*h,this.z=s+A*h+r*c-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,A=t.z;return this.x=s*A-r*a,this.y=r*o-n*A,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vA.copy(this).projectOnVector(e),this.sub(vA)}reflect(e){return this.sub(vA.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bl.prototype.isVector3=!0;var L=Bl,vA=new L,Zc=new hn,Fl=class Fl{constructor(e,t,n,s,r,o,a,A,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,A,l)}set(e,t,n,s,r,o,a,A,l){let c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=r,c[5]=A,c[6]=n,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],A=n[6],l=n[1],c=n[4],h=n[7],u=n[2],d=n[5],m=n[8],y=s[0],p=s[3],f=s[6],T=s[1],P=s[4],M=s[7],w=s[2],b=s[5],E=s[8];return r[0]=o*y+a*T+A*w,r[3]=o*p+a*P+A*b,r[6]=o*f+a*M+A*E,r[1]=l*y+c*T+h*w,r[4]=l*p+c*P+h*b,r[7]=l*f+c*M+h*E,r[2]=u*y+d*T+m*w,r[5]=u*p+d*P+m*b,r[8]=u*f+d*M+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],A=e[6],l=e[7],c=e[8];return t*o*c-t*a*l-n*r*c+n*a*A+s*r*l-s*o*A}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],A=e[6],l=e[7],c=e[8],h=c*o-a*l,u=a*A-c*r,d=l*r-o*A,m=t*h+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=h*y,e[1]=(s*l-c*n)*y,e[2]=(a*n-s*o)*y,e[3]=u*y,e[4]=(c*t-s*A)*y,e[5]=(s*r-a*t)*y,e[6]=d*y,e[7]=(n*A-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let A=Math.cos(r),l=Math.sin(r);return this.set(n*A,n*l,-n*(A*o+l*a)+o+e,-s*l,s*A,-s*(-l*o+A*a)+a+t,0,0,1),this}scale(e,t){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(MA.makeScale(e,t)),this}rotate(e){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(MA.makeRotation(-e)),this}translate(e,t){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(MA.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fl.prototype.isMatrix3=!0;var Ve=Fl,MA=new Ve,Jc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bd(){let i={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jt]:{primaries:e,whitePoint:n,transfer:lr,toXYZ:Jc,fromXYZ:Kc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Jc,fromXYZ:Kc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}var Je=Bd();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ts,Wo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=xs("canvas")),ts.width=e.width,ts.height=e.height;let s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fd=0,Ts=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Tn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xA(s[o].image)):r.push(xA(s[o]))}else r=xA(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function xA(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var jd=0,yA=new L,Nt=class i extends jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=yn,s=yn,r=St,o=In,a=vn,A=an,l=i.DEFAULT_ANISOTROPY,c=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Tn(),this.name="",this.source=new Ts(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=A,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yA).x}get height(){return this.source.getSize(yA).y}get depth(){return this.source.getSize(yA).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bn:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bn:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=xl;Nt.DEFAULT_ANISOTROPY=1;var jl=class jl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,A=e.elements,l=A[0],c=A[4],h=A[8],u=A[1],d=A[5],m=A[9],y=A[2],p=A[6],f=A[10];if(Math.abs(c-u)<.01&&Math.abs(h-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+y)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let P=(l+1)/2,M=(d+1)/2,w=(f+1)/2,b=(c+u)/4,E=(h+y)/4,v=(m+p)/4;return P>M&&P>w?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=b/n,r=E/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=E/r,s=v/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-m)*(p-m)+(h-y)*(h-y)+(u-c)*(u-c));return Math.abs(T)<.001&&(T=1),this.x=(p-m)/T,this.y=(h-y)/T,this.z=(u-c)/T,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jl.prototype.isVector4=!0;var ut=jl,Go=class extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Nt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ts(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Go{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ur=class extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vo=class extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var da=class da{constructor(e,t,n,s,r,o,a,A,l,c,h,u,d,m,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,A,l,c,h,u,d,m,y,p)}set(e,t,n,s,r,o,a,A,l,c,h,u,d,m,y,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=A,f[2]=l,f[6]=c,f[10]=h,f[14]=u,f[3]=d,f[7]=m,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new da().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),A=Math.cos(s),l=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=o*c,d=o*h,m=a*c,y=a*h;t[0]=A*c,t[4]=-A*h,t[8]=l,t[1]=d+m*l,t[5]=u-y*l,t[9]=-a*A,t[2]=y-u*l,t[6]=m+d*l,t[10]=o*A}else if(e.order==="YXZ"){let u=A*c,d=A*h,m=l*c,y=l*h;t[0]=u+y*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=d*a-m,t[6]=y+u*a,t[10]=o*A}else if(e.order==="ZXY"){let u=A*c,d=A*h,m=l*c,y=l*h;t[0]=u-y*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*c,t[9]=y-u*a,t[2]=-o*l,t[6]=a,t[10]=o*A}else if(e.order==="ZYX"){let u=o*c,d=o*h,m=a*c,y=a*h;t[0]=A*c,t[4]=m*l-d,t[8]=u*l+y,t[1]=A*h,t[5]=y*l+u,t[9]=d*l-m,t[2]=-l,t[6]=a*A,t[10]=o*A}else if(e.order==="YZX"){let u=o*A,d=o*l,m=a*A,y=a*l;t[0]=A*c,t[4]=y-u*h,t[8]=m*h+d,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-l*c,t[6]=d*h+m,t[10]=u-y*h}else if(e.order==="XZY"){let u=o*A,d=o*l,m=a*A,y=a*l;t[0]=A*c,t[4]=-h,t[8]=l*c,t[1]=u*h+y,t[5]=o*c,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*c,t[10]=y*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kd,e,Wd)}lookAt(e,t,n){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),pi.crossVectors(n,cn),pi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),pi.crossVectors(n,cn)),pi.normalize(),so.crossVectors(cn,pi),s[0]=pi.x,s[4]=so.x,s[8]=cn.x,s[1]=pi.y,s[5]=so.y,s[9]=cn.y,s[2]=pi.z,s[6]=so.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],A=n[8],l=n[12],c=n[1],h=n[5],u=n[9],d=n[13],m=n[2],y=n[6],p=n[10],f=n[14],T=n[3],P=n[7],M=n[11],w=n[15],b=s[0],E=s[4],v=s[8],_=s[12],R=s[1],U=s[5],B=s[9],V=s[13],O=s[2],X=s[6],$=s[10],K=s[14],de=s[3],te=s[7],ae=s[11],ce=s[15];return r[0]=o*b+a*R+A*O+l*de,r[4]=o*E+a*U+A*X+l*te,r[8]=o*v+a*B+A*$+l*ae,r[12]=o*_+a*V+A*K+l*ce,r[1]=c*b+h*R+u*O+d*de,r[5]=c*E+h*U+u*X+d*te,r[9]=c*v+h*B+u*$+d*ae,r[13]=c*_+h*V+u*K+d*ce,r[2]=m*b+y*R+p*O+f*de,r[6]=m*E+y*U+p*X+f*te,r[10]=m*v+y*B+p*$+f*ae,r[14]=m*_+y*V+p*K+f*ce,r[3]=T*b+P*R+M*O+w*de,r[7]=T*E+P*U+M*X+w*te,r[11]=T*v+P*B+M*$+w*ae,r[15]=T*_+P*V+M*K+w*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],A=e[9],l=e[13],c=e[2],h=e[6],u=e[10],d=e[14],m=e[3],y=e[7],p=e[11],f=e[15],T=A*d-l*u,P=a*d-l*h,M=a*u-A*h,w=o*d-l*c,b=o*u-A*c,E=o*h-a*c;return t*(y*T-p*P+f*M)-n*(m*T-p*w+f*b)+s*(m*P-y*w+f*E)-r*(m*M-y*b+p*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],A=e[2],l=e[6],c=e[10];return t*(o*c-a*l)-n*(r*c-a*A)+s*(r*l-o*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],A=e[6],l=e[7],c=e[8],h=e[9],u=e[10],d=e[11],m=e[12],y=e[13],p=e[14],f=e[15],T=t*a-n*o,P=t*A-s*o,M=t*l-r*o,w=n*A-s*a,b=n*l-r*a,E=s*l-r*A,v=c*y-h*m,_=c*p-u*m,R=c*f-d*m,U=h*p-u*y,B=h*f-d*y,V=u*f-d*p,O=T*V-P*B+M*U+w*R-b*_+E*v;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/O;return e[0]=(a*V-A*B+l*U)*X,e[1]=(s*B-n*V-r*U)*X,e[2]=(y*E-p*b+f*w)*X,e[3]=(u*b-h*E-d*w)*X,e[4]=(A*R-o*V-l*_)*X,e[5]=(t*V-s*R+r*_)*X,e[6]=(p*M-m*E-f*P)*X,e[7]=(c*E-u*M+d*P)*X,e[8]=(o*B-a*R+l*v)*X,e[9]=(n*R-t*B-r*v)*X,e[10]=(m*b-y*M+f*T)*X,e[11]=(h*M-c*b-d*T)*X,e[12]=(a*_-o*U-A*v)*X,e[13]=(t*U-n*_+s*v)*X,e[14]=(y*P-m*w-p*T)*X,e[15]=(c*w-h*P+u*T)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,A=e.z,l=r*o,c=r*a;return this.set(l*o+n,l*a-s*A,l*A+s*a,0,l*a+s*A,c*a+n,c*A-s*o,0,l*A-s*a,c*A+s*o,r*A*A+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,A=t._w,l=r+r,c=o+o,h=a+a,u=r*l,d=r*c,m=r*h,y=o*c,p=o*h,f=a*h,T=A*l,P=A*c,M=A*h,w=n.x,b=n.y,E=n.z;return s[0]=(1-(y+f))*w,s[1]=(d+M)*w,s[2]=(m-P)*w,s[3]=0,s[4]=(d-M)*b,s[5]=(1-(u+f))*b,s[6]=(p+T)*b,s[7]=0,s[8]=(m+P)*E,s[9]=(p-T)*E,s[10]=(1-(u+y))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ns.set(s[0],s[1],s[2]).length(),a=ns.set(s[4],s[5],s[6]).length(),A=ns.set(s[8],s[9],s[10]).length();r<0&&(o=-o),bn.copy(this);let l=1/o,c=1/a,h=1/A;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=c,bn.elements[5]*=c,bn.elements[6]*=c,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,t.setFromRotationMatrix(bn),n.x=o,n.y=a,n.z=A,this}makePerspective(e,t,n,s,r,o,a=En,A=!1){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),m,y;if(A)m=r/(o-r),y=o*r/(o-r);else if(a===En)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ms)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=En,A=!1){let l=this.elements,c=2/(t-e),h=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),m,y;if(A)m=1/(o-r),y=o/(o-r);else if(a===En)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ms)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};da.prototype.isMatrix4=!0;var Xe=da,ns=new L,bn=new Xe,kd=new L(0,0,0),Wd=new L(1,1,1),pi=new L,so=new L,cn=new L,qc=new Xe,$c=new hn,ti=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],A=s[1],l=s[5],c=s[9],h=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(A,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(A,r));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(A,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $c.setFromEuler(this),this.setFromQuaternion($c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gd=0,eu=new L,is=new hn,Qn=new Xe,ro=new L,Js=new L,Vd=new L,Xd=new hn,tu=new L(1,0,0),nu=new L(0,1,0),iu=new L(0,0,1),su={type:"added"},Hd={type:"removed"},ss={type:"childadded",child:null},TA={type:"childremoved",child:null},gt=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new ti,n=new hn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ve}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(tu,e)}rotateY(e){return this.rotateOnAxis(nu,e)}rotateZ(e){return this.rotateOnAxis(iu,e)}translateOnAxis(e,t){return eu.copy(e).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tu,e)}translateY(e){return this.translateOnAxis(nu,e)}translateZ(e){return this.translateOnAxis(iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ro.copy(e):ro.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Js,ro,this.up):Qn.lookAt(ro,Js,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Qn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(su),ss.child=e,this.dispatchEvent(ss),ss.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hd),TA.child=e,this.dispatchEvent(TA),TA.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(su),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,Vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,A){return a[A.uuid]===void 0&&(a[A.uuid]=A.toJSON(e)),A.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let A=a.shapes;if(Array.isArray(A))for(let l=0,c=A.length;l<c;l++){let h=A[l];r(e.shapes,h)}else r(e.shapes,A)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let A=0,l=this.material.length;A<l;A++)a.push(r(e.materials,this.material[A]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let A=this.animations[a];s.animations.push(r(e.animations,A))}}if(t){let a=o(e.geometries),A=o(e.materials),l=o(e.textures),c=o(e.images),h=o(e.shapes),u=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),A.length>0&&(n.materials=A),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let A=[];for(let l in a){let c=a[l];delete c.metadata,A.push(c)}return A}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.DEFAULT_UP=new L(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vt=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yd={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,A=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,n),f=this._getHandJoint(l,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&u>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else A!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(A.matrix.fromArray(r.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,r.linearVelocity?(A.hasLinearVelocity=!0,A.linearVelocity.copy(r.linearVelocity)):A.hasLinearVelocity=!1,r.angularVelocity?(A.hasAngularVelocity=!0,A.angularVelocity.copy(r.angularVelocity)):A.hasAngularVelocity=!1,A.eventsEnabled&&A.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return a!==null&&(a.visible=s!==null),A!==null&&(A.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},oo={h:0,s:0,l:0};function wA(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Dl(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wA(o,r,e+1/3),this.g=wA(o,r,e),this.b=wA(o,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=Th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Je.workingToColorSpace(Gt.copy(this),e),Math.round(Ke(Gt.r*255,0,255))*65536+Math.round(Ke(Gt.g*255,0,255))*256+Math.round(Ke(Gt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Gt.copy(this),t);let n=Gt.r,s=Gt.g,r=Gt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),A,l,c=(a+o)/2;if(a===o)A=0,l=0;else{let h=o-a;switch(l=c<=.5?h/(o+a):h/(2-o-a),o){case n:A=(s-r)/h+(s<r?6:0);break;case s:A=(r-n)/h+2;break;case r:A=(n-s)/h+4;break}A/=6}return e.h=A,e.s=l,e.l=c,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Mt){Je.workingToColorSpace(Gt.copy(this),e);let t=Gt.r,n=Gt.g,s=Gt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(oo);let n=or(mi.h,oo.h,t),s=or(mi.s,oo.s,t),r=or(mi.l,oo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new je;je.NAMES=Th;var hr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dr=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sn=new L,Zn=new L,bA=new L,Jn=new L,rs=new L,os=new L,ru=new L,SA=new L,PA=new L,_A=new L,CA=new ut,EA=new ut,DA=new ut,yi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Sn.subVectors(e,t),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Sn.subVectors(s,t),Zn.subVectors(n,t),bA.subVectors(e,t);let o=Sn.dot(Sn),a=Sn.dot(Zn),A=Sn.dot(bA),l=Zn.dot(Zn),c=Zn.dot(bA),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(l*A-a*c)*u,m=(o*c-a*A)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,s,r,o,a,A){return this.getBarycoord(e,t,n,s,Jn)===null?(A.x=0,A.y=0,"z"in A&&(A.z=0),"w"in A&&(A.w=0),null):(A.setScalar(0),A.addScaledVector(r,Jn.x),A.addScaledVector(o,Jn.y),A.addScaledVector(a,Jn.z),A)}static getInterpolatedAttribute(e,t,n,s,r,o){return CA.setScalar(0),EA.setScalar(0),DA.setScalar(0),CA.fromBufferAttribute(e,t),EA.fromBufferAttribute(e,n),DA.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(CA,r.x),o.addScaledVector(EA,r.y),o.addScaledVector(DA,r.z),o}static isFrontFacing(e,t,n,s){return Sn.subVectors(n,t),Zn.subVectors(e,t),Sn.cross(Zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Sn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;rs.subVectors(s,n),os.subVectors(r,n),SA.subVectors(e,n);let A=rs.dot(SA),l=os.dot(SA);if(A<=0&&l<=0)return t.copy(n);PA.subVectors(e,s);let c=rs.dot(PA),h=os.dot(PA);if(c>=0&&h<=c)return t.copy(s);let u=A*h-c*l;if(u<=0&&A>=0&&c<=0)return o=A/(A-c),t.copy(n).addScaledVector(rs,o);_A.subVectors(e,r);let d=rs.dot(_A),m=os.dot(_A);if(m>=0&&d<=m)return t.copy(r);let y=d*l-A*m;if(y<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(os,a);let p=c*m-d*h;if(p<=0&&h-c>=0&&d-m>=0)return ru.subVectors(r,s),a=(h-c)/(h-c+(d-m)),t.copy(s).addScaledVector(ru,a);let f=1/(p+y+u);return o=y*f,a=u*f,t.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Ao.subVectors(this.max,Ks),as.subVectors(e.a,Ks),As.subVectors(e.b,Ks),ls.subVectors(e.c,Ks),gi.subVectors(As,as),vi.subVectors(ls,As),Oi.subVectors(as,ls);let t=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-Oi.z,Oi.y,gi.z,0,-gi.x,vi.z,0,-vi.x,Oi.z,0,-Oi.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-Oi.y,Oi.x,0];return!IA(t,as,As,ls,Ao)||(t=[1,0,0,0,1,0,0,0,1],!IA(t,as,As,ls,Ao))?!1:(lo.crossVectors(gi,vi),t=[lo.x,lo.y,lo.z],IA(t,as,As,ls,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Kn=[new L,new L,new L,new L,new L,new L,new L,new L],Pn=new L,ao=new dn,as=new L,As=new L,ls=new L,gi=new L,vi=new L,Oi=new L,Ks=new L,Ao=new L,lo=new L,zi=new L;function IA(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zi.fromArray(i,r);let a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),A=e.dot(zi),l=t.dot(zi),c=n.dot(zi);if(Math.max(-Math.max(A,l,c),Math.min(A,l,c))>a)return!1}return!0}var Et=new L,co=new Ee,Qd=0,Lt=class extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cl,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var fr=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pr=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var At=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zd=new dn,qs=new L,RA=new L,tn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);let t=qs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(RA.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(RA)),this.expandByPoint(qs.copy(e.center).sub(RA))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jd=0,xn=new Xe,LA=new gt,cs=new L,un=new dn,$s=new dn,Bt=new L,yt=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xd(e)?pr:fr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return LA.lookAt(e),LA.updateMatrix(),this.applyMatrix4(LA.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(un.min,$s.min),un.expandByPoint(Bt),Bt.addVectors(un.max,$s.max),un.expandByPoint(Bt)):(un.expandByPoint($s.min),un.expandByPoint($s.max))}un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],A=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Bt.fromBufferAttribute(a,l),A&&(cs.fromBufferAttribute(e,l),Bt.add(cs)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Lt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],A=[];for(let v=0;v<n.count;v++)a[v]=new L,A[v]=new L;let l=new L,c=new L,h=new L,u=new Ee,d=new Ee,m=new Ee,y=new L,p=new L;function f(v,_,R){l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,R),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,_),m.fromBufferAttribute(r,R),c.sub(l),h.sub(l),d.sub(u),m.sub(u);let U=1/(d.x*m.y-m.x*d.y);isFinite(U)&&(y.copy(c).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(U),p.copy(h).multiplyScalar(d.x).addScaledVector(c,-m.x).multiplyScalar(U),a[v].add(y),a[_].add(y),a[R].add(y),A[v].add(p),A[_].add(p),A[R].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let v=0,_=T.length;v<_;++v){let R=T[v],U=R.start,B=R.count;for(let V=U,O=U+B;V<O;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let P=new L,M=new L,w=new L,b=new L;function E(v){w.fromBufferAttribute(s,v),b.copy(w);let _=a[v];P.copy(_),P.sub(w.multiplyScalar(w.dot(_))).normalize(),M.crossVectors(b,_);let U=M.dot(A[v])<0?-1:1;o.setXYZW(v,P.x,P.y,P.z,U)}for(let v=0,_=T.length;v<_;++v){let R=T[v],U=R.start,B=R.count;for(let V=U,O=U+B;V<O;V+=3)E(e.getX(V+0)),E(e.getX(V+1)),E(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,A=new L,l=new L,c=new L,h=new L;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),a.fromBufferAttribute(n,m),A.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),a.add(c),A.add(c),l.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,A.x,A.y,A.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,A){let l=a.array,c=a.itemSize,h=a.normalized,u=new l.constructor(A.length*c),d=0,m=0;for(let y=0,p=A.length;y<p;y++){a.isInterleavedBufferAttribute?d=A[y]*a.data.stride+a.offset:d=A[y]*c;for(let f=0;f<c;f++)u[m++]=l[d++]}return new Lt(u,c,h)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let A=s[a],l=e(A,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let A=[],l=r[a];for(let c=0,h=l.length;c<h;c++){let u=l[c],d=e(u,n);A.push(d)}t.morphAttributes[a]=A}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,A=o.length;a<A;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let A=this.parameters;for(let l in A)A[l]!==void 0&&(e[l]=A[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let A in n){let l=n[A];e.data.attributes[A]=l.toJSON(e.data)}let s={},r=!1;for(let A in this.morphAttributes){let l=this.morphAttributes[A],c=[];for(let h=0,u=l.length;h<u;h++){let d=l[h];c.push(d.toJSON(e.data))}c.length>0&&(s[A]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let c=s[l];this.setAttribute(l,c.clone(t))}let r=e.morphAttributes;for(let l in r){let c=[],h=r[l];for(let u=0,d=h.length;u<d;u++)c.push(h[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,c=o.length;l<c;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let A=e.boundingSphere;return A!==null&&(this.boundingSphere=A.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ss=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cl,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Zt=new L,Ps=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){cr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){cr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},NA=new L,Kd=new L,qd=new Ve,_n=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=NA.subVectors(n,t).cross(Kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(NA),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qd.getNormalMatrix(e),s=this.coplanarPoint(NA).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$d=0,nn=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=Fs,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=hl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let A=r[a];delete A.metadata,o.push(A)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new _n().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var qn=new L,OA=new L,uo=new L,ho=new L,Ti=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){OA.copy(e).add(t).multiplyScalar(.5),uo.copy(t).sub(e).normalize(),ho.copy(this.origin).sub(OA);let r=e.distanceTo(t)*.5,o=-this.direction.dot(uo),a=ho.dot(this.direction),A=-ho.dot(uo),l=ho.lengthSq(),c=Math.abs(1-o*o),h,u,d,m;if(c>0)if(h=o*A-a,u=o*a-A,m=r*c,h>=0)if(u>=-m)if(u<=m){let y=1/c;h*=y,u*=y,d=h*(h+o*u+2*a)+u*(o*h+u+2*A)+l}else u=r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*A)+l;else u=-r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*A)+l;else u<=-m?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-A),r),d=-h*h+u*(u+2*A)+l):u<=m?(h=0,u=Math.min(Math.max(-r,-A),r),d=u*(u+2*A)+l):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-A),r),d=-h*h+u*(u+2*A)+l);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*A)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(OA).addScaledVector(uo,u),d}intersectSphere(e,t){if(e.radius<0)return null;qn.subVectors(e.center,this.origin);let n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,A=n+o;return A<0?null:a<0?this.at(A,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,A,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),c>=0?(r=(e.min.y-u.y)*c,o=(e.max.y-u.y)*c):(r=(e.max.y-u.y)*c,o=(e.min.y-u.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-u.z)*h,A=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,A=(e.min.z-u.z)*h),n>A||a>s)||((a>n||n!==n)&&(n=a),(A<s||s!==s)&&(s=A),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,A=a.x,l=a.y,c=a.z,h=e.x-o.x,u=e.y-o.y,d=e.z-o.z,m=t.x-o.x,y=t.y-o.y,p=t.z-o.z,f=n.x-o.x,T=n.y-o.y,P=n.z-o.z,M=Math.abs(A),w=Math.abs(l),b=Math.abs(c),E,v,_,R,U,B,V,O,X,$,K,de;if(M>=w&&M>=b?(_=A,B=h,X=m,de=f,A>=0?(E=l,v=c,R=u,U=d,V=y,O=p,$=T,K=P):(E=c,v=l,R=d,U=u,V=p,O=y,$=P,K=T)):w>=b?(_=l,B=u,X=y,de=T,l>=0?(E=c,v=A,R=d,U=h,V=p,O=m,$=P,K=f):(E=A,v=c,R=h,U=d,V=m,O=p,$=f,K=P)):(_=c,B=d,X=p,de=P,c>=0?(E=A,v=l,R=h,U=u,V=m,O=y,$=f,K=T):(E=l,v=A,R=u,U=h,V=y,O=m,$=T,K=f)),_===0)return null;let te=E/_,ae=v/_,ce=1/_,Ue=R-te*B,Ne=U-ae*B,ht=V-te*X,ie=O-ae*X,oe=$-te*de,I=K-ae*de,S=oe*ie-I*ht,Y=Ue*I-Ne*oe,le=ht*Ne-ie*Ue;if(s){if(S<0||Y<0||le<0)return null}else if((S<0||Y<0||le<0)&&(S>0||Y>0||le>0))return null;let Q=S+Y+le;if(Q===0)return null;let Ae=ce*(S*B+Y*X+le*de);return(Q>0?Ae<0:Ae>0)?null:this.at(Ae/Q,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ou=new Xe,Ui=new Ti,fo=new tn,au=new L,po=new L,mo=new L,go=new L,zA=new L,vo=new L,Au=new L,Mo=new L,It=class extends gt{constructor(e=new yt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let A=0,l=r.length;A<l;A++){let c=a[A],h=r[A];c!==0&&(zA.fromBufferAttribute(h,e),o?vo.addScaledVector(zA,c):vo.addScaledVector(zA.sub(t),c))}t.add(vo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(fo.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(fo,au)===null||Ui.origin.distanceToSquared(au)>(e.far-e.near)**2))&&(ou.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(ou),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,A=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let p=u[m],f=o[p.materialIndex],T=Math.max(p.start,d.start),P=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=T,w=P;M<w;M+=3){let b=a.getX(M),E=a.getX(M+1),v=a.getX(M+2);s=xo(this,f,e,n,l,c,h,b,E,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=m,f=y;p<f;p+=3){let T=a.getX(p),P=a.getX(p+1),M=a.getX(p+2);s=xo(this,o,e,n,l,c,h,T,P,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(A!==void 0)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let p=u[m],f=o[p.materialIndex],T=Math.max(p.start,d.start),P=Math.min(A.count,Math.min(p.start+p.count,d.start+d.count));for(let M=T,w=P;M<w;M+=3){let b=M,E=M+1,v=M+2;s=xo(this,f,e,n,l,c,h,b,E,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(A.count,d.start+d.count);for(let p=m,f=y;p<f;p+=3){let T=p,P=p+1,M=p+2;s=xo(this,o,e,n,l,c,h,T,P,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function ef(i,e,t,n,s,r,o,a){let A;if(e.side===Kt?A=n.intersectTriangle(o,r,s,!0,a):A=n.intersectTriangle(s,r,o,e.side===Gn,a),A===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Mo);return l<t.near||l>t.far?null:{distance:l,point:Mo.clone(),object:i}}function xo(i,e,t,n,s,r,o,a,A,l){i.getVertexPosition(a,po),i.getVertexPosition(A,mo),i.getVertexPosition(l,go);let c=ef(i,e,t,n,po,mo,go,Au);if(c){let h=new L;yi.getBarycoord(Au,po,mo,go,h),s&&(c.uv=yi.getInterpolatedAttribute(s,a,A,l,h,new Ee)),r&&(c.uv1=yi.getInterpolatedAttribute(r,a,A,l,h,new Ee)),o&&(c.normal=yi.getInterpolatedAttribute(o,a,A,l,h,new L),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:A,c:l,normal:new L,materialIndex:0};yi.getNormal(po,mo,go,u.normal),c.face=u,c.barycoord=h}return c}var er=new ut,lu=new ut,cu=new ut,tf=new ut,uu=new Xe,yo=new L,UA=new tn,hu=new Xe,BA=new Ti,mr=class extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=XA,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,yo),this.boundingBox.expandByPoint(yo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,yo),this.boundingSphere.expandByPoint(yo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),UA.copy(this.boundingSphere),UA.applyMatrix4(s),e.ray.intersectsSphere(UA)!==!1&&(hu.copy(s).invert(),BA.copy(e.ray).applyMatrix4(hu),!(this.boundingBox!==null&&BA.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,BA)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===XA?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ah?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;lu.fromBufferAttribute(s.attributes.skinIndex,e),cu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(er.copy(t),t.set(0,0,0,0)):(er.set(...t,1),t.set(0,0,0)),er.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=cu.getComponent(r);if(o!==0){let a=lu.getComponent(r);uu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(tf.copy(er).applyMatrix4(uu),o)}}return t.isVector4&&(t.w=er.w),t.applyMatrix4(this.bindMatrixInverse)}},_s=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Cs=class extends Nt{constructor(e=null,t=1,n=1,s,r,o,a,A,l=bt,c=bt,h,u){super(null,o,a,A,l,c,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},du=new Xe,nf=new Xe,gr=class i{constructor(e=[],t=[]){this.uuid=Tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:nf;du.multiplyMatrices(a,t[r]),du.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Cs(t,e,e,vn,gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(ze("Skeleton: No bone found with UUID:",r),o=new _s),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ni=class extends Lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},us=new Xe,fu=new Xe,To=[],pu=new dn,sf=new Xe,tr=new It,nr=new tn,sn=class extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),pu.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(pu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),nr.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),fu.multiplyMatrices(n,us),tr.matrixWorld=fu,tr.raycast(e,To);for(let o=0,a=To.length;o<a;o++){let A=To[o];A.instanceId=r,A.object=this,t.push(A)}To.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cs(new Float32Array(s*this.count),s,this.count,ya,gn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,A=s*e;return r[A]=a,r.set(n,A+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bi=new tn,rf=new Ee(.5,.5),wo=new L,Es=class{constructor(e=new _n,t=new _n,n=new _n,s=new _n,r=new _n,o=new _n){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],A=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],m=r[8],y=r[9],p=r[10],f=r[11],T=r[12],P=r[13],M=r[14],w=r[15];if(s[0].setComponents(l-o,d-c,f-m,w-T).normalize(),s[1].setComponents(l+o,d+c,f+m,w+T).normalize(),s[2].setComponents(l+a,d+h,f+y,w+P).normalize(),s[3].setComponents(l-a,d-h,f-y,w-P).normalize(),n)s[4].setComponents(A,u,p,M).normalize(),s[5].setComponents(l-A,d-u,f-p,w-M).normalize();else if(s[4].setComponents(l-A,d-u,f-p,w-M).normalize(),t===En)s[5].setComponents(l+A,d+u,f+p,w+M).normalize();else if(t===Ms)s[5].setComponents(A,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);let t=rf.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(wo.x=s.normal.x>0?e.max.x:e.min.x,wo.y=s.normal.y>0?e.max.y:e.min.y,wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ds=class extends nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xo=new L,Ho=new L,mu=new Xe,ir=new Ti,bo=new tn,FA=new L,gu=new L,Gi=class extends gt{constructor(e=new yt,t=new Ds){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Xo.fromBufferAttribute(t,s-1),Ho.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Xo.distanceTo(Ho);e.setAttribute("lineDistance",new At(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;mu.copy(s).invert(),ir.copy(e.ray).applyMatrix4(mu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),A=a*a,l=this.isLineSegments?2:1,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let y=d,p=m-1;y<p;y+=l){let f=c.getX(y),T=c.getX(y+1),P=So(this,e,ir,A,f,T,y);P&&t.push(P)}if(this.isLineLoop){let y=c.getX(m-1),p=c.getX(d),f=So(this,e,ir,A,y,p,m-1);f&&t.push(f)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=d,p=m-1;y<p;y+=l){let f=So(this,e,ir,A,y,y+1,y);f&&t.push(f)}if(this.isLineLoop){let y=So(this,e,ir,A,m-1,d,m-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function So(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Xo.fromBufferAttribute(a,s),Ho.fromBufferAttribute(a,r),t.distanceSqToSegment(Xo,Ho,FA,gu)>n)return;FA.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(FA);if(!(l<e.near||l>e.far))return{distance:l,point:gu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var vu=new L,Mu=new L,vr=class extends Gi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vu.fromBufferAttribute(t,s),Mu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vu.distanceTo(Mu);e.setAttribute("lineDistance",new At(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Mr=class extends Gi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Is=class extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xu=new Xe,JA=new Ti,Po=new tn,_o=new L,xr=class extends gt{constructor(e=new yt,t=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,e.ray.intersectsSphere(Po)===!1)return;xu.copy(s).invert(),JA.copy(e.ray).applyMatrix4(xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),A=a*a,l=n.index,h=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=u,y=d;m<y;m++){let p=l.getX(m);_o.fromBufferAttribute(h,p),yu(_o,p,A,s,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=u,y=d;m<y;m++)_o.fromBufferAttribute(h,m),yu(_o,m,A,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yu(i,e,t,n,s,r,o){let a=JA.distanceSqToPoint(i);if(a<t){let A=new L;JA.closestPointToPoint(i,A),A.applyMatrix4(n);let l=s.ray.origin.distanceTo(A);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:A,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var yr=class extends Nt{constructor(e=[],t=Ei,n,s,r,o,a,A,l,c){super(e,t,n,s,r,o,a,A,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wi=class extends Nt{constructor(e,t,n,s,r,o,a,A,l){super(e,t,n,s,r,o,a,A,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bi=class extends Nt{constructor(e,t,n=Rn,s,r,o,a=bt,A=bt,l,c=Fn,h=1){if(c!==Fn&&c!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,s,r,o,a,A,c,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ts(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Yo=class extends bi{constructor(e,t=Rn,n=Ei,s,r,o=bt,a=bt,A,l=Fn){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,n,s,r,o,a,A,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Tr=class extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},fn=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let A=[],l=[],c=[],h=[],u=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(A),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(h,2));function m(y,p,f,T,P,M,w,b,E,v,_){let R=M/E,U=w/v,B=M/2,V=w/2,O=b/2,X=E+1,$=v+1,K=0,de=0,te=new L;for(let ae=0;ae<$;ae++){let ce=ae*U-V;for(let Ue=0;Ue<X;Ue++){let Ne=Ue*R-B;te[y]=Ne*T,te[p]=ce*P,te[f]=O,l.push(te.x,te.y,te.z),te[y]=0,te[p]=0,te[f]=b>0?1:-1,c.push(te.x,te.y,te.z),h.push(Ue/E),h.push(1-ae/v),K+=1}}for(let ae=0;ae<v;ae++)for(let ce=0;ce<E;ce++){let Ue=u+ce+X*ae,Ne=u+ce+X*(ae+1),ht=u+(ce+1)+X*(ae+1),ie=u+(ce+1)+X*ae;A.push(Ue,Ne,ie),A.push(Ne,ht,ie),de+=6}a.addGroup(d,de,_),d+=de,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Si=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,A=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:A};let l=this;s=Math.floor(s),r=Math.floor(r);let c=[],h=[],u=[],d=[],m=0,y=[],p=n/2,f=0;T(),o===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(c),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(d,2));function T(){let M=new L,w=new L,b=0,E=(t-e)/n;for(let v=0;v<=r;v++){let _=[],R=v/r,U=R*(t-e)+e;for(let B=0;B<=s;B++){let V=B/s,O=V*A+a,X=Math.sin(O),$=Math.cos(O);w.x=U*X,w.y=-R*n+p,w.z=U*$,h.push(w.x,w.y,w.z),M.set(X,E,$).normalize(),u.push(M.x,M.y,M.z),d.push(V,1-R),_.push(m++)}y.push(_)}for(let v=0;v<s;v++)for(let _=0;_<r;_++){let R=y[_][v],U=y[_+1][v],B=y[_+1][v+1],V=y[_][v+1];(e>0||_!==0)&&(c.push(R,U,V),b+=3),(t>0||_!==r-1)&&(c.push(U,B,V),b+=3)}l.addGroup(f,b,0),f+=b}function P(M){let w=m,b=new Ee,E=new L,v=0,_=M===!0?e:t,R=M===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,p*R,0),u.push(0,R,0),d.push(.5,.5),m++;let U=m;for(let B=0;B<=s;B++){let O=B/s*A+a,X=Math.cos(O),$=Math.sin(O);E.x=_*$,E.y=p*R,E.z=_*X,h.push(E.x,E.y,E.z),u.push(0,R,0),b.x=X*.5+.5,b.y=$*.5*R+.5,d.push(b.x,b.y),m++}for(let B=0;B<s;B++){let V=w+B,O=U+B;M===!0?c.push(O,O+1,V):c.push(O+1,O,V),v+=3}l.addGroup(f,v,M===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ii=class i extends Si{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qo=class i extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),c(),this.setAttribute("position",new At(r,3)),this.setAttribute("normal",new At(r.slice(),3)),this.setAttribute("uv",new At(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let P=new L,M=new L,w=new L;for(let b=0;b<t.length;b+=3)d(t[b+0],P),d(t[b+1],M),d(t[b+2],w),A(P,M,w,T)}function A(T,P,M,w){let b=w+1,E=[];for(let v=0;v<=b;v++){E[v]=[];let _=T.clone().lerp(M,v/b),R=P.clone().lerp(M,v/b),U=b-v;for(let B=0;B<=U;B++)B===0&&v===b?E[v][B]=_:E[v][B]=_.clone().lerp(R,B/U)}for(let v=0;v<b;v++)for(let _=0;_<2*(b-v)-1;_++){let R=Math.floor(_/2);_%2===0?(u(E[v][R+1]),u(E[v+1][R]),u(E[v][R])):(u(E[v][R+1]),u(E[v+1][R+1]),u(E[v+1][R]))}}function l(T){let P=new L;for(let M=0;M<r.length;M+=3)P.x=r[M+0],P.y=r[M+1],P.z=r[M+2],P.normalize().multiplyScalar(T),r[M+0]=P.x,r[M+1]=P.y,r[M+2]=P.z}function c(){let T=new L;for(let P=0;P<r.length;P+=3){T.x=r[P+0],T.y=r[P+1],T.z=r[P+2];let M=p(T)/2/Math.PI+.5,w=f(T)/Math.PI+.5;o.push(M,1-w)}m(),h()}function h(){for(let T=0;T<o.length;T+=6){let P=o[T+0],M=o[T+2],w=o[T+4],b=Math.max(P,M,w),E=Math.min(P,M,w);b>.9&&E<.1&&(P<.2&&(o[T+0]+=1),M<.2&&(o[T+2]+=1),w<.2&&(o[T+4]+=1))}}function u(T){r.push(T.x,T.y,T.z)}function d(T,P){let M=T*3;P.x=e[M+0],P.y=e[M+1],P.z=e[M+2]}function m(){let T=new L,P=new L,M=new L,w=new L,b=new Ee,E=new Ee,v=new Ee;for(let _=0,R=0;_<r.length;_+=9,R+=6){T.set(r[_+0],r[_+1],r[_+2]),P.set(r[_+3],r[_+4],r[_+5]),M.set(r[_+6],r[_+7],r[_+8]),b.set(o[R+0],o[R+1]),E.set(o[R+2],o[R+3]),v.set(o[R+4],o[R+5]),w.copy(T).add(P).add(M).divideScalar(3);let U=p(w);y(b,R+0,T,U),y(E,R+2,P,U),y(v,R+4,M,U)}}function y(T,P,M,w){w<0&&T.x===1&&(o[P]=T.x-1),M.x===0&&M.z===0&&(o[P]=w/2/Math.PI+.5)}function p(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,A=r-1,l;for(;a<=A;)if(s=Math.floor(a+(A-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)A=s-1;else{A=s;break}if(s=A,n[s]===o)return s/(r-1);let c=n[s],u=n[s+1]-c,d=(o-c)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),A=t||(o.isVector2?new Ee:new L);return A.copy(a).sub(o).normalize(),A}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,A=new Xe;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,c=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(A.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ke(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(A.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Rs=class extends pn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,A=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=A}getPoint(e,t=new Ee){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,A=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=A-this.aX,d=l-this.aY;A=u*c-d*h+this.aX,l=u*h+d*c+this.aY}return n.set(A,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zo=class extends Rs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Rl(){let i=0,e=0,t=0,n=0;function s(r,o,a,A){i=r,e=a,t=-3*r+3*o-2*a-A,n=2*r-2*o+a+A}return{initCatmullRom:function(r,o,a,A,l){s(o,a,l*(a-r),l*(A-o))},initNonuniformCatmullRom:function(r,o,a,A,l,c,h){let u=(o-r)/l-(a-r)/(l+c)+(a-o)/c,d=(a-o)/c-(A-o)/(c+h)+(A-a)/h;u*=c,d*=c,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Tu=new L,wu=new L,jA=new Rl,kA=new Rl,WA=new Rl,Jo=class extends pn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),A=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:A===0&&a===r-1&&(a=r-2,A=1);let l,c;this.closed||a>0?l=s[(a-1)%r]:(wu.subVectors(s[0],s[1]).add(s[0]),l=wu);let h=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(Tu.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Tu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(c),d);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),jA.initNonuniformCatmullRom(l.x,h.x,u.x,c.x,m,y,p),kA.initNonuniformCatmullRom(l.y,h.y,u.y,c.y,m,y,p),WA.initNonuniformCatmullRom(l.z,h.z,u.z,c.z,m,y,p)}else this.curveType==="catmullrom"&&(jA.initCatmullRom(l.x,h.x,u.x,c.x,this.tension),kA.initCatmullRom(l.y,h.y,u.y,c.y,this.tension),WA.initCatmullRom(l.z,h.z,u.z,c.z,this.tension));return n.set(jA.calc(A),kA.calc(A),WA.calc(A)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,A=i*a;return(2*t-2*n+r+o)*A+(-3*t+3*n-2*r-o)*a+r*i+t}function of(i,e){let t=1-i;return t*t*e}function af(i,e){return 2*(1-i)*i*e}function Af(i,e){return i*i*e}function ar(i,e,t,n){return of(i,e)+af(i,t)+Af(i,n)}function lf(i,e){let t=1-i;return t*t*t*e}function cf(i,e){let t=1-i;return 3*t*t*i*e}function uf(i,e){return 3*(1-i)*i*i*e}function hf(i,e){return i*i*i*e}function Ar(i,e,t,n,s){return lf(i,e)+cf(i,t)+uf(i,n)+hf(i,s)}var wr=class extends pn{constructor(e=new Ee,t=new Ee,n=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(e,s.x,r.x,o.x,a.x),Ar(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ko=class extends pn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(e,s.x,r.x,o.x,a.x),Ar(e,s.y,r.y,o.y,a.y),Ar(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},br=class extends pn{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends pn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sr=class extends pn{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ar(e,s.x,r.x,o.x),ar(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends pn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ar(e,s.x,r.x,o.x),ar(e,s.y,r.y,o.y),ar(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pr=class extends pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,A=s[o===0?o:o-1],l=s[o],c=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(bu(a,A.x,l.x,c.x,h.x),bu(a,A.y,l.y,c.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}},Su=Object.freeze({__proto__:null,ArcCurve:Zo,CatmullRomCurve3:Jo,CubicBezierCurve:wr,CubicBezierCurve3:Ko,EllipseCurve:Rs,LineCurve:br,LineCurve3:qo,QuadraticBezierCurve:Sr,QuadraticBezierCurve3:$o,SplineCurve:Pr}),ea=class extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Su[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],A=a.getLength(),l=A===0?0:1-o/A;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,A=o.getPoints(a);for(let l=0;l<A.length;l++){let c=A[l];n&&n.equals(c)||(t.push(c),n=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Su[s.type]().fromJSON(s))}return this}},_r=class extends ea{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new br(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Sr(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new wr(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s),new Ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Pr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,A=this.currentPoint.y;return this.absarc(e+a,t+A,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,A){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,n,s,r,o,a,A),this}absellipse(e,t,n,s,r,o,a,A){let l=new Rs(e,t,n,s,r,o,a,A);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ls=class extends _r{constructor(e){super(e),this.uuid=Tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new _r().fromJSON(s))}return this}};function df(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=wh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,A,l;if(n&&(r=vf(i,e,r,t)),i.length>80*t){a=i[0],A=i[1];let c=a,h=A;for(let u=t;u<s;u+=t){let d=i[u],m=i[u+1];d<a&&(a=d),m<A&&(A=m),d>c&&(c=d),m>h&&(h=m)}l=Math.max(c-a,h-A),l=l!==0?32767/l:0}return Cr(r,o,t,a,A,l,0),o}function wh(i,e,t,n,s){let r;if(s===Ef(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Pu(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Pu(o/n|0,i[o],i[o+1],r);return r&&Ns(r,r.next)&&(Dr(r),r=r.next),r}function Vi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ns(t,t.next)||xt(t.prev,t,t.next)===0)){if(Dr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Cr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&wf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let A=i.prev,l=i.next;if(r?pf(i,n,s,r):ff(i)){e.push(A.i,i.i,l.i),Dr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=mf(Vi(i),e),Cr(i,e,t,n,s,r,2)):o===2&&gf(i,e,t,n,s,r):Cr(Vi(i),e,t,n,s,r,1);break}}}function ff(i){let e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,A=t.y,l=n.y,c=Math.min(s,r,o),h=Math.min(a,A,l),u=Math.max(s,r,o),d=Math.max(a,A,l),m=n.next;for(;m!==e;){if(m.x>=c&&m.x<=u&&m.y>=h&&m.y<=d&&sr(s,a,r,A,o,l,m.x,m.y)&&xt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function pf(i,e,t,n){let s=i.prev,r=i,o=i.next;if(xt(s,r,o)>=0)return!1;let a=s.x,A=r.x,l=o.x,c=s.y,h=r.y,u=o.y,d=Math.min(a,A,l),m=Math.min(c,h,u),y=Math.max(a,A,l),p=Math.max(c,h,u),f=KA(d,m,e,t,n),T=KA(y,p,e,t,n),P=i.prevZ,M=i.nextZ;for(;P&&P.z>=f&&M&&M.z<=T;){if(P.x>=d&&P.x<=y&&P.y>=m&&P.y<=p&&P!==s&&P!==o&&sr(a,c,A,h,l,u,P.x,P.y)&&xt(P.prev,P,P.next)>=0||(P=P.prevZ,M.x>=d&&M.x<=y&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&sr(a,c,A,h,l,u,M.x,M.y)&&xt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;P&&P.z>=f;){if(P.x>=d&&P.x<=y&&P.y>=m&&P.y<=p&&P!==s&&P!==o&&sr(a,c,A,h,l,u,P.x,P.y)&&xt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;M&&M.z<=T;){if(M.x>=d&&M.x<=y&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&sr(a,c,A,h,l,u,M.x,M.y)&&xt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function mf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ns(n,s)&&Sh(n,t,t.next,s)&&Er(n,s)&&Er(s,n)&&(e.push(n.i,t.i,s.i),Dr(t),Dr(t.next),t=i=s),t=t.next}while(t!==i);return Vi(t)}function gf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pf(o,a)){let A=Ph(o,a);o=Vi(o,o.next),A=Vi(A,A.next),Cr(o,e,t,n,s,r,0),Cr(A,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function vf(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,A=r<o-1?e[r+1]*n:i.length,l=wh(i,a,A,n,!1);l===l.next&&(l.steiner=!0),s.push(Sf(l))}s.sort(Mf);for(let r=0;r<s.length;r++)t=xf(s[r],t);return t}function Mf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function xf(i,e){let t=yf(i,e);if(!t)return e;let n=Ph(t,i);return Vi(n,n.next),Vi(t,t.next)}function yf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ns(i,t))return t;do{if(Ns(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,A=o.x,l=o.y,c=1/0;t=o;do{if(n>=t.x&&t.x>=A&&n!==t.x&&bh(s<l?n:r,s,A,l,s<l?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);Er(t,i)&&(h<c||h===c&&(t.x>o.x||t.x===o.x&&Tf(o,t)))&&(o=t,c=h)}t=t.next}while(t!==a);return o}function Tf(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function wf(i,e,t,n){let s=i;do s.z===0&&(s.z=KA(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bf(s)}function bf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let A=t;for(;a>0||A>0&&o;)a!==0&&(A===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,A--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function KA(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Sf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function bh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function sr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&bh(i,e,t,n,s,r,o,a)}function Pf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!_f(i,e)&&(Er(i,e)&&Er(e,i)&&Cf(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||Ns(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ns(i,e){return i.x===e.x&&i.y===e.y}function Sh(i,e,t,n){let s=Eo(xt(i,e,t)),r=Eo(xt(i,e,n)),o=Eo(xt(t,n,i)),a=Eo(xt(t,n,e));return!!(s!==r&&o!==a||s===0&&Co(i,t,e)||r===0&&Co(i,n,e)||o===0&&Co(t,i,n)||a===0&&Co(t,e,n))}function Co(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Eo(i){return i>0?1:i<0?-1:0}function _f(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Sh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Er(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function Cf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ph(i,e){let t=qA(i.i,i.x,i.y),n=qA(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pu(i,e,t,n){let s=qA(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qA(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ef(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var $A=class{static triangulate(e,t,n=2){return df(e,t,n)}},ms=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];_u(e),Cu(n,e);let o=e.length;t.forEach(_u);for(let A=0;A<t.length;A++)s.push(o),o+=t[A].length,Cu(n,t[A]);let a=$A.triangulate(n,s);for(let A=0;A<a.length;A+=3)r.push(a.slice(A,A+3));return r}};function _u(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Cu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Os=class i extends Qo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Pi=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),A=Math.floor(s),l=a+1,c=A+1,h=e/a,u=t/A,d=[],m=[],y=[],p=[];for(let f=0;f<c;f++){let T=f*u-o;for(let P=0;P<l;P++){let M=P*h-r;m.push(M,-T,0),y.push(0,0,1),p.push(P/a),p.push(1-f/A)}}for(let f=0;f<A;f++)for(let T=0;T<a;T++){let P=T+l*f,M=T+l*(f+1),w=T+1+l*(f+1),b=T+1+l*f;d.push(P,M,b),d.push(M,w,b)}this.setIndex(d),this.setAttribute("position",new At(m,3)),this.setAttribute("normal",new At(y,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ir=class i extends yt{constructor(e=new Ls([new Ee(0,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,A=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(a,A,c),a+=A,A=0;this.setIndex(n),this.setAttribute("position",new At(s,3)),this.setAttribute("normal",new At(r,3)),this.setAttribute("uv",new At(o,2));function l(c){let h=s.length/3,u=c.extractPoints(t),d=u.shape,m=u.holes;ms.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,f=m.length;p<f;p++){let T=m[p];ms.isClockWise(T)===!0&&(m[p]=T.reverse())}let y=ms.triangulateShape(d,m);for(let p=0,f=m.length;p<f;p++){let T=m[p];d=d.concat(T)}for(let p=0,f=d.length;p<f;p++){let T=d[p];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let p=0,f=y.length;p<f;p++){let T=y[p],P=T[0]+h,M=T[1]+h,w=T[2]+h;n.push(P,M,w),A+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Df(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Df(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function Ji(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Eu(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Eu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ht(i){let e={};for(let t=0;t<i.length;t++){let n=Ji(i[t]);for(let s in n)e[s]=n[s]}return e}function Eu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function If(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ll(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var _h={clone:Ji,merge:Ht},Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=If(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ta=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},si=class extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tA,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rn=class extends si{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var na=class extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ia=class extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function No(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Nf(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Du(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let A=0;A!==e;++A)s[o++]=i[a+A]}return s}function Of(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var kn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let A=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===A)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sa=class extends kn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:YA,endingEnd:YA}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],A=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case QA:r=e,a=2*t-n;break;case ZA:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(A===void 0)switch(this.getSettings_().endingEnd){case QA:o=e,A=2*n-t;break;case ZA:o=1,A=n+s[1]-s[0];break;default:o=e-1,A=t}let l=(n-t)*.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(A-n),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=e*a,l=A-a,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),y=m*m,p=y*m,f=-u*p+2*u*y-u*m,T=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*m+1,P=(-1-d)*p+(1.5+d)*y+.5*m,M=d*p-d*y;for(let w=0;w!==a;++w)r[w]=f*o[c+w]+T*o[l+w]+P*o[A+w]+M*o[h+w];return r}},ra=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=e*a,l=A-a,c=(n-t)/(s-t),h=1-c;for(let u=0;u!==a;++u)r[u]=o[l+u]*h+o[A+u]*c;return r}},oa=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},aa=class extends kn{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=e*a,l=A-a,c=this.inTangents,h=this.outTangents;if(!c||!h){let m=(n-t)/(s-t),y=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*y+o[A+p]*m;return r}let u=a*2,d=e-1;for(let m=0;m!==a;++m){let y=o[l+m],p=o[A+m],f=d*u+m*2,T=h[f],P=h[f+1],M=e*u+m*2,w=c[M],b=c[M+1],E=Uf(n,t,T,w,s);r[m]=Ch(E,y,P,b,p)}return r}};function Ch(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function zf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Uf(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Ch(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let A=zf(r,e,t,n,s);if(Math.abs(A)<1e-10)break;r=Math.max(0,Math.min(1,r-a/A))}return r}var on=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xi(t,this.TimeBufferType),this.values=xi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xi(e.times,Array),values:xi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),No(e.settings)&&(n.settings={inTangents:xi(e.settings.inTangents,Array),outTangents:xi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new aa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ji:t=this.InterpolantFactoryMethodDiscrete;break;case ki:t=this.InterpolantFactoryMethodLinear;break;case Ro:t=this.InterpolantFactoryMethodSmooth;break;case HA:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ji;case this.InterpolantFactoryMethodLinear:return ki;case this.InterpolantFactoryMethodSmooth:return Ro;case this.InterpolantFactoryMethodBezier:return HA}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;No(this.settings)&&(Iu(this.settings.inTangents,e),Iu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let A=n[a];if(typeof A=="number"&&isNaN(A)){We("KeyframeTrack: Time is not a valid number.",this,a,A),e=!1;break}if(o!==null&&o>A){We("KeyframeTrack: Out of order keys.",this,a,A,o),e=!1;break}o=A}if(s!==void 0&&yd(s))for(let a=0,A=s.length;a!==A;++a){let l=s[a];if(isNaN(l)){We("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ro,r=e.length-1,o=1;for(let a=1;a<r;++a){let A=!1,l=e[a],c=e[a+1];if(l!==c&&(a!==1||l!==e[0]))if(s)A=!0;else{let h=a*n,u=h-n,d=h+n;for(let m=0;m!==n;++m){let y=t[h+m];if(y!==t[u+m]||y!==t[d+m]){A=!0;break}}}if(A){if(a!==o){e[o]=e[a];let h=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,A=o*n,l=0;l!==n;++l)t[A+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,No(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Iu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=ki;var ri=class extends on{constructor(e,t,n){super(e,t,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=ji;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Rr=class extends on{constructor(e,t,n,s){super(e,t,n,s)}};Rr.prototype.ValueTypeName="color";var oi=class extends on{constructor(e,t,n,s){super(e,t,n,s)}};oi.prototype.ValueTypeName="number";var Aa=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=(n-t)/(s-t),l=e*a;for(let c=l+a;l!==c;l+=4)hn.slerpFlat(r,0,o,l-a,o,l,A);return r}},ai=class extends on{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Aa(this.times,this.values,this.getValueSize(),e)}};ai.prototype.ValueTypeName="quaternion";ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends on{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=ji;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends on{constructor(e,t,n,s){super(e,t,n,s)}};_i.prototype.ValueTypeName="vector";var Lr=class{constructor(e="",t=-1,n=[],s=Ah){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Tn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ff(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(on.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let A=[],l=[];A.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let c=Nf(A);A=Du(A,1,c),l=Du(l,1,c),!s&&A[0]===0&&(A.push(r),l.push(l[0])),o.push(new oi(".morphTargetInfluences["+t[a].name+"]",A,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,A=e.length;a<A;a++){let l=e[a],c=l.name.match(r);if(c&&c.length>1){let h=c[1],u=s[h];u||(s[h]=u=[]),u.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Bf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oi;case"vector":case"vector2":case"vector3":case"vector4":return _i;case"color":return Rr;case"quaternion":return ai;case"bool":case"boolean":return ri;case"string":return Ai}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ff(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Bf(i.type);if(i.times===void 0){let n=[],s=[];Of(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),No(i.settings)&&(t.settings={inTangents:xi(i.settings.inTangents,Float32Array),outTangents:xi(i.settings.outTangents,Float32Array)}),t}var Un={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ru(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ru(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ru(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var la=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,A,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),A?A(c):c},this.setURLModifier=function(c){return A=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Eh=new la,Wn=class{constructor(e){this.manager=e!==void 0?e:Eh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Wn.DEFAULT_MATERIAL_NAME="__DEFAULT";var $n={},el=class extends Error{constructor(e,t){super(e),this.response=t}},zs=class extends Wn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Un.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:s});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,A=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let c=$n[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=u?parseInt(u):0,m=d!==0,y=0,p=new ReadableStream({start(f){T();function T(){h.read().then(({done:P,value:M})=>{if(P)f.close();else{y+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:d});for(let b=0,E=c.length;b<E;b++){let v=c[b];v.onProgress&&v.onProgress(w)}f.enqueue(M),T()}},P=>{f.error(P)})}}});return new Response(p)}else throw new el(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(A){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Un.add(`file:${e}`,l);let c=$n[e];delete $n[e];for(let h=0,u=c.length;h<u;h++){let d=c[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let c=$n[e];if(c===void 0)throw this.manager.itemError(e),l;delete $n[e];for(let h=0,u=c.length;h<u;h++){let d=c[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hs=new WeakMap,ca=class extends Wn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Un.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=hs.get(o);h===void 0&&(h=[],hs.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=xs("img");function A(){c(),t&&t(this);let h=hs.get(this)||[];for(let u=0;u<h.length;u++){let d=h[u];d.onLoad&&d.onLoad(this)}hs.delete(this),r.manager.itemEnd(e)}function l(h){c(),s&&s(h),Un.remove(`image:${e}`);let u=hs.get(this)||[];for(let d=0;d<u.length;d++){let m=u[d];m.onError&&m.onError(h)}hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){a.removeEventListener("load",A,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",A,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Un.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Nr=class extends Wn{constructor(e){super(e)}load(e,t,n,s){let r=new Nt,o=new ca(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Xi=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Or=class extends Xi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},GA=new Xe,Lu=new L,Nu=new L,Us=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lu),Nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){GA.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(GA,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,A=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ms||e.reversedDepth?t.set(.5*o,0,0,.5*o+A,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+A,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(GA)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Do=new L,Io=new hn,zn=new L,zr=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Do,Io,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Io,zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Do,Io,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Io,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new L,Ou=new Ee,zu=new Ee,Dt=class extends zr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Ou,zu),t.subVectors(zu,Ou)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let A=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/A,t-=o.offsetY*n/l,s*=o.width/A,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tl=class extends Us{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Wi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ur=class extends Xi{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},nl=class extends Us{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0}},Br=class extends Xi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ci=class extends zr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,A=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=c*this.view.offsetY,A=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,A,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},il=class extends Us{constructor(){super(new Ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hi=class extends Xi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new il}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var li=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var VA=new WeakMap,Fr=class extends Wn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Un.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{VA.has(o)===!0?(s&&s(VA.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let A=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Un.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),VA.set(A,l),Un.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Un.add(`image-bitmap:${e}`,A),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ds=-90,fs=1,ua=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(ds,fs,e,t);s.layers=this.layers,this.add(s);let r=new Dt(ds,fs,e,t);r.layers=this.layers,this.add(r);let o=new Dt(ds,fs,e,t);o.layers=this.layers,this.add(o);let a=new Dt(ds,fs,e,t);a.layers=this.layers,this.add(a);let A=new Dt(ds,fs,e,t);A.layers=this.layers,this.add(A);let l=new Dt(ds,fs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,A]=t;for(let l of t)this.remove(l);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),A.up.set(0,1,0),A.lookAt(0,0,-1);else if(e===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),A.up.set(0,-1,0),A.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,A,l,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,A),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ha=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Nl="\\[\\]\\.:\\/",jf=new RegExp("["+Nl+"]","g"),Ol="[^"+Nl+"]",kf="[^"+Nl.replace("\\.","")+"]",Wf=/((?:WC+[\/:])*)/.source.replace("WC",Ol),Gf=/(WCOD+)?/.source.replace("WCOD",kf),Vf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ol),Xf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ol),Hf=new RegExp("^"+Wf+Gf+Vf+Xf+"$"),Yf=["material","materials","bones","map"],sl=class{constructor(e,t,n){let s=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jf,"")}static parseTrackName(e){let t=Hf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let A=n(a.children);if(A)return A}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;We("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let A=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}A=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(A=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(A=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[A],this.setValue=this.SetterByBindingTypeAndVersioning[A][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=sl;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $0=new Float32Array(1);var Uu=new Xe,jr=class{constructor(e,t,n=0,s=1/0){this.ray=new Ti(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uu),this}intersectObject(e,t=!0,n=[]){return rl(e,this,n,t),n.sort(Bu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)rl(e[s],this,n,t);return n.sort(Bu),n}};function Bu(i,e){return i.distance-e.distance}function rl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)rl(r[o],e,t,!0)}}var kl=class kl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};kl.prototype.isMatrix2=!0;var ol=kl;function zl(i,e,t,n){let s=Qf(n);switch(t){case Sl:return i*e;case ya:return i*e/s.components*s.byteLength;case Ta:return i*e/s.components*s.byteLength;case Ii:return i*e*2/s.components*s.byteLength;case wa:return i*e*2/s.components*s.byteLength;case Pl:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case ba:return i*e*4/s.components*s.byteLength;case Vr:case Xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hr:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:case Ca:return Math.max(i,16)*Math.max(e,8)/4;case Sa:case _a:return Math.max(i,8)*Math.max(e,8)/2;case Ea:case Da:case Ra:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ia:case Qr:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Za:case Ja:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qa:case $a:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zr:case eA:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qf(i){switch(i){case an:case yl:return{byteLength:1,components:1};case ks:case Tl:case Ln:return{byteLength:2,components:1};case Ma:case xa:return{byteLength:2,components:4};case Rn:case va:case gn:return{byteLength:4,components:1};case wl:case bl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Kh(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jf(i){let e=new WeakMap;function t(a,A){let l=a.array,c=a.usage,h=l.byteLength,u=i.createBuffer();i.bindBuffer(A,u),i.bufferData(A,l,c),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,A,l){let c=A.array,h=A.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,c);else{h.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<h.length;d++){let m=h[u],y=h[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,h[u]=y)}h.length=u+1;for(let d=0,m=h.length;d<m;d++){let y=h[d];i.bufferSubData(l,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}A.clearUpdateRanges()}A.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let A=e.get(a);A&&(i.deleteBuffer(A.buffer),e.delete(a))}function o(a,A){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,A));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,A),l.version=a.version}}return{get:s,remove:r,update:o}}var Kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
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
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,up=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xp=`#define PI 3.141592653589793
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
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,Gp=`#ifdef USE_ENVMAP
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
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,Zp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Jp=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,am=`#if defined( USE_POINTS_UV )
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
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,zm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`#include <common>
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
}`,sg=`#if DEPTH_PACKING == 3200
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
}`,rg=`#define DISTANCE
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
}`,og=`#define DISTANCE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,ug=`#include <common>
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
}`,hg=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,vg=`#define NORMAL
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
}`,Mg=`#define PHONG
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
}`,xg=`#define PHONG
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
}`,yg=`#define STANDARD
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
}`,Tg=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,wg=`#define TOON
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
}`,bg=`#define TOON
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
}`,Sg=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,Cg=`uniform vec3 color;
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
}`,Eg=`uniform float rotation;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Kf,alphahash_pars_fragment:qf,alphamap_fragment:$f,alphamap_pars_fragment:ep,alphatest_fragment:tp,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:rp,batching_vertex:op,begin_vertex:ap,beginnormal_vertex:Ap,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:up,clipping_planes_fragment:hp,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:vp,color_vertex:Mp,common:xp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:Tp,displacementmap_pars_vertex:wp,displacementmap_vertex:bp,emissivemap_fragment:Sp,emissivemap_pars_fragment:Pp,colorspace_fragment:_p,colorspace_pars_fragment:Cp,envmap_fragment:Ep,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Ip,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:Gp,envmap_vertex:Lp,fog_vertex:Np,fog_pars_vertex:Op,fog_fragment:zp,fog_pars_fragment:Up,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:Fp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:kp,lights_pars_begin:Wp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Xp,lights_phong_fragment:Hp,lights_phong_pars_fragment:Yp,lights_physical_fragment:Qp,lights_physical_pars_fragment:Zp,lights_fragment_begin:Jp,lights_fragment_maps:Kp,lights_fragment_end:qp,lightprobes_pars_fragment:$p,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:sm,map_pars_fragment:rm,map_particle_fragment:om,map_particle_pars_fragment:am,metalnessmap_fragment:Am,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:um,morphnormal_vertex:hm,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:vm,normal_vertex:Mm,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:wm,iridescence_pars_fragment:bm,opaque_fragment:Sm,packing:Pm,premultiplied_alpha_fragment:_m,project_vertex:Cm,dithering_fragment:Em,dithering_pars_fragment:Dm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Nm,shadowmap_vertex:Om,shadowmask_pars_fragment:zm,skinbase_vertex:Um,skinning_pars_vertex:Bm,skinning_vertex:Fm,skinnormal_vertex:jm,specularmap_fragment:km,specularmap_pars_fragment:Wm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Vm,transmission_fragment:Xm,transmission_pars_fragment:Hm,uv_pars_fragment:Ym,uv_pars_vertex:Qm,uv_vertex:Zm,worldpos_vertex:Jm,background_vert:Km,background_frag:qm,backgroundCube_vert:$m,backgroundCube_frag:eg,cube_vert:tg,cube_frag:ng,depth_vert:ig,depth_frag:sg,distance_vert:rg,distance_frag:og,equirect_vert:ag,equirect_frag:Ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:ug,meshbasic_frag:hg,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:vg,meshphong_vert:Mg,meshphong_frag:xg,meshphysical_vert:yg,meshphysical_frag:Tg,meshtoon_vert:wg,meshtoon_frag:bg,points_vert:Sg,points_frag:Pg,shadow_vert:_g,shadow_frag:Cg,sprite_vert:Eg,sprite_frag:Dg},be={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Hn={basic:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Ht([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Ht([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new je(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Ht([be.points,be.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Ht([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Ht([be.common,be.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Ht([be.sprite,be.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Ht([be.common,be.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Ht([be.lights,be.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Hn.physical={uniforms:Ht([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var sA={r:0,b:0,g:0},Ig=new Xe,qh=new Ve;qh.set(-1,0,0,0,1,0,0,0,1);function Rg(i,e,t,n,s,r){let o=new je(0),a=s===!0?0:1,A,l,c=null,h=0,u=null;function d(T){let P=T.isScene===!0?T.background:null;if(P&&P.isTexture){let M=T.backgroundBlurriness>0;P=e.get(P,M)}return P}function m(T){let P=!1,M=d(T);M===null?p(o,a):M&&M.isColor&&(p(M,1),P=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(T,P){let M=d(P);M&&(M.isCubeTexture||M.mapping===Gr)?(l===void 0&&(l=new It(new fn(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Ji(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qh),l.material.toneMapped=Je.getTransfer(M.colorSpace)!==at,(c!==M||h!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,c=M,h=M.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(A===void 0&&(A=new It(new Pi(2,2),new mn({name:"BackgroundMaterial",uniforms:Ji(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),A.geometry.deleteAttribute("normal"),Object.defineProperty(A.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(A)),A.material.uniforms.t2D.value=M,A.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,A.material.toneMapped=Je.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),A.material.uniforms.uvTransform.value.copy(M.matrix),(c!==M||h!==M.version||u!==i.toneMapping)&&(A.material.needsUpdate=!0,c=M,h=M.version,u=i.toneMapping),A.layers.enableAll(),T.unshift(A,A.geometry,A.material,0,0,null))}function p(T,P){T.getRGB(sA,Ll(i)),t.buffers.color.setClear(sA.r,sA.g,sA.b,P,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),A!==void 0&&(A.geometry.dispose(),A.material.dispose(),A=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,P=1){o.set(T),a=P,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,p(o,a)},render:m,addToRenderList:y,dispose:f}}function Lg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(U,B,V,O,X){let $=!1,K=h(U,O,V,B);r!==K&&(r=K,l(r.object)),$=d(U,O,V,X),$&&m(U,O,V,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(U,B,V,O),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function A(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function c(U){return i.deleteVertexArray(U)}function h(U,B,V,O){let X=O.wireframe===!0,$=n[B.id];$===void 0&&($={},n[B.id]=$);let K=U.isInstancedMesh===!0?U.id:0,de=$[K];de===void 0&&(de={},$[K]=de);let te=de[V.id];te===void 0&&(te={},de[V.id]=te);let ae=te[X];return ae===void 0&&(ae=u(A()),te[X]=ae),ae}function u(U){let B=[],V=[],O=[];for(let X=0;X<t;X++)B[X]=0,V[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:O,object:U,attributes:{},index:null}}function d(U,B,V,O){let X=r.attributes,$=B.attributes,K=0,de=V.getAttributes();for(let te in de)if(de[te].location>=0){let ce=X[te],Ue=$[te];if(Ue===void 0&&(te==="instanceMatrix"&&U.instanceMatrix&&(Ue=U.instanceMatrix),te==="instanceColor"&&U.instanceColor&&(Ue=U.instanceColor)),ce===void 0||ce.attribute!==Ue||Ue&&ce.data!==Ue.data)return!0;K++}return r.attributesNum!==K||r.index!==O}function m(U,B,V,O){let X={},$=B.attributes,K=0,de=V.getAttributes();for(let te in de)if(de[te].location>=0){let ce=$[te];ce===void 0&&(te==="instanceMatrix"&&U.instanceMatrix&&(ce=U.instanceMatrix),te==="instanceColor"&&U.instanceColor&&(ce=U.instanceColor));let Ue={};Ue.attribute=ce,ce&&ce.data&&(Ue.data=ce.data),X[te]=Ue,K++}r.attributes=X,r.attributesNum=K,r.index=O}function y(){let U=r.newAttributes;for(let B=0,V=U.length;B<V;B++)U[B]=0}function p(U){f(U,0)}function f(U,B){let V=r.newAttributes,O=r.enabledAttributes,X=r.attributeDivisors;V[U]=1,O[U]===0&&(i.enableVertexAttribArray(U),O[U]=1),X[U]!==B&&(i.vertexAttribDivisor(U,B),X[U]=B)}function T(){let U=r.newAttributes,B=r.enabledAttributes;for(let V=0,O=B.length;V<O;V++)B[V]!==U[V]&&(i.disableVertexAttribArray(V),B[V]=0)}function P(U,B,V,O,X,$,K){K===!0?i.vertexAttribIPointer(U,B,V,X,$):i.vertexAttribPointer(U,B,V,O,X,$)}function M(U,B,V,O){y();let X=O.attributes,$=V.getAttributes(),K=B.defaultAttributeValues;for(let de in $){let te=$[de];if(te.location>=0){let ae=X[de];if(ae===void 0&&(de==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),de==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),ae!==void 0){let ce=ae.normalized,Ue=ae.itemSize,Ne=e.get(ae);if(Ne===void 0)continue;let ht=Ne.buffer,ie=Ne.type,oe=Ne.bytesPerElement,I=ie===i.INT||ie===i.UNSIGNED_INT||ae.gpuType===va;if(ae.isInterleavedBufferAttribute){let S=ae.data,Y=S.stride,le=ae.offset;if(S.isInstancedInterleavedBuffer){for(let Q=0;Q<te.locationSize;Q++)f(te.location+Q,S.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=S.meshPerAttribute*S.count)}else for(let Q=0;Q<te.locationSize;Q++)p(te.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Q=0;Q<te.locationSize;Q++)P(te.location+Q,Ue/te.locationSize,ie,ce,Y*oe,(le+Ue/te.locationSize*Q)*oe,I)}else{if(ae.isInstancedBufferAttribute){for(let S=0;S<te.locationSize;S++)f(te.location+S,ae.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let S=0;S<te.locationSize;S++)p(te.location+S);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let S=0;S<te.locationSize;S++)P(te.location+S,Ue/te.locationSize,ie,ce,Ue*oe,Ue/te.locationSize*S*oe,I)}}else if(K!==void 0){let ce=K[de];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(te.location,ce);break;case 3:i.vertexAttrib3fv(te.location,ce);break;case 4:i.vertexAttrib4fv(te.location,ce);break;default:i.vertexAttrib1fv(te.location,ce)}}}}T()}function w(){_();for(let U in n){let B=n[U];for(let V in B){let O=B[V];for(let X in O){let $=O[X];for(let K in $)c($[K].object),delete $[K];delete O[X]}}delete n[U]}}function b(U){if(n[U.id]===void 0)return;let B=n[U.id];for(let V in B){let O=B[V];for(let X in O){let $=O[X];for(let K in $)c($[K].object),delete $[K];delete O[X]}}delete n[U.id]}function E(U){for(let B in n){let V=n[B];for(let O in V){let X=V[O];if(X[U.id]===void 0)continue;let $=X[U.id];for(let K in $)c($[K].object),delete $[K];delete X[U.id]}}}function v(U){for(let B in n){let V=n[B],O=U.isInstancedMesh===!0?U.id:0,X=V[O];if(X!==void 0){for(let $ in X){let K=X[$];for(let de in K)c(K[de].object),delete K[de];delete X[$]}delete V[O],Object.keys(V).length===0&&delete n[B]}}}function _(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:_,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:p,disableUnusedAttributes:T}}function Ng(i,e,t){let n;function s(A){n=A}function r(A,l){i.drawArrays(n,A,l),t.update(l,n,1)}function o(A,l,c){c!==0&&(i.drawArraysInstanced(n,A,l,c),t.update(l,n,c))}function a(A,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,A,0,l,0,c);let u=0;for(let d=0;d<c;d++)u+=l[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Og(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==vn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let v=E===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==an&&E!==gn&&!v&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function A(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",c=A(l);c!==l&&(ze("WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:A,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:M,maxSamples:w,samples:b}}function zg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new _n,a=new Ve,A={value:null,needsUpdate:!1};this.uniform=A,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||s;return s=u,n=h.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let m=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||m===null||m.length===0||r&&!p)r?c(null):l();else{let T=r?0:n,P=T*4,M=f.clippingState||null;A.value=M,M=c(m,u,P,d);for(let w=0;w!==P;++w)M[w]=t[w];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function l(){A.value!==t&&(A.value=t,A.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,u,d,m){let y=h!==null?h.length:0,p=null;if(y!==0){if(p=A.value,m!==!0||p===null){let f=d+y*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<f)&&(p=new Float32Array(f));for(let P=0,M=d;P!==y;++P,M+=4)o.copy(h[P]).applyMatrix4(T,a),o.normal.toArray(p,M),p[M+3]=o.constant}A.value=p,A.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var Xs=4,Ug=6,Bg=20,Fg=256,Kr=new Ci,Dh=new je,Wl=null,Gl=0,Vl=0,Xl=!1,jg=new L,Ki=new L,oA=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=jg}=r;Wl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let A=this._allocateTargets();return A.depthBuffer=!0,this._sceneToCubeUV(e,n,s,A,a),t>0&&this._blur(A,0,0,t),this._applyPMREM(A),this._cleanup(A),A}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,Gl,Vl),this._renderer.xr.enabled=Xl,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Ln,format:vn,colorSpace:Jt,depthBuffer:!1},s=Ih(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kg(r)),this._blurMaterial=Gg(r,e,t),this._ggxMaterial=Wg(r,e,t)}return s}_compileMaterial(e){let t=new It(new yt,e);this._renderer.compile(t,Kr)}_sceneToCubeUV(e,t,n,s,r){let A=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Dh),h.toneMapping=Dn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new fn,new Xt({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,f=!1,T=e.background;T?T.isColor&&(p.color.copy(T),e.background=null,f=!0):(p.color.copy(Dh),f=!0);for(let P=0;P<6;P++){let M=P%3;M===0?(A.up.set(0,l[P],0),A.position.set(r.x,r.y,r.z),A.lookAt(r.x+c[P],r.y,r.z)):M===1?(A.up.set(0,0,l[P]),A.position.set(r.x,r.y,r.z),A.lookAt(r.x,r.y+c[P],r.z)):(A.up.set(0,l[P],0),A.position.set(r.x,r.y,r.z),A.lookAt(r.x,r.y,r.z+c[P]));let w=this._cubeSize;Vs(s,M*w,P>2?w:0,w,w),h.setRenderTarget(s),f&&h.render(y,A),h.render(e,A)}h.toneMapping=d,h.autoClear=u,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ei||e.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let A=this._cubeSize;Vs(t,0,0,3*A,2*A),n.setRenderTarget(t),n.render(o,Kr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let A=o.uniforms,l=n/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c),u=l*1.25,d=h*u,{_lodMax:m}=this,y=this._sizeLods[n],p=3*y*(n>m-Xs?n-m+Xs:0),f=4*(this._cubeSize-y);A.envMap.value=e.texture,A.roughness.value=d,A.mipInt.value=m-t,Vs(r,p,f,3*y,2*y),s.setRenderTarget(r),s.render(a,Kr),A.envMap.value=r.texture,A.roughness.value=0,A.mipInt.value=m-n,Vs(e,p,f,3*y,2*y),s.setRenderTarget(e),s.render(a,Kr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,A=this._lodMeshes[s];A.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let c=this._sizeLods[s],h=3*c*(s>this._lodMax-Xs?s-this._lodMax+Xs:0),u=4*(this._cubeSize-c);Vs(t,h,u,3*c,2*c),o.setRenderTarget(t),o.render(A,Kr)}};function kg(i){let e=[],t=[],n=i,s=i-Xs+1+Ug;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),A=-a,l=1+a,c=[A,A,l,A,l,l,A,A,l,l,A,l],h=6,u=6,d=3,m=new Float32Array(d*u*h),y=new Float32Array(d*u*h);for(let f=0;f<h;f++){let T=f%3*2/3-1,P=f>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];m.set(M,d*u*f);for(let w=0;w<u;w++){let b=c[w*2]*2-1,E=c[w*2+1]*2-1;f===0?Ki.set(1,E,b):f===1?Ki.set(-b,1,-E):f===2?Ki.set(-b,E,1):f===3?Ki.set(-1,E,-b):f===4?Ki.set(-b,-1,E):Ki.set(b,E,-1),Ki.toArray(y,(f*u+w)*d)}}let p=new yt;p.setAttribute("position",new Lt(m,d)),p.setAttribute("outputDirection",new Lt(y,d)),t.push(new It(p,null)),n>Xs&&n--}return{lodMeshes:t,sizeLods:e}}function Ih(i,e,t){let n=new en(i,e,t);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Wg(i,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lA(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Gg(i,e,t){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:Bg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lA(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Rh(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lA(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Lh(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lA(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function lA(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var aA=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fn(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Vn});r.uniforms.tEquirect.value=t;let o=new It(s,r),a=t.minFilter;return t.minFilter===In&&(t.minFilter=St),new ua(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Vg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===pa||d===ma)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let y=new aA(m.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",l),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,m=d===pa||d===ma,y=d===Ei||d===Qi;if(m||y){let p=t.get(u),f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new oA(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let T=u.image;return m&&T&&T.height>0||y&&T&&A(T)?(n===null&&(n=new oA(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",c),p.texture):null}}}return u}function a(u,d){return d===pa?u.mapping=Ei:d===ma&&(u.mapping=Qi),u}function A(u){let d=0,m=6;for(let y=0;y<m;y++)u[y]!==void 0&&d++;return d===m}function l(u){let d=u.target;d.removeEventListener("dispose",l);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Xg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Fi("WebGLRenderer: "+n+" extension not supported."),s}}}function Hg(i,e,t,n){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function A(h){let u=h.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function l(h){let u=[],d=h.index,m=h.attributes.position,y=0;if(m===void 0)return;if(d!==null){let T=d.array;y=d.version;for(let P=0,M=T.length;P<M;P+=3){let w=T[P+0],b=T[P+1],E=T[P+2];u.push(w,b,b,E,E,w)}}else{let T=m.array;y=m.version;for(let P=0,M=T.length/3-1;P<M;P+=3){let w=P+0,b=P+1,E=P+2;u.push(w,b,b,E,E,w)}}let p=new(m.count>=65535?pr:fr)(u,1);p.version=y;let f=r.get(h);f&&e.remove(f),r.set(h,p)}function c(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:A,getWireframeAttribute:c}}function Yg(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function A(h,u){i.drawElements(n,u,r,h*o),t.update(u,n,1)}function l(h,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,h*o,d),t.update(u,n,d))}function c(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,d);let y=0;for(let p=0;p<d;p++)y+=u[p];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=A,this.renderInstances=l,this.renderMultiDraw=c}function Qg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zg(i,e,t){let n=new WeakMap,s=new ut;function r(o,a,A){let l=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let _=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",_)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],P=0;d===!0&&(P=1),m===!0&&(P=2),y===!0&&(P=3);let M=a.attributes.position.count*P,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let b=new Float32Array(M*w*4*h),E=new ur(b,M,w,h);E.type=gn,E.needsUpdate=!0;let v=P*4;for(let R=0;R<h;R++){let U=p[R],B=f[R],V=T[R],O=M*w*4*R;for(let X=0;X<U.count;X++){let $=X*v;d===!0&&(s.fromBufferAttribute(U,X),b[O+$+0]=s.x,b[O+$+1]=s.y,b[O+$+2]=s.z,b[O+$+3]=0),m===!0&&(s.fromBufferAttribute(B,X),b[O+$+4]=s.x,b[O+$+5]=s.y,b[O+$+6]=s.z,b[O+$+7]=0),y===!0&&(s.fromBufferAttribute(V,X),b[O+$+8]=s.x,b[O+$+9]=s.y,b[O+$+10]=s.z,b[O+$+11]=V.itemSize===4?s.w:1)}}u={count:h,texture:E,size:new Ee(M,w)},n.set(a,u),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)A.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let m=a.morphTargetsRelative?1:1-d;A.getUniforms().setValue(i,"morphTargetBaseInfluence",m),A.getUniforms().setValue(i,"morphTargetInfluences",l)}A.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),A.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Jg(i,e,t,n,s){let r=new WeakMap;function o(l){let c=s.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",A)===!1&&l.addEventListener("dispose",A),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function A(l){let c=l.target;c.removeEventListener("dispose",A),n.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}var Kg={[fl]:"LINEAR_TONE_MAPPING",[pl]:"REINHARD_TONE_MAPPING",[ml]:"CINEON_TONE_MAPPING",[Wr]:"ACES_FILMIC_TONE_MAPPING",[vl]:"AGX_TONE_MAPPING",[Ml]:"NEUTRAL_TONE_MAPPING",[gl]:"CUSTOM_TONE_MAPPING"};function qg(i,e,t,n,s,r){let o=new en(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,A=null,l=new yt;l.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new At([0,2,0,0,2,0],2));let c=new ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new It(l,c),u=new Ci(-1,1,1,-1,0,1),d=null,m=null,y=!1,p,f=null,T=[],P=!1;this.setSize=function(M,w){o.setSize(M,w),a!==null&&a.setSize(M,w),A!==null&&A.setSize(M,w);for(let b=0;b<T.length;b++){let E=T[b];E.setSize&&E.setSize(M,w)}},this.setEffects=function(M){T=M,P=T.length>0&&T[0].isRenderPass===!0;let w=o.width,b=o.height;T.length>0&&a===null&&(a=new en(w,b,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),A=new en(w,b,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<T.length;E++){let v=T[E];v.setSize&&v.setSize(w,b)}},this.begin=function(M,w){if(y||M.toneMapping===Dn&&T.length===0)return!1;if(f=w,w!==null){let b=w.width,E=w.height;(o.width!==b||o.height!==E)&&this.setSize(b,E)}return P===!1&&M.setRenderTarget(o),p=M.toneMapping,M.toneMapping=Dn,!0},this.hasRenderPass=function(){return P},this.end=function(M,w){M.toneMapping=p,y=!0;let b=o,E=a;for(let v=0;v<T.length;v++){let _=T[v];_.enabled!==!1&&(_.render(M,E,b,w),_.needsSwap!==!1&&(b=E,E=E===a?A:a))}if(d!==M.outputColorSpace||m!==M.toneMapping){d=M.outputColorSpace,m=M.toneMapping,c.defines={},Je.getTransfer(d)===at&&(c.defines.SRGB_TRANSFER="");let v=Kg[m];v&&(c.defines[v]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(f),M.render(h,u),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),A!==null&&A.dispose(),l.dispose(),c.dispose()}}var $h=new Nt,Ql=new bi(1,1),ed=new ur,td=new Vo,nd=new yr,Nh=[],Oh=[],zh=new Float32Array(16),Uh=new Float32Array(9),Bh=new Float32Array(4);function Ys(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Nh[s];if(r===void 0&&(r=new Float32Array(s),Nh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cA(i,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $g(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function iv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;Bh.set(n),i.uniformMatrix2fv(this.addr,!1,Bh),zt(t,n)}}function sv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),zt(t,n)}}function rv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;zh.set(n),i.uniformMatrix4fv(this.addr,!1,zh),zt(t,n)}}function ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function Av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function cv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function fv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ql.compareFunction=t.isReversedDepthBuffer()?iA:nA,r=Ql):r=$h,t.setTexture2D(e||r,s)}function pv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||td,s)}function mv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nd,s)}function gv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ed,s)}function vv(i){switch(i){case 5126:return $g;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return sv;case 35676:return rv;case 5124:case 35670:return ov;case 35667:case 35671:return av;case 35668:case 35672:return Av;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return uv;case 36295:return hv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function Mv(i,e){i.uniform1fv(this.addr,e)}function xv(i,e){let t=Ys(e,this.size,2);i.uniform2fv(this.addr,t)}function yv(i,e){let t=Ys(e,this.size,3);i.uniform3fv(this.addr,t)}function Tv(i,e){let t=Ys(e,this.size,4);i.uniform4fv(this.addr,t)}function wv(i,e){let t=Ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bv(i,e){let t=Ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sv(i,e){let t=Ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pv(i,e){i.uniform1iv(this.addr,e)}function _v(i,e){i.uniform2iv(this.addr,e)}function Cv(i,e){i.uniform3iv(this.addr,e)}function Ev(i,e){i.uniform4iv(this.addr,e)}function Dv(i,e){i.uniform1uiv(this.addr,e)}function Iv(i,e){i.uniform2uiv(this.addr,e)}function Rv(i,e){i.uniform3uiv(this.addr,e)}function Lv(i,e){i.uniform4uiv(this.addr,e)}function Nv(i,e,t){let n=this.cache,s=e.length,r=cA(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ql:o=$h;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Ov(i,e,t){let n=this.cache,s=e.length,r=cA(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||td,r[o])}function zv(i,e,t){let n=this.cache,s=e.length,r=cA(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||nd,r[o])}function Uv(i,e,t){let n=this.cache,s=e.length,r=cA(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ed,r[o])}function Bv(i){switch(i){case 5126:return Mv;case 35664:return xv;case 35665:return yv;case 35666:return Tv;case 35674:return wv;case 35675:return bv;case 35676:return Sv;case 5124:case 35670:return Pv;case 35667:case 35671:return _v;case 35668:case 35672:return Cv;case 35669:case 35673:return Ev;case 5125:return Dv;case 36294:return Iv;case 36295:return Rv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Uv}}var Zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vv(t.type)}},Jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bv(t.type)}},Kl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Hl=/(\w+)(\])?(\[|\.)?/g;function Fh(i,e){i.seq.push(e),i.map[e.id]=e}function Fv(i,e,t){let n=i.name,s=n.length;for(Hl.lastIndex=0;;){let r=Hl.exec(n),o=Hl.lastIndex,a=r[1],A=r[2]==="]",l=r[3];if(A&&(a=a|0),l===void 0||l==="["&&o+2===s){Fh(t,l===void 0?new Zl(a,i,e):new Jl(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Kl(a),Fh(t,h)),t=h}}}var Hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),A=e.getUniformLocation(t,a.name);Fv(a,A,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],A=n[a.id];A.needsUpdate!==!1&&a.setValue(e,A.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function jh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var jv=37297,kv=0;function Wv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var kh=new Ve;function Gv(i){Je._getMatrix(kh,Je.workingColorSpace,i);let e=`mat3( ${kh.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case lr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Wv(i.getShaderSource(e),a)}else return r}function Vv(i,e){let t=Gv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Xv={[fl]:"Linear",[pl]:"Reinhard",[ml]:"Cineon",[Wr]:"ACESFilmic",[vl]:"AgX",[Ml]:"Neutral",[gl]:"Custom"};function Hv(i,e){let t=Xv[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rA=new L;function Yv(){Je.getLuminanceCoefficients(rA);let i=rA.x.toFixed(4),e=rA.y.toFixed(4),t=rA.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function Zv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $r(i){return i!==""}function Gh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(i){return i.replace(Kv,$v)}var qv=new Map;function $v(i,e){let t=Ze[e];if(t===void 0){let n=qv.get(e);if(n!==void 0)t=Ze[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ql(t)}var e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(i){return i.replace(e0,t0)}function t0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var n0={[kr]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function i0(i){return n0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var s0={[Ei]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE_UV"};function r0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":s0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var o0={[Qi]:"ENVMAP_MODE_REFRACTION"};function a0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":o0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var A0={[dl]:"ENVMAP_BLENDING_MULTIPLY",[rh]:"ENVMAP_BLENDING_MIX",[oh]:"ENVMAP_BLENDING_ADD"};function l0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":A0[i.combine]||"ENVMAP_BLENDING_NONE"}function c0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function u0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,A=i0(t),l=r0(t),c=a0(t),h=l0(t),u=c0(t),d=Qv(t),m=Zv(r),y=s.createProgram(),p,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($r).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($r).join(`
`),f.length>0&&(f+=`
`)):(p=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),f=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Vv("linearToOutputTexel",t.outputColorSpace),Yv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=ql(o),o=Gh(o,t),o=Vh(o,t),a=ql(a),a=Gh(a,t),a=Vh(a,t),o=Xh(o),a=Xh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let P=T+p+o,M=T+f+a,w=jh(s,s.VERTEX_SHADER,P),b=jh(s,s.FRAGMENT_SHADER,M);s.attachShader(y,w),s.attachShader(y,b),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(U){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(w)||"",O=s.getShaderInfoLog(b)||"",X=B.trim(),$=V.trim(),K=O.trim(),de=!0,te=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(de=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,w,b);else{let ae=Wh(s,w,"vertex"),ce=Wh(s,b,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+X+`
`+ae+`
`+ce)}else X!==""?ze("WebGLProgram: Program Info Log:",X):($===""||K==="")&&(te=!1);te&&(U.diagnostics={runnable:de,programLog:X,vertexShader:{log:$,prefix:p},fragmentShader:{log:K,prefix:f}})}s.deleteShader(w),s.deleteShader(b),v=new Hs(s,y),_=Jv(s,y)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,jv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=b,this}var h0=0,$l=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ec(e),t.set(e,n)),n}},ec=class{constructor(e){this.id=h0++,this.code=e,this.usedTimes=0}};function d0(i){return i===Ii||i===Qr||i===Zr}function f0(i,e,t,n,s,r){let o=new ws,a=new $l,A=new Set,l=[],c=new Map,h=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return A.add(v),v===0?"uv":`uv${v}`}function y(v,_,R,U,B,V){let O=U.fog,X=B.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,de=e.get(v.envMap||$,K),te=de&&de.mapping===Gr?de.image.height:null,ae=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&ze("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ce=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ue=ce!==void 0?ce.length:0,Ne=0;X.morphAttributes.position!==void 0&&(Ne=1),X.morphAttributes.normal!==void 0&&(Ne=2),X.morphAttributes.color!==void 0&&(Ne=3);let ht,ie,oe,I;if(ae){let ke=Hn[ae];ht=ke.vertexShader,ie=ke.fragmentShader}else{ht=v.vertexShader,ie=v.fragmentShader;let ke=a.getVertexShaderStage(v),Ye=a.getFragmentShaderStage(v);a.update(v,ke,Ye),oe=ke.id,I=Ye.id}let S=i.getRenderTarget(),Y=i.state.buffers.depth.getReversed(),le=B.isInstancedMesh===!0,Q=B.isBatchedMesh===!0,Ae=!!v.map,Te=!!v.matcap,Se=!!de,Be=!!v.aoMap,Fe=!!v.lightMap,Ge=!!v.bumpMap&&v.wireframe===!1,_e=!!v.normalMap,He=!!v.displacementMap,rt=!!v.emissiveMap,et=!!v.metalnessMap,tt=!!v.roughnessMap,z=v.anisotropy>0,_t=v.clearcoat>0,it=v.dispersion>0,C=v.retroreflectivity>0,g=v.iridescence>0,F=v.sheen>0,G=v.transmission>0,ee=z&&!!v.anisotropyMap,ge=_t&&!!v.clearcoatMap,ve=_t&&!!v.clearcoatNormalMap,ne=_t&&!!v.clearcoatRoughnessMap,se=g&&!!v.iridescenceMap,Me=g&&!!v.iridescenceThicknessMap,pe=F&&!!v.sheenColorMap,xe=F&&!!v.sheenRoughnessMap,ye=!!v.specularMap,j=!!v.specularColorMap,q=!!v.specularIntensityMap,he=G&&!!v.transmissionMap,D=G&&!!v.thicknessMap,re=!!v.gradientMap,H=!!v.alphaMap,fe=v.alphaTest>0,ue=!!v.alphaHash,Z=!!v.extensions,we=Dn;v.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(we=i.toneMapping);let me={shaderID:ae,shaderType:v.type,shaderName:v.name,vertexShader:ht,fragmentShader:ie,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:I,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Q,batchingColor:Q&&B._colorsTexture!==null,instancing:le,instancingColor:le&&B.instanceColor!==null,instancingMorph:le&&B.morphTexture!==null,outputColorSpace:S===null?i.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ae,matcap:Te,envMap:Se,envMapMode:Se&&de.mapping,envMapCubeUVHeight:te,aoMap:Be,lightMap:Fe,bumpMap:Ge,normalMap:_e,displacementMap:He,emissiveMap:rt,normalMapObjectSpace:_e&&v.normalMapType===ch,normalMapTangentSpace:_e&&v.normalMapType===tA,packedNormalMap:_e&&v.normalMapType===tA&&d0(v.normalMap.format),metalnessMap:et,roughnessMap:tt,anisotropy:z,anisotropyMap:ee,clearcoat:_t,clearcoatMap:ge,clearcoatNormalMap:ve,clearcoatRoughnessMap:ne,dispersion:it,retroreflection:C,iridescence:g,iridescenceMap:se,iridescenceThicknessMap:Me,sheen:F,sheenColorMap:pe,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:j,specularIntensityMap:q,transmission:G,transmissionMap:he,thicknessMap:D,gradientMap:re,opaque:v.transparent===!1&&v.blending===Fs&&v.alphaToCoverage===!1,alphaMap:H,alphaTest:fe,alphaHash:ue,combine:v.combine,mapUv:Ae&&m(v.map.channel),aoMapUv:Be&&m(v.aoMap.channel),lightMapUv:Fe&&m(v.lightMap.channel),bumpMapUv:Ge&&m(v.bumpMap.channel),normalMapUv:_e&&m(v.normalMap.channel),displacementMapUv:He&&m(v.displacementMap.channel),emissiveMapUv:rt&&m(v.emissiveMap.channel),metalnessMapUv:et&&m(v.metalnessMap.channel),roughnessMapUv:tt&&m(v.roughnessMap.channel),anisotropyMapUv:ee&&m(v.anisotropyMap.channel),clearcoatMapUv:ge&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(v.sheenRoughnessMap.channel),specularMapUv:ye&&m(v.specularMap.channel),specularColorMapUv:j&&m(v.specularColorMap.channel),specularIntensityMapUv:q&&m(v.specularIntensityMap.channel),transmissionMapUv:he&&m(v.transmissionMap.channel),thicknessMapUv:D&&m(v.thicknessMap.channel),alphaMapUv:H&&m(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(_e||z),vertexNormals:!!X.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Ae||H),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||X.attributes.normal===void 0&&_e===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Y,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Ne,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:Ae&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===at,decodeVideoTextureEmissive:rt&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ft,flipSided:v.side===Kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Z&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Z&&v.extensions.multiDraw===!0||Q)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return me.vertexUv1s=A.has(1),me.vertexUv2s=A.has(2),me.vertexUv3s=A.has(3),A.clear(),me}function p(v){let _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)_.push(R),_.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(f(_,v),T(_,v),_.push(i.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function f(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numSunLights),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numSunLightShadows),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function T(v,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function P(v){let _=d[v.type],R;if(_){let U=Hn[_];R=_h.clone(U.uniforms)}else R=v.uniforms;return R}function M(v,_){let R=c.get(_);return R!==void 0?++R.usedTimes:(R=new u0(i,_,v,s),l.push(R),c.set(_,R)),R}function w(v){if(--v.usedTimes===0){let _=l.indexOf(v);l[_]=l[l.length-1],l.pop(),c.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function E(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:P,acquireProgram:M,releaseProgram:w,releaseShaderCache:b,programs:l,dispose:E}}function p0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,A){i.get(o)[a]=A}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function m0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,y,p,f){let T=i[e];return T===void 0?(T={id:u.id,object:u,geometry:d,material:m,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:f},i[e]=T):(T.id=u.id,T.object=u,T.geometry=d,T.material=m,T.materialVariant=o(u),T.groupOrder=y,T.renderOrder=u.renderOrder,T.z=p,T.group=f),e++,T}function A(u,d,m,y,p,f,T){T.reversedDepth===!0&&(p=-p);let P=a(u,d,m,y,p,f);m.transmission>0?n.push(P):m.transparent===!0?s.push(P):t.push(P)}function l(u,d,m,y,p,f){let T=a(u,d,m,y,p,f);m.transmission>0?n.unshift(T):m.transparent===!0?s.unshift(T):t.unshift(T)}function c(u,d){t.length>1&&t.sort(u||m0),n.length>1&&n.sort(d||Yh),s.length>1&&s.sort(d||Yh)}function h(){for(let u=e,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:A,unshift:l,finish:h,sort:c}}function g0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Qh,i.set(n,[o])):s>=r.length?(o=new Qh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function v0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new je};break;case"SpotLight":t={position:new L,direction:new L,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function M0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var x0=0;function y0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function T0(i){let e=new v0,t=M0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Xe,o=new Xe;function a(l){let c=0,h=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,m=0,y=0,p=0,f=0,T=0,P=0,M=0,w=0,b=0,E=0,v=0,_=0,R=0;l.sort(y0);for(let B=0,V=l.length;B<V;B++){let O=l[B],X=O.color,$=O.intensity,K=O.distance,de=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Ii?de=O.shadow.map.texture:de=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)c+=X.r*$,h+=X.g*$,u+=X.b*$;else if(O.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(O.sh.coefficients[te],$);R++}else if(O.isSunLight){let te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ae=O.shadow,ce=t.get(O);ce.shadowIntensity=ae.intensity,ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),n.sunShadow[m]=ce,n.sunShadowMap[m]=de;let Ue=ae.getViewportCount();for(let Ne=0;Ne<Ue;Ne++)n.sunShadowMatrix[y+Ne]=ae.getMatrix(Ne),n.sunShadowCascade[y+Ne]=ae._cascadeData[Ne];y+=Ue,m++}n.sun[d]=te,d++}else if(O.isDirectionalLight){let te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ae=O.shadow,ce=t.get(O);ce.shadowIntensity=ae.intensity,ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,n.directionalShadow[p]=ce,n.directionalShadowMap[p]=de,n.directionalShadowMatrix[p]=O.shadow.matrix,w++}n.directional[p]=te,p++}else if(O.isSpotLight){let te=e.get(O);te.position.setFromMatrixPosition(O.matrixWorld),te.color.copy(X).multiplyScalar($),te.distance=K,te.coneCos=Math.cos(O.angle),te.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),te.decay=O.decay,n.spot[T]=te;let ae=O.shadow;if(O.map&&(n.spotLightMap[v]=O.map,v++,ae.updateMatrices(O),O.castShadow&&_++),n.spotLightMatrix[T]=ae.matrix,O.castShadow){let ce=t.get(O);ce.shadowIntensity=ae.intensity,ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,n.spotShadow[T]=ce,n.spotShadowMap[T]=de,E++}T++}else if(O.isRectAreaLight){let te=e.get(O);te.color.copy(X).multiplyScalar($),te.halfWidth.set(O.width*.5,0,0),te.halfHeight.set(0,O.height*.5,0),n.rectArea[P]=te,P++}else if(O.isPointLight){let te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),te.distance=O.distance,te.decay=O.decay,O.castShadow){let ae=O.shadow,ce=t.get(O);ce.shadowIntensity=ae.intensity,ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,ce.shadowCameraNear=ae.camera.near,ce.shadowCameraFar=ae.camera.far,n.pointShadow[f]=ce,n.pointShadowMap[f]=de,n.pointShadowMatrix[f]=O.shadow.matrix,b++}n.point[f]=te,f++}else if(O.isHemisphereLight){let te=e.get(O);te.skyColor.copy(O.color).multiplyScalar($),te.groundColor.copy(O.groundColor).multiplyScalar($),n.hemi[M]=te,M++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=u;let U=n.hash;(U.sunLength!==d||U.directionalLength!==p||U.pointLength!==f||U.spotLength!==T||U.rectAreaLength!==P||U.hemiLength!==M||U.numSunShadows!==m||U.numDirectionalShadows!==w||U.numPointShadows!==b||U.numSpotShadows!==E||U.numSpotMaps!==v||U.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=p,n.spot.length=T,n.rectArea.length=P,n.point.length=f,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-_,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=R,U.sunLength=d,U.directionalLength=p,U.pointLength=f,U.spotLength=T,U.rectAreaLength=P,U.hemiLength=M,U.numSunShadows=m,U.numDirectionalShadows=w,U.numPointShadows=b,U.numSpotShadows=E,U.numSpotMaps=v,U.numLightProbes=R,n.version=x0++)}function A(l,c){let h=0,u=0,d=0,m=0,y=0,p=0,f=c.matrixWorldInverse;for(let T=0,P=l.length;T<P;T++){let M=l[T];if(M.isSunLight){let w=n.sun[h];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),h++}else if(M.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),u++}else if(M.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),m++}else if(M.isRectAreaLight){let w=n.rectArea[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),o.identity(),r.copy(M.matrixWorld),r.premultiply(f),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),p++}}}return{setup:a,setupView:A,state:n}}function Zh(i){let e=new T0(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function A(u){s.push(u)}function l(){e.setup(t)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:A}}function w0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Zh(i),e.set(s,[a])):r>=o.length?(a=new Zh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S0=`uniform sampler2D shadow_pass;
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
}`,P0=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],_0=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Jh=new Xe,qr=new L,Yl=new L;function C0(i,e,t){let n=new Es,s=new Ee,r=new Ee,o=new ut,a=new na,A=new ia,l={},c=t.maxTextureSize,h={[Gn]:Kt,[Kt]:Gn,[Ft]:Ft},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:b0,fragmentShader:S0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new yt;m.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new It(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kr;let f=this.type;this.render=function(b,E,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===fa&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kr);let _=i.getRenderTarget(),R=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Vn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=f!==this.type;V&&E.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(X=>X.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,X=b.length;O<X;O++){let $=b[O],K=$.shadow;if(K===void 0){ze("WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let de=K.getFrameExtents();s.multiply(de),r.copy(K.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/de.x),s.x=r.x*de.x,K.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/de.y),s.y=r.y*de.y,K.mapSize.y=r.y));let te=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=te,K.map===null||V===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Bs){if($.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new en(s.x,s.y,{format:Ii,type:Ln,minFilter:St,magFilter:St,generateMipmaps:!1}),K.map.texture.name=$.name+".shadowMap",K.map.depthTexture=new bi(s.x,s.y,gn),K.map.depthTexture.name=$.name+".shadowMapDepth",K.map.depthTexture.format=Fn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=bt,K.map.depthTexture.magFilter=bt}else $.isPointLight?(K.map=new aA(s.x),K.map.depthTexture=new Yo(s.x,Rn)):(K.map=new en(s.x,s.y),K.map.depthTexture=new bi(s.x,s.y,Rn)),K.map.depthTexture.name=$.name+".shadowMap",K.map.depthTexture.format=Fn,this.type===kr?(K.map.depthTexture.compareFunction=te?iA:nA,K.map.depthTexture.minFilter=St,K.map.depthTexture.magFilter=St):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=bt,K.map.depthTexture.magFilter=bt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let ae=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();$.isPointLight!==!0&&K.updateMatrices($,v);for(let ce=0;ce<ae;ce++){let Ue=K.getCamera(ce);if($.isPointLight){let Ne=K.camera,ht=K.matrix,ie=$.distance||Ne.far;ie!==Ne.far&&(Ne.far=ie,Ne.updateProjectionMatrix()),qr.setFromMatrixPosition($.matrixWorld),Ne.position.copy(qr),Yl.copy(Ne.position),Yl.add(P0[ce]),Ne.up.copy(_0[ce]),Ne.lookAt(Yl),Ne.updateMatrixWorld(),ht.makeTranslation(-qr.x,-qr.y,-qr.z),Jh.multiplyMatrices(Ne.projectionMatrix,Ne.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Jh,Ne.coordinateSystem,Ne.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,ce),i.clear();else{ce===0&&(i.setRenderTarget(K.map),i.clear());let Ne=K.getViewport(ce);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),B.viewport(o)}n=K.getFrustum(ce),M(E,v,Ue,$,this.type)}K.isPointLightShadow!==!0&&this.type===Bs&&T(K,v),K.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(_,R,U)};function T(b,E){let v=e.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new en(s.x,s.y,{format:Ii,type:Ln}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,v,u,y,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,v,d,y,null)}function P(b,E,v,_){let R=null,U=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)R=U;else if(R=v.isPointLight===!0?A:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let B=R.uuid,V=E.uuid,O=l[B];O===void 0&&(O={},l[B]=O);let X=O[V];X===void 0&&(X=R.clone(),O[V]=X,E.addEventListener("dispose",w)),R=X}if(R.visible=E.visible,R.wireframe=E.wireframe,_===Bs?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:h[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let B=i.properties.get(R);B.light=v}return R}function M(b,E,v,_,R){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===Bs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let V=e.update(b),O=b.material;if(Array.isArray(O)){let X=V.groups;for(let $=0,K=X.length;$<K;$++){let de=X[$],te=O[de.materialIndex];if(te&&te.visible){let ae=P(b,te,_,R);b.onBeforeShadow(i,b,E,v,V,ae,de),i.renderBufferDirect(v,null,V,ae,b,de),b.onAfterShadow(i,b,E,v,V,ae,de)}}}else if(O.visible){let X=P(b,O,_,R);b.onBeforeShadow(i,b,E,v,V,X,null),i.renderBufferDirect(v,null,V,X,b,null),b.onAfterShadow(i,b,E,v,V,X,null)}}let B=b.children;for(let V=0,O=B.length;V<O;V++)M(B[V],E,v,_,R)}function w(b){b.target.removeEventListener("dispose",w);for(let v in l){let _=l[v],R=b.target.uuid;R in _&&(_[R].dispose(),delete _[R])}}}function E0(i,e){function t(){let D=!1,re=new ut,H=null,fe=new ut(0,0,0,0);return{setMask:function(ue){H!==ue&&!D&&(i.colorMask(ue,ue,ue,ue),H=ue)},setLocked:function(ue){D=ue},setClear:function(ue,Z,we,me,ke){ke===!0&&(ue*=me,Z*=me,we*=me),re.set(ue,Z,we,me),fe.equals(re)===!1&&(i.clearColor(ue,Z,we,me),fe.copy(re))},reset:function(){D=!1,H=null,fe.set(-1,0,0,0)}}}function n(){let D=!1,re=!1,H=null,fe=null,ue=null;return{setReversed:function(Z){if(re!==Z){let we=e.get("EXT_clip_control");Z?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),re=Z;let me=ue;ue=null,this.setClear(me)}},getReversed:function(){return re},setTest:function(Z){Z?S(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(Z){H!==Z&&!D&&(i.depthMask(Z),H=Z)},setFunc:function(Z){if(re&&(Z=yh[Z]),fe!==Z){switch(Z){case Oo:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case Uo:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case Bo:i.depthFunc(i.EQUAL);break;case Fo:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Z}},setLocked:function(Z){D=Z},setClear:function(Z){ue!==Z&&(ue=Z,re&&(Z=1-Z),i.clearDepth(Z))},reset:function(){D=!1,H=null,fe=null,ue=null,re=!1}}}function s(){let D=!1,re=null,H=null,fe=null,ue=null,Z=null,we=null,me=null,ke=null;return{setTest:function(Ye){D||(Ye?S(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(Ye){re!==Ye&&!D&&(i.stencilMask(Ye),re=Ye)},setFunc:function(Ye,lt,Tt){(H!==Ye||fe!==lt||ue!==Tt)&&(i.stencilFunc(Ye,lt,Tt),H=Ye,fe=lt,ue=Tt)},setOp:function(Ye,lt,Tt){(Z!==Ye||we!==lt||me!==Tt)&&(i.stencilOp(Ye,lt,Tt),Z=Ye,we=lt,me=Tt)},setLocked:function(Ye){D=Ye},setClear:function(Ye){ke!==Ye&&(i.clearStencil(Ye),ke=Ye)},reset:function(){D=!1,re=null,H=null,fe=null,ue=null,Z=null,we=null,me=null,ke=null}}}let r=new t,o=new n,a=new s,A=new WeakMap,l=new WeakMap,c={},h={},u={},d=new WeakMap,m=[],y=null,p=!1,f=null,T=null,P=null,M=null,w=null,b=null,E=null,v=new je(0,0,0),_=0,R=!1,U=null,B=null,V=null,O=null,X=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,de=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(te)[1]),K=de>=1):te.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),K=de>=2);let ae=null,ce={},Ue=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),ht=new ut().fromArray(Ue),ie=new ut().fromArray(Ne);function oe(D,re,H,fe){let ue=new Uint8Array(4),Z=i.createTexture();i.bindTexture(D,Z),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<H;we++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(re+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return Z}let I={};I[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),I[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),I[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),S(i.DEPTH_TEST),o.setFunc(gs),Ge(!1),_e(al),S(i.CULL_FACE),Be(Vn);function S(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function Y(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function le(D,re){return u[D]!==re?(i.bindFramebuffer(D,re),u[D]=re,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=re),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Q(D,re){let H=m,fe=!1;if(D){H=d.get(re),H===void 0&&(H=[],d.set(re,H));let ue=D.textures;if(H.length!==ue.length||H[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,we=ue.length;Z<we;Z++)H[Z]=i.COLOR_ATTACHMENT0+Z;H.length=ue.length,fe=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,fe=!0);fe&&i.drawBuffers(H)}function Ae(D){return y!==D?(i.useProgram(D),y=D,!0):!1}let Te={[Yi]:i.FUNC_ADD,[Wu]:i.FUNC_SUBTRACT,[Gu]:i.FUNC_REVERSE_SUBTRACT};Te[Vu]=i.MIN,Te[Xu]=i.MAX;let Se={[Hu]:i.ZERO,[Yu]:i.ONE,[Qu]:i.SRC_COLOR,[ul]:i.SRC_ALPHA,[eh]:i.SRC_ALPHA_SATURATE,[qu]:i.DST_COLOR,[Ju]:i.DST_ALPHA,[Zu]:i.ONE_MINUS_SRC_COLOR,[hl]:i.ONE_MINUS_SRC_ALPHA,[$u]:i.ONE_MINUS_DST_COLOR,[Ku]:i.ONE_MINUS_DST_ALPHA,[th]:i.CONSTANT_COLOR,[nh]:i.ONE_MINUS_CONSTANT_COLOR,[ih]:i.CONSTANT_ALPHA,[sh]:i.ONE_MINUS_CONSTANT_ALPHA};function Be(D,re,H,fe,ue,Z,we,me,ke,Ye){if(D===Vn){p===!0&&(Y(i.BLEND),p=!1);return}if(p===!1&&(S(i.BLEND),p=!0),D!==ku){if(D!==f||Ye!==R){if((T!==Yi||w!==Yi)&&(i.blendEquation(i.FUNC_ADD),T=Yi,w=Yi),Ye)switch(D){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFunc(i.ONE,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",D);break}else switch(D){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ll:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cl:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",D);break}P=null,M=null,b=null,E=null,v.set(0,0,0),_=0,f=D,R=Ye}return}ue=ue||re,Z=Z||H,we=we||fe,(re!==T||ue!==w)&&(i.blendEquationSeparate(Te[re],Te[ue]),T=re,w=ue),(H!==P||fe!==M||Z!==b||we!==E)&&(i.blendFuncSeparate(Se[H],Se[fe],Se[Z],Se[we]),P=H,M=fe,b=Z,E=we),(me.equals(v)===!1||ke!==_)&&(i.blendColor(me.r,me.g,me.b,ke),v.copy(me),_=ke),f=D,R=!1}function Fe(D,re){D.side===Ft?Y(i.CULL_FACE):S(i.CULL_FACE);let H=D.side===Kt;re&&(H=!H),Ge(H),D.blending===Fs&&D.transparent===!1?Be(Vn):Be(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let fe=D.stencilWrite;a.setTest(fe),fe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?S(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){U!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),U=D)}function _e(D){D!==Fu?(S(i.CULL_FACE),D!==B&&(D===al?i.cullFace(i.BACK):D===ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),B=D}function He(D){D!==V&&(K&&i.lineWidth(D),V=D)}function rt(D,re,H){D?(S(i.POLYGON_OFFSET_FILL),(O!==re||X!==H)&&(O=re,X=H,o.getReversed()&&(re=-re),i.polygonOffset(re,H))):Y(i.POLYGON_OFFSET_FILL)}function et(D){D?S(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function tt(D){D===void 0&&(D=i.TEXTURE0+$-1),ae!==D&&(i.activeTexture(D),ae=D)}function z(D,re,H){H===void 0&&(ae===null?H=i.TEXTURE0+$-1:H=ae);let fe=ce[H];fe===void 0&&(fe={type:void 0,texture:void 0},ce[H]=fe),(fe.type!==D||fe.texture!==re)&&(ae!==H&&(i.activeTexture(H),ae=H),i.bindTexture(D,re||I[D]),fe.type=D,fe.texture=re)}function _t(){let D=ce[ae];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function it(){try{i.compressedTexImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function g(){try{i.texSubImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function F(){try{i.texSubImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function ge(){try{i.texStorage2D(...arguments)}catch(D){We("WebGLState:",D)}}function ve(){try{i.texStorage3D(...arguments)}catch(D){We("WebGLState:",D)}}function ne(){try{i.texImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function se(){try{i.texImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function Me(D){return h[D]!==void 0?h[D]:i.getParameter(D)}function pe(D,re){h[D]!==re&&(i.pixelStorei(D,re),h[D]=re)}function xe(D){ht.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ht.copy(D))}function ye(D){ie.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function j(D,re){let H=l.get(re);H===void 0&&(H=new WeakMap,l.set(re,H));let fe=H.get(D);fe===void 0&&(fe=i.getUniformBlockIndex(re,D.name),H.set(D,fe))}function q(D,re){let fe=l.get(re).get(D);A.get(re)!==fe&&(i.uniformBlockBinding(re,fe,D.__bindingPointIndex),A.set(re,fe))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},h={},ae=null,ce={},u={},d=new WeakMap,m=[],y=null,p=!1,f=null,T=null,P=null,M=null,w=null,b=null,E=null,v=new je(0,0,0),_=0,R=!1,U=null,B=null,V=null,O=null,X=null,ht.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:S,disable:Y,bindFramebuffer:le,drawBuffers:Q,useProgram:Ae,setBlending:Be,setMaterial:Fe,setFlipSided:Ge,setCullFace:_e,setLineWidth:He,setPolygonOffset:rt,setScissorTest:et,activeTexture:tt,bindTexture:z,unbindTexture:_t,compressedTexImage2D:it,compressedTexImage3D:C,texImage2D:ne,texImage3D:se,pixelStorei:pe,getParameter:Me,updateUBOMapping:j,uniformBlockBinding:q,texStorage2D:ge,texStorage3D:ve,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:ee,scissor:xe,viewport:ye,reset:he}}function D0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,c=new WeakMap,h=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,g){return m?new OffscreenCanvas(C,g):xs("canvas")}function p(C,g,F){let G=1,ee=it(C);if((ee.width>F||ee.height>F)&&(G=F/Math.max(ee.width,ee.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ge=Math.floor(G*ee.width),ve=Math.floor(G*ee.height);u===void 0&&(u=y(ge,ve));let ne=g?y(ge,ve):u;return ne.width=ge,ne.height=ve,ne.getContext("2d").drawImage(C,0,0,ge,ve),ze("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ge+"x"+ve+")."),ne}else return"data"in C&&ze("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function f(C){return C.generateMipmaps}function T(C){i.generateMipmap(C)}function P(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,g,F,G,ee,ge=!1){if(C!==null){if(i[C]!==void 0)return i[C];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ve;G&&(ve=e.get("EXT_texture_norm16"),ve||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=g;if(g===i.RED&&(F===i.FLOAT&&(ne=i.R32F),F===i.HALF_FLOAT&&(ne=i.R16F),F===i.UNSIGNED_BYTE&&(ne=i.R8),F===i.UNSIGNED_SHORT&&ve&&(ne=ve.R16_EXT),F===i.SHORT&&ve&&(ne=ve.R16_SNORM_EXT)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.R8UI),F===i.UNSIGNED_SHORT&&(ne=i.R16UI),F===i.UNSIGNED_INT&&(ne=i.R32UI),F===i.BYTE&&(ne=i.R8I),F===i.SHORT&&(ne=i.R16I),F===i.INT&&(ne=i.R32I)),g===i.RG&&(F===i.FLOAT&&(ne=i.RG32F),F===i.HALF_FLOAT&&(ne=i.RG16F),F===i.UNSIGNED_BYTE&&(ne=i.RG8),F===i.UNSIGNED_SHORT&&ve&&(ne=ve.RG16_EXT),F===i.SHORT&&ve&&(ne=ve.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.RG8UI),F===i.UNSIGNED_SHORT&&(ne=i.RG16UI),F===i.UNSIGNED_INT&&(ne=i.RG32UI),F===i.BYTE&&(ne=i.RG8I),F===i.SHORT&&(ne=i.RG16I),F===i.INT&&(ne=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),F===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),F===i.UNSIGNED_INT&&(ne=i.RGB32UI),F===i.BYTE&&(ne=i.RGB8I),F===i.SHORT&&(ne=i.RGB16I),F===i.INT&&(ne=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),F===i.UNSIGNED_INT&&(ne=i.RGBA32UI),F===i.BYTE&&(ne=i.RGBA8I),F===i.SHORT&&(ne=i.RGBA16I),F===i.INT&&(ne=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_SHORT&&ve&&(ne=ve.RGB16_EXT),F===i.SHORT&&ve&&(ne=ve.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),g===i.RGBA){let se=ge?lr:Je.getTransfer(ee);F===i.FLOAT&&(ne=i.RGBA32F),F===i.HALF_FLOAT&&(ne=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ne=se===at?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ve&&(ne=ve.RGBA16_EXT),F===i.SHORT&&ve&&(ne=ve.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function w(C,g){let F;return C?g===null||g===Rn||g===Ws?F=i.DEPTH24_STENCIL8:g===gn?F=i.DEPTH32F_STENCIL8:g===ks&&(F=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Rn||g===Ws?F=i.DEPTH_COMPONENT24:g===gn?F=i.DEPTH_COMPONENT32F:g===ks&&(F=i.DEPTH_COMPONENT16),F}function b(C,g){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==bt&&C.minFilter!==St?Math.log2(Math.max(g.width,g.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?g.mipmaps.length:1}function E(C){let g=C.target;g.removeEventListener("dispose",E),_(g),g.isVideoTexture&&c.delete(g),g.isHTMLTexture&&h.delete(g)}function v(C){let g=C.target;g.removeEventListener("dispose",v),U(g)}function _(C){let g=n.get(C);if(g.__webglInit===void 0)return;let F=C.source,G=d.get(F);if(G){let ee=G[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(C),Object.keys(G).length===0&&d.delete(F)}n.remove(C)}function R(C){let g=n.get(C);i.deleteTexture(g.__webglTexture);let F=C.source,G=d.get(F);delete G[g.__cacheKey],o.memory.textures--}function U(C){let g=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let ee=0;ee<g.__webglFramebuffer[G].length;ee++)i.deleteFramebuffer(g.__webglFramebuffer[G][ee]);else i.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)i.deleteFramebuffer(g.__webglFramebuffer[G]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=C.textures;for(let G=0,ee=F.length;G<ee;G++){let ge=n.get(F[G]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(F[G])}n.remove(C)}let B=0;function V(){B=0}function O(){return B}function X(C){B=C}function $(){let C=B;return C>=s.maxTextures&&ze("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,C}function K(C){let g=[];return g.push(C.wrapS),g.push(C.wrapT),g.push(C.wrapR||0),g.push(C.magFilter),g.push(C.minFilter),g.push(C.anisotropy),g.push(C.internalFormat),g.push(C.format),g.push(C.type),g.push(C.generateMipmaps),g.push(C.premultiplyAlpha),g.push(C.flipY),g.push(C.unpackAlignment),g.push(C.colorSpace),g.join()}function de(C,g){let F=n.get(C);if(C.isVideoTexture&&z(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){let G=C.image;if(G===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,C,g);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function te(C,g){let F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){Y(F,C,g);return}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function ae(C,g){let F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){Y(F,C,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function ce(C,g){let F=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&F.__version!==C.version){le(F,C,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}let Ue={[Bn]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[vs]:i.MIRRORED_REPEAT},Ne={[bt]:i.NEAREST,[ga]:i.NEAREST_MIPMAP_NEAREST,[Zi]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},ht={[hh]:i.NEVER,[gh]:i.ALWAYS,[dh]:i.LESS,[nA]:i.LEQUAL,[fh]:i.EQUAL,[iA]:i.GEQUAL,[ph]:i.GREATER,[mh]:i.NOTEQUAL};function ie(C,g){if(g.type===gn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===St||g.magFilter===js||g.magFilter===Zi||g.magFilter===In||g.minFilter===St||g.minFilter===js||g.minFilter===Zi||g.minFilter===In)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ue[g.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ue[g.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ue[g.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Ne[g.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Ne[g.minFilter]),g.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ht[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===bt||g.minFilter!==Zi&&g.minFilter!==In||g.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function oe(C,g){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,g.addEventListener("dispose",E));let G=g.source,ee=d.get(G);ee===void 0&&(ee={},d.set(G,ee));let ge=K(g);if(ge!==C.__cacheKey){ee[ge]===void 0&&(ee[ge]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[ge].usedTimes++;let ve=ee[C.__cacheKey];ve!==void 0&&(ee[C.__cacheKey].usedTimes--,ve.usedTimes===0&&R(g)),C.__cacheKey=ge,C.__webglTexture=ee[ge].texture}return F}function I(C,g,F){return Math.floor(Math.floor(C/F)/g)}function S(C,g,F,G){let ge=C.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,G,g.data);else{ge.sort((pe,xe)=>pe.start-xe.start);let ve=0;for(let pe=1;pe<ge.length;pe++){let xe=ge[ve],ye=ge[pe],j=xe.start+xe.count,q=I(ye.start,g.width,4),he=I(xe.start,g.width,4);ye.start<=j+1&&q===he&&I(ye.start+ye.count-1,g.width,4)===q?xe.count=Math.max(xe.count,ye.start+ye.count-xe.start):(++ve,ge[ve]=ye)}ge.length=ve+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),Me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let pe=0,xe=ge.length;pe<xe;pe++){let ye=ge[pe],j=Math.floor(ye.start/4),q=Math.ceil(ye.count/4),he=j%g.width,D=Math.floor(j/g.width),re=q,H=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,he,D,re,H,F,G,g.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function Y(C,g,F){let G=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=i.TEXTURE_3D);let ee=oe(C,g),ge=g.source;t.bindTexture(G,C.__webglTexture,i.TEXTURE0+F);let ve=n.get(ge);if(ge.version!==ve.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let H=Je.getPrimaries(Je.workingColorSpace),fe=g.colorSpace===ci?null:Je.getPrimaries(g.colorSpace),ue=g.colorSpace===ci||H===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let se=p(g.image,!1,s.maxTextureSize);se=_t(g,se);let Me=r.convert(g.format,g.colorSpace),pe=r.convert(g.type),xe=M(g.internalFormat,Me,pe,g.normalized,g.colorSpace,g.isVideoTexture);ie(G,g);let ye,j=g.mipmaps,q=g.isVideoTexture!==!0,he=ve.__version===void 0||ee===!0,D=ge.dataReady,re=b(g,se);if(g.isDepthTexture)xe=w(g.format===Di,g.type),he&&(q?t.texStorage2D(i.TEXTURE_2D,1,xe,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,xe,se.width,se.height,0,Me,pe,null));else if(g.isDataTexture)if(j.length>0){q&&he&&t.texStorage2D(i.TEXTURE_2D,re,xe,j[0].width,j[0].height);for(let H=0,fe=j.length;H<fe;H++)ye=j[H],q?D&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,ye.width,ye.height,Me,pe,ye.data):t.texImage2D(i.TEXTURE_2D,H,xe,ye.width,ye.height,0,Me,pe,ye.data);g.generateMipmaps=!1}else q?(he&&t.texStorage2D(i.TEXTURE_2D,re,xe,se.width,se.height),D&&S(g,se,Me,pe)):t.texImage2D(i.TEXTURE_2D,0,xe,se.width,se.height,0,Me,pe,se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){q&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,xe,j[0].width,j[0].height,se.depth);for(let H=0,fe=j.length;H<fe;H++)if(ye=j[H],g.format!==vn)if(Me!==null)if(q){if(D)if(g.layerUpdates.size>0){let ue=zl(ye.width,ye.height,g.format,g.type);for(let Z of g.layerUpdates){let we=ye.data.subarray(Z*ue/ye.data.BYTES_PER_ELEMENT,(Z+1)*ue/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,Z,ye.width,ye.height,1,Me,we)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ye.width,ye.height,se.depth,Me,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,xe,ye.width,ye.height,se.depth,0,ye.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ye.width,ye.height,se.depth,Me,pe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,xe,ye.width,ye.height,se.depth,0,Me,pe,ye.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{q&&he&&t.texStorage2D(i.TEXTURE_2D,re,xe,j[0].width,j[0].height);for(let H=0,fe=j.length;H<fe;H++)ye=j[H],g.format!==vn?Me!==null?q?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,ye.width,ye.height,Me,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,H,xe,ye.width,ye.height,0,ye.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?D&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,ye.width,ye.height,Me,pe,ye.data):t.texImage2D(i.TEXTURE_2D,H,xe,ye.width,ye.height,0,Me,pe,ye.data)}else if(g.isDataArrayTexture)if(q){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,xe,se.width,se.height,se.depth),D)if(g.layerUpdates.size>0){let H=zl(se.width,se.height,g.format,g.type);for(let fe of g.layerUpdates){let ue=se.data.subarray(fe*H/se.data.BYTES_PER_ELEMENT,(fe+1)*H/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,se.width,se.height,1,Me,pe,ue)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,pe,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,se.width,se.height,se.depth,0,Me,pe,se.data);else if(g.isData3DTexture)q?(he&&t.texStorage3D(i.TEXTURE_3D,re,xe,se.width,se.height,se.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,pe,se.data)):t.texImage3D(i.TEXTURE_3D,0,xe,se.width,se.height,se.depth,0,Me,pe,se.data);else if(g.isFramebufferTexture){if(he)if(q)t.texStorage2D(i.TEXTURE_2D,re,xe,se.width,se.height);else{let H=se.width,fe=se.height;for(let ue=0;ue<re;ue++)t.texImage2D(i.TEXTURE_2D,ue,xe,H,fe,0,Me,pe,null),H>>=1,fe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let H=i.canvas;if(H.hasAttribute("layoutsubtree")||H.setAttribute("layoutsubtree","true"),se.parentNode!==H){H.appendChild(se),h.add(g),H.onpaint=fe=>{let ue=fe.changedElements;for(let Z of h)ue.includes(Z.image)&&(Z.needsUpdate=!0)},H.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let ue=i.RGBA,Z=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ue,Z,we,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(j.length>0){if(q&&he){let H=it(j[0]);t.texStorage2D(i.TEXTURE_2D,re,xe,H.width,H.height)}for(let H=0,fe=j.length;H<fe;H++)ye=j[H],q?D&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,Me,pe,ye):t.texImage2D(i.TEXTURE_2D,H,xe,Me,pe,ye);g.generateMipmaps=!1}else if(q){if(he){let H=it(se);t.texStorage2D(i.TEXTURE_2D,re,xe,H.width,H.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,pe,se)}else t.texImage2D(i.TEXTURE_2D,0,xe,Me,pe,se);f(g)&&T(G),ve.__version=ge.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function le(C,g,F){if(g.image.length!==6)return;let G=oe(C,g),ee=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+F);let ge=n.get(ee);if(ee.version!==ge.__version||G===!0){t.activeTexture(i.TEXTURE0+F);let ve=Je.getPrimaries(Je.workingColorSpace),ne=g.colorSpace===ci?null:Je.getPrimaries(g.colorSpace),se=g.colorSpace===ci||ve===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Me=g.isCompressedTexture||g.image[0].isCompressedTexture,pe=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let Z=0;Z<6;Z++)!Me&&!pe?xe[Z]=p(g.image[Z],!0,s.maxCubemapSize):xe[Z]=pe?g.image[Z].image:g.image[Z],xe[Z]=_t(g,xe[Z]);let ye=xe[0],j=r.convert(g.format,g.colorSpace),q=r.convert(g.type),he=M(g.internalFormat,j,q,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,re=ge.__version===void 0||G===!0,H=ee.dataReady,fe=b(g,ye);ie(i.TEXTURE_CUBE_MAP,g);let ue;if(Me){D&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,he,ye.width,ye.height);for(let Z=0;Z<6;Z++){ue=xe[Z].mipmaps;for(let we=0;we<ue.length;we++){let me=ue[we];g.format!==vn?j!==null?D?H&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,0,0,me.width,me.height,j,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,he,me.width,me.height,0,me.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,0,0,me.width,me.height,j,q,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,he,me.width,me.height,0,j,q,me.data)}}}else{if(ue=g.mipmaps,D&&re){ue.length>0&&fe++;let Z=it(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,he,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(pe){D?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe[Z].width,xe[Z].height,j,q,xe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,he,xe[Z].width,xe[Z].height,0,j,q,xe[Z].data);for(let we=0;we<ue.length;we++){let ke=ue[we].image[Z].image;D?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,0,0,ke.width,ke.height,j,q,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,he,ke.width,ke.height,0,j,q,ke.data)}}else{D?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,j,q,xe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,he,j,q,xe[Z]);for(let we=0;we<ue.length;we++){let me=ue[we];D?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,0,0,j,q,me.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,he,j,q,me.image[Z])}}}f(g)&&T(i.TEXTURE_CUBE_MAP),ge.__version=ee.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function Q(C,g,F,G,ee,ge){let ve=r.convert(F.format,F.colorSpace),ne=r.convert(F.type),se=M(F.internalFormat,ve,ne,F.normalized,F.colorSpace),Me=n.get(g),pe=n.get(F);if(pe.__renderTarget=g,!Me.__hasExternalTextures){let xe=Math.max(1,g.width>>ge),ye=Math.max(1,g.height>>ge);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ge,se,xe,ye,g.depth,0,ve,ne,null):t.texImage2D(ee,ge,se,xe,ye,0,ve,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),tt(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,ee,pe.__webglTexture,0,et(g)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,ee,pe.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(C,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,C),g.depthBuffer){let G=g.depthTexture,ee=G&&G.isDepthTexture?G.type:null,ge=w(g.stencilBuffer,ee),ve=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;tt(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(g),ge,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(g),ge,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ge,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,C)}else{let G=g.textures;for(let ee=0;ee<G.length;ee++){let ge=G[ee],ve=r.convert(ge.format,ge.colorSpace),ne=r.convert(ge.type),se=M(ge.internalFormat,ve,ne,ge.normalized,ge.colorSpace);tt(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(g),se,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(g),se,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,se,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(C,g,F){let G=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(g.depthTexture);if(ee.__renderTarget=g,(!ee.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,g.depthTexture.addEventListener("dispose",E)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),ie(i.TEXTURE_CUBE_MAP,g.depthTexture);let Me=r.convert(g.depthTexture.format),pe=r.convert(g.depthTexture.type),xe;g.depthTexture.format===Fn?xe=i.DEPTH_COMPONENT24:g.depthTexture.format===Di&&(xe=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,xe,g.width,g.height,0,Me,pe,null)}}else de(g.depthTexture,0);let ge=ee.__webglTexture,ve=et(g),ne=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,se=g.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Fn)tt(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ne,ge,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,se,ne,ge,0);else if(g.depthTexture.format===Di)tt(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ne,ge,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,se,ne,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Se(C){let g=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){let ee=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",ee)};G.addEventListener("dispose",ee),g.__depthDisposeCallback=ee}g.__boundDepthTexture=G}if(C.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)Te(g.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?Te(g.__webglFramebuffer[0],C,0):Te(g.__webglFramebuffer,C,0)}else if(F){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=i.createRenderbuffer(),Ae(g.__webglDepthbuffer[G],C,!1);else{let ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=g.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ge)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ae(g.__webglDepthbuffer,C,!1);else{let ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ge)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(C,g,F){let G=n.get(C);g!==void 0&&Q(G.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Se(C)}function Fe(C){let g=C.texture,F=n.get(C),G=n.get(g);C.addEventListener("dispose",v);let ee=C.textures,ge=C.isWebGLCubeRenderTarget===!0,ve=ee.length>1;if(ve||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=g.version,o.memory.textures++),ge){F.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[ne]=[];for(let se=0;se<g.mipmaps.length;se++)F.__webglFramebuffer[ne][se]=i.createFramebuffer()}else F.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)F.__webglFramebuffer[ne]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ne=0,se=ee.length;ne<se;ne++){let Me=n.get(ee[ne]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&tt(C)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ne=0;ne<ee.length;ne++){let se=ee[ne];F.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ne]);let Me=r.convert(se.format,se.colorSpace),pe=r.convert(se.type),xe=M(se.internalFormat,Me,pe,se.normalized,se.colorSpace,C.isXRRenderTarget===!0),ye=et(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,xe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,F.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),ie(i.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let se=0;se<g.mipmaps.length;se++)Q(F.__webglFramebuffer[ne][se],C,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else Q(F.__webglFramebuffer[ne],C,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);f(g)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ne=0,se=ee.length;ne<se;ne++){let Me=ee[ne],pe=n.get(Me),xe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,pe.__webglTexture),ie(xe,Me),Q(F.__webglFramebuffer,C,Me,i.COLOR_ATTACHMENT0+ne,xe,0),f(Me)&&T(xe)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,G.__webglTexture),ie(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let se=0;se<g.mipmaps.length;se++)Q(F.__webglFramebuffer[se],C,g,i.COLOR_ATTACHMENT0,ne,se);else Q(F.__webglFramebuffer,C,g,i.COLOR_ATTACHMENT0,ne,0);f(g)&&T(ne),t.unbindTexture()}C.depthBuffer&&Se(C)}function Ge(C){let g=C.textures;for(let F=0,G=g.length;F<G;F++){let ee=g[F];if(f(ee)){let ge=P(C),ve=n.get(ee).__webglTexture;t.bindTexture(ge,ve),T(ge),t.unbindTexture()}}}let _e=[],He=[];function rt(C){if(C.samples>0){if(tt(C)===!1){let g=C.textures,F=C.width,G=C.height,ee=i.COLOR_BUFFER_BIT,ge=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(C),ne=g.length>1;if(ne)for(let Me=0;Me<g.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let se=C.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Me=0;Me<g.length;Me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);let pe=n.get(g[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,ee,i.NEAREST),A===!0&&(_e.length=0,He.length=0,_e.push(i.COLOR_ATTACHMENT0+Me),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(_e.push(ge),He.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let Me=0;Me<g.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);let pe=n.get(g[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&A){let g=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function et(C){return Math.min(s.maxSamples,C.samples)}function tt(C){let g=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function z(C){let g=o.render.frame;c.get(C)!==g&&(c.set(C,g),C.update())}function _t(C,g){let F=C.colorSpace,G=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Jt&&F!==ci&&(Je.getTransfer(F)===at?(G!==vn||ee!==an)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",F)),g}function it(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=V,this.getTextureUnits=O,this.setTextureUnits=X,this.setTexture2D=de,this.setTexture2DArray=te,this.setTexture3D=ae,this.setTextureCube=ce,this.rebindTextures=Be,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function I0(i,e){function t(n,s=ci){let r,o=Je.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yl)return i.BYTE;if(n===Tl)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Sl)return i.ALPHA;if(n===Pl)return i.RGB;if(n===vn)return i.RGBA;if(n===Fn)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===ya)return i.RED;if(n===Ta)return i.RED_INTEGER;if(n===Ii)return i.RG;if(n===wa)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===Vr||n===Xr||n===Hr||n===Yr)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===Pa||n===_a||n===Ca)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Da||n===Ia||n===Ra||n===La||n===Qr||n===Na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===Da)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ia)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ra)return r.COMPRESSED_R11_EAC;if(n===La)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qr)return r.COMPRESSED_RG11_EAC;if(n===Na)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oa||n===za||n===Ua||n===Ba||n===Fa||n===ja||n===ka||n===Wa||n===Ga||n===Va||n===Xa||n===Ha||n===Ya||n===Qa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ga)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===Ja||n===Ka)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Za)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===$a||n===Zr||n===eA)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eA)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var R0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L0=`
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

}`,tc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Tr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mn({vertexShader:R0,fragmentShader:L0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nc=class extends jn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",A=1,l=null,c=null,h=null,u=null,d=null,m=null,y=typeof XRWebGLBinding<"u",p=new tc,f={},T=t.getContextAttributes(),P=null,M=null,w=[],b=[],E=new Ee,v=null,_=null,R=new Dt;R.viewport=new ut;let U=new Dt;U.viewport=new ut;let B=[R,U],V=new ha,O=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let S=w[I];return S===void 0&&(S=new bs,w[I]=S),S.getTargetRaySpace()},this.getControllerGrip=function(I){let S=w[I];return S===void 0&&(S=new bs,w[I]=S),S.getGripSpace()},this.getHand=function(I){let S=w[I];return S===void 0&&(S=new bs,w[I]=S),S.getHandSpace()};function $(I){let S=b.indexOf(I.inputSource);if(S===-1)return;let Y=w[S];Y!==void 0&&(Y.update(I.inputSource,I.frame,l||o),Y.dispatchEvent({type:I.type,data:I.inputSource}))}function K(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",de);for(let I=0;I<w.length;I++){let S=b[I];S!==null&&(b[I]=null,w[I].disconnect(S))}O=null,X=null,p.reset();for(let I in f)delete f[I];if(e.setRenderTarget(P),d=null,u=null,h=null,s=null,M=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(E.width,E.height,!1),_!==null){let I=_.camera;I.fov=_.fov,I.zoom=_.zoom,I.updateProjectionMatrix(),_=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",K),s.addEventListener("inputsourceschange",de),T.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(E),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,le=null,Q=null;T.depth&&(Q=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=T.stencil?Di:Fn,le=T.stencil?Ws:Rn);let Ae={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ae),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new en(u.textureWidth,u.textureHeight,{format:vn,type:an,depthTexture:new bi(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Y={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new en(d.framebufferWidth,d.framebufferHeight,{format:vn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(A),l=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function de(I){for(let S=0;S<I.removed.length;S++){let Y=I.removed[S],le=b.indexOf(Y);le>=0&&(b[le]=null,w[le].disconnect(Y))}for(let S=0;S<I.added.length;S++){let Y=I.added[S],le=b.indexOf(Y);if(le===-1){for(let Ae=0;Ae<w.length;Ae++)if(Ae>=b.length){b.push(Y),le=Ae;break}else if(b[Ae]===null){b[Ae]=Y,le=Ae;break}if(le===-1)break}let Q=w[le];Q&&Q.connect(Y)}}let te=new L,ae=new L;function ce(I,S,Y){te.setFromMatrixPosition(S.matrixWorld),ae.setFromMatrixPosition(Y.matrixWorld);let le=te.distanceTo(ae),Q=S.projectionMatrix.elements,Ae=Y.projectionMatrix.elements,Te=Q[14]/(Q[10]-1),Se=Q[14]/(Q[10]+1),Be=(Q[9]+1)/Q[5],Fe=(Q[9]-1)/Q[5],Ge=(Q[8]-1)/Q[0],_e=(Ae[8]+1)/Ae[0],He=Te*Ge,rt=Te*_e,et=le/(-Ge+_e),tt=et*-Ge;if(S.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(tt),I.translateZ(et),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),Q[10]===-1)I.projectionMatrix.copy(S.projectionMatrix),I.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let z=Te+et,_t=Se+et,it=He-tt,C=rt+(le-tt),g=Be*Se/_t*z,F=Fe*Se/_t*z;I.projectionMatrix.makePerspective(it,C,g,F,z,_t),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function Ue(I,S){S===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(S.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let S=I.near,Y=I.far;p.texture!==null&&(p.depthNear>0&&(S=p.depthNear),p.depthFar>0&&(Y=p.depthFar)),V.near=U.near=R.near=S,V.far=U.far=R.far=Y,(O!==V.near||X!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),O=V.near,X=V.far),V.layers.mask=I.layers.mask|6,R.layers.mask=V.layers.mask&-5,U.layers.mask=V.layers.mask&-3;let le=I.parent,Q=V.cameras;Ue(V,le);for(let Ae=0;Ae<Q.length;Ae++)Ue(Q[Ae],le);Q.length===2?ce(V,R,U):V.projectionMatrix.copy(R.projectionMatrix),_===null&&I.isPerspectiveCamera&&(_={camera:I,fov:I.fov,zoom:I.zoom}),Ne(I,V,le)};function Ne(I,S,Y){Y===null?I.matrix.copy(S.matrixWorld):(I.matrix.copy(Y.matrixWorld),I.matrix.invert(),I.matrix.multiply(S.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(S.projectionMatrix),I.projectionMatrixInverse.copy(S.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Wi*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&d===null))return A},this.setFoveation=function(I){A=I,u!==null&&(u.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(I){return f[I]};let ht=null;function ie(I,S){if(c=S.getViewerPose(l||o),m=S,c!==null){let Y=c.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let le=!1;Y.length!==V.cameras.length&&(V.cameras.length=0,le=!0);for(let Se=0;Se<Y.length;Se++){let Be=Y[Se],Fe=null;if(d!==null)Fe=d.getViewport(Be);else{let _e=h.getViewSubImage(u,Be);Fe=_e.viewport,Se===0&&(e.setRenderTargetTextures(M,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(M))}let Ge=B[Se];Ge===void 0&&(Ge=new Dt,Ge.layers.enable(Se),Ge.viewport=new ut,B[Se]=Ge),Ge.matrix.fromArray(Be.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Be.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Se===0&&(V.matrix.copy(Ge.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),le===!0&&V.cameras.push(Ge)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let Se=h.getDepthInformation(Y[0]);Se&&Se.isValid&&Se.texture&&p.init(Se,s.renderState)}if(Q&&Q.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let Se=0;Se<Y.length;Se++){let Be=Y[Se].camera;if(Be){let Fe=f[Be];Fe||(Fe=new Tr,f[Be]=Fe);let Ge=h.getCameraImage(Be);Fe.sourceTexture=Ge}}}}for(let Y=0;Y<w.length;Y++){let le=b[Y],Q=w[Y];le!==null&&Q!==void 0&&Q.update(le,S,l||o)}ht&&ht(I,S),S.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:S}),m=null}let oe=new Kh;oe.setAnimationLoop(ie),this.setAnimationLoop=function(I){ht=I},this.dispose=function(){}}},N0=new Xe,id=new Ve;id.set(-1,0,0,0,1,0,0,0,1);function O0(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ll(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,T,P,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),m(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),y(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?A(p,f,T,P):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Kt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Kt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let T=e.get(f),P=T.envMap,M=T.envMapRotation;P&&(p.envMap.value=P,p.envMapRotation.value.setFromMatrix4(N0.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(id),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function A(p,f,T,P){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=P*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,T){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){let T=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function A(M,w){let b=w.program;n.uniformBlockBinding(M,b)}function l(M,w){let b=s[M.id];b===void 0&&(p(M),b=c(M),s[M.id]=b,M.addEventListener("dispose",T));let E=w.program;n.updateUBOMapping(M,E);let v=e.render.frame;r[M.id]!==v&&(u(M),r[M.id]=v)}function c(M){let w=h();M.__bindingPointIndex=w;let b=i.createBuffer(),E=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let w=s[M.id],b=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,_=b.length;v<_;v++){let R=b[v];if(Array.isArray(R))for(let U=0,B=R.length;U<B;U++)d(R[U],v,U,E);else d(R,v,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,w,b,E){if(y(M,w,b,E)===!0){let v=M.__offset,_=M.value;if(Array.isArray(_)){let R=0;for(let U=0;U<_.length;U++){let B=_[U],V=f(B);m(B,M.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function m(M,w,b){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,b)}function y(M,w,b,E){let v=M.value,_=w+"_"+b;if(E[_]===void 0)return typeof v=="number"||typeof v=="boolean"?E[_]=v:ArrayBuffer.isView(v)?E[_]=v.slice():E[_]=v.clone(),!0;{let R=E[_];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return E[_]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function p(M){let w=M.uniforms,b=0,E=16;for(let _=0,R=w.length;_<R;_++){let U=Array.isArray(w[_])?w[_]:[w[_]];for(let B=0,V=U.length;B<V;B++){let O=U[B],X=Array.isArray(O.value)?O.value:[O.value];for(let $=0,K=X.length;$<K;$++){let de=X[$],te=f(de),ae=b%E,ce=ae%te.boundary,Ue=ae+ce;b+=ce,Ue!==0&&E-Ue<te.storage&&(b+=E-Ue),O.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=te.storage}}}let v=b%E;return v>0&&(b+=E-v),M.__size=b,M.__cache={},this}function f(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",M),w}function T(M){let w=M.target;w.removeEventListener("dispose",T);let b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function P(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:A,update:l,dispose:P}}var U0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function B0(){return Xn===null&&(Xn=new Cs(U0,16,16,Ii,Ln),Xn.name="DFG_LUT",Xn.minFilter=St,Xn.magFilter=St,Xn.wrapS=yn,Xn.wrapT=yn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var AA=class{constructor(e={}){let{canvas:t=vh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:A=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=an}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let y=d,p=new Set([ba,wa,Ta]),f=new Set([an,Rn,ks,Ws,Ma,xa]),T=new Uint32Array(4),P=new Int32Array(4),M=new L,w=null,b=null,E=[],v=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,B=null,V=null,O=null,X=null;this._outputColorSpace=Mt;let $=0,K=0,de=null,te=-1,ae=null,ce=new ut,Ue=new ut,Ne=null,ht=new je(0),ie=0,oe=t.width,I=t.height,S=1,Y=null,le=null,Q=new ut(0,0,oe,I),Ae=new ut(0,0,oe,I),Te=!1,Se=new Es,Be=!1,Fe=!1,Ge=new Xe,_e=new L,He=new ut,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function tt(){return de===null?S:1}let z=n;function _t(x,N){return t.getContext(x,N)}let it,C,g,F,G,ee,ge,ve,ne,se,Me,pe,xe,ye,j,q,he,D,re,H,fe,ue,Z;try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:A,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",lt,!1),z===null){let N="webgl2";if(z=_t(N,x),z===null)throw _t(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(x){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),We("WebGLRenderer: "+x.message),x}function we(){it=new Xg(z),it.init(),fe=new I0(z,it),C=new Og(z,it,e,fe),g=new E0(z,it),C.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),V=z.createFramebuffer(),O=z.createFramebuffer(),X=z.createFramebuffer(),F=new Qg(z),G=new p0,ee=new D0(z,it,g,G,C,fe,F),ge=new Vg(R),ve=new Jf(z),ue=new Lg(z,ve),ne=new Hg(z,ve,F,ue),se=new Jg(z,ne,ve,ue,F),D=new Zg(z,C,ee),j=new zg(G),Me=new f0(R,ge,it,C,ue,j),pe=new O0(R,G),xe=new g0,ye=new w0(it),he=new Rg(R,ge,g,se,m,A),q=new C0(R,se,C),Z=new z0(z,F,C,g),re=new Ng(z,it,F),H=new Yg(z,it,F),F.programs=Me.programs,R.capabilities=C,R.extensions=it,R.properties=G,R.renderLists=xe,R.shadowMap=q,R.state=g,R.info=F}y!==an&&(_=new qg(y,t.width,t.height,a,s,r));let me=new nc(R,z);this.xr=me,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let x=it.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=it.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return S},this.setPixelRatio=function(x){x!==void 0&&(S=x,this.setSize(oe,I,!1))},this.getSize=function(x){return x.set(oe,I)},this.setSize=function(x,N,J=!0){if(me.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=x,I=N,t.width=Math.floor(x*S),t.height=Math.floor(N*S),J===!0&&(t.style.width=x+"px",t.style.height=N+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(oe*S,I*S).floor()},this.setDrawingBufferSize=function(x,N,J){oe=x,I=N,S=J,t.width=Math.floor(x*J),t.height=Math.floor(N*J),this.setViewport(0,0,x,N)},this.setEffects=function(x){if(y===an){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let N=0;N<x.length;N++)if(x[N].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ce)},this.getViewport=function(x){return x.copy(Q)},this.setViewport=function(x,N,J,k){x.isVector4?Q.set(x.x,x.y,x.z,x.w):Q.set(x,N,J,k),g.viewport(ce.copy(Q).multiplyScalar(S).round())},this.getScissor=function(x){return x.copy(Ae)},this.setScissor=function(x,N,J,k){x.isVector4?Ae.set(x.x,x.y,x.z,x.w):Ae.set(x,N,J,k),g.scissor(Ue.copy(Ae).multiplyScalar(S).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(x){g.setScissorTest(Te=x)},this.setOpaqueSort=function(x){Y=x},this.setTransparentSort=function(x){le=x},this.getClearColor=function(x){return x.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,J=!0){let k=0;if(x){let W=!1;if(de!==null){let Ce=de.texture.format;W=p.has(Ce)}if(W){let Ce=de.texture.type,Ie=f.has(Ce),Pe=he.getClearColor(),Re=he.getClearAlpha(),Oe=Pe.r,Qe=Pe.g,$e=Pe.b;Ie?(T[0]=Oe,T[1]=Qe,T[2]=$e,T[3]=Re,z.clearBufferuiv(z.COLOR,0,T)):(P[0]=Oe,P[1]=Qe,P[2]=$e,P[3]=Re,z.clearBufferiv(z.COLOR,0,P))}else k|=z.COLOR_BUFFER_BIT}N&&(k|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(k|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&z.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),B=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),he.dispose(),xe.dispose(),ye.dispose(),G.dispose(),ge.dispose(),se.dispose(),ue.dispose(),Z.dispose(),Me.dispose(),me.dispose(),me.removeEventListener("sessionstart",Bc),me.removeEventListener("sessionend",Fc),Ni.stop()};function ke(x){x.preventDefault(),cr("WebGLRenderer: Context Lost."),U=!0}function Ye(){cr("WebGLRenderer: Context Restored."),U=!1;let x=F.autoReset,N=q.enabled,J=q.autoUpdate,k=q.needsUpdate,W=q.type;we(),F.autoReset=x,q.enabled=N,q.autoUpdate=J,q.needsUpdate=k,q.type=W}function lt(x){We("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Tt(x){let N=x.target;N.removeEventListener("dispose",Tt),Rt(N)}function Rt(x){Yt(x),G.remove(x)}function Yt(x){let N=G.get(x).programs;N!==void 0&&(N.forEach(function(J){Me.releaseProgram(J)}),x.isShaderMaterial&&Me.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,J,k,W,Ce){N===null&&(N=rt);let Ie=W.isMesh&&W.matrixWorld.determinantAffine()<0,Pe=gd(x,N,J,k,W);g.setMaterial(k,Ie);let Re=J.index,Oe=1;if(k.wireframe===!0){if(Re=ne.getWireframeAttribute(J),Re===void 0)return;Oe=2}let Qe=J.drawRange,$e=J.attributes.position,Le=Qe.start*Oe,ot=(Qe.start+Qe.count)*Oe;Ce!==null&&(Le=Math.max(Le,Ce.start*Oe),ot=Math.min(ot,(Ce.start+Ce.count)*Oe)),Re!==null?(Le=Math.max(Le,0),ot=Math.min(ot,Re.count)):$e!=null&&(Le=Math.max(Le,0),ot=Math.min(ot,$e.count));let Ct=ot-Le;if(Ct<0||Ct===1/0)return;ue.setup(W,k,Pe,J,Re);let vt,ft=re;if(Re!==null&&(vt=ve.get(Re),ft=H,ft.setIndex(vt)),W.isMesh)k.wireframe===!0?(g.setLineWidth(k.wireframeLinewidth*tt()),ft.setMode(z.LINES)):ft.setMode(z.TRIANGLES);else if(W.isLine){let kt=k.linewidth;kt===void 0&&(kt=1),g.setLineWidth(kt*tt()),W.isLineSegments?ft.setMode(z.LINES):W.isLineLoop?ft.setMode(z.LINE_LOOP):ft.setMode(z.LINE_STRIP)}else W.isPoints?ft.setMode(z.POINTS):W.isSprite&&ft.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(it.get("WEBGL_multi_draw"))ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let kt=W._multiDrawStarts,De=W._multiDrawCounts,Qt=W._multiDrawCount,nt=Re?ve.get(Re).bytesPerElement:1,Mn=G.get(k).currentProgram.getUniforms();for(let On=0;On<Qt;On++)Mn.setValue(z,"_gl_DrawID",On),ft.render(kt[On]/nt,De[On])}else if(W.isInstancedMesh)ft.renderInstances(Le,Ct,W.count);else if(J.isInstancedBufferGeometry){let kt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,De=Math.min(J.instanceCount,kt);ft.renderInstances(Le,Ct,De)}else ft.render(Le,Ct)};function Nn(x,N,J,k){B!==null&&x.isNodeMaterial&&B.setObject(k,x),Be===!0&&j.setState(x,J,!1),x.transparent===!0&&x.side===Ft&&x.forceSinglePass===!1?(x.side=Kt,x.needsUpdate=!0,io(x,N,k),x.side=Gn,x.needsUpdate=!0,io(x,N,k),x.side=Ft):io(x,N,k)}this.compile=function(x,N,J=null){J===null&&(J=x),B!==null&&B.renderStart(x,N,J),b=ye.get(J),b.init(N),v.push(b),J.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),x!==J&&x.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),Fe=this.localClippingEnabled,Be=j.init(this.clippingPlanes,Fe),Be===!0&&j.setGlobalState(this.clippingPlanes,N),B!==null&&q.render(b.state.shadowsArray,J,N);let k=new Set;return x.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ce=W.material;if(Ce)if(Array.isArray(Ce))for(let Ie=0;Ie<Ce.length;Ie++){let Pe=Ce[Ie];Nn(Pe,J,N,W),k.add(Pe)}else Nn(Ce,J,N,W),k.add(Ce)}),b=v.pop(),B!==null&&B.renderEnd(),k},this.compileAsync=function(x,N,J=null){let k=this.compile(x,N,J);return new Promise(W=>{function Ce(){if(k.forEach(function(Ie){let Re=G.get(Ie).currentProgram;(Re===void 0||Re.isReady())&&k.delete(Ie)}),k.size===0){W(x);return}setTimeout(Ce,10)}it.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let mA=null;function pd(x){mA&&mA(x)}function Bc(){Ni.stop()}function Fc(){Ni.start()}let Ni=new Kh;Ni.setAnimationLoop(pd),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(x){mA=x,me.setAnimationLoop(x),x===null?Ni.stop():Ni.start()},me.addEventListener("sessionstart",Bc),me.addEventListener("sessionend",Fc),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;B!==null&&B.renderStart(x,N);let J=me.enabled===!0&&me.isPresenting===!0,k=_!==null&&(de===null||J)&&_.begin(R,de);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(N),N=me.getCamera()),x.isScene===!0&&x.onBeforeRender(R,x,N,de),b=ye.get(x,v.length),b.init(N),b.state.textureUnits=ee.getTextureUnits(),v.push(b),Ge.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Se.setFromProjectionMatrix(Ge,En,N.reversedDepth),Fe=this.localClippingEnabled,Be=j.init(this.clippingPlanes,Fe),w=xe.get(x,E.length),w.init(),E.push(w),me.enabled===!0&&me.isPresenting===!0){let Ie=R.xr.getDepthSensingMesh();Ie!==null&&gA(Ie,N,-1/0,R.sortObjects)}gA(x,N,0,R.sortObjects),w.finish(),B!==null&&B.updateLights(b.state.lightsArray),R.sortObjects===!0&&w.sort(Y,le),et=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,et&&he.addToRenderList(w,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&j.beginShadows();let W=b.state.shadowsArray;if(q.render(W,x,N),Be===!0&&j.endShadows(),(k&&_.hasRenderPass())===!1){let Ie=w.opaque,Pe=w.transmissive;if(b.setupLights(),N.isArrayCamera){let Re=N.cameras;if(Pe.length>0)for(let Oe=0,Qe=Re.length;Oe<Qe;Oe++){let $e=Re[Oe];kc(Ie,Pe,x,$e)}et&&he.render(x);for(let Oe=0,Qe=Re.length;Oe<Qe;Oe++){let $e=Re[Oe];jc(w,x,$e,$e.viewport)}}else Pe.length>0&&kc(Ie,Pe,x,N),et&&he.render(x),jc(w,x,N)}de!==null&&K===0&&(ee.updateMultisampleRenderTarget(de),ee.updateRenderTargetMipmap(de)),k&&_.end(R),x.isScene===!0&&x.onAfterRender(R,x,N),ue.resetDefaultState(),te=-1,ae=null,v.pop(),v.length>0?(b=v[v.length-1],ee.setTextureUnits(b.state.textureUnits),Be===!0&&j.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?w=E[E.length-1]:w=null,B!==null&&B.renderEnd()};function gA(x,N,J,k){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)J=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Se)){k&&He.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ge);let Ie=se.update(x),Pe=x.material;Pe.visible&&w.push(x,Ie,Pe,J,He.z,null,N)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(Se))){let Ie=se.update(x),Pe=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),He.copy(x.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),He.copy(Ie.boundingSphere.center)),He.applyMatrix4(x.matrixWorld).applyMatrix4(Ge)),Array.isArray(Pe)){let Re=Ie.groups;for(let Oe=0,Qe=Re.length;Oe<Qe;Oe++){let $e=Re[Oe],Le=Pe[$e.materialIndex];Le&&Le.visible&&w.push(x,Ie,Le,J,He.z,$e,N)}}else Pe.visible&&w.push(x,Ie,Pe,J,He.z,null,N)}}let Ce=x.children;for(let Ie=0,Pe=Ce.length;Ie<Pe;Ie++)gA(Ce[Ie],N,J,k)}function jc(x,N,J,k){let{opaque:W,transmissive:Ce,transparent:Ie}=x;b.setupLightsView(J),Be===!0&&j.setGlobalState(R.clippingPlanes,J),k&&g.viewport(ce.copy(k)),W.length>0&&no(W,N,J),Ce.length>0&&no(Ce,N,J),Ie.length>0&&no(Ie,N,J),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function kc(x,N,J,k){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){let Le=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new en(1,1,{generateMipmaps:!0,type:Le?Ln:an,minFilter:In,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let Ce=b.state.transmissionRenderTarget[k.id],Ie=k.viewport||ce;Ce.setSize(Ie.z*R.transmissionResolutionScale,Ie.w*R.transmissionResolutionScale);let Pe=R.getRenderTarget(),Re=R.getActiveCubeFace(),Oe=R.getActiveMipmapLevel();R.setRenderTarget(Ce),R.getClearColor(ht),ie=R.getClearAlpha(),ie<1&&R.setClearColor(16777215,.5),R.clear(),et&&he.render(J);let Qe=R.toneMapping;R.toneMapping=Dn;let $e=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),Be===!0&&j.setGlobalState(R.clippingPlanes,k),no(x,J,k),ee.updateMultisampleRenderTarget(Ce),ee.updateRenderTargetMipmap(Ce),it.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ot=0,Ct=N.length;ot<Ct;ot++){let vt=N[ot],{object:ft,geometry:kt,material:De,group:Qt}=vt;if(De.side===Ft&&ft.layers.test(k.layers)){let nt=De.side;De.side=Kt,De.needsUpdate=!0,Wc(ft,J,k,kt,De,Qt),De.side=nt,De.needsUpdate=!0,Le=!0}}Le===!0&&(ee.updateMultisampleRenderTarget(Ce),ee.updateRenderTargetMipmap(Ce))}R.setRenderTarget(Pe,Re,Oe),R.setClearColor(ht,ie),$e!==void 0&&(k.viewport=$e),R.toneMapping=Qe}function no(x,N,J){let k=N.isScene===!0?N.overrideMaterial:null;for(let W=0,Ce=x.length;W<Ce;W++){let Ie=x[W],{object:Pe,geometry:Re,group:Oe}=Ie,Qe=Ie.material;Qe.allowOverride===!0&&k!==null&&(Qe=k),Pe.layers.test(J.layers)&&Wc(Pe,N,J,Re,Qe,Oe)}}function Wc(x,N,J,k,W,Ce){B!==null&&W.isNodeMaterial&&B.setObject(x,W),x.onBeforeRender(R,N,J,k,W,Ce),x.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),W.onBeforeRender(R,N,J,k,x,Ce),W.transparent===!0&&W.side===Ft&&W.forceSinglePass===!1?(W.side=Kt,W.needsUpdate=!0,R.renderBufferDirect(J,N,k,W,x,Ce),W.side=Gn,W.needsUpdate=!0,R.renderBufferDirect(J,N,k,W,x,Ce),W.side=Ft):R.renderBufferDirect(J,N,k,W,x,Ce),x.onAfterRender(R,N,J,k,W,Ce)}function io(x,N,J){N.isScene!==!0&&(N=rt);let k=G.get(x),W=b.state.lights,Ce=b.state.shadowsArray,Ie=W.state.version,Pe=Me.getParameters(x,W.state,Ce,N,J,b.state.lightProbeGridArray),Re=Me.getProgramCacheKey(Pe),Oe=k.programs;k.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;let Qe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;k.envMap=ge.get(x.envMap||k.environment,Qe),k.envMapRotation=k.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Oe===void 0&&(x.addEventListener("dispose",Tt),Oe=new Map,k.programs=Oe);let $e=Oe.get(Re);if($e!==void 0){if(k.currentProgram===$e&&k.lightsStateVersion===Ie)return Vc(x,Pe),$e}else Pe.uniforms=Me.getUniforms(x),B!==null&&x.isNodeMaterial&&B.build(x,J,Pe),x.onBeforeCompile(Pe,R),$e=Me.acquireProgram(Pe,Re),Oe.set(Re,$e),k.uniforms=Pe.uniforms;let Le=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Le.clippingPlanes=j.uniform),Vc(x,Pe),k.needsLights=Md(x),k.lightsStateVersion=Ie,k.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.sunLights.value=W.state.sun,Le.sunLightShadows.value=W.state.sunShadow,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.sunShadowMatrix.value=W.state.sunShadowMatrix,Le.sunShadowCascade.value=W.state.sunShadowCascade,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=$e,k.uniformsList=null,$e}function Gc(x){if(x.uniformsList===null){let N=x.currentProgram.getUniforms();x.uniformsList=Hs.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function Vc(x,N){let J=G.get(x);J.outputColorSpace=N.outputColorSpace,J.batching=N.batching,J.batchingColor=N.batchingColor,J.instancing=N.instancing,J.instancingColor=N.instancingColor,J.instancingMorph=N.instancingMorph,J.skinning=N.skinning,J.morphTargets=N.morphTargets,J.morphNormals=N.morphNormals,J.morphColors=N.morphColors,J.morphTargetsCount=N.morphTargetsCount,J.numClippingPlanes=N.numClippingPlanes,J.numIntersection=N.numClipIntersection,J.vertexAlphas=N.vertexAlphas,J.vertexTangents=N.vertexTangents,J.toneMapping=N.toneMapping}function md(x,N){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let J=0,k=x.length;J<k;J++){let W=x[J];if(W.texture!==null&&W.boundingBox.containsPoint(M))return W}return null}function gd(x,N,J,k,W){N.isScene!==!0&&(N=rt),ee.resetTextureUnits();let Ce=N.fog,Ie=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,Pe=de===null?R.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Je.workingColorSpace,Re=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Oe=ge.get(k.envMap||Ie,Re),Qe=k.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,$e=!!J.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Le=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,Ct=!!J.morphAttributes.color,vt=Dn;k.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(vt=R.toneMapping);let ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,kt=ft!==void 0?ft.length:0,De=G.get(k),Qt=b.state.lights;if(Be===!0&&(Fe===!0||x!==ae)){let mt=x===ae&&k.id===te;j.setState(k,x,mt)}let nt=!1;k.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Qt.state.version||De.outputColorSpace!==Pe||W.isBatchedMesh&&De.batching===!1||!W.isBatchedMesh&&De.batching===!0||W.isBatchedMesh&&De.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&De.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&De.instancing===!1||!W.isInstancedMesh&&De.instancing===!0||W.isSkinnedMesh&&De.skinning===!1||!W.isSkinnedMesh&&De.skinning===!0||W.isInstancedMesh&&De.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&De.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&De.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&De.instancingMorph===!1&&W.morphTexture!==null||De.envMap!==Oe||k.fog===!0&&De.fog!==Ce||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==j.numPlanes||De.numIntersection!==j.numIntersection)||De.vertexAlphas!==Qe||De.vertexTangents!==$e||De.morphTargets!==Le||De.morphNormals!==ot||De.morphColors!==Ct||De.toneMapping!==vt||De.morphTargetsCount!==kt||!!De.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,De.__version=k.version);let Mn=De.currentProgram;nt===!0&&(Mn=io(k,N,W),B&&k.isNodeMaterial&&B.onUpdateProgram(k,Mn,De));let On=!1,hi=!1,$i=!1,dt=Mn.getUniforms(),wt=De.uniforms;if(g.useProgram(Mn.program)&&(On=!0,hi=!0,$i=!0),k.id!==te&&(te=k.id,hi=!0),De.needsLights){let mt=md(b.state.lightProbeGridArray,W);De.lightProbeGrid!==mt&&(De.lightProbeGrid=mt,hi=!0)}if(On||ae!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),dt.setValue(z,"projectionMatrix",x.projectionMatrix),dt.setValue(z,"viewMatrix",x.matrixWorldInverse);let fi=dt.map.cameraPosition;fi!==void 0&&fi.setValue(z,_e.setFromMatrixPosition(x.matrixWorld)),C.logarithmicDepthBuffer&&dt.setValue(z,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&dt.setValue(z,"isOrthographic",x.isOrthographicCamera===!0),ae!==x&&(ae=x,hi=!0,$i=!0)}if(De.needsLights&&(Qt.state.sunShadowMap.length>0&&dt.setValue(z,"sunShadowMap",Qt.state.sunShadowMap,ee),Qt.state.directionalShadowMap.length>0&&dt.setValue(z,"directionalShadowMap",Qt.state.directionalShadowMap,ee),Qt.state.spotShadowMap.length>0&&dt.setValue(z,"spotShadowMap",Qt.state.spotShadowMap,ee),Qt.state.pointShadowMap.length>0&&dt.setValue(z,"pointShadowMap",Qt.state.pointShadowMap,ee)),W.isSkinnedMesh){dt.setOptional(z,W,"bindMatrix"),dt.setOptional(z,W,"bindMatrixInverse");let mt=W.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),dt.setValue(z,"boneTexture",mt.boneTexture,ee))}W.isBatchedMesh&&(dt.setOptional(z,W,"batchingTexture"),dt.setValue(z,"batchingTexture",W._matricesTexture,ee),dt.setOptional(z,W,"batchingIdTexture"),dt.setValue(z,"batchingIdTexture",W._indirectTexture,ee),dt.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&dt.setValue(z,"batchingColorTexture",W._colorsTexture,ee));let di=J.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&D.update(W,J,Mn),(hi||De.receiveShadow!==W.receiveShadow)&&(De.receiveShadow=W.receiveShadow,dt.setValue(z,"receiveShadow",W.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(wt.envMapIntensity.value=N.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=B0()),hi){if(dt.setValue(z,"toneMappingExposure",R.toneMappingExposure),De.needsLights&&vd(wt,$i),Ce&&k.fog===!0&&pe.refreshFogUniforms(wt,Ce),pe.refreshMaterialUniforms(wt,k,S,I,b.state.transmissionRenderTarget[x.id]),De.needsLights&&De.lightProbeGrid){let mt=De.lightProbeGrid;wt.probesSH.value=mt.texture,wt.probesMin.value.copy(mt.boundingBox.min),wt.probesMax.value.copy(mt.boundingBox.max),wt.probesResolution.value.copy(mt.resolution)}Hs.upload(z,Gc(De),wt,ee)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Hs.upload(z,Gc(De),wt,ee),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&dt.setValue(z,"center",W.center),dt.setValue(z,"modelViewMatrix",W.modelViewMatrix),dt.setValue(z,"normalMatrix",W.normalMatrix),dt.setValue(z,"modelMatrix",W.matrixWorld),k.uniformsGroups!==void 0){let mt=k.uniformsGroups;for(let fi=0,es=mt.length;fi<es;fi++){let Hc=mt[fi];Z.update(Hc,Mn),Z.bind(Hc,Mn)}}return Mn}function vd(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.sunLights.needsUpdate=N,x.sunLightShadows.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Md(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(x,N,J){let k=G.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(x.texture).__webglTexture=N,G.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:J,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){let J=G.get(x);J.__webglFramebuffer=N,J.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(x,N=0,J=0){de=x,$=N,K=J;let k=null,W=!1,Ce=!1;if(x){let Pe=G.get(x);if(Pe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(z.FRAMEBUFFER,Pe.__webglFramebuffer),ce.copy(x.viewport),Ue.copy(x.scissor),Ne=x.scissorTest,g.viewport(ce),g.scissor(Ue),g.setScissorTest(Ne),te=-1;return}else if(Pe.__webglFramebuffer===void 0)ee.setupRenderTarget(x);else if(Pe.__hasExternalTextures)ee.rebindTextures(x,G.get(x.texture).__webglTexture,G.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Qe=x.depthTexture;if(Pe.__boundDepthTexture!==Qe){if(Qe!==null&&G.has(Qe)&&(x.width!==Qe.image.width||x.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(x)}}let Re=x.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Ce=!0);let Oe=G.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?k=Oe[N][J]:k=Oe[N],W=!0):x.samples>0&&ee.useMultisampledRTT(x)===!1?k=G.get(x).__webglMultisampledFramebuffer:Array.isArray(Oe)?k=Oe[J]:k=Oe,ce.copy(x.viewport),Ue.copy(x.scissor),Ne=x.scissorTest}else ce.copy(Q).multiplyScalar(S).floor(),Ue.copy(Ae).multiplyScalar(S).floor(),Ne=Te;if(J!==0&&(k=V),g.bindFramebuffer(z.FRAMEBUFFER,k)&&g.drawBuffers(x,k),g.viewport(ce),g.scissor(Ue),g.setScissorTest(Ne),W){let Pe=G.get(x.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pe.__webglTexture,J)}else if(Ce){let Pe=N;for(let Re=0;Re<x.textures.length;Re++){let Oe=G.get(x.textures[Re]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Re,Oe.__webglTexture,J,Pe)}}else if(x!==null&&J!==0){let Pe=G.get(x.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Pe.__webglTexture,J)}te=-1};function Xc(x){let N=G.get(x);return(N.__readFormat!==x.format||N.__readType!==x.type)&&(N.__readFormat=x.format,N.__readType=x.type,N.__formatReadable=C.textureFormatReadable(x.format),N.__typeReadable=C.textureTypeReadable(x.type)),N}this.readRenderTargetPixels=function(x,N,J,k,W,Ce,Ie,Pe=0){if(!(x&&x.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ie!==void 0&&(Re=Re[Ie]),Re){g.bindFramebuffer(z.FRAMEBUFFER,Re);try{let Oe=x.textures[Pe],Qe=Oe.format,$e=Oe.type;x.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Pe);let Le=Xc(Oe);if(Le.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-k&&J>=0&&J<=x.height-W&&z.readPixels(N,J,k,W,fe.convert(Qe),fe.convert($e),Ce)}finally{let Oe=de!==null?G.get(de).__webglFramebuffer:null;g.bindFramebuffer(z.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(x,N,J,k,W,Ce,Ie,Pe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ie!==void 0&&(Re=Re[Ie]),Re)if(N>=0&&N<=x.width-k&&J>=0&&J<=x.height-W){g.bindFramebuffer(z.FRAMEBUFFER,Re);let Oe=x.textures[Pe],Qe=Oe.format,$e=Oe.type;x.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Pe);let Le=Xc(Oe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ot),z.bufferData(z.PIXEL_PACK_BUFFER,Ce.byteLength,z.STREAM_READ),z.readPixels(N,J,k,W,fe.convert(Qe),fe.convert($e),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ct=de!==null?G.get(de).__webglFramebuffer:null;g.bindFramebuffer(z.FRAMEBUFFER,Ct);let vt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await xh(z,vt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ot),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ce),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ot),z.deleteSync(vt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,J=0){let k=Math.pow(2,-J),W=Math.floor(x.image.width*k),Ce=Math.floor(x.image.height*k),Ie=N!==null?N.x:0,Pe=N!==null?N.y:0;ee.setTexture2D(x,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,Ie,Pe,W,Ce),g.unbindTexture()},this.copyTextureToTexture=function(x,N,J=null,k=null,W=0,Ce=0){let Ie,Pe,Re,Oe,Qe,$e,Le,ot,Ct,vt=x.isCompressedTexture?x.mipmaps[Ce]:x.image;if(J!==null)Ie=J.max.x-J.min.x,Pe=J.max.y-J.min.y,Re=J.isBox3?J.max.z-J.min.z:1,Oe=J.min.x,Qe=J.min.y,$e=J.isBox3?J.min.z:0;else{let wt=Math.pow(2,-W);Ie=Math.floor(vt.width*wt),Pe=Math.floor(vt.height*wt),x.isDataArrayTexture?Re=vt.depth:x.isData3DTexture?Re=Math.floor(vt.depth*wt):Re=1,Oe=0,Qe=0,$e=0}k!==null?(Le=k.x,ot=k.y,Ct=k.z):(Le=0,ot=0,Ct=0);let ft=fe.convert(N.format),kt=fe.convert(N.type),De;N.isData3DTexture?(ee.setTexture3D(N,0),De=z.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ee.setTexture2DArray(N,0),De=z.TEXTURE_2D_ARRAY):(ee.setTexture2D(N,0),De=z.TEXTURE_2D),g.activeTexture(z.TEXTURE0),g.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(z.UNPACK_ALIGNMENT,N.unpackAlignment);let Qt=g.getParameter(z.UNPACK_ROW_LENGTH),nt=g.getParameter(z.UNPACK_IMAGE_HEIGHT),Mn=g.getParameter(z.UNPACK_SKIP_PIXELS),On=g.getParameter(z.UNPACK_SKIP_ROWS),hi=g.getParameter(z.UNPACK_SKIP_IMAGES);g.pixelStorei(z.UNPACK_ROW_LENGTH,vt.width),g.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt.height),g.pixelStorei(z.UNPACK_SKIP_PIXELS,Oe),g.pixelStorei(z.UNPACK_SKIP_ROWS,Qe),g.pixelStorei(z.UNPACK_SKIP_IMAGES,$e);let $i=x.isDataArrayTexture||x.isData3DTexture,dt=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){let wt=G.get(x),di=G.get(N),mt=G.get(wt.__renderTarget),fi=G.get(di.__renderTarget);g.bindFramebuffer(z.READ_FRAMEBUFFER,mt.__webglFramebuffer),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let es=0;es<Re;es++)$i&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,G.get(x).__webglTexture,W,$e+es),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,G.get(N).__webglTexture,Ce,Ct+es)),z.blitFramebuffer(Oe,Qe,Ie,Pe,Le,ot,Ie,Pe,z.DEPTH_BUFFER_BIT,z.NEAREST);g.bindFramebuffer(z.READ_FRAMEBUFFER,null),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||x.isRenderTargetTexture||G.has(x)){let wt=G.get(x),di=G.get(N);g.bindFramebuffer(z.READ_FRAMEBUFFER,O),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,X);for(let mt=0;mt<Re;mt++)$i?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,wt.__webglTexture,W,$e+mt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,wt.__webglTexture,W),dt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,di.__webglTexture,Ce,Ct+mt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,di.__webglTexture,Ce),W!==0?z.blitFramebuffer(Oe,Qe,Ie,Pe,Le,ot,Ie,Pe,z.COLOR_BUFFER_BIT,z.NEAREST):dt?z.copyTexSubImage3D(De,Ce,Le,ot,Ct+mt,Oe,Qe,Ie,Pe):z.copyTexSubImage2D(De,Ce,Le,ot,Oe,Qe,Ie,Pe);g.bindFramebuffer(z.READ_FRAMEBUFFER,null),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else dt?x.isDataTexture||x.isData3DTexture?z.texSubImage3D(De,Ce,Le,ot,Ct,Ie,Pe,Re,ft,kt,vt.data):N.isCompressedArrayTexture?z.compressedTexSubImage3D(De,Ce,Le,ot,Ct,Ie,Pe,Re,ft,vt.data):z.texSubImage3D(De,Ce,Le,ot,Ct,Ie,Pe,Re,ft,kt,vt):x.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ce,Le,ot,Ie,Pe,ft,kt,vt.data):x.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ce,Le,ot,vt.width,vt.height,ft,vt.data):z.texSubImage2D(z.TEXTURE_2D,Ce,Le,ot,Ie,Pe,ft,kt,vt);g.pixelStorei(z.UNPACK_ROW_LENGTH,Qt),g.pixelStorei(z.UNPACK_IMAGE_HEIGHT,nt),g.pixelStorei(z.UNPACK_SKIP_PIXELS,Mn),g.pixelStorei(z.UNPACK_SKIP_ROWS,On),g.pixelStorei(z.UNPACK_SKIP_IMAGES,hi),Ce===0&&N.generateMipmaps&&z.generateMipmap(De),g.unbindTexture()},this.initRenderTarget=function(x){G.get(x).__webglFramebuffer===void 0&&ee.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?ee.setTextureCube(x,0):x.isData3DTexture?ee.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?ee.setTexture2DArray(x,0):ee.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){$=0,K=0,de=null,g.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};function ic(i,e){if(e===_l)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Gs||e===Jr){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Gs)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function sd(i){let e=new Map,t=new Map,n=i.clone();return rd(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(A){return t.get(A)}),r.bind(r.skeleton,r.bindMatrix)}),n}function rd(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)rd(i.children[n],e.children[n],t)}var uA=class extends Wn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cc(t)}),this.register(function(t){return new uc(t)}),this.register(function(t){return new xc(t)}),this.register(function(t){return new yc(t)}),this.register(function(t){return new Tc(t)}),this.register(function(t){return new dc(t)}),this.register(function(t){return new fc(t)}),this.register(function(t){return new pc(t)}),this.register(function(t){return new mc(t)}),this.register(function(t){return new lc(t)}),this.register(function(t){return new gc(t)}),this.register(function(t){return new hc(t)}),this.register(function(t){return new Mc(t)}),this.register(function(t){return new vc(t)}),this.register(function(t){return new ac(t)}),this.register(function(t){return new hA(t,qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new hA(t,qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new wc(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=li.extractUrlBase(e);o=li.resolveURL(l,this.path)}else o=li.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},A=new zs(this.manager);A.setPath(this.path),A.setResponseType("arraybuffer"),A.setRequestHeader(this.requestHeader),A.setWithCredentials(this.withCredentials),A.load(e,function(l){try{r.parse(l,o,function(c){t(c),r.manager.itemEnd(e)},a)}catch(c){a(c)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},A=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(A.decode(new Uint8Array(e,0,4))===cd){try{o[qe.KHR_BINARY_GLTF]=new bc(e)}catch(h){s&&s(h);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(A.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ic(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let h=this.pluginCallbacks[c](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){let h=r.extensionsUsed[c],u=r.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:o[h]=new Ac;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new Sc(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[h]=new Pc;break;case qe.KHR_MESH_QUANTIZATION:o[h]=new _c;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function j0(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Pt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ac=class{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,A=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,c=new je(16777215);A.color!==void 0&&c.setRGB(A.color[0],A.color[1],A.color[2],Jt);let h=A.range!==void 0?A.range:0;switch(A.type){case"directional":l=new Hi(c),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Br(c),l.distance=h;break;case"spot":l=new Ur(c),l.distance=h,A.spot=A.spot||{},A.spot.innerConeAngle=A.spot.innerConeAngle!==void 0?A.spot.innerConeAngle:0,A.spot.outerConeAngle=A.spot.outerConeAngle!==void 0?A.spot.outerConeAngle:Math.PI/4,l.angle=A.spot.outerConeAngle,l.penumbra=1-A.spot.innerConeAngle/A.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+A.type)}return l.position.set(0,0,0),Yn(l,A),A.intensity!==void 0&&(l.intensity=A.intensity),l.name=t.createUniqueName(A.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(A){return n._getNodeRef(t.cache,a,A)})}},Ac=class{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,n){let s=[];e.color=new je(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(s)}},lc=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},cc=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(r,r)}return Promise.all(s)}},uc=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},hc=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},dc=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new je(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Jt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Mt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},fc=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},pc=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new je().setRGB(r[0],r[1],r[2],Jt),Promise.all(s)}},mc=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},gc=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new je().setRGB(r[0],r[1],r[2],Jt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Mt)),Promise.all(s)}},vc=class{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Mc=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},xc=class{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},yc=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],A=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(A=l)}return n.loadTextureImage(e,o.source,A)}},Tc=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],A=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(A=l)}return n.loadTextureImage(e,o.source,A)}},hA=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let A=s.byteOffset||0,l=s.byteLength||0,c=s.count,h=s.byteStride,u=new Uint8Array(a,A,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(c,h,u,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(c*h);return o.decodeGltfBuffer(new Uint8Array(d),c,h,u,s.mode,s.filter),d})})}else return null}},wc=class{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==wn.TRIANGLES&&l.mode!==wn.TRIANGLE_STRIP&&l.mode!==wn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],A={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(c=>(A[l]=c,A[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,d=[];for(let m of h){let y=new Xe,p=new L,f=new hn,T=new L(1,1,1),P=new sn(m.geometry,m.material,u);for(let w=0;w<u;w++)A.TRANSLATION&&p.fromBufferAttribute(A.TRANSLATION,w),A.ROTATION&&f.fromBufferAttribute(A.ROTATION,w),A.SCALE&&T.fromBufferAttribute(A.SCALE,w),P.setMatrixAt(w,y.compose(p,f,T));let M=null;for(let w in A)if(w==="_COLOR_0"){let b=A[w];P.instanceColor=new ni(b.array,b.itemSize,b.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(M===null){let E=P.geometry;M=new yt,M.name=E.name;for(let v in E.attributes)M.setAttribute(v,E.attributes[v]);for(let v in E.morphAttributes)M.morphAttributes[v]=E.morphAttributes[v];E.index!==null&&M.setIndex(E.index),M.morphTargetsRelative=E.morphTargetsRelative;for(let v of E.groups)M.addGroup(v.start,v.count,v.materialIndex);E.boundingBox!==null&&(M.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(M.boundingSphere=E.boundingSphere.clone()),M.drawRange.start=E.drawRange.start,M.drawRange.count=E.drawRange.count,M.userData=Object.assign({},E.userData),P.geometry=M}let b=A[w];M.setAttribute(w,new ni(b.array,b.itemSize,b.normalized))}gt.prototype.copy.call(P,m),this.parser.assignFinalMaterial(P),d.push(P)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}},cd="glTF",eo=12,od={JSON:1313821514,BIN:5130562},bc=class{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,eo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-eo,r=new DataView(e,eo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let A=r.getUint32(o,!0);if(o+=4,A===od.JSON){let l=new Uint8Array(e,eo+o,a);this.content=n.decode(l)}else if(A===od.BIN){let l=eo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Sc=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},A={},l={};for(let c in o){let h=Ec[c]||c.toLowerCase();a[h]=o[c]}for(let c in e.attributes){let h=Ec[c]||c.toLowerCase();if(o[c]!==void 0){let u=n.accessors[e.attributes[c]],d=Qs[u.componentType];l[h]=d.name,A[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(c){return new Promise(function(h,u){s.decodeDracoFile(c,function(d){for(let m in d.attributes){let y=d.attributes[m],p=A[m];p!==void 0&&(y.normalized=p)}h(d)},a,l,Jt,u)})})}},Pc=class{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},_c=class{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}},dA=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=a*2,l=a*3,c=s-t,h=(n-t)/c,u=h*h,d=u*h,m=e*l,y=m-l,p=-2*d+3*u,f=d-u,T=1-p,P=f-u+h;for(let M=0;M!==a;M++){let w=o[y+M+a],b=o[y+M+A]*c,E=o[m+M+a],v=o[m+M]*c;r[M]=T*w+P*b+p*E+f*v}return r}},k0=new hn,Cc=class extends dA{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return k0.fromArray(r).normalize().toArray(r),r}},wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ad={9728:bt,9729:St,9984:ga,9985:js,9986:Zi,9987:In},Ad={33071:yn,33648:vs,10497:Bn},sc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ec={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},W0={CUBICSPLINE:void 0,LINEAR:ki,STEP:ji},rc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function G0(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new si({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),i.DefaultMaterial}function qi(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function V0(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,c=e.length;l<c;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],A=[];for(let l=0,c=e.length;l<c;l++){let h=e[l];if(n){let u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(u)}if(s){let u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(u)}if(r){let u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;A.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(A)]).then(function(l){let c=l[0],h=l[1],u=l[2];return n&&(i.morphAttributes.position=c),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function X0(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function H0(i){let e,t=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oc(t.attributes):e=i.indices+":"+oc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+oc(i.targets[n]);return e}function oc(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Dc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Y0(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Q0=new Xe,Ic=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new j0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let A=a.match(/Version\/(\d+)/);s=n&&A?parseInt(A[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Nr(this.options.manager):this.textureLoader=new Fr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return qi(r,a,s),Yn(a,s),Promise.all(n._invokeAll(function(A){return A.afterRoot&&A.afterRoot(a)})).then(function(){for(let A of a.scenes)A.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,A=o.length;a<A;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let A=this.associations.get(o);A!=null&&this.associations.set(a,A);for(let[l,c]of o.children.entries())r(c,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(li.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=sc[s.type],a=Qs[s.componentType],A=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Lt(l,o,A))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],A=sc[s.type],l=Qs[s.componentType],c=l.BYTES_PER_ELEMENT,h=c*A,u=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,y,p;if(d&&d!==h){let f=Math.floor(u/d),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count,P=t.cache.get(T);P||(y=new l(a,f*d,s.count*d/c),P=new Ss(y,d/c),t.cache.add(T,P)),p=new Ps(P,A,u%d/c,m)}else a===null?y=new l(s.count*A):y=new l(a,u,s.count*A),p=new Lt(y,A,m);if(s.sparse!==void 0){let f=sc.SCALAR,T=Qs[s.sparse.indices.componentType],P=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new T(o[1],P,s.sparse.count*f),b=new l(o[2],M,s.sparse.count*A);a!==null&&(p=new Lt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let E=0,v=w.length;E<v;E++){let _=w[E];if(p.setX(_,b[E*A]),A>=2&&p.setY(_,b[E*A+1]),A>=3&&p.setZ(_,b[E*A+2]),A>=4&&p.setW(_,b[E*A+3]),A>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let A=n.manager.getHandler(o.uri);A!==null&&(a=A)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],A=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[A])return this.textureCache[A];let l=this.loadImageSource(t,n).then(function(c){c.flipY=!1,c.name=o.name||a.name||"",c.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(c.name=a.uri);let u=(r.samplers||{})[o.sampler]||{};return c.magFilter=ad[u.magFilter]||St,c.minFilter=ad[u.minFilter]||In,c.wrapS=Ad[u.wrapS]||Bn,c.wrapT=Ad[u.wrapT]||Bn,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==bt&&c.minFilter!==St,s.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[A]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,A=o.uri||"",l=!1;if(o.bufferView!==void 0)A=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let u=new Blob([h],{type:o.mimeType});return A=a.createObjectURL(u),A});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let c=Promise.resolve(A).then(function(h){return new Promise(function(u,d){let m=u;t.isImageBitmapLoader===!0&&(m=function(y){let p=new Nt(y);p.needsUpdate=!0,u(p)}),t.load(li.resolveURL(h,r.path),m,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(A),Yn(h,o),h.userData.mimeType=o.mimeType||Y0(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",A),h});return this.sourceCache[e]=c,c}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let A=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,A)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,A=this.cache.get(a);A||(A=new Is,nn.prototype.copy.call(A,n),A.color.copy(n.color),A.map=n.map,A.sizeAttenuation=!1,this.cache.add(a,A)),n=A}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,A=this.cache.get(a);A||(A=new Ds,nn.prototype.copy.call(A,n),A.color.copy(n.color),A.map=n.map,this.cache.add(a,A)),n=A}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let A=this.cache.get(a);A||(A=n.clone(),r&&(A.vertexColors=!0),o&&(A.flatShading=!0),s&&(A.normalScale&&(A.normalScale.y*=-1),A.clearcoatNormalScale&&(A.clearcoatNormalScale.y*=-1)),this.cache.add(a,A),this.associations.set(A,this.associations.get(n))),n=A}e.material=n}getMaterialType(){return si}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},A=r.extensions||{},l=[];if(A[qe.KHR_MATERIALS_UNLIT]){let h=s[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new je(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Jt),a.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ft);let c=r.alphaMode||rc.OPAQUE;if(c===rc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,c===rc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ee(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Xt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xt){let h=r.emissiveFactor;a.emissive=new je().setRGB(h[0],h[1],h[2],Jt)}return r.emissiveTexture!==void 0&&o!==Xt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Yn(h,r),t.associations.set(h,{materials:e}),r.extensions&&qi(s,h,r),h})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(A){return ld(A,a,t)})}let o=[];for(let a=0,A=e.length;a<A;a++){let l=e[a],c=H0(l),h=s[c];if(h)o.push(h.promise);else{let u;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=ld(new yt,l,t),l.mode===wn.TRIANGLE_STRIP?u=u.then(d=>ic(d,Jr)):l.mode===wn.TRIANGLE_FAN&&(u=u.then(d=>ic(d,Gs))),s[c]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let A=0,l=o.length;A<l;A++){let c=o[A].material===void 0?G0(this.cache):this.getDependency("material",o[A].material);a.push(c)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(A){let l=A.slice(0,A.length-1),c=A[A.length-1],h=[];for(let d=0,m=c.length;d<m;d++){let y=c[d],p=o[d],f,T=l[d];if(p.mode===wn.TRIANGLES||p.mode===wn.TRIANGLE_STRIP||p.mode===wn.TRIANGLE_FAN||p.mode===void 0){let P=r.isSkinnedMesh===!0,M=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");P&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=P&&M?new mr(y,T):new It(y,T),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(p.mode===wn.LINES)f=new vr(y,T);else if(p.mode===wn.LINE_STRIP)f=new Gi(y,T);else if(p.mode===wn.LINE_LOOP)f=new Mr(y,T);else if(p.mode===wn.POINTS)f=new xr(y,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&X0(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Yn(f,r),p.extensions&&qi(s,f,p),t.assignFinalMaterial(f),h.push(f)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&qi(s,h[0],r),h[0];let u=new Vt;r.extensions&&qi(s,u,r),t.associations.set(u,{meshes:e});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(Il.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ci(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],A=[];for(let l=0,c=o.length;l<c;l++){let h=o[l];if(h){a.push(h);let u=new Xe;r!==null&&u.fromArray(r.array,l*16),A.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new gr(a,A)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],A=[],l=[],c=[];for(let h=0,u=s.channels.length;h<u;h++){let d=s.channels[h],m=s.samplers[d.sampler],y=d.target,p=y.node,f=s.parameters!==void 0?s.parameters[m.input]:m.input,T=s.parameters!==void 0?s.parameters[m.output]:m.output;y.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",f)),A.push(this.getDependency("accessor",T)),l.push(m),c.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(A),Promise.all(l),Promise.all(c)]).then(function(h){let u=h[0],d=h[1],m=h[2],y=h[3],p=h[4],f=[];for(let P=0,M=u.length;P<M;P++){let w=u[P],b=d[P],E=m[P],v=y[P],_=p[P];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let R=n._createAnimationTracks(w,b,E,v,_);if(R)for(let U=0;U<R.length;U++)f.push(R[U])}let T=new Lr(r,void 0,f);return Yn(T,s),T})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let A=0,l=s.weights.length;A<l;A++)a.morphTargetInfluences[A]=s.weights[A]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));let A=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),A]).then(function(l){let c=l[0],h=l[1],u=l[2];u!==null&&c.traverse(function(d){d.isSkinnedMesh&&d.bind(u,Q0)});for(let d=0,m=h.length;d<m;d++)c.add(h[d]);if(c.userData.pivot!==void 0&&h.length>0){let d=c.userData.pivot,m=h[0];c.pivot=new L().fromArray(d),c.position.x-=d[0],c.position.y-=d[1],c.position.z-=d[2],m.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],A=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return A&&a.push(A),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let c;if(r.isBone===!0?c=new _s:l.length>1?c=new Vt:l.length===1?c=l[0]:c=new gt,c!==l[0])for(let h=0,u=l.length;h<u;h++)c.add(l[h]);if(r.name&&(c.userData.name=r.name,c.name=o),Yn(c,r),r.extensions&&qi(n,c,r),r.matrix!==void 0){let h=new Xe;h.fromArray(r.matrix),c.applyMatrix4(h)}else r.translation!==void 0&&c.position.fromArray(r.translation),r.rotation!==void 0&&c.quaternion.fromArray(r.rotation),r.scale!==void 0&&c.scale.fromArray(r.scale);if(!s.associations.has(c))s.associations.set(c,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(c);s.associations.set(c,{...h})}return s.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Vt;n.name&&(r.name=s.createUniqueName(n.name)),Yn(r,n),n.extensions&&qi(t,r,n);let o=n.nodes||[],a=[];for(let A=0,l=o.length;A<l;A++)a.push(s.getDependency("node",o[A]));return Promise.all(a).then(function(A){for(let c=0,h=A.length;c<h;c++){let u=A[c];u.parent!==null?r.add(sd(u)):r.add(u)}let l=c=>{let h=new Map;for(let[u,d]of s.associations)(u instanceof nn||u instanceof Nt)&&h.set(u,d);return c.traverse(u=>{let d=s.associations.get(u);d!=null&&h.set(u,d)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,A=[];function l(d){d.morphTargetInfluences&&A.push(d.name?d.name:d.uuid)}Ri[r.path]===Ri.weights?(l(e),e.isGroup&&e.children.forEach(l)):A.push(a);let c;switch(Ri[r.path]){case Ri.weights:c=oi;break;case Ri.rotation:c=ai;break;case Ri.translation:case Ri.scale:c=_i;break;default:n.itemSize===1?c=oi:c=_i;break}let h=s.interpolation!==void 0?W0[s.interpolation]:ki,u=this._getArrayFromAccessor(n);for(let d=0,m=A.length;d<m;d++){let y=new c(A[d]+"."+Ri[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Dc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ai?Cc:dA;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Z0(i,e,t){let n=e.attributes,s=new dn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],A=a.min,l=a.max;if(A!==void 0&&l!==void 0){if(s.set(new L(A[0],A[1],A[2]),new L(l[0],l[1],l[2])),a.normalized){let c=Dc(Qs[a.componentType]);s.min.multiplyScalar(c),s.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,A=new L;for(let l=0,c=r.length;l<c;l++){let h=r[l];if(h.POSITION!==void 0){let u=t.json.accessors[h.POSITION],d=u.min,m=u.max;if(d!==void 0&&m!==void 0){if(A.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),A.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),A.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),u.normalized){let y=Dc(Qs[u.componentType]);A.multiplyScalar(y)}a.max(A)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new tn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function ld(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(A){i.setAttribute(a,A)})}for(let o in n){let a=Ec[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Je.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Yn(i,e),Z0(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?V0(i,e.targets,t):i})}var ud="Z2xURgIAAABIvQEAzEsAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NC41LjUxIiwidmVyc2lvbiI6IjIuMCJ9LCJleHRlbnNpb25zVXNlZCI6WyJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIl0sInNjZW5lIjowLCJzY2VuZXMiOlt7Im5hbWUiOiJCaWwiLCJub2RlcyI6WzIzXX1dLCJub2RlcyI6W3sibWVzaCI6MCwibmFtZSI6IkJfc3RvbHBlX0giLCJyb3RhdGlvbiI6WzAsMCwtMC4xNDM1MzAzMDkyMDAyODY4NywwLjk4OTY0NTk1Nzk0Njc3NzNdLCJzY2FsZSI6WzEsMS4wNzk5OTk5MjM3MDYwNTQ3LDFdLCJ0cmFuc2xhdGlvbiI6Wy0wLjczMTk5OTk5MzMyNDI3OTgsMS4xNjk5OTk5NTcwODQ2NTU4LC0wLjQxOTk5OTk4Njg4Njk3ODE1XX0seyJtZXNoIjoxLCJuYW1lIjoiQl9zdG9scGVfViIsInJvdGF0aW9uIjpbMCwwLDAuMTQzNTMwMzA5MjAwMjg2ODcsMC45ODk2NDU5NTc5NDY3NzczXSwic2NhbGUiOlsxLDEuMDc5OTk5OTIzNzA2MDU0NywxXSwidHJhbnNsYXRpb24iOlswLjczMTk5OTk5MzMyNDI3OTgsMS4xNjk5OTk5NTcwODQ2NTU4LC0wLjQxOTk5OTk4Njg4Njk3ODE1XX0seyJtZXNoIjoyLCJuYW1lIjoiQmFrbHlzX0giLCJ0cmFuc2xhdGlvbiI6Wy0wLjYwMDAwMDAyMzg0MTg1NzksMC43MjAwMDAwMjg2MTAyMjk1LC0yLjAxOTk5OTk4MDkyNjUxMzddfSx7Im1lc2giOjMsIm5hbWUiOiJCYWtseXNfViIsInRyYW5zbGF0aW9uIjpbMC42MDAwMDAwMjM4NDE4NTc5LDAuNzIwMDAwMDI4NjEwMjI5NSwtMi4wMTk5OTk5ODA5MjY1MTM3XX0seyJtZXNoIjo0LCJuYW1lIjoiRnJvbnRseXNfSCIsInRyYW5zbGF0aW9uIjpbLTAuNTc5OTk5OTgzMzEwNjk5NSwwLjY4MDAwMDAwNzE1MjU1NzQsMi4wMTk5OTk5ODA5MjY1MTM3XX0seyJtZXNoIjo1LCJuYW1lIjoiRnJvbnRseXNfViIsInRyYW5zbGF0aW9uIjpbMC41Nzk5OTk5ODMzMTA2OTk1LDAuNjgwMDAwMDA3MTUyNTU3NCwyLjAxOTk5OTk4MDkyNjUxMzddfSx7Im1lc2giOjYsIm5hbWUiOiJHcmlsbCIsInRyYW5zbGF0aW9uIjpbMCwwLjYwMDAwMDAyMzg0MTg1NzksMi4wMzk5OTk5NjE4NTMwMjczXX0seyJtZXNoIjo3LCJuYW1lIjoiSGp1bF9CSCIsInRyYW5zbGF0aW9uIjpbLTAuODAwMDAwMDExOTIwOTI5LDAuMzQwMDAwMDAzNTc2Mjc4NywtMS4yOTk5OTk5NTIzMTYyODQyXX0seyJtZXNoIjo4LCJuYW1lIjoiSGp1bF9CViIsInRyYW5zbGF0aW9uIjpbMC44MDAwMDAwMTE5MjA5MjksMC4zNDAwMDAwMDM1NzYyNzg3LC0xLjI5OTk5OTk1MjMxNjI4NDJdfSx7Im1lc2giOjksIm5hbWUiOiJIanVsX0ZIIiwidHJhbnNsYXRpb24iOlstMC44MDAwMDAwMTE5MjA5MjksMC4zNDAwMDAwMDM1NzYyNzg3LDEuMjk5OTk5OTUyMzE2Mjg0Ml19LHsibWVzaCI6MTAsIm5hbWUiOiJIanVsX0ZWIiwidHJhbnNsYXRpb24iOlswLjgwMDAwMDAxMTkyMDkyOSwwLjM0MDAwMDAwMzU3NjI3ODcsMS4yOTk5OTk5NTIzMTYyODQyXX0seyJtZXNoIjoxMSwibmFtZSI6Ikthcm9zc2VyaSJ9LHsibWVzaCI6MTIsIm5hbWUiOiJLdXBlIn0seyJtZXNoIjoxMywibmFtZSI6IlNraWx0X2JhayIsInRyYW5zbGF0aW9uIjpbMCwwLjQ2MDAwMDAwODM0NDY1MDI3LC0yLjA4OTk5OTkxNDE2OTMxMTVdfSx7Im1lc2giOjE0LCJuYW1lIjoiU2tpbHRfZm9yYW4iLCJ0cmFuc2xhdGlvbiI6WzAsMC40MDAwMDAwMDU5NjA0NjQ1LDIuMDg5OTk5OTE0MTY5MzExNV19LHsibWVzaCI6MTUsIm5hbWUiOiJTcGVpbF9IIiwidHJhbnNsYXRpb24iOlstMC45MzAwMDAwMDcxNTI1NTc0LDAuOTkwMDAwMDA5NTM2NzQzMiwwLjkyMDAwMDAxNjY4OTMwMDVdfSx7Im1lc2giOjE2LCJuYW1lIjoiU3BlaWxfViIsInRyYW5zbGF0aW9uIjpbMC45MzAwMDAwMDcxNTI1NTc0LDAuOTkwMDAwMDA5NTM2NzQzMiwwLjkyMDAwMDAxNjY4OTMwMDVdfSx7Im1lc2giOjE3LCJuYW1lIjoiU3BlaWxnbGFzc19IIiwidHJhbnNsYXRpb24iOlstMC45Mzk5OTk5OTc2MTU4MTQyLDAuOTkwMDAwMDA5NTM2NzQzMiwwLjg3OTk5OTk5NTIzMTYyODRdfSx7Im1lc2giOjE4LCJuYW1lIjoiU3BlaWxnbGFzc19WIiwidHJhbnNsYXRpb24iOlswLjkzOTk5OTk5NzYxNTgxNDIsMC45OTAwMDAwMDk1MzY3NDMyLDAuODc5OTk5OTk1MjMxNjI4NF19LHsibWVzaCI6MTksIm5hbWUiOiJTdG90ZmFuZ2VyX2JhayIsInRyYW5zbGF0aW9uIjpbMCwwLjM2MDAwMDAxNDMwNTExNDc1LC0yLjAxOTk5OTk4MDkyNjUxMzddfSx7Im1lc2giOjIwLCJuYW1lIjoiU3RvdGZhbmdlcl9mb3JhbiIsInRyYW5zbGF0aW9uIjpbMCwwLjM2MDAwMDAxNDMwNTExNDc1LDIuMDE5OTk5OTgwOTI2NTEzN119LHsibWVzaCI6MjEsIm5hbWUiOiJUZXJza2VsX0giLCJ0cmFuc2xhdGlvbiI6Wy0wLjg4NDk5OTk5MDQ2MzI1NjgsMC4zMTk5OTk5OTI4NDc0NDI2LDBdfSx7Im1lc2giOjIyLCJuYW1lIjoiVGVyc2tlbF9WIiwidHJhbnNsYXRpb24iOlswLjg4NDk5OTk5MDQ2MzI1NjgsMC4zMTk5OTk5OTI4NDc0NDI2LDBdfSx7ImNoaWxkcmVuIjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMl0sIm5hbWUiOiJCaWwifV0sIm1hdGVyaWFscyI6W3siZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJMYWtrIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsiYmFzZUNvbG9yRmFjdG9yIjpbMC44OTEyNjIwNTQ0NDMzNTk0LDAuNTYwNDk5MTMxNjc5NTM0OSwwLjEwNjE1NjA2NjA2MDA2NjIyLDFdLCJtZXRhbGxpY0ZhY3RvciI6MCwicm91Z2huZXNzRmFjdG9yIjowLjQ0OTk5OTk4ODA3OTA3MTA0fX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwiZW1pc3NpdmVGYWN0b3IiOlswLjY5NDA4MDUzMTU5NzEzNzUsMC4wMjc3NTUyNzkwOTM5ODA3OSwwLjAxOTkxNzgzODI3NTQzMjU4N10sIm5hbWUiOiJCYWtseXMiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjY5NDA4MDUzMTU5NzEzNzUsMC4wMjc3NTUyNzkwOTM5ODA3OSwwLjAxOTkxNzgzODI3NTQzMjU4NywxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC4zMDAwMDAwMTE5MjA5Mjg5Nn19LHsiZG91YmxlU2lkZWQiOnRydWUsImVtaXNzaXZlRmFjdG9yIjpbMSwwLjkwNzU0NzE3NTg4NDI0NjgsMC42ODAwMjAzMzIzMzY0MjU4XSwiZXh0ZW5zaW9ucyI6eyJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIjp7ImVtaXNzaXZlU3RyZW5ndGgiOjEuNX19LCJuYW1lIjoiRnJvbnRseXMiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlsxLDAuOTA3NTQ3MTc1ODg0MjQ2OCwwLjY4MDAyMDMzMjMzNjQyNTgsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuMzAwMDAwMDExOTIwOTI4OTZ9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiVHJpbSIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDM4NDcyNzQ1NTY3NTYwMTk2LDAuMDQ2MTQ4ODQ0MDYzMjgyMDEsMC4wNTYzNzQwOTkxMDU1OTY1NCwxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC42OTk5OTk5ODgwNzkwNzF9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiRGVrayIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDA5Njk2MzI5MDEyNTEzMTYsMC4wMTE4ODEzMzQ3MDcxNDA5MjMsMC4wMTUxNzUyMzgyNTE2ODYwOTYsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuODk5OTk5OTc2MTU4MTQyMX19LHsiZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJGZWxnIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsiYmFzZUNvbG9yRmFjdG9yIjpbMC41NTQyMjcxMTM3MjM3NTQ5LDAuNTg1OTcyOTY0NzYzNjQxNCwwLjYxODY4NTcyMjM1MTA3NDIsMV0sIm1ldGFsbGljRmFjdG9yIjowLjMwMDAwMDAxMTkyMDkyODk2LCJyb3VnaG5lc3NGYWN0b3IiOjAuNDAwMDAwMDA1OTYwNDY0NX19LHsiZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJHbGFzcyIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDIzMTAzNTU1NjY0NDIwMTI4LDAuMDM4NDcyNzQ1NTY3NTYwMTk2LDAuMDU2Mzc0MDk5MTA1NTk2NTQsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuMjAwMDAwMDAyOTgwMjMyMjR9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiU2tpbHQiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjg5MTI2MjA1NDQ0MzM1OTQsMC44OTEyNjIwNTQ0NDMzNTk0LDAuODkxMjYyMDU0NDQzMzU5NCwxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC42MDAwMDAwMjM4NDE4NTc5fX1dLCJtZXNoZXMiOlt7Im5hbWUiOiJCX3N0b2xwZV9ILjAwMSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjAsIk5PUk1BTCI6MX0sImluZGljZXMiOjIsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IkJfc3RvbHBlX1YiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjozLCJOT1JNQUwiOjR9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJCYWtseXNfSC4wMDEiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo1LCJOT1JNQUwiOjZ9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6MX1dfSx7Im5hbWUiOiJCYWtseXNfViIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjgsIk5PUk1BTCI6OX0sImluZGljZXMiOjcsIm1hdGVyaWFsIjoxfV19LHsibmFtZSI6IkZyb250bHlzX0guMDAxIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTAsIk5PUk1BTCI6MTF9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6Mn1dfSx7Im5hbWUiOiJGcm9udGx5c19WIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTIsIk5PUk1BTCI6MTN9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6Mn1dfSx7Im5hbWUiOiJHcmlsbCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjE0LCJOT1JNQUwiOjE1fSwiaW5kaWNlcyI6NywibWF0ZXJpYWwiOjN9XX0seyJuYW1lIjoiSGp1bF9CSC4wMDEiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxNiwiTk9STUFMIjoxN30sImluZGljZXMiOjE4LCJtYXRlcmlhbCI6NH0seyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxOSwiTk9STUFMIjoyMH0sImluZGljZXMiOjIxLCJtYXRlcmlhbCI6NX1dfSx7Im5hbWUiOiJIanVsX0JWIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MjIsIk5PUk1BTCI6MjN9LCJpbmRpY2VzIjoyNCwibWF0ZXJpYWwiOjR9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MjUsIk5PUk1BTCI6MjZ9LCJpbmRpY2VzIjoyNywibWF0ZXJpYWwiOjV9XX0seyJuYW1lIjoiSGp1bF9GSC4wMDEiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoyOCwiTk9STUFMIjoyOX0sImluZGljZXMiOjE4LCJtYXRlcmlhbCI6NH0seyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjozMCwiTk9STUFMIjozMX0sImluZGljZXMiOjIxLCJtYXRlcmlhbCI6NX1dfSx7Im5hbWUiOiJIanVsX0ZWIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MzIsIk5PUk1BTCI6MzN9LCJpbmRpY2VzIjoyNCwibWF0ZXJpYWwiOjR9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MzQsIk5PUk1BTCI6MzV9LCJpbmRpY2VzIjoyNywibWF0ZXJpYWwiOjV9XX0seyJuYW1lIjoiS2Fyb3NzZXJpIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MzYsIk5PUk1BTCI6Mzd9LCJpbmRpY2VzIjozOCwibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiS3VwZSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjM5LCJOT1JNQUwiOjQwfSwiaW5kaWNlcyI6NDEsIm1hdGVyaWFsIjowfSx7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjQyLCJOT1JNQUwiOjQzfSwiaW5kaWNlcyI6NDQsIm1hdGVyaWFsIjo2fV19LHsibmFtZSI6IlNraWx0X2JhayIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjQ1LCJOT1JNQUwiOjQ2fSwiaW5kaWNlcyI6NywibWF0ZXJpYWwiOjd9XX0seyJuYW1lIjoiU2tpbHRfZm9yYW4iLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo0NywiTk9STUFMIjo0OH0sImluZGljZXMiOjcsIm1hdGVyaWFsIjo3fV19LHsibmFtZSI6IlNwZWlsX0guMDAxIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NDksIk5PUk1BTCI6NTB9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJTcGVpbF9WIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTEsIk5PUk1BTCI6NTJ9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJTcGVpbGdsYXNzX0guMDAxIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTMsIk5PUk1BTCI6NTR9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6Nn1dfSx7Im5hbWUiOiJTcGVpbGdsYXNzX1YiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo1NSwiTk9STUFMIjo1Nn0sImluZGljZXMiOjIsIm1hdGVyaWFsIjo2fV19LHsibmFtZSI6IlN0b3RmYW5nZXJfYmFrIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTcsIk5PUk1BTCI6NTh9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6M31dfSx7Im5hbWUiOiJTdG90ZmFuZ2VyX2ZvcmFuIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTksIk5PUk1BTCI6NjB9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6M31dfSx7Im5hbWUiOiJUZXJza2VsX0guMDAxIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NjEsIk5PUk1BTCI6NjJ9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6M31dfSx7Im5hbWUiOiJUZXJza2VsX1YiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo2MywiTk9STUFMIjo2NH0sImluZGljZXMiOjcsIm1hdGVyaWFsIjozfV19XSwiYWNjZXNzb3JzIjpbeyJidWZmZXJWaWV3IjowLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDE0OTk5OTk5NjY0NzIzODczLDAuMjUsMC4wNDUwMDAwMDE3ODgxMzkzNF0sIm1pbiI6Wy0wLjAxNDk5OTk5OTY2NDcyMzg3MywtMC4yNSwtMC4wNDUwMDAwMDE3ODgxMzkzNF0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MzYsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4wMTQ5OTk5OTk2NjQ3MjM4NzMsMC4yNSwwLjA0NTAwMDAwMTc4ODEzOTM0XSwibWluIjpbLTAuMDE0OTk5OTk5NjY0NzIzODczLC0wLjI1LC0wLjA0NTAwMDAwMTc4ODEzOTM0XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4xNTAwMDAwMDU5NjA0NjQ0OCwwLjA1OTk5OTk5ODY1ODg5NTQ5LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuMTUwMDAwMDA1OTYwNDY0NDgsLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjYsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjcsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoxMzIsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjgsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4xNTAwMDAwMDU5NjA0NjQ0OCwwLjA1OTk5OTk5ODY1ODg5NTQ5LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuMTUwMDAwMDA1OTYwNDY0NDgsLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjksImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsIm1heCI6WzAuMTcwMDAwMDAxNzg4MTM5MzQsMC4wNTk5OTk5OTg2NTg4OTU0OSwwLjAyOTk5OTk5OTMyOTQ0Nzc0Nl0sIm1pbiI6Wy0wLjE3MDAwMDAwMTc4ODEzOTM0LC0wLjA1OTk5OTk5ODY1ODg5NTQ5LC0wLjAyOTk5OTk5OTMyOTQ0Nzc0Nl0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4xNzAwMDAwMDE3ODgxMzkzNCwwLjA1OTk5OTk5ODY1ODg5NTQ5LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuMTcwMDAwMDAxNzg4MTM5MzQsLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEzLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlswLjM0OTk5OTk5NDAzOTUzNTUsMC4wNTk5OTk5OTg2NTg4OTU0OSwwLjAyNTAwMDAwMDM3MjUyOTAzXSwibWluIjpbLTAuMzQ5OTk5OTk0MDM5NTM1NSwtMC4wNTk5OTk5OTg2NTg4OTU0OSwtMC4wMjUwMDAwMDAzNzI1MjkwM10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTYsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNzIsIm1heCI6WzAuMTIwMDAwMDE5NjY5NTMyNzgsMC4zNDAwMDAwMDM1NzYyNzg3LDAuMzQwMDAwMDAzNTc2Mjc4N10sIm1pbiI6Wy0wLjExMTk2Mjg1NDg2MjIxMzEzLC0wLjM0MDAwMDAwMzU3NjI3ODcsLTAuMzQwMDAwMDAzNTc2Mjc4N10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI3MiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE4LCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6NDI2LCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjoxOSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE2LCJtYXgiOlstMC4wODk5OTk5ODEyMjQ1MzY5LDAuMjMwMDAwMDA0MTcyMzI1MTMsMC4yMzAwMDAwMDQxNzIzMjUxM10sIm1pbiI6Wy0wLjA5MDAwMDAxMTAyNjg1OTI4LC0wLjIzMDAwMDAwNDE3MjMyNTEzLC0wLjIzMDAwMDAwNDE3MjMyNTEzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyMSwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjQyLCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjoyMiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI3MiwibWF4IjpbMC4xMTE5NjI4NTQ4NjIyMTMxMywwLjM0MDAwMDAwMzU3NjI3ODcsMC4zNDAwMDAwMDM1NzYyNzg3XSwibWluIjpbLTAuMTIwMDAwMDE5NjY5NTMyNzgsLTAuMzQwMDAwMDAzNTc2Mjc4NywtMC4zNDAwMDAwMDM1NzYyNzg3XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIzLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjcyLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MjQsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50Ijo0MjYsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjI1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsIm1heCI6WzAuMDkwMDAwMDExMDI2ODU5MjgsMC4yMzAwMDAwMDQxNzIzMjUxMywwLjIzMDAwMDAwNDE3MjMyNTEzXSwibWluIjpbMC4wODk5OTk5ODEyMjQ1MzY5LC0wLjIzMDAwMDAwNDE3MjMyNTEzLC0wLjIzMDAwMDAwNDE3MjMyNTEzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjI2LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyNywiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjQyLCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjoyOCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI3MiwibWF4IjpbMC4xMjAwMDAwMTk2Njk1MzI3OCwwLjM0MDAwMDAwMzU3NjI3ODcsMC4zNDAwMDAwMDM1NzYyNzg3XSwibWluIjpbLTAuMTExOTYyODU0ODYyMjEzMTMsLTAuMzQwMDAwMDAzNTc2Mjc4NywtMC4zNDAwMDAwMDM1NzYyNzg3XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjI5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjcyLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MzAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNiwibWF4IjpbLTAuMDg5OTk5OTgxMjI0NTM2OSwwLjIzMDAwMDAwNDE3MjMyNTEzLDAuMjMwMDAwMDA0MTcyMzI1MTNdLCJtaW4iOlstMC4wOTAwMDAwMTEwMjY4NTkyOCwtMC4yMzAwMDAwMDQxNzIzMjUxMywtMC4yMzAwMDAwMDQxNzIzMjUxM10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozMSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MzIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNzIsIm1heCI6WzAuMTExOTYyODU0ODYyMjEzMTMsMC4zNDAwMDAwMDM1NzYyNzg3LDAuMzQwMDAwMDAzNTc2Mjc4N10sIm1pbiI6Wy0wLjEyMDAwMDAxOTY2OTUzMjc4LC0wLjM0MDAwMDAwMzU3NjI3ODcsLTAuMzQwMDAwMDAzNTc2Mjc4N10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozMywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI3MiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjM0LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsIm1heCI6WzAuMDkwMDAwMDExMDI2ODU5MjgsMC4yMzAwMDAwMDQxNzIzMjUxMywwLjIzMDAwMDAwNDE3MjMyNTEzXSwibWluIjpbMC4wODk5OTk5ODEyMjQ1MzY5LC0wLjIzMDAwMDAwNDE3MjMyNTEzLC0wLjIzMDAwMDAwNDE3MjMyNTEzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjM1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozNiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjg2MCwibWF4IjpbMC44Nzk5OTk5OTUyMzE2Mjg0LDAuOTQ5OTk5OTg4MDc5MDcxLDIuMDI5MTU2Njg0ODc1NDg4M10sIm1pbiI6Wy0wLjg3OTk5OTk5NTIzMTYyODQsMC4yODAwMDAwMDExOTIwOTI5LC0yLjAzOTk5OTk2MTg1MzAyNzNdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MzcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo4NjAsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozOCwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjEzNTYsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjM5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MzEyLCJtYXgiOlswLjc4NzAwMjQ0NDI2NzI3MywxLjQ0MDAwMDA1NzIyMDQ1OSwxLjA2NDgwNTYyNjg2OTIwMTddLCJtaW4iOlstMC43ODcwMDI0NDQyNjcyNzMsMC44OTk5OTk5NzYxNTgxNDIxLC0xLjQwNTY1OTQzNzE3OTU2NTRdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NDAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjozMTIsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0MSwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjQ2OCwidHlwZSI6IlNDQUxBUiJ9LHsiYnVmZmVyVmlldyI6NDIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC43Nzk0MjA4NTI2NjExMzI4LDEuMzk3MjM5OTIzNDc3MTcyOSwxLjAzNDMwMzMwNzUzMzI2NDJdLCJtaW4iOlstMC43Nzk0MjA4NTI2NjExMzI4LDAuOTEzMzkyMzA1Mzc0MTQ1NSwtMS4zODA4MjY0NzMyMzYwODRdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NDMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjQ0LCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6NDgsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjQ1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsIm1heCI6WzAuMjE5OTk5OTk4ODA3OTA3MSwwLjA1NDk5OTk5OTcwMTk3Njc3NiwwLjAwOTk5OTk5OTc3NjQ4MjU4Ml0sIm1pbiI6Wy0wLjIxOTk5OTk5ODgwNzkwNzEsLTAuMDU0OTk5OTk5NzAxOTc2Nzc2LC0wLjAwOTk5OTk5OTc3NjQ4MjU4Ml0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0NiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NDcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4yMTk5OTk5OTg4MDc5MDcxLDAuMDU0OTk5OTk5NzAxOTc2Nzc2LDAuMDA5OTk5OTk5Nzc2NDgyNTgyXSwibWluIjpbLTAuMjE5OTk5OTk4ODA3OTA3MSwtMC4wNTQ5OTk5OTk3MDE5NzY3NzYsLTAuMDA5OTk5OTk5Nzc2NDgyNTgyXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjQ4LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0OSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlswLjA3OTk5OTk5ODIxMTg2MDY2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wMzk5OTk5OTkxMDU5MzAzM10sIm1pbiI6Wy0wLjA3OTk5OTk5ODIxMTg2MDY2LC0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjAzOTk5OTk5OTEwNTkzMDMzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo1MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlswLjA3OTk5OTk5ODIxMTg2MDY2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wMzk5OTk5OTkxMDU5MzAzM10sIm1pbiI6Wy0wLjA3OTk5OTk5ODIxMTg2MDY2LC0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjAzOTk5OTk5OTEwNTkzMDMzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUyLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo1MywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjA2NDk5OTk5NzYxNTgxNDIxLDAuMDM1MDAwMDAwMTQ5MDExNjEsMC4wMDQ5OTk5OTk4ODgyNDEyOTFdLCJtaW4iOlstMC4wNjQ5OTk5OTc2MTU4MTQyMSwtMC4wMzUwMDAwMDAxNDkwMTE2MSwtMC4wMDQ5OTk5OTk4ODgyNDEyOTFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NTQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjU1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDY0OTk5OTk3NjE1ODE0MjEsMC4wMzUwMDAwMDAxNDkwMTE2MSwwLjAwNDk5OTk5OTg4ODI0MTI5MV0sIm1pbiI6Wy0wLjA2NDk5OTk5NzYxNTgxNDIxLC0wLjAzNTAwMDAwMDE0OTAxMTYxLC0wLjAwNDk5OTk5OTg4ODI0MTI5MV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo1NiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NTcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC44ODk5OTk5ODU2OTQ4ODUzLDAuMDcwMDAwMDAwMjk4MDIzMjIsMC4wNTk5OTk5OTg2NTg4OTU0OV0sIm1pbiI6Wy0wLjg4OTk5OTk4NTY5NDg4NTMsLTAuMDcwMDAwMDAwMjk4MDIzMjIsLTAuMDU5OTk5OTk4NjU4ODk1NDldLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NTgsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjU5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsIm1heCI6WzAuODg5OTk5OTg1Njk0ODg1MywwLjA3MDAwMDAwMDI5ODAyMzIyLDAuMDU5OTk5OTk4NjU4ODk1NDldLCJtaW4iOlstMC44ODk5OTk5ODU2OTQ4ODUzLC0wLjA3MDAwMDAwMDI5ODAyMzIyLC0wLjA1OTk5OTk5ODY1ODg5NTQ5XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjYwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo2MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlswLjAyNTAwMDAwMDM3MjUyOTAzLDAuMDM5OTk5OTk5MTA1OTMwMzMsMC43NzQ5OTk5NzYxNTgxNDIxXSwibWluIjpbLTAuMDI1MDAwMDAwMzcyNTI5MDMsLTAuMDM5OTk5OTk5MTA1OTMwMzMsLTAuNzc0OTk5OTc2MTU4MTQyMV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo2MiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NjMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4wMjUwMDAwMDAzNzI1MjkwMywwLjAzOTk5OTk5OTEwNTkzMDMzLDAuNzc0OTk5OTc2MTU4MTQyMV0sIm1pbiI6Wy0wLjAyNTAwMDAwMDM3MjUyOTAzLC0wLjAzOTk5OTk5OTEwNTkzMDMzLC0wLjc3NDk5OTk3NjE1ODE0MjFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NjQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6Mjg4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6NzIsImJ5dGVPZmZzZXQiOjU3NiwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6NjQ4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo5MzYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0IjoxMjI0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6MjM3NiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI2NCwiYnl0ZU9mZnNldCI6MzUyOCwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjM3OTIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo0OTQ0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6NjA5NiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjcyNDgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo4NDAwLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6OTU1MiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjEwNzA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6MTE4NTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjozMjY0LCJieXRlT2Zmc2V0IjoxMzAwOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjMyNjQsImJ5dGVPZmZzZXQiOjE2MjcyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6ODUyLCJieXRlT2Zmc2V0IjoxOTUzNiwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE5MiwiYnl0ZU9mZnNldCI6MjAzODgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxOTIsImJ5dGVPZmZzZXQiOjIwNTgwLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6ODQsImJ5dGVPZmZzZXQiOjIwNzcyLCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MzI2NCwiYnl0ZU9mZnNldCI6MjA4NTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjozMjY0LCJieXRlT2Zmc2V0IjoyNDEyMCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjg1MiwiYnl0ZU9mZnNldCI6MjczODQsInRhcmdldCI6MzQ5NjN9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxOTIsImJ5dGVPZmZzZXQiOjI4MjM2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTkyLCJieXRlT2Zmc2V0IjoyODQyOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjg0LCJieXRlT2Zmc2V0IjoyODYyMCwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjMyNjQsImJ5dGVPZmZzZXQiOjI4NzA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MzI2NCwiYnl0ZU9mZnNldCI6MzE5NjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxOTIsImJ5dGVPZmZzZXQiOjM1MjMyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTkyLCJieXRlT2Zmc2V0IjozNTQyNCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjMyNjQsImJ5dGVPZmZzZXQiOjM1NjE2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MzI2NCwiYnl0ZU9mZnNldCI6Mzg4ODAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxOTIsImJ5dGVPZmZzZXQiOjQyMTQ0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTkyLCJieXRlT2Zmc2V0Ijo0MjMzNiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjEwMzIwLCJieXRlT2Zmc2V0Ijo0MjUyOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjEwMzIwLCJieXRlT2Zmc2V0Ijo1Mjg0OCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI3MTIsImJ5dGVPZmZzZXQiOjYzMTY4LCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mzc0NCwiYnl0ZU9mZnNldCI6NjU4ODAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjozNzQ0LCJieXRlT2Zmc2V0Ijo2OTYyNCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjkzNiwiYnl0ZU9mZnNldCI6NzMzNjgsInRhcmdldCI6MzQ5NjN9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjc0MzA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo3NDU5MiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjk2LCJieXRlT2Zmc2V0Ijo3NDg4MCwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjc0OTc2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6NzYxMjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo3NzI4MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjc4NDMyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6Nzk1ODQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo4MDczNiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjgxODg4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6ODMwNDAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg0MTkyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo4NDQ4MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6ODQ3NjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg1MDU2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6ODUzNDQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo4NjQ5NiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjg3NjQ4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6ODg4MDAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo4OTk1MiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjkxMTA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6OTIyNTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo5MzQwOCwidGFyZ2V0IjozNDk2Mn1dLCJidWZmZXJzIjpbeyJieXRlTGVuZ3RoIjo5NDU2MH1dfSBgcQEAQklOAI/CdbwAAIC+7FE4PY/CdbwAAIC+7FE4PY/CdbwAAIC+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIC+7FE4vY/CdbwAAIC+7FE4vY/CdbwAAIC+7FE4vY/CdbwAAIA+7FE4vY/CdbwAAIA+7FE4vY/CdbwAAIA+7FE4vY/CdTwAAIC+7FE4PY/CdTwAAIC+7FE4PY/CdTwAAIC+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIC+7FE4vY/CdTwAAIC+7FE4vY/CdTwAAIC+7FE4vY/CdTwAAIA+7FE4vY/CdTwAAIA+7FE4vY/CdTwAAIA+7FE4vQAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAIABQALAAIACwAIAAYACQAVAAYAFQASABQAFwARABQAEQAOAAwADwADAAwAAwAAAAcAEwANAAcADQABABYACgAEABYABAAQAI/CdbwAAIC+7FE4PY/CdbwAAIC+7FE4PY/CdbwAAIC+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIC+7FE4vY/CdbwAAIC+7FE4vY/CdbwAAIC+7FE4vY/CdbwAAIA+7FE4vY/CdbwAAIA+7FE4vY/CdbwAAIA+7FE4vY/CdTwAAIC+7FE4PY/CdTwAAIC+7FE4PY/CdTwAAIC+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIC+7FE4vY/CdTwAAIC+7FE4vY/CdTwAAIC+7FE4vY/CdTwAAIA+7FE4vY/CdTwAAIA+7FE4vY/CdTwAAIA+7FE4vQAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAALkeBb6PwnW9CtcjPLkeBb6PwnW9CtcjPLkeBb6PwnW9CtcjPLkeBb6PwnW9CtcjPLkeBb4K1yO9j8L1PLkeBb4K1yO9j8L1PLkeBb4K1yO9j8L1PLkeBb4K1yO9j8L1PJqZGb4K1yO9CtcjPJqZGb4K1yO9CtcjPJqZGb4K1yO9CtcjPJqZGb4K1yO9CtcjPLkeBb4K1yM9j8L1PLkeBb4K1yM9j8L1PLkeBb4K1yM9j8L1PLkeBb4K1yM9j8L1PLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT4K1yO9j8L1vLkeBT4K1yO9j8L1vLkeBT4K1yO9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j8L1PLkeBb4K1yM9j8L1PLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT4K1yO9j8L1vLkeBT4K1yO9j8L1vLkeBT4K1yO9j8L1vLkeBT4K1yO9j8L1vJqZGT4K1yO9CtcjvJqZGT4K1yO9CtcjvJqZGT4K1yO9CtcjvJqZGT4K1yO9CtcjvLkeBT6PwnU9CtcjvLkeBT6PwnU9CtcjvLkeBT6PwnU9CtcjvLkeBT6PwnU9CtcjvJqZGT4K1yM9CtcjvJqZGT4K1yM9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j8L1PJqZGb4K1yO9j8L1PJqZGb4K1yO9j8L1PHsULr4K1yO9CtcjPHsULr4K1yO9CtcjPHsULr4K1yO9CtcjPHsULr4K1yO9CtcjPJqZGb4K1yM9j8L1PJqZGb4K1yM9j8L1PJqZGb4K1yM9j8L1PJqZGb4K1yM9j8L1PJqZGb6PwnU9CtcjPJqZGb6PwnU9CtcjPJqZGb6PwnU9CtcjPJqZGb6PwnU9CtcjPHsULr4K1yM9CtcjPHsULr4K1yM9CtcjPHsULr4K1yM9CtcjPHsULr4K1yM9CtcjPJqZGb6PwnW9CtcjvJqZGb6PwnW9CtcjvJqZGb6PwnW9CtcjvJqZGb6PwnW9CtcjvHsULr4K1yO9CtcjvHsULr4K1yO9CtcjvHsULr4K1yO9CtcjvHsULr4K1yO9CtcjvJqZGb4K1yO9j8L1vJqZGb4K1yO9j8L1vJqZGb4K1yO9j8L1vJqZGb4K1yO9j8L1vJqZGb6PwnU9CtcjvJqZGb6PwnU9CtcjvJqZGb6PwnU9CtcjvJqZGb6PwnU9CtcjvJqZGb4K1yM9j8L1vJqZGb4K1yM9j8L1vJqZGb4K1yM9j8L1vJqZGb4K1yM9j8L1vHsULr4K1yM9CtcjvHsULr4K1yM9CtcjvHsULr4K1yM9CtcjvHsULr4K1yM9CtcjvJqZGT6PwnW9CtcjPJqZGT6PwnW9CtcjPJqZGT6PwnW9CtcjPJqZGT6PwnW9CtcjPHsULj4K1yO9CtcjPHsULj4K1yO9CtcjPHsULj4K1yO9CtcjPHsULj4K1yO9CtcjPJqZGT4K1yO9j8L1PJqZGT4K1yO9j8L1PJqZGT4K1yO9j8L1PJqZGT4K1yO9j8L1PJqZGT6PwnU9CtcjPJqZGT6PwnU9CtcjPJqZGT6PwnU9CtcjPJqZGT6PwnU9CtcjPJqZGT4K1yM9j8L1PJqZGT4K1yM9j8L1PJqZGT4K1yM9j8L1PJqZGT4K1yM9j8L1PHsULj4K1yM9CtcjPHsULj4K1yM9CtcjPHsULj4K1yM9CtcjPHsULj4K1yM9CtcjPJqZGT6PwnW9CtcjvJqZGT6PwnW9CtcjvJqZGT6PwnW9CtcjvJqZGT6PwnW9CtcjvJqZGT4K1yO9j8L1vJqZGT4K1yO9j8L1vJqZGT4K1yO9j8L1vJqZGT4K1yO9j8L1vHsULj4K1yO9CtcjvHsULj4K1yO9CtcjvHsULj4K1yO9CtcjvHsULj4K1yO9CtcjvJqZGT6PwnU9CtcjvJqZGT6PwnU9CtcjvJqZGT6PwnU9CtcjvJqZGT6PwnU9CtcjvHsULj4K1yM9CtcjvHsULj4K1yM9CtcjvHsULj4K1yM9CtcjvHsULj4K1yM9CtcjvJqZGT4K1yM9j8L1vJqZGT4K1yM9j8L1vJqZGT4K1yM9j8L1vJqZGT4K1yM9j8L1vAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNE786zRO/Os0TP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNE786zRM/Os0TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNE786zRM/Os0TP/QENb/0BDU/AAAAADrNE786zRM/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNE786zRO/Os0Tv/QENb/0BDW/AAAAADrNE786zRO/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNE786zRO/Os0Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNE786zRM/Os0Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNEz86zRO/Os0TP/QENT/0BDW/AAAAADrNEz86zRO/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNEz86zRO/Os0TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNEz86zRM/Os0TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNEz86zRO/Os0Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNEz86zRM/Os0Tv/QENT/0BDU/AAAAADrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1vx+Fq76PwnW9DNcjPB+Fq76PwnW9DNcjPB+Fq76PwnW9DNcjPB+Fq76PwnW9DNcjPB+Fq77rUTi9zczMPB+Fq77rUTi9zczMPB+Fq77rUTi9zczMPB+Fq77rUTi9zczMPDMzs77qUTi9C9cjPDMzs77qUTi9C9cjPDMzs77qUTi9C9cjPDMzs77qUTi9C9cjPB+Fq77rUTg9zczMPB+Fq77rUTg9zczMPB+Fq77rUTg9zczMPB+Fq77rUTg9zczMPB+Fq76PwnU9C9cjPB+Fq76PwnU9C9cjPB+Fq76PwnU9C9cjPB+Fq76PwnU9C9cjPDMzs77rUTg9CtcjPDMzs77rUTg9CtcjPDMzs77rUTg9CtcjPDMzs77rUTg9CtcjPB+Fq76PwnW9C9cjvB+Fq76PwnW9C9cjvB+Fq76PwnW9C9cjvB+Fq76PwnW9C9cjvDMzs77rUTi9CtcjvDMzs77rUTi9CtcjvDMzs77rUTi9CtcjvDMzs77rUTi9CtcjvB+Fq77rUTi9zczMvB+Fq77rUTi9zczMvB+Fq77rUTi9zczMvB+Fq77rUTi9zczMvB+Fq76PwnU9DNcjvB+Fq76PwnU9DNcjvB+Fq76PwnU9DNcjvB+Fq76PwnU9DNcjvB+Fq77rUTg9zczMvB+Fq77rUTg9zczMvB+Fq77rUTg9zczMvB+Fq77rUTg9zczMvDMzs77qUTg9C9cjvDMzs77qUTg9C9cjvDMzs77qUTg9C9cjvDMzs77qUTg9C9cjvB+Fqz6PwnW9C9cjPB+Fqz6PwnW9C9cjPB+Fqz6PwnW9C9cjPB+Fqz6PwnW9C9cjPDMzsz7rUTi9CtcjPDMzsz7rUTi9CtcjPDMzsz7rUTi9CtcjPDMzsz7rUTi9CtcjPB+Fqz7rUTi9zczMPB+Fqz7rUTi9zczMPB+Fqz7rUTi9zczMPB+Fqz7rUTi9zczMPB+Fqz6PwnU9DNcjPB+Fqz6PwnU9DNcjPB+Fqz6PwnU9DNcjPB+Fqz6PwnU9DNcjPB+Fqz7rUTg9zczMPB+Fqz7rUTg9zczMPB+Fqz7rUTg9zczMPB+Fqz7rUTg9zczMPDMzsz7qUTg9C9cjPDMzsz7qUTg9C9cjPDMzsz7qUTg9C9cjPDMzsz7qUTg9C9cjPB+Fqz6PwnW9DNcjvB+Fqz6PwnW9DNcjvB+Fqz6PwnW9DNcjvB+Fqz6PwnW9DNcjvB+Fqz7rUTi9zczMvB+Fqz7rUTi9zczMvB+Fqz7rUTi9zczMvB+Fqz7rUTi9zczMvDMzsz7qUTi9C9cjvDMzsz7qUTi9C9cjvDMzsz7qUTi9C9cjvDMzsz7qUTi9C9cjvB+Fqz6PwnU9C9cjvB+Fqz6PwnU9C9cjvB+Fqz6PwnU9C9cjvB+Fqz6PwnU9C9cjvDMzsz7rUTg9CtcjvDMzsz7rUTg9CtcjvDMzsz7rUTg9CtcjvDMzsz7rUTg9CtcjvB+Fqz7rUTg9zczMvB+Fqz7rUTg9zczMvB+Fqz7rUTg9zczMvB+Fqz7rUTg9zczMvAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPE79pzxO/28gTP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPE79pzxO/28gTP/QENb8AAAAA9AQ1P2nPE79pzxO/28gTP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPE7/byBM/ac8TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPE7/byBM/ac8TP/QENb/0BDU/AAAAAGnPE7/byBM/ac8TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPE7/byBO/ac8Tv/QENb/0BDW/AAAAAGnPE7/byBO/ac8Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPE7/byBO/ac8Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPE79pzxM/28gTv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1v2nPE79pzxM/28gTv/QENb8AAAAA9AQ1v2nPE79pzxM/28gTv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPEz/byBO/ac8TP/QENT/0BDW/AAAAAGnPEz/byBO/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPEz/byBO/ac8TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPEz9pzxM/28gTP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPEz9pzxM/28gTP/QENT8AAAAA9AQ1P2nPEz9pzxM/28gTP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPEz9pzxO/28gTv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPEz9pzxO/28gTv/QENT8AAAAA9AQ1v2nPEz9pzxO/28gTv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPEz/byBM/ac8Tv/QENT/0BDU/AAAAAGnPEz/byBM/ac8Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAA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C8sAvzzUSz+LqvE9aukXvzYAPAA3ADYANwAxAC8AIwAlAC8AJQApAD0AQwA+AD0APgA4AKYALgAoAKYAKACgAEQASwBGAEQARgA/AK4ApwChAK4AoQCoAEoAUgBNAEoATQBFALcArwCpALcAqQCxAFEAWABTAFEAUwBMAL8AtgCwAL8AsAC5AFkAYABbAFkAWwBUAMcAvgC4AMcAuADBAF8AZwBiAF8AYgBaAM4AxgDAAM4AwADIAGYAbgBpAGYAaQBhANcAzwDJANcAyQDRAG0AdABvAG0AbwBoAN8A1gDQAN8A0ADZAHUAewB2AHUAdgBwAOYA3gDYAOYA2ADgAHwAgwB+AHwAfgB3AO4A5wDhAO4A4QDoAIIAiQCEAIIAhAB9APYA7wDpAPYA6QDwAIoAkACLAIoAiwCFAP8A9wDxAP8A8QD5AJEAmACTAJEAkwCMAAcB/gD4AAcB+AABAZcAnwCaAJcAmgCSAA4BBgEAAQ4BAAEIAZ4ANQAwAJ4AMACZACIADwEJASIACQEkAAAAAgAqAAAAKgAmAB4AAQAnAB4AJwAKATQAIQAsADQALAA6AJwADAEgAJwAIAAzADsALQCkADsApABBAAMABACiAAMAogArAJsAMgA5ADkAQABHAEcATgBVAFUAXABjAGMAagBxAHEAeAB/AH8AhgCNAI0AlACbAJsAOQBHAEcAVQBjAGMAcQB/AH8AjQCbAJsARwBjAGMAfwCbAEIApQCsAEIArABIAEkArQC1AEkAtQBQAE8AtAC9AE8AvQBXAFYAvADFAFYAxQBeAF0AxADNAF0AzQBlAGQAzADVAGQA1QBsAGsA1ADcAGsA3AByAHMA3QDkAHMA5AB5AHoA5QDsAHoA7ACAAIEA7QD0AIEA9ACHAIgA9QD9AIgA/QCPAI4A/AAFAY4ABQGWAJUABAENAZUADQGdAAUABwCrAAUAqwCjAAYACACyAAYAsgCqAAkACgC6AAkAugCzAAsADQDDAAsAwwC7AAwADwDLAAwAywDCAA4AEADSAA4A0gDKABEAEgDaABEA2gDTABMAFADiABMA4gDbABUAFwDrABUA6wDjABYAGQDzABYA8wDqABgAGgD6ABgA+gDyABsAHQADARsAAwH7ABwAHwALARwACwECAetRuD12wPIxH4VrvuxRuD1aQrS9lJdZvuxRuD2siSa+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MwEvASsBOgExASsBMQE0AUkBUwFYAUkBWAFhAUsBXAFZAUsBWQFVAVEBYAFXAVEBVwFaAXoBhAGJAXoBiQGSAXwBjQGKAXwBigGGAYIBkQGIAYIBiAGLAZUBogGkAZUBpAGqAZkBpgGjAZkBowGhAZsBrAGlAZsBpQGoAbABugG+AbABvgHHAbIBwwHAAbIBwAG8AbgByAG/AbgBvwHBAcsB2AHaAcsB2gHgAc8B3AHZAc8B2QHXAdEB4gHbAdEB2wHeATMCPwJBAjMCQQJIAjcCRAJCAjcCQgJAAjkCSgJDAjkCQwJGAk4CWwJdAk4CXQJjAlICXwJcAlICXAJaAlQCZQJeAlQCXgJhArYCwwLFArYCxQLLAroCxwLEAroCxALCArwCzQLGArwCxgLJAtEC3gLgAtEC4ALmAtUC4gLfAtUC3wLdAtcC6ALhAtcC4QLkAvcCBAMGA/cCBgMMA/sCCAMFA/sCBQMDA/0CDgMHA/0CBwMKAygDNQM3AygDNwM9AywDOQM2AywDNgM0Ay4DPwM4Ay4DOAM7A0MDTwNRA0MDUQNYA0cDVANSA0cDUgNQA0kDWgNTA0kDUwNWA5wBBQAPAJwBDwCtAasBDQADAKsBAwCWAQYAIAAqAAYAKgAWABQAKAAeABQAHgALACEANgA/ACEAPwAxAC8APQA7AC8AOwAmADcAQgBLADcASwBAAD4ASQBHAD4ARwA8AEEATABVAEEAVQBKAEgAUwBRAEgAUQBGAE0AWABhAE0AYQBWAFQAXwBdAFQAXQBSAFcAYwBsAFcAbABgAF4AagBoAF4AaABcAGIAbQB2AGIAdgBrAGkAdAByAGkAcgBnAG4AeQCCAG4AggB3AHUAgAB+AHUAfgBzAHgAiACSAHgAkgCBAH8AkACGAH8AhgB9AIkApACtAIkArQCZAJcAqwChAJcAoQCOAKMAuQDCAKMAwgC0ALIAwAC+ALIAvgCpALoAxQDOALoAzgDDAMEAzADKAMEAygC/AMQAzwDYAMQA2ADNAMsA1gDUAMsA1ADJANAA2wDkANAA5ADZANcA4gDgANcA4ADVANoA5gDvANoA7wDjAOEA7QDrAOEA6wDfAOUA8AD5AOUA+QDuAOwA9wD1AOwA9QDqAPEA/AAFAfEABQH6APgAAgEAAfgAAAH2APsADAEVAfsAFQEEAQMBEwEJAQMBCQEBAQsBJgEwAQsBMAEcARoBLgEkARoBJAERAScBPAFFAScBRQE3ATUBRAFCATUBQgEsAT0BTAFWAT0BVgFGAUMBVAFKAUMBSgFBAU0BYgFrAU0BawFdAVsBagFoAVsBaAFSAWMBbQF2AWMBdgFsAWkBdQFzAWkBcwFnAW4BfgGHAW4BhwF3AXQBhQF7AXQBewFyAX0BnQGpAX0BqQGOAYwBpwGaAYwBmgGDAbEBzAHhAbEB4QG7Ab0B4wHSAb0B0gG0AdAB5gHrAdAB6wHdAd8B7QHoAd8B6AHTAecB8gH3AecB9wHsAe4B+QH0Ae4B9AHpAfEB/AEBAvEBAQL2AfgBAwL+AfgB/gHzAf0BCAINAv0BDQICAgQCDwIKAgQCCgL/AQcCEwIYAgcCGAIMAg4CGgIVAg4CFQIJAhICHQIiAhICIgIXAhkCJAIfAhkCHwIUAh4CKQIuAh4CLgIjAiUCMAIrAiUCKwIgAigCNAJJAigCSQItAi8CSwI6Ai8COgIqAjgCTwJkAjgCZAJFAkcCZgJWAkcCVgI7AlMCaQJuAlMCbgJgAmICcAJrAmICawJVAmoCdQJ6AmoCegJvAnECfAJ3AnECdwJsAnQCfwKEAnQChAJ5AnsChgKBAnsCgQJ2AoACiwKQAoACkAKFAocCkgKNAocCjQKCAooClgKbAooCmwKPApECnQKYApECmAKMApUCoAKlApUCpQKaApwCpwKiApwCogKXAqECqwKwAqECsAKmAqgCswKuAqgCrgKjAqwCtwLMAqwCzAKxArICzgK+ArICvgKtArsC0gLnArsC5wLIAsoC6QLYAsoC2AK9AtYC7QLyAtYC8gLjAuUC8wLuAuUC7gLZAuwC+AINA+wCDQPxAvQCDwP+AvQC/gLvAvwCEwMYA/wCGAMJAwsDGQMUAwsDFAP/AhIDHgMjAxIDIwMXAxoDJAMfAxoDHwMVAx0DKQM+Ax0DPgMiAyUDQAMwAyUDMAMgAy0DRANZAy0DWQM6AzwDWwNLAzwDSwMvA0gDuQHCAUgDwgFVA1cDxAGzAVcDswFKA6cAUQJYAqcAWAK1ALYAWQJMArYATAKeADIChACaADICmgA9Aj4CmwCLAD4CiwA1ApMBRQNOA5MBTgOgAZ8BTQNBA58BQQOXASYDeAGQASYDkAEzAzIDjwGBATIDgQErAw4BuALBAg4B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CtcjPK5HYb7NzEy9CtejO65HYb7NzEy9CtejO65HYb7NzEy9CtejO65HYb7NzEy9CtejO/YoXL7NzEw9CtcjPPYoXL7NzEw9CtcjPPYoXL7NzEw9CtcjPPYoXL7NzEw9CtcjPPYoXL6uR2E9CtejO/YoXL6uR2E9CtejO/YoXL6uR2E9CtejO/YoXL6uR2E9CtejO65HYb7NzEw9CtejO65HYb7NzEw9CtejO65HYb7NzEw9CtejO65HYb7NzEw9CtejO/YoXL6uR2G9Cteju/YoXL6uR2G9Cteju/YoXL6uR2G9Cteju/YoXL6uR2G9Cteju65HYb7NzEy9Cteju65HYb7NzEy9Cteju65HYb7NzEy9Cteju65HYb7NzEy9Cteju/YoXL7NzEy9CtcjvPYoXL7NzEy9CtcjvPYoXL7NzEy9CtcjvPYoXL7NzEy9CtcjvPYoXL6uR2E9Cteju/YoXL6uR2E9Cteju/YoXL6uR2E9Cteju/YoXL6uR2E9Cteju/YoXL7NzEw9CtcjvPYoXL7NzEw9CtcjvPYoXL7NzEw9CtcjvPYoXL7NzEw9CtcjvK5HYb7NzEw9Cteju65HYb7NzEw9Cteju65HYb7NzEw9Cteju65HYb7NzEw9Cteju/YoXD6uR2G9CtejO/YoXD6uR2G9CtejO/YoXD6uR2G9CtejO/YoXD6uR2G9CtejO65HYT7NzEy9CtejO65HYT7NzEy9CtejO65HYT7NzEy9CtejO65HYT7NzEy9CtejO/YoXD7NzEy9CtcjPPYoXD7NzEy9CtcjPPYoXD7NzEy9CtcjPPYoXD7NzEy9CtcjPPYoXD6uR2E9CtejO/YoXD6uR2E9CtejO/YoXD6uR2E9CtejO/YoXD6uR2E9CtejO/YoXD7NzEw9CtcjPPYoXD7NzEw9CtcjPPYoXD7NzEw9CtcjPPYoXD7NzEw9CtcjPK5HYT7NzEw9CtejO65HYT7NzEw9CtejO65HYT7NzEw9CtejO65HYT7NzEw9CtejO/YoXD6uR2G9Cteju/YoXD6uR2G9Cteju/YoXD6uR2G9Cteju/YoXD6uR2G9Cteju/YoXD7NzEy9CtcjvPYoXD7NzEy9CtcjvPYoXD7NzEy9CtcjvPYoXD7NzEy9CtcjvK5HYT7NzEy9Cteju65HYT7NzEy9Cteju65HYT7NzEy9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AAAAADrNE786zRM/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNE786zRO/Os0Tv/QENb/0BDW/AAAAADrNE786zRO/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNE786zRO/Os0Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNE786zRM/Os0Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNEz86zRO/Os0TP/QENT/0BDW/AAAAADrNEz86zRO/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNEz86zRO/Os0TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNEz86zRM/Os0TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNEz86zRO/Os0Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNEz86zRM/Os0Tv/QENT/0BDU/AAAAADrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v4/Cdb3NzEy9CtejPI/Cdb3NzEy9CtejPI/Cdb3NzEy9CtejPI/Cdb3NzEy9CtejPI/Cdb2QwvW8CtcjPY/Cdb2QwvW8CtcjPY/Cdb2QwvW8CtcjPY/Cdb2QwvW8CtcjPQrXo72QwvW8CtejPArXo72QwvW8CtejPArXo72QwvW8CtejPArXo72QwvW8CtejPI/Cdb2QwvU8CtcjPY/Cdb2QwvU8CtcjPY/Cdb2QwvU8CtcjPY/Cdb2QwvU8CtcjPY/Cdb3NzEw9CtejPI/Cdb3NzEw9CtejPI/Cdb3NzEw9CtejPI/Cdb3NzEw9CtejPArXo72QwvU8CtejPArXo72QwvU8CtejPArXo72QwvU8CtejPArXo72QwvU8CtejPI/Cdb3NzEy9CtejvI/Cdb3NzEy9CtejvI/Cdb3NzEy9CtejvI/Cdb3NzEy9CtejvArXo72QwvW8CtejvArXo72QwvW8CtejvArXo72QwvW8CtejvArXo72QwvW8CtejvI/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvQrXo72QwvU8CtejvArXo72QwvU8CtejvArXo72QwvU8CtejvArXo72QwvU8CtejvI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPI/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPQrXoz2QwvU8CtejPArXoz2QwvU8CtejPArXoz2QwvU8CtejPArXoz2QwvU8CtejPI/CdT3NzEy9CtejvI/CdT3NzEy9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CtejvI/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvQrXo72QwvU8CtejvArXo72QwvU8CtejvArXo72QwvU8CtejvArXo72QwvU8CtejvI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPI/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPQrXoz2QwvU8CtejPArXoz2QwvU8CtejPArXoz2QwvU8CtejPArXoz2QwvU8CtejPI/CdT3NzEy9CtejvI/CdT3NzEy9CtejvI/CdT3NzEy9CtejvI/CdT3NzEy9CtejvI/CdT2QwvW8CtcjvY/CdT2QwvW8CtcjvY/CdT2QwvW8CtcjvY/CdT2QwvW8CtcjvQrXoz2QwvW8CtejvArXoz2QwvW8CtejvArXoz2QwvW8CtejvArXoz2QwvW8CtejvI/CdT3NzEw9CtejvI/CdT3NzEw9CtejvI/CdT3NzEw9CtejvI/CdT3NzEw9CtejvArXoz2QwvU8CtejvArXoz2QwvU8CtejvArXoz2QwvU8CtejvArXoz2QwvU8CtejvI/CdT2QwvU8CtcjvY/CdT2QwvU8CtcjvY/CdT2QwvU8CtcjvY/CdT2QwvU8CtcjvQAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNE786zRO/Os0TP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNE786zRM/Os0TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNE786zRM/Os0TP/QENb/0BDU/AAAAADrNE786zRM/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNE786zRO/Os0Tv/QENb/0BDW/AAAAADrNE786zRO/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNE786zRO/Os0Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNE786zRM/Os0Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNEz86zRO/Os0TP/QENT/0BDW/AAAAADrNEz86zRO/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNEz86zRO/Os0TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNEz86zRM/Os0TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNEz86zRO/Os0Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNEz86zRM/Os0Tv/QENT/0BDU/AAAAADrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v7gehb0pXA+9CtejO7gehb0pXA+9CtejO7gehb0pXA+9CtejO7gehb0pXA89CtejO7gehb0pXA89CtejO7gehb0pXA89CtejO7gehb0pXA+9Cteju7gehb0pXA+9Cteju7gehb0pXA+9Cteju7gehb0pXA89Cteju7gehb0pXA89Cteju7gehb0pXA89Cteju7gehT0pXA+9CtejO7gehT0pXA+9CtejO7gehT0pXA+9CtejO7gehT0pXA89CtejO7gehT0pXA89CtejO7gehT0pXA89CtejO7gehT0pXA+9Cteju7gehT0pXA+9Cteju7gehT0pXA+9Cteju7gehT0pXA89Cteju7gehT0pXA89Cteju7gehT0pXA89CtejuwAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAALgehb0pXA+9CtejO7gehb0pXA+9CtejO7gehb0pXA+9CtejO7gehb0pXA89CtejO7gehb0pXA89CtejO7gehb0pXA89CtejO7gehb0pXA+9Cteju7gehb0pXA+9Cteju7gehb0pXA+9Cteju7gehb0pXA89Cteju7gehb0pXA89Cteju7gehb0pXA89Cteju7gehT0pXA+9CtejO7gehT0pXA+9CtejO7gehT0pXA+9CtejO7gehT0pXA89CtejO7gehT0pXA89CtejO7gehT0pXA89CtejO7gehT0pXA+9Cteju7gehT0pXA+9Cteju7gehT0pXA+9Cteju7gehT0pXA89Cteju7gehT0pXA89Cteju7gehT0pXA89CtejuwAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAJmZWb8pXI+9DNejPJmZWb8pXI+9DNejPJmZWb8pXI+9DNejPJmZWb8pXI+9DNejPJmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PQrXY7+QwvW8CtejPArXY7+QwvW8CtejPArXY7+QwvW8CtejPArXY7+QwvW8CtejPJmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb8pXI89DNejPJmZWb8pXI89DNejPJmZWb8pXI89DNejPJmZWb8pXI89DNejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvJmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vZmZWb+SwvU8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DNejPJmZWb8pXI+9DNejPJmZWb8pXI+9DNejPJmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PQrXY7+QwvW8CtejPArXY7+QwvW8CtejPArXY7+QwvW8CtejPArXY7+QwvW8CtejPJmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb8pXI89DNejPJmZWb8pXI89DNejPJmZWb8pXI89DNejPJmZWb8pXI89DNejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvJmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vQrXY7+QwvU8CtejvArXY7+QwvU8CtejvArXY7+QwvU8CtejvArXY7+QwvU8CtejvJmZWT8pXI+9DNejPJmZWT8pXI+9DNejPJmZWT8pXI+9DNejPJmZWT8pXI+9DNejPArXYz+QwvW8CtejPArXYz+QwvW8CtejPArXYz+QwvW8CtejPArXYz+QwvW8CtejPJmZWT+SwvW8j8J1PZmZWT+SwvW8j8J1PZmZWT+SwvW8j8J1PZmZWT+SwvW8j8J1PZmZWT8pXI89DNejPJmZWT8pXI89DNejPJmZWT8pXI89DNejPJmZWT8pXI89DNejPJmZWT+SwvU8j8J1PZmZWT+SwvU8j8J1PZmZWT+SwvU8j8J1PZmZWT+SwvU8j8J1PQrXYz+QwvU8CtejPArXYz+QwvU8CtejPArXYz+QwvU8CtejPArXYz+QwvU8CtejPJmZWT8pXI+9DNejvJmZWT8pXI+9DNejvJmZWT8pXI+9DNejvJmZWT8pXI+9DNejvJmZWT+SwvW8j8J1vZmZWT+SwvW8j8J1vZmZWT+SwvW8j8J1vZmZWT+SwvW8j8J1vQrXYz+QwvW8CtejvArXYz+QwvW8CtejvArXYz+QwvW8CtejvArXYz+QwvW8CtejvJmZWT8pXI89DNejvJmZWT8pXI89DNejvJmZWT8pXI89DNejvJmZWT8pXI89DNejvArXYz+QwvU8CtejvArXYz+QwvU8CtejvArXYz+QwvU8CtejvArXYz+QwvU8CtejvJmZWT+SwvU8j8J1vZmZWT+SwvU8j8J1vZmZWT+SwvU8j8J1vZmZWT+SwvU8j8J1vQAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAArLE78KyxO/mdETP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PwrLE78KyxO/mdETP/QENb8AAAAA9AQ1PwrLE78KyxO/mdETP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PwrLE78KyxM/mdETP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAArLE78KyxM/mdETP/QENb/0BDU/AAAAAArLE78KyxM/mdETP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAArLE78KyxO/mdETv/QENb/0BDW/AAAAAArLE78KyxO/mdETv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vwrLE78KyxO/mdETv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAArLE78KyxM/mdETv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vwrLE78KyxM/mdETv/QENb8AAAAA9AQ1vwrLE78KyxM/mdETv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAArLEz8KyxO/mdETP/QENT/0BDW/AAAAAArLEz8KyxO/mdETP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PwrLEz8KyxO/mdETP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAArLEz8KyxM/mdETP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PwrLEz8KyxM/mdETP/QENT8AAAAA9AQ1PwrLEz8KyxM/mdETP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAArLEz8KyxO/mdETv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vwrLEz8KyxO/mdETv/QENT8AAAAA9AQ1vwrLEz8KyxO/mdETv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAArLEz8KyxM/mdETv/QENT/0BDU/AAAAAArLEz8KyxM/mdETv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vwrLEz8KyxM/mdETv/QENT8AAAAA9AQ1vwzXo7sK1yO9rkdBPwzXo7sK1yO9rkdBPwzXo7sK1yO9rkdBPwzXo7sK1yO9rkdBPwzXo7sK16O8ZmZGPwzXo7sK16O8ZmZGPwzXo7sK16O8ZmZGPwzXo7sK16O8ZmZGP83MzLwK16O8rkdBP83MzLwK16O8rkdBP83MzLwK16O8rkdBP83MzLwK16O8rkdBPwzXo7sK16M8ZmZGPwzXo7sK16M8ZmZGPwzXo7sK16M8ZmZGPwzXo7sK16M8ZmZGPxDXo7sK1yM9rkdBPxDXo7sK1yM9rkdBPxDXo7sK1yM9rkdBPxDXo7sK1yM9rkdBP83MzLwK16M8rkdBP83MzLwK16M8rkdBP83MzLwK16M8rkdBP83MzLwK16M8rkdBPxDXo7sK1yO9rkdBvxDXo7sK1yO9rkdBvxDXo7sK1yO9rkdBvxDXo7sK1yO9rkdBv83MzLwK16O8rkdBv83MzLwK16O8rkdBv83MzLwK16O8rkdBv83MzLwK16O8rkdBvwzXo7sK16O8ZmZGvwzXo7sK16O8ZmZGvwzXo7sK16O8ZmZGvwzXo7sK16O8ZmZGvwzXo7sK1yM9rkdBvwzXo7sK1yM9rkdBvwzXo7sK1yM9rkdBvwzXo7sK1yM9rkdBvwzXo7sK16M8ZmZGvwzXo7sK16M8ZmZGvwzXo7sK16M8ZmZGvwzXo7sK16M8ZmZGv83MzLwK16M8rkdBv83MzLwK16M8rkdBv83MzLwK16M8rkdBv83MzLwK16M8rkdBvxDXozsK1yO9rkdBPxDXozsK1yO9rkdBPxDXozsK1yO9rkdBPxDXozsK1yO9rkdBP83MzDwK16O8rkdBP83MzDwK16O8rkdBP83MzDwK16O8rkdBP83MzDwK16O8rkdBPwzXozsK16O8ZmZGPwzXozsK16O8ZmZGPwzXozsK16O8ZmZGPwzXozsK16O8ZmZGPwzXozsK1yM9rkdBPwzXozsK1yM9rkdBPwzXozsK1yM9rkdBPwzXozsK1yM9rkdBPwzXozsK16M8ZmZGPwzXozsK16M8ZmZGPwzXozsK16M8ZmZGPwzXozsK16M8ZmZGP83MzDwK16M8rkdBP83MzDwK16M8rkdBP83MzDwK16M8rkdBP83MzDwK16M8rkdBPwzXozsK1yO9rkdBvwzXozsK1yO9rkdBvwzXozsK1yO9rkdBvwzXozsK1yO9rkdBvwzXozsK16O8ZmZGvwzXozsK16O8ZmZGvwzXozsK16O8ZmZGvwzXozsK16O8ZmZGv83MzDwK16O8rkdBv83MzDwK16O8rkdBv83MzDwK16O8rkdBv83MzDwK16O8rkdBvxDXozsK1yM9rkdBvxDXozsK1yM9rkdBvxDXozsK1yM9rkdBvxDXozsK1yM9rkdBv83MzDwK16M8rkdBv83MzDwK16M8rkdBv83MzDwK16M8rkdBv83MzDwK16M8rkdBvwzXozsK16M8ZmZGvwzXozsK16M8ZmZGvwzXozsK16M8ZmZGvwzXozsK16M8ZmZGvwAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPE7/byBO/ac8TP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPE7/byBO/ac8TP/QENb8AAAAA9AQ1P2nPE7/byBO/ac8TP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPE7/byBM/ac8TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPE7/byBM/ac8TP/QENb/0BDU/AAAAAGnPE7/byBM/ac8TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPE7/byBO/ac8Tv/QENb/0BDW/AAAAAGnPE7/byBO/ac8Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPE7/byBO/ac8Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPE7/byBM/ac8Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1v2nPE7/byBM/ac8Tv/QENb8AAAAA9AQ1v2nPE7/byBM/ac8Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPEz/byBO/ac8TP/QENT/0BDW/AAAAAGnPEz/byBO/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPEz/byBO/ac8TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPEz/byBM/ac8TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPEz/byBM/ac8TP/QENT8AAAAA9AQ1P2nPEz/byBM/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPEz/byBO/ac8Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPEz/byBO/ac8Tv/QENT8AAAAA9AQ1v2nPEz/byBO/ac8Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPEz/byBM/ac8Tv/QENT/0BDU/AAAAAGnPEz/byBM/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AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPEz/byBO/ac8TP/QENT/0BDW/AAAAAGnPEz/byBO/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPEz/byBO/ac8TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPEz/byBM/ac8TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPEz/byBM/ac8TP/QENT8AAAAA9AQ1P2nPEz/byBM/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPEz/byBO/ac8Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPEz/byBO/ac8Tv/QENT8AAAAA9AQ1v2nPEz/byBO/ac8Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPEz/byBM/ac8Tv/QENT/0BDU/AAAAAGnPEz/byBM/ac8Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1v2nPEz/byBM/ac8Tv/QENT8AAAAA9AQ1vw==";var ui={duration:161.8,end_card:3,rate:24e3,note:"Azure-opptakene er uendret; kun stillhet f\xF8r/etter hvert kapittel.",chapters:[{chapter:1,title:"Farger",start:0,speech:0,audio:27.8625,end:28.3625,sentences:[0,3.6,7.2,11.1,13.8,17.35,20.85,24.45]},{chapter:2,title:"Kj\xF8refeltlinje",start:28.3625,speech:28.8625,audio:12.425,end:41.7875,sentences:[0,2.76,5.79,10.07]},{chapter:3,title:"Varsellinje",start:41.7875,speech:42.2875,audio:18.2125,end:61,sentences:[0,3.6,6.34,11.15,14.64]},{chapter:4,title:"Sperrelinje",start:61,speech:61.5,audio:16.675,end:78.675,sentences:[0,3.94,6.71,9.74,13.29]},{chapter:5,title:"Kombinerte linjer",start:78.675,speech:80.175,audio:21.125,end:101.8,sentences:[0,4.44,7.14,11.96,16.15]},{chapter:6,title:"Sperreomr\xE5de",start:101.8,speech:102.3,audio:12.7,end:115.5,sentences:[0,2.58,6.91,9.39]},{chapter:7,title:"Kj\xF8refeltpiler",start:115.5,speech:116,audio:11.7625,end:128.2625,sentences:[0,3.77,7.3]},{chapter:8,title:"Skillelinje",start:128.2625,speech:128.7625,audio:13.4375,end:142.7,sentences:[0,6.3,10.43]},{chapter:9,title:"Kantlinje",start:142.7,speech:143.2,audio:15.1,end:158.8,sentences:[0,3.12,6.45,10.22,12.69]}]};var K0=[{label:"01 \xB7 FARGER",points:[["Veimerkingen viser","hvordan veien brukes"],["Fargen forteller","hva merkingen betyr"],["Gult skiller","motg\xE5ende retninger"],["Hvit oppmerking","har flere oppgaver"],["Hvitt kan skille felt","i samme retning"],["Kantlinjen markerer","kj\xF8rebanens ytterkant"],["Utenfor kj\xF8rebanen:","veiskulder eller veikant"],["Gangfelt er ogs\xE5","hvit oppmerking"]]},{label:"02 \xB7 KJ\xD8REFELTLINJE",points:[["Kj\xF8refeltlinje"],["Korte streker,","lange mellomrom"],["Kan krysses for \xE5 skifte","felt eller kj\xF8re forbi"],["Bare n\xE5r det er","trygt og lovlig"]]},{label:"03 \xB7 VARSELLINJE",points:[["Lange streker,","korte mellomrom"],["Motsatt av","kj\xF8refeltlinjen"],["Gul: for kort sikt til","vanlig forbikj\xF8ring"],["Hvit: fare ved","\xE5 skifte felt"],["Brutt linje betyr ikke","at det er trygt"]]},{label:"04 \xB7 SPERRELINJE",points:[["Hvit sperrelinje mellom","felt i samme retning"],["Ikke kj\xF8r p\xE5","eller over"],["Dobbel gul","sperrelinje"],["Begge retninger har","sperrelinje n\xE6rmest"],["Samme forbud:","ikke p\xE5 eller over"]]},{label:"05 \xB7 KOMBINERTE LINJER",points:[["Brutt og heltrukken","side om side"],["Linjen n\xE6rmest","deg gjelder"],["Brutt linje n\xE6rmest:","forbikj\xF8ring n\xE5r trygt"],["M\xF8tende trafikk har","sperrelinjen n\xE6rmest"],["Retur til h\xF8yre","side er tillatt"]]},{label:"06 \xB7 SPERREOMR\xC5DE",points:[["Sperreomr\xE5de"],["Skr\xE5 striper og","heltrukken kant"],["Ikke kj\xF8r","inn i det"],["F\xF8lg kj\xF8refeltet","videre"]]},{label:"07 \xB7 KJ\xD8REFELTPILER",points:[["Pilene viser hvilket","felt du skal bruke"],["Velg felt","i god tid"],["Sperrelinje og pil:","kj\xF8r dit pilen viser"]]},{label:"08 \xB7 SKILLELINJE",points:[["Skiller vanlig felt","fra kollektivfelt"],["Like lange streker","og mellomrom"],["Skiltene viser hvem","som kan bruke feltet"]]},{label:"09 \xB7 KANTLINJE",points:[["Kantlinjen viser hvor","kj\xF8rebanen slutter"],["Heltrukken kantlinje","er ikke sperrelinje"],["Smal vei uten midtlinje:","brutt kantlinje"],["Se p\xE5 farge","og m\xF8nster"],["Da forst\xE5r du hva","linjen betyr"]]}],fA={wide:{W:1920,H:1080,sceneH:850,pad:64,font:62,line:74,label:28,logo:28,labelY:46,firstY:118},mobile:{W:1080,H:1350,sceneH:1090,pad:56,font:52,line:64,label:26,logo:26,labelY:44,firstY:114}};function hd(i,e,t,n,s,r){let{W:o,H:a,sceneH:A,pad:l,font:c,line:h}=e,u=K0[n],d=t.chapters[n].sentences,m=0;for(let w=0;w<d.length;w++)s>=d[w]-.15&&(m=w);let y=u.points[Math.min(m,u.points.length-1)];i.save(),i.fillStyle="#14363f",i.fillRect(0,A,o,a-A),i.fillStyle="#e6c65e",i.fillRect(l,A+e.labelY-e.label-8,40,4),i.textBaseline="alphabetic",i.textAlign="left",i.fillStyle="#a9c2c4",i.font=`600 ${e.label}px Arial`,i.fillText(u.label,l,A+e.labelY),i.textAlign="right",i.fillStyle="#dce8e7",i.font=`700 ${e.logo}px Arial`,i.fillText("teori-test.no",o-l,A+e.labelY),i.textAlign="left",i.fillStyle="#ffffff",i.font=`700 ${c}px Arial`;let p=s-(d[m]-.15);i.globalAlpha=Math.min(1,.35+p/.25);let f=y.map((w,b)=>{let E=A+e.firstY+b*h,v=i.measureText(w).width;return i.fillText(w,l,E),{text:w,x:l,y:E-c,width:v,height:c*1.25,fontSize:c}});i.globalAlpha=1;let T=t.duration,P=a-16,M=o-l*2;i.fillStyle="#ffffff22",i.fillRect(l,P,M,4),i.fillStyle="#e6c65e",i.fillRect(l,P,M*Math.max(0,Math.min(1,r/T)),4),i.fillStyle="#14363f";for(let w of t.chapters.slice(1))i.fillRect(l+M*w.start/T-1,P,3,4);return i.restore(),{point:y.join(" "),bounds:f,sceneHeight:A,width:o,height:a}}var Li=fA.wide,st=Li.W,qt=Li.H,jt=Li.sceneH,Rc=ui.duration,zc=(i,e=0,t=1)=>Math.max(e,Math.min(t,i)),An=i=>(i=zc(i),i*i*i*(i*(i*6-15)+10)),Zs=(i,e,t)=>i+(e-i)*t,to=(i,e,t)=>new L(i,e,t),Ut=(i,e={})=>new si({color:i,roughness:.95,...e}),dd=i=>new Xt({color:i,toneMapped:!1,side:Ft});function fd(i,e,t,n,s){let r=document.createElement("canvas");r.width=r.height=i;let o=r.getContext("2d"),a=o.createImageData(i,i),A=s,l=()=>(A=Math.imul(A,1664525)+1013904223>>>0,A/4294967296);for(let h=0;h<i*i;h++){let u=e+(l()-.5)*t;l()<n&&(u+=(l()<.5?-1:1)*t*1.6),u=Math.max(0,Math.min(255,u)),a.data.set([u,u,u,255],h*4)}o.putImageData(a,0,0);let c=new wi(r);return c.wrapS=c.wrapT=Bn,c.colorSpace=Mt,c.anisotropy=4,c}var Uc=dd("#ffd342"),$t=dd("#faf8ed"),pA=Ut("#6b757d",{map:fd(256,212,34,.05,7)}),Lc=Ut("#cfcfbd",{map:fd(128,205,60,.12,11)}),Nc={yellow:Uc,white:$t},Oc=17921;function ln(){return Oc=Math.imul(Oc,1664525)+1013904223>>>0,Oc/4294967296}async function q0(){let i=document.getElementById("film");i.width=st,i.height=qt;let e=i.getContext("2d",{alpha:!1,willReadFrequently:!0}),t=new AA({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setSize(st,jt),t.setPixelRatio(1),t.outputColorSpace=Mt,t.toneMapping=Wr,t.toneMappingExposure=1.03,t.shadowMap.enabled=!0,t.shadowMap.type=fa;let n=new dr;{let ie=document.createElement("canvas");ie.width=4,ie.height=256;let oe=ie.getContext("2d"),I=oe.createLinearGradient(0,0,0,256);I.addColorStop(0,"#6ea6d4"),I.addColorStop(.55,"#a9cfe6"),I.addColorStop(1,"#dcebea"),oe.fillStyle=I,oe.fillRect(0,0,4,256);let S=new wi(ie);S.colorSpace=Mt,n.background=S}n.fog=new hr("#d3e4e4",120,430);let s=new Dt(32,st/jt,.15,800);n.add(new Or("#d9ecff","#5c7745",1.55));let r=new Hi("#ffe5bf",3.1);r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:130}),r.shadow.bias=-4e-4,r.shadow.normalBias=.025,n.add(r,r.target);function o(ie,oe,I){let S=new It(ie,oe);return S.receiveShadow=!0,I.add(S),S}function a(ie,oe,I,S=.06){let Y=new Ls;ie.forEach(([Ae,Te],Se)=>Se?Y.lineTo(Ae,Te):Y.moveTo(Ae,Te)),Y.closePath();let le=new Ir(Y);le.rotateX(-Math.PI/2);let Q=o(le,oe,I);return Q.position.y=S,Q}function A(ie,{curve:oe=!1,narrow:I=!1,urban:S=!1,fork:Y=!1,junction:le=!1,combined:Q=!1}={}){let Ae=new Vt;n.add(Ae),Ae.visible=!1;let Te=j=>Q?-32+32*An((j+15)/70):oe?38*An((j-65)/95):0,Se=j=>(Te(j+.02)-Te(j-.02))/.04,Be=(j,q=0,he=.06)=>{let D=Se(j),re=Math.hypot(1,D);return to(Te(j)+q/re,he,-j+q*D/re)},Fe=[0];for(let j=1;j<=5e3;j++)Fe.push(Fe[j-1]+Math.hypot(.1,Te(j*.1)-Te((j-1)*.1)));function Ge(j){if(j<=0)return j;let q=0,he=Fe.length-1;for(;he-q>1;){let D=q+he>>1;Fe[D]<j?q=D:he=D}return .1*(q+(j-Fe[q])/(Fe[he]-Fe[q]))}function _e(j,q,he,D,re,H=Ae,fe=.061){let ue=Math.max(1,Math.ceil((q-j)/1.2)),Z=[],we=[],me=[];for(let Ye=0;Ye<=ue;Ye++){let lt=Zs(j,q,Ye/ue),Tt=typeof he=="function"?he(lt):he,Rt=typeof D=="function"?D(lt):D;for(let Yt of[-1,1]){let Nn=Be(lt,Tt+Yt*Rt/2,fe);Z.push(Nn.x,Nn.y,Nn.z),me.push((Tt+Yt*Rt/2)/3,lt/3)}if(Ye<ue){let Yt=Ye*2;we.push(Yt,Yt+1,Yt+2,Yt+1,Yt+3,Yt+2)}}let ke=new yt;return ke.setAttribute("position",new At(Z,3)),ke.setAttribute("uv",new At(me,2)),ke.setIndex(we),ke.computeVertexNormals(),o(ke,re,H)}function He(j,q,he,D,re=0,H=.15,fe=-60,ue=410){for(let Z=fe;Z<ue;Z+=he+D)_e(Z,Math.min(Z+he,ue),re,H,Nc[q],j)}function rt(j,q="yellow"){let he=new Vt;if(Ae.add(he),j==="dash"&&He(he,q,3,9),j==="warning"&&He(he,q,9,3),j==="solid"&&_e(-60,410,0,.15,Nc[q],he),j==="double")for(let D of[-.15,.15])_e(-60,410,D,.15,Nc[q],he);return j==="combined"&&(He(he,"yellow",9,3,0,.15,-60,55),_e(55,245,-.15,.15,Uc,he),He(he,"yellow",3,9,.15,.15,55,245),He(he,"yellow",3,9,0,.15,245,410)),j==="bus"&&He(he,"white",2,2,0,.2),he.visible=!1,he}let et=I?2.65:3.9;if(Y){_e(-60,150,0,D=>7.8+Math.max(0,D-70)*.16,Lc,Ae,.01),_e(-60,150,0,D=>7.2+Math.max(0,D-70)*.16,pA,Ae,.035);for(let D of[-1,1]){_e(-60,150,H=>D*(3.3+Math.max(0,H-70)*.08),.15,$t);let re=H=>D*(8.2+(H-150)*.08);_e(150,410,re,4.2,Lc,Ae,.01),_e(150,410,re,3.6,pA,Ae,.035);for(let H of[-1.5,1.5])_e(150,410,fe=>re(fe)+H,.15,$t)}let j=70,q=150,he=D=>Math.max(0,D-j)*.08;for(let D of[-1,1])_e(j,q,re=>D*he(re),.15,$t);a([[-he(q),q],[he(q),q],[he(q),q+.15],[-he(q),q+.15]],$t,Ae),a([[0,j],[-.5,j+6.25],[.5,j+6.25]],$t,Ae);for(let D=79;D<146;D+=4){let re=he(D)-.12;a([[-re,D],[0,D-2],[re,D],[re,D+.5],[0,D-1.5],[-re,D+.5]],$t,Ae)}He(Ae,"white",1,3,0,.15,-60,66)}else{_e(-60,410,0,et*2+.6,Lc,Ae,.01),_e(-60,410,0,et*2,pA,Ae,.035);for(let j of[-1,1])I?He(Ae,"white",3,3,j*(et-.25),.1):le&&j===1?(_e(-60,108,3.62,.15,$t),_e(124,410,3.62,.15,$t)):_e(-60,410,j*(et-.28),.15,$t)}let tt={dash:rt("dash"),warning:rt("warning"),double:rt("double"),combined:rt("combined"),whiteDash:rt("dash","white"),whiteWarning:rt("warning","white"),whiteSolid:rt("solid","white"),bus:rt("bus","white")},z=Ut(S?"#9cae7d":"#8eaf60",{flatShading:!0,vertexColors:!0,side:Ft});function _t(j,q){if(S||Y)return-.12;let he=(j-Te(q))/Math.hypot(1,Se(q)),D=An((Math.abs(he)-9)/13),re=oe||Q?15*Math.exp(-(((q-(Q?20:112))/29)**2))*Math.exp(-(((he-18)/14)**2)):0;return-.12+D*(.5+.6*Math.sin(q*.035+j*.02)+re)}let it=[],C=[],g=oe||Q?2:4;for(let j=-80;j<420;j+=g)for(let q=-140;q<160;q+=g)for(let he of[[[q,j],[q+g,j],[q,j+g]],[[q+g,j],[q+g,j+g],[q,j+g]]]){let D=.96+ln()*.08,re=he[0][0],H=he[0][1],fe=S?0:.5*Math.sin(re*.045+H*.013)+.5*Math.sin(H*.031-re*.022),ue=Math.abs(re-Te(H)),Z=fe>.55&&ue>16?[1.13,1.07,.78]:fe<-.5&&ue>14?[.8,.9,.8]:[1,1,1];!S&&ue>8&&ue<11&&(Z=[Z[0]*.9,Z[1]*.94,Z[2]*.9]);for(let[we,me]of he)it.push(we,_t(we,me),-me),C.push(D*Z[0],D*Z[1],D*Z[2])}let F=new yt;F.setAttribute("position",new At(it,3)),F.setAttribute("color",new At(C,3)),F.computeVertexNormals();let G=o(F,z,Ae);if(Q){let j=o(new Os(1,1),Ut("#82918a",{flatShading:!0}),Ae);j.position.copy(Be(17,18,4.7)),j.scale.set(7,6,11)}let ee=Ut("#7b7052"),ge=Ut("#608858",{flatShading:!0}),ve=180,ne=o(new Si(.14,.2,1,5),ee,new Vt),se=new sn(ne.geometry,ee,ve),Me=new sn(new Os(1,0),ge,ve),pe=new gt;for(let j=0;j<ve;j++){let q=-40+ln()*420,he=j%2?-1:1;le&&he===1&&q>95&&q<137&&(q+=55);let D=he*(Y?34+ln()*60:12+ln()*72),re=Te(q)+D,H=_t(re,q),fe=3+ln()*3;pe.position.set(re,H+fe*.28,-q),pe.scale.set(1,fe*.56,1),pe.updateMatrix(),se.setMatrixAt(j,pe.matrix),pe.position.set(re,H+fe*.72,-q),pe.scale.set(fe*.31,fe*.43,fe*.31),pe.rotation.y=ln()*6,pe.updateMatrix(),Me.setMatrixAt(j,pe.matrix),Me.setColorAt(j,new je().setHSL(.25+ln()*.045,.29+ln()*.1,.36+ln()*.1))}Ae.add(se,Me);for(let j=0;j<8;j++)o(new ii(45+ln()*30,50+ln()*60,5),Ut("#8eafb5",{flatShading:!0}),Ae).position.set(-170+j*48,10,-330-ln()*50);{let j=[...ie].reduce((ue,Z)=>ue*31+Z.charCodeAt(0)>>>0,977),q=()=>(j=Math.imul(j,1664525)+1013904223>>>0,j/4294967296),he=Ut("#3d6643",{flatShading:!0}),D=S?40:150,re=new sn(new ii(1,1,6),he,D),H=new sn(new ii(1,1,6),he,D),fe=new sn(new Si(.12,.16,1,5),ee,D);for(let ue=0;ue<D;ue++){let Z=-40+q()*440,we=q()<.5?-1:1;le&&we===1&&Z>95&&Z<137&&(Z+=60);let me=we*(Y?36+q()*70:S?26+q()*40:13+q()*85),ke=Te(Z)+me,Ye=_t(ke,Z),lt=4+q()*6,Tt=lt*.24;pe.rotation.set(0,q()*6,0),pe.position.set(ke,Ye+lt*.12,-Z),pe.scale.set(1,lt*.25,1),pe.updateMatrix(),fe.setMatrixAt(ue,pe.matrix),pe.position.set(ke,Ye+lt*.45,-Z),pe.scale.set(Tt*1.15,lt*.6,Tt*1.15),pe.updateMatrix(),re.setMatrixAt(ue,pe.matrix),pe.position.set(ke,Ye+lt*.78,-Z),pe.scale.set(Tt*.75,lt*.42,Tt*.75),pe.updateMatrix(),H.setMatrixAt(ue,pe.matrix);let Rt=new je().setHSL(.36+q()*.04,.28+q()*.1,.22+q()*.08);re.setColorAt(ue,Rt),H.setColorAt(ue,Rt)}if(Ae.add(re,H,fe),!S&&!Y){let ue=[];for(let me=-40;me<400;me+=40)for(let ke of[-1,1])ue.push(Be(me,ke*(et+.75),0));let Z=new sn(new fn(.12,1,.12),Ut("#f4f4ee"),ue.length),we=new sn(new fn(.13,.22,.13),Ut("#1d2224"),ue.length);ue.forEach((me,ke)=>{pe.rotation.set(0,0,0),pe.scale.set(1,1,1),pe.position.set(me.x,.38,me.z),pe.updateMatrix(),Z.setMatrixAt(ke,pe.matrix),pe.position.set(me.x,.77,me.z),pe.updateMatrix(),we.setMatrixAt(ke,pe.matrix)}),Z.castShadow=we.castShadow=!0,Ae.add(Z,we)}if(oe){let ue=-(et+.65),Z=[],we=[],me=0;for(let Rt=60;Rt<=170;Rt+=1.2){for(let Yt of[.5,.82]){let Nn=Be(Rt,ue,Yt);Z.push(Nn.x,Nn.y,Nn.z)}Rt>60&&we.push(me-2,me-1,me,me-1,me+1,me),me+=2}let ke=new yt;ke.setAttribute("position",new At(Z,3)),ke.setIndex(we),ke.computeVertexNormals();let Ye=o(ke,Ut("#b9c1c3",{metalness:.55,roughness:.4,side:Ft}),Ae);Ye.castShadow=!0;let lt=[];for(let Rt=60;Rt<=170;Rt+=4)lt.push(Be(Rt,ue-.05,0));let Tt=new sn(new fn(.09,.85,.09),Ut("#8b9496"),lt.length);lt.forEach((Rt,Yt)=>{pe.rotation.set(0,0,0),pe.scale.set(1,1,1),pe.position.set(Rt.x,.42,Rt.z),pe.updateMatrix(),Tt.setMatrixAt(Yt,pe.matrix)}),Ae.add(Tt)}if(!S)for(let ue=0;ue<9;ue++){let Z=70+q()*80,we=50+q()*45,me=-220+ue*55+q()*20,ke=-400-q()*60;o(new ii(we,Z,6),Ut("#7f9aa6",{flatShading:!0}),Ae).position.set(me,Z/2-8,ke),o(new ii(we*.3,Z*.3,6),Ut("#eef3f4",{flatShading:!0}),Ae).position.set(me,Z-8-Z*.15+.5,ke)}}if(S){let j=Ut("#d3d3c4");for(let q of[-1,1])le&&q===1?(_e(-60,108,5,1.6,j,Ae,.1),_e(124,410,5,1.6,j,Ae,.1)):_e(-60,410,q*5,1.6,j,Ae,.1);for(let q=-15;q<320;q+=25)for(let he of[-1,1]){if(le&&he===1&&q>90&&q<145)continue;let D=4+ln()*7,re=o(new fn(9,D,11),Ut(["#c5d2ca","#d7ccb5","#a8bfc4"][Math.floor(ln()*3)]),Ae);re.position.set(he*17,D/2,-q),re.castShadow=!0;for(let H=1.6;H<D-1;H+=2.4)for(let fe=-3;fe<=3;fe+=3)o(new fn(.03,.95,1.2),Ut("#537d8a"),Ae).position.set(he*12.48,H,-q+fe)}}let xe=new Vt;Ae.add(xe);for(let j=-3.5;j<3.6;j+=1)_e(65,69,j,.5,$t,xe);if(xe.visible=!1,le){a([[3.3,108],[8,112],[145,112],[145,120],[8,120],[3.3,124]],pA,Ae,.04);for(let j of[112,120])a([[8,j-.075],[145,j-.075],[145,j+.075],[8,j+.075]],$t,Ae);for(let j=13;j<145;j+=12)a([[j,115.925],[j+3,115.925],[j+3,116.075],[j,116.075]],Uc,Ae);for(let j of[110.8,121.2])a([[8,j-.8],[145,j-.8],[145,j+.8],[8,j+.8]],Ut("#d3d3c4"),Ae,.1);for(let j of[!1,!0]){let q=[];for(let he=0;he<=24;he++){let D=he/24*Math.PI/2,re=7.62-4*Math.cos(D),H=j?124-4*Math.sin(D):108+4*Math.sin(D);q.push([re,H])}for(let he=0;he<q.length-1;he++){let[D,re]=q[he],[H,fe]=q[he+1];a([[D-.07,re],[D+.07,re],[H+.07,fe],[H-.07,fe]],$t,Ae)}}for(let j of[50,75,98])l(Ae,-1.8,j,!1),l(Ae,1.8,j,!0);for(let j of Object.values(tt))j.visible=!1;He(Ae,"white",1,3,0,.15,-60,62),_e(66,110,0,.15,$t)}function ye(j){Object.entries(tt).forEach(([q,he])=>he.visible=q===j)}return{name:ie,root:Ae,road:Be,slope:Se,route:Ge,strip:_e,markings:ye,crosswalk:xe,half:et,terrain:G}}function l(ie,oe,I,S){a((S?[[-.15,-3],[.15,-3],[.15,.4],[1,.4],[1,-.35],[2,1],[1,2.3],[1,1.5],[-.15,1.5]]:[[-.16,-3],[.16,-3],[.16,1],[.8,1],[0,3],[-.8,1],[-.16,1]]).map(([le,Q])=>[oe+le*(S?.65:1),I+Q]),$t,ie,.064)}let c={rural:A("Toveisvei"),curve:A("Toveisvei med kurve",{curve:!0}),same:A("To felt i samme retning"),sameCurve:A("Samme retning gjennom kurve",{curve:!0}),combined:A("Avgrenset sperrelinje ved kurve",{combined:!0}),fork:A("Veideling",{fork:!0}),junction:A("Feltvalg foran kryss",{urban:!0,junction:!0}),bus:A("Vanlig felt og kollektivfelt",{urban:!0}),narrow:A("Smal toveisvei",{narrow:!0})};function h(ie,oe,I,S){let Y=document.createElement("canvas");Y.width=512,Y.height=256;let le=Y.getContext("2d");le.fillStyle="#fffdf2",le.font="bold 100px Arial",le.textAlign="center",le.fillText(oe,256,175);let Q=new wi(Y);Q.colorSpace=Mt;let Ae=o(new Pi(2.5,4),new Xt({map:Q,transparent:!0,depthWrite:!1,toneMapped:!1}),ie);Ae.rotation.x=-Math.PI/2,Ae.position.set(I,.07,-S)}for(let ie=30;ie<190;ie+=30)h(c.bus.root,"BUSS",1.8,ie);let u=document.createElement("canvas");u.width=256,u.height=320;let d=u.getContext("2d");d.fillStyle="#1565aa",d.fillRect(0,0,256,320),d.strokeStyle="white",d.lineWidth=10,d.strokeRect(8,8,240,304),d.fillStyle="white",d.beginPath(),d.roundRect(64,64,128,160,16),d.fill(),d.fillStyle="#1565aa",d.fillRect(77,95,102,68),d.fillRect(91,76,74,10),d.fillRect(77,190,18,14),d.fillRect(161,190,18,14),d.fillStyle="white",d.fillRect(74,219,20,27),d.fillRect(162,219,20,27);let m=new wi(u);m.colorSpace=Mt;let y=[35,95,155].map(ie=>{let oe=o(new Pi(1.6,2),new Xt({map:m,side:Ft,toneMapped:!1}),c.bus.root);return oe.position.set(4.8,3,-ie),o(new Si(.05,.05,2.6,6),Ut("#85949a"),c.bus.root).position.set(4.8,1,-ie),oe}),p=Uint8Array.from(atob(ud),ie=>ie.charCodeAt(0)),f=(await new uA().parseAsync(p.buffer,"")).scene;function T(ie){let oe=f.clone(!0),I=[];oe.traverse(Y=>{if(Y.name.startsWith("Hjul_")&&I.push(Y),Y.isMesh){Y.castShadow=!0,Y.receiveShadow=!0,Y.material=Array.isArray(Y.material)?Y.material.map(le=>le.clone()):Y.material.clone();for(let le of Array.isArray(Y.material)?Y.material:[Y.material])le.name==="Lakk"&&le.color.set(ie)}});let S=[];for(let Y of[-1,1])for(let le of[-1.85,1.85]){let Q=new It(new fn(.19,.13,.06),new Xt({color:"#ffb629",toneMapped:!1}));Q.position.set(Y*.78,.65,le),oe.add(Q),S.push({light:Q,side:Y})}return n.add(oe),{obj:oe,wheels:I,signals:S}}let P=T("#1689c9"),M=T("#acb6b9"),w=T("#c4473b");function b(ie,oe,I,S,Y=0,le=0,Q=0){let Ae=oe.route(I);ie.obj.position.copy(oe.road(Ae,S,.065)),ie.obj.rotation.y=Math.PI-Math.atan(oe.slope(Ae))-Y,ie.wheels.forEach(Te=>Te.rotation.x=I/.34),ie.signals.forEach(({light:Te,side:Se})=>Te.visible=Se===-le&&Math.floor(Q*2.4)%2===0)}function E(ie,oe,{height:I=11,behind:S=19,ahead:Y=12,x:le=0}={}){s.position.copy(ie.road(ie.route(oe-S),le,I)),s.lookAt(ie.road(ie.route(oe+Y*.4),0,.3))}function v(ie,oe,I,S,Y,le){e.beginPath(),e.roundRect(ie,oe,I,S,Y),e.fillStyle=le,e.fill()}function _(ie,oe,I,S,Y="#fff",le=600){e.font=`${le} ${S}px Arial,sans-serif`,e.fillStyle=Y,e.fillText(ie,oe,I)}function R(ie,oe,I,S=!1){let Y=ie.road(oe,I,.12).project(s),le=ie.road(oe+(S?-9:9),I,.12).project(s),Q=Ge=>Math.round(Ge*64)/64,Ae=Q((Y.x+1)*st/2),Te=Q((1-Y.y)*jt/2),Se=Q((le.x+1)*st/2),Be=Q((1-le.y)*jt/2),Fe=Math.atan2(Be-Te,Se-Ae);e.strokeStyle="#79e5f0",e.fillStyle="#79e5f0",e.lineWidth=6,e.beginPath(),e.moveTo(Ae,Te),e.lineTo(Se,Be),e.stroke(),e.beginPath(),e.moveTo(Se,Be),e.lineTo(Se-21*Math.cos(Fe-.5),Be-21*Math.sin(Fe-.5)),e.lineTo(Se-21*Math.cos(Fe+.5),Be-21*Math.sin(Fe+.5)),e.closePath(),e.fill()}let U=(ie,oe,I)=>{let S=ie.road(oe,I,.11).project(s);return[Math.round((S.x+1)*st*32)/64,Math.round((1-S.y)*jt*32)/64,S.z]};function B(ie,oe,I=!1){ie.some(S=>S[2]>1||S[2]<-1)||(e.save(),e.beginPath(),ie.forEach(([S,Y],le)=>le?e.lineTo(S,Y):e.moveTo(S,Y)),e.closePath(),e.strokeStyle=`rgba(111,231,234,${.62+.1*Math.sin(oe*3)})`,e.lineWidth=qt>st?4:4.5,e.lineJoin="round",I&&e.setLineDash([10,8]),e.shadowColor="#6fe7ea",e.shadowBlur=10,e.stroke(),e.restore())}function V(ie,oe,I,S,Y,le,Q=!1){let Ae=ie.route(oe),Te=ie.route(I);B([[Ae,S-Y/2],[Te,S-Y/2],[Te,S+Y/2],[Ae,S+Y/2]].map(([Se,Be])=>U(ie,Se,Be)),le,Q)}function O(ie,oe){let I=S=>Math.max(0,S-70)*.08;B([[70,0],[150,I(150)+.12],[150,-I(150)-.12]].map(([S,Y])=>U(ie,S,Y)),oe)}function X(ie,oe){let I=[[-.75,-1],[.75,-1],[.75,1],[-.75,1]].map(([S,Y])=>{let le=to(4.8+S*1.15,3+Y*1.1,-oe).project(s);return[Math.round((le.x+1)*st/2),Math.round((1-le.y)*jt/2),le.z]});B(I,ie)}let $=(ie,oe=12,I=22)=>Math.ceil((ie+I)/oe)*oe,K=7,de=5;function te(ie,oe,I,S,Y){let le=S-Y;if(ie<=le)return oe+I*ie;let Q=Math.min(ie-le,Y);return oe+I*le+I*Q-I*Q*Q/(2*Y)}let ae=ui.chapters.map(ie=>ie.start),ce={0:[11.1],2:[11.15],3:[6.71],8:[6.45]},Ue=[];ui.chapters.forEach((ie,oe)=>{oe&&Ue.push(ie.start),(ce[oe]||[]).forEach(I=>Ue.push(ie.speech+I))});let Ne=ui.chapters.at(-1).end;function ht(ie,oe,I){let S={oncoming:null,w:c.rural,d:0,lane:1.82,turn:0,signal:0,mark:"dash",cam:{height:13,behind:21,ahead:13},hl:[],dirs:[],crosswalk:!1,gray:null,cameraD:null},Y=ui.chapters[ie].sentences,le=Q=>I>=Y[Q]-.1&&(Q+1>=Y.length||I<Y[Q+1]-.1);if(ie===0)if(S.cam=qt>st?{height:14,behind:18,ahead:15}:{height:9,behind:14,ahead:12},I<11.1){if(S.d=20+K*I,I>=7.2){let Q=$(20+K*7.2,12,24);S.hl.push(["band",Q,Q+3,0,.55]),S.dirs=[[S.d+17,-1.8,!0],[S.d+8,1.8,!1]]}}else if(S.w=c.same,S.mark="whiteDash",S.crosswalk=!0,S.d=te(I-11.1,-27,K,13.9,3.5),I>=13.8&&I<17.35){let Q=$(-27+K*2.7,12,22);S.hl.push(["band",Q,Q+3,0,.55]),S.dirs=[[S.d+16,-1.8,!1],[S.d+9,1.8,!1]]}else I>=17.35&&I<24.45?S.hl.push(["band",S.d+3,S.d+20,3.62,.55]):I>=24.45&&S.hl.push(["band",64.6,69.4,0,7.9]);if(ie===1){if(S.d=20+K*oe,S.cam={height:10+14*An((I-2.6)/1.6)-14*An((I-6)/2),behind:20,ahead:13},le(0)){let Q=$(20+K*(Y[0]+.5),12,24);S.hl.push(["band",Q,Q+3,0,.55])}if(le(1)){let Q=$(20+K*(Y[1]+.5),12,18);S.hl.push(["band",Q,Q+3,0,.55],["band",Q+3,Q+12,0,.55,!0])}}if(ie===2){if(I<11.15){S.w=c.curve,S.mark="warning",S.d=40+K*oe;let Q=An((I-6.2)/2.5);if(S.cam={height:Zs(10,3.4,Q),behind:Zs(18,13,Q),ahead:19},I>=6.3&&(S.oncoming=150-8*(I-6.5)),I<6.2){let Ae=$(40+K*(I<3.5?.5:4.1),12,24);S.hl.push(["band",Ae,Ae+9,0,.55],["band",Ae+9,Ae+12,0,.55,!0])}}else if(S.w=c.sameCurve,S.mark="whiteWarning",S.d=56+K*(I-11.15),S.cam={height:13,behind:22,ahead:16},S.dirs=[[S.d+20,-1.8,!1],[S.d+12,1.8,!1]],le(3)){let Q=$(56,12,26);S.hl.push(["band",Q,Q+9,0,.55])}}if(ie===3&&(S.cam={height:13,behind:21,ahead:12},I<6.71?(S.w=c.same,S.mark="whiteSolid",S.d=20+K*oe,S.hl.push(["band",S.d+6,S.d+30,0,.5]),le(0)&&(S.dirs=[[S.d+20,-1.8,!1],[S.d+12,1.8,!1]])):(S.mark="double",S.d=20+K*(I-6.71),le(3)?(S.hl.push(["band",S.d+6,S.d+30,.15,.3],["band",S.d+6,S.d+30,-.15,.3]),S.dirs=[[S.d+22,-1.8,!0],[S.d+12,1.8,!1]]):S.hl.push(["band",S.d+6,S.d+30,0,.75]))),ie===4){let Q=S.w=c.combined;S.mark="combined";let Ae=tt=>1.82-3.64*An((tt-10.5)/2)+3.64*An((tt-16.2)/2),Te=tt=>(tt=zc(tt),tt*tt*(3-2*tt)),Se=tt=>65+6*(tt+1.5)+30*Te((tt-11)/5);S.lane=Ae(I),S.d=Se(I);let Be=79+6*oe;S.gray=Be;let Fe=.005,Ge=(Se(I+Fe)-Se(I-Fe))/(2*Fe);S.turn=Math.atan((Ae(I+Fe)-Ae(I-Fe))/(2*Fe)/Ge),S.signal=I>=8.5&&I<12.5?-1:I>=15.2&&I<18.2?1:0;let _e=1-An((oe-.3)/2.7);S.cameraD=(S.d+Be)/2-28*_e,S.cam={height:40+45*_e,behind:9+33*_e,ahead:-9*_e};let He=S.cameraD,rt=Math.max(56,He-4),et=Math.min(244,He+34);I>=-.1&&I<Y[1]-.1?S.hl.push(["band",rt,et,0,.7]):I<Y[3]-.1?S.hl.push(["band",rt,et,.15,.28]):I<Y[4]-.1?S.hl.push(["band",rt,et,-.15,.28]):S.hl.push(["band",rt,et,-.15,.28])}if(ie===5&&(S.w=c.fork,S.mark=null,S.d=40+K*oe,S.lane=1.8+Math.max(0,S.d-70)*.08,S.turn=Math.atan(S.d>70?.08:0),S.cam={height:28,behind:26,ahead:18},I<Y[3]-.1&&S.hl.push(["gore"])),ie===6&&(S.w=c.junction,S.mark=null,S.d=te(oe,46.5,de,12.2,3),S.cam={height:23,behind:24,ahead:19},S.signal=I>=5?1:0,le(0)&&S.hl.push(["band",72,78.5,1.8,2.4],["band",72,78.5,-1.8,2.4],["band",95,101.5,1.8,2.4],["band",95,101.5,-1.8,2.4]),le(2)&&S.hl.push(["band",66,110,0,.5],["band",95,101.5,1.8,2.4])),ie===7){S.w=c.bus,S.mark="bus",S.lane=-1.8,S.d=15+de*oe;{let Q=An((I-Y[2]+.3)/1.6);S.cam={height:Zs(15,24,An((I-5.5)/2.5))-11*Q,behind:23-6*Q,ahead:17+4*Q}}if(le(0)&&S.hl.push(["band",S.d+8,S.d+30,0,.45]),le(1)){let Q=$(15+de*(Y[1]+.5),4,24);S.hl.push(["band",Q,Q+2,0,.5],["band",Q+2,Q+4,0,.5,!0],["band",Q+4,Q+6,0,.5],["band",Q+6,Q+8,0,.5,!0])}if(le(2)){let Q=[35,95,155].find(Ae=>Ae>S.d+8);Q&&S.hl.push(["sign",Q])}}if(ie===8)if(I<6.45)S.d=25+K*oe,S.cam={height:13,behind:21,ahead:14},S.hl.push(["band",S.d+3,S.d+20,3.62,.55]);else{S.w=c.narrow,S.mark=null,S.lane=1.25,S.d=20+5.5*(I-6.45);let Q=An((I-10.2)/3);S.cam={height:Zs(13,26,Q),behind:Zs(21,28,Q),ahead:14},I<10.1&&S.hl.push(["band",S.d+3,S.d+22,2.4,.45],["band",S.d+3,S.d+22,-2.4,.45])}return qt>st&&ie!==0&&(S.cam={...S.cam,height:S.cam.height*1.3,behind:S.cam.behind*1.15,ahead:(S.cam.ahead||0)*1.1}),S}window.setFilmFormat=function(ie){let oe=ie==="mobile";return Li=oe?fA.mobile:fA.wide,st=Li.W,qt=Li.H,jt=Li.sceneH,i.width=st,i.height=qt,t.setSize(st,jt),s.aspect=st/jt,s.fov=oe?40:32,s.updateProjectionMatrix(),window.filmFormat=oe?"mobile":"wide",{width:st,height:qt}},window.chapterTimes=ui.chapters.map(ie=>({chapter:ie.chapter,title:ie.title,start:ie.start})),window.filmDuration=Rc,window.renderFrame=function(ie){e.reset();let oe=zc(Number(ie)||0,0,Rc),I=Math.max(0,oe-Ne),S=Math.min(oe,Ne-.001),Y=0;for(;Y<ae.length-1&&S>=ae[Y+1];)Y++;let le=ui.chapters[Y],Q=S-le.start,Ae=S-le.speech,Te=ht(Y,Q,Ae),Se=Te.w;M.obj.visible=Te.gray!==null,Object.values(c).forEach(_e=>{_e.root.visible=!1,_e.crosswalk.visible=!1}),Se.root.visible=!0,Se.crosswalk.visible=Te.crosswalk,Se.markings(Te.mark),b(P,Se,Te.d,Te.lane,Te.turn,Te.signal,S),w.obj.visible=Te.oncoming!==null,Te.oncoming!==null&&b(w,Se,Te.oncoming,-1.82,Math.PI,0,S),Te.gray!==null&&b(M,Se,Te.gray,1.82,0,0,S),E(Se,Te.cameraD??Te.d,Te.cam);let Be=Se.road(Se.route(Te.d),0,0);r.position.copy(Be).add(to(-30,48,20)),r.target.position.copy(Be),s.updateMatrixWorld(),t.render(n,s),e.drawImage(t.domElement,0,0,st,jt);{let _e=e.createRadialGradient(st/2,jt*.55,Math.min(st,jt)*.45,st/2,jt*.55,Math.max(st,jt)*.85);_e.addColorStop(0,"rgba(20,40,45,0)"),_e.addColorStop(1,"rgba(20,40,45,.16)"),e.fillStyle=_e,e.fillRect(0,0,st,jt)}for(let[_e,...He]of Te.hl)_e==="band"&&V(Se,He[0],He[1],He[2],He[3],S,He[4]),_e==="gore"&&O(Se,S),_e==="sign"&&X(S,He[0]);Te.dirs.forEach(([_e,He,rt])=>R(Se,Se.route(_e),He,rt)),window.infoLayout=hd(e,Li,ui,Y,Ae,oe);let Fe=0;for(let _e of Ue)oe>=_e&&oe<_e+.32&&(Fe=Math.max(Fe,1-(oe-_e)/.32));if(Fe&&(e.fillStyle=`rgba(17,41,51,${Fe*.85})`,e.fillRect(0,0,st,jt)),oe>=Ne){let _e=An(I/.7);e.fillStyle=`rgba(20,54,63,${_e})`,e.fillRect(0,0,st,qt),e.globalAlpha=An((I-.4)/.6),e.textAlign="center",e.fillStyle="#e6c65e",e.fillRect(st/2-30,qt*.4,60,5),e.fillStyle="#fff",e.font=`700 ${qt>st?74:84}px Arial`,e.fillText("teori-test.no",st/2,qt*.4+(qt>st?100:110)),e.fillStyle="#b9ced0",e.font=`600 ${qt>st?34:36}px Arial`,e.fillText("\xD8v p\xE5 veimerking med gratis teoripr\xF8ver",st/2,qt*.4+(qt>st?160:175)),e.globalAlpha=1}let Ge=_e=>{let He=_e.position.clone().add(to(0,.75,0)).project(s);return[(He.x+1)*st/2,(1-He.y)*jt/2]};return window.frameInfo={t:oe,chapter:Y+1,title:le.title,speechTime:Ae,environment:Se.name,marking:Te.mark,laneOffset:Te.lane,routeDistance:Te.d,bluePosition:P.obj.position.toArray(),grayPosition:Te.gray!==null?M.obj.position.toArray():null,blueScreen:Ge(P.obj),grayScreen:Te.gray!==null?Ge(M.obj):null,signal:Te.signal,crosswalkVisible:Te.crosswalk,endCard:oe>=Ne,point:window.infoLayout.point,duration:Rc},i},window.auditRoadGeometry=function(){let ie={},oe=new jr,I=to(0,-1,0);n.updateMatrixWorld(!0);for(let S of["curve","sameCurve","combined"]){let Y=c[S],le=-1/0,Q=0,Ae=0;for(let Te=-10;Te<=250;Te+=3)for(let Se of[-3.85,-2,0,2,3.85]){let Be=Y.road(Te,Se,50);oe.set(Be,I);let Fe=oe.intersectObject(Y.terrain,!1)[0];if(!Fe)throw Error("Missing terrain at "+S+" "+Te);le=Math.max(le,Fe.point.y),Fe.point.y>=.034&&Q++,Ae++}ie[S]={samples:Ae,maxHeight:le,violations:Q}}return ie},window.renderFrame(.5),window.animationReady=!0}q0().catch(i=>{window.animationError=String(i),console.error(i)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
