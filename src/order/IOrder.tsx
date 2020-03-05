export interface IFilterOrders {
    FullName: string;
}

export interface IFilterProps {
    searchOrders: (task: IFilterOrders) => void;
    clearFilterOrders: () => void;
}

export interface IOrderListProps {
    Orders: any,
    shouldComponentUpdate: () => void
}

export interface IOrder {
    Id: number,
    fecha: string,
    Nombre: string,
    Apellido: string,
    Estado: string,
    FechaPreparacion: string,
    FullName: string,
    items: [],
    Total: number
}

export interface IOrderManage {
    open: boolean,
    handleClose: () => void,
    order: any
}

export interface IOrderItems {
    items: any
}


export interface IProps {
	getOrders: () => void,
	filterOrders: (FullName: string) => void, 
	pedidos:any
 }



