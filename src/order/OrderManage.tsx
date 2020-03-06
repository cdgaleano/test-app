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
	
	componentDidMount(){
		this.props.getOrders();
	}

	async searchOrders(filter: IFilterOrders) {
		this.props.filterOrders(filter.FullName);
	}

	clearFilterOrders() {
		this.props.getOrders();
	}

	render(){
		return (
			<div>
				<PedidosFilter 
					searchOrders={this.searchOrders.bind(this)} 
					clearFilterOrders={this.clearFilterOrders.bind(this)}
				/>
				<OrderList 
					Orders={this.props.result} 
					{...this.props}
				/>
			</div>

		)
	}
}
const mapStateToProps = (reducers: any) =>{
  return reducers.pedidosReducer;
}
export default connect(mapStateToProps, OrderActions )(Orders);