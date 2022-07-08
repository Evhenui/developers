<template>
    <main class="main">
        <ServicesSection/>
        <OurServices/>
        <DevelopmentStages/>
    </main>
</template>

<script>
import ServicesSection from './MainComponents/ServicesSection.vue'
import OurServices from './MainComponents/OurServices.vue'
import DevelopmentStages from './MainComponents/DevelopmentStages.vue'

export default {
    components: { ServicesSection, OurServices, DevelopmentStages}
 
}
</script>

<style lang="scss">

</style>
