<script>
import { store } from '../store';
import TitleVue from './Title.vue';

export default {
    components: {
        TitleVue
    },
    data() {
        return {
            category: {}
        }
    },
    methods: {
        doItem() {
            try {
                if (!this.category.name) {
                    throw ("Has de introducir un nombre")
                }                
                if (!this.category.desc) {
                    throw ("Has de introducir una descripción")
                }
                store.addCategory(this.category)
                this.reset()
                this.$router.push('/categories')
            }catch (error) {
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
        <div class="col-sm-6 col-md-4 col-lg-4 container">
        <form id="new-prod" @submit.prevent="doItem" @reset="reset">
            <header>
                <title-vue title="Añadir Categoria"></title-vue>
            </header>
            <fieldset>
                <legend class="bg-dark text-white text-center" id="tablaProd">Añadir Categoría</legend>
            <div class="form-group">
                <label for="newprod-name">Nombre:</label>
                <input type="text" id="newprod-name" class="form-control" v-model="category.name">
            </div>
            <div class="form-group">
                <label for="newprod-category">Descripción:</label>
                <input type="text" id="newprod-name" class="form-control" v-model="category.desc">
            </div>
            <br>
                <button type="submit" class="btn btn-default btn-dark m-1">Añadir</button>
                <button type="reset" class="btn btn-danger">Reset</button>
            </fieldset>
        </form>
    </div>
</template>