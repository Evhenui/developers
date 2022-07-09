<template>
    <main class="main">
        <ServicesSection/>
        <OurServices/>
        <DevelopmentStages/>
        <Examples/>
    </main>
</template>

<script>
import ServicesSection from './MainComponents/ServicesSection.vue'
import OurServices from './MainComponents/OurServices.vue'
import DevelopmentStages from './MainComponents/DevelopmentStages.vue'
import Examples from './MainComponents/Examples.vue'
export default {
    components: { ServicesSection, OurServices, DevelopmentStages, Examples }
}
</script>

<style lang="scss">

</style>
