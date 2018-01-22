import { TodoModel } from '../../../models/todos/todo.model';
import { TodosActions, TodosListActions } from '../../actions/todos/todos.action';

export interface ITodosState {
	data: TodoModel[];
	tags: Set<string>;
	query: string;
	loading: boolean;
	loaded: boolean;
}

export const inititalTodosState: ITodosState = {
	data: [],
	tags: new Set<string>('asdds'),
	query: '',
	loading: false,
	loaded: false
};

export function todosListReducer(
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

export const selectTodosList = (state: ITodosState) => state.data;
export const selectTodosListTags = (state: ITodosState) => state.tags;
export const selectTodosLoading = (state: ITodosState) => state.loading;
export const selectTodosLoaded = (state: ITodosState) => state.loaded;
