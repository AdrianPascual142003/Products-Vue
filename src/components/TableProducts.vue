<script>
import ShowProduct from './ShowProduct.vue';
import TitleVue from './Title.vue';
import { store } from '../store';


export default {
    components: {
        TitleVue,
        ShowProduct,
    },
    data() {
        return {
            products: store.state.products,
        }
    },
    computed: {
        calcTotalImport() {
            return store.calcTotalImport()
        },
        calcNumProducts() {
            return store.state.products.length
        }
    }
}

</script>

<template>
     <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
				<header>
                    <title-vue title="Almacén central de productos - ACME SL"></title-vue>
				</header>
                <table class="table table-striped table-hover table-responsive">
                    <thead class="bg-dark">
                        <tr class="text-white text-center">
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Categoria</th>
                            <th>Uds.</th>
                            <th>Precio/u</th>
                            <th>Importe</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <show-product v-for="product in products" :key="product.id" v-bind:product="product"></show-product>
                    </tbody>
                    <tfoot>
                        <th>Número de Items:</th>
                        <th>{{ calcNumProducts }}</th>
                        <th>Importe total del almacén:</th>
                        <th id="total-import">{{calcTotalImport}}€</th>
                    </tfoot>
                </table>
            </div>
        </div>
</template>