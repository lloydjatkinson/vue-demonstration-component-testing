<template>
    <div id="app">
        <section class="hero is-small is-success is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Store
                    </h1>
                    <h2 class="subtitle">
                        An online store example with shopping basket - a demonstration of unit testing Javascript, Vue, and Vuex.
                    </h2>
                </div>
            </div>
        </section>
        <section class="section banner-small-padding">
            <div class="container">
                <!-- <h1 class="title">Section</h1>
                <h2 class="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2> -->
                <statistics-banner />
            </div>
        </section>
        <section class="section banner-small-padding">
            <div class="container">
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <div class="tile is-child box">
                            <product-selection />
                        </div>
                    </div>
                    <div class="tile is-4 is-vertical is-parent">
                        <div class="tile is-child box">
                            <low-stock />
                        </div>
                        <div class="tile is-child box">
                            <shopping-basket />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import StatisticsBanner from './components/statistics-banner'
import ShoppingBasket from './components/shopping-basket';
import ProductSelection from './components/product-selection';
import LowStock from './components/low-stock';

export default {
    name: 'ShoppingApplication',
    components: {
        StatisticsBanner,
        ShoppingBasket,
        ProductSelection,
        LowStock
    }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.banner-small-padding {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

</style>