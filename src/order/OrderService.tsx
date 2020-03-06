import { FormatDate }  from '../services/DateService';

export const HandleListOrder = (list: any): any => {
    return list.map( (item: any) =>{
        item.FullName = `${item.Apellido} ${item.Nombre}`; 
        item.DateOrderFormat = FormatDate(item.Fecha, 'L LT');
        item.DatePreparationFormat = FormatDate(item.FechaPreparacion, 'L LT');
        item.Total = parseInt(item.Total);
        return item;
    } ) 
} 
