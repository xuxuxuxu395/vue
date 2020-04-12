<template>
    <div>
        {{test}}
    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        name: "test",
        computed:{
            ...mapState(["Hello World"])
        }
    }
</script>

<style scoped>

</style>