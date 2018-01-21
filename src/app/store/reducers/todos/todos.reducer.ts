import { TodoModel } from '../../../models/todos/todo.model';
import { TodosActions, TodosListActions } from '../../actions/todos/todos.action';

export interface ITodosState {
	data: TodoModel[];
	loading: boolean;
	loaded: boolean;
}

export const inititalTodosState: ITodosState = {
	data: [],
	loading: false,
	loaded: false
};

export function todosReducer(
	state: ITodosState = inititalTodosState,
	action: TodosActions
) {
	switch (action.type) {
		case TodosListActions.LOAD_TODOS:
			return {
				...state,
				loading: true
			};
		case TodosListActions.LOAD_TODOS_SUCCESS:
			return {
				...state,
				data: action.payload,
				loaded: true,
				loading: false
			};
		case TodosListActions.LOAD_TODOS_ERROR:
			return {
				...state,
				loaded: false,
				loading: false
			};
		case TodosListActions.SELECT_TODO:
			return {
				...state,
				data: state.data.map((t: TodoModel) => {
					t['isCurrent'] = t.id === action.payload.id;

					return t;
				}),
				loaded: true,
				loading: false
			};
		default:
			return state;
	}
}

export const selectTodosList = (state: ITodosState) => state.data;
export const selectTodosLoading = (state: ITodosState) => state.loading;
export const selectTodosLoaded = (state: ITodosState) => state.loaded;
