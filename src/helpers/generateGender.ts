import { GenderEnum } from '../enums/gender.enum';

export function generateGender(): GenderEnum {
	const n = Math.floor(Math.random() * 2);
	return n == 0 ? GenderEnum.MALE : GenderEnum.FEMALE;
}
