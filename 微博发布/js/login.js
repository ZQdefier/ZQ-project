class Login {
	constructor(btn) {
		this.login = document.querySelector(btn);
		this.box = document.querySelector("#container");
		this.box.innerHTML =  '<h4>发布微博</h4>'+
	'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
	'<p><label>用户名：<input id="username" type="text"></label></p>'+
	'<p><label>内　容：<textarea id="password"></textarea></label></p>'+
	'<p><button id="loginBtn" class="logonBtn" type="button">发布</button></p>'; 
		this.bandEvents();
		this.chehui();
		
	}
	bandEvents(){
		var _this = this;
		this.login.onclick = function(){
			_this.creat();
			_this.show();
//			new Drag(_this.box, "h4").init();
		}
		this.box.onclick = function(e){
			e = e || event;
			var target = e.target || e.srcElement;
			if(target.id === "closeBtn") _this.close();
			if(target.id === "loginBtn") _this.loGin();
		}
		
	}
	creat(){
		this.mod = document.createElement("div");
		this.mod.className = "modal";
		document.body.appendChild(this.mod);
	}
	show(){
		this.box.style.display = "block";
		var _top = (document.documentElement.clientHeight - this.box.offsetHeight)/2;
		var _left = (document.documentElement.clientWidth - this.box.offsetWidth)/2;
		this.box.style.position = "absolute";
		this.box.style.top = _top + "px";
		this.box.style.left = _left + "px";
		this.close_btn = this.box.querySelector(".close_btn");
		this.loginBtn = this.box.querySelector(".loginBtn");
	}
	close(){
		document.body.removeChild(this.mod);
		this.box.style.display = "none";
	}
	loGin(){
		var user = this.box.querySelector("#username").value;
		var txt = this.box.querySelector("#password").value;
		console.log(user,txt);
		document.body.innerHTML = txt;
		var fbtime = new Date();
		this.fbtime = fbtime.getTime();
		console.log(this.fbtime)
		this.mod.remove();
		this.box.style.display = "none";
	}
	chehui(){
		var _this = this;
		var menu = document.createElement("ul")
		menu.className = "menu";
		var del = document.createElement("li");
		del.innerHTML = "撤回"
		var cancel = document.createElement("li");
		cancel.innerHTML = "取消"
		document.body.oncontextmenu = function(e){
			if(e.preventDefault){
	   			e.preventDefault();
			}else {
	    		window.event.returnValue = false;    
	    			//return false;
			}
			var target = e.target||e.srcElement;
			document.body.appendChild(menu)
			menu.appendChild(del)
			menu.appendChild(cancel)
			var left = e.clientX;
			var top = e.clientY;
			menu.style.left = left + "px";
			menu.style.top = top + "px"; 
			del.onclick = function(){
				if(confirm("确认撤回？")){
					var nowtime = new Date();
					_this.nowtime = nowtime.getTime();
					console.log(_this.nowtime);
					console.log(_this.fbtime);
					var disTime = (_this.nowtime - _this.fbtime) /1000;  	//计算间隔秒数
					console.log(disTime)
					var limitTime = 10;															//设置限制时间 单位:秒
					if(disTime < limitTime){
						target.remove();
					}else{
						alert("超出撤回时间")
					}
				}
			}
			cancel.onclick = function(){
				menu.remove();
			}
			document.onclick = function(){
				menu.remove();
			}			
		}
	}
	
}
	
	
