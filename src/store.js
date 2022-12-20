import { reactive } from "vue";
import axios from "axios";

const url = "http://localhost:3000";

export const store = {
    state: reactive({
        products: [],
        errors: [],
    }),
    async loadProducts() {
        try {
            var response = await axios.get(url + "/products")
            response.data.forEach(element => this.state.products.push(element));
        } catch (error) {
            this.addError("Error a la hora de cargar los productos: " + error)
        }
    },
    async deleteProduct(product) {
        try {
            var response = await axios.delete(url + "/products/" + product.id);
            let position = this.state.products.findIndex(element => element.id === product.id);
            this.state.products.splice(position,1)
        } catch (error) {
            this.addError("Error a la hora de eliminar un producto: " + error)
        }
    },
    async addProduct(product) {
        try {
            var response = await axios.post(url + "/products", {
                name: product.name,
                uds: product.uds,
                price: product.price,
            })
            this.state.products.push(response.data)
        } catch (error) {
            this.addError("Error a la hora de añadir un producto: " + error)
        }
    },
    async editProduct(product) {
        try {
            var response = await axios.patch(url + "/products/" + product.id, {
                name: product.name,
                uds: product.uds,
                price: product.price,
            })
            let object = this.state.products.find(element => element.id === product.id)
            object.name = response.data.name
            object.uds = response.data.uds
            object.price = response.data.price
        } catch (error) {
            productToFind = product
            this.addError("Error a la hora de editar un producto: " + error)
        }
    },
    calcTotalImport() {
        return this.state.products.reduce((total,product)  => total +=  product.price * product.uds, 0)
    },
    removeError(index) {
        this.state.errors.splice(index,1)
    },
    addError(error) {
        this.state.errors.push(error)
    },

}