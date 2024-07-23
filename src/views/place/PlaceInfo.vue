<template>
    <div class="place-box">
        <HeaderComponent :headerTitle="pageTitle"></HeaderComponent>
        <div class="body-box">
          <div class="card">
              <img class="place-img" src="https://via.placeholder.com/120x120" alt="Place Image">
              <div class="card-content yang-normal">
                <div class="title yang-title">부산 해운대 해수욕장</div>
                <div class="location">
                    <img src="@/assets/img/location.png" alt="Location Icon">
                    <span class="location-txt">부산 해운대구 우동</span>
                </div>
                <div class="rating color_yellow">★★★★☆</div>
              </div>
          </div>
          <div class="place-section yang-normal">
            <div class="description-title">About Places</div>
            <div class="description color_wgray">
                해운대 해수욕장은 부산광역시 해운대구에 위치한 대한민국의 대표적인 해수욕장입니다. 매년 많은 관광객들이 찾는 명소로, 아름다운 해변과 다양한 시설 덕분에 여름철에는 특히 인기가 높습니다.
            </div>
          </div>
          <div class="place-slider">
            <button class="nav-arrow bgcolor_gray color_white prev">&#10094;</button>
            <dlv class="place-wrap">
              <img class="place-img" src="https://via.placeholder.com/200x120" alt="Place Image">
            </dlv>
            <button class="nav-arrow bgcolor_gray color_white next">&#10095;</button>
          </div>
          <div class="review-section yang-normal">
            <img src="@/assets/img/review-list.png" alt="review-list Icon">
            <span>방문자 리뷰</span>
            <span class="icon color_purple bgcolor_mwpink" @click="this.$router.push('reviewForm');">&#9998;</span>
          </div>
          <div class="review-container yang-normal">
            <div class="review-item">
              <div class="review-img">
              </div>
              <div class="review-profile">
                <div class="review-name">
                  임태양
                </div>
                <div class="review-stat">
                  <span class="review-star color_yellow">★</span><span class="review-rating">4.5 / 5</span>
                  <span class="review-tag color_white bgcolor_purple">#편의성</span><span class="review-tag color_white bgcolor_purple">#액티비티</span>
                </div>
              </div>
            </div>
            <div class="review-msg color_wgray">
                7월 여름 여행지로 좋습니다. 추천 드립니다. 
            </div>
            <div class="review-date color_wblue">
                2024.07.06
            </div>
          </div>
          <div class="review-container yang-normal">
            <div class="review-item">
              <div class="review-img">
              </div>
              <div class="review-profile">
                <div class="review-name">
                  임태양
                </div>
                <div class="review-stat">
                  <span class="review-star color_yellow">★</span><span class="review-rating">4.5 / 5</span>
                  <span class="review-tag color_white bgcolor_purple">#휴양</span><span class="review-tag color_white bgcolor_purple">#자연</span>
                </div>
              </div>
            </div>
            <div class="review-msg color_wgray">
                올 여름 바다에서 시원하게 보냈습니다.
            </div>
            <div class="review-date color_wblue">
                2024.06.28
            </div>
          </div>
          <div class="review-container yang-normal">
            <div class="review-item">
              <div class="review-img">
              </div>
              <div class="review-profile">
                <div class="review-name">
                  임태양
                </div>
                <div class="review-stat">
                  <span class="review-star color_yellow">★</span><span class="review-rating">4.5 / 5</span>
                  <span class="review-tag color_white bgcolor_purple">#편의성</span>
                </div>
              </div>
            </div>
            <div class="review-msg color_wgray">
                자연경관이 아름답습니다.! 
            </div>
            <div class="review-date color_wblue">
                2024.05.20
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
    name: 'PlaceInfo',
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
  .place-box{
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center; 
    height:100vh;  /* Footer 고정이 꼬이지 않기 위해 body-box와 맞춰야 한다.*/
  }

  .body-box{
    width: 360px; /* 이미지요소로 인한 WIDTH 고정 */
  }

  .card {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    width: 100%;
  }

  .card .place-img{
    width: 120px;
    height: 120px;
    border-radius: 25px;
    padding : 1rem;
  }

  .card .card-content{
    padding: 1rem 1rem 1rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
  }

  .card .card-content .title {
    font-size: 1rem;
  }

  .card .card-content .location {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
  }

  .card .card-content .location .location-txt{
    margin-top:0.5rem;
  }

  .card .card-content .location img {
    width: 15px;
    height: 17px;
    margin-right: 0.5rem;
  }

  .place-section{
    padding:1rem;
  }

  .place-section .description-title {
    text-align: left;
    font-size: 1rem;
    margin-bottom : 0.5rem;
  }

  .place-section .description {
    font-size: 0.75rem;
    padding : 0.5rem;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
    text-align: left;
  }

  .place-slider{
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 0 1rem;
    align-items : center;
  }

  .place-slider .place-wrap .place-img{
    width: 200px;
    height: 120px;
    border-radius: 25px;
    padding : 1rem;
  }

  .place-slider .nav-arrow {
    display:inline-block;
    border-radius: 50%;
    width:30px;
    height:30px;
    text-align:center;
    cursor:pointer;
    border:none;
  }

  .review-section {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-top:1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
  }

  .review-section img{
    width:20px;
    height:20px;
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;
  }

  .review-section .icon {
    margin-left: auto;
    cursor: pointer;
    border-radius:50%;
    border:1px solid #FFF7FF;
    width : 25px;
    height : 25px;
  }

  .review-section .icon:hover{
    background-color:#6A5ACD;
    color:white;
  }

  .review-container{
    border-bottom: 1px solid #D9D9D9;
    box-shadow: 0 4px 6px #D9D9D9;
  }

  .review-container .review-item{
    display:flex;
    font-size:0.75rem;
    justify-content: space-between;
    padding:1rem;
  }

  .review-container .review-item .review-img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url('https://via.placeholder.com/50');
    background-size: cover;
    background-position: center;
  }

  .review-container .review-item .review-profile{
    margin-left:0.75rem;
    text-align: left;
    width:85%;
  }

  .review-container .review-item .review-profile .review-stat .review-star{
    font-size:0.75rem;
    margin-right:0.25rem;
  }

  .review-container .review-item .review-profile .review-stat .review-tag{
    padding: 0.3rem;
    margin-left: 0.5rem;
    border-radius: 0.75rem;
    font-size: 0.7rem;
  }

  .review-container .review-item .review-profile .review-stat .review-rating{
    font-size:0.5rem;
  }

  .review-container .review-msg{
    text-align: left;
    padding:0 1rem 0.5rem 1rem;
    font-size:0.75rem;
  }

  .review-container .review-date{
    text-align: left;
    padding:0 1rem 0.5rem 1rem;
    font-size:0.6rem;
  }
</style> 