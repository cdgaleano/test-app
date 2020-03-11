
import { ColumnDirective, ColumnsDirective, Sort, Reorder, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { ContextMenu, ContextMenuItemModel,Inject, Page, PageSettingsModel}  from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { IOrderListProps } from './IOrder';
import Order from './Order';
import OrderSchedule from './Scheduler';
import Spinner from '../common/spinner/Spinner';
import ErrorCustom from '../common/Error/error-custom';

 class OrderList extends React.Component<any, any>{
	public grid: Grid | null
  	constructor(props: IOrderListProps) {
		super(props);
		this.state = {
			openOrderModal: false,
			openOrderSchedulerModal: false,
		}
		this.grid = null;
	}

	public pageOptions: PageSettingsModel = {
		pageSize: 20, 
		pageSizes: true
	};

	contextMenuItems: ContextMenuItemModel[] = [
		{text: 'Detalle', target: '.e-content', id: 'view'},
		{text: 'Scheduler', target: '.e-content', id: 'scheduler'}
	  ];

	contextMenuClick(args: any) {
		this.executeView(args)
		this.executeShedulerAction(args);
	}

	executeView(args:any) {
		if( args.item.id === 'view'){
			this.setState({
				openOrderModal: true,
				order: args.rowInfo.rowData
			})
		}
	}

	executeShedulerAction(args:any) {
		if( args.item.id === 'scheduler'){
			this.setState({
				openOrderSchedulerModal: true,
				order: args.rowInfo.rowData
			});
		}
	}

	handleClose() {
		this.setState({
			openOrderModal: false
		})
	}

	handleSchedulerClose(){
		this.setState({
			openOrderSchedulerModal: false
		})
	}
	

   render() {

		const { cargando, error, Orders } = this.props

		if ( cargando ) {
				return <Spinner />
		}
		if (error) {
			return <ErrorCustom mensaje={error}/>
		}
		this.contextMenuClick = this.contextMenuClick.bind(this);
	  return (
			<>
				<GridComponent  
						dataSource={Orders} 
						allowReordering={true} 
						allowPaging={true} 
						allowSorting={true} 
						height={450} 
						contextMenuItems={this.contextMenuItems}
						ref={g=> this.grid = g } contextMenuClick={this.contextMenuClick}
						pageSettings={this.pageOptions}>
						<ColumnsDirective>
						<ColumnDirective field='Id' headerText='Pedido Id' width='50' textAlign="Center"/>
						<ColumnDirective field='FullName' headerText='Apelldo/Nombre' textAlign="Left" width='110'/>
						<ColumnDirective field='Estado' headerText='Estado' textAlign="Center" width='120'/>
						<ColumnDirective field='DateOrderFormat'  headerText='Fecha' width='100' textAlign="Center"/>
						<ColumnDirective field='DatePreparationFormat'  headerText='Fecha Preparacion' width='100' textAlign="Center"/>
						<ColumnDirective field='Total' headerText='Total' format="C2" width='60' textAlign="Center"/>
					</ColumnsDirective>
					<Inject services={[Page, Sort, Reorder, ContextMenu]}/>
				</GridComponent>
				{this.state.openOrderModal &&
					<Order 
						open={this.state.openOrderModal}
						handleClose={this.handleClose.bind(this)}
						order={this.state.order}/>
				}
				{this.state.openOrderSchedulerModal &&
					<OrderSchedule
						open={this.state.openOrderSchedulerModal}
						handleClose={this.handleSchedulerClose.bind(this)}
						order={this.state.order}/>
  				}

			</>
		  )
  	}
};

export default OrderList;