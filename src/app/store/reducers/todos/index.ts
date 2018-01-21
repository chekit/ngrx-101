import { ITodosState, todosReducer } from './todos.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface ITodosPageState {
	todos: ITodosState;
}

export const reducers: ActionReducerMap<ITodosPageState> = {
	todos: todosReducer
};

