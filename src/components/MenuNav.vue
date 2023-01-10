<script>
    export default {
        
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <span class="navbar-brand" href="#">Almacén ACME</span>
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link class="nav-link" to="/">Productos</router-link>
                    <router-link class="nav-link" to="/categories">Categorias</router-link>
                    <router-link class="nav-link" to="/addproduct">Añadir producto</router-link>
                    <router-link class="nav-link" to="/categoryForm">Añadir categoría</router-link>
                    <router-link class="nav-link" to="/about">Sobre nosotros</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>