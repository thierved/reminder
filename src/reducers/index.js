import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_ALL } from '../actions';
let index = 0;
export default (state = [], action) => {

    switch (action.type) {

        case ADD_REMINDER:        
            return action.todo !== "" ? [...state, {
                todo: action.todo,
                id: index++,
                date: action.date
            }] : state;

        case REMOVE_REMINDER:     
            const filtered = state.filter(item =>  item.id !== action.id);            
            return [...filtered];

        case CLEAR_ALL:
            return [];

        default:
            return state;
    }
}