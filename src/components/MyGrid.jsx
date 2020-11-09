import React from 'react';
import data from '../gridData';
import { AgGridReact } from 'ag-grid-react';  
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';  
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import Button from './Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './main.css';
import { FormGroup } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default class MyGrid extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = {
            lightTheme: true
        };  
        this.toggleTheme = this.toggleTheme.bind(this);
    }  

    toggleTheme(){
        this.setState(prevState => ({
            lightTheme: !prevState.lightTheme
        }));
      };
  
    render() {  
        return (
            <div>
                <div
                    className={`ag-theme-alpine${this.state.lightTheme ? '' : '-dark'}`} 
                    style={{ height: "500px", width: '100vw' }}
                >
                    


                    <AgGridReact  
                        height="100vh"
                        width="100vw"
                        columnDefs={data.columnDefs} 
                        defaultColDef={data.defaultColDef} 
                        rowData={data.rowData} 
                        rowSelection='multiple'
                        frameworkComponents={data.frameworkComponents}
                        onDragStarted={(a, b, c, d) => {
                            console.log('onDragStarted', a, b, c, d)
                        }}
                    >  
                    </AgGridReact>  
                      
            {/* Start of Light and Dark Mode Toggle Button */}
            <FormGroup 
                        className="buttons" 
                        style={
                                this.state.lightTheme 
                                ? {backgroundColor: 'white'} 
                                : {backgroundColor: '#181d1f'}
                            }
                    >
                        <Typography component="div" className="switch">
                            <Grid component="label" container alignItems="baseline" spacing={1}>
                                <Grid item>
                                    <FormControlLabel
                                        control={
                                            <Button 
                                                checked={!this.state.lightTheme} 
                                                onChange={this.toggleTheme} 
                                            />
                                        }
                                    />          
                                </Grid>
                                <Grid item>Dark Mode</Grid>
                            </Grid>
                        </Typography>
                    </FormGroup>
                    {/* End of Light and Dark Mode Toggle Button */}
                    
                </div>  
            </div>
        );  
    }  
}