import { mount } from '@vue/test-utils'
import App from './../../src/App.vue'

test('Router view', () => {
  const wrapper = mount(App)
  expect(wrapper.html()).toContain('<router-view></router-view>')
})