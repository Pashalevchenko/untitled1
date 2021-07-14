import {ADD_TODOS, CHANGE_TODO, DELITE, LOADING_FALSE, LOADING_TRUE, PUSH_TODO} from '../actionTyps'

const initialState = {
    todos: [],
    todosLoading: false
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOS: {
            return {...state, todos: action.payload}
        }
        case LOADING_TRUE: {
            return {...state, todosLoading: true}
        }
        case LOADING_FALSE: {
            return {...state, todosLoading: false}
        }
        case PUSH_TODO: {
            return {...state, todos: [...state.todos, action.payload]}
        }
        case DELITE: {

            return {...state, todos: state.todos.filter(el => el.id !== action.payload)}
        }
        case CHANGE_TODO: {
            return {...state, todos: state.todos.map(el => el.id === action.id ? {...el, completed: el.completed = true} : el)
            }
        }
        default:
            return state
    }
}