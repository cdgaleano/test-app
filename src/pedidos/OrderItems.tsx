import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort,  } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { IOrderItems } from './IPedidos';
 class OrderItems extends React.Component<IOrderItems, {}>{
   
  public render() {
    console.log(this.props.items)
    return <GridComponent dataSource={this.props.items} allowSorting={true} height={180}>
        <ColumnsDirective>
            <ColumnDirective field='Quantity' width='100' textAlign="Right"/>
            <ColumnDirective field='Description' width='100'/>
            <ColumnDirective field='Price' width='100' textAlign="Right"/>
            <ColumnDirective field='Total' width='100' format="C2" textAlign="Right"/>
        </ColumnsDirective>
        <Inject services={[Sort]} />
    </GridComponent>
  }
};

export default OrderItems;