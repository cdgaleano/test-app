
import { ColumnDirective, ColumnsDirective, Sort, Reorder, CommandColumn, Grid, GridComponent } from '@syncfusion/ej2-react-grids';

import { Inject, Page, PageSettingsModel, CommandModel, CommandClickEventArgs } from '@syncfusion/ej2-react-grids'

import * as React from 'react';
import { IOrderListProps } from './IPedidos';
import Order from './Order';

 class PedidosList extends React.Component<any, any>{
  	constructor(props: IOrderListProps) {
		super(props);
		this.state = {
			openOrderModal: false
		}
	}

	public pageOptions: PageSettingsModel = {
		pageSize: 20, 
		pageSizes: true
	};

	public commands: CommandModel[] = [
		{
		buttonOption: {
			content: 'View', cssClass: 'e-flat'
		}
		}
	];


	handleClose(){
		this.setState({
			openOrderModal: false
		})
	}

	public commandClick(args: any): void  {
		this.setState({
			openOrderModal: true,
			order: args.rowData
		})
		console.log('state', this.state)
	}

  public render(){
	 this.commandClick = this.commandClick.bind(this);
	  return (
			<>
				<GridComponent  
						dataSource={this.props.Orders} 
						allowReordering={true} 
						allowPaging={true} 
						allowSorting={true} 
						height={650} 
						commandClick={this.commandClick}
						pageSettings={this.pageOptions}>
						<ColumnsDirective>
						<ColumnDirective field='Id' headerText='Pedido Id' width='50' textAlign="Center"/>
						<ColumnDirective field='FullName' headerText='Apelldo/Nombre' textAlign="Left" width='150'/>
						<ColumnDirective field='Fecha' headerText='Fecha' width='100' textAlign="Center"/>
						<ColumnDirective field='FechaPreparacion' headerText='Fecha Preparacion' width='100' textAlign="Center"/>
						<ColumnDirective field='Total' headerText='Total' width='50' textAlign="Center"/>
						<ColumnDirective headerText='Acciones' width='50' commands= {this.commands}/>
					</ColumnsDirective>
					<Inject services={[Page, Sort, Reorder, CommandColumn]}/>
				</GridComponent>
				
				<Order 
					open={this.state.openOrderModal}
					handleClose={this.handleClose.bind(this)}
					order={this.state.order}/>
					</>
		  )
  }
};

export default PedidosList;