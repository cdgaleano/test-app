/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IOrderManage } from './IOrder';
import Grid from '@material-ui/core/Grid';
import "./styles.scss"
import OrderItems from './OrderItems';
import { FormatDate }  from '../services/DateService';
import { TextFieldCustom } from '../controls/TexFieldCustom';

 class Order extends React.Component<IOrderManage, any> {
	public dateOrder: string;
	public datePreparationOrder: string;

   constructor(props: IOrderManage){
	   super(props)
	   this.dateOrder = FormatDate(this.props.order.Fecha, 'L LT');
	   this.datePreparationOrder = FormatDate(this.props.order.FechaPreparacion, 'L LT');
	  
   }
   
	handleClose = () => {
		this.props.handleClose();
	};

  render() {
	const { Apellido , Nombre, Estado, Total } = this.props.order;
	
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
				<h4 className="margin-none">Informacion del Cliente</h4>
				<Grid container spacing={3}>
					<TextFieldCustom id='lastname' label="Apellido" value={Apellido}/>
					<TextFieldCustom id='name' label="Nombre" value={Nombre} />
					<TextFieldCustom id='order_Date' label="Fecha del Pedido" value={this.dateOrder} />
					<TextFieldCustom id='estado' label="Estado" value={Estado} />
					<TextFieldCustom id='date-preparation' label="Fecha de Preparacion" value={this.datePreparationOrder} />
				</Grid>
				<h4>Detalle del Pedido</h4>
				<OrderItems items={this.props.order.items}/>
				<Grid container spacing={3}>
					<Grid item xs={9}></Grid>
					<TextFieldCustom id='total' label="Total" value={Total}/>
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