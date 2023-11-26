import {createStore} from "vuex";

const products = {
    state() {
        return {
            productsList: [
            {
                id: 'p1',
                image:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
                title: 'Book Collection',
                description:
                    'A collection of must-read books. All-time classics included!',
                price: 99.99,
            },
            {
                id: 'p2',
                image:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Campement_-_20150802_15h44_%2810723%29.jpg/800px-Campement_-_20150802_15h44_%2810723%29.jpg',
                title: 'Mountain Tent',
                description: 'A tent for the ambitious outdoor tourist.',
                price: 129.99,
            },
            {
                id: 'p3',
                image:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
                title: 'Food Box',
                description:
                    'May be partially expired when it arrives but at least it is cheap!',
                price: 6.99,
            },
        ],
        cartElements: [],
        cartTotal: { quantity: 0, totalPrice: 0}
        }
    },
    mutations: {
        addToCart(state, value) {
            const productIndex = state.cartElements.findIndex(item => item.id === value.id);

            if (productIndex >= 0) {
                state.cartElements[productIndex].quantity++;
            } else {
                const productToAdd = state.productsList.find(product => product.id === value.id);

                if (productToAdd) {
                    state.cartElements.push({ ...productToAdd, quantity: 1 });
                } else {
                    console.error("Product not found");
                }
            }
            state.cartTotal.quantity++;
            state.cartTotal.totalPrice += value.price
        },
        removeFromCart(state, value) {
            const productIndex = state.cartElements.findIndex(item => item.id === value.prodId);
            state.cartElements.splice(productIndex, 1)
            state.cartTotal.quantity--;
            state.cartTotal.totalPrice -= value.itemTotal
        }
    },
    actions: {
        addToCart(context, payload) {
            context.commit('addToCart', payload)
        },
        removeFromCart(context, payload) {
            context.commit('removeFromCart', payload)
        }
    }
}

const store = createStore({
    modules: {
        product: products
    }
})

export default store