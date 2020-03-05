import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort,  } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { IOrderItems } from './IOrder';
 class OrderItems extends React.Component<IOrderItems, {}>{
   
  public render() {
    return <GridComponent dataSource={this.props.items} allowSorting={true} height={180}>
        <ColumnsDirective>
            <ColumnDirective field='Quantity' width='70' textAlign="Center"/>
            <ColumnDirective field='Description' width='200'/>
            <ColumnDirective field='Price' width='50' format="C2" textAlign="Right"/>
            <ColumnDirective field='Total' width='50' format="C2" textAlign="Right"/>
        </ColumnsDirective>
        <Inject services={[Sort]} />
    </GridComponent>
  }
};

export default OrderItems;