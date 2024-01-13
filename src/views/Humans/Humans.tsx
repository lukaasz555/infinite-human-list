import { MoreAndMorePeople } from '../../components/MoreAndMorePeople/MoreAndMorePeople';
import persons from '../../data/persons.json';
import './Humans.css';

export const Humans = () => {
	return (
		<div className='humans__container'>
			<MoreAndMorePeople persons={persons} />
		</div>
	);
};
