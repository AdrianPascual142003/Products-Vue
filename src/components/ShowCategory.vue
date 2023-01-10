<script>
import { store } from '../store';

export default {
    props: {
        category: Object,
    },
    methods: {
        deleteCategory() {
            try {
                const numElements = store.state.products.find(element => element.category === this.category.id)
                if (numElements) {
                    throw ("La categoría contiene productos")
                }
                store.deleteCategory(this.category.id);
            } catch (error) {
                store.addError(error)
            }
        }
    }
}

</script>

<template>
    <tr class="text-center">
        <td>{{ category.id }}</td>
        <td>{{ category.name }}</td>
        <td>{{ category.desc }}</td>
        <td>
            <button class="btn btn-warning" v-on:click="deleteCategory"><i class="bi bi-trash"></i></button>
        </td>
    </tr>
</template>