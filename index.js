var Typer={
	text: `<span id="a">hrithikmalik@dev</span>:<span id="b">~</span><span id="c">$</span> git clone my_profile<!-- kjsdfhkjdhsfkjdshfkj -->
	<span id="a">hrithikmalik@dev</span>:<span id="b">~</span><span id="c">$</span> cat <!-- kjsdfhkjdhsfkjdshfkj -->my_profile/introduction.txt<!-- laglaglaglaglaglaglaglaglaglaglaglag -->
	
	<span> Welcome to my matrix! I am <span id="a">Hrithik Malik ✌️</span></span>
	<span> I am a Developer | Competitive Programmer | Hackathon Enthusiast</span>
	
	My motto, "<span id="k">Find a problem->Think->Design->Code->Deploy->Solve</span>" <!-- sjkfhskjf -->
	
	<span>I am a 2022 <span id="a">Computer Science</span> graduate from <span id="a">Bharati Vidyapeeth's College of Engineering, New Delhi</span>
	
	<span>I am currently working as a <span id="a">Backend Engineer</span> @ <span id="a">Zepto 🚀🚀</span>
	
	<span>I have interned with <span id="a">SuprDaily(Swiggy)</span>, <span id="a">Bizongo</span>, <span id="a">GeeksforGeeks</span> and several other startups and love to learn different technologies & solve interesting algorithms</span>
	
	<span>I am a 4🌟 coder @ <a href="https://www.codechef.com/users/hrithik_malik" target="_blank">Codechef</a> and ACM ICPC '20 Regionalist 👨‍💻</span>
	
	<span> Download my resume <a href="https://drive.google.com/file/d/1P0tcf3U2FyKl-QCKoUfYLfeXM4-k2aCf/view?usp=sharing" target="_blank">here</a></span>
	
	<span>I am crazy about hackathons & building stuff and have won/participated in several hackathons - for example, <span id="a">HackBMU</span>, <span id="a">HackBPIT</span> & <span id="a">HackData</span>
	</span>
	
	I am <span id="a">looking for interesting roles & opportunites</span> relevant to my profile which gives me an opportunity to be involved in amazing projects
	If you are looking for someone like me or know any opportunities<!-- slightdelayhere-->, feel free to send me an email at<!-- longlonglongcomment --><a href="mailto:hrithikmalik86@gmail.com"> hrithikmalik86@gmail.com</a>
	
	<!-- hsdgfhjfkdjhfkjsdhfkjdshfkjsdhfkjsdhkfjhdskjfhksdjhfkdsj -->
	<span> Here are few more places you can connect with me - <a href="https://github.com/hrithik86" target="_blank">Github</a>, <a href="https://www.linkedin.com/in/hrithik-malik-071b45170/" target="_blank">LinkedIn</a>  
	
	<span id="a">hrithikmalik@dev</span>:<span id="b">~</span><span id="c">$</span> exit<!-- kjsdfhkjdhsfkjdshfkj -->
	`,
	accessCountimer:null,
	index:0, 
	speed:2, 
	accessCount:0,
	deniedCount:0, 
	content:function(){
		return $("#console").html();
	},
 
	write:function(str){
		$("#console").append(str);
		return false;
	},
 
	addText:function(key){
		
		if(key.keyCode==18){
			Typer.accessCount++; 
			
			if(Typer.accessCount>=3){
				Typer.makeAccess(); 
			}
		}
		
    		else if(key.keyCode==20){
			Typer.deniedCount++; 
			
			if(Typer.deniedCount>=3){
				Typer.makeDenied(); 
			}
		}
		
    		else if(key.keyCode==27){ 
			Typer.hidepop(); 
		}
		
    		else if(Typer.text){ 
			var cont=Typer.content(); 
			if(cont.substring(cont.length-1,cont.length)=="|") 
				$("#console").html($("#console").html().substring(0,cont.length-1)); 
			if(key.keyCode!=8){ 
				Typer.index+=Typer.speed;	
			}
      		else {
			if(Typer.index>0) 
				Typer.index-=Typer.speed;
			}
			var text=Typer.text.substring(0,Typer.index)
			var rtn= new RegExp("\n", "g"); 
	
			$("#console").html(text.replace(rtn,"<br/>"));
			window.scrollBy(0,50); 
		}
		
		if (key.preventDefault && key.keyCode != 122) { 
			key.preventDefault()
		};  
		
		if(key.keyCode != 122){ // otherway prevent keys default behavior
			key.returnValue = false;
		}
	},
 
	updLstChr:function(){ 
		var cont=this.content(); 
		
		if(cont.substring(cont.length-1,cont.length)=="|") 
			$("#console").html($("#console").html().substring(0,cont.length-1)); 
		
		else
			this.write("|"); // else write it
	}
}
 
function replaceUrls(text) {
	var http = text.indexOf("http://");
	var space = text.indexOf(".me ", http);
	
	if (space != -1) { 
		var url = text.slice(http, space-1);
		return text.replace(url, "<a href=\""  + url + "\">" + url + "</a>");
	} 
	
	else {
		return text;
	}
}

Typer.speed=3;
 
var timer = setInterval("t();", 30);
function t() {
	Typer.addText({"keyCode": 123748});
	
	if (Typer.index > Typer.text.length) {
		clearInterval(timer);
	}
}
 
