(()=>{var $l=0,DA=1,eu=2;var zi=1,tu=2,Es=3,In=0,kt=1,an=2,Rn=0,Ds=1,wr=2,IA=3,RA=4,nu=5;var Ui=100,iu=101,su=102,ru=103,ou=104,au=200,Au=201,cu=202,lu=203,LA=204,NA=205,uu=206,hu=207,du=208,fu=209,pu=210,mu=211,gu=212,vu=213,Mu=214,Mo=0,xo=1,yo=2,us=3,To=4,wo=5,bo=6,So=7,OA=0,xu=1,yu=2,Mn=0,zA=1,UA=2,BA=3,br=4,FA=5,jA=6,WA=7,vA="attached",Tu="detached",GA=300,pi=301,Bi=302,Xo=303,Ho=304,Sr=306,ci=1e3,on=1001,hs=1002,ft=1003,Yo=1004;var Fi=1005;var pt=1006,Is=1007;var xn=1008;var Zt=1009,kA=1010,VA=1011,Rs=1012,Qo=1013,yn=1014,tn=1015,Tn=1016,Zo=1017,Jo=1018,Ls=1020,XA=35902,HA=35899,YA=1021,QA=1022,nn=1023,_n=1026,mi=1027,Ko=1028,qo=1029,gi=1030,$o=1031;var ea=1033,Pr=33776,_r=33777,Cr=33778,Er=33779,ta=35840,na=35841,ia=35842,sa=35843,ra=36196,oa=37492,aa=37496,Aa=37488,ca=37489,Dr=37490,la=37491,ua=37808,ha=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,va=37815,Ma=37816,xa=37817,ya=37818,Ta=37819,wa=37820,ba=37821,Sa=36492,Pa=36494,_a=36495,Ca=36283,Ea=36284,Ir=36285,Da=36286;var Si=2300,Pi=2301,mo=2302,MA=2303,xA=2400,yA=2401,TA=2402,wu=2500;var ZA=0,Rr=1,Ns=2,bu=3200;var Ia=0,Su=1,qn="",ht="srgb",Wt="srgb-linear",er="linear",qe="srgb";var go=7680;var Pu=519,_u=512,Cu=513,Eu=514,Ra=515,Du=516,Iu=517,La=518,Ru=519,JA=35044;var KA="300 es",pn=2e3,ds=2001;function Bh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lu(){let i=fs("canvas");return i.style.display="block",i}var fl={},ps=null;function tr(...i){let e="THREE."+i.shift();ps?ps("log",e,...i):console.log(e,...i)}function Nu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=Nu(i);let e="THREE."+i.shift();if(ps)ps("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Le(...i){i=Nu(i);let e="THREE."+i.shift();if(ps)ps("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function bi(...i){let e=i.join(" ");e in fl||(fl[e]=!0,Pe(...i))}function Ou(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var zu={[Mo]:xo,[yo]:bo,[To]:So,[us]:wo,[xo]:Mo,[bo]:yo,[So]:To,[wo]:us},Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=1234567,qs=Math.PI/180,_i=180/Math.PI;function gn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function qA(i,e){return(i%e+e)%e}function jh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wh(i,e,t){return i!==e?(t-i)/(e-i):0}function $s(i,e,t){return(1-t)*i+t*e}function Gh(i,e,t,n){return $s(i,e,1-Math.exp(-t*n))}function kh(i,e=1){return e-Math.abs(qA(i,e*2)-e)}function Vh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yh(i,e){return i+Math.random()*(e-i)}function Qh(i){return i*(.5-Math.random())}function Zh(i){i!==void 0&&(pl=i);let e=pl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jh(i){return i*qs}function Kh(i){return i*_i}function qh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function $h(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ed(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function td(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),A=o(t/2),c=r((e+n)/2),l=o((e+n)/2),h=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*l,A*h,A*u,a*c);break;case"YZY":i.set(A*u,a*l,A*h,a*c);break;case"ZXZ":i.set(A*h,A*u,a*l,a*c);break;case"XZX":i.set(a*l,A*g,A*d,a*c);break;case"YXY":i.set(A*d,a*l,A*g,a*c);break;case"ZYZ":i.set(A*g,A*d,a*l,a*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $A={DEG2RAD:qs,RAD2DEG:_i,generateUUID:gn,clamp:He,euclideanModulo:qA,mapLinear:jh,inverseLerp:Wh,lerp:$s,damp:Gh,pingpong:kh,smoothstep:Vh,smootherstep:Xh,randInt:Hh,randFloat:Yh,randFloatSpread:Qh,seededRandom:Zh,degToRad:Jh,radToDeg:Kh,isPowerOfTwo:qh,ceilPowerOfTwo:$h,floorPowerOfTwo:ed,setQuaternionFromProperEuler:td,normalize:et,denormalize:fn},sc=class sc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sc.prototype.isVector2=!0;var Ne=sc,qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let A=n[s+0],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(h!==x||A!==u||c!==d||l!==g){let p=A*u+c*d+l*g+h*x;p<0&&(u=-u,d=-d,g=-g,x=-x,p=-p);let f=1-a;if(p<.9995){let P=Math.acos(p),D=Math.sin(P);f=Math.sin(f*P)/D,a=Math.sin(a*P)/D,A=A*f+u*a,c=c*f+d*a,l=l*f+g*a,h=h*f+x*a}else{A=A*f+u*a,c=c*f+d*a,l=l*f+g*a,h=h*f+x*a;let P=1/Math.sqrt(A*A+c*c+l*l+h*h);A*=P,c*=P,l*=P,h*=P}}e[t]=A,e[t+1]=c,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],A=n[s+1],c=n[s+2],l=n[s+3],h=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+l*h+A*d-c*u,e[t+1]=A*g+l*u+c*h-a*d,e[t+2]=c*g+l*d+a*u-A*h,e[t+3]=l*g-a*h-A*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,A=Math.sin,c=a(n/2),l=a(s/2),h=a(r/2),u=A(n/2),d=A(s/2),g=A(r/2);switch(o){case"XYZ":this._x=u*l*h+c*d*g,this._y=c*d*h-u*l*g,this._z=c*l*g+u*d*h,this._w=c*l*h-u*d*g;break;case"YXZ":this._x=u*l*h+c*d*g,this._y=c*d*h-u*l*g,this._z=c*l*g-u*d*h,this._w=c*l*h+u*d*g;break;case"ZXY":this._x=u*l*h-c*d*g,this._y=c*d*h+u*l*g,this._z=c*l*g+u*d*h,this._w=c*l*h-u*d*g;break;case"ZYX":this._x=u*l*h-c*d*g,this._y=c*d*h+u*l*g,this._z=c*l*g-u*d*h,this._w=c*l*h+u*d*g;break;case"YZX":this._x=u*l*h+c*d*g,this._y=c*d*h+u*l*g,this._z=c*l*g-u*d*h,this._w=c*l*h-u*d*g;break;case"XZY":this._x=u*l*h-c*d*g,this._y=c*d*h-u*l*g,this._z=c*l*g+u*d*h,this._w=c*l*h+u*d*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],A=t[9],c=t[2],l=t[6],h=t[10],u=n+a+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(l-A)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(l-A)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(A+l)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(A+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,A=t._y,c=t._z,l=t._w;return this._x=n*l+o*a+s*c-r*A,this._y=s*l+o*A+r*a-n*c,this._z=r*l+o*c+n*A-s*a,this._w=o*l-n*a-s*A-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let A=1-t;if(a<.9995){let c=Math.acos(a),l=Math.sin(c);A=Math.sin(A*c)/l,t=Math.sin(t*c)/l,this._x=this._x*A+n*t,this._y=this._y*A+s*t,this._z=this._z*A+r*t,this._w=this._w*A+o*t,this._onChangeCallback()}else this._x=this._x*A+n*t,this._y=this._y*A+s*t,this._z=this._z*A+r*t,this._w=this._w*A+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},rc=class rc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ml.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,A=e.w,c=2*(o*s-a*n),l=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+A*c+o*h-a*l,this.y=n+A*l+a*c-r*h,this.z=s+A*h+r*l-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,A=t.z;return this.x=s*A-r*a,this.y=r*o-n*A,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rc.prototype.isVector3=!0;var B=rc,Ya=new B,ml=new qt,oc=class oc{constructor(e,t,n,s,r,o,a,A,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,A,c)}set(e,t,n,s,r,o,a,A,c){let l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=r,l[5]=A,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],A=n[6],c=n[1],l=n[4],h=n[7],u=n[2],d=n[5],g=n[8],x=s[0],p=s[3],f=s[6],P=s[1],D=s[4],y=s[7],T=s[2],w=s[5],C=s[8];return r[0]=o*x+a*P+A*T,r[3]=o*p+a*D+A*w,r[6]=o*f+a*y+A*C,r[1]=c*x+l*P+h*T,r[4]=c*p+l*D+h*w,r[7]=c*f+l*y+h*C,r[2]=u*x+d*P+g*T,r[5]=u*p+d*D+g*w,r[8]=u*f+d*y+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],A=e[6],c=e[7],l=e[8];return t*o*l-t*a*c-n*r*l+n*a*A+s*r*c-s*o*A}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],A=e[6],c=e[7],l=e[8],h=l*o-a*c,u=a*A-l*r,d=c*r-o*A,g=t*h+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-l*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(l*t-s*A)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*A-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let A=Math.cos(r),c=Math.sin(r);return this.set(n*A,n*c,-n*(A*o+c*a)+o+e,-s*c,s*A,-s*(-c*o+A*a)+a+t,0,0,1),this}scale(e,t){return bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};oc.prototype.isMatrix3=!0;var ze=oc,Qa=new ze,gl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nd(){let i={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===qe&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===qe&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wt]:{primaries:e,whitePoint:n,transfer:er,toXYZ:gl,fromXYZ:vl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:e,whitePoint:n,transfer:qe,toXYZ:gl,fromXYZ:vl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),i}var We=nd();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hi,Po=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hi===void 0&&(Hi=fs("canvas")),Hi.width=e.width,Hi.height=e.height;let s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},id=0,ms=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Za(s[o].image)):r.push(Za(s[o]))}else r=Za(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var sd=0,Ja=new B,St=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=on,s=on,r=pt,o=xn,a=nn,A=Zt,c=i.DEFAULT_ANISOTROPY,l=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=gn(),this.name="",this.source=new ms(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=A,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ja).x}get height(){return this.source.getSize(Ja).y}get depth(){return this.source.getSize(Ja).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==GA)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ci:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ci:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=GA;St.DEFAULT_ANISOTROPY=1;var ac=class ac{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,A=e.elements,c=A[0],l=A[4],h=A[8],u=A[1],d=A[5],g=A[9],x=A[2],p=A[6],f=A[10];if(Math.abs(l-u)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let D=(c+1)/2,y=(d+1)/2,T=(f+1)/2,w=(l+u)/4,C=(h+x)/4,v=(g+p)/4;return D>y&&D>T?D<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(D),s=w/n,r=C/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=v/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=v/r),this.set(n,s,r,t),this}let P=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(u-l)*(u-l));return Math.abs(P)<.001&&(P=1),this.x=(p-g)/P,this.y=(h-x)/P,this.z=(u-l)/P,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ac.prototype.isVector4=!0;var tt=ac,_o=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new St(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ms(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends _o{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},nr=class extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ft,this.minFilter=ft,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ft,this.minFilter=ft,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Vo=class Vo{constructor(e,t,n,s,r,o,a,A,c,l,h,u,d,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,A,c,l,h,u,d,g,x,p)}set(e,t,n,s,r,o,a,A,c,l,h,u,d,g,x,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=A,f[2]=c,f[6]=l,f[10]=h,f[14]=u,f[3]=d,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),A=Math.cos(s),c=Math.sin(s),l=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=o*l,d=o*h,g=a*l,x=a*h;t[0]=A*l,t[4]=-A*h,t[8]=c,t[1]=d+g*c,t[5]=u-x*c,t[9]=-a*A,t[2]=x-u*c,t[6]=g+d*c,t[10]=o*A}else if(e.order==="YXZ"){let u=A*l,d=A*h,g=c*l,x=c*h;t[0]=u+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*l,t[9]=-a,t[2]=d*a-g,t[6]=x+u*a,t[10]=o*A}else if(e.order==="ZXY"){let u=A*l,d=A*h,g=c*l,x=c*h;t[0]=u-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*l,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*A}else if(e.order==="ZYX"){let u=o*l,d=o*h,g=a*l,x=a*h;t[0]=A*l,t[4]=g*c-d,t[8]=u*c+x,t[1]=A*h,t[5]=x*c+u,t[9]=d*c-g,t[2]=-c,t[6]=a*A,t[10]=o*A}else if(e.order==="YZX"){let u=o*A,d=o*c,g=a*A,x=a*c;t[0]=A*l,t[4]=x-u*h,t[8]=g*h+d,t[1]=h,t[5]=o*l,t[9]=-a*l,t[2]=-c*l,t[6]=d*h+g,t[10]=u-x*h}else if(e.order==="XZY"){let u=o*A,d=o*c,g=a*A,x=a*c;t[0]=A*l,t[4]=-h,t[8]=c*l,t[1]=u*h+x,t[5]=o*l,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*l,t[10]=x*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rd,e,od)}lookAt(e,t,n){let s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),ii.crossVectors(n,Jt),ii.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),ii.crossVectors(n,Jt)),ii.normalize(),Wr.crossVectors(Jt,ii),s[0]=ii.x,s[4]=Wr.x,s[8]=Jt.x,s[1]=ii.y,s[5]=Wr.y,s[9]=Jt.y,s[2]=ii.z,s[6]=Wr.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],A=n[8],c=n[12],l=n[1],h=n[5],u=n[9],d=n[13],g=n[2],x=n[6],p=n[10],f=n[14],P=n[3],D=n[7],y=n[11],T=n[15],w=s[0],C=s[4],v=s[8],b=s[12],I=s[1],U=s[5],W=s[9],E=s[13],_=s[2],R=s[6],N=s[10],H=s[14],q=s[3],F=s[7],V=s[11],$=s[15];return r[0]=o*w+a*I+A*_+c*q,r[4]=o*C+a*U+A*R+c*F,r[8]=o*v+a*W+A*N+c*V,r[12]=o*b+a*E+A*H+c*$,r[1]=l*w+h*I+u*_+d*q,r[5]=l*C+h*U+u*R+d*F,r[9]=l*v+h*W+u*N+d*V,r[13]=l*b+h*E+u*H+d*$,r[2]=g*w+x*I+p*_+f*q,r[6]=g*C+x*U+p*R+f*F,r[10]=g*v+x*W+p*N+f*V,r[14]=g*b+x*E+p*H+f*$,r[3]=P*w+D*I+y*_+T*q,r[7]=P*C+D*U+y*R+T*F,r[11]=P*v+D*W+y*N+T*V,r[15]=P*b+D*E+y*H+T*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],A=e[9],c=e[13],l=e[2],h=e[6],u=e[10],d=e[14],g=e[3],x=e[7],p=e[11],f=e[15],P=A*d-c*u,D=a*d-c*h,y=a*u-A*h,T=o*d-c*l,w=o*u-A*l,C=o*h-a*l;return t*(x*P-p*D+f*y)-n*(g*P-p*T+f*w)+s*(g*D-x*T+f*C)-r*(g*y-x*w+p*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],A=e[2],c=e[6],l=e[10];return t*(o*l-a*c)-n*(r*l-a*A)+s*(r*c-o*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],A=e[6],c=e[7],l=e[8],h=e[9],u=e[10],d=e[11],g=e[12],x=e[13],p=e[14],f=e[15],P=t*a-n*o,D=t*A-s*o,y=t*c-r*o,T=n*A-s*a,w=n*c-r*a,C=s*c-r*A,v=l*x-h*g,b=l*p-u*g,I=l*f-d*g,U=h*p-u*x,W=h*f-d*x,E=u*f-d*p,_=P*E-D*W+y*U+T*I-w*b+C*v;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/_;return e[0]=(a*E-A*W+c*U)*R,e[1]=(s*W-n*E-r*U)*R,e[2]=(x*C-p*w+f*T)*R,e[3]=(u*w-h*C-d*T)*R,e[4]=(A*I-o*E-c*b)*R,e[5]=(t*E-s*I+r*b)*R,e[6]=(p*y-g*C-f*D)*R,e[7]=(l*C-u*y+d*D)*R,e[8]=(o*W-a*I+c*v)*R,e[9]=(n*I-t*W-r*v)*R,e[10]=(g*w-x*y+f*P)*R,e[11]=(h*y-l*w-d*P)*R,e[12]=(a*b-o*U-A*v)*R,e[13]=(t*U-n*b+s*v)*R,e[14]=(x*D-g*T-p*P)*R,e[15]=(l*T-h*D+u*P)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,A=e.z,c=r*o,l=r*a;return this.set(c*o+n,c*a-s*A,c*A+s*a,0,c*a+s*A,l*a+n,l*A-s*o,0,c*A-s*a,l*A+s*o,r*A*A+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,A=t._w,c=r+r,l=o+o,h=a+a,u=r*c,d=r*l,g=r*h,x=o*l,p=o*h,f=a*h,P=A*c,D=A*l,y=A*h,T=n.x,w=n.y,C=n.z;return s[0]=(1-(x+f))*T,s[1]=(d+y)*T,s[2]=(g-D)*T,s[3]=0,s[4]=(d-y)*w,s[5]=(1-(u+f))*w,s[6]=(p+P)*w,s[7]=0,s[8]=(g+D)*C,s[9]=(p-P)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Yi.set(s[0],s[1],s[2]).length(),a=Yi.set(s[4],s[5],s[6]).length(),A=Yi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ln.copy(this);let c=1/o,l=1/a,h=1/A;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=l,ln.elements[5]*=l,ln.elements[6]*=l,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=o,n.y=a,n.z=A,this}makePerspective(e,t,n,s,r,o,a=pn,A=!1){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),g,x;if(A)g=r/(o-r),x=o*r/(o-r);else if(a===pn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ds)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pn,A=!1){let c=this.elements,l=2/(t-e),h=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),g,x;if(A)g=1/(o-r),x=o/(o-r);else if(a===pn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===ds)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Vo.prototype.isMatrix4=!0;var Ue=Vo,Yi=new B,ln=new Ue,rd=new B(0,0,0),od=new B(1,1,1),ii=new B,Wr=new B,Jt=new B,Ml=new Ue,xl=new qt,Vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],A=s[1],c=s[5],l=s[9],h=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(A,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(A,r));break;case"ZYX":this._y=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(A,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,d),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xl.setFromEuler(this),this.setFromQuaternion(xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var ir=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ad=0,yl=new B,Qi=new qt,zn=new Ue,Gr=new B,Ws=new B,Ad=new B,cd=new qt,Tl=new B(1,0,0),wl=new B(0,1,0),bl=new B(0,0,1),Sl={type:"added"},ld={type:"removed"},Zi={type:"childadded",child:null},Ka={type:"childremoved",child:null},it=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new Vn,n=new qt,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new ze}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(Tl,e)}rotateY(e){return this.rotateOnAxis(wl,e)}rotateZ(e){return this.rotateOnAxis(bl,e)}translateOnAxis(e,t){return yl.copy(e).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tl,e)}translateY(e){return this.translateOnAxis(wl,e)}translateZ(e){return this.translateOnAxis(bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ws,Gr,this.up):zn.lookAt(Gr,Ws,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(zn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sl),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ld),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sl),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,Ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,cd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,A){return a[A.uuid]===void 0&&(a[A.uuid]=A.toJSON(e)),A.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let A=a.shapes;if(Array.isArray(A))for(let c=0,l=A.length;c<l;c++){let h=A[c];r(e.shapes,h)}else r(e.shapes,A)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let A=0,c=this.material.length;A<c;A++)a.push(r(e.materials,this.material[A]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let A=this.animations[a];s.animations.push(r(e.animations,A))}}if(t){let a=o(e.geometries),A=o(e.materials),c=o(e.textures),l=o(e.images),h=o(e.shapes),u=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),A.length>0&&(n.materials=A),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let A=[];for(let c in a){let l=a[c];delete l.metadata,A.push(l)}return A}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};it.DEFAULT_UP=new B(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}},ud={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,A=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=l.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else A!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(A.matrix.fromArray(r.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,r.linearVelocity?(A.hasLinearVelocity=!0,A.linearVelocity.copy(r.linearVelocity)):A.hasLinearVelocity=!1,r.angularVelocity?(A.hasAngularVelocity=!0,A.angularVelocity.copy(r.angularVelocity)):A.hasAngularVelocity=!1,A.eventsEnabled&&A.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ud)))}return a!==null&&(a.visible=s!==null),A!==null&&(A.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},kr={h:0,s:0,l:0};function qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=qA(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=qa(o,r,e+1/3),this.g=qa(o,r,e),this.b=qa(o,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=ht){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){let n=Uu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return We.workingToColorSpace(Ut.copy(this),e),Math.round(He(Ut.r*255,0,255))*65536+Math.round(He(Ut.g*255,0,255))*256+Math.round(He(Ut.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Ut.copy(this),t);let n=Ut.r,s=Ut.g,r=Ut.b,o=Math.max(n,s,r),a=Math.min(n,s,r),A,c,l=(a+o)/2;if(a===o)A=0,c=0;else{let h=o-a;switch(c=l<=.5?h/(o+a):h/(2-o-a),o){case n:A=(s-r)/h+(s<r?6:0);break;case s:A=(r-n)/h+2;break;case r:A=(n-s)/h+4;break}A/=6}return e.h=A,e.s=c,e.l=l,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=ht){We.workingToColorSpace(Ut.copy(this),e);let t=Ut.r,n=Ut.g,s=Ut.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(kr);let n=$s(si.h,kr.h,t),s=$s(si.s,kr.s,t),r=$s(si.l,kr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ut=new De;De.NAMES=Uu;var sr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},rr=class extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},un=new B,Un=new B,$a=new B,Bn=new B,Ji=new B,Ki=new B,Pl=new B,eA=new B,tA=new B,nA=new B,iA=new tt,sA=new tt,rA=new tt,Gn=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Un.subVectors(n,t),$a.subVectors(e,t);let o=un.dot(un),a=un.dot(Un),A=un.dot($a),c=Un.dot(Un),l=Un.dot($a),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(c*A-a*l)*u,g=(o*l-a*A)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,s,r,o,a,A){return this.getBarycoord(e,t,n,s,Bn)===null?(A.x=0,A.y=0,"z"in A&&(A.z=0),"w"in A&&(A.w=0),null):(A.setScalar(0),A.addScaledVector(r,Bn.x),A.addScaledVector(o,Bn.y),A.addScaledVector(a,Bn.z),A)}static getInterpolatedAttribute(e,t,n,s,r,o){return iA.setScalar(0),sA.setScalar(0),rA.setScalar(0),iA.fromBufferAttribute(e,t),sA.fromBufferAttribute(e,n),rA.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(iA,r.x),o.addScaledVector(sA,r.y),o.addScaledVector(rA,r.z),o}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Un.subVectors(e,t),un.cross(Un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),un.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ji.subVectors(s,n),Ki.subVectors(r,n),eA.subVectors(e,n);let A=Ji.dot(eA),c=Ki.dot(eA);if(A<=0&&c<=0)return t.copy(n);tA.subVectors(e,s);let l=Ji.dot(tA),h=Ki.dot(tA);if(l>=0&&h<=l)return t.copy(s);let u=A*h-l*c;if(u<=0&&A>=0&&l<=0)return o=A/(A-l),t.copy(n).addScaledVector(Ji,o);nA.subVectors(e,r);let d=Ji.dot(nA),g=Ki.dot(nA);if(g>=0&&d<=g)return t.copy(r);let x=d*c-A*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ki,a);let p=l*g-d*h;if(p<=0&&h-l>=0&&d-g>=0)return Pl.subVectors(r,s),a=(h-l)/(h-l+(d-g)),t.copy(s).addScaledVector(Pl,a);let f=1/(p+x+u);return o=x*f,a=u*f,t.copy(n).addScaledVector(Ji,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$t=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Xr.subVectors(this.max,Gs),qi.subVectors(e.a,Gs),$i.subVectors(e.b,Gs),es.subVectors(e.c,Gs),ri.subVectors($i,qi),oi.subVectors(es,$i),xi.subVectors(qi,es);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-xi.z,xi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,xi.z,0,-xi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-xi.y,xi.x,0];return!oA(t,qi,$i,es,Xr)||(t=[1,0,0,0,1,0,0,0,1],!oA(t,qi,$i,es,Xr))?!1:(Hr.crossVectors(ri,oi),t=[Hr.x,Hr.y,Hr.z],oA(t,qi,$i,es,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fn=[new B,new B,new B,new B,new B,new B,new B,new B],hn=new B,Vr=new $t,qi=new B,$i=new B,es=new B,ri=new B,oi=new B,xi=new B,Gs=new B,Xr=new B,Hr=new B,yi=new B;function oA(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){yi.fromArray(i,r);let a=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),A=e.dot(yi),c=t.dot(yi),l=n.dot(yi);if(Math.max(-Math.max(A,c,l),Math.min(A,c,l))>a)return!1}return!0}var Mt=new B,Yr=new Ne,hd=0,bt=class extends Cn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=JA,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var or=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ar=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},dd=new $t,ks=new B,aA=new B,Ht=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):dd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);let t=ks.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aA.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(aA)),this.expandByPoint(ks.copy(e.center).sub(aA))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fd=0,rn=new Ue,AA=new it,ts=new B,Kt=new $t,Vs=new $t,Dt=new B,Tt=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bh(e)?ar:or)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return AA.lookAt(e),AA.updateMatrix(),this.applyMatrix4(AA.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(Kt.min,Vs.min),Kt.expandByPoint(Dt),Dt.addVectors(Kt.max,Vs.max),Kt.expandByPoint(Dt)):(Kt.expandByPoint(Vs.min),Kt.expandByPoint(Vs.max))}Kt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],A=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)Dt.fromBufferAttribute(a,c),A&&(ts.fromBufferAttribute(e,c),Dt.add(ts)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],A=[];for(let v=0;v<n.count;v++)a[v]=new B,A[v]=new B;let c=new B,l=new B,h=new B,u=new Ne,d=new Ne,g=new Ne,x=new B,p=new B;function f(v,b,I){c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,I),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,I),l.sub(c),h.sub(c),d.sub(u),g.sub(u);let U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(x.copy(l).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(U),p.copy(h).multiplyScalar(d.x).addScaledVector(l,-g.x).multiplyScalar(U),a[v].add(x),a[b].add(x),a[I].add(x),A[v].add(p),A[b].add(p),A[I].add(p))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let v=0,b=P.length;v<b;++v){let I=P[v],U=I.start,W=I.count;for(let E=U,_=U+W;E<_;E+=3)f(e.getX(E+0),e.getX(E+1),e.getX(E+2))}let D=new B,y=new B,T=new B,w=new B;function C(v){T.fromBufferAttribute(s,v),w.copy(T);let b=a[v];D.copy(b),D.sub(T.multiplyScalar(T.dot(b))).normalize(),y.crossVectors(w,b);let U=y.dot(A[v])<0?-1:1;o.setXYZW(v,D.x,D.y,D.z,U)}for(let v=0,b=P.length;v<b;++v){let I=P[v],U=I.start,W=I.count;for(let E=U,_=U+W;E<_;E+=3)C(e.getX(E+0)),C(e.getX(E+1)),C(e.getX(E+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new B,r=new B,o=new B,a=new B,A=new B,c=new B,l=new B,h=new B;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),l.subVectors(o,r),h.subVectors(s,r),l.cross(h),a.fromBufferAttribute(n,g),A.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(l),A.add(l),c.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,A.x,A.y,A.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),l.subVectors(o,r),h.subVectors(s,r),l.cross(h),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,A){let c=a.array,l=a.itemSize,h=a.normalized,u=new c.constructor(A.length*l),d=0,g=0;for(let x=0,p=A.length;x<p;x++){a.isInterleavedBufferAttribute?d=A[x]*a.data.stride+a.offset:d=A[x]*l;for(let f=0;f<l;f++)u[g++]=c[d++]}return new bt(u,l,h)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let A=s[a],c=e(A,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let A=[],c=r[a];for(let l=0,h=c.length;l<h;l++){let u=c[l],d=e(u,n);A.push(d)}t.morphAttributes[a]=A}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,A=o.length;a<A;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let A=this.parameters;for(let c in A)A[c]!==void 0&&(e[c]=A[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let A in n){let c=n[A];e.data.attributes[A]=c.toJSON(e.data)}let s={},r=!1;for(let A in this.morphAttributes){let c=this.morphAttributes[A],l=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];l.push(d.toJSON(e.data))}l.length>0&&(s[A]=l,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let l=s[c];this.setAttribute(c,l.clone(t))}let r=e.morphAttributes;for(let c in r){let l=[],h=r[c];for(let u=0,d=h.length;u<d;u++)l.push(h[u].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,l=o.length;c<l;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let A=e.boundingSphere;return A!==null&&(this.boundingSphere=A.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ci=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=JA,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},jt=new B,li=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){tr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cA=new B,pd=new B,md=new ze,dn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=cA.subVectors(n,t).cross(pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(cA),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||md.getNormalMatrix(e),s=this.coplanarPoint(cA).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},gd=0,Gt=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=Ds,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=LA,this.blendDst=NA,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let A=r[a];delete A.metadata,o.push(A)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vs=class extends Gt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ns,Xs=new B,is=new B,ss=new B,rs=new Ne,Hs=new Ne,Bu=new Ue,Qr=new B,Ys=new B,Zr=new B,_l=new Ne,lA=new Ne,Cl=new Ne,Ar=class extends it{constructor(e=new vs){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new Tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ci(t,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new li(n,3,0,!1)),ns.setAttribute("uv",new li(n,2,3,!1))}this.geometry=ns,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),Bu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Jr(Qr.set(-.5,-.5,0),ss,o,is,s,r),Jr(Ys.set(.5,-.5,0),ss,o,is,s,r),Jr(Zr.set(.5,.5,0),ss,o,is,s,r),_l.set(0,0),lA.set(1,0),Cl.set(1,1);let a=e.ray.intersectTriangle(Qr,Ys,Zr,!1,Xs);if(a===null&&(Jr(Ys.set(-.5,.5,0),ss,o,is,s,r),lA.set(0,1),a=e.ray.intersectTriangle(Qr,Zr,Ys,!1,Xs),a===null))return;let A=e.ray.origin.distanceTo(Xs);A<e.near||A>e.far||t.push({distance:A,point:Xs.clone(),uv:Gn.getInterpolation(Xs,Qr,Ys,Zr,_l,lA,Cl,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jr(i,e,t,n,s,r){rs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Hs.x=r*rs.x-s*rs.y,Hs.y=s*rs.x+r*rs.y):Hs.copy(rs),i.copy(e),i.x+=Hs.x,i.y+=Hs.y,i.applyMatrix4(Bu)}var jn=new B,uA=new B,Kr=new B,qr=new B,Ei=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){uA.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(uA);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Kr),a=qr.dot(this.direction),A=-qr.dot(Kr),c=qr.lengthSq(),l=Math.abs(1-o*o),h,u,d,g;if(l>0)if(h=o*A-a,u=o*a-A,g=r*l,h>=0)if(u>=-g)if(u<=g){let x=1/l;h*=x,u*=x,d=h*(h+o*u+2*a)+u*(o*h+u+2*A)+c}else u=r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*A)+c;else u=-r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*A)+c;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-A),r),d=-h*h+u*(u+2*A)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-A),r),d=u*(u+2*A)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-A),r),d=-h*h+u*(u+2*A)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*A)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(uA).addScaledVector(Kr,u),d}intersectSphere(e,t){if(e.radius<0)return null;jn.subVectors(e.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,A=n+o;return A<0?null:a<0?this.at(A,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,A,c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),l>=0?(r=(e.min.y-u.y)*l,o=(e.max.y-u.y)*l):(r=(e.max.y-u.y)*l,o=(e.min.y-u.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-u.z)*h,A=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,A=(e.min.z-u.z)*h),n>A||a>s)||((a>n||n!==n)&&(n=a),(A<s||s!==s)&&(s=A),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,A=a.x,c=a.y,l=a.z,h=e.x-o.x,u=e.y-o.y,d=e.z-o.z,g=t.x-o.x,x=t.y-o.y,p=t.z-o.z,f=n.x-o.x,P=n.y-o.y,D=n.z-o.z,y=Math.abs(A),T=Math.abs(c),w=Math.abs(l),C,v,b,I,U,W,E,_,R,N,H,q;if(y>=T&&y>=w?(b=A,W=h,R=g,q=f,A>=0?(C=c,v=l,I=u,U=d,E=x,_=p,N=P,H=D):(C=l,v=c,I=d,U=u,E=p,_=x,N=D,H=P)):T>=w?(b=c,W=u,R=x,q=P,c>=0?(C=l,v=A,I=d,U=h,E=p,_=g,N=D,H=f):(C=A,v=l,I=h,U=d,E=g,_=p,N=f,H=D)):(b=l,W=d,R=p,q=D,l>=0?(C=A,v=c,I=h,U=u,E=g,_=x,N=f,H=P):(C=c,v=A,I=u,U=h,E=x,_=g,N=P,H=f)),b===0)return null;let F=C/b,V=v/b,$=1/b,le=I-F*W,ie=U-V*W,xe=E-F*R,be=_-V*R,Ie=N-F*q,Q=H-V*q,K=Ie*be-Q*xe,me=le*Q-ie*Ie,Oe=xe*ie-be*le;if(s){if(K<0||me<0||Oe<0)return null}else if((K<0||me<0||Oe<0)&&(K>0||me>0||Oe>0))return null;let ve=K+me+Oe;if(ve===0)return null;let Ge=$*(K*W+me*R+Oe*q);return(ve>0?Ge<0:Ge>0)?null:this.at(Ge/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends Gt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=OA,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},El=new Ue,Ti=new Ei,$r=new Ht,Dl=new B,eo=new B,to=new B,no=new B,hA=new B,io=new B,Il=new B,so=new B,Pt=class extends it{constructor(e=new Tt,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){io.set(0,0,0);for(let A=0,c=r.length;A<c;A++){let l=a[A],h=r[A];l!==0&&(hA.fromBufferAttribute(h,e),o?io.addScaledVector(hA,l):io.addScaledVector(hA.sub(t),l))}t.add(io)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!($r.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere($r,Dl)===null||Ti.origin.distanceToSquared(Dl)>(e.far-e.near)**2))&&(El.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(El),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,A=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let p=u[g],f=o[p.materialIndex],P=Math.max(p.start,d.start),D=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=P,T=D;y<T;y+=3){let w=a.getX(y),C=a.getX(y+1),v=a.getX(y+2);s=ro(this,f,e,n,c,l,h,w,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,f=x;p<f;p+=3){let P=a.getX(p),D=a.getX(p+1),y=a.getX(p+2);s=ro(this,o,e,n,c,l,h,P,D,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(A!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let p=u[g],f=o[p.materialIndex],P=Math.max(p.start,d.start),D=Math.min(A.count,Math.min(p.start+p.count,d.start+d.count));for(let y=P,T=D;y<T;y+=3){let w=y,C=y+1,v=y+2;s=ro(this,f,e,n,c,l,h,w,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(A.count,d.start+d.count);for(let p=g,f=x;p<f;p+=3){let P=p,D=p+1,y=p+2;s=ro(this,o,e,n,c,l,h,P,D,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function vd(i,e,t,n,s,r,o,a){let A;if(e.side===kt?A=n.intersectTriangle(o,r,s,!0,a):A=n.intersectTriangle(s,r,o,e.side===In,a),A===null)return null;so.copy(a),so.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(so);return c<t.near||c>t.far?null:{distance:c,point:so.clone(),object:i}}function ro(i,e,t,n,s,r,o,a,A,c){i.getVertexPosition(a,eo),i.getVertexPosition(A,to),i.getVertexPosition(c,no);let l=vd(i,e,t,n,eo,to,no,Il);if(l){let h=new B;Gn.getBarycoord(Il,eo,to,no,h),s&&(l.uv=Gn.getInterpolatedAttribute(s,a,A,c,h,new Ne)),r&&(l.uv1=Gn.getInterpolatedAttribute(r,a,A,c,h,new Ne)),o&&(l.normal=Gn.getInterpolatedAttribute(o,a,A,c,h,new B),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let u={a,b:A,c,normal:new B,materialIndex:0};Gn.getNormal(eo,to,no,u.normal),l.face=u,l.barycoord=h}return l}var Qs=new tt,Rl=new tt,Ll=new tt,Md=new tt,Nl=new Ue,oo=new B,dA=new Ht,Ol=new Ue,fA=new Ei,cr=class extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vA,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oo),this.boundingBox.expandByPoint(oo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ht),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oo),this.boundingSphere.expandByPoint(oo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dA.copy(this.boundingSphere),dA.applyMatrix4(s),e.ray.intersectsSphere(dA)!==!1&&(Ol.copy(s).invert(),fA.copy(e.ray).applyMatrix4(Ol),!(this.boundingBox!==null&&fA.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fA)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vA?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tu?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Rl.fromBufferAttribute(s.attributes.skinIndex,e),Ll.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Qs.copy(t),t.set(0,0,0,0)):(Qs.set(...t,1),t.set(0,0,0)),Qs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Ll.getComponent(r);if(o!==0){let a=Rl.getComponent(r);Nl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Md.copy(Qs).applyMatrix4(Nl),o)}}return t.isVector4&&(t.w=Qs.w),t.applyMatrix4(this.bindMatrixInverse)}},Ms=class extends it{constructor(){super(),this.isBone=!0,this.type="Bone"}},xs=class extends St{constructor(e=null,t=1,n=1,s,r,o,a,A,c=ft,l=ft,h,u){super(null,o,a,A,c,l,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zl=new Ue,xd=new Ue,lr=class i{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:xd;zl.multiplyMatrices(a,t[r]),zl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new xs(t,e,e,nn,tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Pe("Skeleton: No bone found with UUID:",r),o=new Ms),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Xn=class extends bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},os=new Ue,Ul=new Ue,ao=[],Bl=new $t,yd=new Ue,Zs=new Pt,Js=new Ht,ui=class extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Bl.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Bl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ht),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Js.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),e.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),Ul.multiplyMatrices(n,os),Zs.matrixWorld=Ul,Zs.raycast(e,ao);for(let o=0,a=ao.length;o<a;o++){let A=ao[o];A.instanceId=r,A.object=this,t.push(A)}ao.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xs(new Float32Array(s*this.count),s,this.count,Ko,tn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,A=s*e;return r[A]=a,r.set(n,A+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},wi=new Ht,Td=new Ne(.5,.5),Ao=new B,ys=class{constructor(e=new dn,t=new dn,n=new dn,s=new dn,r=new dn,o=new dn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],A=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],g=r[8],x=r[9],p=r[10],f=r[11],P=r[12],D=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-o,d-l,f-g,T-P).normalize(),s[1].setComponents(c+o,d+l,f+g,T+P).normalize(),s[2].setComponents(c+a,d+h,f+x,T+D).normalize(),s[3].setComponents(c-a,d-h,f-x,T-D).normalize(),n)s[4].setComponents(A,u,p,y).normalize(),s[5].setComponents(c-A,d-u,f-p,T-y).normalize();else if(s[4].setComponents(c-A,d-u,f-p,T-y).normalize(),t===pn)s[5].setComponents(c+A,d+u,f+p,T+y).normalize();else if(t===ds)s[5].setComponents(A,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){wi.center.set(0,0,0);let t=Td.distanceTo(e.center);return wi.radius=.7071067811865476+t,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ao.x=s.normal.x>0?e.max.x:e.min.x,Ao.y=s.normal.y>0?e.max.y:e.min.y,Ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ts=class extends Gt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Eo=new B,Do=new B,Fl=new Ue,Ks=new Ei,co=new Ht,pA=new B,jl=new B,Di=class extends it{constructor(e=new Tt,t=new Ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Eo.fromBufferAttribute(t,s-1),Do.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Eo.distanceTo(Do);e.setAttribute("lineDistance",new yt(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,e.ray.intersectsSphere(co)===!1)return;Fl.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(Fl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),A=a*a,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let f=l.getX(x),P=l.getX(x+1),D=lo(this,e,Ks,A,f,P,x);D&&t.push(D)}if(this.isLineLoop){let x=l.getX(g-1),p=l.getX(d),f=lo(this,e,Ks,A,x,p,g-1);f&&t.push(f)}}else{let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let f=lo(this,e,Ks,A,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){let x=lo(this,e,Ks,A,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lo(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Eo.fromBufferAttribute(a,s),Do.fromBufferAttribute(a,r),t.distanceSqToSegment(Eo,Do,pA,jl)>n)return;pA.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(pA);if(!(c<e.near||c>e.far))return{distance:c,point:jl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Wl=new B,Gl=new B,ur=class extends Di{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Wl.fromBufferAttribute(t,s),Gl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wl.distanceTo(Gl);e.setAttribute("lineDistance",new yt(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},hr=class extends Di{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ws=class extends Gt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kl=new Ue,wA=new Ei,uo=new Ht,ho=new B,dr=class extends it{constructor(e=new Tt,t=new ws){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;kl.copy(s).invert(),wA.copy(e.ray).applyMatrix4(kl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),A=a*a,c=n.index,h=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=u,x=d;g<x;g++){let p=c.getX(g);ho.fromBufferAttribute(h,p),Vl(ho,p,A,s,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=u,x=d;g<x;g++)ho.fromBufferAttribute(h,g),Vl(ho,g,A,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vl(i,e,t,n,s,r,o){let a=wA.distanceSqToPoint(i);if(a<t){let A=new B;wA.closestPointToPoint(i,A),A.applyMatrix4(n);let c=s.ray.origin.distanceTo(A);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:A,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var fr=class extends St{constructor(e=[],t=pi,n,s,r,o,a,A,c,l){super(e,t,n,s,r,o,a,A,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ii=class extends St{constructor(e,t,n,s,r,o,a,A,c){super(e,t,n,s,r,o,a,A,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hi=class extends St{constructor(e,t,n=yn,s,r,o,a=ft,A=ft,c,l=_n,h=1){if(l!==_n&&l!==mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,s,r,o,a,A,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ms(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Io=class extends hi{constructor(e,t=yn,n=pi,s,r,o=ft,a=ft,A,c=_n){let l={width:e,height:e,depth:1},h=[l,l,l,l,l,l];super(e,e,t,n,s,r,o,a,A,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pr=class extends St{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bs=class i extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let A=[],c=[],l=[],h=[],u=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(A),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(h,2));function g(x,p,f,P,D,y,T,w,C,v,b){let I=y/C,U=T/v,W=y/2,E=T/2,_=w/2,R=C+1,N=v+1,H=0,q=0,F=new B;for(let V=0;V<N;V++){let $=V*U-E;for(let le=0;le<R;le++){let ie=le*I-W;F[x]=ie*P,F[p]=$*D,F[f]=_,c.push(F.x,F.y,F.z),F[x]=0,F[p]=0,F[f]=w>0?1:-1,l.push(F.x,F.y,F.z),h.push(le/C),h.push(1-V/v),H+=1}}for(let V=0;V<v;V++)for(let $=0;$<C;$++){let le=u+$+R*V,ie=u+$+R*(V+1),xe=u+($+1)+R*(V+1),be=u+($+1)+R*V;A.push(le,ie,be),A.push(ie,xe,be),q+=6}a.addGroup(d,q,b),d+=q,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ss=class i extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,A=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:A};let c=this;s=Math.floor(s),r=Math.floor(r);let l=[],h=[],u=[],d=[],g=0,x=[],p=n/2,f=0;P(),o===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(l),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function P(){let y=new B,T=new B,w=0,C=(t-e)/n;for(let v=0;v<=r;v++){let b=[],I=v/r,U=I*(t-e)+e;for(let W=0;W<=s;W++){let E=W/s,_=E*A+a,R=Math.sin(_),N=Math.cos(_);T.x=U*R,T.y=-I*n+p,T.z=U*N,h.push(T.x,T.y,T.z),y.set(R,C,N).normalize(),u.push(y.x,y.y,y.z),d.push(E,1-I),b.push(g++)}x.push(b)}for(let v=0;v<s;v++)for(let b=0;b<r;b++){let I=x[b][v],U=x[b+1][v],W=x[b+1][v+1],E=x[b][v+1];(e>0||b!==0)&&(l.push(I,U,E),w+=3),(t>0||b!==r-1)&&(l.push(U,W,E),w+=3)}c.addGroup(f,w,0),f+=w}function D(y){let T=g,w=new Ne,C=new B,v=0,b=y===!0?e:t,I=y===!0?1:-1;for(let W=1;W<=s;W++)h.push(0,p*I,0),u.push(0,I,0),d.push(.5,.5),g++;let U=g;for(let W=0;W<=s;W++){let _=W/s*A+a,R=Math.cos(_),N=Math.sin(_);C.x=b*N,C.y=p*I,C.z=b*R,h.push(C.x,C.y,C.z),u.push(0,I,0),w.x=R*.5+.5,w.y=N*.5*I+.5,d.push(w.x,w.y),g++}for(let W=0;W<s;W++){let E=T+W,_=U+W;y===!0?l.push(_,_+1,E):l.push(_+1,_,E),v+=3}c.addGroup(f,v,y===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ps=class i extends Ss{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ri=class i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),A=Math.floor(s),c=a+1,l=A+1,h=e/a,u=t/A,d=[],g=[],x=[],p=[];for(let f=0;f<l;f++){let P=f*u-o;for(let D=0;D<c;D++){let y=D*h-r;g.push(y,-P,0),x.push(0,0,1),p.push(D/a),p.push(1-f/A)}}for(let f=0;f<A;f++)for(let P=0;P<a;P++){let D=P+c*f,y=P+c*(f+1),T=P+1+c*(f+1),w=P+1+c*f;d.push(D,y,w),d.push(y,T,w)}this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function ji(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Xl(s))s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Xl(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Bt(i){let e={};for(let t=0;t<i.length;t++){let n=ji(i[t]);for(let s in n)e[s]=n[s]}return e}function Xl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ec(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var Fu={clone:ji,merge:Bt},bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Gt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bd,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ze().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ro=class extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hn=class extends Gt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yt=class extends Hn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Lo=class extends Gt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},No=class extends Gt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ai(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Pd(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Hl(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let A=0;A!==e;++A)s[o++]=i[a+A]}return s}function _d(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var En=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let A=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===A)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oo=class extends En{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xA,endingEnd:xA}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],A=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yA:r=e,a=2*t-n;break;case TA:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(A===void 0)switch(this.getSettings_().endingEnd){case yA:o=e,A=2*n-t;break;case TA:o=1,A=n+s[1]-s[0];break;default:o=e-1,A=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(A-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=e*a,c=A-a,l=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,f=-u*p+2*u*x-u*g,P=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,D=(-1-d)*p+(1.5+d)*x+.5*g,y=d*p-d*x;for(let T=0;T!==a;++T)r[T]=f*o[l+T]+P*o[c+T]+D*o[A+T]+y*o[h+T];return r}},zo=class extends En{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=e*a,c=A-a,l=(n-t)/(s-t),h=1-l;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[A+u]*l;return r}},Uo=class extends En{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bo=class extends En{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=e*a,c=A-a,l=this.inTangents,h=this.outTangents;if(!l||!h){let g=(n-t)/(s-t),x=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*x+o[A+p]*g;return r}let u=a*2,d=e-1;for(let g=0;g!==a;++g){let x=o[c+g],p=o[A+g],f=d*u+g*2,P=h[f],D=h[f+1],y=e*u+g*2,T=l[y],w=l[y+1],C=Ed(n,t,P,T,s);r[g]=ju(C,x,D,w,p)}return r}};function ju(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Cd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ed(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=ju(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let A=Cd(r,e,t,n,s);if(Math.abs(A)<1e-10)break;r=Math.max(0,Math.min(1,r-a/A))}return r}var Qt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ai(t,this.TimeBufferType),this.values=Ai(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ai(e.times,Array),values:Ai(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),vo(e.settings)&&(n.settings={inTangents:Ai(e.settings.inTangents,Array),outTangents:Ai(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Si:t=this.InterpolantFactoryMethodDiscrete;break;case Pi:t=this.InterpolantFactoryMethodLinear;break;case mo:t=this.InterpolantFactoryMethodSmooth;break;case MA:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Si;case this.InterpolantFactoryMethodLinear:return Pi;case this.InterpolantFactoryMethodSmooth:return mo;case this.InterpolantFactoryMethodBezier:return MA}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;vo(this.settings)&&(Yl(this.settings.inTangents,e),Yl(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let A=n[a];if(typeof A=="number"&&isNaN(A)){Le("KeyframeTrack: Time is not a valid number.",this,a,A),e=!1;break}if(o!==null&&o>A){Le("KeyframeTrack: Out of order keys.",this,a,A,o),e=!1;break}o=A}if(s!==void 0&&Fh(s))for(let a=0,A=s.length;a!==A;++a){let c=s[a];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mo,r=e.length-1,o=1;for(let a=1;a<r;++a){let A=!1,c=e[a],l=e[a+1];if(c!==l&&(a!==1||c!==e[0]))if(s)A=!0;else{let h=a*n,u=h-n,d=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[u+g]||x!==t[d+g]){A=!0;break}}}if(A){if(a!==o){e[o]=e[a];let h=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,A=o*n,c=0;c!==n;++c)t[A+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,vo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yl(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Qt.prototype.ValueTypeName="";Qt.prototype.TimeBufferType=Float32Array;Qt.prototype.ValueBufferType=Float32Array;Qt.prototype.DefaultInterpolation=Pi;var Yn=class extends Qt{constructor(e,t,n){super(e,t,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=Si;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};mr.prototype.ValueTypeName="color";var Qn=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};Qn.prototype.ValueTypeName="number";var Fo=class extends En{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=(n-t)/(s-t),c=e*a;for(let l=c+a;c!==l;c+=4)qt.slerpFlat(r,0,o,c-a,o,c,A);return r}},Zn=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}};Zn.prototype.ValueTypeName="quaternion";Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Qt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Si;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};di.prototype.ValueTypeName="vector";var gr=class{constructor(e="",t=-1,n=[],s=wu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Id(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Qt.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let A=[],c=[];A.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let l=Pd(A);A=Hl(A,1,l),c=Hl(c,1,l),!s&&A[0]===0&&(A.push(r),c.push(c[0])),o.push(new Qn(".morphTargetInfluences["+t[a].name+"]",A,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,A=e.length;a<A;a++){let c=e[a],l=c.name.match(r);if(l&&l.length>1){let h=l[1],u=s[h];u||(s[h]=u=[]),u.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Dd(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qn;case"vector":case"vector2":case"vector3":case"vector4":return di;case"color":return mr;case"quaternion":return Zn;case"bool":case"boolean":return Yn;case"string":return Jn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Id(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Dd(i.type);if(i.times===void 0){let n=[],s=[];_d(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),vo(i.settings)&&(t.settings={inTangents:Ai(i.settings.inTangents,Float32Array),outTangents:Ai(i.settings.outTangents,Float32Array)}),t}var Pn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ql(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ql(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ql(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var jo=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,A,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(l){a++,r===!1&&s.onStart!==void 0&&s.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,s.onProgress!==void 0&&s.onProgress(l,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),A?A(l):l},this.setURLModifier=function(l){return A=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){let h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wu=new jo,Dn=class{constructor(e){this.manager=e!==void 0?e:Wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Dn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wn={},bA=class extends Error{constructor(e,t){super(e),this.response=t}},_s=class extends Dn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Pn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:s});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,A=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let l=Wn[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,g=d!==0,x=0,p=new ReadableStream({start(f){P();function P(){h.read().then(({done:D,value:y})=>{if(D)f.close();else{x+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let w=0,C=l.length;w<C;w++){let v=l[w];v.onProgress&&v.onProgress(T)}f.enqueue(y),P()}},D=>{f.error(D)})}}});return new Response(p)}else throw new bA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(A){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(l=>new DOMParser().parseFromString(l,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Pn.add(`file:${e}`,c);let l=Wn[e];delete Wn[e];for(let h=0,u=l.length;h<u;h++){let d=l[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let l=Wn[e];if(l===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let h=0,u=l.length;h<u;h++){let d=l[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var as=new WeakMap,Wo=class extends Dn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=as.get(o);h===void 0&&(h=[],as.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=fs("img");function A(){l(),t&&t(this);let h=as.get(this)||[];for(let u=0;u<h.length;u++){let d=h[u];d.onLoad&&d.onLoad(this)}as.delete(this),r.manager.itemEnd(e)}function c(h){l(),s&&s(h),Pn.remove(`image:${e}`);let u=as.get(this)||[];for(let d=0;d<u.length;d++){let g=u[d];g.onError&&g.onError(h)}as.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){a.removeEventListener("load",A,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",A,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Pn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var vr=class extends Dn{constructor(e){super(e)}load(e,t,n,s){let r=new St,o=new Wo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Li=class extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Mr=class extends Li{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},mA=new Ue,Zl=new B,Jl=new B,Cs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zl),Jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){mA.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(mA,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,A=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ds||e.reversedDepth?t.set(.5*o,0,0,.5*o+A,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+A,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(mA)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fo=new B,po=new qt,Sn=new B,xr=class extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fo,po,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fo,po,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ai=new B,Kl=new Ne,ql=new Ne,xt=class extends xr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _i*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Kl,ql),t.subVectors(ql,Kl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let A=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/A,t-=o.offsetY*n/c,s*=o.width/A,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},SA=class extends Cs{constructor(){super(new xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=_i*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ni=class extends Li{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new SA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},PA=class extends Cs{constructor(){super(new xt(90,1,.5,500)),this.isPointLightShadow=!0}},yr=class extends Li{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new PA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},fi=class extends xr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,A=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=l*this.view.offsetY,A=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,A,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_A=class extends Cs{constructor(){super(new fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends Li{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new _A}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Kn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var gA=new WeakMap,Tr=class extends Dn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{gA.has(o)===!0?(s&&s(gA.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let A=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),gA.set(A,c),Pn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Pn.add(`image-bitmap:${e}`,A),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var As=-90,cs=1,Go=class extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xt(As,cs,e,t);s.layers=this.layers,this.add(s);let r=new xt(As,cs,e,t);r.layers=this.layers,this.add(r);let o=new xt(As,cs,e,t);o.layers=this.layers,this.add(o);let a=new xt(As,cs,e,t);a.layers=this.layers,this.add(a);let A=new xt(As,cs,e,t);A.layers=this.layers,this.add(A);let c=new xt(As,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,A]=t;for(let c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),A.up.set(0,1,0),A.lookAt(0,0,-1);else if(e===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),A.up.set(0,-1,0),A.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,A,c,l]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,A),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(h,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ko=class extends xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var tc="\\[\\]\\.:\\/",Rd=new RegExp("["+tc+"]","g"),nc="[^"+tc+"]",Ld="[^"+tc.replace("\\.","")+"]",Nd=/((?:WC+[\/:])*)/.source.replace("WC",nc),Od=/(WCOD+)?/.source.replace("WCOD",Ld),zd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nc),Ud=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nc),Bd=new RegExp("^"+Nd+Od+zd+Ud+"$"),Fd=["material","materials","bones","map"],CA=class{constructor(e,t,n){let s=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rd,"")}static parseTrackName(e){let t=Bd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let A=n(a.children);if(A)return A}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===c){c=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let A=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}A=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(A=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(A=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[A],this.setValue=this.SetterByBindingTypeAndVersioning[A][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=CA;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qv=new Float32Array(1);var Ac=class Ac{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ac.prototype.isMatrix2=!0;var EA=Ac;function ic(i,e,t,n){let s=jd(n);switch(t){case YA:return i*e;case Ko:return i*e/s.components*s.byteLength;case qo:return i*e/s.components*s.byteLength;case gi:return i*e*2/s.components*s.byteLength;case $o:return i*e*2/s.components*s.byteLength;case QA:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case ea:return i*e*4/s.components*s.byteLength;case Pr:case _r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case na:case sa:return Math.max(i,16)*Math.max(e,8)/4;case ta:case ia:return Math.max(i,8)*Math.max(e,8)/2;case ra:case oa:case Aa:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case aa:case Dr:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Sa:case Pa:case _a:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ca:case Ea:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ir:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jd(i){switch(i){case Zt:case kA:return{byteLength:1,components:1};case Rs:case VA:case Tn:return{byteLength:2,components:1};case Zo:case Jo:return{byteLength:2,components:4};case yn:case Qo:case tn:return{byteLength:4,components:1};case XA:case HA:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ch(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gd(i){let e=new WeakMap;function t(a,A){let c=a.array,l=a.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(A,u),i.bufferData(A,c,l),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,A,c){let l=A.array,h=A.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,l);else{h.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<h.length;d++){let g=h[u],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,h[u]=x)}h.length=u+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];i.bufferSubData(c,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}A.clearUpdateRanges()}A.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let A=e.get(a);A&&(i.deleteBuffer(A.buffer),e.delete(a))}function o(a,A){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,A));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,A),c.version=a.version}}return{get:s,remove:r,update:o}}var kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
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
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zd=`#ifdef USE_AOMAP
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
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,sf=`#ifdef USE_BUMPMAP
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,df=`#define PI 3.141592653589793
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
} // validated`,ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pf=`vec3 transformedNormal = objectNormal;
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
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,If=`#ifdef USE_GRADIENTMAP
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
}`,Rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Of=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zf=`#ifdef USE_ENVMAP
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
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
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
#endif`,Gf=`uniform sampler2D dfgLUT;
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
}`,kf=`
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ep=`float getShadowMask() {
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
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
}`,Kp=`#if DEPTH_PACKING == 3200
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
}`,qp=`#define DISTANCE
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
}`,$p=`#define DISTANCE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,cm=`#define MATCAP
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
}`,lm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,hm=`#define PHONG
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
}`,dm=`#define PHONG
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
}`,fm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
}`,mm=`#define TOON
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
}`,gm=`#define TOON
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
}`,vm=`uniform float size;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,ym=`uniform vec3 color;
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
}`,Tm=`uniform float rotation;
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
}`,wm=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:kd,alphahash_pars_fragment:Vd,alphamap_fragment:Xd,alphamap_pars_fragment:Hd,alphatest_fragment:Yd,alphatest_pars_fragment:Qd,aomap_fragment:Zd,aomap_pars_fragment:Jd,batching_pars_vertex:Kd,batching_vertex:qd,begin_vertex:$d,beginnormal_vertex:ef,bsdfs:tf,iridescence_fragment:nf,bumpmap_pars_fragment:sf,clipping_planes_fragment:rf,clipping_planes_pars_fragment:of,clipping_planes_pars_vertex:af,clipping_planes_vertex:Af,color_fragment:cf,color_pars_fragment:lf,color_pars_vertex:uf,color_vertex:hf,common:df,cube_uv_reflection_fragment:ff,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:gf,emissivemap_fragment:vf,emissivemap_pars_fragment:Mf,colorspace_fragment:xf,colorspace_pars_fragment:yf,envmap_fragment:Tf,envmap_common_pars_fragment:wf,envmap_pars_fragment:bf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:zf,envmap_vertex:Pf,fog_vertex:_f,fog_pars_vertex:Cf,fog_fragment:Ef,fog_pars_fragment:Df,gradientmap_pars_fragment:If,lightmap_pars_fragment:Rf,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Nf,lights_pars_begin:Of,lights_toon_fragment:Uf,lights_toon_pars_fragment:Bf,lights_phong_fragment:Ff,lights_phong_pars_fragment:jf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Gf,lights_fragment_begin:kf,lights_fragment_maps:Vf,lights_fragment_end:Xf,lightprobes_pars_fragment:Hf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:Jf,map_fragment:Kf,map_pars_fragment:qf,map_particle_fragment:$f,map_particle_pars_fragment:ep,metalnessmap_fragment:tp,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:op,morphtarget_vertex:ap,normal_fragment_begin:Ap,normal_fragment_maps:cp,normal_pars_fragment:lp,normal_pars_vertex:up,normal_vertex:hp,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:vp,packing:Mp,premultiplied_alpha_fragment:xp,project_vertex:yp,dithering_fragment:Tp,dithering_pars_fragment:wp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:Pp,shadowmap_pars_vertex:_p,shadowmap_vertex:Cp,shadowmask_pars_fragment:Ep,skinbase_vertex:Dp,skinning_pars_vertex:Ip,skinning_vertex:Rp,skinnormal_vertex:Lp,specularmap_fragment:Np,specularmap_pars_fragment:Op,tonemapping_fragment:zp,tonemapping_pars_fragment:Up,transmission_fragment:Bp,transmission_pars_fragment:Fp,uv_pars_fragment:jp,uv_pars_vertex:Wp,uv_vertex:Gp,worldpos_vertex:kp,background_vert:Vp,background_frag:Xp,backgroundCube_vert:Hp,backgroundCube_frag:Yp,cube_vert:Qp,cube_frag:Zp,depth_vert:Jp,depth_frag:Kp,distance_vert:qp,distance_frag:$p,equirect_vert:em,equirect_frag:tm,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:om,meshlambert_frag:am,meshmatcap_vert:Am,meshmatcap_frag:cm,meshnormal_vert:lm,meshnormal_frag:um,meshphong_vert:hm,meshphong_frag:dm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:vm,points_frag:Mm,shadow_vert:xm,shadow_frag:ym,sprite_vert:Tm,sprite_frag:wm},he={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Nn={basic:{uniforms:Bt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Bt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Bt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Bt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Bt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new De(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Bt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Bt([he.points,he.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Bt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Bt([he.common,he.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Bt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Bt([he.sprite,he.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Bt([he.common,he.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Bt([he.lights,he.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Nn.physical={uniforms:Bt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Na={r:0,b:0,g:0},bm=new Ue,lh=new ze;lh.set(-1,0,0,0,1,0,0,0,1);function Sm(i,e,t,n,s,r){let o=new De(0),a=s===!0?0:1,A,c,l=null,h=0,u=null;function d(P){let D=P.isScene===!0?P.background:null;if(D&&D.isTexture){let y=P.backgroundBlurriness>0;D=e.get(D,y)}return D}function g(P){let D=!1,y=d(P);y===null?p(o,a):y&&y.isColor&&(p(y,1),D=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(P,D){let y=d(D);y&&(y.isCubeTexture||y.mapping===Sr)?(c===void 0&&(c=new Pt(new bs(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:ji(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bm.makeRotationFromEuler(D.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(lh),c.material.toneMapped=We.getTransfer(y.colorSpace)!==qe,(l!==y||h!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,l=y,h=y.version,u=i.toneMapping),c.layers.enableAll(),P.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(A===void 0&&(A=new Pt(new Ri(2,2),new en({name:"BackgroundMaterial",uniforms:ji(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),A.geometry.deleteAttribute("normal"),Object.defineProperty(A.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(A)),A.material.uniforms.t2D.value=y,A.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,A.material.toneMapped=We.getTransfer(y.colorSpace)!==qe,y.matrixAutoUpdate===!0&&y.updateMatrix(),A.material.uniforms.uvTransform.value.copy(y.matrix),(l!==y||h!==y.version||u!==i.toneMapping)&&(A.material.needsUpdate=!0,l=y,h=y.version,u=i.toneMapping),A.layers.enableAll(),P.unshift(A,A.geometry,A.material,0,0,null))}function p(P,D){P.getRGB(Na,ec(i)),t.buffers.color.setClear(Na.r,Na.g,Na.b,D,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),A!==void 0&&(A.geometry.dispose(),A.material.dispose(),A=void 0)}return{getClearColor:function(){return o},setClearColor:function(P,D=1){o.set(P),a=D,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(P){a=P,p(o,a)},render:g,addToRenderList:x,dispose:f}}function Pm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(U,W,E,_,R){let N=!1,H=h(U,_,E,W);r!==H&&(r=H,c(r.object)),N=d(U,_,E,R),N&&g(U,_,E,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,y(U,W,E,_),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function A(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function l(U){return i.deleteVertexArray(U)}function h(U,W,E,_){let R=_.wireframe===!0,N=n[W.id];N===void 0&&(N={},n[W.id]=N);let H=U.isInstancedMesh===!0?U.id:0,q=N[H];q===void 0&&(q={},N[H]=q);let F=q[E.id];F===void 0&&(F={},q[E.id]=F);let V=F[R];return V===void 0&&(V=u(A()),F[R]=V),V}function u(U){let W=[],E=[],_=[];for(let R=0;R<t;R++)W[R]=0,E[R]=0,_[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:E,attributeDivisors:_,object:U,attributes:{},index:null}}function d(U,W,E,_){let R=r.attributes,N=W.attributes,H=0,q=E.getAttributes();for(let F in q)if(q[F].location>=0){let $=R[F],le=N[F];if(le===void 0&&(F==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),F==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),$===void 0||$.attribute!==le||le&&$.data!==le.data)return!0;H++}return r.attributesNum!==H||r.index!==_}function g(U,W,E,_){let R={},N=W.attributes,H=0,q=E.getAttributes();for(let F in q)if(q[F].location>=0){let $=N[F];$===void 0&&(F==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),F==="instanceColor"&&U.instanceColor&&($=U.instanceColor));let le={};le.attribute=$,$&&$.data&&(le.data=$.data),R[F]=le,H++}r.attributes=R,r.attributesNum=H,r.index=_}function x(){let U=r.newAttributes;for(let W=0,E=U.length;W<E;W++)U[W]=0}function p(U){f(U,0)}function f(U,W){let E=r.newAttributes,_=r.enabledAttributes,R=r.attributeDivisors;E[U]=1,_[U]===0&&(i.enableVertexAttribArray(U),_[U]=1),R[U]!==W&&(i.vertexAttribDivisor(U,W),R[U]=W)}function P(){let U=r.newAttributes,W=r.enabledAttributes;for(let E=0,_=W.length;E<_;E++)W[E]!==U[E]&&(i.disableVertexAttribArray(E),W[E]=0)}function D(U,W,E,_,R,N,H){H===!0?i.vertexAttribIPointer(U,W,E,R,N):i.vertexAttribPointer(U,W,E,_,R,N)}function y(U,W,E,_){x();let R=_.attributes,N=E.getAttributes(),H=W.defaultAttributeValues;for(let q in N){let F=N[q];if(F.location>=0){let V=R[q];if(V===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(V=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(V=U.instanceColor)),V!==void 0){let $=V.normalized,le=V.itemSize,ie=e.get(V);if(ie===void 0)continue;let xe=ie.buffer,be=ie.type,Ie=ie.bytesPerElement,Q=be===i.INT||be===i.UNSIGNED_INT||V.gpuType===Qo;if(V.isInterleavedBufferAttribute){let K=V.data,me=K.stride,Oe=V.offset;if(K.isInstancedInterleavedBuffer){for(let ve=0;ve<F.locationSize;ve++)f(F.location+ve,K.meshPerAttribute);U.isInstancedMesh!==!0&&_._maxInstanceCount===void 0&&(_._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ve=0;ve<F.locationSize;ve++)p(F.location+ve);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let ve=0;ve<F.locationSize;ve++)D(F.location+ve,le/F.locationSize,be,$,me*Ie,(Oe+le/F.locationSize*ve)*Ie,Q)}else{if(V.isInstancedBufferAttribute){for(let K=0;K<F.locationSize;K++)f(F.location+K,V.meshPerAttribute);U.isInstancedMesh!==!0&&_._maxInstanceCount===void 0&&(_._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let K=0;K<F.locationSize;K++)p(F.location+K);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let K=0;K<F.locationSize;K++)D(F.location+K,le/F.locationSize,be,$,le*Ie,le/F.locationSize*K*Ie,Q)}}else if(H!==void 0){let $=H[q];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(F.location,$);break;case 3:i.vertexAttrib3fv(F.location,$);break;case 4:i.vertexAttrib4fv(F.location,$);break;default:i.vertexAttrib1fv(F.location,$)}}}}P()}function T(){b();for(let U in n){let W=n[U];for(let E in W){let _=W[E];for(let R in _){let N=_[R];for(let H in N)l(N[H].object),delete N[H];delete _[R]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let W=n[U.id];for(let E in W){let _=W[E];for(let R in _){let N=_[R];for(let H in N)l(N[H].object),delete N[H];delete _[R]}}delete n[U.id]}function C(U){for(let W in n){let E=n[W];for(let _ in E){let R=E[_];if(R[U.id]===void 0)continue;let N=R[U.id];for(let H in N)l(N[H].object),delete N[H];delete R[U.id]}}}function v(U){for(let W in n){let E=n[W],_=U.isInstancedMesh===!0?U.id:0,R=E[_];if(R!==void 0){for(let N in R){let H=R[N];for(let q in H)l(H[q].object),delete H[q];delete R[N]}delete E[_],Object.keys(E).length===0&&delete n[W]}}}function b(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:P}}function _m(i,e,t){let n;function s(A){n=A}function r(A,c){i.drawArrays(n,A,c),t.update(c,n,1)}function o(A,c,l){l!==0&&(i.drawArraysInstanced(n,A,c,l),t.update(c,n,l))}function a(A,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,A,0,c,0,l);let u=0;for(let d=0;d<l;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Cm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let v=C===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zt&&C!==tn&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function A(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",l=A(c);l!==c&&(Pe("WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:A,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:y,maxSamples:T,samples:w}}function Em(i){let e=this,t=null,n=0,s=!1,r=!1,o=new dn,a=new ze,A={value:null,needsUpdate:!1};this.uniform=A,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||s;return s=u,n=h.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?l(null):c();else{let P=r?0:n,D=P*4,y=f.clippingState||null;A.value=y,y=l(g,u,D,d);for(let T=0;T!==D;++T)y[T]=t[T];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=P}};function c(){A.value!==t&&(A.value=t,A.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,u,d,g){let x=h!==null?h.length:0,p=null;if(x!==0){if(p=A.value,g!==!0||p===null){let f=d+x*4,P=u.matrixWorldInverse;a.getNormalMatrix(P),(p===null||p.length<f)&&(p=new Float32Array(f));for(let D=0,y=d;D!==x;++D,y+=4)o.copy(h[D]).applyMatrix4(P,a),o.normal.toArray(p,y),p[y+3]=o.constant}A.value=p,A.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var zs=4,Dm=6,Im=20,Rm=256,Lr=new fi,Gu=new De,cc=null,lc=0,uc=0,hc=!1,Lm=new B,Wi=new B,za=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Lm}=r;cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let A=this._allocateTargets();return A.depthBuffer=!0,this._sceneToCubeUV(e,n,s,A,a),t>0&&this._blur(A,0,0,t),this._applyPMREM(A),this._cleanup(A),A}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,lc,uc),this._renderer.xr.enabled=hc,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:Tn,format:nn,colorSpace:Wt,depthBuffer:!1},s=ku(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Nm(r)),this._blurMaterial=zm(r,e,t),this._ggxMaterial=Om(r,e,t)}return s}_compileMaterial(e){let t=new Pt(new Tt,e);this._renderer.compile(t,Lr)}_sceneToCubeUV(e,t,n,s,r){let A=new xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gu),h.toneMapping=Mn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new bs,new vn({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,f=!1,P=e.background;P?P.isColor&&(p.color.copy(P),e.background=null,f=!0):(p.color.copy(Gu),f=!0);for(let D=0;D<6;D++){let y=D%3;y===0?(A.up.set(0,c[D],0),A.position.set(r.x,r.y,r.z),A.lookAt(r.x+l[D],r.y,r.z)):y===1?(A.up.set(0,0,c[D]),A.position.set(r.x,r.y,r.z),A.lookAt(r.x,r.y+l[D],r.z)):(A.up.set(0,c[D],0),A.position.set(r.x,r.y,r.z),A.lookAt(r.x,r.y,r.z+l[D]));let T=this._cubeSize;Os(s,y*T,D>2?T:0,T,T),h.setRenderTarget(s),f&&h.render(x,A),h.render(e,A)}h.toneMapping=d,h.autoClear=u,e.background=P}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===pi||e.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let A=this._cubeSize;Os(t,0,0,3*A,2*A),n.setRenderTarget(t),n.render(o,Lr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let A=o.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-l*l),u=c*1.25,d=h*u,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-zs?n-g+zs:0),f=4*(this._cubeSize-x);A.envMap.value=e.texture,A.roughness.value=d,A.mipInt.value=g-t,Os(r,p,f,3*x,2*x),s.setRenderTarget(r),s.render(a,Lr),A.envMap.value=r.texture,A.roughness.value=0,A.mipInt.value=g-n,Os(e,p,f,3*x,2*x),s.setRenderTarget(e),s.render(a,Lr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,A=this._lodMeshes[s];A.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[s],h=3*l*(s>this._lodMax-zs?s-this._lodMax+zs:0),u=4*(this._cubeSize-l);Os(t,h,u,3*l,2*l),o.setRenderTarget(t),o.render(A,Lr)}};function Nm(i){let e=[],t=[],n=i,s=i-zs+1+Dm;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),A=-a,c=1+a,l=[A,A,c,A,c,c,A,A,c,c,A,c],h=6,u=6,d=3,g=new Float32Array(d*u*h),x=new Float32Array(d*u*h);for(let f=0;f<h;f++){let P=f%3*2/3-1,D=f>2?0:-1,y=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];g.set(y,d*u*f);for(let T=0;T<u;T++){let w=l[T*2]*2-1,C=l[T*2+1]*2-1;f===0?Wi.set(1,C,w):f===1?Wi.set(-w,1,-C):f===2?Wi.set(-w,C,1):f===3?Wi.set(-1,C,-w):f===4?Wi.set(-w,-1,C):Wi.set(w,C,-1),Wi.toArray(x,(f*u+T)*d)}}let p=new Tt;p.setAttribute("position",new bt(g,d)),p.setAttribute("outputDirection",new bt(x,d)),t.push(new Pt(p,null)),n>zs&&n--}return{lodMeshes:t,sizeLods:e}}function ku(i,e,t){let n=new Xt(i,e,t);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Om(i,e,t){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function zm(i,e,t){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:Im,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Vu(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Xu(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Fa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ua=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bs(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Rn});r.uniforms.tEquirect.value=t;let o=new Pt(s,r),a=t.minFilter;return t.minFilter===xn&&(t.minFilter=pt),new Go(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Um(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Xo||d===Ho)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Ua(g.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,g=d===Xo||d===Ho,x=d===pi||d===Bi;if(g||x){let p=t.get(u),f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new za(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let P=u.image;return g&&P&&P.height>0||x&&P&&A(P)?(n===null&&(n=new za(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",l),p.texture):null}}}return u}function a(u,d){return d===Xo?u.mapping=pi:d===Ho&&(u.mapping=Bi),u}function A(u){let d=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function l(u){let d=u.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Bm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&bi("WebGLRenderer: "+n+" extension not supported."),s}}}function Fm(i,e,t,n){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function A(h){let u=h.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(h){let u=[],d=h.index,g=h.attributes.position,x=0;if(g===void 0)return;if(d!==null){let P=d.array;x=d.version;for(let D=0,y=P.length;D<y;D+=3){let T=P[D+0],w=P[D+1],C=P[D+2];u.push(T,w,w,C,C,T)}}else{let P=g.array;x=g.version;for(let D=0,y=P.length/3-1;D<y;D+=3){let T=D+0,w=D+1,C=D+2;u.push(T,w,w,C,C,T)}}let p=new(g.count>=65535?ar:or)(u,1);p.version=x;let f=r.get(h);f&&e.remove(f),r.set(h,p)}function l(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:A,getWireframeAttribute:l}}function jm(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function A(h,u){i.drawElements(n,u,r,h*o),t.update(u,n,1)}function c(h,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,h*o,d),t.update(u,n,d))}function l(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,d);let x=0;for(let p=0;p<d;p++)x+=u[p];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=A,this.renderInstances=c,this.renderMultiDraw=l}function Wm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Le("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gm(i,e,t){let n=new WeakMap,s=new tt;function r(o,a,A){let c=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(a);if(u===void 0||u.count!==h){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],P=a.morphAttributes.color||[],D=0;d===!0&&(D=1),g===!0&&(D=2),x===!0&&(D=3);let y=a.attributes.position.count*D,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*T*4*h),C=new nr(w,y,T,h);C.type=tn,C.needsUpdate=!0;let v=D*4;for(let I=0;I<h;I++){let U=p[I],W=f[I],E=P[I],_=y*T*4*I;for(let R=0;R<U.count;R++){let N=R*v;d===!0&&(s.fromBufferAttribute(U,R),w[_+N+0]=s.x,w[_+N+1]=s.y,w[_+N+2]=s.z,w[_+N+3]=0),g===!0&&(s.fromBufferAttribute(W,R),w[_+N+4]=s.x,w[_+N+5]=s.y,w[_+N+6]=s.z,w[_+N+7]=0),x===!0&&(s.fromBufferAttribute(E,R),w[_+N+8]=s.x,w[_+N+9]=s.y,w[_+N+10]=s.z,w[_+N+11]=E.itemSize===4?s.w:1)}}u={count:h,texture:C,size:new Ne(y,T)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)A.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;A.getUniforms().setValue(i,"morphTargetBaseInfluence",g),A.getUniforms().setValue(i,"morphTargetInfluences",c)}A.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),A.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function km(i,e,t,n,s){let r=new WeakMap;function o(c){let l=s.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",A)===!1&&c.addEventListener("dispose",A),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function a(){r=new WeakMap}function A(c){let l=c.target;l.removeEventListener("dispose",A),n.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:a}}var Vm={[zA]:"LINEAR_TONE_MAPPING",[UA]:"REINHARD_TONE_MAPPING",[BA]:"CINEON_TONE_MAPPING",[br]:"ACES_FILMIC_TONE_MAPPING",[jA]:"AGX_TONE_MAPPING",[WA]:"NEUTRAL_TONE_MAPPING",[FA]:"CUSTOM_TONE_MAPPING"};function Xm(i,e,t,n,s,r){let o=new Xt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,A=null,c=new Tt;c.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new yt([0,2,0,0,2,0],2));let l=new Ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Pt(c,l),u=new fi(-1,1,1,-1,0,1),d=null,g=null,x=!1,p,f=null,P=[],D=!1;this.setSize=function(y,T){o.setSize(y,T),a!==null&&a.setSize(y,T),A!==null&&A.setSize(y,T);for(let w=0;w<P.length;w++){let C=P[w];C.setSize&&C.setSize(y,T)}},this.setEffects=function(y){P=y,D=P.length>0&&P[0].isRenderPass===!0;let T=o.width,w=o.height;P.length>0&&a===null&&(a=new Xt(T,w,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),A=new Xt(T,w,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<P.length;C++){let v=P[C];v.setSize&&v.setSize(T,w)}},this.begin=function(y,T){if(x||y.toneMapping===Mn&&P.length===0)return!1;if(f=T,T!==null){let w=T.width,C=T.height;(o.width!==w||o.height!==C)&&this.setSize(w,C)}return D===!1&&y.setRenderTarget(o),p=y.toneMapping,y.toneMapping=Mn,!0},this.hasRenderPass=function(){return D},this.end=function(y,T){y.toneMapping=p,x=!0;let w=o,C=a;for(let v=0;v<P.length;v++){let b=P[v];b.enabled!==!1&&(b.render(y,C,w,T),b.needsSwap!==!1&&(w=C,C=C===a?A:a))}if(d!==y.outputColorSpace||g!==y.toneMapping){d=y.outputColorSpace,g=y.toneMapping,l.defines={},We.getTransfer(d)===qe&&(l.defines.SRGB_TRANSFER="");let v=Vm[g];v&&(l.defines[v]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(f),y.render(h,u),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),A!==null&&A.dispose(),c.dispose(),l.dispose()}}var uh=new St,pc=new hi(1,1),hh=new nr,dh=new Co,fh=new fr,Hu=[],Yu=[],Qu=new Float32Array(16),Zu=new Float32Array(9),Ju=new Float32Array(4);function Bs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hu[s];if(r===void 0&&(r=new Float32Array(s),Hu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ja(i,e){let t=Yu[e];t===void 0&&(t=new Int32Array(e),Yu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Jm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(_t(t,n))return;Ju.set(n),i.uniformMatrix2fv(this.addr,!1,Ju),Ct(t,n)}}function Km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(_t(t,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),Ct(t,n)}}function qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(_t(t,n))return;Qu.set(n),i.uniformMatrix4fv(this.addr,!1,Qu),Ct(t,n)}}function $m(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pc.compareFunction=t.isReversedDepthBuffer()?La:Ra,r=pc):r=uh,t.setTexture2D(e||r,s)}function Ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||dh,s)}function cg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fh,s)}function lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hh,s)}function ug(i){switch(i){case 5126:return Hm;case 35664:return Ym;case 35665:return Qm;case 35666:return Zm;case 35674:return Jm;case 35675:return Km;case 35676:return qm;case 5124:case 35670:return $m;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return lg}}function hg(i,e){i.uniform1fv(this.addr,e)}function dg(i,e){let t=Bs(e,this.size,2);i.uniform2fv(this.addr,t)}function fg(i,e){let t=Bs(e,this.size,3);i.uniform3fv(this.addr,t)}function pg(i,e){let t=Bs(e,this.size,4);i.uniform4fv(this.addr,t)}function mg(i,e){let t=Bs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gg(i,e){let t=Bs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vg(i,e){let t=Bs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mg(i,e){i.uniform1iv(this.addr,e)}function xg(i,e){i.uniform2iv(this.addr,e)}function yg(i,e){i.uniform3iv(this.addr,e)}function Tg(i,e){i.uniform4iv(this.addr,e)}function wg(i,e){i.uniform1uiv(this.addr,e)}function bg(i,e){i.uniform2uiv(this.addr,e)}function Sg(i,e){i.uniform3uiv(this.addr,e)}function Pg(i,e){i.uniform4uiv(this.addr,e)}function _g(i,e,t){let n=this.cache,s=e.length,r=ja(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=pc:o=uh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Cg(i,e,t){let n=this.cache,s=e.length,r=ja(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||dh,r[o])}function Eg(i,e,t){let n=this.cache,s=e.length,r=ja(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||fh,r[o])}function Dg(i,e,t){let n=this.cache,s=e.length,r=ja(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||hh,r[o])}function Ig(i){switch(i){case 5126:return hg;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return vg;case 5124:case 35670:return Mg;case 35667:case 35671:return xg;case 35668:case 35672:return yg;case 35669:case 35673:return Tg;case 5125:return wg;case 36294:return bg;case 36295:return Sg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Dg}}var mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ug(t.type)}},gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ig(t.type)}},vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},dc=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function Rg(i,e,t){let n=i.name,s=n.length;for(dc.lastIndex=0;;){let r=dc.exec(n),o=dc.lastIndex,a=r[1],A=r[2]==="]",c=r[3];if(A&&(a=a|0),c===void 0||c==="["&&o+2===s){Ku(t,c===void 0?new mc(a,i,e):new gc(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new vc(a),Ku(t,h)),t=h}}}var Us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),A=e.getUniformLocation(t,a.name);Rg(a,A,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],A=n[a.id];A.needsUpdate!==!1&&a.setValue(e,A.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function qu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Lg=37297,Ng=0;function Og(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var $u=new ze;function zg(i){We._getMatrix($u,We.workingColorSpace,i);let e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case er:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function eh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Og(i.getShaderSource(e),a)}else return r}function Ug(i,e){let t=zg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Bg={[zA]:"Linear",[UA]:"Reinhard",[BA]:"Cineon",[br]:"ACESFilmic",[jA]:"AgX",[WA]:"Neutral",[FA]:"Custom"};function Fg(i,e){let t=Bg[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oa=new B;function jg(){We.getLuminanceCoefficients(Oa);let i=Oa.x.toFixed(4),e=Oa.y.toFixed(4),t=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function Gg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Or(i){return i!==""}function th(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(Vg,Hg)}var Xg=new Map;function Hg(i,e){let t=je[e];if(t===void 0){let n=Xg.get(e);if(n!==void 0)t=je[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mc(t)}var Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(i){return i.replace(Yg,Qg)}function Qg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Zg={[zi]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function Jg(i){return Zg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kg={[pi]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE_UV"};function qg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $g={[Bi]:"ENVMAP_MODE_REFRACTION"};function ev(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$g[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tv={[OA]:"ENVMAP_BLENDING_MULTIPLY",[xu]:"ENVMAP_BLENDING_MIX",[yu]:"ENVMAP_BLENDING_ADD"};function nv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tv[i.combine]||"ENVMAP_BLENDING_NONE"}function iv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,A=Jg(t),c=qg(t),l=ev(t),h=nv(t),u=iv(t),d=Wg(t),g=Gg(r),x=s.createProgram(),p,f,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),f.length>0&&(f+=`
`)):(p=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),f=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?je.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Fg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Ug("linearToOutputTexel",t.outputColorSpace),jg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=Mc(o),o=th(o,t),o=nh(o,t),a=Mc(a),a=th(a,t),a=nh(a,t),o=ih(o),a=ih(a),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===KA?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===KA?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let D=P+p+o,y=P+f+a,T=qu(s,s.VERTEX_SHADER,D),w=qu(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(U){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(x)||"",E=s.getShaderInfoLog(T)||"",_=s.getShaderInfoLog(w)||"",R=W.trim(),N=E.trim(),H=_.trim(),q=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,w);else{let V=eh(s,T,"vertex"),$=eh(s,w,"fragment");Le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+R+`
`+V+`
`+$)}else R!==""?Pe("WebGLProgram: Program Info Log:",R):(N===""||H==="")&&(F=!1);F&&(U.diagnostics={runnable:q,programLog:R,vertexShader:{log:N,prefix:p},fragmentShader:{log:H,prefix:f}})}s.deleteShader(T),s.deleteShader(w),v=new Us(s,x),b=kg(s,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,Lg)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ng++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var rv=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yc(e),t.set(e,n)),n}},yc=class{constructor(e){this.id=rv++,this.code=e,this.usedTimes=0}};function ov(i){return i===gi||i===Dr||i===Ir}function av(i,e,t,n,s,r){let o=new ir,a=new xc,A=new Set,c=[],l=new Map,h=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return A.add(v),v===0?"uv":`uv${v}`}function x(v,b,I,U,W,E){let _=U.fog,R=W.geometry,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,q=e.get(v.envMap||N,H),F=q&&q.mapping===Sr?q.image.height:null,V=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Pe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let $=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,le=$!==void 0?$.length:0,ie=0;R.morphAttributes.position!==void 0&&(ie=1),R.morphAttributes.normal!==void 0&&(ie=2),R.morphAttributes.color!==void 0&&(ie=3);let xe,be,Ie,Q;if(V){let at=Nn[V];xe=at.vertexShader,be=at.fragmentShader}else{xe=v.vertexShader,be=v.fragmentShader;let at=a.getVertexShaderStage(v),Je=a.getFragmentShaderStage(v);a.update(v,at,Je),Ie=at.id,Q=Je.id}let K=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Oe=W.isInstancedMesh===!0,ve=W.isBatchedMesh===!0,Ge=!!v.map,wt=!!v.matcap,Ve=!!q,Ze=!!v.aoMap,ot=!!v.lightMap,Ye=!!v.bumpMap&&v.wireframe===!1,lt=!!v.normalMap,Et=!!v.displacementMap,Vt=!!v.emissiveMap,ut=!!v.metalnessMap,gt=!!v.roughnessMap,z=v.anisotropy>0,Nt=v.clearcoat>0,$e=v.dispersion>0,S=v.retroreflectivity>0,m=v.iridescence>0,j=v.sheen>0,X=v.transmission>0,Z=z&&!!v.anisotropyMap,se=Nt&&!!v.clearcoatMap,re=Nt&&!!v.clearcoatNormalMap,J=Nt&&!!v.clearcoatRoughnessMap,te=m&&!!v.iridescenceMap,oe=m&&!!v.iridescenceThicknessMap,_e=j&&!!v.sheenColorMap,ue=j&&!!v.sheenRoughnessMap,ae=!!v.specularMap,Ce=!!v.specularColorMap,Re=!!v.specularIntensityMap,Be=X&&!!v.transmissionMap,O=X&&!!v.thicknessMap,Ae=!!v.gradientMap,ee=!!v.alphaMap,ce=v.alphaTest>0,pe=!!v.alphaHash,ne=!!v.extensions,Ee=Mn;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let we={shaderID:V,shaderType:v.type,shaderName:v.name,vertexShader:xe,fragmentShader:be,defines:v.defines,customVertexShaderID:Ie,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ve,batchingColor:ve&&W._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&W.instanceColor!==null,instancingMorph:Oe&&W.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:wt,envMap:Ve,envMapMode:Ve&&q.mapping,envMapCubeUVHeight:F,aoMap:Ze,lightMap:ot,bumpMap:Ye,normalMap:lt,displacementMap:Et,emissiveMap:Vt,normalMapObjectSpace:lt&&v.normalMapType===Su,normalMapTangentSpace:lt&&v.normalMapType===Ia,packedNormalMap:lt&&v.normalMapType===Ia&&ov(v.normalMap.format),metalnessMap:ut,roughnessMap:gt,anisotropy:z,anisotropyMap:Z,clearcoat:Nt,clearcoatMap:se,clearcoatNormalMap:re,clearcoatRoughnessMap:J,dispersion:$e,retroreflection:S,iridescence:m,iridescenceMap:te,iridescenceThicknessMap:oe,sheen:j,sheenColorMap:_e,sheenRoughnessMap:ue,specularMap:ae,specularColorMap:Ce,specularIntensityMap:Re,transmission:X,transmissionMap:Be,thicknessMap:O,gradientMap:Ae,opaque:v.transparent===!1&&v.blending===Ds&&v.alphaToCoverage===!1,alphaMap:ee,alphaTest:ce,alphaHash:pe,combine:v.combine,mapUv:Ge&&g(v.map.channel),aoMapUv:Ze&&g(v.aoMap.channel),lightMapUv:ot&&g(v.lightMap.channel),bumpMapUv:Ye&&g(v.bumpMap.channel),normalMapUv:lt&&g(v.normalMap.channel),displacementMapUv:Et&&g(v.displacementMap.channel),emissiveMapUv:Vt&&g(v.emissiveMap.channel),metalnessMapUv:ut&&g(v.metalnessMap.channel),roughnessMapUv:gt&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:se&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(v.sheenRoughnessMap.channel),specularMapUv:ae&&g(v.specularMap.channel),specularColorMapUv:Ce&&g(v.specularColorMap.channel),specularIntensityMapUv:Re&&g(v.specularIntensityMap.channel),transmissionMapUv:Be&&g(v.transmissionMap.channel),thicknessMapUv:O&&g(v.thicknessMap.channel),alphaMapUv:ee&&g(v.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(lt||z),vertexNormals:!!R.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!R.attributes.uv&&(Ge||ee),fog:!!_,useFog:v.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||R.attributes.normal===void 0&&lt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ie,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:E.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&We.getTransfer(v.map.colorSpace)===qe,decodeVideoTextureEmissive:Vt&&v.emissiveMap.isVideoTexture===!0&&We.getTransfer(v.emissiveMap.colorSpace)===qe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===an,flipSided:v.side===kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return we.vertexUv1s=A.has(1),we.vertexUv2s=A.has(2),we.vertexUv3s=A.has(3),A.clear(),we}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)b.push(I),b.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(f(b,v),P(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function f(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function P(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function D(v){let b=d[v.type],I;if(b){let U=Nn[b];I=Fu.clone(U.uniforms)}else I=v.uniforms;return I}function y(v,b){let I=l.get(b);return I!==void 0?++I.usedTimes:(I=new sv(i,b,v,s),c.push(I),l.set(b,I)),I}function T(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),l.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:D,acquireProgram:y,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:C}}function Av(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,A){i.get(o)[a]=A}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function cv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function oh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,g,x,p,f){let P=i[e];return P===void 0?(P={id:u.id,object:u,geometry:d,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:f},i[e]=P):(P.id=u.id,P.object=u,P.geometry=d,P.material=g,P.materialVariant=o(u),P.groupOrder=x,P.renderOrder=u.renderOrder,P.z=p,P.group=f),e++,P}function A(u,d,g,x,p,f,P){P.reversedDepth===!0&&(p=-p);let D=a(u,d,g,x,p,f);g.transmission>0?n.push(D):g.transparent===!0?s.push(D):t.push(D)}function c(u,d,g,x,p,f){let P=a(u,d,g,x,p,f);g.transmission>0?n.unshift(P):g.transparent===!0?s.unshift(P):t.unshift(P)}function l(u,d){t.length>1&&t.sort(u||cv),n.length>1&&n.sort(d||rh),s.length>1&&s.sort(d||rh)}function h(){for(let u=e,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:A,unshift:c,finish:h,sort:l}}function lv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new oh,i.set(n,[o])):s>=r.length?(o=new oh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function uv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new De};break;case"SpotLight":t={position:new B,direction:new B,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function hv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var dv=0;function fv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pv(i){let e=new uv,t=hv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Ue,o=new Ue;function a(c){let l=0,h=0,u=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let d=0,g=0,x=0,p=0,f=0,P=0,D=0,y=0,T=0,w=0,C=0,v=0,b=0,I=0;c.sort(fv);for(let W=0,E=c.length;W<E;W++){let _=c[W],R=_.color,N=_.intensity,H=_.distance,q=null;if(_.shadow&&_.shadow.map&&(_.shadow.map.texture.format===gi?q=_.shadow.map.texture:q=_.shadow.map.depthTexture||_.shadow.map.texture),_.isAmbientLight)l+=R.r*N,h+=R.g*N,u+=R.b*N;else if(_.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(_.sh.coefficients[F],N);I++}else if(_.isSunLight){let F=e.get(_);if(F.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){let V=_.shadow,$=t.get(_);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[g]=$,n.sunShadowMap[g]=q;let le=V.getViewportCount();for(let ie=0;ie<le;ie++)n.sunShadowMatrix[x+ie]=V.getMatrix(ie),n.sunShadowCascade[x+ie]=V._cascadeData[ie];x+=le,g++}n.sun[d]=F,d++}else if(_.isDirectionalLight){let F=e.get(_);if(F.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){let V=_.shadow,$=t.get(_);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=_.shadow.matrix,T++}n.directional[p]=F,p++}else if(_.isSpotLight){let F=e.get(_);F.position.setFromMatrixPosition(_.matrixWorld),F.color.copy(R).multiplyScalar(N),F.distance=H,F.coneCos=Math.cos(_.angle),F.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),F.decay=_.decay,n.spot[P]=F;let V=_.shadow;if(_.map&&(n.spotLightMap[v]=_.map,v++,V.updateMatrices(_),_.castShadow&&b++),n.spotLightMatrix[P]=V.matrix,_.castShadow){let $=t.get(_);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,n.spotShadow[P]=$,n.spotShadowMap[P]=q,C++}P++}else if(_.isRectAreaLight){let F=e.get(_);F.color.copy(R).multiplyScalar(N),F.halfWidth.set(_.width*.5,0,0),F.halfHeight.set(0,_.height*.5,0),n.rectArea[D]=F,D++}else if(_.isPointLight){let F=e.get(_);if(F.color.copy(_.color).multiplyScalar(_.intensity),F.distance=_.distance,F.decay=_.decay,_.castShadow){let V=_.shadow,$=t.get(_);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,$.shadowCameraNear=V.camera.near,$.shadowCameraFar=V.camera.far,n.pointShadow[f]=$,n.pointShadowMap[f]=q,n.pointShadowMatrix[f]=_.shadow.matrix,w++}n.point[f]=F,f++}else if(_.isHemisphereLight){let F=e.get(_);F.skyColor.copy(_.color).multiplyScalar(N),F.groundColor.copy(_.groundColor).multiplyScalar(N),n.hemi[y]=F,y++}}D>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=u;let U=n.hash;(U.sunLength!==d||U.directionalLength!==p||U.pointLength!==f||U.spotLength!==P||U.rectAreaLength!==D||U.hemiLength!==y||U.numSunShadows!==g||U.numDirectionalShadows!==T||U.numPointShadows!==w||U.numSpotShadows!==C||U.numSpotMaps!==v||U.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=p,n.spot.length=P,n.rectArea.length=D,n.point.length=f,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-b,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=I,U.sunLength=d,U.directionalLength=p,U.pointLength=f,U.spotLength=P,U.rectAreaLength=D,U.hemiLength=y,U.numSunShadows=g,U.numDirectionalShadows=T,U.numPointShadows=w,U.numSpotShadows=C,U.numSpotMaps=v,U.numLightProbes=I,n.version=dv++)}function A(c,l){let h=0,u=0,d=0,g=0,x=0,p=0,f=l.matrixWorldInverse;for(let P=0,D=c.length;P<D;P++){let y=c[P];if(y.isSunLight){let T=n.sun[h];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),h++}else if(y.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),u++}else if(y.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),g++}else if(y.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),o.identity(),r.copy(y.matrixWorld),r.premultiply(f),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),d++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),p++}}}return{setup:a,setupView:A,state:n}}function ah(i){let e=new pv(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function A(u){s.push(u)}function c(){e.setup(t)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a,pushLightProbeGrid:A}}function mv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ah(i),e.set(s,[a])):r>=o.length?(a=new ah(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
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
}`,Mv=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],xv=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Ah=new Ue,Nr=new B,fc=new B;function yv(i,e,t){let n=new ys,s=new Ne,r=new Ne,o=new tt,a=new Lo,A=new No,c={},l=t.maxTextureSize,h={[In]:kt,[kt]:In,[an]:an},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:gv,fragmentShader:vv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zi;let f=this.type;this.render=function(w,C,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===tu&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zi);let b=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Rn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let E=f!==this.type;E&&C.traverse(function(_){_.material&&(Array.isArray(_.material)?_.material.forEach(R=>R.needsUpdate=!0):_.material.needsUpdate=!0)});for(let _=0,R=w.length;_<R;_++){let N=w[_],H=N.shadow;if(H===void 0){Pe("WebGLShadowMap:",N,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let q=H.getFrameExtents();s.multiply(q),r.copy(H.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/q.x),s.x=r.x*q.x,H.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/q.y),s.y=r.y*q.y,H.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=F,H.map===null||E===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Es){if(N.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Xt(s.x,s.y,{format:gi,type:Tn,minFilter:pt,magFilter:pt,generateMipmaps:!1}),H.map.texture.name=N.name+".shadowMap",H.map.depthTexture=new hi(s.x,s.y,tn),H.map.depthTexture.name=N.name+".shadowMapDepth",H.map.depthTexture.format=_n,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ft,H.map.depthTexture.magFilter=ft}else N.isPointLight?(H.map=new Ua(s.x),H.map.depthTexture=new Io(s.x,yn)):(H.map=new Xt(s.x,s.y),H.map.depthTexture=new hi(s.x,s.y,yn)),H.map.depthTexture.name=N.name+".shadowMap",H.map.depthTexture.format=_n,this.type===zi?(H.map.depthTexture.compareFunction=F?La:Ra,H.map.depthTexture.minFilter=pt,H.map.depthTexture.magFilter=pt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ft,H.map.depthTexture.magFilter=ft);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let V=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();N.isPointLight!==!0&&H.updateMatrices(N,v);for(let $=0;$<V;$++){let le=H.getCamera($);if(N.isPointLight){let ie=H.camera,xe=H.matrix,be=N.distance||ie.far;be!==ie.far&&(ie.far=be,ie.updateProjectionMatrix()),Nr.setFromMatrixPosition(N.matrixWorld),ie.position.copy(Nr),fc.copy(ie.position),fc.add(Mv[$]),ie.up.copy(xv[$]),ie.lookAt(fc),ie.updateMatrixWorld(),xe.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Ah.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Ah,ie.coordinateSystem,ie.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,$),i.clear();else{$===0&&(i.setRenderTarget(H.map),i.clear());let ie=H.getViewport($);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),W.viewport(o)}n=H.getFrustum($),y(C,v,le,N,this.type)}H.isPointLightShadow!==!0&&this.type===Es&&P(H,v),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(b,I,U)};function P(w,C){let v=e.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Xt(s.x,s.y,{format:gi,type:Tn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,v,u,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,v,d,x,null)}function D(w,C,v,b){let I=null,U=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)I=U;else if(I=v.isPointLight===!0?A:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let W=I.uuid,E=C.uuid,_=c[W];_===void 0&&(_={},c[W]=_);let R=_[E];R===void 0&&(R=I.clone(),_[E]=R,C.addEventListener("dispose",T)),I=R}if(I.visible=C.visible,I.wireframe=C.wireframe,b===Es?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:h[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let W=i.properties.get(I);W.light=v}return I}function y(w,C,v,b,I){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Es)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let E=e.update(w),_=w.material;if(Array.isArray(_)){let R=E.groups;for(let N=0,H=R.length;N<H;N++){let q=R[N],F=_[q.materialIndex];if(F&&F.visible){let V=D(w,F,b,I);w.onBeforeShadow(i,w,C,v,E,V,q),i.renderBufferDirect(v,null,E,V,w,q),w.onAfterShadow(i,w,C,v,E,V,q)}}}else if(_.visible){let R=D(w,_,b,I);w.onBeforeShadow(i,w,C,v,E,R,null),i.renderBufferDirect(v,null,E,R,w,null),w.onAfterShadow(i,w,C,v,E,R,null)}}let W=w.children;for(let E=0,_=W.length;E<_;E++)y(W[E],C,v,b,I)}function T(w){w.target.removeEventListener("dispose",T);for(let v in c){let b=c[v],I=w.target.uuid;I in b&&(b[I].dispose(),delete b[I])}}}function Tv(i,e){function t(){let O=!1,Ae=new tt,ee=null,ce=new tt(0,0,0,0);return{setMask:function(pe){ee!==pe&&!O&&(i.colorMask(pe,pe,pe,pe),ee=pe)},setLocked:function(pe){O=pe},setClear:function(pe,ne,Ee,we,at){at===!0&&(pe*=we,ne*=we,Ee*=we),Ae.set(pe,ne,Ee,we),ce.equals(Ae)===!1&&(i.clearColor(pe,ne,Ee,we),ce.copy(Ae))},reset:function(){O=!1,ee=null,ce.set(-1,0,0,0)}}}function n(){let O=!1,Ae=!1,ee=null,ce=null,pe=null;return{setReversed:function(ne){if(Ae!==ne){let Ee=e.get("EXT_clip_control");ne?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Ae=ne;let we=pe;pe=null,this.setClear(we)}},getReversed:function(){return Ae},setTest:function(ne){ne?K(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ne){ee!==ne&&!O&&(i.depthMask(ne),ee=ne)},setFunc:function(ne){if(Ae&&(ne=zu[ne]),ce!==ne){switch(ne){case Mo:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case yo:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case bo:i.depthFunc(i.GREATER);break;case So:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=ne}},setLocked:function(ne){O=ne},setClear:function(ne){pe!==ne&&(pe=ne,Ae&&(ne=1-ne),i.clearDepth(ne))},reset:function(){O=!1,ee=null,ce=null,pe=null,Ae=!1}}}function s(){let O=!1,Ae=null,ee=null,ce=null,pe=null,ne=null,Ee=null,we=null,at=null;return{setTest:function(Je){O||(Je?K(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Je){Ae!==Je&&!O&&(i.stencilMask(Je),Ae=Je)},setFunc:function(Je,cn,wn){(ee!==Je||ce!==cn||pe!==wn)&&(i.stencilFunc(Je,cn,wn),ee=Je,ce=cn,pe=wn)},setOp:function(Je,cn,wn){(ne!==Je||Ee!==cn||we!==wn)&&(i.stencilOp(Je,cn,wn),ne=Je,Ee=cn,we=wn)},setLocked:function(Je){O=Je},setClear:function(Je){at!==Je&&(i.clearStencil(Je),at=Je)},reset:function(){O=!1,Ae=null,ee=null,ce=null,pe=null,ne=null,Ee=null,we=null,at=null}}}let r=new t,o=new n,a=new s,A=new WeakMap,c=new WeakMap,l={},h={},u={},d=new WeakMap,g=[],x=null,p=!1,f=null,P=null,D=null,y=null,T=null,w=null,C=null,v=new De(0,0,0),b=0,I=!1,U=null,W=null,E=null,_=null,R=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,q=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(F)[1]),H=q>=1):F.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),H=q>=2);let V=null,$={},le=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),xe=new tt().fromArray(le),be=new tt().fromArray(ie);function Ie(O,Ae,ee,ce){let pe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(O,ne),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<ee;Ee++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(Ae+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ne}let Q={};Q[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(us),Ye(!1),lt(DA),K(i.CULL_FACE),Ze(Rn);function K(O){l[O]!==!0&&(i.enable(O),l[O]=!0)}function me(O){l[O]!==!1&&(i.disable(O),l[O]=!1)}function Oe(O,Ae){return u[O]!==Ae?(i.bindFramebuffer(O,Ae),u[O]=Ae,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ae),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ve(O,Ae){let ee=g,ce=!1;if(O){ee=d.get(Ae),ee===void 0&&(ee=[],d.set(Ae,ee));let pe=O.textures;if(ee.length!==pe.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ee=pe.length;ne<Ee;ne++)ee[ne]=i.COLOR_ATTACHMENT0+ne;ee.length=pe.length,ce=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ce=!0);ce&&i.drawBuffers(ee)}function Ge(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let wt={[Ui]:i.FUNC_ADD,[iu]:i.FUNC_SUBTRACT,[su]:i.FUNC_REVERSE_SUBTRACT};wt[ru]=i.MIN,wt[ou]=i.MAX;let Ve={[au]:i.ZERO,[Au]:i.ONE,[cu]:i.SRC_COLOR,[LA]:i.SRC_ALPHA,[pu]:i.SRC_ALPHA_SATURATE,[du]:i.DST_COLOR,[uu]:i.DST_ALPHA,[lu]:i.ONE_MINUS_SRC_COLOR,[NA]:i.ONE_MINUS_SRC_ALPHA,[fu]:i.ONE_MINUS_DST_COLOR,[hu]:i.ONE_MINUS_DST_ALPHA,[mu]:i.CONSTANT_COLOR,[gu]:i.ONE_MINUS_CONSTANT_COLOR,[vu]:i.CONSTANT_ALPHA,[Mu]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(O,Ae,ee,ce,pe,ne,Ee,we,at,Je){if(O===Rn){p===!0&&(me(i.BLEND),p=!1);return}if(p===!1&&(K(i.BLEND),p=!0),O!==nu){if(O!==f||Je!==I){if((P!==Ui||T!==Ui)&&(i.blendEquation(i.FUNC_ADD),P=Ui,T=Ui),Je)switch(O){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFunc(i.ONE,i.ONE);break;case IA:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case RA:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Le("WebGLState: Invalid blending: ",O);break}else switch(O){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case IA:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case RA:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",O);break}D=null,y=null,w=null,C=null,v.set(0,0,0),b=0,f=O,I=Je}return}pe=pe||Ae,ne=ne||ee,Ee=Ee||ce,(Ae!==P||pe!==T)&&(i.blendEquationSeparate(wt[Ae],wt[pe]),P=Ae,T=pe),(ee!==D||ce!==y||ne!==w||Ee!==C)&&(i.blendFuncSeparate(Ve[ee],Ve[ce],Ve[ne],Ve[Ee]),D=ee,y=ce,w=ne,C=Ee),(we.equals(v)===!1||at!==b)&&(i.blendColor(we.r,we.g,we.b,at),v.copy(we),b=at),f=O,I=!1}function ot(O,Ae){O.side===an?me(i.CULL_FACE):K(i.CULL_FACE);let ee=O.side===kt;Ae&&(ee=!ee),Ye(ee),O.blending===Ds&&O.transparent===!1?Ze(Rn):Ze(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ce=O.stencilWrite;a.setTest(ce),ce&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Vt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(O){U!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),U=O)}function lt(O){O!==$l?(K(i.CULL_FACE),O!==W&&(O===DA?i.cullFace(i.BACK):O===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),W=O}function Et(O){O!==E&&(H&&i.lineWidth(O),E=O)}function Vt(O,Ae,ee){O?(K(i.POLYGON_OFFSET_FILL),(_!==Ae||R!==ee)&&(_=Ae,R=ee,o.getReversed()&&(Ae=-Ae),i.polygonOffset(Ae,ee))):me(i.POLYGON_OFFSET_FILL)}function ut(O){O?K(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function gt(O){O===void 0&&(O=i.TEXTURE0+N-1),V!==O&&(i.activeTexture(O),V=O)}function z(O,Ae,ee){ee===void 0&&(V===null?ee=i.TEXTURE0+N-1:ee=V);let ce=$[ee];ce===void 0&&(ce={type:void 0,texture:void 0},$[ee]=ce),(ce.type!==O||ce.texture!==Ae)&&(V!==ee&&(i.activeTexture(ee),V=ee),i.bindTexture(O,Ae||Q[O]),ce.type=O,ce.texture=Ae)}function Nt(){let O=$[V];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(O){Le("WebGLState:",O)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(O){Le("WebGLState:",O)}}function m(){try{i.texSubImage2D(...arguments)}catch(O){Le("WebGLState:",O)}}function j(){try{i.texSubImage3D(...arguments)}catch(O){Le("WebGLState:",O)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Le("WebGLState:",O)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Le("WebGLState:",O)}}function se(){try{i.texStorage2D(...arguments)}catch(O){Le("WebGLState:",O)}}function re(){try{i.texStorage3D(...arguments)}catch(O){Le("WebGLState:",O)}}function J(){try{i.texImage2D(...arguments)}catch(O){Le("WebGLState:",O)}}function te(){try{i.texImage3D(...arguments)}catch(O){Le("WebGLState:",O)}}function oe(O){return h[O]!==void 0?h[O]:i.getParameter(O)}function _e(O,Ae){h[O]!==Ae&&(i.pixelStorei(O,Ae),h[O]=Ae)}function ue(O){xe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),xe.copy(O))}function ae(O){be.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),be.copy(O))}function Ce(O,Ae){let ee=c.get(Ae);ee===void 0&&(ee=new WeakMap,c.set(Ae,ee));let ce=ee.get(O);ce===void 0&&(ce=i.getUniformBlockIndex(Ae,O.name),ee.set(O,ce))}function Re(O,Ae){let ce=c.get(Ae).get(O);A.get(Ae)!==ce&&(i.uniformBlockBinding(Ae,ce,O.__bindingPointIndex),A.set(Ae,ce))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),l={},h={},V=null,$={},u={},d=new WeakMap,g=[],x=null,p=!1,f=null,P=null,D=null,y=null,T=null,w=null,C=null,v=new De(0,0,0),b=0,I=!1,U=null,W=null,E=null,_=null,R=null,xe.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:me,bindFramebuffer:Oe,drawBuffers:ve,useProgram:Ge,setBlending:Ze,setMaterial:ot,setFlipSided:Ye,setCullFace:lt,setLineWidth:Et,setPolygonOffset:Vt,setScissorTest:ut,activeTexture:gt,bindTexture:z,unbindTexture:Nt,compressedTexImage2D:$e,compressedTexImage3D:S,texImage2D:J,texImage3D:te,pixelStorei:_e,getParameter:oe,updateUBOMapping:Ce,uniformBlockBinding:Re,texStorage2D:se,texStorage3D:re,texSubImage2D:m,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:ue,viewport:ae,reset:Be}}function wv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,l=new WeakMap,h=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,m){return g?new OffscreenCanvas(S,m):fs("canvas")}function p(S,m,j){let X=1,Z=$e(S);if((Z.width>j||Z.height>j)&&(X=j/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let se=Math.floor(X*Z.width),re=Math.floor(X*Z.height);u===void 0&&(u=x(se,re));let J=m?x(se,re):u;return J.width=se,J.height=re,J.getContext("2d").drawImage(S,0,0,se,re),Pe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+se+"x"+re+")."),J}else return"data"in S&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function f(S){return S.generateMipmaps}function P(S){i.generateMipmap(S)}function D(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(S,m,j,X,Z,se=!1){if(S!==null){if(i[S]!==void 0)return i[S];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let re;X&&(re=e.get("EXT_texture_norm16"),re||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=m;if(m===i.RED&&(j===i.FLOAT&&(J=i.R32F),j===i.HALF_FLOAT&&(J=i.R16F),j===i.UNSIGNED_BYTE&&(J=i.R8),j===i.UNSIGNED_SHORT&&re&&(J=re.R16_EXT),j===i.SHORT&&re&&(J=re.R16_SNORM_EXT)),m===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(J=i.R8UI),j===i.UNSIGNED_SHORT&&(J=i.R16UI),j===i.UNSIGNED_INT&&(J=i.R32UI),j===i.BYTE&&(J=i.R8I),j===i.SHORT&&(J=i.R16I),j===i.INT&&(J=i.R32I)),m===i.RG&&(j===i.FLOAT&&(J=i.RG32F),j===i.HALF_FLOAT&&(J=i.RG16F),j===i.UNSIGNED_BYTE&&(J=i.RG8),j===i.UNSIGNED_SHORT&&re&&(J=re.RG16_EXT),j===i.SHORT&&re&&(J=re.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(J=i.RG8UI),j===i.UNSIGNED_SHORT&&(J=i.RG16UI),j===i.UNSIGNED_INT&&(J=i.RG32UI),j===i.BYTE&&(J=i.RG8I),j===i.SHORT&&(J=i.RG16I),j===i.INT&&(J=i.RG32I)),m===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(J=i.RGB8UI),j===i.UNSIGNED_SHORT&&(J=i.RGB16UI),j===i.UNSIGNED_INT&&(J=i.RGB32UI),j===i.BYTE&&(J=i.RGB8I),j===i.SHORT&&(J=i.RGB16I),j===i.INT&&(J=i.RGB32I)),m===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),j===i.UNSIGNED_INT&&(J=i.RGBA32UI),j===i.BYTE&&(J=i.RGBA8I),j===i.SHORT&&(J=i.RGBA16I),j===i.INT&&(J=i.RGBA32I)),m===i.RGB&&(j===i.UNSIGNED_SHORT&&re&&(J=re.RGB16_EXT),j===i.SHORT&&re&&(J=re.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),m===i.RGBA){let te=se?er:We.getTransfer(Z);j===i.FLOAT&&(J=i.RGBA32F),j===i.HALF_FLOAT&&(J=i.RGBA16F),j===i.UNSIGNED_BYTE&&(J=te===qe?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&re&&(J=re.RGBA16_EXT),j===i.SHORT&&re&&(J=re.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(S,m){let j;return S?m===null||m===yn||m===Ls?j=i.DEPTH24_STENCIL8:m===tn?j=i.DEPTH32F_STENCIL8:m===Rs&&(j=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===yn||m===Ls?j=i.DEPTH_COMPONENT24:m===tn?j=i.DEPTH_COMPONENT32F:m===Rs&&(j=i.DEPTH_COMPONENT16),j}function w(S,m){return f(S)===!0||S.isFramebufferTexture&&S.minFilter!==ft&&S.minFilter!==pt?Math.log2(Math.max(m.width,m.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?m.mipmaps.length:1}function C(S){let m=S.target;m.removeEventListener("dispose",C),b(m),m.isVideoTexture&&l.delete(m),m.isHTMLTexture&&h.delete(m)}function v(S){let m=S.target;m.removeEventListener("dispose",v),U(m)}function b(S){let m=n.get(S);if(m.__webglInit===void 0)return;let j=S.source,X=d.get(j);if(X){let Z=X[m.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(S),Object.keys(X).length===0&&d.delete(j)}n.remove(S)}function I(S){let m=n.get(S);i.deleteTexture(m.__webglTexture);let j=S.source,X=d.get(j);delete X[m.__cacheKey],o.memory.textures--}function U(S){let m=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(m.__webglFramebuffer[X]))for(let Z=0;Z<m.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(m.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(m.__webglFramebuffer[X]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[X])}else{if(Array.isArray(m.__webglFramebuffer))for(let X=0;X<m.__webglFramebuffer.length;X++)i.deleteFramebuffer(m.__webglFramebuffer[X]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let X=0;X<m.__webglColorRenderbuffer.length;X++)m.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[X]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let j=S.textures;for(let X=0,Z=j.length;X<Z;X++){let se=n.get(j[X]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(j[X])}n.remove(S)}let W=0;function E(){W=0}function _(){return W}function R(S){W=S}function N(){let S=W;return S>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,S}function H(S){let m=[];return m.push(S.wrapS),m.push(S.wrapT),m.push(S.wrapR||0),m.push(S.magFilter),m.push(S.minFilter),m.push(S.anisotropy),m.push(S.internalFormat),m.push(S.format),m.push(S.type),m.push(S.generateMipmaps),m.push(S.premultiplyAlpha),m.push(S.flipY),m.push(S.unpackAlignment),m.push(S.colorSpace),m.join()}function q(S,m){let j=n.get(S);if(S.isVideoTexture&&z(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&j.__version!==S.version){let X=S.image;if(X===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{me(j,S,m);return}}else S.isExternalTexture&&(j.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+m)}function F(S,m){let j=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&j.__version!==S.version){me(j,S,m);return}else S.isExternalTexture&&(j.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+m)}function V(S,m){let j=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&j.__version!==S.version){me(j,S,m);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+m)}function $(S,m){let j=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&j.__version!==S.version){Oe(j,S,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+m)}let le={[ci]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[hs]:i.MIRRORED_REPEAT},ie={[ft]:i.NEAREST,[Yo]:i.NEAREST_MIPMAP_NEAREST,[Fi]:i.NEAREST_MIPMAP_LINEAR,[pt]:i.LINEAR,[Is]:i.LINEAR_MIPMAP_NEAREST,[xn]:i.LINEAR_MIPMAP_LINEAR},xe={[_u]:i.NEVER,[Ru]:i.ALWAYS,[Cu]:i.LESS,[Ra]:i.LEQUAL,[Eu]:i.EQUAL,[La]:i.GEQUAL,[Du]:i.GREATER,[Iu]:i.NOTEQUAL};function be(S,m){if(m.type===tn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===pt||m.magFilter===Is||m.magFilter===Fi||m.magFilter===xn||m.minFilter===pt||m.minFilter===Is||m.minFilter===Fi||m.minFilter===xn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,le[m.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,le[m.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,le[m.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ie[m.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ie[m.minFilter]),m.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,xe[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===ft||m.minFilter!==Fi&&m.minFilter!==xn||m.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Ie(S,m){let j=!1;S.__webglInit===void 0&&(S.__webglInit=!0,m.addEventListener("dispose",C));let X=m.source,Z=d.get(X);Z===void 0&&(Z={},d.set(X,Z));let se=H(m);if(se!==S.__cacheKey){Z[se]===void 0&&(Z[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),Z[se].usedTimes++;let re=Z[S.__cacheKey];re!==void 0&&(Z[S.__cacheKey].usedTimes--,re.usedTimes===0&&I(m)),S.__cacheKey=se,S.__webglTexture=Z[se].texture}return j}function Q(S,m,j){return Math.floor(Math.floor(S/j)/m)}function K(S,m,j,X){let se=S.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,j,X,m.data);else{se.sort((_e,ue)=>_e.start-ue.start);let re=0;for(let _e=1;_e<se.length;_e++){let ue=se[re],ae=se[_e],Ce=ue.start+ue.count,Re=Q(ae.start,m.width,4),Be=Q(ue.start,m.width,4);ae.start<=Ce+1&&Re===Be&&Q(ae.start+ae.count-1,m.width,4)===Re?ue.count=Math.max(ue.count,ae.start+ae.count-ue.start):(++re,se[re]=ae)}se.length=re+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let _e=0,ue=se.length;_e<ue;_e++){let ae=se[_e],Ce=Math.floor(ae.start/4),Re=Math.ceil(ae.count/4),Be=Ce%m.width,O=Math.floor(Ce/m.width),Ae=Re,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,Be,O,Ae,ee,j,X,m.data)}S.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function me(S,m,j){let X=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(X=i.TEXTURE_3D);let Z=Ie(S,m),se=m.source;t.bindTexture(X,S.__webglTexture,i.TEXTURE0+j);let re=n.get(se);if(se.version!==re.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let ee=We.getPrimaries(We.workingColorSpace),ce=m.colorSpace===qn?null:We.getPrimaries(m.colorSpace),pe=m.colorSpace===qn||ee===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let te=p(m.image,!1,s.maxTextureSize);te=Nt(m,te);let oe=r.convert(m.format,m.colorSpace),_e=r.convert(m.type),ue=y(m.internalFormat,oe,_e,m.normalized,m.colorSpace,m.isVideoTexture);be(X,m);let ae,Ce=m.mipmaps,Re=m.isVideoTexture!==!0,Be=re.__version===void 0||Z===!0,O=se.dataReady,Ae=w(m,te);if(m.isDepthTexture)ue=T(m.format===mi,m.type),Be&&(Re?t.texStorage2D(i.TEXTURE_2D,1,ue,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ue,te.width,te.height,0,oe,_e,null));else if(m.isDataTexture)if(Ce.length>0){Re&&Be&&t.texStorage2D(i.TEXTURE_2D,Ae,ue,Ce[0].width,Ce[0].height);for(let ee=0,ce=Ce.length;ee<ce;ee++)ae=Ce[ee],Re?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ae.width,ae.height,oe,_e,ae.data):t.texImage2D(i.TEXTURE_2D,ee,ue,ae.width,ae.height,0,oe,_e,ae.data);m.generateMipmaps=!1}else Re?(Be&&t.texStorage2D(i.TEXTURE_2D,Ae,ue,te.width,te.height),O&&K(m,te,oe,_e)):t.texImage2D(i.TEXTURE_2D,0,ue,te.width,te.height,0,oe,_e,te.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Re&&Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,ue,Ce[0].width,Ce[0].height,te.depth);for(let ee=0,ce=Ce.length;ee<ce;ee++)if(ae=Ce[ee],m.format!==nn)if(oe!==null)if(Re){if(O)if(m.layerUpdates.size>0){let pe=ic(ae.width,ae.height,m.format,m.type);for(let ne of m.layerUpdates){let Ee=ae.data.subarray(ne*pe/ae.data.BYTES_PER_ELEMENT,(ne+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,ne,ae.width,ae.height,1,oe,Ee)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ae.width,ae.height,te.depth,oe,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,ue,ae.width,ae.height,te.depth,0,ae.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ae.width,ae.height,te.depth,oe,_e,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,ue,ae.width,ae.height,te.depth,0,oe,_e,ae.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Re&&Be&&t.texStorage2D(i.TEXTURE_2D,Ae,ue,Ce[0].width,Ce[0].height);for(let ee=0,ce=Ce.length;ee<ce;ee++)ae=Ce[ee],m.format!==nn?oe!==null?Re?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,ue,ae.width,ae.height,0,ae.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ae.width,ae.height,oe,_e,ae.data):t.texImage2D(i.TEXTURE_2D,ee,ue,ae.width,ae.height,0,oe,_e,ae.data)}else if(m.isDataArrayTexture)if(Re){if(Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,ue,te.width,te.height,te.depth),O)if(m.layerUpdates.size>0){let ee=ic(te.width,te.height,m.format,m.type);for(let ce of m.layerUpdates){let pe=te.data.subarray(ce*ee/te.data.BYTES_PER_ELEMENT,(ce+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,te.width,te.height,1,oe,_e,pe)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,_e,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,te.width,te.height,te.depth,0,oe,_e,te.data);else if(m.isData3DTexture)Re?(Be&&t.texStorage3D(i.TEXTURE_3D,Ae,ue,te.width,te.height,te.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,_e,te.data)):t.texImage3D(i.TEXTURE_3D,0,ue,te.width,te.height,te.depth,0,oe,_e,te.data);else if(m.isFramebufferTexture){if(Be)if(Re)t.texStorage2D(i.TEXTURE_2D,Ae,ue,te.width,te.height);else{let ee=te.width,ce=te.height;for(let pe=0;pe<Ae;pe++)t.texImage2D(i.TEXTURE_2D,pe,ue,ee,ce,0,oe,_e,null),ee>>=1,ce>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),h.add(m),ee.onpaint=ce=>{let pe=ce.changedElements;for(let ne of h)pe.includes(ne.image)&&(ne.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let pe=i.RGBA,ne=i.RGBA,Ee=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,ne,Ee,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Re&&Be){let ee=$e(Ce[0]);t.texStorage2D(i.TEXTURE_2D,Ae,ue,ee.width,ee.height)}for(let ee=0,ce=Ce.length;ee<ce;ee++)ae=Ce[ee],Re?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,oe,_e,ae):t.texImage2D(i.TEXTURE_2D,ee,ue,oe,_e,ae);m.generateMipmaps=!1}else if(Re){if(Be){let ee=$e(te);t.texStorage2D(i.TEXTURE_2D,Ae,ue,ee.width,ee.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,_e,te)}else t.texImage2D(i.TEXTURE_2D,0,ue,oe,_e,te);f(m)&&P(X),re.__version=se.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function Oe(S,m,j){if(m.image.length!==6)return;let X=Ie(S,m),Z=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+j);let se=n.get(Z);if(Z.version!==se.__version||X===!0){t.activeTexture(i.TEXTURE0+j);let re=We.getPrimaries(We.workingColorSpace),J=m.colorSpace===qn?null:We.getPrimaries(m.colorSpace),te=m.colorSpace===qn||re===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let oe=m.isCompressedTexture||m.image[0].isCompressedTexture,_e=m.image[0]&&m.image[0].isDataTexture,ue=[];for(let ne=0;ne<6;ne++)!oe&&!_e?ue[ne]=p(m.image[ne],!0,s.maxCubemapSize):ue[ne]=_e?m.image[ne].image:m.image[ne],ue[ne]=Nt(m,ue[ne]);let ae=ue[0],Ce=r.convert(m.format,m.colorSpace),Re=r.convert(m.type),Be=y(m.internalFormat,Ce,Re,m.normalized,m.colorSpace),O=m.isVideoTexture!==!0,Ae=se.__version===void 0||X===!0,ee=Z.dataReady,ce=w(m,ae);be(i.TEXTURE_CUBE_MAP,m);let pe;if(oe){O&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Be,ae.width,ae.height);for(let ne=0;ne<6;ne++){pe=ue[ne].mipmaps;for(let Ee=0;Ee<pe.length;Ee++){let we=pe[Ee];m.format!==nn?Ce!==null?O?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee,0,0,we.width,we.height,Ce,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee,Be,we.width,we.height,0,we.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee,0,0,we.width,we.height,Ce,Re,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee,Be,we.width,we.height,0,Ce,Re,we.data)}}}else{if(pe=m.mipmaps,O&&Ae){pe.length>0&&ce++;let ne=$e(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Be,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(_e){O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ue[ne].width,ue[ne].height,Ce,Re,ue[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Be,ue[ne].width,ue[ne].height,0,Ce,Re,ue[ne].data);for(let Ee=0;Ee<pe.length;Ee++){let at=pe[Ee].image[ne].image;O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee+1,0,0,at.width,at.height,Ce,Re,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee+1,Be,at.width,at.height,0,Ce,Re,at.data)}}else{O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,Re,ue[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Be,Ce,Re,ue[ne]);for(let Ee=0;Ee<pe.length;Ee++){let we=pe[Ee];O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee+1,0,0,Ce,Re,we.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee+1,Be,Ce,Re,we.image[ne])}}}f(m)&&P(i.TEXTURE_CUBE_MAP),se.__version=Z.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function ve(S,m,j,X,Z,se){let re=r.convert(j.format,j.colorSpace),J=r.convert(j.type),te=y(j.internalFormat,re,J,j.normalized,j.colorSpace),oe=n.get(m),_e=n.get(j);if(_e.__renderTarget=m,!oe.__hasExternalTextures){let ue=Math.max(1,m.width>>se),ae=Math.max(1,m.height>>se);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,se,te,ue,ae,m.depth,0,re,J,null):t.texImage2D(Z,se,te,ue,ae,0,re,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),gt(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,_e.__webglTexture,0,ut(m)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,_e.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(S,m,j){if(i.bindRenderbuffer(i.RENDERBUFFER,S),m.depthBuffer){let X=m.depthTexture,Z=X&&X.isDepthTexture?X.type:null,se=T(m.stencilBuffer,Z),re=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(m),se,m.width,m.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(m),se,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,se,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,S)}else{let X=m.textures;for(let Z=0;Z<X.length;Z++){let se=X[Z],re=r.convert(se.format,se.colorSpace),J=r.convert(se.type),te=y(se.internalFormat,re,J,se.normalized,se.colorSpace);gt(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(m),te,m.width,m.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(m),te,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,te,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(S,m,j){let X=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(m.depthTexture);if(Z.__renderTarget=m,(!Z.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,m.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),be(i.TEXTURE_CUBE_MAP,m.depthTexture);let oe=r.convert(m.depthTexture.format),_e=r.convert(m.depthTexture.type),ue;m.depthTexture.format===_n?ue=i.DEPTH_COMPONENT24:m.depthTexture.format===mi&&(ue=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ue,m.width,m.height,0,oe,_e,null)}}else q(m.depthTexture,0);let se=Z.__webglTexture,re=ut(m),J=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,te=m.depthTexture.format===mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===_n)gt(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,se,0);else if(m.depthTexture.format===mi)gt(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(S){let m=n.get(S),j=S.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==S.depthTexture){let X=S.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),X){let Z=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),m.__depthDisposeCallback=Z}m.__boundDepthTexture=X}if(S.depthTexture&&!m.__autoAllocateDepthBuffer)if(j)for(let X=0;X<6;X++)wt(m.__webglFramebuffer[X],S,X);else{let X=S.texture.mipmaps;X&&X.length>0?wt(m.__webglFramebuffer[0],S,0):wt(m.__webglFramebuffer,S,0)}else if(j){m.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[X]),m.__webglDepthbuffer[X]===void 0)m.__webglDepthbuffer[X]=i.createRenderbuffer(),Ge(m.__webglDepthbuffer[X],S,!1);else{let Z=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=m.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,se)}}else{let X=S.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),Ge(m.__webglDepthbuffer,S,!1);else{let Z=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(S,m,j){let X=n.get(S);m!==void 0&&ve(X.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Ve(S)}function ot(S){let m=S.texture,j=n.get(S),X=n.get(m);S.addEventListener("dispose",v);let Z=S.textures,se=S.isWebGLCubeRenderTarget===!0,re=Z.length>1;if(re||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=m.version,o.memory.textures++),se){j.__webglFramebuffer=[];for(let J=0;J<6;J++)if(m.mipmaps&&m.mipmaps.length>0){j.__webglFramebuffer[J]=[];for(let te=0;te<m.mipmaps.length;te++)j.__webglFramebuffer[J][te]=i.createFramebuffer()}else j.__webglFramebuffer[J]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){j.__webglFramebuffer=[];for(let J=0;J<m.mipmaps.length;J++)j.__webglFramebuffer[J]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(re)for(let J=0,te=Z.length;J<te;J++){let oe=n.get(Z[J]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&gt(S)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let te=Z[J];j.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[J]);let oe=r.convert(te.format,te.colorSpace),_e=r.convert(te.type),ue=y(te.internalFormat,oe,_e,te.normalized,te.colorSpace,S.isXRRenderTarget===!0),ae=ut(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ue,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,j.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(j.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),be(i.TEXTURE_CUBE_MAP,m);for(let J=0;J<6;J++)if(m.mipmaps&&m.mipmaps.length>0)for(let te=0;te<m.mipmaps.length;te++)ve(j.__webglFramebuffer[J][te],S,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else ve(j.__webglFramebuffer[J],S,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(m)&&P(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let J=0,te=Z.length;J<te;J++){let oe=Z[J],_e=n.get(oe),ue=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ue=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,_e.__webglTexture),be(ue,oe),ve(j.__webglFramebuffer,S,oe,i.COLOR_ATTACHMENT0+J,ue,0),f(oe)&&P(ue)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(J=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),be(J,m),m.mipmaps&&m.mipmaps.length>0)for(let te=0;te<m.mipmaps.length;te++)ve(j.__webglFramebuffer[te],S,m,i.COLOR_ATTACHMENT0,J,te);else ve(j.__webglFramebuffer,S,m,i.COLOR_ATTACHMENT0,J,0);f(m)&&P(J),t.unbindTexture()}S.depthBuffer&&Ve(S)}function Ye(S){let m=S.textures;for(let j=0,X=m.length;j<X;j++){let Z=m[j];if(f(Z)){let se=D(S),re=n.get(Z).__webglTexture;t.bindTexture(se,re),P(se),t.unbindTexture()}}}let lt=[],Et=[];function Vt(S){if(S.samples>0){if(gt(S)===!1){let m=S.textures,j=S.width,X=S.height,Z=i.COLOR_BUFFER_BIT,se=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(S),J=m.length>1;if(J)for(let oe=0;oe<m.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let te=S.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let oe=0;oe<m.length;oe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);let _e=n.get(m[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,j,X,0,0,j,X,Z,i.NEAREST),A===!0&&(lt.length=0,Et.length=0,lt.push(i.COLOR_ATTACHMENT0+oe),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(lt.push(se),Et.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let oe=0;oe<m.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);let _e=n.get(m[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&A){let m=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function ut(S){return Math.min(s.maxSamples,S.samples)}function gt(S){let m=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function z(S){let m=o.render.frame;l.get(S)!==m&&(l.set(S,m),S.update())}function Nt(S,m){let j=S.colorSpace,X=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||j!==Wt&&j!==qn&&(We.getTransfer(j)===qe?(X!==nn||Z!==Zt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",j)),m}function $e(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=E,this.getTextureUnits=_,this.setTextureUnits=R,this.setTexture2D=q,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=Ze,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bv(i,e){function t(n,s=qn){let r,o=We.getTransfer(s);if(n===Zt)return i.UNSIGNED_BYTE;if(n===Zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===XA)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===HA)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kA)return i.BYTE;if(n===VA)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===Qo)return i.INT;if(n===yn)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===YA)return i.ALPHA;if(n===QA)return i.RGB;if(n===nn)return i.RGBA;if(n===_n)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===Ko)return i.RED;if(n===qo)return i.RED_INTEGER;if(n===gi)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===ea)return i.RGBA_INTEGER;if(n===Pr||n===_r||n===Cr||n===Er)if(o===qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ta||n===na||n===ia||n===sa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ra||n===oa||n===aa||n===Aa||n===ca||n===Dr||n===la)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ra||n===oa)return o===qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===aa)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Aa)return r.COMPRESSED_R11_EAC;if(n===ca)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Dr)return r.COMPRESSED_RG11_EAC;if(n===la)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ua||n===ha||n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===Ma||n===xa||n===ya||n===Ta||n===wa||n===ba)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ua)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===va)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ma)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wa)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return o===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sa||n===Pa||n===_a)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sa)return o===qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ca||n===Ea||n===Ir||n===Da)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ir)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pv=`
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

}`,Tc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new pr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new en({vertexShader:Sv,fragmentShader:Pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",A=1,c=null,l=null,h=null,u=null,d=null,g=null,x=typeof XRWebGLBinding<"u",p=new Tc,f={},P=t.getContextAttributes(),D=null,y=null,T=[],w=[],C=new Ne,v=null,b=null,I=new xt;I.viewport=new tt;let U=new xt;U.viewport=new tt;let W=[I,U],E=new ko,_=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let K=T[Q];return K===void 0&&(K=new gs,T[Q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Q){let K=T[Q];return K===void 0&&(K=new gs,T[Q]=K),K.getGripSpace()},this.getHand=function(Q){let K=T[Q];return K===void 0&&(K=new gs,T[Q]=K),K.getHandSpace()};function N(Q){let K=w.indexOf(Q.inputSource);if(K===-1)return;let me=T[K];me!==void 0&&(me.update(Q.inputSource,Q.frame,c||o),me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",q);for(let Q=0;Q<T.length;Q++){let K=w[Q];K!==null&&(w[Q]=null,T[Q].disconnect(K))}_=null,R=null,p.reset();for(let Q in f)delete f[Q];if(e.setRenderTarget(D),d=null,u=null,h=null,s=null,y=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),b!==null){let Q=b.camera;Q.fov=b.fov,Q.zoom=b.zoom,Q.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",q),P.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Oe=null,ve=null;P.depth&&(ve=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=P.stencil?mi:_n,Oe=P.stencil?Ls:yn);let Ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ge),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Xt(u.textureWidth,u.textureHeight,{format:nn,type:Zt,depthTexture:new hi(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let me={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Xt(d.framebufferWidth,d.framebufferHeight,{format:nn,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(A),c=null,o=await s.requestReferenceSpace(a),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(Q){for(let K=0;K<Q.removed.length;K++){let me=Q.removed[K],Oe=w.indexOf(me);Oe>=0&&(w[Oe]=null,T[Oe].disconnect(me))}for(let K=0;K<Q.added.length;K++){let me=Q.added[K],Oe=w.indexOf(me);if(Oe===-1){for(let Ge=0;Ge<T.length;Ge++)if(Ge>=w.length){w.push(me),Oe=Ge;break}else if(w[Ge]===null){w[Ge]=me,Oe=Ge;break}if(Oe===-1)break}let ve=T[Oe];ve&&ve.connect(me)}}let F=new B,V=new B;function $(Q,K,me){F.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(me.matrixWorld);let Oe=F.distanceTo(V),ve=K.projectionMatrix.elements,Ge=me.projectionMatrix.elements,wt=ve[14]/(ve[10]-1),Ve=ve[14]/(ve[10]+1),Ze=(ve[9]+1)/ve[5],ot=(ve[9]-1)/ve[5],Ye=(ve[8]-1)/ve[0],lt=(Ge[8]+1)/Ge[0],Et=wt*Ye,Vt=wt*lt,ut=Oe/(-Ye+lt),gt=ut*-Ye;if(K.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(gt),Q.translateZ(ut),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ve[10]===-1)Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let z=wt+ut,Nt=Ve+ut,$e=Et-gt,S=Vt+(Oe-gt),m=Ze*Ve/Nt*z,j=ot*Ve/Nt*z;Q.projectionMatrix.makePerspective($e,S,m,j,z,Nt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,K){K===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(K.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let K=Q.near,me=Q.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(me=p.depthFar)),E.near=U.near=I.near=K,E.far=U.far=I.far=me,(_!==E.near||R!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),_=E.near,R=E.far),E.layers.mask=Q.layers.mask|6,I.layers.mask=E.layers.mask&-5,U.layers.mask=E.layers.mask&-3;let Oe=Q.parent,ve=E.cameras;le(E,Oe);for(let Ge=0;Ge<ve.length;Ge++)le(ve[Ge],Oe);ve.length===2?$(E,I,U):E.projectionMatrix.copy(I.projectionMatrix),b===null&&Q.isPerspectiveCamera&&(b={camera:Q,fov:Q.fov,zoom:Q.zoom}),ie(Q,E,Oe)};function ie(Q,K,me){me===null?Q.matrix.copy(K.matrixWorld):(Q.matrix.copy(me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(K.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=_i*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&d===null))return A},this.setFoveation=function(Q){A=Q,u!==null&&(u.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(E)},this.getCameraTexture=function(Q){return f[Q]};let xe=null;function be(Q,K){if(l=K.getViewerPose(c||o),g=K,l!==null){let me=l.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Oe=!1;me.length!==E.cameras.length&&(E.cameras.length=0,Oe=!0);for(let Ve=0;Ve<me.length;Ve++){let Ze=me[Ve],ot=null;if(d!==null)ot=d.getViewport(Ze);else{let lt=h.getViewSubImage(u,Ze);ot=lt.viewport,Ve===0&&(e.setRenderTargetTextures(y,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(y))}let Ye=W[Ve];Ye===void 0&&(Ye=new xt,Ye.layers.enable(Ve),Ye.viewport=new tt,W[Ve]=Ye),Ye.matrix.fromArray(Ze.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Ze.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ot.x,ot.y,ot.width,ot.height),Ve===0&&(E.matrix.copy(Ye.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Oe===!0&&E.cameras.push(Ye)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Ve=h.getDepthInformation(me[0]);Ve&&Ve.isValid&&Ve.texture&&p.init(Ve,s.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let Ve=0;Ve<me.length;Ve++){let Ze=me[Ve].camera;if(Ze){let ot=f[Ze];ot||(ot=new pr,f[Ze]=ot);let Ye=h.getCameraImage(Ze);ot.sourceTexture=Ye}}}}for(let me=0;me<T.length;me++){let Oe=w[me],ve=T[me];Oe!==null&&ve!==void 0&&ve.update(Oe,K,c||o)}xe&&xe(Q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let Ie=new ch;Ie.setAnimationLoop(be),this.setAnimationLoop=function(Q){xe=Q},this.dispose=function(){}}},_v=new Ue,ph=new ze;ph.set(-1,0,0,0,1,0,0,0,1);function Cv(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,ec(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,P,D,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),l(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,y)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?A(p,f,P,D):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===kt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===kt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let P=e.get(f),D=P.envMap,y=P.envMapRotation;D&&(p.envMap.value=D,p.envMapRotation.value.setFromMatrix4(_v.makeRotationFromEuler(y)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ph),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function A(p,f,P,D){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*P,p.scale.value=D*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,P){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=P.texture,p.transmissionSamplerSize.value.set(P.width,P.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){let P=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(P.matrixWorld),p.nearDistance.value=P.shadow.camera.near,p.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ev(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function A(y,T){let w=T.program;n.uniformBlockBinding(y,w)}function c(y,T){let w=s[y.id];w===void 0&&(p(y),w=l(y),s[y.id]=w,y.addEventListener("dispose",P));let C=T.program;n.updateUBOMapping(y,C);let v=e.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function l(y){let T=h();y.__bindingPointIndex=T;let w=i.createBuffer(),C=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let T=s[y.id],w=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let v=0,b=w.length;v<b;v++){let I=w[v];if(Array.isArray(I))for(let U=0,W=I.length;U<W;U++)d(I[U],v,U,C);else d(I,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,T,w,C){if(x(y,T,w,C)===!0){let v=y.__offset,b=y.value;if(Array.isArray(b)){let I=0;for(let U=0;U<b.length;U++){let W=b[U],E=f(W);g(W,y.__data,I),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(I+=E.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function g(y,T,w){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,w)}function x(y,T,w,C){let v=y.value,b=T+"_"+w;if(C[b]===void 0)return typeof v=="number"||typeof v=="boolean"?C[b]=v:ArrayBuffer.isView(v)?C[b]=v.slice():C[b]=v.clone(),!0;{let I=C[b];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return C[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function p(y){let T=y.uniforms,w=0,C=16;for(let b=0,I=T.length;b<I;b++){let U=Array.isArray(T[b])?T[b]:[T[b]];for(let W=0,E=U.length;W<E;W++){let _=U[W],R=Array.isArray(_.value)?_.value:[_.value];for(let N=0,H=R.length;N<H;N++){let q=R[N],F=f(q),V=w%C,$=V%F.boundary,le=V+$;w+=$,le!==0&&C-le<F.storage&&(w+=C-le),_.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),_.__offset=w,w+=F.storage}}}let v=w%C;return v>0&&(w+=C-v),y.__size=w,y.__cache={},this}function f(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",y),T}function P(y){let T=y.target;T.removeEventListener("dispose",P);let w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function D(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:A,update:c,dispose:D}}var Dv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ln=null;function Iv(){return Ln===null&&(Ln=new xs(Dv,16,16,gi,Tn),Ln.name="DFG_LUT",Ln.minFilter=pt,Ln.magFilter=pt,Ln.wrapS=on,Ln.wrapT=on,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}var Ba=class{constructor(e={}){let{canvas:t=Lu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:A=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Zt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,p=new Set([ea,$o,qo]),f=new Set([Zt,yn,Rs,Ls,Zo,Jo]),P=new Uint32Array(4),D=new Int32Array(4),y=new B,T=null,w=null,C=[],v=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,W=null,E=null,_=null,R=null;this._outputColorSpace=ht;let N=0,H=0,q=null,F=-1,V=null,$=new tt,le=new tt,ie=null,xe=new De(0),be=0,Ie=t.width,Q=t.height,K=1,me=null,Oe=null,ve=new tt(0,0,Ie,Q),Ge=new tt(0,0,Ie,Q),wt=!1,Ve=new ys,Ze=!1,ot=!1,Ye=new Ue,lt=new B,Et=new tt,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function gt(){return q===null?K:1}let z=n;function Nt(M,L){return t.getContext(M,L)}let $e,S,m,j,X,Z,se,re,J,te,oe,_e,ue,ae,Ce,Re,Be,O,Ae,ee,ce,pe,ne;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:A,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",cn,!1),z===null){let L="webgl2";if(z=Nt(L,M),z===null)throw Nt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ee()}catch(M){throw t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),Le("WebGLRenderer: "+M.message),M}function Ee(){$e=new Bm(z),$e.init(),ce=new bv(z,$e),S=new Cm(z,$e,e,ce),m=new Tv(z,$e),S.reversedDepthBuffer&&u&&m.buffers.depth.setReversed(!0),E=z.createFramebuffer(),_=z.createFramebuffer(),R=z.createFramebuffer(),j=new Wm(z),X=new Av,Z=new wv(z,$e,m,X,S,ce,j),se=new Um(I),re=new Gd(z),pe=new Pm(z,re),J=new Fm(z,re,j,pe),te=new km(z,J,re,pe,j),O=new Gm(z,S,Z),Ce=new Em(X),oe=new av(I,se,$e,S,pe,Ce),_e=new Cv(I,X),ue=new lv,ae=new mv($e),Be=new Sm(I,se,m,te,g,A),Re=new yv(I,te,S),ne=new Ev(z,j,S,m),Ae=new _m(z,$e,j),ee=new jm(z,$e,j),j.programs=oe.programs,I.capabilities=S,I.extensions=$e,I.properties=X,I.renderLists=ue,I.shadowMap=Re,I.state=m,I.info=j}x!==Zt&&(b=new Xm(x,t.width,t.height,a,s,r));let we=new wc(I,z);this.xr=we,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let M=$e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=$e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(M){M!==void 0&&(K=M,this.setSize(Ie,Q,!1))},this.getSize=function(M){return M.set(Ie,Q)},this.setSize=function(M,L,Y=!0){if(we.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=M,Q=L,t.width=Math.floor(M*K),t.height=Math.floor(L*K),Y===!0&&(t.style.width=M+"px",t.style.height=L+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(Ie*K,Q*K).floor()},this.setDrawingBufferSize=function(M,L,Y){Ie=M,Q=L,K=Y,t.width=Math.floor(M*Y),t.height=Math.floor(L*Y),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(x===Zt){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy($)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,L,Y,G){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,L,Y,G),m.viewport($.copy(ve).multiplyScalar(K).round())},this.getScissor=function(M){return M.copy(Ge)},this.setScissor=function(M,L,Y,G){M.isVector4?Ge.set(M.x,M.y,M.z,M.w):Ge.set(M,L,Y,G),m.scissor(le.copy(Ge).multiplyScalar(K).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(M){m.setScissorTest(wt=M)},this.setOpaqueSort=function(M){me=M},this.setTransparentSort=function(M){Oe=M},this.getClearColor=function(M){return M.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,Y=!0){let G=0;if(M){let k=!1;if(q!==null){let fe=q.texture.format;k=p.has(fe)}if(k){let fe=q.texture.type,Me=f.has(fe),de=Be.getClearColor(),ye=Be.getClearAlpha(),Se=de.r,Fe=de.g,Xe=de.b;Me?(P[0]=Se,P[1]=Fe,P[2]=Xe,P[3]=ye,z.clearBufferuiv(z.COLOR,0,P)):(D[0]=Se,D[1]=Fe,D[2]=Xe,D[3]=ye,z.clearBufferiv(z.COLOR,0,D))}else G|=z.COLOR_BUFFER_BIT}L&&(G|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),W=M},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),Be.dispose(),ue.dispose(),ae.dispose(),X.dispose(),se.dispose(),te.dispose(),pe.dispose(),ne.dispose(),oe.dispose(),we.dispose(),we.removeEventListener("sessionstart",rl),we.removeEventListener("sessionend",ol),Mi.stop()};function at(M){M.preventDefault(),tr("WebGLRenderer: Context Lost."),U=!0}function Je(){tr("WebGLRenderer: Context Restored."),U=!1;let M=j.autoReset,L=Re.enabled,Y=Re.autoUpdate,G=Re.needsUpdate,k=Re.type;Ee(),j.autoReset=M,Re.enabled=L,Re.autoUpdate=Y,Re.needsUpdate=G,Re.type=k}function cn(M){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function wn(M){let L=M.target;L.removeEventListener("dispose",wn),Ih(L)}function Ih(M){Rh(M),X.remove(M)}function Rh(M){let L=X.get(M).programs;L!==void 0&&(L.forEach(function(Y){oe.releaseProgram(Y)}),M.isShaderMaterial&&oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,Y,G,k,fe){L===null&&(L=Vt);let Me=k.isMesh&&k.matrixWorld.determinantAffine()<0,de=Oh(M,L,Y,G,k);m.setMaterial(G,Me);let ye=Y.index,Se=1;if(G.wireframe===!0){if(ye=J.getWireframeAttribute(Y),ye===void 0)return;Se=2}let Fe=Y.drawRange,Xe=Y.attributes.position,Te=Fe.start*Se,Ke=(Fe.start+Fe.count)*Se;fe!==null&&(Te=Math.max(Te,fe.start*Se),Ke=Math.min(Ke,(fe.start+fe.count)*Se)),ye!==null?(Te=Math.max(Te,0),Ke=Math.min(Ke,ye.count)):Xe!=null&&(Te=Math.max(Te,0),Ke=Math.min(Ke,Xe.count));let vt=Ke-Te;if(vt<0||vt===1/0)return;pe.setup(k,G,de,Y,ye);let ct,st=Ae;if(ye!==null&&(ct=re.get(ye),st=ee,st.setIndex(ct)),k.isMesh)G.wireframe===!0?(m.setLineWidth(G.wireframeLinewidth*gt()),st.setMode(z.LINES)):st.setMode(z.TRIANGLES);else if(k.isLine){let Ot=G.linewidth;Ot===void 0&&(Ot=1),m.setLineWidth(Ot*gt()),k.isLineSegments?st.setMode(z.LINES):k.isLineLoop?st.setMode(z.LINE_LOOP):st.setMode(z.LINE_STRIP)}else k.isPoints?st.setMode(z.POINTS):k.isSprite&&st.setMode(z.TRIANGLES);if(k.isBatchedMesh)if($e.get("WEBGL_multi_draw"))st.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ot=k._multiDrawStarts,ge=k._multiDrawCounts,Ft=k._multiDrawCount,Qe=ye?re.get(ye).bytesPerElement:1,sn=X.get(G).currentProgram.getUniforms();for(let bn=0;bn<Ft;bn++)sn.setValue(z,"_gl_DrawID",bn),st.render(Ot[bn]/Qe,ge[bn])}else if(k.isInstancedMesh)st.renderInstances(Te,vt,k.count);else if(Y.isInstancedBufferGeometry){let Ot=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ge=Math.min(Y.instanceCount,Ot);st.renderInstances(Te,vt,ge)}else st.render(Te,vt)};function sl(M,L,Y,G){W!==null&&M.isNodeMaterial&&W.setObject(G,M),Ze===!0&&Ce.setState(M,Y,!1),M.transparent===!0&&M.side===an&&M.forceSinglePass===!1?(M.side=kt,M.needsUpdate=!0,jr(M,L,G),M.side=In,M.needsUpdate=!0,jr(M,L,G),M.side=an):jr(M,L,G)}this.compile=function(M,L,Y=null){Y===null&&(Y=M),W!==null&&W.renderStart(M,L,Y),w=ae.get(Y),w.init(L),v.push(w),Y.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),M!==Y&&M.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),W!==null&&W.updateLights(w.state.lightsArray),ot=this.localClippingEnabled,Ze=Ce.init(this.clippingPlanes,ot),Ze===!0&&Ce.setGlobalState(this.clippingPlanes,L),W!==null&&Re.render(w.state.shadowsArray,Y,L);let G=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let fe=k.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){let de=fe[Me];sl(de,Y,L,k),G.add(de)}else sl(fe,Y,L,k),G.add(fe)}),w=v.pop(),W!==null&&W.renderEnd(),G},this.compileAsync=function(M,L,Y=null){let G=this.compile(M,L,Y);return new Promise(k=>{function fe(){if(G.forEach(function(Me){let ye=X.get(Me).currentProgram;(ye===void 0||ye.isReady())&&G.delete(Me)}),G.size===0){k(M);return}setTimeout(fe,10)}$e.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Xa=null;function Lh(M){Xa&&Xa(M)}function rl(){Mi.stop()}function ol(){Mi.start()}let Mi=new ch;Mi.setAnimationLoop(Lh),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(M){Xa=M,we.setAnimationLoop(M),M===null?Mi.stop():Mi.start()},we.addEventListener("sessionstart",rl),we.addEventListener("sessionend",ol),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;W!==null&&W.renderStart(M,L);let Y=we.enabled===!0&&we.isPresenting===!0,G=b!==null&&(q===null||Y)&&b.begin(I,q);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(L),L=we.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,L,q),w=ae.get(M,v.length),w.init(L),w.state.textureUnits=Z.getTextureUnits(),v.push(w),Ye.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ve.setFromProjectionMatrix(Ye,pn,L.reversedDepth),ot=this.localClippingEnabled,Ze=Ce.init(this.clippingPlanes,ot),T=ue.get(M,C.length),T.init(),C.push(T),we.enabled===!0&&we.isPresenting===!0){let Me=I.xr.getDepthSensingMesh();Me!==null&&Ha(Me,L,-1/0,I.sortObjects)}Ha(M,L,0,I.sortObjects),T.finish(),W!==null&&W.updateLights(w.state.lightsArray),I.sortObjects===!0&&T.sort(me,Oe),ut=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ut&&Be.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Ce.beginShadows();let k=w.state.shadowsArray;if(Re.render(k,M,L),Ze===!0&&Ce.endShadows(),(G&&b.hasRenderPass())===!1){let Me=T.opaque,de=T.transmissive;if(w.setupLights(),L.isArrayCamera){let ye=L.cameras;if(de.length>0)for(let Se=0,Fe=ye.length;Se<Fe;Se++){let Xe=ye[Se];Al(Me,de,M,Xe)}ut&&Be.render(M);for(let Se=0,Fe=ye.length;Se<Fe;Se++){let Xe=ye[Se];al(T,M,Xe,Xe.viewport)}}else de.length>0&&Al(Me,de,M,L),ut&&Be.render(M),al(T,M,L)}q!==null&&H===0&&(Z.updateMultisampleRenderTarget(q),Z.updateRenderTargetMipmap(q)),G&&b.end(I),M.isScene===!0&&M.onAfterRender(I,M,L),pe.resetDefaultState(),F=-1,V=null,v.pop(),v.length>0?(w=v[v.length-1],Z.setTextureUnits(w.state.textureUnits),Ze===!0&&Ce.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,W!==null&&W.renderEnd()};function Ha(M,L,Y,G){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Ve)){G&&Et.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ye);let Me=te.update(M),de=M.material;de.visible&&T.push(M,Me,de,Y,Et.z,null,L)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Ve))){let Me=te.update(M),de=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Et.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Et.copy(Me.boundingSphere.center)),Et.applyMatrix4(M.matrixWorld).applyMatrix4(Ye)),Array.isArray(de)){let ye=Me.groups;for(let Se=0,Fe=ye.length;Se<Fe;Se++){let Xe=ye[Se],Te=de[Xe.materialIndex];Te&&Te.visible&&T.push(M,Me,Te,Y,Et.z,Xe,L)}}else de.visible&&T.push(M,Me,de,Y,Et.z,null,L)}}let fe=M.children;for(let Me=0,de=fe.length;Me<de;Me++)Ha(fe[Me],L,Y,G)}function al(M,L,Y,G){let{opaque:k,transmissive:fe,transparent:Me}=M;w.setupLightsView(Y),Ze===!0&&Ce.setGlobalState(I.clippingPlanes,Y),G&&m.viewport($.copy(G)),k.length>0&&Fr(k,L,Y),fe.length>0&&Fr(fe,L,Y),Me.length>0&&Fr(Me,L,Y),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Al(M,L,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Te=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new Xt(1,1,{generateMipmaps:!0,type:Te?Tn:Zt,minFilter:xn,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let fe=w.state.transmissionRenderTarget[G.id],Me=G.viewport||$;fe.setSize(Me.z*I.transmissionResolutionScale,Me.w*I.transmissionResolutionScale);let de=I.getRenderTarget(),ye=I.getActiveCubeFace(),Se=I.getActiveMipmapLevel();I.setRenderTarget(fe),I.getClearColor(xe),be=I.getClearAlpha(),be<1&&I.setClearColor(16777215,.5),I.clear(),ut&&Be.render(Y);let Fe=I.toneMapping;I.toneMapping=Mn;let Xe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),Ze===!0&&Ce.setGlobalState(I.clippingPlanes,G),Fr(M,Y,G),Z.updateMultisampleRenderTarget(fe),Z.updateRenderTargetMipmap(fe),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Ke=0,vt=L.length;Ke<vt;Ke++){let ct=L[Ke],{object:st,geometry:Ot,material:ge,group:Ft}=ct;if(ge.side===an&&st.layers.test(G.layers)){let Qe=ge.side;ge.side=kt,ge.needsUpdate=!0,cl(st,Y,G,Ot,ge,Ft),ge.side=Qe,ge.needsUpdate=!0,Te=!0}}Te===!0&&(Z.updateMultisampleRenderTarget(fe),Z.updateRenderTargetMipmap(fe))}I.setRenderTarget(de,ye,Se),I.setClearColor(xe,be),Xe!==void 0&&(G.viewport=Xe),I.toneMapping=Fe}function Fr(M,L,Y){let G=L.isScene===!0?L.overrideMaterial:null;for(let k=0,fe=M.length;k<fe;k++){let Me=M[k],{object:de,geometry:ye,group:Se}=Me,Fe=Me.material;Fe.allowOverride===!0&&G!==null&&(Fe=G),de.layers.test(Y.layers)&&cl(de,L,Y,ye,Fe,Se)}}function cl(M,L,Y,G,k,fe){W!==null&&k.isNodeMaterial&&W.setObject(M,k),M.onBeforeRender(I,L,Y,G,k,fe),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(I,L,Y,G,M,fe),k.transparent===!0&&k.side===an&&k.forceSinglePass===!1?(k.side=kt,k.needsUpdate=!0,I.renderBufferDirect(Y,L,G,k,M,fe),k.side=In,k.needsUpdate=!0,I.renderBufferDirect(Y,L,G,k,M,fe),k.side=an):I.renderBufferDirect(Y,L,G,k,M,fe),M.onAfterRender(I,L,Y,G,k,fe)}function jr(M,L,Y){L.isScene!==!0&&(L=Vt);let G=X.get(M),k=w.state.lights,fe=w.state.shadowsArray,Me=k.state.version,de=oe.getParameters(M,k.state,fe,L,Y,w.state.lightProbeGridArray),ye=oe.getProgramCacheKey(de),Se=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;let Fe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=se.get(M.envMap||G.environment,Fe),G.envMapRotation=G.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Se===void 0&&(M.addEventListener("dispose",wn),Se=new Map,G.programs=Se);let Xe=Se.get(ye);if(Xe!==void 0){if(G.currentProgram===Xe&&G.lightsStateVersion===Me)return ul(M,de),Xe}else de.uniforms=oe.getUniforms(M),W!==null&&M.isNodeMaterial&&W.build(M,Y,de),M.onBeforeCompile(de,I),Xe=oe.acquireProgram(de,ye),Se.set(ye,Xe),G.uniforms=de.uniforms;let Te=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=Ce.uniform),ul(M,de),G.needsLights=Uh(M),G.lightsStateVersion=Me,G.needsLights&&(Te.ambientLightColor.value=k.state.ambient,Te.lightProbe.value=k.state.probe,Te.sunLights.value=k.state.sun,Te.sunLightShadows.value=k.state.sunShadow,Te.directionalLights.value=k.state.directional,Te.directionalLightShadows.value=k.state.directionalShadow,Te.spotLights.value=k.state.spot,Te.spotLightShadows.value=k.state.spotShadow,Te.rectAreaLights.value=k.state.rectArea,Te.ltc_1.value=k.state.rectAreaLTC1,Te.ltc_2.value=k.state.rectAreaLTC2,Te.pointLights.value=k.state.point,Te.pointLightShadows.value=k.state.pointShadow,Te.hemisphereLights.value=k.state.hemi,Te.sunShadowMatrix.value=k.state.sunShadowMatrix,Te.sunShadowCascade.value=k.state.sunShadowCascade,Te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Te.spotLightMatrix.value=k.state.spotLightMatrix,Te.spotLightMap.value=k.state.spotLightMap,Te.pointShadowMatrix.value=k.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=Xe,G.uniformsList=null,Xe}function ll(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=Us.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function ul(M,L){let Y=X.get(M);Y.outputColorSpace=L.outputColorSpace,Y.batching=L.batching,Y.batchingColor=L.batchingColor,Y.instancing=L.instancing,Y.instancingColor=L.instancingColor,Y.instancingMorph=L.instancingMorph,Y.skinning=L.skinning,Y.morphTargets=L.morphTargets,Y.morphNormals=L.morphNormals,Y.morphColors=L.morphColors,Y.morphTargetsCount=L.morphTargetsCount,Y.numClippingPlanes=L.numClippingPlanes,Y.numIntersection=L.numClipIntersection,Y.vertexAlphas=L.vertexAlphas,Y.vertexTangents=L.vertexTangents,Y.toneMapping=L.toneMapping}function Nh(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(L.matrixWorld);for(let Y=0,G=M.length;Y<G;Y++){let k=M[Y];if(k.texture!==null&&k.boundingBox.containsPoint(y))return k}return null}function Oh(M,L,Y,G,k){L.isScene!==!0&&(L=Vt),Z.resetTextureUnits();let fe=L.fog,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,de=q===null?I.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:We.workingColorSpace,ye=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Se=se.get(G.envMap||Me,ye),Fe=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xe=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!Y.morphAttributes.position,Ke=!!Y.morphAttributes.normal,vt=!!Y.morphAttributes.color,ct=Mn;G.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ct=I.toneMapping);let st=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ot=st!==void 0?st.length:0,ge=X.get(G),Ft=w.state.lights;if(Ze===!0&&(ot===!0||M!==V)){let At=M===V&&G.id===F;Ce.setState(G,M,At)}let Qe=!1;G.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Ft.state.version||ge.outputColorSpace!==de||k.isBatchedMesh&&ge.batching===!1||!k.isBatchedMesh&&ge.batching===!0||k.isBatchedMesh&&ge.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&ge.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&ge.instancing===!1||!k.isInstancedMesh&&ge.instancing===!0||k.isSkinnedMesh&&ge.skinning===!1||!k.isSkinnedMesh&&ge.skinning===!0||k.isInstancedMesh&&ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ge.instancingMorph===!1&&k.morphTexture!==null||ge.envMap!==Se||G.fog===!0&&ge.fog!==fe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Ce.numPlanes||ge.numIntersection!==Ce.numIntersection)||ge.vertexAlphas!==Fe||ge.vertexTangents!==Xe||ge.morphTargets!==Te||ge.morphNormals!==Ke||ge.morphColors!==vt||ge.toneMapping!==ct||ge.morphTargetsCount!==Ot||!!ge.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ge.__version=G.version);let sn=ge.currentProgram;Qe===!0&&(sn=jr(G,L,k),W&&G.isNodeMaterial&&W.onUpdateProgram(G,sn,ge));let bn=!1,ei=!1,Vi=!1,nt=sn.getUniforms(),dt=ge.uniforms;if(m.useProgram(sn.program)&&(bn=!0,ei=!0,Vi=!0),G.id!==F&&(F=G.id,ei=!0),ge.needsLights){let At=Nh(w.state.lightProbeGridArray,k);ge.lightProbeGrid!==At&&(ge.lightProbeGrid=At,ei=!0)}if(bn||V!==M){m.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),nt.setValue(z,"projectionMatrix",M.projectionMatrix),nt.setValue(z,"viewMatrix",M.matrixWorldInverse);let ni=nt.map.cameraPosition;ni!==void 0&&ni.setValue(z,lt.setFromMatrixPosition(M.matrixWorld)),S.logarithmicDepthBuffer&&nt.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&nt.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),V!==M&&(V=M,ei=!0,Vi=!0)}if(ge.needsLights&&(Ft.state.sunShadowMap.length>0&&nt.setValue(z,"sunShadowMap",Ft.state.sunShadowMap,Z),Ft.state.directionalShadowMap.length>0&&nt.setValue(z,"directionalShadowMap",Ft.state.directionalShadowMap,Z),Ft.state.spotShadowMap.length>0&&nt.setValue(z,"spotShadowMap",Ft.state.spotShadowMap,Z),Ft.state.pointShadowMap.length>0&&nt.setValue(z,"pointShadowMap",Ft.state.pointShadowMap,Z)),k.isSkinnedMesh){nt.setOptional(z,k,"bindMatrix"),nt.setOptional(z,k,"bindMatrixInverse");let At=k.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),nt.setValue(z,"boneTexture",At.boneTexture,Z))}k.isBatchedMesh&&(nt.setOptional(z,k,"batchingTexture"),nt.setValue(z,"batchingTexture",k._matricesTexture,Z),nt.setOptional(z,k,"batchingIdTexture"),nt.setValue(z,"batchingIdTexture",k._indirectTexture,Z),nt.setOptional(z,k,"batchingColorTexture"),k._colorsTexture!==null&&nt.setValue(z,"batchingColorTexture",k._colorsTexture,Z));let ti=Y.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&O.update(k,Y,sn),(ei||ge.receiveShadow!==k.receiveShadow)&&(ge.receiveShadow=k.receiveShadow,nt.setValue(z,"receiveShadow",k.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null&&(dt.envMapIntensity.value=L.environmentIntensity),dt.dfgLUT!==void 0&&(dt.dfgLUT.value=Iv()),ei){if(nt.setValue(z,"toneMappingExposure",I.toneMappingExposure),ge.needsLights&&zh(dt,Vi),fe&&G.fog===!0&&_e.refreshFogUniforms(dt,fe),_e.refreshMaterialUniforms(dt,G,K,Q,w.state.transmissionRenderTarget[M.id]),ge.needsLights&&ge.lightProbeGrid){let At=ge.lightProbeGrid;dt.probesSH.value=At.texture,dt.probesMin.value.copy(At.boundingBox.min),dt.probesMax.value.copy(At.boundingBox.max),dt.probesResolution.value.copy(At.resolution)}Us.upload(z,ll(ge),dt,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Us.upload(z,ll(ge),dt,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&nt.setValue(z,"center",k.center),nt.setValue(z,"modelViewMatrix",k.modelViewMatrix),nt.setValue(z,"normalMatrix",k.normalMatrix),nt.setValue(z,"modelMatrix",k.matrixWorld),G.uniformsGroups!==void 0){let At=G.uniformsGroups;for(let ni=0,Xi=At.length;ni<Xi;ni++){let dl=At[ni];ne.update(dl,sn),ne.bind(dl,sn)}}return sn}function zh(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Uh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(M,L,Y){let G=X.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(M.texture).__webglTexture=L,X.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let Y=X.get(M);Y.__webglFramebuffer=L,Y.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,Y=0){q=M,N=L,H=Y;let G=null,k=!1,fe=!1;if(M){let de=X.get(M);if(de.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(z.FRAMEBUFFER,de.__webglFramebuffer),$.copy(M.viewport),le.copy(M.scissor),ie=M.scissorTest,m.viewport($),m.scissor(le),m.setScissorTest(ie),F=-1;return}else if(de.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(de.__hasExternalTextures)Z.rebindTextures(M,X.get(M.texture).__webglTexture,X.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Fe=M.depthTexture;if(de.__boundDepthTexture!==Fe){if(Fe!==null&&X.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}let ye=M.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(fe=!0);let Se=X.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Se[L])?G=Se[L][Y]:G=Se[L],k=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?G=X.get(M).__webglMultisampledFramebuffer:Array.isArray(Se)?G=Se[Y]:G=Se,$.copy(M.viewport),le.copy(M.scissor),ie=M.scissorTest}else $.copy(ve).multiplyScalar(K).floor(),le.copy(Ge).multiplyScalar(K).floor(),ie=wt;if(Y!==0&&(G=E),m.bindFramebuffer(z.FRAMEBUFFER,G)&&m.drawBuffers(M,G),m.viewport($),m.scissor(le),m.setScissorTest(ie),k){let de=X.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+L,de.__webglTexture,Y)}else if(fe){let de=L;for(let ye=0;ye<M.textures.length;ye++){let Se=X.get(M.textures[ye]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+ye,Se.__webglTexture,Y,de)}}else if(M!==null&&Y!==0){let de=X.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,de.__webglTexture,Y)}F=-1};function hl(M){let L=X.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=S.textureFormatReadable(M.format),L.__typeReadable=S.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,Y,G,k,fe,Me,de=0){if(!(M&&M.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(ye=ye[Me]),ye){m.bindFramebuffer(z.FRAMEBUFFER,ye);try{let Se=M.textures[de],Fe=Se.format,Xe=Se.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+de);let Te=hl(Se);if(Te.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-G&&Y>=0&&Y<=M.height-k&&z.readPixels(L,Y,G,k,ce.convert(Fe),ce.convert(Xe),fe)}finally{let Se=q!==null?X.get(q).__webglFramebuffer:null;m.bindFramebuffer(z.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(M,L,Y,G,k,fe,Me,de=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(ye=ye[Me]),ye)if(L>=0&&L<=M.width-G&&Y>=0&&Y<=M.height-k){m.bindFramebuffer(z.FRAMEBUFFER,ye);let Se=M.textures[de],Fe=Se.format,Xe=Se.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+de);let Te=hl(Se);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ke),z.bufferData(z.PIXEL_PACK_BUFFER,fe.byteLength,z.STREAM_READ),z.readPixels(L,Y,G,k,ce.convert(Fe),ce.convert(Xe),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let vt=q!==null?X.get(q).__webglFramebuffer:null;m.bindFramebuffer(z.FRAMEBUFFER,vt);let ct=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ou(z,ct,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ke),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,fe),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Ke),z.deleteSync(ct),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,Y=0){let G=Math.pow(2,-Y),k=Math.floor(M.image.width*G),fe=Math.floor(M.image.height*G),Me=L!==null?L.x:0,de=L!==null?L.y:0;Z.setTexture2D(M,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,Me,de,k,fe),m.unbindTexture()},this.copyTextureToTexture=function(M,L,Y=null,G=null,k=0,fe=0){let Me,de,ye,Se,Fe,Xe,Te,Ke,vt,ct=M.isCompressedTexture?M.mipmaps[fe]:M.image;if(Y!==null)Me=Y.max.x-Y.min.x,de=Y.max.y-Y.min.y,ye=Y.isBox3?Y.max.z-Y.min.z:1,Se=Y.min.x,Fe=Y.min.y,Xe=Y.isBox3?Y.min.z:0;else{let dt=Math.pow(2,-k);Me=Math.floor(ct.width*dt),de=Math.floor(ct.height*dt),M.isDataArrayTexture?ye=ct.depth:M.isData3DTexture?ye=Math.floor(ct.depth*dt):ye=1,Se=0,Fe=0,Xe=0}G!==null?(Te=G.x,Ke=G.y,vt=G.z):(Te=0,Ke=0,vt=0);let st=ce.convert(L.format),Ot=ce.convert(L.type),ge;L.isData3DTexture?(Z.setTexture3D(L,0),ge=z.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Z.setTexture2DArray(L,0),ge=z.TEXTURE_2D_ARRAY):(Z.setTexture2D(L,0),ge=z.TEXTURE_2D),m.activeTexture(z.TEXTURE0),m.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,L.flipY),m.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),m.pixelStorei(z.UNPACK_ALIGNMENT,L.unpackAlignment);let Ft=m.getParameter(z.UNPACK_ROW_LENGTH),Qe=m.getParameter(z.UNPACK_IMAGE_HEIGHT),sn=m.getParameter(z.UNPACK_SKIP_PIXELS),bn=m.getParameter(z.UNPACK_SKIP_ROWS),ei=m.getParameter(z.UNPACK_SKIP_IMAGES);m.pixelStorei(z.UNPACK_ROW_LENGTH,ct.width),m.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ct.height),m.pixelStorei(z.UNPACK_SKIP_PIXELS,Se),m.pixelStorei(z.UNPACK_SKIP_ROWS,Fe),m.pixelStorei(z.UNPACK_SKIP_IMAGES,Xe);let Vi=M.isDataArrayTexture||M.isData3DTexture,nt=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let dt=X.get(M),ti=X.get(L),At=X.get(dt.__renderTarget),ni=X.get(ti.__renderTarget);m.bindFramebuffer(z.READ_FRAMEBUFFER,At.__webglFramebuffer),m.bindFramebuffer(z.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Xi=0;Xi<ye;Xi++)Vi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,X.get(M).__webglTexture,k,Xe+Xi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,X.get(L).__webglTexture,fe,vt+Xi)),z.blitFramebuffer(Se,Fe,Me,de,Te,Ke,Me,de,z.DEPTH_BUFFER_BIT,z.NEAREST);m.bindFramebuffer(z.READ_FRAMEBUFFER,null),m.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||X.has(M)){let dt=X.get(M),ti=X.get(L);m.bindFramebuffer(z.READ_FRAMEBUFFER,_),m.bindFramebuffer(z.DRAW_FRAMEBUFFER,R);for(let At=0;At<ye;At++)Vi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dt.__webglTexture,k,Xe+At):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dt.__webglTexture,k),nt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ti.__webglTexture,fe,vt+At):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ti.__webglTexture,fe),k!==0?z.blitFramebuffer(Se,Fe,Me,de,Te,Ke,Me,de,z.COLOR_BUFFER_BIT,z.NEAREST):nt?z.copyTexSubImage3D(ge,fe,Te,Ke,vt+At,Se,Fe,Me,de):z.copyTexSubImage2D(ge,fe,Te,Ke,Se,Fe,Me,de);m.bindFramebuffer(z.READ_FRAMEBUFFER,null),m.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else nt?M.isDataTexture||M.isData3DTexture?z.texSubImage3D(ge,fe,Te,Ke,vt,Me,de,ye,st,Ot,ct.data):L.isCompressedArrayTexture?z.compressedTexSubImage3D(ge,fe,Te,Ke,vt,Me,de,ye,st,ct.data):z.texSubImage3D(ge,fe,Te,Ke,vt,Me,de,ye,st,Ot,ct):M.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,fe,Te,Ke,Me,de,st,Ot,ct.data):M.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,fe,Te,Ke,ct.width,ct.height,st,ct.data):z.texSubImage2D(z.TEXTURE_2D,fe,Te,Ke,Me,de,st,Ot,ct);m.pixelStorei(z.UNPACK_ROW_LENGTH,Ft),m.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Qe),m.pixelStorei(z.UNPACK_SKIP_PIXELS,sn),m.pixelStorei(z.UNPACK_SKIP_ROWS,bn),m.pixelStorei(z.UNPACK_SKIP_IMAGES,ei),fe===0&&L.generateMipmaps&&z.generateMipmap(ge),m.unbindTexture()},this.initRenderTarget=function(M){X.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),m.unbindTexture()},this.resetState=function(){N=0,H=0,q=null,m.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};function bc(i,e){if(e===ZA)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ns||e===Rr){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ns)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function mh(i){let e=new Map,t=new Map,n=i.clone();return gh(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(A){return t.get(A)}),r.bind(r.skeleton,r.bindMatrix)}),n}function gh(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)gh(i.children[n],e.children[n],t)}var Wa=class extends Dn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ic(t)}),this.register(function(t){return new Rc(t)}),this.register(function(t){return new Wc(t)}),this.register(function(t){return new Gc(t)}),this.register(function(t){return new kc(t)}),this.register(function(t){return new Nc(t)}),this.register(function(t){return new Oc(t)}),this.register(function(t){return new zc(t)}),this.register(function(t){return new Uc(t)}),this.register(function(t){return new Dc(t)}),this.register(function(t){return new Bc(t)}),this.register(function(t){return new Lc(t)}),this.register(function(t){return new jc(t)}),this.register(function(t){return new Fc(t)}),this.register(function(t){return new Cc(t)}),this.register(function(t){return new Ga(t,ke.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ga(t,ke.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Vc(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Kn.extractUrlBase(e);o=Kn.resolveURL(c,this.path)}else o=Kn.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},A=new _s(this.manager);A.setPath(this.path),A.setResponseType("arraybuffer"),A.setRequestHeader(this.requestHeader),A.setWithCredentials(this.withCredentials),A.load(e,function(c){try{r.parse(c,o,function(l){t(l),r.manager.itemEnd(e)},a)}catch(l){a(l)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},A=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(A.decode(new Uint8Array(e,0,4))===Th){try{o[ke.KHR_BINARY_GLTF]=new Xc(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(A.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new qc(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let h=this.pluginCallbacks[l](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let l=0;l<r.extensionsUsed.length;++l){let h=r.extensionsUsed[l],u=r.extensionsRequired||[];switch(h){case ke.KHR_MATERIALS_UNLIT:o[h]=new Ec;break;case ke.KHR_DRACO_MESH_COMPRESSION:o[h]=new Hc(r,this.dracoLoader);break;case ke.KHR_TEXTURE_TRANSFORM:o[h]=new Yc;break;case ke.KHR_MESH_QUANTIZATION:o[h]=new Qc;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Lv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function mt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Cc=class{constructor(e){this.parser=e,this.name=ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,A=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,l=new De(16777215);A.color!==void 0&&l.setRGB(A.color[0],A.color[1],A.color[2],Wt);let h=A.range!==void 0?A.range:0;switch(A.type){case"directional":c=new Oi(l),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new yr(l),c.distance=h;break;case"spot":c=new Ni(l),c.distance=h,A.spot=A.spot||{},A.spot.innerConeAngle=A.spot.innerConeAngle!==void 0?A.spot.innerConeAngle:0,A.spot.outerConeAngle=A.spot.outerConeAngle!==void 0?A.spot.outerConeAngle:Math.PI/4,c.angle=A.spot.outerConeAngle,c.penumbra=1-A.spot.innerConeAngle/A.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+A.type)}return c.position.set(0,0,0),On(c,A),A.intensity!==void 0&&(c.intensity=A.intensity),c.name=t.createUniqueName(A.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(A){return n._getNodeRef(t.cache,a,A)})}},Ec=class{constructor(){this.name=ke.KHR_MATERIALS_UNLIT}getMaterialType(){return vn}extendParams(e,t,n){let s=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ht))}return Promise.all(s)}},Dc=class{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=mt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ic=class{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(r,r)}return Promise.all(s)}},Rc=class{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=mt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Lc=class{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Nc=class{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SHEEN}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Wt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ht)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Oc=class{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},zc=class{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_VOLUME}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(r[0],r[1],r[2],Wt),Promise.all(s)}},Uc=class{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IOR}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=mt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Bc=class{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(r[0],r[1],r[2],Wt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ht)),Promise.all(s)}},Fc=class{constructor(e){this.parser=e,this.name=ke.EXT_MATERIALS_BUMP}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},jc=class{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Wc=class{constructor(e){this.parser=e,this.name=ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Gc=class{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],A=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(A=c)}return n.loadTextureImage(e,o.source,A)}},kc=class{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],A=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(A=c)}return n.loadTextureImage(e,o.source,A)}},Ga=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let A=s.byteOffset||0,c=s.byteLength||0,l=s.count,h=s.byteStride,u=new Uint8Array(a,A,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(l,h,u,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(l*h);return o.decodeGltfBuffer(new Uint8Array(d),l,h,u,s.mode,s.filter),d})})}else return null}},Vc=class{constructor(e){this.name=ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==An.TRIANGLES&&c.mode!==An.TRIANGLE_STRIP&&c.mode!==An.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],A={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(l=>(A[c]=l,A[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let l=c.pop(),h=l.isGroup?l.children:[l],u=c[0].count,d=[];for(let g of h){let x=new Ue,p=new B,f=new qt,P=new B(1,1,1),D=new ui(g.geometry,g.material,u);for(let T=0;T<u;T++)A.TRANSLATION&&p.fromBufferAttribute(A.TRANSLATION,T),A.ROTATION&&f.fromBufferAttribute(A.ROTATION,T),A.SCALE&&P.fromBufferAttribute(A.SCALE,T),D.setMatrixAt(T,x.compose(p,f,P));let y=null;for(let T in A)if(T==="_COLOR_0"){let w=A[T];D.instanceColor=new Xn(w.array,w.itemSize,w.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(y===null){let C=D.geometry;y=new Tt,y.name=C.name;for(let v in C.attributes)y.setAttribute(v,C.attributes[v]);for(let v in C.morphAttributes)y.morphAttributes[v]=C.morphAttributes[v];C.index!==null&&y.setIndex(C.index),y.morphTargetsRelative=C.morphTargetsRelative;for(let v of C.groups)y.addGroup(v.start,v.count,v.materialIndex);C.boundingBox!==null&&(y.boundingBox=C.boundingBox.clone()),C.boundingSphere!==null&&(y.boundingSphere=C.boundingSphere.clone()),y.drawRange.start=C.drawRange.start,y.drawRange.count=C.drawRange.count,y.userData=Object.assign({},C.userData),D.geometry=y}let w=A[T];y.setAttribute(T,new Xn(w.array,w.itemSize,w.normalized))}it.prototype.copy.call(D,g),this.parser.assignFinalMaterial(D),d.push(D)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}},Th="glTF",zr=12,vh={JSON:1313821514,BIN:5130562},Xc=class{constructor(e){this.name=ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,zr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Th)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-zr,r=new DataView(e,zr),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let A=r.getUint32(o,!0);if(o+=4,A===vh.JSON){let c=new Uint8Array(e,zr+o,a);this.content=n.decode(c)}else if(A===vh.BIN){let c=zr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Hc=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},A={},c={};for(let l in o){let h=Jc[l]||l.toLowerCase();a[h]=o[l]}for(let l in e.attributes){let h=Jc[l]||l.toLowerCase();if(o[l]!==void 0){let u=n.accessors[e.attributes[l]],d=Fs[u.componentType];c[h]=d.name,A[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(l){return new Promise(function(h,u){s.decodeDracoFile(l,function(d){for(let g in d.attributes){let x=d.attributes[g],p=A[g];p!==void 0&&(x.normalized=p)}h(d)},a,c,Wt,u)})})}},Yc=class{constructor(){this.name=ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Qc=class{constructor(){this.name=ke.KHR_MESH_QUANTIZATION}},ka=class extends En{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=a*2,c=a*3,l=s-t,h=(n-t)/l,u=h*h,d=u*h,g=e*c,x=g-c,p=-2*d+3*u,f=d-u,P=1-p,D=f-u+h;for(let y=0;y!==a;y++){let T=o[x+y+a],w=o[x+y+A]*l,C=o[g+y+a],v=o[g+y]*l;r[y]=P*T+D*w+p*C+f*v}return r}},Nv=new qt,Zc=class extends ka{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Nv.fromArray(r).normalize().toArray(r),r}},An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mh={9728:ft,9729:pt,9984:Yo,9985:Is,9986:Fi,9987:xn},xh={33071:on,33648:hs,10497:ci},Sc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ov={CUBICSPLINE:void 0,LINEAR:Pi,STEP:Si},Pc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Hn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:In})),i.DefaultMaterial}function Gi(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function On(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Uv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,l=e.length;c<l;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],A=[];for(let c=0,l=e.length;c<l;c++){let h=e[c];if(n){let u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(u)}if(s){let u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(u)}if(r){let u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;A.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(A)]).then(function(c){let l=c[0],h=c[1],u=c[2];return n&&(i.morphAttributes.position=l),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function Bv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Fv(i){let e,t=i.extensions&&i.extensions[ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_c(t.attributes):e=i.indices+":"+_c(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+_c(i.targets[n]);return e}function _c(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Kc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Wv=new Ue,qc=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Lv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let A=a.match(/Version\/(\d+)/);s=n&&A?parseInt(A[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new vr(this.options.manager):this.textureLoader=new Tr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _s(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Gi(r,a,s),On(a,s),Promise.all(n._invokeAll(function(A){return A.afterRoot&&A.afterRoot(a)})).then(function(){for(let A of a.scenes)A.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,A=o.length;a<A;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let A=this.associations.get(o);A!=null&&this.associations.set(a,A);for(let[c,l]of o.children.entries())r(l,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Kn.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Sc[s.type],a=Fs[s.componentType],A=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new bt(c,o,A))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],A=Sc[s.type],c=Fs[s.componentType],l=c.BYTES_PER_ELEMENT,h=l*A,u=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,p;if(d&&d!==h){let f=Math.floor(u/d),P="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count,D=t.cache.get(P);D||(x=new c(a,f*d,s.count*d/l),D=new Ci(x,d/l),t.cache.add(P,D)),p=new li(D,A,u%d/l,g)}else a===null?x=new c(s.count*A):x=new c(a,u,s.count*A),p=new bt(x,A,g);if(s.sparse!==void 0){let f=Sc.SCALAR,P=Fs[s.sparse.indices.componentType],D=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,T=new P(o[1],D,s.sparse.count*f),w=new c(o[2],y,s.sparse.count*A);a!==null&&(p=new bt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let C=0,v=T.length;C<v;C++){let b=T[C];if(p.setX(b,w[C*A]),A>=2&&p.setY(b,w[C*A+1]),A>=3&&p.setZ(b,w[C*A+2]),A>=4&&p.setW(b,w[C*A+3]),A>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let A=n.manager.getHandler(o.uri);A!==null&&(a=A)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],A=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[A])return this.textureCache[A];let c=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=o.name||a.name||"",l.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(l.name=a.uri);let u=(r.samplers||{})[o.sampler]||{};return l.magFilter=Mh[u.magFilter]||pt,l.minFilter=Mh[u.minFilter]||xn,l.wrapS=xh[u.wrapS]||ci,l.wrapT=xh[u.wrapT]||ci,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==ft&&l.minFilter!==pt,s.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[A]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,A=o.uri||"",c=!1;if(o.bufferView!==void 0)A=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let u=new Blob([h],{type:o.mimeType});return A=a.createObjectURL(u),A});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(A).then(function(h){return new Promise(function(u,d){let g=u;t.isImageBitmapLoader===!0&&(g=function(x){let p=new St(x);p.needsUpdate=!0,u(p)}),t.load(Kn.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(A),On(h,o),h.userData.mimeType=o.mimeType||jv(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",A),h});return this.sourceCache[e]=l,l}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ke.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let A=r.associations.get(o);o=r.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,A)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,A=this.cache.get(a);A||(A=new ws,Gt.prototype.copy.call(A,n),A.color.copy(n.color),A.map=n.map,A.sizeAttenuation=!1,this.cache.add(a,A)),n=A}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,A=this.cache.get(a);A||(A=new Ts,Gt.prototype.copy.call(A,n),A.color.copy(n.color),A.map=n.map,this.cache.add(a,A)),n=A}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let A=this.cache.get(a);A||(A=n.clone(),r&&(A.vertexColors=!0),o&&(A.flatShading=!0),s&&(A.normalScale&&(A.normalScale.y*=-1),A.clearcoatNormalScale&&(A.clearcoatNormalScale.y*=-1)),this.cache.add(a,A),this.associations.set(A,this.associations.get(n))),n=A}e.material=n}getMaterialType(){return Hn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},A=r.extensions||{},c=[];if(A[ke.KHR_MATERIALS_UNLIT]){let h=s[ke.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Wt),a.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ht)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=an);let l=r.alphaMode||Pc.OPAQUE;if(l===Pc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,l===Pc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==vn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==vn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==vn){let h=r.emissiveFactor;a.emissive=new De().setRGB(h[0],h[1],h[2],Wt)}return r.emissiveTexture!==void 0&&o!==vn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ht)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),On(h,r),t.associations.set(h,{materials:e}),r.extensions&&Gi(s,h,r),h})}createUniqueName(e){let t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(A){return yh(A,a,t)})}let o=[];for(let a=0,A=e.length;a<A;a++){let c=e[a],l=Fv(c),h=s[l];if(h)o.push(h.promise);else{let u;c.extensions&&c.extensions[ke.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=yh(new Tt,c,t),c.mode===An.TRIANGLE_STRIP?u=u.then(d=>bc(d,Rr)):c.mode===An.TRIANGLE_FAN&&(u=u.then(d=>bc(d,Ns))),s[l]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let A=0,c=o.length;A<c;A++){let l=o[A].material===void 0?zv(this.cache):this.getDependency("material",o[A].material);a.push(l)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(A){let c=A.slice(0,A.length-1),l=A[A.length-1],h=[];for(let d=0,g=l.length;d<g;d++){let x=l[d],p=o[d],f,P=c[d];if(p.mode===An.TRIANGLES||p.mode===An.TRIANGLE_STRIP||p.mode===An.TRIANGLE_FAN||p.mode===void 0){let D=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");D&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=D&&y?new cr(x,P):new Pt(x,P),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(p.mode===An.LINES)f=new ur(x,P);else if(p.mode===An.LINE_STRIP)f=new Di(x,P);else if(p.mode===An.LINE_LOOP)f=new hr(x,P);else if(p.mode===An.POINTS)f=new dr(x,P);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&Bv(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),On(f,r),p.extensions&&Gi(s,f,p),t.assignFinalMaterial(f),h.push(f)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Gi(s,h[0],r),h[0];let u=new mn;r.extensions&&Gi(s,u,r),t.associations.set(u,{meshes:e});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xt($A.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new fi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),On(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],A=[];for(let c=0,l=o.length;c<l;c++){let h=o[c];if(h){a.push(h);let u=new Ue;r!==null&&u.fromArray(r.array,c*16),A.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new lr(a,A)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],A=[],c=[],l=[];for(let h=0,u=s.channels.length;h<u;h++){let d=s.channels[h],g=s.samplers[d.sampler],x=d.target,p=x.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,P=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",f)),A.push(this.getDependency("accessor",P)),c.push(g),l.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(A),Promise.all(c),Promise.all(l)]).then(function(h){let u=h[0],d=h[1],g=h[2],x=h[3],p=h[4],f=[];for(let D=0,y=u.length;D<y;D++){let T=u[D],w=d[D],C=g[D],v=x[D],b=p[D];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let I=n._createAnimationTracks(T,w,C,v,b);if(I)for(let U=0;U<I.length;U++)f.push(I[U])}let P=new gr(r,void 0,f);return On(P,s),P})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let A=0,c=s.weights.length;A<c;A++)a.morphTargetInfluences[A]=s.weights[A]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,l=a.length;c<l;c++)o.push(n.getDependency("node",a[c]));let A=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),A]).then(function(c){let l=c[0],h=c[1],u=c[2];u!==null&&l.traverse(function(d){d.isSkinnedMesh&&d.bind(u,Wv)});for(let d=0,g=h.length;d<g;d++)l.add(h[d]);if(l.userData.pivot!==void 0&&h.length>0){let d=l.userData.pivot,g=h[0];l.pivot=new B().fromArray(d),l.position.x-=d[0],l.position.y-=d[1],l.position.z-=d[2],g.position.set(0,0,0),delete l.userData.pivot}return l})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],A=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return A&&a.push(A),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let l;if(r.isBone===!0?l=new Ms:c.length>1?l=new mn:c.length===1?l=c[0]:l=new it,l!==c[0])for(let h=0,u=c.length;h<u;h++)l.add(c[h]);if(r.name&&(l.userData.name=r.name,l.name=o),On(l,r),r.extensions&&Gi(n,l,r),r.matrix!==void 0){let h=new Ue;h.fromArray(r.matrix),l.applyMatrix4(h)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);if(!s.associations.has(l))s.associations.set(l,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(l);s.associations.set(l,{...h})}return s.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new mn;n.name&&(r.name=s.createUniqueName(n.name)),On(r,n),n.extensions&&Gi(t,r,n);let o=n.nodes||[],a=[];for(let A=0,c=o.length;A<c;A++)a.push(s.getDependency("node",o[A]));return Promise.all(a).then(function(A){for(let l=0,h=A.length;l<h;l++){let u=A[l];u.parent!==null?r.add(mh(u)):r.add(u)}let c=l=>{let h=new Map;for(let[u,d]of s.associations)(u instanceof Gt||u instanceof St)&&h.set(u,d);return l.traverse(u=>{let d=s.associations.get(u);d!=null&&h.set(u,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,A=[];function c(d){d.morphTargetInfluences&&A.push(d.name?d.name:d.uuid)}vi[r.path]===vi.weights?(c(e),e.isGroup&&e.children.forEach(c)):A.push(a);let l;switch(vi[r.path]){case vi.weights:l=Qn;break;case vi.rotation:l=Zn;break;case vi.translation:case vi.scale:l=di;break;default:n.itemSize===1?l=Qn:l=di;break}let h=s.interpolation!==void 0?Ov[s.interpolation]:Pi,u=this._getArrayFromAccessor(n);for(let d=0,g=A.length;d<g;d++){let x=new l(A[d]+"."+vi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Kc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Zn?Zc:ka;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Gv(i,e,t){let n=e.attributes,s=new $t;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],A=a.min,c=a.max;if(A!==void 0&&c!==void 0){if(s.set(new B(A[0],A[1],A[2]),new B(c[0],c[1],c[2])),a.normalized){let l=Kc(Fs[a.componentType]);s.min.multiplyScalar(l),s.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new B,A=new B;for(let c=0,l=r.length;c<l;c++){let h=r[c];if(h.POSITION!==void 0){let u=t.json.accessors[h.POSITION],d=u.min,g=u.max;if(d!==void 0&&g!==void 0){if(A.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),A.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),A.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),u.normalized){let x=Kc(Fs[u.componentType]);A.multiplyScalar(x)}a.max(A)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Ht;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function yh(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(A){i.setAttribute(a,A)})}for(let o in n){let a=Jc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return We.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),On(i,e),Gv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Uv(i,e.targets,t):i})}var wh="Z2xURgIAAABIvQEAzEsAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NC41LjUxIiwidmVyc2lvbiI6IjIuMCJ9LCJleHRlbnNpb25zVXNlZCI6WyJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIl0sInNjZW5lIjowLCJzY2VuZXMiOlt7Im5hbWUiOiJCaWwiLCJub2RlcyI6WzIzXX1dLCJub2RlcyI6W3sibWVzaCI6MCwibmFtZSI6IkJfc3RvbHBlX0giLCJyb3RhdGlvbiI6WzAsMCwtMC4xNDM1MzAzMDkyMDAyODY4NywwLjk4OTY0NTk1Nzk0Njc3NzNdLCJzY2FsZSI6WzEsMS4wNzk5OTk5MjM3MDYwNTQ3LDFdLCJ0cmFuc2xhdGlvbiI6Wy0wLjczMTk5OTk5MzMyNDI3OTgsMS4xNjk5OTk5NTcwODQ2NTU4LC0wLjQxOTk5OTk4Njg4Njk3ODE1XX0seyJtZXNoIjoxLCJuYW1lIjoiQl9zdG9scGVfViIsInJvdGF0aW9uIjpbMCwwLDAuMTQzNTMwMzA5MjAwMjg2ODcsMC45ODk2NDU5NTc5NDY3NzczXSwic2NhbGUiOlsxLDEuMDc5OTk5OTIzNzA2MDU0NywxXSwidHJhbnNsYXRpb24iOlswLjczMTk5OTk5MzMyNDI3OTgsMS4xNjk5OTk5NTcwODQ2NTU4LC0wLjQxOTk5OTk4Njg4Njk3ODE1XX0seyJtZXNoIjoyLCJuYW1lIjoiQmFrbHlzX0giLCJ0cmFuc2xhdGlvbiI6Wy0wLjYwMDAwMDAyMzg0MTg1NzksMC43MjAwMDAwMjg2MTAyMjk1LC0yLjAxOTk5OTk4MDkyNjUxMzddfSx7Im1lc2giOjMsIm5hbWUiOiJCYWtseXNfViIsInRyYW5zbGF0aW9uIjpbMC42MDAwMDAwMjM4NDE4NTc5LDAuNzIwMDAwMDI4NjEwMjI5NSwtMi4wMTk5OTk5ODA5MjY1MTM3XX0seyJtZXNoIjo0LCJuYW1lIjoiRnJvbnRseXNfSCIsInRyYW5zbGF0aW9uIjpbLTAuNTc5OTk5OTgzMzEwNjk5NSwwLjY4MDAwMDAwNzE1MjU1NzQsMi4wMTk5OTk5ODA5MjY1MTM3XX0seyJtZXNoIjo1LCJuYW1lIjoiRnJvbnRseXNfViIsInRyYW5zbGF0aW9uIjpbMC41Nzk5OTk5ODMzMTA2OTk1LDAuNjgwMDAwMDA3MTUyNTU3NCwyLjAxOTk5OTk4MDkyNjUxMzddfSx7Im1lc2giOjYsIm5hbWUiOiJHcmlsbCIsInRyYW5zbGF0aW9uIjpbMCwwLjYwMDAwMDAyMzg0MTg1NzksMi4wMzk5OTk5NjE4NTMwMjczXX0seyJtZXNoIjo3LCJuYW1lIjoiSGp1bF9CSCIsInRyYW5zbGF0aW9uIjpbLTAuODAwMDAwMDExOTIwOTI5LDAuMzQwMDAwMDAzNTc2Mjc4NywtMS4yOTk5OTk5NTIzMTYyODQyXX0seyJtZXNoIjo4LCJuYW1lIjoiSGp1bF9CViIsInRyYW5zbGF0aW9uIjpbMC44MDAwMDAwMTE5MjA5MjksMC4zNDAwMDAwMDM1NzYyNzg3LC0xLjI5OTk5OTk1MjMxNjI4NDJdfSx7Im1lc2giOjksIm5hbWUiOiJIanVsX0ZIIiwidHJhbnNsYXRpb24iOlstMC44MDAwMDAwMTE5MjA5MjksMC4zNDAwMDAwMDM1NzYyNzg3LDEuMjk5OTk5OTUyMzE2Mjg0Ml19LHsibWVzaCI6MTAsIm5hbWUiOiJIanVsX0ZWIiwidHJhbnNsYXRpb24iOlswLjgwMDAwMDAxMTkyMDkyOSwwLjM0MDAwMDAwMzU3NjI3ODcsMS4yOTk5OTk5NTIzMTYyODQyXX0seyJtZXNoIjoxMSwibmFtZSI6Ikthcm9zc2VyaSJ9LHsibWVzaCI6MTIsIm5hbWUiOiJLdXBlIn0seyJtZXNoIjoxMywibmFtZSI6IlNraWx0X2JhayIsInRyYW5zbGF0aW9uIjpbMCwwLjQ2MDAwMDAwODM0NDY1MDI3LC0yLjA4OTk5OTkxNDE2OTMxMTVdfSx7Im1lc2giOjE0LCJuYW1lIjoiU2tpbHRfZm9yYW4iLCJ0cmFuc2xhdGlvbiI6WzAsMC40MDAwMDAwMDU5NjA0NjQ1LDIuMDg5OTk5OTE0MTY5MzExNV19LHsibWVzaCI6MTUsIm5hbWUiOiJTcGVpbF9IIiwidHJhbnNsYXRpb24iOlstMC45MzAwMDAwMDcxNTI1NTc0LDAuOTkwMDAwMDA5NTM2NzQzMiwwLjkyMDAwMDAxNjY4OTMwMDVdfSx7Im1lc2giOjE2LCJuYW1lIjoiU3BlaWxfViIsInRyYW5zbGF0aW9uIjpbMC45MzAwMDAwMDcxNTI1NTc0LDAuOTkwMDAwMDA5NTM2NzQzMiwwLjkyMDAwMDAxNjY4OTMwMDVdfSx7Im1lc2giOjE3LCJuYW1lIjoiU3BlaWxnbGFzc19IIiwidHJhbnNsYXRpb24iOlstMC45Mzk5OTk5OTc2MTU4MTQyLDAuOTkwMDAwMDA5NTM2NzQzMiwwLjg3OTk5OTk5NTIzMTYyODRdfSx7Im1lc2giOjE4LCJuYW1lIjoiU3BlaWxnbGFzc19WIiwidHJhbnNsYXRpb24iOlswLjkzOTk5OTk5NzYxNTgxNDIsMC45OTAwMDAwMDk1MzY3NDMyLDAuODc5OTk5OTk1MjMxNjI4NF19LHsibWVzaCI6MTksIm5hbWUiOiJTdG90ZmFuZ2VyX2JhayIsInRyYW5zbGF0aW9uIjpbMCwwLjM2MDAwMDAxNDMwNTExNDc1LC0yLjAxOTk5OTk4MDkyNjUxMzddfSx7Im1lc2giOjIwLCJuYW1lIjoiU3RvdGZhbmdlcl9mb3JhbiIsInRyYW5zbGF0aW9uIjpbMCwwLjM2MDAwMDAxNDMwNTExNDc1LDIuMDE5OTk5OTgwOTI2NTEzN119LHsibWVzaCI6MjEsIm5hbWUiOiJUZXJza2VsX0giLCJ0cmFuc2xhdGlvbiI6Wy0wLjg4NDk5OTk5MDQ2MzI1NjgsMC4zMTk5OTk5OTI4NDc0NDI2LDBdfSx7Im1lc2giOjIyLCJuYW1lIjoiVGVyc2tlbF9WIiwidHJhbnNsYXRpb24iOlswLjg4NDk5OTk5MDQ2MzI1NjgsMC4zMTk5OTk5OTI4NDc0NDI2LDBdfSx7ImNoaWxkcmVuIjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMl0sIm5hbWUiOiJCaWwifV0sIm1hdGVyaWFscyI6W3siZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJMYWtrIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsiYmFzZUNvbG9yRmFjdG9yIjpbMC44OTEyNjIwNTQ0NDMzNTk0LDAuNTYwNDk5MTMxNjc5NTM0OSwwLjEwNjE1NjA2NjA2MDA2NjIyLDFdLCJtZXRhbGxpY0ZhY3RvciI6MCwicm91Z2huZXNzRmFjdG9yIjowLjQ0OTk5OTk4ODA3OTA3MTA0fX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwiZW1pc3NpdmVGYWN0b3IiOlswLjY5NDA4MDUzMTU5NzEzNzUsMC4wMjc3NTUyNzkwOTM5ODA3OSwwLjAxOTkxNzgzODI3NTQzMjU4N10sIm5hbWUiOiJCYWtseXMiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjY5NDA4MDUzMTU5NzEzNzUsMC4wMjc3NTUyNzkwOTM5ODA3OSwwLjAxOTkxNzgzODI3NTQzMjU4NywxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC4zMDAwMDAwMTE5MjA5Mjg5Nn19LHsiZG91YmxlU2lkZWQiOnRydWUsImVtaXNzaXZlRmFjdG9yIjpbMSwwLjkwNzU0NzE3NTg4NDI0NjgsMC42ODAwMjAzMzIzMzY0MjU4XSwiZXh0ZW5zaW9ucyI6eyJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoIjp7ImVtaXNzaXZlU3RyZW5ndGgiOjEuNX19LCJuYW1lIjoiRnJvbnRseXMiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlsxLDAuOTA3NTQ3MTc1ODg0MjQ2OCwwLjY4MDAyMDMzMjMzNjQyNTgsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuMzAwMDAwMDExOTIwOTI4OTZ9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiVHJpbSIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDM4NDcyNzQ1NTY3NTYwMTk2LDAuMDQ2MTQ4ODQ0MDYzMjgyMDEsMC4wNTYzNzQwOTkxMDU1OTY1NCwxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC42OTk5OTk5ODgwNzkwNzF9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiRGVrayIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDA5Njk2MzI5MDEyNTEzMTYsMC4wMTE4ODEzMzQ3MDcxNDA5MjMsMC4wMTUxNzUyMzgyNTE2ODYwOTYsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuODk5OTk5OTc2MTU4MTQyMX19LHsiZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJGZWxnIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsiYmFzZUNvbG9yRmFjdG9yIjpbMC41NTQyMjcxMTM3MjM3NTQ5LDAuNTg1OTcyOTY0NzYzNjQxNCwwLjYxODY4NTcyMjM1MTA3NDIsMV0sIm1ldGFsbGljRmFjdG9yIjowLjMwMDAwMDAxMTkyMDkyODk2LCJyb3VnaG5lc3NGYWN0b3IiOjAuNDAwMDAwMDA1OTYwNDY0NX19LHsiZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJHbGFzcyIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDIzMTAzNTU1NjY0NDIwMTI4LDAuMDM4NDcyNzQ1NTY3NTYwMTk2LDAuMDU2Mzc0MDk5MTA1NTk2NTQsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuMjAwMDAwMDAyOTgwMjMyMjR9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiU2tpbHQiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjg5MTI2MjA1NDQ0MzM1OTQsMC44OTEyNjIwNTQ0NDMzNTk0LDAuODkxMjYyMDU0NDQzMzU5NCwxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC42MDAwMDAwMjM4NDE4NTc5fX1dLCJtZXNoZXMiOlt7Im5hbWUiOiJCX3N0b2xwZV9ILjAwMSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjAsIk5PUk1BTCI6MX0sImluZGljZXMiOjIsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IkJfc3RvbHBlX1YiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjozLCJOT1JNQUwiOjR9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJCYWtseXNfSC4wMDEiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo1LCJOT1JNQUwiOjZ9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6MX1dfSx7Im5hbWUiOiJCYWtseXNfViIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjgsIk5PUk1BTCI6OX0sImluZGljZXMiOjcsIm1hdGVyaWFsIjoxfV19LHsibmFtZSI6IkZyb250bHlzX0guMDAxIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTAsIk5PUk1BTCI6MTF9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6Mn1dfSx7Im5hbWUiOiJGcm9udGx5c19WIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTIsIk5PUk1BTCI6MTN9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6Mn1dfSx7Im5hbWUiOiJHcmlsbCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjE0LCJOT1JNQUwiOjE1fSwiaW5kaWNlcyI6NywibWF0ZXJpYWwiOjN9XX0seyJuYW1lIjoiSGp1bF9CSC4wMDEiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxNiwiTk9STUFMIjoxN30sImluZGljZXMiOjE4LCJtYXRlcmlhbCI6NH0seyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxOSwiTk9STUFMIjoyMH0sImluZGljZXMiOjIxLCJtYXRlcmlhbCI6NX1dfSx7Im5hbWUiOiJIanVsX0JWIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MjIsIk5PUk1BTCI6MjN9LCJpbmRpY2VzIjoyNCwibWF0ZXJpYWwiOjR9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MjUsIk5PUk1BTCI6MjZ9LCJpbmRpY2VzIjoyNywibWF0ZXJpYWwiOjV9XX0seyJuYW1lIjoiSGp1bF9GSC4wMDEiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoyOCwiTk9STUFMIjoyOX0sImluZGljZXMiOjE4LCJtYXRlcmlhbCI6NH0seyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjozMCwiTk9STUFMIjozMX0sImluZGljZXMiOjIxLCJtYXRlcmlhbCI6NX1dfSx7Im5hbWUiOiJIanVsX0ZWIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MzIsIk5PUk1BTCI6MzN9LCJpbmRpY2VzIjoyNCwibWF0ZXJpYWwiOjR9LHsiYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MzQsIk5PUk1BTCI6MzV9LCJpbmRpY2VzIjoyNywibWF0ZXJpYWwiOjV9XX0seyJuYW1lIjoiS2Fyb3NzZXJpIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MzYsIk5PUk1BTCI6Mzd9LCJpbmRpY2VzIjozOCwibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiS3VwZSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjM5LCJOT1JNQUwiOjQwfSwiaW5kaWNlcyI6NDEsIm1hdGVyaWFsIjowfSx7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjQyLCJOT1JNQUwiOjQzfSwiaW5kaWNlcyI6NDQsIm1hdGVyaWFsIjo2fV19LHsibmFtZSI6IlNraWx0X2JhayIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjQ1LCJOT1JNQUwiOjQ2fSwiaW5kaWNlcyI6NywibWF0ZXJpYWwiOjd9XX0seyJuYW1lIjoiU2tpbHRfZm9yYW4iLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo0NywiTk9STUFMIjo0OH0sImluZGljZXMiOjcsIm1hdGVyaWFsIjo3fV19LHsibmFtZSI6IlNwZWlsX0guMDAxIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NDksIk5PUk1BTCI6NTB9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJTcGVpbF9WIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTEsIk5PUk1BTCI6NTJ9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJTcGVpbGdsYXNzX0guMDAxIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTMsIk5PUk1BTCI6NTR9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6Nn1dfSx7Im5hbWUiOiJTcGVpbGdsYXNzX1YiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo1NSwiTk9STUFMIjo1Nn0sImluZGljZXMiOjIsIm1hdGVyaWFsIjo2fV19LHsibmFtZSI6IlN0b3RmYW5nZXJfYmFrIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTcsIk5PUk1BTCI6NTh9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6M31dfSx7Im5hbWUiOiJTdG90ZmFuZ2VyX2ZvcmFuIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTksIk5PUk1BTCI6NjB9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6M31dfSx7Im5hbWUiOiJUZXJza2VsX0guMDAxIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NjEsIk5PUk1BTCI6NjJ9LCJpbmRpY2VzIjo3LCJtYXRlcmlhbCI6M31dfSx7Im5hbWUiOiJUZXJza2VsX1YiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo2MywiTk9STUFMIjo2NH0sImluZGljZXMiOjcsIm1hdGVyaWFsIjozfV19XSwiYWNjZXNzb3JzIjpbeyJidWZmZXJWaWV3IjowLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDE0OTk5OTk5NjY0NzIzODczLDAuMjUsMC4wNDUwMDAwMDE3ODgxMzkzNF0sIm1pbiI6Wy0wLjAxNDk5OTk5OTY2NDcyMzg3MywtMC4yNSwtMC4wNDUwMDAwMDE3ODgxMzkzNF0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MzYsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4wMTQ5OTk5OTk2NjQ3MjM4NzMsMC4yNSwwLjA0NTAwMDAwMTc4ODEzOTM0XSwibWluIjpbLTAuMDE0OTk5OTk5NjY0NzIzODczLC0wLjI1LC0wLjA0NTAwMDAwMTc4ODEzOTM0XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4xNTAwMDAwMDU5NjA0NjQ0OCwwLjA1OTk5OTk5ODY1ODg5NTQ5LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuMTUwMDAwMDA1OTYwNDY0NDgsLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjYsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjcsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoxMzIsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjgsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4xNTAwMDAwMDU5NjA0NjQ0OCwwLjA1OTk5OTk5ODY1ODg5NTQ5LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuMTUwMDAwMDA1OTYwNDY0NDgsLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjksImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsIm1heCI6WzAuMTcwMDAwMDAxNzg4MTM5MzQsMC4wNTk5OTk5OTg2NTg4OTU0OSwwLjAyOTk5OTk5OTMyOTQ0Nzc0Nl0sIm1pbiI6Wy0wLjE3MDAwMDAwMTc4ODEzOTM0LC0wLjA1OTk5OTk5ODY1ODg5NTQ5LC0wLjAyOTk5OTk5OTMyOTQ0Nzc0Nl0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4xNzAwMDAwMDE3ODgxMzkzNCwwLjA1OTk5OTk5ODY1ODg5NTQ5LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuMTcwMDAwMDAxNzg4MTM5MzQsLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEzLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlswLjM0OTk5OTk5NDAzOTUzNTUsMC4wNTk5OTk5OTg2NTg4OTU0OSwwLjAyNTAwMDAwMDM3MjUyOTAzXSwibWluIjpbLTAuMzQ5OTk5OTk0MDM5NTM1NSwtMC4wNTk5OTk5OTg2NTg4OTU0OSwtMC4wMjUwMDAwMDAzNzI1MjkwM10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTYsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNzIsIm1heCI6WzAuMTIwMDAwMDE5NjY5NTMyNzgsMC4zNDAwMDAwMDM1NzYyNzg3LDAuMzQwMDAwMDAzNTc2Mjc4N10sIm1pbiI6Wy0wLjExMTk2Mjg1NDg2MjIxMzEzLC0wLjM0MDAwMDAwMzU3NjI3ODcsLTAuMzQwMDAwMDAzNTc2Mjc4N10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI3MiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE4LCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6NDI2LCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjoxOSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE2LCJtYXgiOlstMC4wODk5OTk5ODEyMjQ1MzY5LDAuMjMwMDAwMDA0MTcyMzI1MTMsMC4yMzAwMDAwMDQxNzIzMjUxM10sIm1pbiI6Wy0wLjA5MDAwMDAxMTAyNjg1OTI4LC0wLjIzMDAwMDAwNDE3MjMyNTEzLC0wLjIzMDAwMDAwNDE3MjMyNTEzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyMSwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjQyLCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjoyMiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI3MiwibWF4IjpbMC4xMTE5NjI4NTQ4NjIyMTMxMywwLjM0MDAwMDAwMzU3NjI3ODcsMC4zNDAwMDAwMDM1NzYyNzg3XSwibWluIjpbLTAuMTIwMDAwMDE5NjY5NTMyNzgsLTAuMzQwMDAwMDAzNTc2Mjc4NywtMC4zNDAwMDAwMDM1NzYyNzg3XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIzLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjcyLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MjQsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50Ijo0MjYsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjI1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsIm1heCI6WzAuMDkwMDAwMDExMDI2ODU5MjgsMC4yMzAwMDAwMDQxNzIzMjUxMywwLjIzMDAwMDAwNDE3MjMyNTEzXSwibWluIjpbMC4wODk5OTk5ODEyMjQ1MzY5LC0wLjIzMDAwMDAwNDE3MjMyNTEzLC0wLjIzMDAwMDAwNDE3MjMyNTEzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjI2LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyNywiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjQyLCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjoyOCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI3MiwibWF4IjpbMC4xMjAwMDAwMTk2Njk1MzI3OCwwLjM0MDAwMDAwMzU3NjI3ODcsMC4zNDAwMDAwMDM1NzYyNzg3XSwibWluIjpbLTAuMTExOTYyODU0ODYyMjEzMTMsLTAuMzQwMDAwMDAzNTc2Mjc4NywtMC4zNDAwMDAwMDM1NzYyNzg3XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjI5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjcyLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MzAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNiwibWF4IjpbLTAuMDg5OTk5OTgxMjI0NTM2OSwwLjIzMDAwMDAwNDE3MjMyNTEzLDAuMjMwMDAwMDA0MTcyMzI1MTNdLCJtaW4iOlstMC4wOTAwMDAwMTEwMjY4NTkyOCwtMC4yMzAwMDAwMDQxNzIzMjUxMywtMC4yMzAwMDAwMDQxNzIzMjUxM10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozMSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MzIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNzIsIm1heCI6WzAuMTExOTYyODU0ODYyMjEzMTMsMC4zNDAwMDAwMDM1NzYyNzg3LDAuMzQwMDAwMDAzNTc2Mjc4N10sIm1pbiI6Wy0wLjEyMDAwMDAxOTY2OTUzMjc4LC0wLjM0MDAwMDAwMzU3NjI3ODcsLTAuMzQwMDAwMDAzNTc2Mjc4N10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozMywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI3MiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjM0LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsIm1heCI6WzAuMDkwMDAwMDExMDI2ODU5MjgsMC4yMzAwMDAwMDQxNzIzMjUxMywwLjIzMDAwMDAwNDE3MjMyNTEzXSwibWluIjpbMC4wODk5OTk5ODEyMjQ1MzY5LC0wLjIzMDAwMDAwNDE3MjMyNTEzLC0wLjIzMDAwMDAwNDE3MjMyNTEzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjM1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozNiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjg2MCwibWF4IjpbMC44Nzk5OTk5OTUyMzE2Mjg0LDAuOTQ5OTk5OTg4MDc5MDcxLDIuMDI5MTU2Njg0ODc1NDg4M10sIm1pbiI6Wy0wLjg3OTk5OTk5NTIzMTYyODQsMC4yODAwMDAwMDExOTIwOTI5LC0yLjAzOTk5OTk2MTg1MzAyNzNdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MzcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo4NjAsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozOCwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjEzNTYsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjM5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MzEyLCJtYXgiOlswLjc4NzAwMjQ0NDI2NzI3MywxLjQ0MDAwMDA1NzIyMDQ1OSwxLjA2NDgwNTYyNjg2OTIwMTddLCJtaW4iOlstMC43ODcwMDI0NDQyNjcyNzMsMC44OTk5OTk5NzYxNTgxNDIxLC0xLjQwNTY1OTQzNzE3OTU2NTRdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NDAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjozMTIsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0MSwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjQ2OCwidHlwZSI6IlNDQUxBUiJ9LHsiYnVmZmVyVmlldyI6NDIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC43Nzk0MjA4NTI2NjExMzI4LDEuMzk3MjM5OTIzNDc3MTcyOSwxLjAzNDMwMzMwNzUzMzI2NDJdLCJtaW4iOlstMC43Nzk0MjA4NTI2NjExMzI4LDAuOTEzMzkyMzA1Mzc0MTQ1NSwtMS4zODA4MjY0NzMyMzYwODRdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NDMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjQ0LCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6NDgsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjQ1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsIm1heCI6WzAuMjE5OTk5OTk4ODA3OTA3MSwwLjA1NDk5OTk5OTcwMTk3Njc3NiwwLjAwOTk5OTk5OTc3NjQ4MjU4Ml0sIm1pbiI6Wy0wLjIxOTk5OTk5ODgwNzkwNzEsLTAuMDU0OTk5OTk5NzAxOTc2Nzc2LC0wLjAwOTk5OTk5OTc3NjQ4MjU4Ml0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0NiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NDcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4yMTk5OTk5OTg4MDc5MDcxLDAuMDU0OTk5OTk5NzAxOTc2Nzc2LDAuMDA5OTk5OTk5Nzc2NDgyNTgyXSwibWluIjpbLTAuMjE5OTk5OTk4ODA3OTA3MSwtMC4wNTQ5OTk5OTk3MDE5NzY3NzYsLTAuMDA5OTk5OTk5Nzc2NDgyNTgyXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjQ4LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0OSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlswLjA3OTk5OTk5ODIxMTg2MDY2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wMzk5OTk5OTkxMDU5MzAzM10sIm1pbiI6Wy0wLjA3OTk5OTk5ODIxMTg2MDY2LC0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjAzOTk5OTk5OTEwNTkzMDMzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo1MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlswLjA3OTk5OTk5ODIxMTg2MDY2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wMzk5OTk5OTkxMDU5MzAzM10sIm1pbiI6Wy0wLjA3OTk5OTk5ODIxMTg2MDY2LC0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjAzOTk5OTk5OTEwNTkzMDMzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUyLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo1MywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjA2NDk5OTk5NzYxNTgxNDIxLDAuMDM1MDAwMDAwMTQ5MDExNjEsMC4wMDQ5OTk5OTk4ODgyNDEyOTFdLCJtaW4iOlstMC4wNjQ5OTk5OTc2MTU4MTQyMSwtMC4wMzUwMDAwMDAxNDkwMTE2MSwtMC4wMDQ5OTk5OTk4ODgyNDEyOTFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NTQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjU1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDY0OTk5OTk3NjE1ODE0MjEsMC4wMzUwMDAwMDAxNDkwMTE2MSwwLjAwNDk5OTk5OTg4ODI0MTI5MV0sIm1pbiI6Wy0wLjA2NDk5OTk5NzYxNTgxNDIxLC0wLjAzNTAwMDAwMDE0OTAxMTYxLC0wLjAwNDk5OTk5OTg4ODI0MTI5MV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo1NiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NTcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC44ODk5OTk5ODU2OTQ4ODUzLDAuMDcwMDAwMDAwMjk4MDIzMjIsMC4wNTk5OTk5OTg2NTg4OTU0OV0sIm1pbiI6Wy0wLjg4OTk5OTk4NTY5NDg4NTMsLTAuMDcwMDAwMDAwMjk4MDIzMjIsLTAuMDU5OTk5OTk4NjU4ODk1NDldLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NTgsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjU5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsIm1heCI6WzAuODg5OTk5OTg1Njk0ODg1MywwLjA3MDAwMDAwMDI5ODAyMzIyLDAuMDU5OTk5OTk4NjU4ODk1NDldLCJtaW4iOlstMC44ODk5OTk5ODU2OTQ4ODUzLC0wLjA3MDAwMDAwMDI5ODAyMzIyLC0wLjA1OTk5OTk5ODY1ODg5NTQ5XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjYwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTYsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo2MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJtYXgiOlswLjAyNTAwMDAwMDM3MjUyOTAzLDAuMDM5OTk5OTk5MTA1OTMwMzMsMC43NzQ5OTk5NzYxNTgxNDIxXSwibWluIjpbLTAuMDI1MDAwMDAwMzcyNTI5MDMsLTAuMDM5OTk5OTk5MTA1OTMwMzMsLTAuNzc0OTk5OTc2MTU4MTQyMV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo2MiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjk2LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NjMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwibWF4IjpbMC4wMjUwMDAwMDAzNzI1MjkwMywwLjAzOTk5OTk5OTEwNTkzMDMzLDAuNzc0OTk5OTc2MTU4MTQyMV0sIm1pbiI6Wy0wLjAyNTAwMDAwMDM3MjUyOTAzLC0wLjAzOTk5OTk5OTEwNTkzMDMzLC0wLjc3NDk5OTk3NjE1ODE0MjFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NjQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5NiwidHlwZSI6IlZFQzMifV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6Mjg4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6NzIsImJ5dGVPZmZzZXQiOjU3NiwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6NjQ4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo5MzYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0IjoxMjI0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6MjM3NiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI2NCwiYnl0ZU9mZnNldCI6MzUyOCwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjM3OTIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo0OTQ0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6NjA5NiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjcyNDgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo4NDAwLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6OTU1MiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjEwNzA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6MTE4NTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjozMjY0LCJieXRlT2Zmc2V0IjoxMzAwOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjMyNjQsImJ5dGVPZmZzZXQiOjE2MjcyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6ODUyLCJieXRlT2Zmc2V0IjoxOTUzNiwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE5MiwiYnl0ZU9mZnNldCI6MjAzODgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxOTIsImJ5dGVPZmZzZXQiOjIwNTgwLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6ODQsImJ5dGVPZmZzZXQiOjIwNzcyLCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MzI2NCwiYnl0ZU9mZnNldCI6MjA4NTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjozMjY0LCJieXRlT2Zmc2V0IjoyNDEyMCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjg1MiwiYnl0ZU9mZnNldCI6MjczODQsInRhcmdldCI6MzQ5NjN9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxOTIsImJ5dGVPZmZzZXQiOjI4MjM2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTkyLCJieXRlT2Zmc2V0IjoyODQyOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjg0LCJieXRlT2Zmc2V0IjoyODYyMCwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjMyNjQsImJ5dGVPZmZzZXQiOjI4NzA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MzI2NCwiYnl0ZU9mZnNldCI6MzE5NjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxOTIsImJ5dGVPZmZzZXQiOjM1MjMyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTkyLCJieXRlT2Zmc2V0IjozNTQyNCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjMyNjQsImJ5dGVPZmZzZXQiOjM1NjE2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MzI2NCwiYnl0ZU9mZnNldCI6Mzg4ODAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxOTIsImJ5dGVPZmZzZXQiOjQyMTQ0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTkyLCJieXRlT2Zmc2V0Ijo0MjMzNiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjEwMzIwLCJieXRlT2Zmc2V0Ijo0MjUyOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjEwMzIwLCJieXRlT2Zmc2V0Ijo1Mjg0OCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI3MTIsImJ5dGVPZmZzZXQiOjYzMTY4LCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mzc0NCwiYnl0ZU9mZnNldCI6NjU4ODAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjozNzQ0LCJieXRlT2Zmc2V0Ijo2OTYyNCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjkzNiwiYnl0ZU9mZnNldCI6NzMzNjgsInRhcmdldCI6MzQ5NjN9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjc0MzA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo3NDU5MiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjk2LCJieXRlT2Zmc2V0Ijo3NDg4MCwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjc0OTc2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6NzYxMjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo3NzI4MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjc4NDMyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6Nzk1ODQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo4MDczNiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjgxODg4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6ODMwNDAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg0MTkyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo4NDQ4MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6ODQ3NjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg1MDU2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6ODUzNDQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo4NjQ5NiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjg3NjQ4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6ODg4MDAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo4OTk1MiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjExNTIsImJ5dGVPZmZzZXQiOjkxMTA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTE1MiwiYnl0ZU9mZnNldCI6OTIyNTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTUyLCJieXRlT2Zmc2V0Ijo5MzQwOCwidGFyZ2V0IjozNDk2Mn1dLCJidWZmZXJzIjpbeyJieXRlTGVuZ3RoIjo5NDU2MH1dfSBgcQEAQklOAI/CdbwAAIC+7FE4PY/CdbwAAIC+7FE4PY/CdbwAAIC+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIC+7FE4vY/CdbwAAIC+7FE4vY/CdbwAAIC+7FE4vY/CdbwAAIA+7FE4vY/CdbwAAIA+7FE4vY/CdbwAAIA+7FE4vY/CdTwAAIC+7FE4PY/CdTwAAIC+7FE4PY/CdTwAAIC+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIC+7FE4vY/CdTwAAIC+7FE4vY/CdTwAAIC+7FE4vY/CdTwAAIA+7FE4vY/CdTwAAIA+7FE4vY/CdTwAAIA+7FE4vQAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAIABQALAAIACwAIAAYACQAVAAYAFQASABQAFwARABQAEQAOAAwADwADAAwAAwAAAAcAEwANAAcADQABABYACgAEABYABAAQAI/CdbwAAIC+7FE4PY/CdbwAAIC+7FE4PY/CdbwAAIC+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIA+7FE4PY/CdbwAAIC+7FE4vY/CdbwAAIC+7FE4vY/CdbwAAIC+7FE4vY/CdbwAAIA+7FE4vY/CdbwAAIA+7FE4vY/CdbwAAIA+7FE4vY/CdTwAAIC+7FE4PY/CdTwAAIC+7FE4PY/CdTwAAIC+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIA+7FE4PY/CdTwAAIC+7FE4vY/CdTwAAIC+7FE4vY/CdTwAAIC+7FE4vY/CdTwAAIA+7FE4vY/CdTwAAIA+7FE4vY/CdTwAAIA+7FE4vQAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAALkeBb6PwnW9CtcjPLkeBb6PwnW9CtcjPLkeBb6PwnW9CtcjPLkeBb6PwnW9CtcjPLkeBb4K1yO9j8L1PLkeBb4K1yO9j8L1PLkeBb4K1yO9j8L1PLkeBb4K1yO9j8L1PJqZGb4K1yO9CtcjPJqZGb4K1yO9CtcjPJqZGb4K1yO9CtcjPJqZGb4K1yO9CtcjPLkeBb4K1yM9j8L1PLkeBb4K1yM9j8L1PLkeBb4K1yM9j8L1PLkeBb4K1yM9j8L1PLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT4K1yO9j8L1vLkeBT4K1yO9j8L1vLkeBT4K1yO9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j8L1PLkeBb4K1yM9j8L1PLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPLkeBb6PwnU9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPJqZGb4K1yM9CtcjPLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvLkeBb6PwnW9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvJqZGb4K1yO9CtcjvLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb4K1yO9j8L1vLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb6PwnU9CtcjvLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vLkeBb4K1yM9j8L1vJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvJqZGb4K1yM9CtcjvLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPLkeBT6PwnW9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPJqZGT4K1yO9CtcjPLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT4K1yO9j8L1PLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT6PwnU9CtcjPLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PLkeBT4K1yM9j8L1PJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPJqZGT4K1yM9CtcjPLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT6PwnW9CtcjvLkeBT4K1yO9j8L1vLkeBT4K1yO9j8L1vLkeBT4K1yO9j8L1vLkeBT4K1yO9j8L1vJqZGT4K1yO9CtcjvJqZGT4K1yO9CtcjvJqZGT4K1yO9CtcjvJqZGT4K1yO9CtcjvLkeBT6PwnU9CtcjvLkeBT6PwnU9CtcjvLkeBT6PwnU9CtcjvLkeBT6PwnU9CtcjvJqZGT4K1yM9CtcjvJqZGT4K1yM9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j8L1PJqZGb4K1yO9j8L1PJqZGb4K1yO9j8L1PHsULr4K1yO9CtcjPHsULr4K1yO9CtcjPHsULr4K1yO9CtcjPHsULr4K1yO9CtcjPJqZGb4K1yM9j8L1PJqZGb4K1yM9j8L1PJqZGb4K1yM9j8L1PJqZGb4K1yM9j8L1PJqZGb6PwnU9CtcjPJqZGb6PwnU9CtcjPJqZGb6PwnU9CtcjPJqZGb6PwnU9CtcjPHsULr4K1yM9CtcjPHsULr4K1yM9CtcjPHsULr4K1yM9CtcjPHsULr4K1yM9CtcjPJqZGb6PwnW9CtcjvJqZGb6PwnW9CtcjvJqZGb6PwnW9CtcjvJqZGb6PwnW9CtcjvHsULr4K1yO9CtcjvHsULr4K1yO9CtcjvHsULr4K1yO9CtcjvHsULr4K1yO9CtcjvJqZGb4K1yO9j8L1vJqZGb4K1yO9j8L1vJqZGb4K1yO9j8L1vJqZGb4K1yO9j8L1vJqZGb6PwnU9CtcjvJqZGb6PwnU9CtcjvJqZGb6PwnU9CtcjvJqZGb6PwnU9CtcjvJqZGb4K1yM9j8L1vJqZGb4K1yM9j8L1vJqZGb4K1yM9j8L1vJqZGb4K1yM9j8L1vHsULr4K1yM9CtcjvHsULr4K1yM9CtcjvHsULr4K1yM9CtcjvHsULr4K1yM9CtcjvJqZGT6PwnW9CtcjPJqZGT6PwnW9CtcjPJqZGT6PwnW9CtcjPJqZGT6PwnW9CtcjPHsULj4K1yO9CtcjPHsULj4K1yO9CtcjPHsULj4K1yO9CtcjPHsULj4K1yO9CtcjPJqZGT4K1yO9j8L1PJqZGT4K1yO9j8L1PJqZGT4K1yO9j8L1PJqZGT4K1yO9j8L1PJqZGT6PwnU9CtcjPJqZGT6PwnU9CtcjPJqZGT6PwnU9CtcjPJqZGT6PwnU9CtcjPJqZGT4K1yM9j8L1PJqZGT4K1yM9j8L1PJqZGT4K1yM9j8L1PJqZGT4K1yM9j8L1PHsULj4K1yM9CtcjPHsULj4K1yM9CtcjPHsULj4K1yM9CtcjPHsULj4K1yM9CtcjPJqZGT6PwnW9CtcjvJqZGT6PwnW9CtcjvJqZGT6PwnW9CtcjvJqZGT6PwnW9CtcjvJqZGT4K1yO9j8L1vJqZGT4K1yO9j8L1vJqZGT4K1yO9j8L1vJqZGT4K1yO9j8L1vHsULj4K1yO9CtcjvHsULj4K1yO9CtcjvHsULj4K1yO9CtcjvHsULj4K1yO9CtcjvJqZGT6PwnU9CtcjvJqZGT6PwnU9CtcjvJqZGT6PwnU9CtcjvJqZGT6PwnU9CtcjvHsULj4K1yM9CtcjvHsULj4K1yM9CtcjvHsULj4K1yM9CtcjvHsULj4K1yM9CtcjvJqZGT4K1yM9j8L1vJqZGT4K1yM9j8L1vJqZGT4K1yM9j8L1vJqZGT4K1yM9j8L1vAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNE786zRO/Os0TP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNE786zRM/Os0TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNE786zRM/Os0TP/QENb/0BDU/AAAAADrNE786zRM/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNE786zRO/Os0Tv/QENb/0BDW/AAAAADrNE786zRO/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNE786zRO/Os0Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNE786zRM/Os0Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNEz86zRO/Os0TP/QENT/0BDW/AAAAADrNEz86zRO/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNEz86zRO/Os0TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNEz86zRM/Os0TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNEz86zRO/Os0Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNEz86zRM/Os0Tv/QENT/0BDU/AAAAADrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1vx+Fq76PwnW9DNcjPB+Fq76PwnW9DNcjPB+Fq76PwnW9DNcjPB+Fq76PwnW9DNcjPB+Fq77rUTi9zczMPB+Fq77rUTi9zczMPB+Fq77rUTi9zczMPB+Fq77rUTi9zczMPDMzs77qUTi9C9cjPDMzs77qUTi9C9cjPDMzs77qUTi9C9cjPDMzs77qUTi9C9cjPB+Fq77rUTg9zczMPB+Fq77rUTg9zczMPB+Fq77rUTg9zczMPB+Fq77rUTg9zczMPB+Fq76PwnU9C9cjPB+Fq76PwnU9C9cjPB+Fq76PwnU9C9cjPB+Fq76PwnU9C9cjPDMzs77rUTg9CtcjPDMzs77rUTg9CtcjPDMzs77rUTg9CtcjPDMzs77rUTg9CtcjPB+Fq76PwnW9C9cjvB+Fq76PwnW9C9cjvB+Fq76PwnW9C9cjvB+Fq76PwnW9C9cjvDMzs77rUTi9CtcjvDMzs77rUTi9CtcjvDMzs77rUTi9CtcjvDMzs77rUTi9CtcjvB+Fq77rUTi9zczMvB+Fq77rUTi9zczMvB+Fq77rUTi9zczMvB+Fq77rUTi9zczMvB+Fq76PwnU9DNcjvB+Fq76PwnU9DNcjvB+Fq76PwnU9DNcjvB+Fq76PwnU9DNcjvB+Fq77rUTg9zczMvB+Fq77rUTg9zczMvB+Fq77rUTg9zczMvB+Fq77rUTg9zczMvDMzs77qUTg9C9cjvDMzs77qUTg9C9cjvDMzs77qUTg9C9cjvDMzs77qUTg9C9cjvB+Fqz6PwnW9C9cjPB+Fqz6PwnW9C9cjPB+Fqz6PwnW9C9cjPB+Fqz6PwnW9C9cjPDMzsz7rUTi9CtcjPDMzsz7rUTi9CtcjPDMzsz7rUTi9CtcjPDMzsz7rUTi9CtcjPB+Fqz7rUTi9zczMPB+Fqz7rUTi9zczMPB+Fqz7rUTi9zczMPB+Fqz7rUTi9zczMPB+Fqz6PwnU9DNcjPB+Fqz6PwnU9DNcjPB+Fqz6PwnU9DNcjPB+Fqz6PwnU9DNcjPB+Fqz7rUTg9zczMPB+Fqz7rUTg9zczMPB+Fqz7rUTg9zczMPB+Fqz7rUTg9zczMPDMzsz7qUTg9C9cjPDMzsz7qUTg9C9cjPDMzsz7qUTg9C9cjPDMzsz7qUTg9C9cjPB+Fqz6PwnW9DNcjvB+Fqz6PwnW9DNcjvB+Fqz6PwnW9DNcjvB+Fqz6PwnW9DNcjvB+Fqz7rUTi9zczMvB+Fqz7rUTi9zczMvB+Fqz7rUTi9zczMvB+Fqz7rUTi9zczMvDMzsz7qUTi9C9cjvDMzsz7qUTi9C9cjvDMzsz7qUTi9C9cjvDMzsz7qUTi9C9cjvB+Fqz6PwnU9C9cjvB+Fqz6PwnU9C9cjvB+Fqz6PwnU9C9cjvB+Fqz6PwnU9C9cjvDMzsz7rUTg9CtcjvDMzsz7rUTg9CtcjvDMzsz7rUTg9CtcjvDMzsz7rUTg9CtcjvB+Fqz7rUTg9zczMvB+Fqz7rUTg9zczMvB+Fqz7rUTg9zczMvB+Fqz7rUTg9zczMvAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPE79pzxO/28gTP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPE79pzxO/28gTP/QENb8AAAAA9AQ1P2nPE79pzxO/28gTP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPE7/byBM/ac8TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPE7/byBM/ac8TP/QENb/0BDU/AAAAAGnPE7/byBM/ac8TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPE7/byBO/ac8Tv/QENb/0BDW/AAAAAGnPE7/byBO/ac8Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPE7/byBO/ac8Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPE79pzxM/28gTv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1v2nPE79pzxM/28gTv/QENb8AAAAA9AQ1v2nPE79pzxM/28gTv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPEz/byBO/ac8TP/QENT/0BDW/AAAAAGnPEz/byBO/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPEz/byBO/ac8TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPEz9pzxM/28gTP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPEz9pzxM/28gTP/QENT8AAAAA9AQ1P2nPEz9pzxM/28gTP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPEz9pzxO/28gTv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPEz9pzxO/28gTv/QENT8AAAAA9AQ1v2nPEz9pzxO/28gTv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPEz/byBM/ac8Tv/QENT/0BDU/AAAAAGnPEz/byBM/ac8Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAA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C8sAvzzUSz+LqvE9aukXvzYAPAA3ADYANwAxAC8AIwAlAC8AJQApAD0AQwA+AD0APgA4AKYALgAoAKYAKACgAEQASwBGAEQARgA/AK4ApwChAK4AoQCoAEoAUgBNAEoATQBFALcArwCpALcAqQCxAFEAWABTAFEAUwBMAL8AtgCwAL8AsAC5AFkAYABbAFkAWwBUAMcAvgC4AMcAuADBAF8AZwBiAF8AYgBaAM4AxgDAAM4AwADIAGYAbgBpAGYAaQBhANcAzwDJANcAyQDRAG0AdABvAG0AbwBoAN8A1gDQAN8A0ADZAHUAewB2AHUAdgBwAOYA3gDYAOYA2ADgAHwAgwB+AHwAfgB3AO4A5wDhAO4A4QDoAIIAiQCEAIIAhAB9APYA7wDpAPYA6QDwAIoAkACLAIoAiwCFAP8A9wDxAP8A8QD5AJEAmACTAJEAkwCMAAcB/gD4AAcB+AABAZcAnwCaAJcAmgCSAA4BBgEAAQ4BAAEIAZ4ANQAwAJ4AMACZACIADwEJASIACQEkAAAAAgAqAAAAKgAmAB4AAQAnAB4AJwAKATQAIQAsADQALAA6AJwADAEgAJwAIAAzADsALQCkADsApABBAAMABACiAAMAogArAJsAMgA5ADkAQABHAEcATgBVAFUAXABjAGMAagBxAHEAeAB/AH8AhgCNAI0AlACbAJsAOQBHAEcAVQBjAGMAcQB/AH8AjQCbAJsARwBjAGMAfwCbAEIApQCsAEIArABIAEkArQC1AEkAtQBQAE8AtAC9AE8AvQBXAFYAvADFAFYAxQBeAF0AxADNAF0AzQBlAGQAzADVAGQA1QBsAGsA1ADcAGsA3AByAHMA3QDkAHMA5AB5AHoA5QDsAHoA7ACAAIEA7QD0AIEA9ACHAIgA9QD9AIgA/QCPAI4A/AAFAY4ABQGWAJUABAENAZUADQGdAAUABwCrAAUAqwCjAAYACACyAAYAsgCqAAkACgC6AAkAugCzAAsADQDDAAsAwwC7AAwADwDLAAwAywDCAA4AEADSAA4A0gDKABEAEgDaABEA2gDTABMAFADiABMA4gDbABUAFwDrABUA6wDjABYAGQDzABYA8wDqABgAGgD6ABgA+gDyABsAHQADARsAAwH7ABwAHwALARwACwECAetRuD12wPIxH4VrvuxRuD1aQrS9lJdZvuxRuD2siSa+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MwEvASsBOgExASsBMQE0AUkBUwFYAUkBWAFhAUsBXAFZAUsBWQFVAVEBYAFXAVEBVwFaAXoBhAGJAXoBiQGSAXwBjQGKAXwBigGGAYIBkQGIAYIBiAGLAZUBogGkAZUBpAGqAZkBpgGjAZkBowGhAZsBrAGlAZsBpQGoAbABugG+AbABvgHHAbIBwwHAAbIBwAG8AbgByAG/AbgBvwHBAcsB2AHaAcsB2gHgAc8B3AHZAc8B2QHXAdEB4gHbAdEB2wHeATMCPwJBAjMCQQJIAjcCRAJCAjcCQgJAAjkCSgJDAjkCQwJGAk4CWwJdAk4CXQJjAlICXwJcAlICXAJaAlQCZQJeAlQCXgJhArYCwwLFArYCxQLLAroCxwLEAroCxALCArwCzQLGArwCxgLJAtEC3gLgAtEC4ALmAtUC4gLfAtUC3wLdAtcC6ALhAtcC4QLkAvcCBAMGA/cCBgMMA/sCCAMFA/sCBQMDA/0CDgMHA/0CBwMKAygDNQM3AygDNwM9AywDOQM2AywDNgM0Ay4DPwM4Ay4DOAM7A0MDTwNRA0MDUQNYA0cDVANSA0cDUgNQA0kDWgNTA0kDUwNWA5wBBQAPAJwBDwCtAasBDQADAKsBAwCWAQYAIAAqAAYAKgAWABQAKAAeABQAHgALACEANgA/ACEAPwAxAC8APQA7AC8AOwAmADcAQgBLADcASwBAAD4ASQBHAD4ARwA8AEEATABVAEEAVQBKAEgAUwBRAEgAUQBGAE0AWABhAE0AYQBWAFQAXwBdAFQAXQBSAFcAYwBsAFcAbABgAF4AagBoAF4AaABcAGIAbQB2AGIAdgBrAGkAdAByAGkAcgBnAG4AeQCCAG4AggB3AHUAgAB+AHUAfgBzAHgAiACSAHgAkgCBAH8AkACGAH8AhgB9AIkApACtAIkArQCZAJcAqwChAJcAoQCOAKMAuQDCAKMAwgC0ALIAwAC+ALIAvgCpALoAxQDOALoAzgDDAMEAzADKAMEAygC/AMQAzwDYAMQA2ADNAMsA1gDUAMsA1ADJANAA2wDkANAA5ADZANcA4gDgANcA4ADVANoA5gDvANoA7wDjAOEA7QDrAOEA6wDfAOUA8AD5AOUA+QDuAOwA9wD1AOwA9QDqAPEA/AAFAfEABQH6APgAAgEAAfgAAAH2APsADAEVAfsAFQEEAQMBEwEJAQMBCQEBAQsBJgEwAQsBMAEcARoBLgEkARoBJAERAScBPAFFAScBRQE3ATUBRAFCATUBQgEsAT0BTAFWAT0BVgFGAUMBVAFKAUMBSgFBAU0BYgFrAU0BawFdAVsBagFoAVsBaAFSAWMBbQF2AWMBdgFsAWkBdQFzAWkBcwFnAW4BfgGHAW4BhwF3AXQBhQF7AXQBewFyAX0BnQGpAX0BqQGOAYwBpwGaAYwBmgGDAbEBzAHhAbEB4QG7Ab0B4wHSAb0B0gG0AdAB5gHrAdAB6wHdAd8B7QHoAd8B6AHTAecB8gH3AecB9wHsAe4B+QH0Ae4B9AHpAfEB/AEBAvEBAQL2AfgBAwL+AfgB/gHzAf0BCAINAv0BDQICAgQCDwIKAgQCCgL/AQcCEwIYAgcCGAIMAg4CGgIVAg4CFQIJAhICHQIiAhICIgIXAhkCJAIfAhkCHwIUAh4CKQIuAh4CLgIjAiUCMAIrAiUCKwIgAigCNAJJAigCSQItAi8CSwI6Ai8COgIqAjgCTwJkAjgCZAJFAkcCZgJWAkcCVgI7AlMCaQJuAlMCbgJgAmICcAJrAmICawJVAmoCdQJ6AmoCegJvAnECfAJ3AnECdwJsAnQCfwKEAnQChAJ5AnsChgKBAnsCgQJ2AoACiwKQAoACkAKFAocCkgKNAocCjQKCAooClgKbAooCmwKPApECnQKYApECmAKMApUCoAKlApUCpQKaApwCpwKiApwCogKXAqECqwKwAqECsAKmAqgCswKuAqgCrgKjAqwCtwLMAqwCzAKxArICzgK+ArICvgKtArsC0gLnArsC5wLIAsoC6QLYAsoC2AK9AtYC7QLyAtYC8gLjAuUC8wLuAuUC7gLZAuwC+AINA+wCDQPxAvQCDwP+AvQC/gLvAvwCEwMYA/wCGAMJAwsDGQMUAwsDFAP/AhIDHgMjAxIDIwMXAxoDJAMfAxoDHwMVAx0DKQM+Ax0DPgMiAyUDQAMwAyUDMAMgAy0DRANZAy0DWQM6AzwDWwNLAzwDSwMvA0gDuQHCAUgDwgFVA1cDxAGzAVcDswFKA6cAUQJYAqcAWAK1ALYAWQJMArYATAKeADIChACaADICmgA9Aj4CmwCLAD4CiwA1ApMBRQNOA5MBTgOgAZ8BTQNBA58BQQOXASYDeAGQASYDkAEzAzIDjwGBATIDgQErAw4BuALBAg4B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CtcjPK5HYb7NzEy9CtejO65HYb7NzEy9CtejO65HYb7NzEy9CtejO65HYb7NzEy9CtejO/YoXL7NzEw9CtcjPPYoXL7NzEw9CtcjPPYoXL7NzEw9CtcjPPYoXL7NzEw9CtcjPPYoXL6uR2E9CtejO/YoXL6uR2E9CtejO/YoXL6uR2E9CtejO/YoXL6uR2E9CtejO65HYb7NzEw9CtejO65HYb7NzEw9CtejO65HYb7NzEw9CtejO65HYb7NzEw9CtejO/YoXL6uR2G9Cteju/YoXL6uR2G9Cteju/YoXL6uR2G9Cteju/YoXL6uR2G9Cteju65HYb7NzEy9Cteju65HYb7NzEy9Cteju65HYb7NzEy9Cteju65HYb7NzEy9Cteju/YoXL7NzEy9CtcjvPYoXL7NzEy9CtcjvPYoXL7NzEy9CtcjvPYoXL7NzEy9CtcjvPYoXL6uR2E9Cteju/YoXL6uR2E9Cteju/YoXL6uR2E9Cteju/YoXL6uR2E9Cteju/YoXL7NzEw9CtcjvPYoXL7NzEw9CtcjvPYoXL7NzEw9CtcjvPYoXL7NzEw9CtcjvK5HYb7NzEw9Cteju65HYb7NzEw9Cteju65HYb7NzEw9Cteju65HYb7NzEw9Cteju/YoXD6uR2G9CtejO/YoXD6uR2G9CtejO/YoXD6uR2G9CtejO/YoXD6uR2G9CtejO65HYT7NzEy9CtejO65HYT7NzEy9CtejO65HYT7NzEy9CtejO65HYT7NzEy9CtejO/YoXD7NzEy9CtcjPPYoXD7NzEy9CtcjPPYoXD7NzEy9CtcjPPYoXD7NzEy9CtcjPPYoXD6uR2E9CtejO/YoXD6uR2E9CtejO/YoXD6uR2E9CtejO/YoXD6uR2E9CtejO/YoXD7NzEw9CtcjPPYoXD7NzEw9CtcjPPYoXD7NzEw9CtcjPPYoXD7NzEw9CtcjPK5HYT7NzEw9CtejO65HYT7NzEw9CtejO65HYT7NzEw9CtejO65HYT7NzEw9CtejO/YoXD6uR2G9Cteju/YoXD6uR2G9Cteju/YoXD6uR2G9Cteju/YoXD6uR2G9Cteju/YoXD7NzEy9CtcjvPYoXD7NzEy9CtcjvPYoXD7NzEy9CtcjvPYoXD7NzEy9CtcjvK5HYT7NzEy9Cteju65HYT7NzEy9Cteju65HYT7NzEy9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AAAAADrNE786zRM/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNE786zRO/Os0Tv/QENb/0BDW/AAAAADrNE786zRO/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNE786zRO/Os0Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNE786zRM/Os0Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNEz86zRO/Os0TP/QENT/0BDW/AAAAADrNEz86zRO/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNEz86zRO/Os0TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNEz86zRM/Os0TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNEz86zRO/Os0Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNEz86zRM/Os0Tv/QENT/0BDU/AAAAADrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v4/Cdb3NzEy9CtejPI/Cdb3NzEy9CtejPI/Cdb3NzEy9CtejPI/Cdb3NzEy9CtejPI/Cdb2QwvW8CtcjPY/Cdb2QwvW8CtcjPY/Cdb2QwvW8CtcjPY/Cdb2QwvW8CtcjPQrXo72QwvW8CtejPArXo72QwvW8CtejPArXo72QwvW8CtejPArXo72QwvW8CtejPI/Cdb2QwvU8CtcjPY/Cdb2QwvU8CtcjPY/Cdb2QwvU8CtcjPY/Cdb2QwvU8CtcjPY/Cdb3NzEw9CtejPI/Cdb3NzEw9CtejPI/Cdb3NzEw9CtejPI/Cdb3NzEw9CtejPArXo72QwvU8CtejPArXo72QwvU8CtejPArXo72QwvU8CtejPArXo72QwvU8CtejPI/Cdb3NzEy9CtejvI/Cdb3NzEy9CtejvI/Cdb3NzEy9CtejvI/Cdb3NzEy9CtejvArXo72QwvW8CtejvArXo72QwvW8CtejvArXo72QwvW8CtejvArXo72QwvW8CtejvI/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvQrXo72QwvU8CtejvArXo72QwvU8CtejvArXo72QwvU8CtejvArXo72QwvU8CtejvI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPI/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPQrXoz2QwvU8CtejPArXoz2QwvU8CtejPArXoz2QwvU8CtejPArXoz2QwvU8CtejPI/CdT3NzEy9CtejvI/CdT3NzEy9CtejvI/CdT3NzEy9CtejvI/CdT3NzEy9CtejvI/CdT2QwvW8CtcjvY/CdT2QwvW8CtcjvY/CdT2QwvW8CtcjvY/CdT2QwvW8CtcjvQrXoz2QwvW8CtejvArXoz2QwvW8CtejvArXoz2QwvW8CtejvArXoz2QwvW8CtejvI/CdT3NzEw9CtejvI/CdT3NzEw9CtejvI/CdT3NzEw9CtejvI/CdT3NzEw9CtejvArXoz2QwvU8CtejvArXoz2QwvU8CtejvArXoz2QwvU8CtejvArXoz2QwvU8CtejvI/CdT2QwvU8CtcjvY/CdT2QwvU8CtcjvY/CdT2QwvU8CtcjvY/CdT2QwvU8CtcjvQAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNE786zRO/Os0TP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNE786zRM/Os0TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNE786zRM/Os0TP/QENb/0BDU/AAAAADrNE786zRM/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNE786zRO/Os0Tv/QENb/0BDW/AAAAADrNE786zRO/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNE786zRO/Os0Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNE786zRM/Os0Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNEz86zRO/Os0TP/QENT/0BDW/AAAAADrNEz86zRO/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNEz86zRO/Os0TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNEz86zRM/Os0TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNEz86zRO/Os0Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNEz86zRM/Os0Tv/QENT/0BDU/AAAAADrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v4/Cdb3NzEy9CtejPI/Cdb3NzEy9CtejPI/Cdb3NzEy9CtejPI/Cdb3NzEy9CtejPI/Cdb2QwvW8CtcjPY/Cdb2QwvW8CtcjPY/Cdb2QwvW8CtcjPY/Cdb2QwvW8CtcjPQrXo72QwvW8CtejPArXo72QwvW8CtejPArXo72QwvW8CtejPArXo72QwvW8CtejPI/Cdb2QwvU8CtcjPY/Cdb2QwvU8CtcjPY/Cdb2QwvU8CtcjPY/Cdb2QwvU8CtcjPY/Cdb3NzEw9CtejPI/Cdb3NzEw9CtejPI/Cdb3NzEw9CtejPI/Cdb3NzEw9CtejPArXo72QwvU8CtejPArXo72QwvU8CtejPArXo72QwvU8CtejPArXo72QwvU8CtejPI/Cdb3NzEy9CtejvI/Cdb3NzEy9CtejvI/Cdb3NzEy9CtejvI/Cdb3NzEy9CtejvArXo72QwvW8CtejvArXo72QwvW8CtejvArXo72QwvW8CtejvArXo72QwvW8CtejvI/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb2QwvW8CtcjvY/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb3NzEw9CtejvI/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvY/Cdb2QwvU8CtcjvQrXo72QwvU8CtejvArXo72QwvU8CtejvArXo72QwvU8CtejvArXo72QwvU8CtejvI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPI/CdT3NzEy9CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPArXoz2QwvW8CtejPI/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT2QwvW8CtcjPY/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT3NzEw9CtejPI/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPY/CdT2QwvU8CtcjPQrXoz2QwvU8CtejPArXoz2QwvU8CtejPArXoz2QwvU8CtejPArXoz2QwvU8CtejPI/CdT3NzEy9CtejvI/CdT3NzEy9CtejvI/CdT3NzEy9CtejvI/CdT3NzEy9CtejvI/CdT2QwvW8CtcjvY/CdT2QwvW8CtcjvY/CdT2QwvW8CtcjvY/CdT2QwvW8CtcjvQrXoz2QwvW8CtejvArXoz2QwvW8CtejvArXoz2QwvW8CtejvArXoz2QwvW8CtejvI/CdT3NzEw9CtejvI/CdT3NzEw9CtejvI/CdT3NzEw9CtejvI/CdT3NzEw9CtejvArXoz2QwvU8CtejvArXoz2QwvU8CtejvArXoz2QwvU8CtejvArXoz2QwvU8CtejvI/CdT2QwvU8CtcjvY/CdT2QwvU8CtcjvY/CdT2QwvU8CtcjvY/CdT2QwvU8CtcjvQAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNE786zRO/Os0TP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1PzrNE786zRO/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNE786zRM/Os0TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNE786zRM/Os0TP/QENb/0BDU/AAAAADrNE786zRM/Os0TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNE786zRO/Os0Tv/QENb/0BDW/AAAAADrNE786zRO/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNE786zRO/Os0Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNE786zRM/Os0Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1vzrNE786zRM/Os0Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAADrNEz86zRO/Os0TP/QENT/0BDW/AAAAADrNEz86zRO/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PzrNEz86zRO/Os0TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAADrNEz86zRM/Os0TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1PzrNEz86zRM/Os0TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAADrNEz86zRO/Os0Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1vzrNEz86zRO/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAADrNEz86zRM/Os0Tv/QENT/0BDU/AAAAADrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vzrNEz86zRM/Os0Tv/QENT8AAAAA9AQ1v7gehb0pXA+9CtejO7gehb0pXA+9CtejO7gehb0pXA+9CtejO7gehb0pXA89CtejO7gehb0pXA89CtejO7gehb0pXA89CtejO7gehb0pXA+9Cteju7gehb0pXA+9Cteju7gehb0pXA+9Cteju7gehb0pXA89Cteju7gehb0pXA89Cteju7gehb0pXA89Cteju7gehT0pXA+9CtejO7gehT0pXA+9CtejO7gehT0pXA+9CtejO7gehT0pXA89CtejO7gehT0pXA89CtejO7gehT0pXA89CtejO7gehT0pXA+9Cteju7gehT0pXA+9Cteju7gehT0pXA+9Cteju7gehT0pXA89Cteju7gehT0pXA89Cteju7gehT0pXA89CtejuwAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAALgehb0pXA+9CtejO7gehb0pXA+9CtejO7gehb0pXA+9CtejO7gehb0pXA89CtejO7gehb0pXA89CtejO7gehb0pXA89CtejO7gehb0pXA+9Cteju7gehb0pXA+9Cteju7gehb0pXA+9Cteju7gehb0pXA89Cteju7gehb0pXA89Cteju7gehb0pXA89Cteju7gehT0pXA+9CtejO7gehT0pXA+9CtejO7gehT0pXA+9CtejO7gehT0pXA89CtejO7gehT0pXA89CtejO7gehT0pXA89CtejO7gehT0pXA+9Cteju7gehT0pXA+9Cteju7gehT0pXA+9Cteju7gehT0pXA89Cteju7gehT0pXA89Cteju7gehT0pXA89CtejuwAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIC/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAAAAIA/AAAAAAAAgD8AAAAAAAAAAJmZWb8pXI+9DNejPJmZWb8pXI+9DNejPJmZWb8pXI+9DNejPJmZWb8pXI+9DNejPJmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PQrXY7+QwvW8CtejPArXY7+QwvW8CtejPArXY7+QwvW8CtejPArXY7+QwvW8CtejPJmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb8pXI89DNejPJmZWb8pXI89DNejPJmZWb8pXI89DNejPJmZWb8pXI89DNejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvJmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vZmZWb+SwvU8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DNejPJmZWb8pXI+9DNejPJmZWb8pXI+9DNejPJmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PZmZWb+SwvW8j8J1PQrXY7+QwvW8CtejPArXY7+QwvW8CtejPArXY7+QwvW8CtejPArXY7+QwvW8CtejPJmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb+SwvU8j8J1PZmZWb8pXI89DNejPJmZWb8pXI89DNejPJmZWb8pXI89DNejPJmZWb8pXI89DNejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPArXY7+QwvU8CtejPJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvJmZWb8pXI+9DNejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvArXY7+QwvW8CtejvJmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb+SwvW8j8J1vZmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb8pXI89DNejvJmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vZmZWb+SwvU8j8J1vQrXY7+QwvU8CtejvArXY7+QwvU8CtejvArXY7+QwvU8CtejvArXY7+QwvU8CtejvJmZWT8pXI+9DNejPJmZWT8pXI+9DNejPJmZWT8pXI+9DNejPJmZWT8pXI+9DNejPArXYz+QwvW8CtejPArXYz+QwvW8CtejPArXYz+QwvW8CtejPArXYz+QwvW8CtejPJmZWT+SwvW8j8J1PZmZWT+SwvW8j8J1PZmZWT+SwvW8j8J1PZmZWT+SwvW8j8J1PZmZWT8pXI89DNejPJmZWT8pXI89DNejPJmZWT8pXI89DNejPJmZWT8pXI89DNejPJmZWT+SwvU8j8J1PZmZWT+SwvU8j8J1PZmZWT+SwvU8j8J1PZmZWT+SwvU8j8J1PQrXYz+QwvU8CtejPArXYz+QwvU8CtejPArXYz+QwvU8CtejPArXYz+QwvU8CtejPJmZWT8pXI+9DNejvJmZWT8pXI+9DNejvJmZWT8pXI+9DNejvJmZWT8pXI+9DNejvJmZWT+SwvW8j8J1vZmZWT+SwvW8j8J1vZmZWT+SwvW8j8J1vZmZWT+SwvW8j8J1vQrXYz+QwvW8CtejvArXYz+QwvW8CtejvArXYz+QwvW8CtejvArXYz+QwvW8CtejvJmZWT8pXI89DNejvJmZWT8pXI89DNejvJmZWT8pXI89DNejvJmZWT8pXI89DNejvArXYz+QwvU8CtejvArXYz+QwvU8CtejvArXYz+QwvU8CtejvArXYz+QwvU8CtejvJmZWT+SwvU8j8J1vZmZWT+SwvU8j8J1vZmZWT+SwvU8j8J1vZmZWT+SwvU8j8J1vQAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAArLE78KyxO/mdETP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PwrLE78KyxO/mdETP/QENb8AAAAA9AQ1PwrLE78KyxO/mdETP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PwrLE78KyxM/mdETP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAArLE78KyxM/mdETP/QENb/0BDU/AAAAAArLE78KyxM/mdETP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAArLE78KyxO/mdETv/QENb/0BDW/AAAAAArLE78KyxO/mdETv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vwrLE78KyxO/mdETv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAArLE78KyxM/mdETv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vwrLE78KyxM/mdETv/QENb8AAAAA9AQ1vwrLE78KyxM/mdETv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAArLEz8KyxO/mdETP/QENT/0BDW/AAAAAArLEz8KyxO/mdETP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1PwrLEz8KyxO/mdETP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAArLEz8KyxM/mdETP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1PwrLEz8KyxM/mdETP/QENT8AAAAA9AQ1PwrLEz8KyxM/mdETP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAArLEz8KyxO/mdETv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1vwrLEz8KyxO/mdETv/QENT8AAAAA9AQ1vwrLEz8KyxO/mdETv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAArLEz8KyxM/mdETv/QENT/0BDU/AAAAAArLEz8KyxM/mdETv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1vwrLEz8KyxM/mdETv/QENT8AAAAA9AQ1vwzXo7sK1yO9rkdBPwzXo7sK1yO9rkdBPwzXo7sK1yO9rkdBPwzXo7sK1yO9rkdBPwzXo7sK16O8ZmZGPwzXo7sK16O8ZmZGPwzXo7sK16O8ZmZGPwzXo7sK16O8ZmZGP83MzLwK16O8rkdBP83MzLwK16O8rkdBP83MzLwK16O8rkdBP83MzLwK16O8rkdBPwzXo7sK16M8ZmZGPwzXo7sK16M8ZmZGPwzXo7sK16M8ZmZGPwzXo7sK16M8ZmZGPxDXo7sK1yM9rkdBPxDXo7sK1yM9rkdBPxDXo7sK1yM9rkdBPxDXo7sK1yM9rkdBP83MzLwK16M8rkdBP83MzLwK16M8rkdBP83MzLwK16M8rkdBP83MzLwK16M8rkdBPxDXo7sK1yO9rkdBvxDXo7sK1yO9rkdBvxDXo7sK1yO9rkdBvxDXo7sK1yO9rkdBv83MzLwK16O8rkdBv83MzLwK16O8rkdBv83MzLwK16O8rkdBv83MzLwK16O8rkdBvwzXo7sK16O8ZmZGvwzXo7sK16O8ZmZGvwzXo7sK16O8ZmZGvwzXo7sK16O8ZmZGvwzXo7sK1yM9rkdBvwzXo7sK1yM9rkdBvwzXo7sK1yM9rkdBvwzXo7sK1yM9rkdBvwzXo7sK16M8ZmZGvwzXo7sK16M8ZmZGvwzXo7sK16M8ZmZGvwzXo7sK16M8ZmZGv83MzLwK16M8rkdBv83MzLwK16M8rkdBv83MzLwK16M8rkdBv83MzLwK16M8rkdBvxDXozsK1yO9rkdBPxDXozsK1yO9rkdBPxDXozsK1yO9rkdBPxDXozsK1yO9rkdBP83MzDwK16O8rkdBP83MzDwK16O8rkdBP83MzDwK16O8rkdBP83MzDwK16O8rkdBPwzXozsK16O8ZmZGPwzXozsK16O8ZmZGPwzXozsK16O8ZmZGPwzXozsK16O8ZmZGPwzXozsK1yM9rkdBPwzXozsK1yM9rkdBPwzXozsK1yM9rkdBPwzXozsK1yM9rkdBPwzXozsK16M8ZmZGPwzXozsK16M8ZmZGPwzXozsK16M8ZmZGPwzXozsK16M8ZmZGP83MzDwK16M8rkdBP83MzDwK16M8rkdBP83MzDwK16M8rkdBP83MzDwK16M8rkdBPwzXozsK1yO9rkdBvwzXozsK1yO9rkdBvwzXozsK1yO9rkdBvwzXozsK1yO9rkdBvwzXozsK16O8ZmZGvwzXozsK16O8ZmZGvwzXozsK16O8ZmZGvwzXozsK16O8ZmZGv83MzDwK16O8rkdBv83MzDwK16O8rkdBv83MzDwK16O8rkdBv83MzDwK16O8rkdBvxDXozsK1yM9rkdBvxDXozsK1yM9rkdBvxDXozsK1yM9rkdBvxDXozsK1yM9rkdBv83MzDwK16M8rkdBv83MzDwK16M8rkdBv83MzDwK16M8rkdBv83MzDwK16M8rkdBvwzXozsK16M8ZmZGvwzXozsK16M8ZmZGvwzXozsK16M8ZmZGvwzXozsK16M8ZmZGvwAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPE7/byBO/ac8TP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPE7/byBO/ac8TP/QENb8AAAAA9AQ1P2nPE7/byBO/ac8TP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPE7/byBM/ac8TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPE7/byBM/ac8TP/QENb/0BDU/AAAAAGnPE7/byBM/ac8TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPE7/byBO/ac8Tv/QENb/0BDW/AAAAAGnPE7/byBO/ac8Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPE7/byBO/ac8Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPE7/byBM/ac8Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1v2nPE7/byBM/ac8Tv/QENb8AAAAA9AQ1v2nPE7/byBM/ac8Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPEz/byBO/ac8TP/QENT/0BDW/AAAAAGnPEz/byBO/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPEz/byBO/ac8TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPEz/byBM/ac8TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPEz/byBM/ac8TP/QENT8AAAAA9AQ1P2nPEz/byBM/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPEz/byBO/ac8Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPEz/byBO/ac8Tv/QENT8AAAAA9AQ1v2nPEz/byBO/ac8Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPEz/byBM/ac8Tv/QENT/0BDU/AAAAAGnPEz/byBM/ac8Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1v2nPEz/byBM/ac8Tv/QENT8AAAAA9AQ1vwzXo7sK1yO9rkdBPwzXo7sK1yO9rkdBPwzXo7sK1yO9rkdBPwzXo7sK1yO9rkdBPwzXo7sK16O8ZmZGPwzXo7sK16O8ZmZGPwzXo7sK16O8ZmZGPwzXo7sK16O8ZmZGP83MzLwK16O8rkdBP83MzLwK16O8rkdBP83MzLwK16O8rkdBP83MzLwK16O8rkdBPwzXo7sK16M8ZmZGPwzXo7sK16M8ZmZGPwzXo7sK16M8ZmZGPwzXo7sK16M8ZmZGPxDXo7sK1yM9rkdBPxDXo7sK1yM9rkdBPxDXo7sK1yM9rkdBPxDXo7sK1yM9rkdBP83MzLwK16M8rkdBP83MzLwK16M8rkdBP83MzLwK16M8rkdBP83MzLwK16M8rkdBPxDXo7sK1yO9rkdBvxDXo7sK1yO9rkdBvxDXo7sK1yO9rkdBvxDXo7sK1yO9rkdBv83MzLwK16O8rkdBv83MzLwK16O8rkdBv83MzLwK16O8rkdBv83MzLwK16O8rkdBvwzXo7sK16O8ZmZGvwzXo7sK16O8ZmZGvwzXo7sK16O8ZmZGvwzXo7sK16O8ZmZGvwzXo7sK1yM9rkdBvwzXo7sK1yM9rkdBvwzXo7sK1yM9rkdBvwzXo7sK1yM9rkdBvwzXo7sK16M8ZmZGvwzXo7sK16M8ZmZGvwzXo7sK16M8ZmZGvwzXo7sK16M8ZmZGv83MzLwK16M8rkdBv83MzLwK16M8rkdBv83MzLwK16M8rkdBv83MzLwK16M8rkdBvxDXozsK1yO9rkdBPxDXozsK1yO9rkdBPxDXozsK1yO9rkdBPxDXozsK1yO9rkdBP83MzDwK16O8rkdBP83MzDwK16O8rkdBP83MzDwK16O8rkdBP83MzDwK16O8rkdBPwzXozsK16O8ZmZGPwzXozsK16O8ZmZGPwzXozsK16O8ZmZGPwzXozsK16O8ZmZGPwzXozsK1yM9rkdBPwzXozsK1yM9rkdBPwzXozsK1yM9rkdBPwzXozsK1yM9rkdBPwzXozsK16M8ZmZGPwzXozsK16M8ZmZGPwzXozsK16M8ZmZGPwzXozsK16M8ZmZGP83MzDwK16M8rkdBP83MzDwK16M8rkdBP83MzDwK16M8rkdBP83MzDwK16M8rkdBPwzXozsK1yO9rkdBvwzXozsK1yO9rkdBvwzXozsK1yO9rkdBvwzXozsK1yO9rkdBvwzXozsK16O8ZmZGvwzXozsK16O8ZmZGvwzXozsK16O8ZmZGvwzXozsK16O8ZmZGv83MzDwK16O8rkdBv83MzDwK16O8rkdBv83MzDwK16O8rkdBv83MzDwK16O8rkdBvxDXozsK1yM9rkdBvxDXozsK1yM9rkdBvxDXozsK1yM9rkdBvxDXozsK1yM9rkdBv83MzDwK16M8rkdBv83MzDwK16M8rkdBv83MzDwK16M8rkdBv83MzDwK16M8rkdBvwzXozsK16M8ZmZGvwzXozsK16M8ZmZGvwzXozsK16M8ZmZGvwzXozsK16M8ZmZGvwAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPE7/byBO/ac8TP/QENb/0BDW/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPE7/byBO/ac8TP/QENb8AAAAA9AQ1P2nPE7/byBO/ac8TP/QENb8AAAAA9AQ1P/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPE7/byBM/ac8TP/QENb8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPE7/byBM/ac8TP/QENb/0BDU/AAAAAGnPE7/byBM/ac8TP/QENb8AAAAA9AQ1P/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPE7/byBO/ac8Tv/QENb/0BDW/AAAAAGnPE7/byBO/ac8Tv/QENb8AAAAA9AQ1v/QENb/0BDW/AAAAAAAAgL8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPE7/byBO/ac8Tv/QENb8AAAAA9AQ1vwAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPE7/byBM/ac8Tv/QENb/0BDU/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1v2nPE7/byBM/ac8Tv/QENb8AAAAA9AQ1v2nPE7/byBM/ac8Tv/QENb8AAAAA9AQ1v/QENb/0BDU/AAAAAAAAgL8AAAAAAAAAAAAAAAD0BDW/9AQ1PwAAAAAAAIC/AAAAAGnPEz/byBO/ac8TP/QENT/0BDW/AAAAAGnPEz/byBO/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAPwAAAAD0BDW/9AQ1P2nPEz/byBO/ac8TP/QENT8AAAAA9AQ1PwAAAAD0BDU/9AQ1PwAAAAAAAIA/AAAAAGnPEz/byBM/ac8TP/QENT/0BDU/AAAAAAAAAAAAAAAAAACAPwAAAAD0BDU/9AQ1P2nPEz/byBM/ac8TP/QENT8AAAAA9AQ1P2nPEz/byBM/ac8TP/QENT8AAAAA9AQ1P/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDW/9AQ1vwAAAAAAAIC/AAAAAGnPEz/byBO/ac8Tv/QENT/0BDW/AAAAAAAAAAAAAAAAAACAvwAAAAD0BDW/9AQ1v2nPEz/byBO/ac8Tv/QENT8AAAAA9AQ1v2nPEz/byBO/ac8Tv/QENT8AAAAA9AQ1v/QENT/0BDW/AAAAAAAAgD8AAAAAAAAAAAAAAAD0BDU/9AQ1vwAAAAAAAIA/AAAAAGnPEz/byBM/ac8Tv/QENT/0BDU/AAAAAGnPEz/byBM/ac8Tv/QENT8AAAAA9AQ1v/QENT/0BDU/AAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAACAvwAAAAD0BDU/9AQ1v2nPEz/byBM/ac8Tv/QENT8AAAAA9AQ1vw==";var $c=30,_h={wide:{W:1920,H:1080,SCENE_H:850,pad:64,label:28,head:54,body:34,headY:122,bodyY:172,bodyLH:42,wrap:1380,fov:38},mobile:{W:1080,H:1350,SCENE_H:1090,pad:56,label:26,head:46,body:30,headY:108,bodyY:156,bodyLH:38,wrap:968,fov:48}},Rt=_h.wide,It=Rt.W,$n=Rt.H,Lt=Rt.SCENE_H,Br=(i,e=0,t=1)=>Math.max(e,Math.min(t,i)),nl=i=>(i=Br(i),i*i*(3-2*i));var el=4021,js=()=>(el=Math.imul(el,1664525)+1013904223>>>0,el/4294967296),kv=Number(new URLSearchParams(location.search).get("hi")||4e5),Vv=Number(new URLSearchParams(location.search).get("lo")||9e3),Ur=new URLSearchParams(location.search).get("cam")==="top",tl=7.6,bh=8;function Ch(i){return 9-3.5*nl((i-13)/4.5)+2*nl((i-20.5)/6)}function Xv(i,e){let t=0,n=Math.ceil(e/.005),s=e/Math.max(1,n);for(let r=0;r<n;r++)t+=i((r+.5)*s)*s;return t}var il=i=>Xv(Ch,i),Sh=19,Eh=8,Hv=il(Sh)+Eh*Sh,Dh=i=>Hv-Eh*i,Va=4.1,ki=(()=>{let i=10;for(;Dh(i)-il(i)>3*Va;)i+=.01;return+i.toFixed(2)})(),Ph=[[0,"Fjernlys p\xE5 m\xF8rk vei","Fjernlyset lyser langt frem og gir best oversikt n\xE5r veien er fri."],[6.3,"Blend ned i god tid","Senest n\xE5r lyskjeglene m\xF8tes. Fjernlyset m\xE5 ikke blende andre trafikanter."],[12.5,"N\xE6rlys gir kortere sikt","Senk farten, s\xE5 du rekker \xE5 reagere og bremse."],[15.3,"Se mot h\xF8yre kantlinje","Ikke se inn i lysene til den m\xF8tende."],[ki,"Blend opp igjen","N\xE5r dere er ca. to billengder fra hverandre, blender ikke fjernlyset lenger."],[22.5,"Fjernlys n\xE5r veien er fri","Blend ned igjen for m\xF8tende, og n\xE5r du kj\xF8rer bak andre."]];async function Yv(){let i=document.getElementById("film");i.width=It,i.height=$n;let e=i.getContext("2d",{alpha:!1}),t=new Ba({antialias:!0,preserveDrawingBuffer:!0});t.setSize(It,Lt),t.setPixelRatio(1),t.outputColorSpace=ht,t.toneMapping=br,t.toneMappingExposure=1.15,t.shadowMap.enabled=!0,t.shadowMap.type=zi;let n=new rr;{let E=document.createElement("canvas");E.width=4,E.height=256;let _=E.getContext("2d"),R=_.createLinearGradient(0,0,0,256);R.addColorStop(0,"#040812"),R.addColorStop(.7,"#0c1726"),R.addColorStop(1,"#16243a"),_.fillStyle=R,_.fillRect(0,0,4,256);let N=new Ii(E);N.colorSpace=ht,n.background=N}n.fog=new sr("#0d1724",140,620);let s=new xt(38,It/Lt,.1,900);n.add(new Mr("#5d7396","#10160f",.55));let r=new Oi("#9fb4d8",.32);r.position.set(-60,80,-40),n.add(r);let o=(E,_={})=>new Hn({color:E,roughness:.9,..._}),a=o("#3e444a",{roughness:.85}),A=o("#6d6c62"),c=o("#3f5a33",{flatShading:!0}),l=o("#f2f1e8",{roughness:.45}),h=o("#f2c230",{roughness:.45}),u=(E,_,R=n)=>{let N=new Pt(E,_);return N.receiveShadow=!0,R.add(N),N};function d(E,_,R,N,H,q){let F=new Ri(N,_-E,1,Math.max(1,Math.ceil((_-E)/4)));F.rotateX(-Math.PI/2);let V=u(F,H);return V.position.set(R,q,-(E+_)/2),V}let g=3.7,x=1.85;d(-80,700,0,g*2+1.6,A,.01),d(-80,700,0,g*2,a,.03);for(let E of[-1,1])d(-80,700,E*(g-.2),.15,l,.045);for(let E=-80;E<700;E+=12)d(E,E+3,0,.15,h,.045);{let E=[],R=(ie,xe)=>{let be=Math.abs(ie);return-.1+nl((be-9)/18)*(1.2+1.6*Math.sin(xe*.021+ie*.03)+2.4*Math.sin(ie*.012-xe*.008))};for(let ie=-100;ie<720;ie+=6)for(let xe=-220;xe<220;xe+=6)for(let be of[[[xe,ie],[xe+6,ie],[xe,ie+6]],[[xe+6,ie],[xe+6,ie+6],[xe,ie+6]]])for(let[Ie,Q]of be)E.push(Ie,R(Ie,Q),-Q);let N=new Tt;N.setAttribute("position",new yt(E,3)),N.computeVertexNormals(),u(N,c);let H=o("#4a3f2e"),q=o("#2f4a2c",{flatShading:!0}),F=70,V=new ui(new Ss(.15,.2,1,5),H,F),$=new ui(new Ps(1,1,6),q,F),le=new it;for(let ie=0;ie<F;ie++){let xe=-40+js()*680,be=ie%2?1:-1,Ie=be*(10+js()*45),Q=R(Ie,xe),K=4+js()*4;le.position.set(Ie,Q+K*.15,-xe),le.scale.set(1,K*.3,1),le.updateMatrix(),V.setMatrixAt(ie,le.matrix),le.position.set(Ie,Q+K*.6,-xe),le.scale.set(K*.28,K*.8,K*.28),le.updateMatrix(),$.setMatrixAt(ie,le.matrix)}V.castShadow=$.castShadow=!0,V.receiveShadow=$.receiveShadow=!0,n.add(V,$);for(let ie=0;ie<10;ie++)u(new Ps(60+js()*50,30+js()*40,5),o("#0f1a22",{flatShading:!0})).position.set(-300+ie*70,0,-760-js()*80)}function p(E){let R=document.createElement("canvas");R.width=R.height=256;let N=R.getContext("2d");if(N.fillStyle="#000",N.fillRect(0,0,256,256),E==="low"){N.save(),N.beginPath(),N.moveTo(0,134.144),N.lineTo(256*.52,134.144),N.lineTo(256*.64,134.144-256*.035),N.lineTo(256,134.144-256*.035),N.lineTo(256,256),N.lineTo(0,256),N.closePath(),N.clip(),N.translate(256*.56,134.144),N.scale(1.25,.8);let F=N.createRadialGradient(0,0,0,0,0,256*.42);F.addColorStop(0,"#fff"),F.addColorStop(.5,"#bbb"),F.addColorStop(1,"#000"),N.fillStyle=F,N.fillRect(-256,-256,2*256,2*256),N.restore()}else{let q=N.createRadialGradient(128,128,0,128,128,128);q.addColorStop(0,"#fff"),q.addColorStop(.3,"#d0d0d0"),q.addColorStop(.7,"#444"),q.addColorStop(1,"#000"),N.fillStyle=q,N.fillRect(0,0,256,256);let F=N.createLinearGradient(0,256*.5,0,256);F.addColorStop(0,"rgba(0,0,0,0)"),F.addColorStop(.35,"rgba(0,0,0,.55)"),F.addColorStop(1,"rgba(0,0,0,.85)"),N.fillStyle=F,N.fillRect(0,256*.5,256,256*.5)}let H=new Ii(R);return H.colorSpace=ht,H}let f=p("low"),P=p("high"),D=(()=>{let E=document.createElement("canvas");E.width=E.height=128;let _=E.getContext("2d"),R=_.createRadialGradient(64,64,0,64,64,64);return R.addColorStop(0,"rgba(255,250,235,1)"),R.addColorStop(.18,"rgba(255,240,210,.85)"),R.addColorStop(.5,"rgba(255,220,170,.18)"),R.addColorStop(1,"rgba(255,220,170,0)"),_.fillStyle=R,_.fillRect(0,0,128,128),new Ii(E)})(),y=Uint8Array.from(atob(wh),E=>E.charCodeAt(0)),T=(await new Wa().parseAsync(y.buffer,"")).scene;function w(E){let _=T.clone(!0),R=[];_.traverse(F=>{F.name.startsWith("Hjul_")&&R.push(F),F.isMesh&&(F.castShadow=!0,F.receiveShadow=!0,F.material=F.material.clone(),F.material.name==="Lakk"&&(F.material.color.set(E),F.material.emissive=new De(E),F.material.emissiveIntensity=.28),F.material.name==="Frontlys"&&(F.material.emissive=new De("#fff4dc"),F.material.emissiveIntensity=2),F.material.name==="Baklys"&&(F.material.emissive=new De("#ff2a1a"),F.material.emissiveIntensity=1.4))});let N=new Ni("#fff3dd",0,0,.62,.35,2);N.position.set(0,.68,2),N.castShadow=!0,N.shadow.mapSize.set(2048,2048),N.shadow.camera.near=1,N.shadow.camera.far=140,N.shadow.bias=-.0015,N.shadow.normalBias=.06,N.shadow.radius=3;let H=new it;_.add(N,H),N.target=H;let q=[-.58,.58].map(F=>{let V=new Ar(new vs({map:D,blending:wr,depthWrite:!1,transparent:!0,fog:!1}));return V.position.set(F,.68,2.12),_.add(V),V});return n.add(_),{obj:_,wheels:R,spot:N,target:H,glows:q}}let C=w("#1e93db"),v=w("#d4483b");function b(E,_){E.spot.map=_?P:f,_?(E.spot.intensity=kv,E.spot.angle=.34,E.spot.distance=115,E.target.position.set(0,.68-.6,100)):(E.spot.intensity=Vv,E.spot.angle=.55,E.spot.distance=70,E.target.position.set(0,.68,60))}function I(E,_,R,N,H){E.obj.position.set(R,.065,(N>0,-_)),E.obj.rotation.y=N>0?Math.PI:0,E.wheels.forEach(q=>q.rotation.x=_/.34*(N>0?1:-1))}function U(E,_,R,N){e.save(),e.globalAlpha=N?1:.22,e.strokeStyle=e.fillStyle=R?"#4aa3ff":"#41d17a",e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo(E+14,_-18),e.quadraticCurveTo(E+40,_-18,E+40,_),e.quadraticCurveTo(E+40,_+18,E+14,_+18),e.closePath(),e.stroke();for(let H=-1;H<=1;H++)e.beginPath(),R?(e.moveTo(E+6,_+H*11),e.lineTo(E-16,_+H*11)):(e.moveTo(E+6,_+H*11-2),e.lineTo(E-14,_+H*11+6)),e.stroke();e.restore()}function W(E){e.fillStyle="#14363f",e.fillRect(0,Lt,It,$n-Lt);let _=Rt.pad,R=$n>It;e.fillStyle="#e6c65e",e.fillRect(_,Lt+16,40,4),e.textAlign="left",e.fillStyle="#a9c2c4",e.font=`600 ${Rt.label}px Arial`,e.fillText("LYS OG SIKT",_,Lt+50),e.textAlign="right",e.fillStyle="#dce8e7",e.font=`700 ${Rt.label}px Arial`,e.fillText("teori-test.no",It-_,Lt+50);let N=Ph[0];for(let xe of Ph)E>=xe[0]&&(N=xe);let H=E-N[0];e.textAlign="left",e.globalAlpha=Math.min(1,.3+H/.3),e.fillStyle="#fff",e.font=`700 ${Rt.head}px Arial`,e.fillText(N[1],_,Lt+Rt.headY),e.fillStyle="#d4e4e4",e.font=`400 ${Rt.body}px Arial`;let q=N[2].split(" "),F=[],V="";for(let xe of q){let be=V?V+" "+xe:xe;e.measureText(be).width>Rt.wrap&&V?(F.push(V),V=xe):V=be}F.push(V),F.slice(0,2).forEach((xe,be)=>e.fillText(xe,_,Lt+Rt.bodyY+be*Rt.bodyLH)),e.globalAlpha=1;let $=E<tl||E>=ki;e.textAlign="right",e.fillStyle="#a9c2c4",e.font="600 24px Arial";let le=R?Lt+Rt.headY-16:Lt+142,ie=It-_;e.font=`600 ${R?22:24}px Arial`,e.fillText("Bl\xE5 bil",ie-186,le+8),U(ie-141,le,!0,$),U(ie-56,le,!1,!$),e.fillStyle="#ffffff22",e.fillRect(_,$n-16,It-2*_,4),e.fillStyle="#e6c65e",e.fillRect(_,$n-16,(It-2*_)*Br(E/$c),4)}window.renderFrame=function(E){let _=Br(Number(E)||0,0,$c),R=il(_),N=Dh(_);I(C,R,x,1,_),I(v,N,-x,-1,_);let H=_<tl||_>=ki,q=_<bh||_>=ki;if(b(C,H),b(v,q),v.glows.forEach(V=>{let $=Ur?q?2.6:1:q?Br(Math.abs(N-R)*.035,1.8,8):1.6;V.scale.set($,$,1),V.material.opacity=q?1:.75}),C.glows.forEach(V=>{V.visible=!Ur,V.scale.set(1.2,1.2,1),V.material.opacity=.6}),Ur){let V=$n>It,$=Math.abs(N-R),le=V?240:1e9,ie=Math.max(44,$+34),xe=(R+N)/2;ie>le&&(ie=le,xe=N>R?R+(le-34)/2:R-(le-34)/2);let be=(V?.95:.72)*ie+(V?8:10),Ie=V?.75:1.1;s.near=be*.4,s.far=be*4+300,s.updateProjectionMatrix(),s.up.set(-Math.sin(Ie),0,-Math.cos(Ie)),s.position.set(0,be,-xe+be*.12),s.lookAt(0,0,-xe),s.up.set(0,1,0)}else{let V=$n>It;s.near=.5,s.far=900,s.updateProjectionMatrix(),s.position.set(x*(V?.4:.55),V?5.4:4.3,-(R-(V?12.5:11.5))),s.lookAt(x*(V?.05:.15),.4,-(R+(V?24:26)))}if(t.render(n,s),e.reset(),e.drawImage(t.domElement,0,0,It,Lt),Ur){let V=($,le)=>{let ie=(_-le)/1.1;if(ie<0||ie>1)return;let xe=$.obj.position.clone();xe.y=.1;let be=xe.project(s),Ie=(be.x+1)*It/2,Q=(1-be.y)*Lt/2;e.save(),e.strokeStyle=`rgba(111,231,234,${(1-ie)*.9})`,e.lineWidth=4,e.shadowColor="#6fe7ea",e.shadowBlur=10,e.beginPath(),e.arc(Ie,Q,22+ie*46,0,7),e.stroke(),e.restore()};V(C,tl),V(v,bh),V(C,ki),V(v,ki)}{let V=(_-ki+.7)/1.3;if(V>=0&&V<=1&&N-R>3){let $=Math.sin(Math.PI*Br(V))*.95,le=R+Va/2,ie=(xe,be)=>{let Ie=new B(be,.12,-xe).project(s);return[(Ie.x+1)*It/2,(1-Ie.y)*Lt/2,Ie.z]};e.save(),e.strokeStyle=`rgba(111,231,234,${$})`,e.lineWidth=3,e.shadowColor="#6fe7ea",e.shadowBlur=8;for(let xe=0;xe<2;xe++){let be=le+xe*Va+.25,Ie=be+Va-.5,Q=[[be,-.85],[Ie,-.85],[Ie,.85],[be,.85]].map(([K,me])=>ie(K,me));Q.some(K=>K[2]>1)||(e.beginPath(),Q.forEach(([K,me],Oe)=>Oe?e.lineTo(K,me):e.moveTo(K,me)),e.closePath(),e.stroke())}e.restore()}}W(_);let F=N-R;return window.frameInfo={t:_,blueDistance:R,redDistance:N,gap:F,blueSpeed:Ch(_),blueHigh:H,redHigh:q,bluePos:C.obj.position.toArray(),redPos:v.obj.position.toArray()},i},window.filmDuration=$c,window.setFilmFormat=E=>{Rt=_h[E==="mobile"?"mobile":"wide"],It=Rt.W,$n=Rt.H,Lt=Rt.SCENE_H,i.width=It,i.height=$n,t.setSize(It,Lt),s.aspect=It/Lt,s.fov=Rt.fov,s.updateProjectionMatrix(),window.filmFormat=E},window.setView=E=>{Ur=E==="top"},window.renderFrame(0),window.animationReady=!0}Yv().catch(i=>{window.animationError=String(i),console.error(i)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
