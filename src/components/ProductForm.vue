<script>
import { useAttrs } from 'vue';
import { store } from '../store';
import TitleVue from './Title.vue';

export default {
    components: {
        TitleVue
    },
    data() {
        return {
            add: "Añadir Producto",
            edit: "Editar Producto",
            product: {}
        }
    },
    methods: {
        doItem() {
            try {
                if (!this.product.name) {
                    throw ("Error el producto debe de tener un nombre")
                }
                if (isNaN(this.product.uds) || this.product.uds < 0) {
                    throw ("Error las unidades deben de ser númericas y mayores o igual a 0")
                }
                if (isNaN(this.product.price) || this.product.price <= 0) {
                    throw ("Error el precio debe de ser númerico y mayor que 0")
                }
                if (this.product.id) {
                    store.editProduct(this.product)
                } else {
                    store.addProduct(this.product)
                }
            }catch(error) {
                store.addError(error)
            }

        },
        reset() {
            this.product = {}
        }
    }
}

</script>

<template>
    <div class="col-sm-6 col-md-4 col-lg-4">
        <form id="new-prod" @submit.prevent="doItem" @reset="reset">
            <header>
                <title-vue v-bind:title="product.id?edit:add"></title-vue>
            </header>
            <fieldset>
                <legend class="bg-dark text-white text-center" id="tablaProd">{{ product.id?edit:add }}</legend>
                <div class="form-group">
                    <label for="newprod-id">ID:</label>
                    <input type="text" class="form-control" id="newprod-id" v-model="product.id" disabled>
                </div>
                <div class="form-group">
                    <label for="newprod-name">Nombre:</label>
                    <input type="text" id="newprod-name" class="form-control" v-model="product.name">
                </div>
                <div class="form-group">
                    <label for="newprod-units">Unidades.:</label>
                    <input type="number" class="form-control" id="newprod-units" v-model="product.uds">
                </div>
                <div class="form-group">
                    <label for="newprod-price">Precio/u.:</label>
                    <input type="number" step="any" id="newprod-price" class="form-control" v-model="product.price">
                </div>
                <br>
                <button type="submit" class="btn btn-default btn-dark m-1" id="botonProd">{{product.id?'Editar':'Añadir'}}</button>

                <button type="reset" class="btn btn-danger">Reset</button>
            </fieldset>
        </form>
    </div>
</template>