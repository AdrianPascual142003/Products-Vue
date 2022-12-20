<script>
import TablaProductosVue from "./components/TableProducts.vue";
import ProductFormVue from "./components/ProductForm.vue";
import { store } from "./store";
import ErrorDiv from "./components/ErrorDiv.vue";
import MenuNav from "./components/MenuNav.vue";


export default {
    components: {
    TablaProductosVue,
    ProductFormVue,
    ErrorDiv,
    MenuNav
},
    mounted() {
        store.loadProducts();
    }
}
</script>

<template>
    <div class="container">
        <menu-nav></menu-nav>
        <error-div></error-div>
        <tabla-productos-vue></tabla-productos-vue>
        <product-form-vue></product-form-vue>
    </div>
</template>