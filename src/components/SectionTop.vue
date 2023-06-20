<template>
    <div class="feature">
        <div class="feature__top">
            <div class="feature-top__card"></div>
            <p>Featured</p>
        </div>
        <h1>New Arrival</h1>
    </div>
</template>

<script setup>

</script>

<style scoped>
.feature__top {
    width: 20px;
    height: 40px;
    background-color: #DB4444;
    display: flex;
    gap: 30px;
}

p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height, or 125% */


    /* Secondary 2 */

    color: #DB4444;
}

h1 {
    margin-top: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 48px;
    /* identical to box height, or 133% */

    letter-spacing: 0.04em;

    /* Text2 */

    color: #000000;
}
</style>