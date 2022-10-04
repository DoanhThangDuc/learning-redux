const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
]

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1)
    return maxId + 1
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'todos/todoAdded':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: nextTodoId(state.todos),
                        text: action.payload,
                        completed: false,
                    },
                ],
            }
        case 'todos/todoToggled':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id !== action.payload.id) {
                        return todo
                    }
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }),
            }
        case 'todos/colorSelected':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id !== action.payload.id) {
                        return todo
                    }
                    return {
                        ...todo,
                        color: action.payload.color,
                    }
                }),
            }
        case 'todos/todoDeleted':
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => todo.id !== action.payload.todoId
                ),
            }
        case 'todos/allCompleted':
            return {
                ...state,
                todos: state.todos.map((todo) => (todo.completed = true)),
            }
        case 'todos/completedCleared':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.completed === true),
            }
        default:
            return state
    }
}
