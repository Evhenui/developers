<template>
    <main class="main">
        <services-section/>
        <our-services/>
        <development-stages/>
        <examples/>
        <need-more/>
        <call-section/>
    </main>
</template>

<script>
import ServicesSection from './MainComponents/ServicesSection.vue'
import OurServices from './MainComponents/OurServices.vue'
import DevelopmentStages from './MainComponents/DevelopmentStages.vue'
import Examples from './MainComponents/Examples.vue'
import NeedMore from './MainComponents/NeedMore.vue'
import CallSection from './MainComponents/CallSection.vue'

export default {
    components: { ServicesSection, OurServices, DevelopmentStages, Examples, NeedMore, CallSection }
}
</script>

<style lang="scss">

</style>
