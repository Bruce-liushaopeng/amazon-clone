export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // keep the state to be whatever it is, 
            // and the basket is whatever it currently is plus the item passed inside.
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        default:
            return state;
    }

};

export default reducer;
