import { TodoModel } from '../../../models/todos/todo.model';
import { TodosActions, TodosListActions } from '../../actions/todos/todos.action';

export interface ITodosListState {
	data: TodoModel[];
	tags: Set<string>;
	query: string;
	loading: boolean;
	loaded: boolean;
}

export const inititalTodosState: ITodosListState = {
	data: [],
	tags: new Set<string>(),
	query: '',
	loading: false,
	loaded: false
};

let cacheTodosList: TodoModel[] = [];

export function reducer(
	state: ITodosListState = inititalTodosState,
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

			cacheTodosList = [...action.payload];

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
			const filtered = action.payload
				? cacheTodosList.filter(t => `User ${t.userId}` === action.payload)
				: [...cacheTodosList];

			return {
				...state,
				data: filtered,
				query: action.payload,
				loaded: true,
				loading: false
			};
		default:
			return state;
	}
}

export const getData = (state: ITodosListState) => state.data;
export const getTags = (state: ITodosListState) => state.tags;
export const getLoading = (state: ITodosListState) => state.loading;
export const getLoaded = (state: ITodosListState) => state.loaded;
