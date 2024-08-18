<template>
    <div class="map-box">
        <HeaderComponent :headerTitle="pageTitle"></HeaderComponent>
        <div class="btn" @click="initMap()">버튼</div>
        <div class="body-box">
            <div id="map-wrap"></div>
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
</style>