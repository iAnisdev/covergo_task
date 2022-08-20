<template>
  <div class=" max-w-4xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
    <div class="bg-nuetral-50 rounded-lg">
      <div class="px-6 sm:px-16">
        <div class="lg:self-center">
          <h2 class="text-small font-bold text-[#1A1A1A] sm:text-small text-center">
            <span class="block">Tell us about yourself</span>
          </h2>
          <form class="px-6  w-52">
            <div class="mt-2">
              <label for="name" class="block text-sm text-gray-600">Name</label>
              <div class="mt-1">
                <input type="text" name="name" id="name" class="border border-gray-400 px-2 w-36"
                  placeholder="Enter your name">
              </div>
            </div>
            <div class="mt-2">
              <label for="age" class="block text-sm text-gray-600">Age</label>
              <div class="mt-1">
                <input type="number" name="age" id="age" class="border border-gray-400 px-2 w-36"
                  placeholder="Enter your age">
              </div>
            </div>
            <div class="mt-2">
              <label for="location" class="block text-sm text-gray-600">Where do you live</label>
              <select id="location" name="location" class="border border-gray-400 mt-1 block pr-10 text-base w-36">
                <option>Hong Kong</option>
                <option>USA</option>
                <option>Australia</option>
              </select>
            </div>

            <div class="mt-6">
              <div v-for="(pkg, index) in packages" :package="pkg" :key="index">
                <div class="flex items-center py-1">
                  <input :id="pkg.name" name="notification-method" type="radio"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                  <label :for="pkg.name" class="ml-3 block text-sm font-medium text-gray-700">
                    {{ pkg.title }} {{ pkg.info }}
                  </label>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <h5 class="text-xs font-bold text-[#1A1A1A] sm:text-xs text-center">
                <span class="block">Your Premium is: 500HKD</span>
              </h5>
            </div>
            <div class="flex justify-center">
              <button type="button"
                class="inline-flex items-center mt-6 border border-gray-400 text-sm leading-4 bg-whte px-4 py-1 font-medium rounded-sm shadow-sm text-gray-600">Back</button>
              <button type="button"
                class="inline-flex items-center ml-4 mt-6 border border-transparent text-sm leading-4 bg-black px-4 py-1 font-medium rounded-sm shadow-sm text-white">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'StartView',
  data() {
    return {
      packages: [
        {
          name: 'standard',
          title: 'Standard',
          price: 500,
          additional: 0,
          info: ''
        },
        {
          name: 'safe',
          title: 'Safe',
          price: 500,
          additional: 50,
          info: ''
        },
        {
          name: 'supersafe',
          title: 'Super Safe',
          price: 500,
          additional: 75,
          info: ''
        }
      ]
    }
  }
});
</script>
