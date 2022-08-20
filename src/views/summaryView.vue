<template>
    <div class="max-w-4xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
        <div class="bg-nuetral-50 rounded-lg">
            <div class="px-6 sm:px-16">
                <div class="lg:self-center">
                    <h2 class="text-small font-bold text-[#1A1A1A] sm:text-small text-center">
                        <span class="block">Summary</span>
                    </h2>
                    <h5 class="text-xs font-bold text-[#1A1A1A] sm:text-xs text-center mt-4">
                        <span class="block">${Name};</span>
                    </h5>
                    <div class="text-center p-2">
                        <p class="text-xs text-gray-600">Name: Anis</p>
                        <p class="text-xs text-gray-600">Age: 29</p>
                        <p class="text-xs text-gray-600">Where do you live: Hong Kong</p>
                        <p class="text-xs text-gray-600">Package: Standard</p>
                        <p class="text-xs text-gray-600">Premium: 500HKD</p>
                    </div>
                    <div class="flex justify-center">
                        <button type="button"
                            class="inline-flex items-center mt-6 border border-gray-400 text-sm leading-4 bg-whte px-4 py-1 font-medium rounded-sm shadow-sm text-gray-600">Back</button>
                        <button type="button"
                            class="inline-flex items-center ml-4 mt-6 border border-transparent text-sm leading-4 bg-black px-4 py-1 font-medium rounded-sm shadow-sm text-white">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})

</script>

<style scoped>
</style>