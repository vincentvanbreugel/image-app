import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import AppHeader from '../../src/components/AppHeader.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AppHeader.vue', () => {
  it('renders login button when not logged in', () => {
    const store = new Vuex.Store({
        getters: {
          isLoggedIn: () => false,
        },
    });

    const wrapper = shallowMount(AppHeader, {
      store, 
      localVue,
      stubs: ['router-link']
    })

    expect(wrapper.find('.login-button').isVisible()).toBe(true)
    expect(wrapper.find('.main-menu').exists()).toBe(false)
  })

  it('renders the main menu when logged in', () => {
    const store = new Vuex.Store({
        getters: {
          isLoggedIn: () => true,
        },
    });

    const wrapper = shallowMount(AppHeader, {
      store, 
      localVue,
      stubs: ['router-link']
    })

    expect(wrapper.find('.login-button').exists()).toBe(false)
    expect(wrapper.find('.main-menu').isVisible()).toBe(true)
  })
})
