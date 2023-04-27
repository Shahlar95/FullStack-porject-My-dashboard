import {
    GridColumnMenuContainer ,
    DataGrid,
    
} from "@mui/x-data-grid";

const CustomColumnMenu=(props)=>{

    const {hideMenu, currentColumn,open}=props;
    return (
        <GridColumnMenuContainer
        hideMenu={hideMenu}
        currentColumn={currentColumn}
        open={open}>
            <DataGrid onClick={hideMenu} column={currentColumn}/>
            <DataGrid onClick={hideMenu} column={currentColumn}/>
        </GridColumnMenuContainer>
    );
};

export default CustomColumnMenu;