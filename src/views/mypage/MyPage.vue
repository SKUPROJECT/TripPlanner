<!-- src/components/MyPage.vue -->
<template>
    <div class="myPage-box">
      <HeaderComponent :headerTitle="pageTitle"></HeaderComponent>
      <div class="body-box">
        <div class="profile-card">
          <div class="profile-image"></div>
          <div class="profile-details yang-normal">
              <div class="profile-box">
                <div class="profile-name">임태양</div>
                <p class="profile-id color_wgray">#sunsky</p>
              </div>
              <div class="profile-stats color_black">
                  <div>
                      <p>100</p>
                      <span>팔로워</span>
                  </div>
              </div>
              <div class="profile-stats color_black">
                  <div>
                      <p>100</p>
                      <span>팔로잉</span>
                  </div>
              </div>
          </div>
        </div>

        <div class="profile-tag yang-normal color_wgray">#20대 #남성 #isfj #액티비티 #음식</div>
        <div class="profile-msg yang-normal color_wgray">안녕하십니까 임태양 입니다.</div>
        <div class="list-container yang-normal">
          <div class="list-item" @click="this.$router.push('placeInfo');">
              <div class="icon">🏖️</div>
              <div class="text">여행지 추천 코스</div>
          </div>
          <div class="list-item">
              <div class="icon">👤</div>
              <div class="text">관심사 관리</div>
          </div>
          <div class="list-item" @click="this.$router.push('reviewManage');">
              <div class="icon">📝</div>
              <div class="text">내 리뷰 관리</div>
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
    name: 'MyPage',
    components: {
        HeaderComponent, FooterComponent
    },
    data() {
      return {
        pageTitle: '마이페이지'
      };
    },
  };
</script>
  
<style scoped>
  .myPage-box{
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    height:100vh; /* Footer 고정이 꼬이지 않기 위해 body-box와 맞춰야 한다. */
  }

  .body-box{
    height: 625px;
  }

  .profile-card {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
    box-sizing:border-box;
    justify-content: space-between;
    margin-top:1.5rem;
  }

  .profile-card .profile-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url('https://via.placeholder.com/50');
    background-size: cover;
    background-position: center;
    margin-left: 0.75rem;
  }

  .profile-card .profile-details {
    display: flex;
    flex-direction: row;
    font-size: 0.75rem;
    width:70%;
    justify-content: space-between;
  }

  .profile-card .profile-details .profile-box .profile-name {
    margin-bottom: 0.75rem;
  }

  .profile-card .profile-details .profile-stats div {
    text-align: center;
  }

  .profile-card .profile-details .profile-stats div p {
    margin: 0;
    margin-bottom: 0.75rem;
  }

  .profile-tag, .profile-msg{
    font-size: 0.75rem;
    text-align: left;
    margin-top:1rem;
    padding:1.25rem;
  }

  .profile-msg{
    border-bottom: 1px solid #D9D9D9;
    box-shadow: 0 4px 6px #D9D9D9;
  }

  .list-container {
    width: 100%;
  }

  .list-container .list-item {
    display: flex;
    align-items: center;
    padding: 1rem 1.2rem;
    border-bottom: 1px solid #D9D9D9;
    box-shadow: 0 4px 6px #D9D9D9;
    cursor:pointer;
  }

  .list-container .list-item:hover{
    background-color:#D9D9D9;
  }

  .list-container .list-item .icon {
    width: 24px;
    height: 24px;
    margin-right: 1.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list-container .list-item .text {
    font-size: 0.75rem;
  }

</style>
  