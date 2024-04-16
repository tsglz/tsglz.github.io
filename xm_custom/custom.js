// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/funny.ico");
		document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/img/newtubiao.png");
		document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + origintitle; titletime="setTimeout(function()" { document.title="OriginTitle;" }, 2000); } }); var a_idx="0;" jquery(document).ready(function($) $("body").click(function(e) a="new" array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"); $i="$("<span/">").text(a[a_idx]); a_idx = (a_idx + 1) % a.length; var x = e.pageX, y = e.pageY; let scrolly = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop; y = y - scrolly; $i.css({ "z-index": 999, "top": y - 20, "left": x, "position": "fixed", "font-weight": "bold", "color": "#ff6651" /*随机颜色写法："rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"*/ }); $("body").append($i); $i.animate({ "top": y - 180, "opacity": 0 }, 1500, function() { $i.remove(); });  }); });

</*ฅ)>