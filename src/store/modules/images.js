import api from '../../api/imgur'
import router from '../../router'

const state = {
    images: [],
}

const getters = {
    allImages: (state) => state.images
}

export const actions = {
    async fetchImages({ commit, rootState }) {
        const { token } = rootState.auth
        const response = await api.fetchImages(token)
        commit('setImages', response.data.data)
    },
    async uploadImages({ rootState }, images) {
        const { token } = rootState.auth
        await api.uploadImages(images, token)
        router.push('/')
    },
    async deleteImage({ rootState, dispatch }, deleteHash) {
        const { token } = rootState.auth
        await api.deleteImage(token, deleteHash)
        dispatch('fetchImages')
    },
}

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}