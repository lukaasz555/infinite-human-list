import { GenderEnum } from '../enums/gender.enum';

export interface IPerson {
	name: string;
	lastname: string;
	avatar: string;
	age: number;
	gender: GenderEnum | string;
}
