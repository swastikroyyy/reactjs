const redux = require('redux')
const createStore = redux.createStore
const buycake = () => {
    return {
        type: BUY_CAKE,
        info: 'First'
    }
}


const initailState = {
    noc: 18
}
const red = (state = initailState, action) => {
    switch (action.type) {
        case BUY_CAKE: return { noc: state - 1 };


        default: return state;
    }
}
const store = createStore(red)
console.log('initail State', store.getState());
const unsubcribe = store.subscribe(() => console.log('updated State', store.getState()));
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
unsubcribe()