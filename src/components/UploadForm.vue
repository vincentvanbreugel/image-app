<template>
    <div class="dropper mt-6">
        <input type="file" 
            @change="uploadImages($event.target.files)"
            multiple
            accept="image/*"
            name="upload input"
        />
        <span>Drag file here!</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'UploadForm',
    methods: {
        ...mapActions(['uploadImages'])
    }
}
</script>

<style scoped>
.dropper {
    height: 180px;
    border: 2px dashed black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #fff;
    max-width: 600px;
    margin: auto;
}

.dropper:hover {
    background-color: #f1f1f1;
}

input {
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
}
</style>