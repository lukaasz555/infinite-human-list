import { IPerson } from '../interfaces/IPerson';
import { generatePerson } from './generatePerson';

export function getMorePersons(amount = 10): IPerson[] {
	const res: IPerson[] = [];

	for (let i = 0; i < amount; i++) {
		const person = generatePerson();
		res.push(person);
	}

	return res;
}
