import Vue from 'vue'
import Router from 'vue-router'
import AuthHandler from './../components/AuthHandler'
import ImageList from './../components/ImageList'
import UploadForm from './../components/UploadForm'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/', 
            component: ImageList,
        },
        {
            path: '/upload', 
            component: UploadForm,
        },
        {
            path: '/oauth2/callback', 
            component: AuthHandler,
        },
    ]
})