import { useEffect, useRef, useState } from 'react';
import { IPerson } from '../../interfaces/IPerson';
import { SinglePerson } from '../SinglePerson/SinglePerson';
import { fetchPersons } from '../../helpers/fetchPersons';
import './MoreAndMorePeople.css';

export const MoreAndMorePeople = () => {
	const [personsList, setPersonsList] = useState<IPerson[]>([]);
	const [isLoading, setLoading] = useState(true);
	const footerRef = useRef<HTMLElement | null>(null);
	let offset = 0;

	async function getPersons() {
		setLoading(true);
		const data = await fetchPersons(offset);
		setPersonsList((prev) => {
			const updatedList = [...prev, ...data];
			offset = updatedList.length;
			return updatedList;
		});
		setLoading(false);
	}

	const onShow = (entries: IntersectionObserverEntry[]) => {
		const [entry] = entries;
		if (entry.isIntersecting) getPersons();
	};

	useEffect(() => {
		const observer = new IntersectionObserver(onShow, {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		});
		if (footerRef.current) observer.observe(footerRef.current);

		return () => {
			if (footerRef.current) observer.unobserve(footerRef.current);
		};
	}, [footerRef]);

	return (
		<div className='people__wrapper'>
			<main className='people__wrapper--list'>
				{personsList.map((person, index) => (
					<SinglePerson person={person} key={index} />
				))}
			</main>
			<footer ref={footerRef} className='people__wrapper--footer'>
				{!!isLoading && <p>Loading...</p>}
			</footer>
		</div>
	);
};
