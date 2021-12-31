import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import ImageList from '../../src/components/ImageList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  fetchImages: jest.fn(),
}

const createVuexStore = obj => {
  return new Vuex.Store({
    getters: {
      isLoggedIn: () => obj.isLoggedIn,
      allImages: () => [
          {
              id: "rrBCOxh"
          },
          {
              id: "rrBCOx4"
          }
      ],
    },
    actions,
  });
}

describe('ImageList.vue', () => {
  it('dispatches "fetchImages" when component is created', () => {
    const store = createVuexStore({isLoggedIn: true})  

    const wrapper = shallowMount(ImageList, { 
      store, localVue 
    })

    expect(actions.fetchImages).toHaveBeenCalled()
  })

  it('renders the login message', () => {
    const store = createVuexStore({isLoggedIn: false})  

    const wrapper = shallowMount(ImageList, {
      store, 
      localVue,
    })

    expect(wrapper.find('h2').isVisible()).toBe(true)
    expect(wrapper.find('.image-container').exists()).toBe(false)
    const imageNodes = wrapper.findAll('img')
    expect(imageNodes).toHaveLength(0)
  })

  it('renders the imageList when user is logged in', () => {
    const store = createVuexStore({isLoggedIn: true})  

    const wrapper = shallowMount(ImageList, {
      store, 
      localVue,
    })

    expect(wrapper.find('h2').exists()).toBe(false)
    expect(wrapper.find('.image-container').isVisible()).toBe(true)
    const imageNodes = wrapper.findAll('img')
    expect(imageNodes).toHaveLength(2)
  })
})
