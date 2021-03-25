import { useEffect, useState } from "react";
import { MinH } from "../../public/indexStyle";
import { GetState } from "../../context/context";

export default function Map() {
  const [mapArr, setMapArr] = useState<any>([]);
  const contexValue = GetState();
  console.log(contexValue.placement);

  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);

    let geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(
      contexValue.placement,
      function (result: any, status: any) {
        if (status === window.kakao.maps.services.Status.OK) {
          console.log(result);
          var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          var marker = new window.kakao.maps.Marker({
            map: map,
            position: coords,
          });
          setMapArr({
            ...mapArr,
            marker,
          });
          /*           let i;
          for (i = 0; i < mapArr.length; i++) {
            mapArr[i].setMap(map);
          } */
          map.setCenter(coords);
          var iwContent = `<div style="padding:5px;">${result[0].address.address_name}</div>`; // 띄우고 싶은 거

          var infowindow = new window.kakao.maps.InfoWindow({
            content: iwContent,
            removable: true, // false이면 닫기 버튼 없음 true이면 있음
          });

          window.kakao.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
          });
        }
      }
    );
  }, [contexValue.placement]);

  return (
    <>
      <div className="App">
        <div
          id="map"
          style={{ width: "100vw", height: "100vh", minHeight: `${MinH}` }}
        />
      </div>
    </>
  );
}
