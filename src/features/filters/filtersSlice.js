const initialState = {
    status: 'All',
    color: [],
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filters/statusFilterChanged':
            return {
                ...state,
                filters: action.payload,
            }
        case 'filters/statusFilterChanged':
            if (action.payload === 'All') {
                return state
            }
            if (action.payload === 'Completed') {
                return {
                    ...state,
                    todos: state.todos.filter(
                        (todo) => todo.completed === true
                    ),
                }
            }
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.completed === false),
            }
        case 'filters/colorFilterChanged':
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => todo.color === action.payload
                ),
            }
        default:
            return state
    }
}
