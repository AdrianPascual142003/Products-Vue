<script>
import { store } from '../store';

    export default {
        props: {
            product: Object,
        },
        methods: {
            calcImport() {
                return this.product.uds * this.product.price;
            },
            deleteProduct() {
                store.deleteProduct(this.product)
            },
            changeUdsDown() {
                if (this.product.uds >= 1) {
                    const productNew = Object.assign({}, this.product)
                    productNew.uds -= 1
                    store.editProduct(productNew)
                }
            },
            changeUdsUp() {
                const productNew = Object.assign({}, this.product)
                productNew.uds += 1
                store.editProduct(productNew)
            },
            editProduct() {
               // dataProduct.editProduct(this.product)
            }
        }
    }
</script>

<template>
    <tr class="text-center">
        <td>{{product.id}}</td>
        <td>{{product.name}}</td>
        <td>{{product.uds}}</td>
        <td>{{product.price}}€</td>
        <td>{{calcImport()}}€</td>
        <td>
            <button class="btn btn-warning m-1" v-on:click="changeUdsUp"><i class="bi bi-caret-up-fill"></i></button>
            <button class="btn btn-warning" v-on:click="changeUdsDown" :disabled="product.uds === 0"><i class="bi bi-caret-down-fill"></i></button>
            <button class="btn btn-warning m-1" v-on:click="editProduct"><i class="bi bi-pencil"></i></button>
            <button class="btn btn-warning" v-on:click="deleteProduct"><i class="bi bi-trash"></i></button>
        </td>
    </tr>
</template>