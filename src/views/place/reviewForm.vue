<template>
    <div class="reviewForm-box">
        <HeaderComponent :headerTitle="pageTitle"></HeaderComponent>
        <div class="body-box">
            <div class="hash-tag color_white bgcolor_purple yang-normal">#관심사 추가</div>
            <div class="rating-wrap yang-normal">
                <span class="star color_yellow">★</span><span class="star color_yellow">★</span><span class="star color_yellow">★</span><span class="star color_yellow">★</span><span class="star color_yellow">☆</span>
            </div>
            <textarea class="yang-normal" placeholder="리뷰를 작성해 주세요."></textarea>
            <div class="word-wrap yang-normal color_wgray">
                <span class="word-cnt">0</span>/<span class="word-max">500자</span>
            </div>
            <button @click="reviewSubmit" class="btn yang-title bgcolor_wyellow">등록하기</button>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>
<script>
  import HeaderComponent from '@/components/common/HeaderComponent.vue';
  import FooterComponent from '@/components/common/FooterComponent.vue';

  export default {
    name: 'ReviewForm',
    components: {
        HeaderComponent, FooterComponent
    },
    data() {
      return {
        pageTitle: '리뷰 작성'
      };
    },
    methods: {
      reviewSubmit() {
        // Implement your ID finding logic here
        console.log('reviewSubmit');
      },
    }
  };
</script>
<style scoped>
  .reviewForm-box{
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    height:100vh; /* Footer 고정이 꼬이지 않기 위해 body-box와 맞춰야 한다. */
  }

  .body-box{
    height: 625px;
    padding:1rem;
    text-align: left;
  }

  .hash-tag{
    display: inline-block;
    padding: 0.35rem;
    border-radius: 0.75rem;
    font-size: 0.75rem;
    cursor:pointer;
    margin-bottom:2rem;
  }

  .rating-wrap{
    margin-bottom:1rem;
  }

  .rating-wrap .star{
    font-size: 1.25rem;
    margin-left:0.5rem;
    cursor:pointer;
  }

  textarea{
    width:100%;
    height: 30%;
    border-radius: 0.5rem;
    border:1px solid #D9D9D9;
    padding:0.5rem;
    text-decoration: none;
    resize: none;
    box-sizing: border-box;
  }

  .word-wrap{
    margin-top:0.5rem;
    text-align: right;
    font-size:0.75rem;
  }

  .btn {
    width: 100%;
    padding: 0.6rem;
    margin-bottom: 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top:1rem;
  }
</style>