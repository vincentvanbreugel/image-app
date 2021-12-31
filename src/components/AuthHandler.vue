<template>
    <div class="is-size-4 has-text-centered mt-6 box">
        Please wait...
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    created() {
        console.log(window.location)
        console.log(window.location.hash)
        const hash = window.location.hash
        this.finalizeLogin(hash)
    },
}
</script>