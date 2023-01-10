<script>
import { store } from '../store';
import ShowCategory from './ShowCategory.vue';
import Title from './Title.vue';

export default {
    data() {
        return {
            categories: store.state.categories
        };
    },
    components: { Title, ShowCategory },
}
</script>

<template>
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
            <header>
                <Title title="Almacén central de categorias - ACME SL"></Title>
            </header>
            <table class="table table-striped table-hover table-responsive text-center">
                <thead class="bg-dark">
                    <tr class="text-white text-center">
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <ShowCategory v-for="category in categories" :key="category.id" :category="category"></ShowCategory>
                </tbody>
            </table>
        </div>
    </div>
</template>