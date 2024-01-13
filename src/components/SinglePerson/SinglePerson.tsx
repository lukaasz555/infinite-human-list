import { IPerson } from '../../interfaces/IPerson';
import './SinglePerson.css';

interface SinglePersonProps {
	person: IPerson;
}

export const SinglePerson = ({ person }: SinglePersonProps) => {
	const { name, lastname, age, gender, avatar } = person;

	return (
		<div className='card__wrapper'>
			<section className='card__details'>
				<h2 className='card__details--header'>
					{name} {lastname}
				</h2>
				<p className='card__details--text'>Age: {age}</p>
				<p className='card__details--text'>Gender: {gender}</p>
			</section>
			<section className='card__picture--container'>
				<img
					src={avatar}
					alt={`${name}'s avatar`}
					className='card__picture--image'
				/>
			</section>
		</div>
	);
};
