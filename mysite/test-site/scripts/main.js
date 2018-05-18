var myImage = document.querySelector('img');
myImage.onclick =function (){
	var mySrc = myImage.getAttribute('src');
	if(mySrc ==='images/pic1.jpg'){
		myImage.setAttribute('src','images/pic2.jpg');
	}else{
		myImage.setAttribute('src','images/pic1.jpg')
	}
}        //这实现了两张图片的切换
 
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
function setUserName(){
	var myName =prompt('请输入你的名字：');
	localStorage.setItem('name',myName);
	myHeading.innerHTML ='小哥哥你好啊！'+myName;
}
if (!localStorage.getItem('name')) {
	setUserName();
}else{
	var storedName=localStorage.getItem('name');
	myHeading.innerHTML='小哥哥你好啊！'+storedName;
}
myButton.onclick=function(){
	setUserName();a
}