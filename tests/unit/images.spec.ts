import {actions} from '../../src/store/modules/images' 
import axios from 'axios'

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({data: {data: []}}))
  }))

describe('images.vue', () => {
    it('test', async () => {  
        const context = {
            commit: jest.fn(),
            rootState: {
                auth: {
                    token: '32432434'
                }
            }
        }

      await actions.fetchImages(context)
  
      expect(context.commit).toHaveBeenCalledWith('setImages', [])
    })
})