import { SinglePerson } from '../SinglePerson/SinglePerson';
import { IPerson } from '../../interfaces/IPerson';
import './MoreAndMorePeople.css';

interface MoreAndMorePeopleProps {
	persons: IPerson[];
}

export const MoreAndMorePeople = ({ persons }: MoreAndMorePeopleProps) => {
	return (
		<>
			<main className='list__wrapper'>
				{persons.map((person, index) => (
					<SinglePerson person={person} key={index} />
				))}
			</main>
		</>
	);
};
