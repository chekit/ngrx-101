import { TodosListEffect } from './todos/todos.effects';
import { TodosUserInfoEffect } from './todos/user.effects';
import { UserInfoEffect } from './users/user.effects';
import { UserListEffects } from './users/users.effects';

export const effects: any[] = [
	UserListEffects,
	UserInfoEffect,
	TodosListEffect,
	TodosUserInfoEffect
];