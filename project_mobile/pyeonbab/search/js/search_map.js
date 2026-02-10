(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
key: "AIzaSyCcwKDQM2Pzfg_BmsBB3l1eqwnDy7vkCzA", v: "beta"
// Add other bootstrap parameters as needed, using camel case.
// Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
});

// 지도 시작
let map, infoWindow;
let geocoder;
let responseDiv;
let response;
async function initMap() {
	// 최초의 내 위치
	const position = { lat: 37.39873, lng: 126.9208 };
	// Request needed libraries.
	//@ts-ignore
	const { Map } = await google.maps.importLibrary("maps");
	const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

	// 맵 설정
	map = new Map(document.getElementById("map"), {
		zoom: 16,
		center: position,
		mapId: "honbab",
		//맵 안의 ui컨트롤
		disableDefaultUI: false, //기본 ui전체 컨트롤
		zoomControl: false, //축적
		mapTypeControl: false, //왼쪽상단 맵
		scaleControl: false, //화면 확대 축소
		streetViewControl: false, //위성사진
		rotateControl: false,
		fullscreenControl: true, //전체화면

	});

	const iconBase ="./images/";
	const icons = {
		default_icon: {
		  icon: iconBase + "marker_icon.png",
		},
		library: {
		  icon: iconBase + "library_maps.png",
		},
		info: {
		  icon: iconBase + "info-i_maps.png",
		},
	};
  
	const features = [
		{//처음 마커위치
		  position: new google.maps.LatLng(37.39873, 126.9208), //마커 위치 변경
		  type: "default_icon", //마커 아이콘
		},
		{
		  position: new google.maps.LatLng(37.39873, 126.9208),
		  type: "default_icon",
		}
	];

	// 마커
	const marker = new google.maps.Marker({
		map: map,
		position: features[0].position,
		title: "my_location",
		icon: icons[features[0].type].icon,
	});
  
  
	infoWindow = new google.maps.InfoWindow();

	const locationButton = document.createElement("button");

	locationButton.classList.add("custom-map-control-button");
										//'내 위치'버튼위치
	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(locationButton);
	//검색창 연동
	var submitButton = document.getElementById('submit');
	var clearButton = document.getElementById('clear');
	var inputText = document.getElementById('input_location');
	var default_text = inputText.value;
	var is_located = false;
	var my_location_marker = [];
	
	geocoder = new google.maps.Geocoder();
	
	map.addListener("click", (e) => {
		geocode({ location: e.latLng });
	});
	submitButton.addEventListener("click", () =>
		geocode({ address: inputText.value }),
	);
	//clear();

	
	function clear(clear_all) {
		//모든 마커삭제
		if(clear_all)
		marker.setMap(null);
	
		//내 위치 마커 삭제
		for (var i in my_location_marker) {
			my_location_marker[i].setMap(null);	
		}
		my_location_marker.pop();
		
		//버튼 off로 초기화
		if(locationButton.classList.contains('on'))
		locationButton.classList.remove('on');
	}

	function geocode(request) {
		clear(true);
		geocoder
		.geocode(request)
		.then((result) => {
			const { results } = result;

			map.setCenter(results[0].geometry.location);
			marker.setPosition(results[0].geometry.location);
			marker.setMap(map);
			return results;
		})
		.catch((e) => {
			if((inputText.value == default_text && inputText.classList.contains('guide'))||inputText.value == ""||inputText.value == null || inputText.value == undefined){ 
				alert("내용을 입력해주세요")
			}else{
				alert("존재하지 않는 주소입니다.")
			}
			return
		});
	}

	locationButton.addEventListener("click", 
	() => {
		// Try HTML5 geolocation.
		//화면 정지
		document.getElementById('block').style.display ="block";
		if (navigator.geolocation) {
			clear(true)
			if(is_located){
				//위치 지정 필요
				is_located = false
				document.getElementById('block').style.display ="none";
				return
			}
			navigator.geolocation.getCurrentPosition(
				(position) => {
					//내 위치
					const pos = {
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					};
					
					const marker = new google.maps.Marker({
						map: map,
						position: pos,
						title: "my_location",
						icon: icons[features[0].type].icon,
					});
						map.setCenter(pos);
						my_location_marker.push(marker);
						document.getElementById('block').style.display ="none";
				},
				() => {	
					handleLocationError(true, infoWindow, map.getCenter());
					document.getElementById('block').style.display ="none";
				}
			);
			//버튼 아이콘 on으로 변경
			locationButton.classList.add('on');
			//위치 지정 완료
			is_located = true;
		} else {
			stop_all = true;
			// Browser doesn't support Geolocation
			handleLocationError(false, infoWindow, map.getCenter());
			
		}
		//대망의 데이터베이스로 화면에 편의점 위치정보 뿌리기
		// Create a <script> tag and set the USGS URL as the source.
		const script = document.createElement("script");

		// This example uses a local copy of the GeoJSON stored at
		// http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
		script.src =
		"http://www.safemap.go.kr/legend/legendApiXml.do?apikey=NM8F16J2-NM8F-NM8F-NM8F-NM8F16J2FP&layer=A2SM_CMMNPOI&style=A2SM_CMMNPOI_08";
		document.getElementsByTagName("head")[0].appendChild(script);

	}); 
} 



function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	/* infoWindow.setContent(
		browserHasGeolocation
		? "주소를 불러오는데 실패했습니다."
		: "Error: Your browser doesn't support geolocation."
	);  
	infoWindow.open(map);
	초기 주소 불러오기 실패시 동작*/
	if(browserHasGeolocation){
		alert("주소를 불러오는데 실패했습니다.");
	}else{
		alert("Error: Your browser doesn't support geolocation.");
	}
	
	
}



const eqfeed_callback = function (results) {
  for (let i = 0; i < results.features.length; i++) {
    const coords = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);

    new google.maps.Marker({
      position: latLng,
      map: map,
    });
  }
};

initMap();
window.eqfeed_callback = eqfeed_callback;



