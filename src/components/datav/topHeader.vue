<template>
  <div id="top-header">
    <dv-decoration-8 class="header-left-decoration" />
    <!-- <dv-decoration-11 class="header-center-decoration" /> -->
    <dv-decoration-8 class="header-right-decoration" :reverse="true" />
    <div class="center-title">医析医疗设备效率效益分析平台</div>
  </div>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style lang="less">
#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin-top: 30px;
  }

  .header-left-decoration, .header-right-decoration {
    width: 25%;
    height: 60px;
  }

  .center-title {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
}
</style>
