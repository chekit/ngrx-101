export interface IUser {
	address?: any;
	company?: any;
	email: string;
	id: number;
	name: string;
	phone: string;
	username: string;
	website: string;
}

export class UserModel {
	readonly address: any = null;
	readonly company: any = null;
	readonly email: string = null;
	readonly id: number = null;
	readonly name: string = null;
	readonly phone: string = null;
	readonly username: string = null;
	readonly website: string = null;

	constructor(private data: IUser) {
		this.address = data.address;
		this.company = data.company;
		this.email = data.email;
		this.id = data.id;
		this.name = data.name;
		this.phone = data.phone;
		this.username = data.username;
		this.website = data.website;
	}
}
