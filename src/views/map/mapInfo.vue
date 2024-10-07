<template>
    <div class="map-box">
        <HeaderComponent :headerTitle="pageTitle"></HeaderComponent>
        <div class="body-box">
            <div id="map-wrap"></div>
            <div class="map-footer yang-normal">
                <span class="bgcolor_white">근처 맛집</span><span class="bgcolor_white">근처 관광지</span><span class="bgcolor_white">근처 숙소</span>
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>
<script>
  import HeaderComponent from '@/components/common/HeaderComponent.vue';
  import FooterComponent from '@/components/common/FooterComponent.vue';
    
  export default {
    name: 'MapInfo',
    components: {
        HeaderComponent, FooterComponent
    },
    data() {
      return {
        pageTitle: '000님, 안녕하세요!'
      };
    },
    mounted() { 
        /* google다음과 같이 클래스 위의 변수에 암묵적으로 정의하는 것입니다. */
        const google = window.google;

        // 구글 지도 초기화
        const map = new google.maps.Map(document.getElementById('map-wrap'), {
            zoom: 15,
            mapTypeControl:false,               /* 1. 지도, 위성 컨트롤 버튼 비활성화 */
            zoomControl:false,                  /* 2. 확대/축소 컨트롤 버튼 비활성화 */
            fullscreenControl:false,            /* 3. 전체화면 버튼 비활성화 */
            streetViewControl:false,            /* 4. 거리 뷰 버튼 비활성화*/
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        if (navigator.geolocation) { 
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    if (this.marker) {
                        this.marker.setMap(null); // 이전 마커가 있으면 제거
                    }

                    this.marker = new google.maps.Marker({
                        position: { lat: latitude, lng: longitude },
                        map: map,
                        title: '현재 위치'
                    });

                    map.setCenter({ lat: latitude, lng: longitude });
                    // map.setZoom(15);
                },
                (error) => { /* 위치정보에 동의하지 않는 경우 이전 페이지로 이동*/
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            this.errorMessage = "위치 정보 접근이 거부되어 서비스를 이용할 수 없습니다.";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            this.errorMessage = "위치 정보를 사용할 수 없습니다.";
                            break;
                        case error.TIMEOUT:
                            this.errorMessage = "위치 정보 요청 시간이 초과되었습니다.";
                            break;
                        case error.UNKNOWN_ERROR:
                            this.errorMessage = "알 수 없는 오류가 발생했습니다.";
                            break;
                    }

                    alert(this.errorMessage);
                    this.$router.back();
                }
            );
        }else {
            alert("위치 정보를 지원하지 않아 서비스를 이용할 수 없습니다.");
            this.$router.back();
        }
    },
    methods: {
        
    },
};
</script>
<style scoped>
    .map-box{
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
        height:100vh; /* Footer 고정이 꼬이지 않기 위해 body-box와 맞춰야 한다. */
    }

    .map-box .body-box{
        height: 625px;
    }

    .map-box .body-box #map-wrap{
        width:100%;
        height:100%;
    }

    .map-box .body-box .map-footer{
        display:flex;
        justify-content: space-between;
        position:relative;
        z-index:999;
        top:-40px;
    }

    .map-box .body-box .map-footer span{
        display:inline-block;
        padding:0.5rem;
        flex:1;
        cursor:pointer;
        border:1px solid #B3E0FF;
    }

    .map-box .body-box .map-footer span:first-child{
        border-radius: 1.5rem 0 0 0;
        border-right:1px solid #B3E0FF;
    }

    .map-box .body-box .map-footer span:last-child{
        border-radius: 0 1.5rem 0 0;
        border-left:1px solid #B3E0FF;
    }

    .map-box .body-box .map-footer span:hover{
        background-color: #B3E0FF;
        color:white;
    }
</style>