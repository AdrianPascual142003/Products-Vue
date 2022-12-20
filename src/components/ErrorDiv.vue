<script>
import { store } from '../store';

export default {
    data() {
        return {
            errors: store.state.errors
        }
    },
    methods: {
        remove() {
            store.removeError(this.index)
        },
        renderErrors() {
            setTimeout(() => {
                store.removeError(this.index)
            }, 3000)
        },
    },
}
</script>

<template>
    <div>
        <div v-for="(element,index) in errors" :key="index" class="alert alert-danger alert-dismissible" >
            {{element}}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" v-on:click="remove"></button>
        </div>
    </div>
</template>