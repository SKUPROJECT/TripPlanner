<template>
    <div>
    </div>
</template>
<script>
import { googleLogin } from '@/js/api';

export default {
    name: 'GoogleLogin',
    created(){
      this.parseHashParams();
    },
    methods:{
      parseHashParams() {
        const hash = this.$route.hash;
        const params = new URLSearchParams(hash.slice(1)); 
        
        const accessToken = params.get('access_token');
        const tokenType = params.get('token_type');
        
        googleLogin(accessToken, tokenType);
      }
    }
};
</script>