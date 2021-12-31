<template>
<div>
    <div v-if="isLoggedIn" class="columns is-multiline pt-5 mt-1">
        <div v-for="image in allImages"                
            :key="image.id" 
            class="column is-one-third"
        >
            <ImageItem 
                :src="image.link"
 
                :title="image.title"
                :description="image.description ? image.description : 'Description'"
                :deleteHash="image.deletehash"
                :views="image.views"
            >
            </ImageItem>
        </div>

    </div>
    <h2 class="is-size-4 has-text-centered mt-6 box"  v-else>Log in to get started!</h2>
</div>

</template>

<script>
import ImageItem from '@/components/ImageItem'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'ImageList',
    components: {
        ImageItem,
    },

    computed: {
        ...mapGetters(['allImages', 'isLoggedIn'])
    },
    methods: {
        ...mapActions(['fetchImages']),
    },
    created() {
        this.fetchImages()
    }
}
</script>