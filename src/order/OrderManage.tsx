/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from 'react';
import { connect } from 'react-redux';
import OrderList from './Orders';
import PedidosFilter from './OrderFilter';
import { IFilterOrders } from './IOrder';
import { IProps } from './IOrder';
import * as OrderActions from '../actions/OrdersActions';
class Orders extends React.Component<IProps, any> {
	constructor(props: IProps){
		super(props);
		this.state = {
            Filter: {
                FullName: ''
			},
			Orders: null
        };
	}
	
	createFullNameToOrders() {
		return this.props.pedidos.map( (item: any) =>{
			item.FullName = `${item.Apellido} ${item.Nombre}`; 
			return item;
		} ) 
	}

	async componentDidMount(){
		await this.props.getOrders();
		this.setState ({
			Orders: this.createFullNameToOrders()
		});
	}

	async searchOrders(filter: IFilterOrders) {
		await this.props.filterOrders(filter.FullName);
		this.setState({
			Orders: this.props.pedidos
		})
	}

	async clearFilterOrders() {
		await this.props.getOrders();
		this.setState({
			Orders: this.props.pedidos
		})
	}

	render(){
		return (
			<>
				{this.state.Orders &&
					<div>
						<PedidosFilter 
							searchOrders={this.searchOrders.bind(this)} 
							clearFilterOrders={this.clearFilterOrders.bind(this)}
						/>
						<OrderList 
							Orders={this.state.Orders} 
						/>
					</div>
				}
				
			</>
		)
	}
}
const mapStateToProps = (reducers: any) =>{
  return reducers.pedidosReducer;
}
export default connect(mapStateToProps, OrderActions )(Orders);