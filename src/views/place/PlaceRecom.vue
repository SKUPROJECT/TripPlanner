<template>
    <div class="placeRecom-box">
        <HeaderComponent :headerTitle="pageTitle"></HeaderComponent>
        <div class="tripBg">
            <span class="trip-title yang-title color_white">이런 여행은<br>어떠세요?</span>
        </div>
        <div class="body-box">
            <div class="best-place">
                <div class="best-place-wrap">
                    <img src="@/assets/img/airplane-icon.png" alt="Logo"/>
                    <span class="best-title yang-normal">BEST 여행지</span>                  
                </div>
                <ul class="yang-normal">
                    <li>1. 대한민국 서울</li>
                    <li>2. 대한민국 제주도</li>
                    <li>3. 대한민국 부산</li>
                    <li>4. 인도네시아 발리</li>
                    <li>5. 베트남 푸꾸욱</li>
                    <li>6. 일본 도쿄</li>
                </ul>
            </div>
            <div class="best-place-recom" @click="this.$router.push('placeInfo');">
                <div class="best-place-wrap">
                    <img src="@/assets/img/airplane-icon.png" alt="Logo"/>
                    <span class="best-title yang-normal">OOO님을 위한 여행지</span>                  
                </div>
                <div class="placeRecom-wrap">
                    <div class="placeRecom-title">
                        <span class="placeRecom-name yang-normal">1. 대한민국 서울 - 경복궁</span>
                        <div class="rating color_yellow">★★★★☆</div>
                    </div>
                    <div class="placeRecom-card">
                        <img src="https://via.placeholder.com/120x120" alt="Image description" class="card-image">
                        <span class="card-about yang-normal">대한민국의 역사, <br>조선 왕조 최고의 궁궐이다.<br> 자세한 관람을 원한다면 <br>우리궁궐지킴이 해설사들의 <br>설명과 함께하는 것이 가장 좋다.</span>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>
<script>
  import HeaderComponent from '@/components/common/HeaderComponent.vue';
  import FooterComponent from '@/components/common/FooterComponent.vue';

  export default {
    name: 'PlaceRecom',
    components: {
        HeaderComponent, FooterComponent
    },
    data() {
      return {
        pageTitle: '000님, 안녕하세요!'
      };
    },
  };
</script>
<style scoped>
  .placeRecom-box{
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    height:100vh; /* Footer 고정이 꼬이지 않기 위해 body-box와 맞춰야 한다. */
  }

  .placeRecom-box .tripBg{
    width: 100%;
    height: 200px;
    background-image: url('@/assets/img/tripBg.PNG');
    background-size: cover;
    background-position: center;
    display:flex;
    align-items: center;
    justify-items: center;
  }

  .placeRecom-box .tripBg .trip-title{
    flex:1;
    font-size:1.5rem;
  }

  .body-box{
    height: 625px;
    padding:0.75rem;
    text-align: left;
  }

  .body-box .best-place{
    border-radius: 0.5rem;
    border:1px solid #B3E0FF;
    height:200px;
    margin-bottom:1rem;
  }

  .body-box .best-place .best-place-wrap{
    display:flex;
    align-items: center;
    margin-top:0.5rem;
    margin-left:0.5rem;
    gap:0.5rem;
  }

  .body-box .best-place .best-place-wrap img{
    width:25px;
    height:25px;
  }

  .body-box .best-place .best-place-wrap .best-title{
    margin-top:0.2rem;
  }

  .body-box .best-place ul{
    margin-top:1rem;
    margin-left:1.25rem;
    font-size: 0.8rem;
  }

  .body-box .best-place ul li{
    cursor:pointer;
  }

  .body-box .best-place ul li:hover{
    color:#B3E0FF;
  }

  .body-box .best-place-recom{
    border-radius: 0.5rem;
    border:1px solid #B3E0FF;
    margin-bottom:1rem;
    cursor:pointer;
  }

  .body-box .best-place-recom:hover{
    background-color:#B3E0FF;
  }

  .body-box .best-place-recom .best-place-wrap{
    display:flex;
    align-items: center;
    margin-top:0.5rem;
    margin-left:0.5rem;
    gap:0.5rem;
  }

  .body-box .best-place-recom .best-place-wrap img{
    width:25px;
    height:25px;
    border-radius: 50%;
  }

  .body-box .best-place-recom .best-place-wrap .best-title{
    margin-top:0.2rem;
  }

  .body-box .best-place-recom .placeRecom-wrap{
    margin:1rem 1.25rem 1rem 1.25rem;
  }

  .body-box .best-place-recom .placeRecom-wrap .placeRecom-title{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .body-box .best-place-recom .placeRecom-wrap .placeRecom-title .placeRecom-name{
    font-size:0.75rem;
  }

  .body-box .best-place-recom .placeRecom-wrap .placeRecom-title .rating{
    font-size:0.8rem;
  }

  .body-box .best-place-recom .placeRecom-wrap .placeRecom-card{
    display:flex;
    align-items: center;
  }

  .body-box .best-place-recom .placeRecom-wrap .placeRecom-card .card-image{
    border-radius: 0.5rem;
    margin-right: 1rem;
    object-fit: cover;
  }

  .body-box .best-place-recom .placeRecom-wrap .placeRecom-card .card-about{
    font-size:0.8rem;
    width:150px;
  }
</style>