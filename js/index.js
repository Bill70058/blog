window.onload=function(){
    Vue.directive('mouse',function(){
        $('#side').mouseover(function () { 
			$('#side').css('width','300px');
			$('#side>input').css('margin','40px');
			$('#side>img').css('margin-left','100px');   
			document.getElementById('content').style.left="300px";
			document.getElementById('content').style.transition="1.3s";
        }); 
    });
    
    var v = new Vue({
        el:'body',
        data:{
            show:false,
            sideBtn:false,
			home: true,
			blog: false,
			resource: false,
			resDown: false,
			index: 0,
			arr: ['dropdown-item','resourceDown'],
			downList: [
				{name:'书',path:'./resource.html'},
				{name:'视频',path:'./vedio.html'},
				{name:'代码',path:'./code.html'},
				{name:'软件',path:'./software.html'},
				// {name:'技术栈',path:'./technology.html'}
			]
        },
		created() {
			var click_cnt = 0;
			var $html = document.getElementsByTagName("html")[0];
			var $body = document.getElementsByTagName("body")[0];
			$html.onclick = function(e) {
			    var $elem = document.createElement("b");
			    $elem.style.color = "#E94F06";
			    $elem.style.zIndex = 9999;
			    $elem.style.position = "absolute";
			    $elem.style.select = "none";
			    var x = e.pageX;
			    var y = e.pageY;
			    $elem.style.left = (x - 10) + "px";
			    $elem.style.top = (y - 20) + "px";
			    clearInterval(anim);
			    switch (++click_cnt) {
			        case 10:
			            $elem.innerText = "OωO";
			            break;
			        case 20:
			            $elem.innerText = "(๑•́ ∀ •̀๑)";
			            break;
			        case 30:
			            $elem.innerText = "(๑•́ ₃ •̀๑)";
			            break;
			        case 40:
			            $elem.innerText = "(๑•̀_•́๑)";
			            break;
			        case 50:
			            $elem.innerText = "（￣へ￣）";
			            break;
			        case 60:
			            $elem.innerText = "(╯°口°)╯(┴—┴";
			            break;
			        case 70:
			            $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
			            break;
			        case 80:
			            $elem.innerText = "╮(｡>口<｡)╭";
			            break;
			        case 90:
			            $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
			            break;
			        case 100:
			        case 101:
			        case 102:
			        case 103:
			        case 104:
			        case 105:
			            $elem.innerText = "(ꐦ°᷄д°᷅)";
			            break;
			        default:
				// 手动更换下面这行双引号里面的内容 如"😀"
			            $elem.innerText = "❤";
			            break;
			    }
			    $elem.style.fontSize = Math.random() * 10 + 8 + "px";
			    var increase = 0;
			    var anim;
			    setTimeout(function() {
			    	anim = setInterval(function() {
			            if (++increase == 150) {
			                clearInterval(anim);
					$body.removeChild($elem);
			            }
			            $elem.style.top = y - 20 - increase + "px";
			            $elem.style.opacity = (150 - increase) / 120;
			        }, 8);
			    }, 70);
			    $body.appendChild($elem);
			};
		},
        methods: {
            /**
             * 
             * @param {提供给side 块的鼠标移入方法 } 
             */
            nav_Blog:function(){
                // console.log($event);
                console.log();
				this.sideBtn=true;
                this.home = false;
				this.blog = true;
				this.showFirstText();
				this.closeDown();
            },
            /**
             * @param {提供给side 块的鼠标移出方法 }
             */
            out:function(){
				$("direactive").css('transition','0.8');
                this.sideBtn= false;
            },
            delay:function(){
                setTimeout(() => {
                    return ;
                }, 800);
            },
			btnNav:function(myindex){
				// console.log(myindex);s
				switch(myindex){
					case 1:
						$("#nav_a").css('background','#E0F2F1');
						$("#nav_a").css('transition','.5s');
						$("#nav_b").css('background','');
						$("#nav_c").css('background','');
					break;
					case 2:
						$("#nav_a").css('background','');
						$("#nav_b").css('background','#E0F2F1');
						$("#nav_b").css('transition','.5s');
						$("#nav_c").css('background','');
					break;
					case 3:
						$("#nav_a").css('background','');
						$("#nav_b").css('background','');
						$("#nav_c").css('background','#E0F2F1');
						$("#nav_c").css('transition','.5s');
					break;
					default:
						$("#nav_a").css('background','');
						$("#nav_b").css('background','');
						$("#nav_c").css('background','');
					break;
				}
			},
			nav_Home:function(){
				// this.unshowText();
				this.home = true;
				this.blog = false;
				this.closeDown();
			},
			nav_Resource:function(){
				// this.unshowText();
				this.home = false;
				this.blog = false;
				this.showDown();
			},
			showFirstText:function(){
				document.getElementById('a').style.display='block';
				document.getElementById('b').style.display='none';
				document.getElementById('c').style.display='none';
				document.getElementById('d').style.display='none';
				document.getElementById('e').style.display='none';
				document.getElementById('f').style.display='none';
				document.getElementById('g').style.display='none';
				document.getElementById('h').style.display='none';
				document.getElementById('i').style.display='none';
				document.getElementById('j').style.display='none';
				document.getElementById('k').style.display='none';
				document.getElementById('l').style.display='none';
				document.getElementById('m').style.display='none';
				document.getElementById('n').style.display='none';
			},
			arrPush: function(myindex){
				console.log(myindex);
				this.index = myindex;
			},
			showDown: function(){
				this.home = this.blog = false;
				this.resource = true;
				this.resDown = true;
			},
			closeDown: function(){
				this.resource = false;
				this.resDown = false;
			}
        },
		transitions:{
			'fade':{
				enterClass:'bounceInDown',
				leaveClass:'fadeOutDown'
			},
			'bounce':{
				enterClass:'swing',
				leaveClass:'fadeOutDown'
			}
		}
        
    });
}
/**
 * @param {目录代码块的组件}
 */
var bill = Vue.extend({
    data(){
        return {
            index:0,
            value:['常见的布局样式','Vue 双向绑定','Vue 入门','Vue 模板、属性、class','Vue前后端数据交互插件','Vue计算属性与监视方法','一些样式','一些tag的使用','一些css样式','PHP规则','input标签','div-section-article标签的同异','图片的三种格式','按照特殊性优先级排名'],
        };
    },
    template:`<div id="directoryText">
    <button v-for="i in value" :class="$index==index?'active':''" @click="btn($index)" class="btn">{{i}}</button>
    </div>`,
    methods:{
        //测试tab 面板是否正常的方法
        con:function(myindex){
            console.log(myindex);
            this.index++;
            this.index=myindex;
        },
        //tab 面板正式运用的方法
        btn:function(myindex){
            // console.log(myindex);
            this.index++;
            this.index=myindex;
            switch(myindex){
                case 0:
                    this.showFirstText();
                    break;
                case 1:
                    document.getElementById('a').style.display='none';
                    document.getElementById('b').style.display='block';
                    document.getElementById('c').style.display='none';
                    document.getElementById('d').style.display='none';
                    document.getElementById('e').style.display='none';
                    document.getElementById('f').style.display='none';
                    document.getElementById('g').style.display='none';
                    document.getElementById('h').style.display='none';
                    document.getElementById('i').style.display='none';
                    document.getElementById('j').style.display='none';
                    document.getElementById('k').style.display='none';
                    document.getElementById('l').style.display='none';
                    document.getElementById('m').style.display='none';
                    document.getElementById('n').style.display='none';                
                    break;
                case 2:
                    document.getElementById('a').style.display='none';
                    document.getElementById('b').style.display='none';
                    document.getElementById('c').style.display='block';
                    document.getElementById('d').style.display='none';
                    document.getElementById('e').style.display='none';
                    document.getElementById('f').style.display='none';
                    document.getElementById('g').style.display='none';
                    document.getElementById('h').style.display='none';
                    document.getElementById('i').style.display='none';
                    document.getElementById('j').style.display='none';
                    document.getElementById('k').style.display='none';
                    document.getElementById('l').style.display='none';
                    document.getElementById('m').style.display='none';
                    document.getElementById('n').style.display='none';                 
                    break;
                case 3:
                    document.getElementById('a').style.display='none';
                    document.getElementById('b').style.display='none';
                    document.getElementById('c').style.display='none';
                    document.getElementById('d').style.display='block';
                    document.getElementById('e').style.display='none';
                    document.getElementById('f').style.display='none';
                    document.getElementById('g').style.display='none';
                    document.getElementById('h').style.display='none';
                    document.getElementById('i').style.display='none';
                    document.getElementById('j').style.display='none';
                    document.getElementById('k').style.display='none';
                    document.getElementById('l').style.display='none';
                    document.getElementById('m').style.display='none';
                    document.getElementById('n').style.display='none';                 
                    break;
                case 4:
                    document.getElementById('a').style.display='none';
                    document.getElementById('b').style.display='none';
                    document.getElementById('c').style.display='none';
                    document.getElementById('d').style.display='none';
                    document.getElementById('e').style.display='block';
                    document.getElementById('f').style.display='none';
                    document.getElementById('g').style.display='none';
                    document.getElementById('h').style.display='none';
                    document.getElementById('i').style.display='none';
                    document.getElementById('j').style.display='none';
                    document.getElementById('k').style.display='none';
                    document.getElementById('l').style.display='none';
                    document.getElementById('m').style.display='none';
                    document.getElementById('n').style.display='none';               
                    break;
                case 5:
                    document.getElementById('a').style.display='none';
                    document.getElementById('b').style.display='none';
                    document.getElementById('c').style.display='none';
                    document.getElementById('d').style.display='none';
                    document.getElementById('e').style.display='none';
                    document.getElementById('f').style.display='block';
                    document.getElementById('g').style.display='none';
                    document.getElementById('h').style.display='none';
                    document.getElementById('i').style.display='none';
                    document.getElementById('j').style.display='none';
                    document.getElementById('k').style.display='none';
                    document.getElementById('l').style.display='none';
                    document.getElementById('m').style.display='none';
                    document.getElementById('n').style.display='none';                
                    break;
                case 6:
                    document.getElementById('a').style.display='none';
                    document.getElementById('b').style.display='none';
                    document.getElementById('c').style.display='none';
                    document.getElementById('d').style.display='none';
                    document.getElementById('e').style.display='none';
                    document.getElementById('f').style.display='none';
                    document.getElementById('g').style.display='block';
                    document.getElementById('h').style.display='none';
                    document.getElementById('i').style.display='none';
                    document.getElementById('j').style.display='none';
                    document.getElementById('k').style.display='none';
                    document.getElementById('l').style.display='none';
                    document.getElementById('m').style.display='none';
                    document.getElementById('n').style.display='none';               
                    break;
                case 7:
                    document.getElementById('a').style.display='none';
                    document.getElementById('b').style.display='none';
                    document.getElementById('c').style.display='none';
                    document.getElementById('d').style.display='none';
                    document.getElementById('e').style.display='none';
                    document.getElementById('f').style.display='none';
                    document.getElementById('g').style.display='none';
                    document.getElementById('h').style.display='block';
                    document.getElementById('i').style.display='none';
                    document.getElementById('j').style.display='none';
                    document.getElementById('k').style.display='none';
                    document.getElementById('l').style.display='none';
                    document.getElementById('m').style.display='none';
                    document.getElementById('n').style.display='none';                
                    break;
                case 8:
                    document.getElementById('a').style.display='none';
                    document.getElementById('b').style.display='none';
                    document.getElementById('c').style.display='none';
                    document.getElementById('d').style.display='none';
                    document.getElementById('e').style.display='none';
                    document.getElementById('f').style.display='none';
                    document.getElementById('g').style.display='none';
                    document.getElementById('h').style.display='none';
                    document.getElementById('i').style.display='block';
                    document.getElementById('j').style.display='none';
                    document.getElementById('k').style.display='none';
                    document.getElementById('l').style.display='none';
                    document.getElementById('m').style.display='none';
                    document.getElementById('n').style.display='none';                  
                    break;
                case 9:
                    document.getElementById('a').style.display='none';
                    document.getElementById('b').style.display='none';
                    document.getElementById('c').style.display='none';
                    document.getElementById('d').style.display='none';
                    document.getElementById('e').style.display='none';
                    document.getElementById('f').style.display='none';
                    document.getElementById('g').style.display='none';
                    document.getElementById('h').style.display='none';
                    document.getElementById('i').style.display='none';
                    document.getElementById('j').style.display='block';
                    document.getElementById('k').style.display='none';
                    document.getElementById('l').style.display='none';
                    document.getElementById('m').style.display='none';
                    document.getElementById('n').style.display='none';                
                    break;
                case 10:
                    document.getElementById('a').style.display='none';
                    document.getElementById('b').style.display='none';
                    document.getElementById('c').style.display='none';
                    document.getElementById('d').style.display='none';
                    document.getElementById('e').style.display='none';
                    document.getElementById('f').style.display='none';
                    document.getElementById('g').style.display='none';
                    document.getElementById('h').style.display='none';
                    document.getElementById('i').style.display='none';
                    document.getElementById('j').style.display='none';
                    document.getElementById('k').style.display='block';
                    document.getElementById('l').style.display='none';
                    document.getElementById('m').style.display='none';
                    document.getElementById('n').style.display='none';                
                    break;
                case 11:
                    document.getElementById('a').style.display='none';
                    document.getElementById('b').style.display='none';
                    document.getElementById('c').style.display='none';
                    document.getElementById('d').style.display='none';
                    document.getElementById('e').style.display='none';
                    document.getElementById('f').style.display='none';
                    document.getElementById('g').style.display='none';
                    document.getElementById('h').style.display='none';
                    document.getElementById('i').style.display='none';
                    document.getElementById('j').style.display='none';
                    document.getElementById('k').style.display='none';
                    document.getElementById('l').style.display='block';
                    document.getElementById('m').style.display='none';
                    document.getElementById('n').style.display='none';                
                    break;
                case 12:
                    document.getElementById('a').style.display='none';
                    document.getElementById('b').style.display='none';
                    document.getElementById('c').style.display='none';
                    document.getElementById('d').style.display='none';
                    document.getElementById('e').style.display='none';
                    document.getElementById('f').style.display='none';
                    document.getElementById('g').style.display='none';
                    document.getElementById('h').style.display='none';
                    document.getElementById('i').style.display='none';
                    document.getElementById('j').style.display='none';
                    document.getElementById('k').style.display='none';
                    document.getElementById('l').style.display='none';
                    document.getElementById('m').style.display='block';
                    document.getElementById('n').style.display='none';                 
                    break;
                case 13:
                    document.getElementById('a').style.display='none';
                    document.getElementById('b').style.display='none';
                    document.getElementById('c').style.display='none';
                    document.getElementById('d').style.display='none';
                    document.getElementById('e').style.display='none';
                    document.getElementById('f').style.display='none';
                    document.getElementById('g').style.display='none';
                    document.getElementById('h').style.display='none';
                    document.getElementById('i').style.display='none';
                    document.getElementById('j').style.display='none';
                    document.getElementById('k').style.display='none';
                    document.getElementById('l').style.display='none';
                    document.getElementById('m').style.display='none';
                    document.getElementById('n').style.display='block';                
                    break;

            }
            
        }
    }
});





Vue.component('bill',bill);

