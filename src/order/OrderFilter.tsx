import * as React from 'react';

import { IFilterOrders, IFilterProps } from './IOrder';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import "./styles.scss"

  class PedidosFilter extends React.Component <IFilterProps, any>{

    constructor(props: IFilterProps){
        super(props);
        this.state = {
            FullName: ''
        };
    }

    SearchOrders(e:any): any {
        e.preventDefault();
        const filter: IFilterOrders = {
            FullName: this.state.FullName
        };
        this.props.searchOrders(filter);
    }

    ClearFilters(e: any): any{
        e.preventDefault();
        this.setState({
            FullName: ''
        });
        this.props.clearFilterOrders();
    }

    handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
       
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
       
    }
 render() {
    return (
            <Card className="pedidos-filter-card">
                <CardContent>
                    <Typography variant="h6" component="h6">
                        Filtros de Pedidos
                    </Typography>
                    <form className="pedidos-filter-card" onSubmit={this.SearchOrders.bind(this)} noValidate autoComplete="off">
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <TextField 
                                    id="FullName" 
                                    name="FullName" 
                                    label="Apellido/Nombre"
                                    value={this.state.FullName}
                                    onChange={this.handleInputChange.bind(this)}
                                    style ={{width: '100%'}}
                                    />
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Grid item xs={3}>
                                <Button onClick={this.SearchOrders.bind(this)}  color="primary">
                                    Buscar 
                                </Button>
                                <Button onClick={this.ClearFilters.bind(this)}>
                                    Limpiar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        );
    }
  
}

export default PedidosFilter;