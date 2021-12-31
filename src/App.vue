<template>
    <div>
        <div class="has-background-white">
            <div class="container">
                <AppHeader></AppHeader>
            </div>
        </div>
        <div class="content-container">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
    name: 'App',
    components: {
        AppHeader,
    }
}
</script>

<style>
body {
    min-height: 100%;
    background: linear-gradient(135deg, #bce1f955 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(225deg, #bce1f9 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(315deg, #bce1f955 25%, transparent 25%) 0px 0/ 20px 20px, linear-gradient(45deg, #bce1f9 25%, #d2ebfb 25%) 0px 0/ 20px 20px;
}

html {
    height: 100%;
}
</style>