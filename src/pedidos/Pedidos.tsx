/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from 'react';
import { connect } from 'react-redux';
import * as pedidosActions from '../actions/pedidosActions';
import OrderList from './PedidosList';
import PedidosFilter from './PedidosFilter';
import { IFilterOrders } from './IPedidos';
import { data } from './datasource';

interface IProps {
	traerTodos: () => void
 }

 
class Orders extends React.Component<IProps, any> {
	constructor(props: IProps){
		super(props);
		
		const result = data.map( (item: any) =>{
			item.FullName = `${item.Apellido} ${item.Nombre}`; 
			return item;
		} ) 

        this.state = {
            Filter: {
                FullName: ''
			},
			Orders: result
        };
    }

	componentDidMount(){
		this.props.traerTodos();
	}

	searchOrders(filter: IFilterOrders): void {
		const rest  = data.filter((item: any) => item.Apellido.toLowerCase().includes(filter.FullName.toLowerCase()) ||  item.Nombre.toLowerCase().includes(filter.FullName.toLowerCase()));
		this.setState({
			Orders: rest
		})
	}

	clearFilterOrders(): void {
		this.setState({
			Orders: data
		})
	}

	render(){
		return (
			<>
				<PedidosFilter 
					searchOrders={this.searchOrders.bind(this)} 
					clearFilterOrders={this.clearFilterOrders.bind(this)}
				/>
				<OrderList 
					Orders={this.state.Orders} 
				/>
			</>
		)
	}
}
const mapStateToProps = (reducers: any) =>{
  return reducers.pedidosReducer;
}
export default connect(mapStateToProps, pedidosActions )(Orders);