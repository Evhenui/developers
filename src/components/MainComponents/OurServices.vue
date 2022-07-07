<template>
    <section class="our-services">
        <h1 class="our-services__title title">Что входит в услугу по созданию дизайна интернет-магазина?</h1>
        <section class="our-services__services-wrapper">
            
                <Accordion/>

        </section>
    </section>
</template>

<script>
import Accordion from '../MainAccordion/Accordion.vue'
export default {
    components: { Accordion } 
}
</script>

<style lang="scss">
.our-services {
    background: #DAECFF;
}

</style>