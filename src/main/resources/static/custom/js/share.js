// JavaScript Document
function replaceStr(theStr,shareStr){
	if(theStr.indexOf('?')>0){
		return theStr += '&' + shareStr;
	}else{
		return theStr += '?' + shareStr;
	}
}
//alert(replaceStr('http://www.quwan.com/id=was','fm=sharerenren'));

function quwan_share(ele,type){
	if (type == '') return false;
	var getway = '',url = $(ele).attr("url"),title = $(ele).attr("share-title"),content = $(ele).attr("content"),img = $(ele).attr("img"),get_goods_id = $(ele).attr("data");
	if (typeof(url)=='undefined' || url=='') url = window.location.href;
	if (typeof(title)=='undefined' || title=='') title = document.getElementsByTagName('title')[0].innerHTML;
	if (typeof(content)=='undefined' || content=='') content = title;
	if (typeof(img)=='undefined') img = '';
	if (typeof(get_goods_id)=='undefined') get_goods_id = '';
	content += '（来自@趣玩网）';
	if (type == 'sina'){
		getway = 'http://v.t.sina.com.cn/share/share.php?appkey=2926504205';//? rpalace &
		url = replaceStr(url,'fm=shareweibo');
		getway += "&title="+encodeURIComponent(content)+"&url="+encodeURIComponent(url);
		if (img != '') getway += "&pic="+encodeURIComponent(img);
	}
	if (type == 'renren'){
		getway = 'http://share.renren.com/share/buttonshare/post/4001?';
		url = replaceStr(url,'fm=sharerenren')
		
		getway += "title="+encodeURI(title)+"&content="+encodeURI(content)+"&url="+encodeURIComponent(url);
		if (img != '') getway += "&pic="+encodeURI(img);
	}
	if (type == 'qblog'){
		getway = 'http://v.t.qq.com/share/share.php?';
		url = replaceStr(url,'fm=sharetqblog')
		getway += "title="+encodeURI(content)+"&url="+encodeURIComponent(url)+"&appkey=f92ccbb0e5bd4fdd8cc4343602f4ef98"+"&site="+encodeURIComponent(url);
		if (img != '') getway += "&pic="+encodeURI(img);
	}
	if (type == 'qzone'){
		getway = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
		url = replaceStr(url,'fm=shareqzone')
		getway += "title="+encodeURIComponent(title)+"&desc="+encodeURIComponent(content)+"&url="+encodeURIComponent(url);
		if (img != '') getway += "&pics="+encodeURIComponent(img);
	}
	if (type == 'douban'){
		url = replaceStr(url,'fm=sharedouban')
		//getway = 'http://www.douban.com/recommend/?url='+encodeURIComponent(url)+'&image='+encodeURIComponent(img)+'&title='+encodeURI(content);
		getway ='http://www.douban.com/share/service?source=&image='+encodeURIComponent(img)+'&href='+encodeURIComponent(url)+'&name='+encodeURI(content);
	}
	if (getway == '') return false;
	if (!isNaN(get_goods_id)){
		$.ajax({
			type: "POST",
			url: "{$web}source/goods_share_record.php",
			data:  "type="+type+"&get_goods_id="+get_goods_id+"&r="+Math.random(),
			success: function(msg){}
		})		
	}	
	window.open(getway, "", "height=500, width=600");
	return true;
}
$(function(){
	$("a.sina").live("click",function(){
		quwan_share(this,"sina");
	});
	$("a.qblog").live("click",function(){
		quwan_share(this,"qblog");
	});
	$("a.qzone").live("click",function(){
		quwan_share(this,"qzone");
	});
	$("a.douban").live("click",function(){
		quwan_share(this,"douban");
	});
	$("a.renren").live("click",function(){
		quwan_share(this,"renren");
	});
})