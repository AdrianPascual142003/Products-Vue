<script>
import TablaProductosVue from "./components/TableProducts.vue";
import ProductFormVue from "./components/ProductForm.vue";
import { store } from "./store";
import ErrorDiv from "./components/ErrorDiv.vue";
import MenuNav from "./components/MenuNav.vue";
import TableCategories from "./components/TableCategories.vue";


export default {
    components: {
    TablaProductosVue,
    ProductFormVue,
    ErrorDiv,
    MenuNav,
    TableCategories
},
    mounted() {
        store.loadProducts();
        store.loadCategories();
    }
}
</script>

<template>
    <div class="container">
        <menu-nav></menu-nav>
        <error-div></error-div>
        <!-- <tabla-productos-vue></tabla-productos-vue>  -->
        <!-- <product-form-vue></product-form-vue> -->
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>