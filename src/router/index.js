import { createWebHistory, createRouter } from 'vue-router'
import AddProduct from '../components/ProductForm.vue'
import TableProducts from '../components/TableProducts.vue'
import TableCategories from '../components/TableCategories.vue'
import CategoryForm from '../components/CategoryForm.vue'
import About from '@/components/About.vue'

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: TableProducts
    },
    {
        path: '/addproduct',
        name: 'Añadir Producto',
        component: AddProduct
    },
    {
        path: '/editProduct/:id',
        name: 'Editar Producto',
        component: AddProduct,
        props: true
    },
    {
        path: '/categories',
        name: 'Categorias',
        component: TableCategories
    },
    {
        path: '/categoryForm',
        name: 'Añadir Categoria',
        component: CategoryForm
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router