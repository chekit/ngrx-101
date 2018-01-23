import { TodoModel } from '../../../models/todos/todo.model';
import { TodosActions, TodosListActions } from '../../actions/todos/todos.action';

export interface TodosListState {
	data: TodoModel[];
	tags: Set<string>;
	query: string;
	loading: boolean;
	loaded: boolean;
}

export const inititalTodosState: TodosListState = {
	data: [],
	tags: new Set<string>(),
	query: '',
	loading: false,
	loaded: false
};

export function todosListReducer(
	state: TodosListState = inititalTodosState,
	action: TodosActions
) {
	switch (action.type) {
		case TodosListActions.LOAD_TODOS:
			return {
				...state,
				loading: true
			};
		case TodosListActions.LOAD_TODOS_SUCCESS:
			const tagsSet = new Set<string>();
			action.payload.map(t => tagsSet.add(`User ${t.userId}`));

			return {
				...state,
				data: action.payload,
				tags: tagsSet,
				loaded: true,
				loading: false
			};
		case TodosListActions.LOAD_TODOS_ERROR:
			return {
				...state,
				loaded: false,
				loading: false
			};
		case TodosListActions.FILTER_TODOS:
			console.log(action.payload);
			return {
				...state,
				query: action.payload,
				loaded: true,
				loading: false
			};
		default:
			return state;
	}
}

export const selectTodosList = (state: TodosListState) => state.data;
export const selectTodosListTags = (state: TodosListState) => state.tags;
export const selectTodosLoading = (state: TodosListState) => state.loading;
export const selectTodosLoaded = (state: TodosListState) => state.loaded;
