import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export const TextFieldCustom = (props: any) => {

  return (
    	<Grid item xs={3}>
			<TextField
				id= {props.id}
				label={props.label}
				value={props.value}
				autoComplete='off'
				margin="normal"
				style ={{width: '100%'}}
				InputProps={{
					readOnly: true,
				}}
				/>
		</Grid>
    )

}