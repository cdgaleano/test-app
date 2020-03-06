import React from 'react';
import './spinner.scss';

const Spinner = () => (
	<div className='center'>
		<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
	</div>
);

export default Spinner;