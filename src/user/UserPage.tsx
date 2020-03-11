import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ColumnDirective, ColumnsDirective, CommandColumn, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { CommandModel, Edit, EditSettingsModel, Inject } from '@syncfusion/ej2-react-grids';
import { userActions } from '../actions';

class UserList  extends React.Component<any, any>{
    public grid: Grid | null;
    public editOptions: EditSettingsModel = { allowEditing: true, allowDeleting: true };
    constructor(props:any){
        super(props)
        this.grid = null;
    }

    componentDidMount(){
        this.props.getUsers();
    }
    
    public commands: CommandModel[] = [
        {
            buttonOption: {
                content: 'Borrar', cssClass: 'e-flat'
            }
        }
    ];
    

    public commandClick(args: any): void  {
        if (this.grid) {
            this.props.deleteUser(args.rowData.id)
        }
    }
    render(){
        console.log('props', this.props)
        this.commandClick = this.commandClick.bind(this);
        return(
            <>
                <Card className="pedidos-filter-card">
                    <CardContent>
                        <Typography variant="h6" component="h6">
                            Usuarios
                        </Typography>
                        </CardContent>
                </Card>
                <div className="user-width">
                    <GridComponent dataSource={this.props.users.users} editSettings={this.editOptions} commandClick={this.commandClick}  ref={g => this.grid = g}>
                        <ColumnsDirective>
                            <ColumnDirective field='id' headerText='Id' width='30' textAlign="Center" isPrimaryKey={true}/>
                            <ColumnDirective field='username' headerText='Usuario' width='60' textAlign="Center"/>
                            <ColumnDirective field='lastName' headerText='Apellido' width='60' textAlign="Center"/>
                            <ColumnDirective field='firstName' headerText='Nombre' width='60' textAlign="Center"/>
                            <ColumnDirective headerText='' width='40' commands= {this.commands}/>
                        </ColumnsDirective>
                        <Inject services={[Edit, CommandColumn]} />
                    </GridComponent>
                </div>
                    
            </>
        );
    }
}

const mapStateToProps = (state:any) => {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}
const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

export default connect(mapStateToProps, actionCreators)(UserList);
