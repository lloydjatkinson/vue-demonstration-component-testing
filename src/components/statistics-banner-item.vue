<template>
    <div class="level-item has-text-centered">
        <div>
            <p class="heading">{{ heading }}</p>
            <p class="title">{{ subHeading }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StatisticsBannerItem',
    props: {
        heading: {
            required: true
        },
        subHeading: {
            required: true
        }
    }
};
</script>