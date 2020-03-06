import React from 'react';
import './spinner.scss';

const Spinner = () => (
	<div className='center margin-top-150'>
		<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
	</div>
);

export default Spinner;