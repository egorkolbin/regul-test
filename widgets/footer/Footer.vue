<script setup lang="ts">
import { useNuxtApp } from '#app'
const { $viewport } = useNuxtApp()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-links">
        <div class="link copyright">© Annonce 2023</div>
        <div class="link">Документы</div>
        <div class="link">О компании</div>

        <div v-if="$viewport.isLessThan('tablet')" class="link">Продавцам</div>
        <div v-if="$viewport.isLessThan('tablet')" class="link">
          Покупателям
        </div>
        <div v-if="$viewport.isLessThan('tablet')" class="link">
          Разместить объявление
        </div>
        <div v-if="$viewport.isLessThan('tablet')" class="link lang">
          <img src="/img/icons/flag.png" alt="" /> <span>Русский</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '/app/assets/scss/variables' as *;

.footer {
  margin-top: auto;
  padding: 24px 0 40px;
  background: var(--white-100);
  border-top: 1px solid var(--grey-100);

  @media (max-width: $tablet) {
    padding: 24px 8px 40px;
  }

  &-links {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: $tablet) {
      flex-direction: column;
      align-items: flex-start;
    }

    .link {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 500;
      font-size: 15px;
      line-height: 160%;
      color: var(--text);

      &.copyright {
        color: var(--black);
      }
    }
  }
}
</style>
