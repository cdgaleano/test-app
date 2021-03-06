/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { IOrderManage } from './IOrder';
import { ConverStringToDate } from '../services/date-service';

 class OrderSchedule extends React.Component<IOrderManage, any> {
     data: any;
   constructor(props: IOrderManage){
       super(props)
       this.data = [{
        Id: this.props.order.Id,
        Subject: `Pedido de # ${this.props.order.Apellido} ${this.props.order.Nombre}`,
        StartTime: ConverStringToDate(this.props.order.Fecha),
        EndTime: ConverStringToDate(this.props.order.FechaPreparacion)
    }];
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
				Order # {this.props.order.Id}
			</DialogTitle>
				<DialogContent>
					<ScheduleComponent 
						height='550px' 
						selectedDate={ConverStringToDate(this.props.order.Fecha)} 
						eventSettings={{ dataSource: this.data }}>
						<Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
					</ScheduleComponent>
				</DialogContent>
			<DialogActions>
				<Button onClick={this.handleClose} color="primary">
				Cerrar
				</Button>
			</DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default OrderSchedule;