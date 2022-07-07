<template>
    <main class="main">
        <ServicesSection/>
        <OurServices/>
    </main>
</template>

<script>
import ServicesSection from './MainComponents/ServicesSection.vue'
import OurServices from './MainComponents/OurServices.vue'

export default {
    components: { ServicesSection, OurServices }
 
}
</script>

<style lang="scss">

</style>
