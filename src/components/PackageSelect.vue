<template>
    <div class="flex items-center py-1">
        <input :id="package.name" name="notification-method" type="radio"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" v-model="userInfo.package"
            :checked="userInfo.package.name === package.name" @change="changePackage" />
        <label :for="package.name" class="ml-3 block text-xs font-medium text-gray-700">
            {{ package.title }} <span v-if="package.additional_price > 0">(+{{ package.additional_price || 0
            }}{{ userInfo.country.currency }}, {{ package.additional }}%)</span>
        </label>
    </div>
</template>

<script lang="ts" >
import { defineComponent, toRaw } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
    name: 'PackageSelect',
    emits: ["change"],
    props: {
        package: {
            type: Object,
            required: true
        },
        isChecked: {
            type: Boolean,
            required: true
        }
    },
    setup(props, ctx) {
        const store = useStore();
        let userInfo = toRaw(store.getters.getUserInfo)

        function changePackage() {
            ctx.emit('change');
        }
        return {
            userInfo,
            changePackage
        }
    }
});
</script>
