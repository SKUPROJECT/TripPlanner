<template>
    <div class="placeNear-box">
        <HeaderComponent :headerTitle="pageTitle"></HeaderComponent>
        <div class="body-box">
            <div class="placeNear-title yang-title">내 근처 여행자들</div>
            <div class="placeNear-card">
              <div class="profile-image"></div>
              <div class="profile-wrap yang-normal">
                <div class="id-wrap"><span class="id">jinnnnn1225</span><span class="id-msg"></span></div>
                <div class="dist-wrap"><span class="dist-img"></span><span class="dist">1.2 KM</span></div>
              </div>
            </div>
            <div class="placeNear-card">
              <div class="profile-image"></div>
              <div class="profile-wrap yang-normal">
                <div class="id-wrap"><span class="id">sunskyhyun</span><span class="id-msg"></span></div>
                <div class="dist-wrap"><span class="dist-img"></span><span class="dist">600 M</span></div>
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
    name: 'PlaceNear',
    components: {
        HeaderComponent, FooterComponent
    },
    data() {
      return {
        pageTitle: '000님, 안녕하세요!'
      };
    },
    methods: {
      
    }
  };
</script>
<style scoped>
    .placeNear-box{
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      height:100vh;
    }

    .placeNear-box .body-box{
      height:625px;
      text-align: left;
    }

    .placeNear-box .body-box .placeNear-title {
      margin-bottom:0.5rem;
      padding:1rem 1rem 0 1rem;
    }

    .placeNear-box .body-box .placeNear-card {
      border-bottom:1px solid #D9D9D9;
      padding:1rem;
      display: flex;
      cursor:pointer;
    }

    .placeNear-box .body-box .placeNear-card:hover{
      background-color:#D9D9D9;
    }

    .placeNear-box .body-box .placeNear-card .profile-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-image: url('https://via.placeholder.com/50');
      background-size: cover;
      background-position: center;
    }

    .placeNear-box .body-box .placeNear-card .profile-wrap{
      margin-left:1rem;
      font-size:0.75rem;
    }

    .placeNear-box .body-box .placeNear-card .profile-wrap .id-wrap{
      margin-bottom:0.25rem;
      font-size:0.75rem;
      display: flex;
      align-items: center;
      justify-Content: space-between;
    }

    .placeNear-box .body-box .placeNear-card .profile-wrap .id-wrap .id-msg{
      display:inline-block;
      width: 24px;
      height: 24px;
      margin-left:0.5rem;
      border-radius: 50%;
      background-image: url('@/assets/img/msg-img.png');
      background-size: cover;
      background-position: center;
    }

    .placeNear-box .body-box .placeNear-card .profile-wrap .dist-wrap {
      font-size:0.6rem;
      display: flex;
      align-items: end;
    }

    .placeNear-box .body-box .placeNear-card .profile-wrap .dist-wrap .dist-img{
      display:inline-block;
      width: 20px;
      height: 20px;
      margin-right:0.5rem;
      background-image: url('@/assets/img/dist-img.png');
      background-size: cover;
      background-position: center;
    }
</style>