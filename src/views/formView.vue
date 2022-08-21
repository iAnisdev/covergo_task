<template>
  <div class="max-w-4xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
    <div class="bg-nuetral-50 rounded-lg" v-if="showForm">
      <div class="px-6 sm:px-16">
        <div class="lg:self-center">
          <h2 class="text-small font-bold text-[#1A1A1A] sm:text-small text-center">
            <span class="block">Tell us about yourself</span>
          </h2>
          <form class="px-6 w-70" @submit="submitForm">
            <div class="mt-2">
              <label for="name" class="block text-sm text-gray-600">Name</label>
              <div class="mt-1">
                <input type="text" name="name" v-model="userInfo.name" id="name"
                  class="border border-gray-400 px-2 w-36" placeholder="Enter your name" required>
              </div>
            </div>
            <div class="mt-2">
              <label for="age" class="block text-sm text-gray-600">Age</label>
              <div class="mt-1">
                <input type="number" name="age" v-model="userInfo.age" id="age" class="border border-gray-400 px-2 w-36"
                  placeholder="Enter your age" required>
              </div>
            </div>
            <div class="mt-2">
              <label for="location" class="block text-sm text-gray-600">Where do you live</label>
              <select id="location" name="location" v-model="userInfo.country"
                class="border border-gray-400 mt-1 block pr-10 text-base w-36" required>
                <option v-for="country  in countries" :key="country.name" :value="country">{{ country.name }}</option>
              </select>
            </div>

            <div class="mt-6">
              <div v-for="(pkg, index) in packages" :package="pkg" :key="index">
                <div class="flex items-center py-1">
                  <input :id="pkg.name" name="notification-method" type="radio"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" v-model="userInfo.package" :checked="userInfo.package.name === pkg.name"  @change="changePackage(pkg)"/>
                  <label :for="pkg.name" class="ml-3 block text-xs font-medium text-gray-700">
                    {{ pkg.title }} <span v-if="pkg.additional_price > 0">(+{{ pkg.additional_price || 0 }}{{userInfo.country.currency}},  {{ pkg.additional }}%)</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <h5 class="text-xs font-bold text-[#1A1A1A] sm:text-xs text-center">
                <span class="block">Your Premium is: {{premium}}{{userInfo.country.currency}}</span>
              </h5>
            </div>
            <div class="flex justify-center">
              <button type="button"
                class="inline-flex items-center mt-6 border border-gray-400 text-sm leading-4 bg-whte px-4 py-1 font-medium rounded-sm shadow-sm text-gray-600" @click="goBack">Back</button>
              <button type="submit"
                class="inline-flex items-center ml-4 mt-6 border border-transparent text-sm leading-4 bg-black px-4 py-1 font-medium rounded-sm shadow-sm text-white">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="text-center max-w-4xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
        <div class="bg-nuetral-50 rounded-lg">
          <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div class="lg:self-center">
              <h2 class="text-xl font-bold text-[#1A1A1A] sm:text-xl">
                <span class="block">Ooops!</span>
              </h2>
              <p class="mt-4 text-base leading-6 text-[#1A1A1A]">Your age is over the accepted limit.</p>
              <p class="text-base leading-6 text-[#1A1A1A]">We are sorry but we cannot insure you for now.</p>
              <button type="button"
                class="inline-flex items-center mt-6 border border-transparent text-sm leading-4 bg-black px-16 py-1 font-medium rounded-sm shadow-sm text-white" @click="goBack">Ok
                :)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import { mapGetters , mapActions} from 'vuex';
export default defineComponent({
  name: 'StartView',
  data(){
    return {
      showForm: true
    }
  },
  computed: {
    ...mapGetters({
      countries: 'getCountries',
      packages: 'getPackages',
      userInfo: 'getUserInfo',
    }),
    premium(): number {
      return (Number(this.userInfo.age)) * 10 * this.userInfo.country.rate
    }
  },
  methods:{
    ...mapActions({
      setCountry: 'setCountry',
      updatePackages: 'updatePackages',
      setPackage: 'setPackage'
    }),
    changePackage(pkg: any){
      this.setPackage(pkg)
    },
    goBack(){
      this.$router.go(-1)
    },
    submitForm(e: any){
      e.preventDefault();
      if(this.userInfo.age > 100){
        this.showForm = false;
      }else{
        this.$router.push('/summary')
      }
    }
  },
  watch: {
    userInfo:{
      deep: true,
      handler(){
         this.updatePackages()
      }
    }
  },
  mounted() {
    this.setCountry(this.countries[0])
    this.setPackage(this.packages[0])
  },
});
</script>
