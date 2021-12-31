import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import UploadForm from '../../src/components/UploadForm.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
    uploadImages: jest.fn(),
  }

describe('UploadForm.vue', () => {
    it('shows the upload input', () => {
        const store = new Vuex.Store({
              actions
        });
    
        const wrapper = shallowMount(UploadForm, {
          store, 
          localVue,
        })
    
        expect(wrapper.find('input[name="upload input"]').isVisible()).toBe(true)
      })

      it('dispatches "uploadImages" when input is triggered', () => {
        const store = new Vuex.Store({
            actions
        }); 
    
        const wrapper = shallowMount(UploadForm, { 
          store, localVue 
        })

        const input = wrapper.find('input')
        input.trigger('change')
    
        expect(actions.uploadImages).toHaveBeenCalled()
      })
})