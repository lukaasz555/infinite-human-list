import { IPerson } from '../interfaces/IPerson';
import persons from '../data/persons.json';
import { getMorePersons } from './getMorePersons';

export async function fetchPersons(
	offset: number,
	records = 10
): Promise<IPerson[]> {
	return new Promise((resolve) => {
		setTimeout(() => {
			let res: IPerson[] = persons.slice(offset, offset + records);
			if (!res.length) {
				res = getMorePersons(records);
			}
			resolve(res);
		}, 999);
	});
}
