module.exports={
  configureWebpack:{
    resolve:{
      extensions:[],
      alias:{
        //'@':'src'  this.$router this.$store
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
      }

    }
  }
}
