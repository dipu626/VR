!function(t)
{
    function e(e)
    {
        for(var n, r, a = e[0], h = e[1], c = e[2], d = 0, u = []; d < a.length; d++)
            r = a[d], Object.prototype.hasOwnProperty.call(s,r) && s[r] && u.push(s[r][0]), s[r] = 0;
        for(n in h)
            Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);
        for(l&&l(e); u.length;)
            u.shift()();
        return o.push.apply(o,c||[]),i()
    }
    function i()
    {
        for(var t,e=0; e<o.length; e++)
        {
            for(var i=o[e],n=!0,a=1; a<i.length; a++)
            {
                var h=i[a];
                0!==s[h]&&(n=!1)
            }
            n&&(o.splice(e--,1),t=r(r.s=i[0]))
        }
        return t
    }
    var n= {},s= {0:0},o=[];
    function r(e)
    {
        if(n[e])
            return n[e].exports;
        var i=n[e]= {i:e,l:!1,exports:{}};
        return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports
    }
    r.m=t,r.c=n,r.d=function(t,e,i) {r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t) {"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e) {if(1&e&&(t=r(t)),8&e)return t; if(4&e&&"object"==typeof t&&t&&t.__esModule)return t; var i=Object.create(null); if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e)
            {
                return t[e]
            } .bind(null,n)); return i
    },r.n=function(t) {var e=t&&t.__esModule?function()
        {
            return t.default
}:function()
        {
            return t
        }; return r.d(e,"a",e),e
    },r.o=function(t,e) {return Object.prototype.hasOwnProperty.call(t,e)},r.p="";
    var a=window.webpackJsonp=window.webpackJsonp||[],h=a.push.bind(a);
    a.push=e,a=a.slice();
    for(var c=0; c<a.length; c++)
        e(a[c]);
    var l=h;
    o.push([5,1]),i()
}
({5:function(t,e,i)
{"use strict";
    i.r(e);
    var n=i(0),s=i(1),o=i.n(s),r=i(2),a=i.n(r);
    const h=function(t)
    {
        return["alt shift "+(t=t||""),"ctrl shift "+t]
    };
    class c
    {
        constructor(t)
        {
            this._sketchController=t
        } _bindNumberShortcuts(t,e,i)
        {
            i.down(h("u"),()=>(this._sketchController.spinNumberAndKeepSelection(t,e,-1,10),!1)),i.down(h("i"),()=>(this._sketchController.spinNumberAndKeepSelection(t,e,1,10),!1)),i.down(h("j"),()=>(this._sketchController.spinNumberAndKeepSelection(t,e,-1,1),!1)),i.down(h("k"),()=>(this._sketchController.spinNumberAndKeepSelection(t,e,1,1),!1)),i.down(h("n"),()=>(this._sketchController.spinNumberAndKeepSelection(t,e,-1,.1),!1)),i.down(h("m"),()=>(this._sketchController.spinNumberAndKeepSelection(t,e,1,.1),!1))
        } bindKeyboardShortcuts(t,e)
        {
            const i=new a.a(t);
            i.down(h("z"),()=>(this._sketchController.resetSensor(),!1)),i.down(h("e"),()=>(this._sketchController.toggleTextAreas(),!1)),i.down(h("r"),()=>(this.riftSandbox.toggleMonitor(),!1)),i.down(h("v"),()=>(this._sketchController.startVrMode(),!1)),e&&this._bindNumberShortcuts(t,e,i)
        }
    } var l=i(3);
    const d=40,u=20,f=u*d+.2*d,m=500;
    class p
    {
        constructor(t,e)
        {
            this.domTextArea=t,this._hasCamera=e,this.canvasSize=f;
            const i=document.createElement("canvas");
            i.width=i.height=this.canvasSize,this.context=i.getContext("2d"),this.context.font=d+"px Ubuntu Mono, monospace",this.context.globalCompositeOperation="darker";
            const s=this.context.measureText("0");
            this.charWidth=s.width,this.numCols=Math.floor(f/this.charWidth),this.viewPort= {line:0,col:0},this.textTexture=new n.Texture(i),this.textTexture.needsUpdate=!0,this.textTexture.minFilter=n.LinearFilter;
            const o=new n.MeshBasicMaterial({map:this.textTexture,side:n.DoubleSide});
            o.transparent=!0,this.object=new n.Mesh(new n.PlaneBufferGeometry(2,2),new n.MeshBasicMaterial(o)),this.object.position.y=1.5,this.object.castShadow=!0,this.setupInfoPane(),this.lastUpdate=Date.now(),this.isBlinkOff=!1
        } setupInfoPane()
        {
            const t=document.createElement("canvas");
            t.width=this.canvasSize,t.height=200,this.infoContext=t.getContext("2d"),this.infoContext.font=d+"px Ubuntu Mono, monospace",this.infoContext.fillStyle="hsla(200, 50%, 90%, 0.9)",this.infoContext.fillRect(0,0,this.canvasSize,this.canvasSize),this.infoContext.fillStyle="hsl(0, 0%, 25%)",this.infoContext.fillText("Alt/Ctrl + Shift + ...",0,2*d),this.infoContext.fillText(`e - toggle editor$ {this._hasCamera?" | r - webcam":""}`,0,3*d),this.infoContext.fillText("j/k, u/i, n/m - change number",0,4*d),this.infoTexture=new n.Texture(t),this.infoTexture.needsUpdate=!0,this.infoTexture.minFilter=n.LinearFilter;
            const e=new n.MeshBasicMaterial({map:this.infoTexture,side:n.DoubleSide});
            e.transparent=!0;
            const i=new n.Mesh(new n.PlaneBufferGeometry(2,.5),new n.MeshBasicMaterial(e));
            i.castShadow=!0,i.position.y=-1.3,this.object.add(i)
        } setInfo(t)
        {
            this.infoContext.clearRect(0,0,this.canvasSize,1.2*d),this.infoContext.fillStyle="hsla(200, 50%, 90%, 0.9)",this.infoContext.fillRect(0,0,this.canvasSize,1.2*d),this.infoContext.fillStyle="hsl(0, 50%, 50%)",this.infoContext.fillText(t,0,d),this.infoTexture.needsUpdate=!0
        } toggle(t)
        {
            this.object.visible=t
        } getLines()
        {
            const t=this.domTextArea.selectionStart,e=this.domTextArea.selectionEnd;
            let i=0;
            return this.domTextArea.value.split("\n").map((function(n)
            {
                const s=t<=i+n.length&&e>=i;
                let o=0,r=n.length;
                return s?(t>=i&&(o=t-i),e<=i+n.length&&(r=e-i)):o=r=null,i+=n.length+1, {text:n,selectionStart:o,selectionEnd:r}
            }))
        } shouldUpdateTexture()
        {
            if(Date.now()-this.lastUpdate>m)
                return this.lastUpdate=Date.now(),!0;
            const t=this.domTextArea.value;
            if(this.oldText!==t)
                return this.oldText=this.domTextArea.value,!0;
            const e=this.domTextArea.selectionStart;
            if(this.oldStart!==e)
                return this.oldStart=e,!0;
            const i=this.domTextArea.selectionEnd;
            return this.oldEnd!==i?(this.oldEnd=i,!0):void 0
        } updateViewport(t,e)
        {
            const i=t?this.domTextArea.selectionStart:this.domTextArea.selectionEnd;
            let n=(this.domTextArea.value.substring(0,i).match(/\n/g)||[]).length+1;
            n<this.viewPort.line+1?this.viewPort.line=n-1:n>this.viewPort.line+u&&(this.viewPort.line=n-u),n=e[n-1];
            const s=t?n.selectionStart:n.selectionEnd;
            s<this.viewPort.col?this.viewPort.col=s:s>this.viewPort.col+this.numCols&&(this.viewPort.col=s-this.numCols)
        } update()
        {
            const t=this.domTextArea.selectionStart!=this.oldStart;
            if(!this.shouldUpdateTexture())
                return;
            const e=this.getLines(this.domTextArea);
            this.updateViewport(t,e),this.context.clearRect(0,0,this.canvasSize,this.canvasSize),this.context.fillStyle="hsla(0, 0%, 100%, 0.8)",this.context.fillRect(0,0,this.canvasSize,this.canvasSize);
            for(let t=this.viewPort.line; t<Math.min(this.viewPort.line+u,e.length); t++)
            {
                const i=t-this.viewPort.line,n=e[t];
                this.context.fillStyle="hsl(0, 0%, 25%)";
                const s=n.text.substring(this.viewPort.col,this.viewPort.col+this.numCols);
                if(this.context.fillText(s,0,d+d*i),null===n.selectionStart)
                    continue;
                this.context.fillStyle="rgba(100, 100, 200, 0.8)";
                let o=(n.selectionEnd-n.selectionStart)*this.charWidth;
                if(0===o)
                {
                    o=5;
                    const i=e[t+1];
                    if((!i||null===i.selectionStart)&&this.isBlinkOff)
                        continue
                    }
                this.context.fillRect((n.selectionStart-this.viewPort.col)*this.charWidth,.2*d+d*i,o,d)
            }
            this.isBlinkOff=!this.isBlinkOff,this.textTexture.needsUpdate=!0
        }
    } const x=.5,_=1024,b=512,S=b/_;
    class g
    {
        constructor(t)
        {
            this._domMonitor=t,this._canvas=document.createElement("canvas"),this._canvas.width=_,this._canvas.height=b,this.context=this._canvas.getContext("2d"),this._monitorTexture=new n.Texture(this._canvas),this._monitorTexture.needsUpdate=!0;
            const e=new n.MeshBasicMaterial({map:this._monitorTexture,side:n.DoubleSide,transparent:!0,opacity:.8});
            this.object=new n.Mesh(new n.PlaneBufferGeometry(x,x*S,1,1),e),this.object.visible=!1,this.object.position.set(0,-.2,-.5),this.object.rotation.set(-Math.PI/4,0,0)
        } toggle()
        {
            this.object.visible=!this.object.visible
        } update()
        {
            this._domMonitor&&(this.context.drawImage(this._domMonitor,0,0,_,b),this._monitorTexture.needsUpdate=!0)
        }
    } class w
    {
        constructor(t,e,i)
        {
            this._width=t,this._height=e,this._textAreas=null,this.areTextAreasVisible=!0,this._domMonitor=i,this.scene=null,this._sceneStuff=[],this.renderer=null,this._initWebGL(),this._initScene(),this.resize=this.resize.bind(this)
        } _initScene()
        {
            this.scene=new n.Scene,this.scene.fog=new n.FogExp2("lightgrey",.03),this._camera=new n.PerspectiveCamera(75,this._width/this._height,.1,200),this._camera.position.y=1.6;
            const t=new n.Group;
            t.position.z=2,t.add(this._camera),this.scene.add(t);
            const e=this.renderer.capabilities.getMaxAnisotropy(),i=(new n.TextureLoader).load("img/ground.png");
            i.anisotropy=e,i.wrapS=i.wrapT=n.RepeatWrapping,i.repeat.set(200,200);
            const s=new n.Mesh(new n.PlaneBufferGeometry(200,200),new n.MeshStandardMaterial({map:i,roughness:1,metalness:0}));
            s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s),this._monitor=new g(this._domMonitor),this._camera.add(this._monitor.object)
        } setTextAreas(t,e)
        {
            this.domTextAreas=t,this._textAreas=this.domTextAreas.map(t=>
            {
                const i=new p(t,e);
                return this.scene.add(i.object),i
            }),this._resetTextAreas()
        } _resetTextAreas()
        {
            this._textAreas.forEach((function(t,e)
            {
                t.object.rotateOnAxis(new n.Vector3(0,1,0),Math.PI/4*-(e+1)),t.object.translateZ(-1.5)
            }))
        } interceptScene()
        {
            const t=this.scene.add;
            this.scene.add=e=>
            {
                this._sceneStuff.push(e),t.call(this.scene,e)
            }
        } toggleTextAreas()
        {
            this.areTextAreasVisible=!this.areTextAreasVisible,this._textAreas.forEach(t=>
            {
                t.toggle(this.areTextAreasVisible)
            })
        } toggleMonitor()
        {
            this._monitor.toggle()
        } setInfo(t)
        {
            this._textAreas.forEach((function(e)
            {
                e.setInfo(t)
            }))
        } _initWebGL()
        {
            try
            {
                this.renderer=new n.WebGLRenderer({antialias:!0,canvas:document.getElementById("viewer")}),this.renderer.setPixelRatio(devicePixelRatio),this.renderer.vr.enabled=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=n.PCFSoftShadowMap;
                const t=l.a.createButton(this.renderer);
                t.style.backgroundColor="black",document.body.append(t)
            }
            catch(t)
            {
                return alert("This application needs WebGL enabled!"),!1
            }
            this.renderer.setClearColor(13882323,1),this.renderer.setSize(this._width,this._height),this.container=document.getElementById("container")
        } clearScene()
        {
            for(let t=0; t<this._sceneStuff.length; t++)
                this.scene.remove(this._sceneStuff[t]);
            this._sceneStuff=[]
        } render()
        {
            this._textAreas&&this._textAreas.forEach((function(t)
            {
                t.update()
            })),this._monitor.update(),this.renderer.render(this.scene,this._camera)
        } resize()
        {
            this._width=window.innerWidth,this._height=window.innerHeight,this._camera.aspect=this._width/this._height,this._camera.updateProjectionMatrix(),this.renderer.setSize(this._width,this._height)
        } resetSensor() {} startVrMode() {}
    } class v
    {
        constructor(t,e,i)
        {
            this.uuid=i||n.Math.generateUUID(),this.name=t||"Example",this.contents=e
        } _findNumberAt(t)
        {
            const e=this.contents.substring(t).match(/-?\d+\.?\d*/);
            if(e)
                return e[0]
            } _spinNumber(t,e,i)
        {
            return-1===t.indexOf(".")?(parseInt(t,10)+e*i).toString():(parseFloat(t)+e*i).toFixed(2)
        } spinNumberAt(t,e,i)
        {
            const n=this._findNumberAt(t);
            if(void 0===n)
                return;
            const s=this._spinNumber(n,e,i);
            this.contents=this.contents.substring(0,t)+s+this.contents.substring(t+n.length)
        }
    } class T
    {
        constructor(t,e,i)
        {
            this.uuid=i||n.Math.generateUUID(),this.name=t||"Example Sketch",this.files=e||[new v],this.initialized=!1,this.state= {}
        } getCode()
        {
            let t="";
            for(let e=0; e<this.files.length; e++)
                t+=this.files[e].contents;
            return t
        } initialState(t)
        {
            if(!this.initialized)
                for(const e in t)
                    Object.prototype.hasOwnProperty.call(t,e)&&(this.state[e]=t[e])
                } toJSON()
        {
            return{uuid:this.uuid,name:this.name,files:this.files}
        } static fromJSON(t)
        {
            return new T(t.name,t.files.map(t=>new v(t.name,t.contents,t.uuid)),t.uuid)
        }
    } var y='const t3 = THREE;\n\nconst sky = "lightblue";\nrenderer.setClearColor(sky);\nscene.fog.color.setStyle(sky);\n\nconst light = new t3.DirectionalLight();\nlight.castShadow = true;\nlight.position.set(7, 5.0, 4.0);\nlight.shadow.mapSize.setScalar(2048);\nscene.add(light);\n\nscene.add(\n  new THREE.AmbientLight("white", 0.5)\n);\n\nfunction makeCube(x, y, z) {\n  const cube = new t3.Mesh(\n    new t3.BoxGeometry(1.0, 0.2, 1.0),\n    new t3.MeshStandardMaterial({\n      color: "green",\n      roughness: 0.5,\n      metalness: 0.6\n    })\n  );\n  cube.castShadow = true;\n  cube.receiveShadow = true;\n  cube.position.set(x, y, z);\n  return cube;\n}\n\nconst star = new t3.Mesh(\n  new t3.OctahedronGeometry(1, 0),\n  new t3.MeshStandardMaterial({\n    color: "gold",\n    roughness: 0.5,\n    metalness: 0.6\n  })\n);\nstar.castShadow = true;\nstar.scale.setScalar(0.2);\nstar.position.set(-1.0, 3.4, -1.0);\nscene.add(star);\n\nconst numCubes = 16;\nconst cubes = [];\nfor (let i = 0; i < numCubes; i++) {\n  const cube = makeCube(-1, i / 5, -1);\n  cube.scale.setScalar(\n    (1 / (i + 4)) * 6\n  );\n  cube.scale.y = 1;\n  cube.material.color.setStyle(\n    i % 2 === 0 ? "red" : "darkgreen"\n  );\n  scene.add(cube);\n  cubes.push(cube);\n}\n\nsketch.initialState({ t: 0 });\nsketch.loop = () => {\n  const { state } = sketch;\n  for (let i = 0; i < numCubes; i++) {\n    const cube = cubes[i];\n    cube.rotation.y =\n      (state.t * i) / numCubes;\n  }\n  star.rotation.y = state.t;\n  state.t += 0.02;\n};\n';
    var A=i(4);
    document.getElementById("github").innerHTML=A.a,new class
    {
        constructor()
        {
            this._keyboardHandler=new c(this),this._sketchLoop=function() {},o.a.load({google:{families:["Ubuntu Mono"]},active:()=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",()=>this._init()):(this._init(),document.getElementById("loading").style.display="none")}}),this._setupDomTextArea=this._setupDomTextArea.bind(this),this._mainLoop=this._mainLoop.bind(this),this._focusCurrentTextArea=this._focusCurrentTextArea.bind(this)
        } _setupVideoPassthrough()
        {
            this._domMonitor=document.getElementById("monitor"),navigator.mediaDevices&&navigator.mediaDevices.getUserMedia({video:!0}).then(t=>
            {
                this._domMonitor.srcObject=t
            }).catch(t=>
            {
                console.info("Could not get video passthrough",t)
            })
        } _initializeSketch()
        {
            const t=localStorage.getItem("sketches_v1");
            this._sketch=t?T.fromJSON(JSON.parse(t)[0]):new T("",[new v("Cube",y)]),this._domTextAreas=this._sketch.files.map(this._setupDomTextArea),this._currentDomTextArea=this._domTextAreas[0],this._currentDomTextArea.focus(),this._riftSandbox.setTextAreas(this._domTextAreas),this._riftSandbox.interceptScene()
        } _setupDomTextArea(t)
        {
            const e=document.createElement("textarea");
            return e.id=t.name,e.addEventListener("keyup",e=>
            {
                const i=e.target.value;
                i!==t.contents&&(t.contents=i,this._readCode())
            }),e.addEventListener("keydown",t=>
            {
                t.stopPropagation()
            }),document.body.append(e),this._keyboardHandler.bindKeyboardShortcuts(e,t),e
        } _mainLoop()
        {
            try
            {
                this._sketchLoop()
            }
            catch(t)
            {
                console.log("Sketch Error",t),this._riftSandbox.setInfo(t.toString())
            }
            this._riftSandbox.render()
        } _readCode()
        {
            let t;
            localStorage.setItem("sketches_v1",JSON.stringify([this._sketch.toJSON()])),this._domTextAreas.forEach((t,e)=>
            {
                t.value=this._sketch.files[e].contents
            }),this._riftSandbox.clearScene(),this._riftSandbox.setInfo("");
            try
            {
                new Function("THREE","scene","camera","sketch","renderer",'"use strict";\n'+this._sketch.getCode())(n,this._riftSandbox.scene,this._riftSandbox.cameraPivot,this._sketch,this._riftSandbox.renderer),t=this._sketch.loop
            }
            catch(t)
            {
                console.log("Sketch Error",t),this._riftSandbox.setInfo(t.toString())
            }
            t&&(this._sketchLoop=t),this._sketch.initialized=!0
        } spinNumberAndKeepSelection(t,e,i,n)
        {
            const s=t.selectionStart;
            e.spinNumberAt(s,i,n),this._readCode(),t.selectionStart=t.selectionEnd=s
        } resetSensor()
        {
            this._riftSandbox.resetSensor()
        } startVrMode()
        {
            this._riftSandbox.startVrMode()
        } _initializeUnsupportedModal()
        {
            localStorage.getItem("alreadyIgnoredUnsupported")
        } _init()
        {
            this._riftSandbox=new w(window.innerWidth,window.innerHeight,this._domMonitor),this._initializeSketch(),this._readCode(),this._keyboardHandler.riftSandbox=this._riftSandbox,this._keyboardHandler.bindKeyboardShortcuts(document),document.body.addEventListener("click",this._focusCurrentTextArea),this._initializeUnsupportedModal(),window.addEventListener("resize",this._riftSandbox.resize,!1),this._riftSandbox.resize(),this._riftSandbox.renderer.setAnimationLoop(this._mainLoop),-1!==location.search.indexOf("vr=on")&&this.startVrMode()
        } toggleTextAreas()
        {
            this._riftSandbox.areTextAreasVisible?this._currentDomTextArea.blur():this._focusCurrentTextArea(),this._riftSandbox.toggleTextAreas()
        } _focusCurrentTextArea()
        {
            this._currentDomTextArea.focus()
        } getCurrentSelectionStart()
        {
            return this._currentDomTextArea.selectionStart
        }
    }
}
 });
//# sourceMappingURL=main.js.map
