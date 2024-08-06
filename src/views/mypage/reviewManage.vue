<template>
    <div class="reviewManage-box">
        <HeaderComponent :headerTitle="pageTitle"></HeaderComponent>
      <div class="body-box">
        <div class="card-wrap">
          <div class="card">
            <img src="https://via.placeholder.com/120x120" alt="Image description" class="card-image">
          <div class="card-content">
            <div class="rating yang-normal">
              <span class="star color_yellow">★</span>
              <span>4.5 / 5</span>
              <span class="hashtag color_white bgcolor_purple">#편의성</span>
              <span class="hashtag color_white bgcolor_purple">#액티비티</span>
            </div>
            <span class="description color_wgray yang-normal">7월 여름 여행지로 좋습니다. 추천 드립니다.7월 여름 여행지로 좋습니다. 추천 드립니다. 여름 여행지로 좋습니다. 추천 드립니다.7월 여름 여행지로 좋습니다. 추천 드립니다.7월 여름 여행지로 좋습니다. 추천 드립니다. 여름 여행지로 좋습니다. 추천 드립니다.</span>
            <div>
              <span class="date color_wblue yang-normal">2024.04.06</span>
              <div class="card-actions">
                <span class="icon color_purple bgcolor_mwpink">&#9998;</span>
                <span class="icon color_purple bgcolor_mwpink">🗑️</span>
              </div>
            </div>
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
    name: 'ReviewManage',
    components: {
        HeaderComponent, FooterComponent
    },
    data() {
      return {
        pageTitle: '내 리뷰 관리'
      };
    },
  };
</script>
<style scoped>
  .reviewManage-box{
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    height:100vh; /* Footer 고정이 꼬이지 않기 위해 body-box와 맞춰야 한다. */
  }

  .body-box{
    width:360px;
    height:625px;
    box-sizing: border-box;
  }

  .card-wrap .card {
    display: flex;
    align-items: center;
    border-bottom:1px solid #d9d9d9;
    height:120px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  .card-wrap .card .card-image {
    width: 80px;
    height: 100px;
    border-radius: 0.5rem;
    margin-right: 1rem;
    object-fit: cover;
  }

  .card-wrap .card .card-content {
    flex-grow: 1;
    text-align: left;
  }

  .card-wrap .card .card-content .rating {
    font-size:0.6rem;
  }

  .card-wrap .card .card-content .rating .star {
    margin-right: 0.25rem;
  }

  .card-wrap .card .card-content .rating .hashtag {
    padding: 0.3rem;
    margin-left: 0.5rem;
    border-radius: 0.75rem;
    font-size: 0.7rem;
  }

  .card-wrap .card .card-content .description { /* 3줄 이상일 시 ... 으로 보여짐 */
    margin: 0.5rem 0;
    font-size: 0.75rem;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 235px;
    height: 55px;
    white-space: normal;
    display:-webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .card-wrap .card .card-content .date {
    font-size: 0.6rem;
  }

  .card-wrap .card .card-actions {
    display:inline-block;
    text-align: center;
    margin-left: 103px;
  }

  .card-wrap .card .card-actions .icon {
    display:inline-block;
    cursor: pointer;
    border-radius:50%;
    border:1px solid #FFF7FF;
    width : 25px;
    height : 25px;
    margin-left:0.5rem;
  }

  .card-wrap .card .card-actions .icon:hover{
    background-color:#6A5ACD;
    color:white;
  }

</style>