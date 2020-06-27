<template>
    <h1 class="title">{{title}}</h1>
</template>

<script>
    const el = require('./../modules/text_animate');
    export default {
        name: "Test",
        data() {
            return {
                title: "Test App"
            }
        },

        methods: {

        },

        mounted() {
            el.setElement('.title');
            el.textColor('#c40505');
        }
    }
</script>