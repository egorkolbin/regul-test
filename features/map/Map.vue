<script setup lang="ts"></script>

<template>
  <div class="map" style="position: relative; overflow: hidden">
    <iframe
      src="https://yandex.ru/map-widget/v1/?ll=39.671417%2C47.244113&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzI5MzEzMRJP0KDQvtGB0YHQuNGPLCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0JLQvtGA0L7QvdC10LbRgdC60LDRjyDRg9C70LjRhtCwLCAyMSIKDcmuHkIV0_k8Qg%2C%2C&z=17.64"
      width="200"
      height="132"
      frameborder="1"
      allowfullscreen="true"
      style="position: relative"
    ></iframe>
  </div>
</template>

<style scoped lang="scss">
@use '/app/assets/scss/variables' as *;

.map {
  width: 200px;
  flex: 0 0 200px;
  height: 132px;

  @media (max-width: $tablet) {
    width: 100%;
    flex: 1 1 auto;
  }

  iframe {
    border: none;
    border-radius: 8px 16px 16px 0;

    @media (max-width: $tablet) {
      border-radius: 16px 16px 0 0;
      width: 100%;
    }
  }
}
</style>
