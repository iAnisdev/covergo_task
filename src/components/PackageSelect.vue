<template>
    <div class="flex items-center">
        <input :id="package.name" name="notification-method" type="radio" :checked="isChecked"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
        <label :for="package.name" class="ml-3 block text-sm font-medium text-gray-700">
            {{ package.title }} {{package.info}}
        </label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'PackageSelect',
    props:{
        package: {
            type: Object,
            required: true
        },
        isChecked:{
            type: Boolean,
            required: true
        }
    }
});
</script>
