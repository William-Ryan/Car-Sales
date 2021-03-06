import { ADD_FEATURE, REMOVE_FEATURE, ADD_TOTAL, SUBTRACT_TOTAL } from '../actions'

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
}, 

additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }  
    ]
}

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                car: {
                  ...state.car,
                  features: [...state.car.features, action.payload].sort((a, b) => a.id - b.id)
                },
                additionalFeatures: state.additionalFeatures.filter(
                  item => item.id !== action.payload.id
                )
            };
        case REMOVE_FEATURE: 
            return{
                ...state,
                car: {
                ...state.car,
                features: state.car.features.filter(
                    item => item.id !== action.payload.id
                )
                },
                additionalFeatures: [...state.additionalFeatures, action.payload].sort((a, b) => a.id - b.id)
            };
        case ADD_TOTAL: 
            return{
                ...state,
                additionalPrice: state.additionalPrice + action.payload
            }
        case SUBTRACT_TOTAL:
            return{
                ...state,
                additionalPrice: state.additionalPrice - action.payload
            }
        default:
            return state;
    }
} 