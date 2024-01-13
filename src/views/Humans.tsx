import { generatePerson } from '../helpers/generatePerson';

export const Humans = () => {
	const ppl = [];

	for (let i = 0; i < 5; i++) {
		const person = generatePerson();
		ppl.push(person);
	}

	console.log(ppl);

	return (
		<>
			<div>
				{ppl.map(({ name, lastname, age, avatar }, index) => (
					<div
						key={index}
						style={{
							display: 'flex',
							margin: '1.5em 0',
							justifyContent: 'space-between',
							alignItems: 'center',
							minWidth: '250px',
							maxWidth: '400px',
						}}>
						<div>
							<h2>
								{name} {lastname}
							</h2>
							<p style={{ textAlign: 'left' }}>Age: {age}</p>
						</div>
						<div
							style={{
								height: '100px',
								width: '100px',
								borderRadius: '50%',
								overflow: 'hidden',
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}>
							<img
								src={avatar}
								alt={`${name}'s avatar`}
								style={{ objectFit: 'contain' }}
							/>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
