var img_url = ["https://cdn.voicetube.com/assets/thumbnails/paREY4LLwEY_s.jpg",
	"https://cdn.voicetube.com/assets/thumbnails/stxQq0kI4pk_s.jpg",
	"https://cdn.voicetube.com/assets/thumbnails/ar8S6virCwM_s.jpg",
	"https://cdn.voicetube.com/assets/thumbnails/ltzy5vRmN8Q_s.jpg",
	"https://cdn.voicetube.com/assets/thumbnails/z1q7LB5nD3E_s.jpg",
	"https://cdn.voicetube.com/assets/thumbnails/xMGZxvKzPNo_s.jpg",
	"https://cdn.voicetube.com/assets/thumbnails/og0_nVogNjw_s.jpg",
	"https://cdn.voicetube.com/assets/thumbnails/9bAiXJoNdy0_s.jpg",
];
var title_list = [
	"《尖叫旅社3：怪獸假期》2018 電影預告",
	"班尼迪克·康柏拜區的超有戲泡茶指南 (Benedict Cumberbatch Makes a Perfect Cup of Hot Tea // Omaze)",
	"【TED-ed】當一天古雅典人 (A day in the life of an ancient askdjasdlka",
	"漢堡王用華堡解釋「網路中立性」給你聽！ (Burger King | Whopper Neutrality)",
	"Women Go Makeup-Free At Work For A Day",
	"Average North Korean vs the Average South",
	"Situations Chinese Immigrants Know Too",
	"Be My Eyes - helping blind see",
];
var link_list = [
	"caption.html?id=paREY4LLwEY",
	"caption.html?id=stxQq0kI4pk",
	"caption.html?id=ar8S6virCwM",
	"caption.html?id=ltzy5vRmN8Q",
	"caption.html?id=z1q7LB5nD3E",
	"caption.html?id=xMGZxvKzPNo",
	"caption.html?id=og0_nVogNjw",
	"caption.html?id=9bAiXJoNdy0",
]

$(document).ready(function() {
	create();
	//留一個就可以
});

function create(){
	console.log("script imported");
	
	for(var i=0; i < title_list.length; i++){
		//Declare elements
	var elem = document.createElement("div");
	var thumbnail = document.createElement("div");
	var img = document.createElement("img");
	var caption = document.createElement("div");
	var title = document.createElement("p");
	var btn_wrapper = document.createElement("p");
	var btn1 = document.createElement("a");
	var btn2 = document.createElement("a");
	var title_link = document.createElement("a");
	var img_link = document.createElement("a");
	//Set elements
	elem.setAttribute("class", "col-sm-4 col-md-4 col-lg-3");
	thumbnail.setAttribute("class", "thumbnail");
	caption.setAttribute("class", "caption");
	btn1.setAttribute("class", "btn btn-primary");
	btn2.setAttribute("class", "btn btn-default");
	title.setAttribute("class", "two");
	img.setAttribute("src", img_url[i]);
	img_link.setAttribute("href", link_list[i]);
	title_link.setAttribute("href", link_list[i]);
	title_link.innerHTML = title_list[i];
	btn1.innerHTML = "Button";
	btn2.innerHTML = "Button";
	//Nest elements
	elem.appendChild(thumbnail);
	img_link.appendChild(img);
	thumbnail.appendChild(img_link);
	thumbnail.appendChild(caption);
	caption.appendChild(title);
	caption.appendChild(btn_wrapper);
	title.appendChild(title_link);
	btn_wrapper.appendChild(btn1);
	btn_wrapper.appendChild(btn2);
	
	document.getElementById("new").appendChild(elem);
	}
}