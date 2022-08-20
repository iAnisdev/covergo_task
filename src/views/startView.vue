<template>
  <div class="text-center max-w-4xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
    <div class="bg-nuetral-50 rounded-lg">
      <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
        <div class="lg:self-center">
          <h2 class="text-xl font-bold text-[#1A1A1A] sm:text-xl">
            <span class="block">Hello There!</span>
          </h2>
          <p class="mt-4 text-base leading-6 text-[#1A1A1A]">Lets buy Some Insurance. It is going to take only a few
            steps</p>
          <button type="button"
            class="inline-flex items-center mt-6 border border-transparent text-sm leading-4 bg-black px-8 py-2 font-medium rounded-sm shadow-sm text-white" @click="goToNext">Start</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'StartView',
  setup() {
    const router = useRouter();
    function goToNext() {
      router.push('/form');
    }
    return {
      goToNext
    }
  }
});
</script>
