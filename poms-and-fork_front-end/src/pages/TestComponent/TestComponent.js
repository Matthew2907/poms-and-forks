import React from 'react';

const TestComponent = () => {
	const handleClick = () => {
		fetch(`http://localhost:5000/files/`)
			.then(response => {
				if(response.ok) {
					return response.json();
				}
				throw Error("Błąd pobierania danych! " + response.status)
			})
			.then(data => console.log(data)
			)
			.catch(error => console.log(error));
	};

	return (
		<button style={{position: 'absolute', right: 0}} onClick={handleClick}>
			Klkiknij mnie
		</button>
	);
};

export default TestComponent;
