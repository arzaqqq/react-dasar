import { createStore } from 'redux';

//reduce
const cartReducer = (state ={
    cart  : [],
},
action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
            default:
                return state;

    }
}

//store
const store = createStore(cartReducer);
console.log('oncreate store : ',store.getState());

//subscribe
store.subscribe(() => {
    console.log('state update', store.getState());
});

//dispatcj
const action1 = {type : 'ADD_TO_CART', payload: {id: 1, qty: 2}};
store.dispatch(action1);