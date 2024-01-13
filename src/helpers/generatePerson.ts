import { getRandomIndexFromRange } from './getRandomIndexFromRange';
import { generateGender } from './generateGender';
import { names, lastNames, ages, avatars } from '../data';

import { IPerson } from '../interfaces/IPerson';

export function generatePerson(): IPerson {
	const newPerson: IPerson = {} as IPerson;

	newPerson.name = names[getRandomIndexFromRange(names.length - 1)];
	newPerson.lastname = lastNames[getRandomIndexFromRange(lastNames.length - 1)];
	newPerson.age = ages[getRandomIndexFromRange(ages.length - 1)];
	newPerson.avatar = avatars[getRandomIndexFromRange(avatars.length - 1)];
	newPerson.gender = generateGender();

	return newPerson;
}
