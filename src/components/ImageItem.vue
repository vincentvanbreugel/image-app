<template>
    <div class="card">
        <div class="card-image">
            <figure class="image">
                <img :src="src" :alt="title">
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <h5 class="is-size-five">{{ title ? title : 'Title'}}</h5>
                <p>
                    {{ description ? description : "Description" }}
                </p>
                <p>
                    {{views}} views
                </p>
            </div>
        </div>
        <div class="card-footer px-4 pb-4">
            <button @click="deleteImage(deleteHash)" class="card-footer-item button is-danger">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'ImageItem',
    props: [
        'src',
        'views',
        'title',
        'description',
        'deleteHash',
    ],
    methods: {
        ...mapActions(['deleteImage']),
    },
}
</script>