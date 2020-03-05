/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IOrderManage } from './IOrder';
import Grid from '@material-ui/core/Grid';
import "./styles.scss"
import OrderItems from './OrderItems';
import moment from 'moment';

 class Order extends React.Component<IOrderManage, any> {
	public dateOrder: string;
	public datePreparationOrder: string;

   constructor(props: IOrderManage){
	   super(props)
	   this.dateOrder = moment(this.props.order.Fecha).format('L LT');
	   this.datePreparationOrder = moment(this.props.order.FechaPreparacion).format('L LT');
   }
   
	handleClose = () => {
		this.props.handleClose();
	};

  render() {
   
    return (
      <div>
        <Dialog
			open={this.props.open}
			onClose={this.handleClose}
			fullWidth={true}
			maxWidth = {'md'}
			aria-labelledby="form-dialog-title">
          	<DialogTitle id="form-dialog-title">
				  Pedido # {this.props.order.Id}
			</DialogTitle>
			<DialogContent>
				<h4>Informacion del Cliente</h4>
				<Grid container spacing={3}>
					<Grid item xs={3}>
						<TextField
							id="lastname"
							label="Apellido"
							value={this.props.order.Apellido}
							margin="normal"
							style ={{width: '100%'}}
							InputProps={{
								readOnly: true,
							}}
							/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							id="name-client"
							label="Nombre"
							value={this.props.order.Nombre}
							margin="normal"
							style ={{width: '100%'}}
							InputProps={{
								readOnly: true,
							}}
							/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							id="order-date"
							label="Fecha del Pedido"
							value={this.dateOrder}
							margin="normal"
							style ={{width: '100%'}}
							InputProps={{
								readOnly: true,
							}}
							/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							id="estado"
							label="Estado"
							value={this.props.order.Estado}
							margin="normal"
							style ={{width: '100%'}}
							InputProps={{
								readOnly: true,
							}}
							/>
					</Grid>

					<Grid item xs={3}>
						<TextField
							id="date-preparation"
							label="Fecha de Preparacion"
							value={this.datePreparationOrder}
							margin="normal"
							style ={{width: '100%'}}
							InputProps={{
								readOnly: true,
							}}
							/>
					</Grid>
				</Grid>
				<h4>Detalle del Pedido</h4>
				<OrderItems items={this.props.order.items}/>
				<Grid container spacing={3}>
				<Grid item xs={9}></Grid>
				<Grid item xs={3}>
					<TextField
						id="standard-read-only-input"
						label="Total"
						value={this.props.order.Total}
						margin="normal"
						style ={{width: '100%'}}
						InputProps={{
							readOnly: true,
						}}
						/>
				</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default Order;