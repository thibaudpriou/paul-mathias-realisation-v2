<script>
    export let active;
</script>

<style>
    .indicator {
        width: 100%;
        height: 100%;
        background-color: #aaa;
        opacity: .6;
        display: block;
    }

    .active {
        opacity: .8;
        background-color: #fff;
    }
</style>

<span class="indicator" class:active></span>