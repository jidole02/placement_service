import { useEffect, useState } from "react";

export default function Map() {
  const [mapArr, setMapArr] = useState<any>([]);

  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);

    let geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(
      "대전 서구 동서대로 967",
      function (result: any, status: any) {
        if (status === window.kakao.maps.services.Status.OK) {
          var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          var marker = new window.kakao.maps.Marker({
            map: map,
            position: coords,
          });
          setMapArr({
            ...mapArr,
            marker,
          });
          let i;
          for (i = 0; i < mapArr.length; i++) {
            mapArr[i].setMap(map);
          }
          /*           map.setCenter(coords); */
        }
      }
    );
  }, []);

  return (
    <>
      <div className="App">
        <div id="map" style={{ width: "100vw", height: "100vh" }} />
      </div>
    </>
  );
}
