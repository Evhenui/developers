<template>
    <main class="main">
        <ServicesSection/>
        <OurServices/>
        <DevelopmentStages/>
        <Examples/>
        <NeedMore/>
    </main>
</template>

<script>
import ServicesSection from './MainComponents/ServicesSection.vue'
import OurServices from './MainComponents/OurServices.vue'
import DevelopmentStages from './MainComponents/DevelopmentStages.vue'
import Examples from './MainComponents/Examples.vue'
import NeedMore from './MainComponents/NeedMore.vue'
export default {
    components: { ServicesSection, OurServices, DevelopmentStages, Examples, NeedMore }
}
</script>

<style lang="scss">

</style>
