import * as React from 'react';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { BTCIcon, MetaMaskSmallIcon } from 'assets/svg';

import AssetName from './AssetName/AssetName';
import MNTReward from './MNTReward/MNTReward';
const MainFront = () => {
  const [sortingModel, updateSortingModel] = React.useState({
    field: 'undefined',
    sort: 'undefined'
  });

  const handleStateChange = (state: any) => {
    if (state.sorting.sortModel[0]) {
      updateSortingModel(state.sorting.sortModel[0]);
    }
  }
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 300,
      hideSortIcons: true,
      filterable: false,
      renderCell: (item) => {
        const assetNameArguments = {
          isHovered: false,
          isLoading: false,
          title: 'BTC',
          balance: '~17.23',
          tooltipText: 'Your current BTC balance in your wallet',
        };
        return (
          <AssetName Icon={BTCIcon} SubIcon={MetaMaskSmallIcon} {...assetNameArguments} />
        );
      },
      renderHeader: (item) => {
        /*
          HeaderCategory component is here
          https://github.com/minterest-finance/ui-kit/pull/10
        */
        const headerCategoryProps = {
          label: item.field,
          sorted: sortingModel.field === item.field,
          sortOrder: sortingModel.sort
        }
        return (
          <div>{item.field}</div>
          // <HeaderCategory {...headerCategoryProps}/>
        );
      },
      disableColumnMenu: true,
    },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  ];

  const props = {
    rows,
    columns,
    handleStateChange
  }

  return (
    <DataTable {...props}/>
  )
}

const DataTable = ({rows, columns, handleStateChange}: any) => {

  return (
      <DataGrid
        sx={{
          '.MuiDataGrid-columnSeparator--sideRight': {
            visibility: 'hidden',
          }
        }}
        rows={rows}
        columns={columns}
        showColumnRightBorder={false}
        hideFooterPagination={true}
        hideFooter={true}
        autoHeight
        onStateChange={handleStateChange}
        disableSelectionOnClick={true}
        headerHeight={40}
        rowHeight={73}
      />
  );
}

export default MainFront;
