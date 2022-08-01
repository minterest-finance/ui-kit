import * as React from 'react';

import { DataGrid, GridColDef, GridValueGetterParams, GridRowParams } from '@mui/x-data-grid';
import { BTCIcon, MetaMaskSmallIcon } from 'assets/svg';

import AssetName from './AssetName/AssetName';
import HeaderCategory from './HeaderCategory/HeaderCategory';
import MNTReward from './MNTReward/MNTReward';
import NumericInfo from './NumericInfo/NumericInfo';
import PercentageInfo from './PercentageInfo/PercentageInfo';
import { BigButton, SmallButton } from 'components/Button/Button';

// Dunno where this should reside
// const formatHeaderCell = (item) => {
//   return (
//     // <HeaderCategory {...headerCategoryProps}/>
//     <HeaderCategory {...item.colDef} />
  // );
// }

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
      field: 'asset',
      headerName: 'Asset',
      width: 169,
      hideSortIcons: true,
      filterable: false,
      disableColumnMenu: true,
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
        const headerCategoryProps = {
          label: item.colDef.headerName || '', // or just hardcode it here, dunno
          sorted: sortingModel.field === item.field,
          sortOrder: sortingModel.sort
        }
        return (
          <HeaderCategory {...headerCategoryProps}/>
        );
      },
    },


    { 
    field: 'totalSupply',
    headerName: 'Total Supply',
    width: 104,
    disableColumnMenu: true,
    hideSortIcons: true,
    filterable: false,
      renderCell: (item) => {
        const { usdValue, assetValue, isLoading } = item.row.totalSupplyData;
        const numericInfoArguments = {
          usdValue,
          assetValue,
          isLoading,
        };
        return (
          <NumericInfo {...numericInfoArguments}/>
        );
      },
      renderHeader: (item) => {
        const headerCategoryProps = {
          // label: item.field,
          label: item.colDef.headerName || '', // or just hardcode it here, dunno
          sorted: sortingModel.field === item.field,
          sortOrder: sortingModel.sort
        }
        return (
          <HeaderCategory {...headerCategoryProps}/>
        );
      },
      
    },


    { 
    field: 'supplyApy',
    headerName: 'Supply Apy',
    width: 99,
    disableColumnMenu: true,
    hideSortIcons: true,
    filterable: false,
      renderCell: (item) => {
        const { percentageValue, netApyOnly, loading, tooltipText, mntRewardValue } = item.row.supplyApyData;
        const percentageInfoProps = {
          percentageValue,
          netApyOnly,
          loading,
          tooltipText,
          mntRewardValue
        };
        return (
          <PercentageInfo {...percentageInfoProps}/>
        );
      },
      renderHeader: (item) => {
        const headerCategoryProps = {
          // label: item.field,
          label: item.colDef.headerName || '', // or just hardcode it here, dunno
          sorted: sortingModel.field === item.field,
          sortOrder: sortingModel.sort
        }
        return (
          <HeaderCategory {...headerCategoryProps}/>
        );
      },
    },


    {
      field: 'yourSupply',
      headerName: 'Your Supply',
      width: 104,
      hideSortIcons: true,
      filterable: false,
      disableColumnMenu: true,
      renderHeader: (item) => {
        const headerCategoryProps = {
          // label: item.field,
          label: item.colDef.headerName || '', // or just hardcode it here, dunno
          sorted: sortingModel.field === item.field,
          sortOrder: sortingModel.sort
        }
        return (
          <HeaderCategory {...headerCategoryProps}/>
        );
      },
      renderCell: (item) => {
        const { usdValue, assetValue, isLoading } = item.row.yourSupplyData;
        const numericInfoArguments = {
          usdValue,
          assetValue,
          isLoading,
        };
        return (
          <NumericInfo {...numericInfoArguments}/>
        );
      },
    },


    {
      field: 'supplyButtons',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 137,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      renderCell: (item) => {
        const buttonProps = {
          children: 'Supply',
          disabled: false,
        };
        return (<SmallButton {...buttonProps} color={'primary'}/>);
      }
    },
  ];
  
  const rows = [
    { id: 1,
      asset: 'A',
      totalSupply: 5000000000,
      supplyApy: 238,
      yourSupply: 50000000,
      totalSupplyData: {usdValue: '5.00B', assetValue: '63.87', isLoading: false},
      supplyApyData: {percentageValue: '2.38', netApyOnly: false, loading: false, tooltipText: 'qweqr', mntRewardValue: '0.45'},
      yourSupplyData: {usdValue: '50.00M', assetValue: '63.87', isLoading: false}
    },
    { id: 2,
      totalSupply: 500000000,
      supplyApy: 538,
      yourSupply: 5000000,
      asset: 'Z',
      totalSupplyData: {usdValue: '500M', assetValue: '63.87', isLoading: false},
      supplyApyData: {percentageValue: '5.38', netApyOnly: false, loading: false, tooltipText: 'qweqr', mntRewardValue: '0.45'}, 
      yourSupplyData: {usdValue: '5.00M', assetValue: '63.87', isLoading: false} 
    },
    { id: 3,
      totalSupply: 50000000,
      supplyApy: 838,
      yourSupply: 0,
      asset: 'B',
      totalSupplyData: {usdValue: '50.00M', assetValue: '63.87', isLoading: false},
      supplyApyData: {percentageValue: '8.38', netApyOnly: false, loading: false, tooltipText: 'qweqr', mntRewardValue: '0.45'}, 
      yourSupplyData: {usdValue: '', assetValue: '', isLoading: false} 
    },
    { id: 4,
      asset: 'C',
      totalSupply: 5000000,
      supplyApy: 0,
      yourSupply: 0,
      totalSupplyData: {usdValue: '5.00M', assetValue: '63.87', isLoading: false},
      supplyApyData: {percentageValue: '0', netApyOnly: false, loading: false, tooltipText: 'qweqr', mntRewardValue: '0.45'}, 
      yourSupplyData: {usdValue: '', assetValue: '', isLoading: false} 
    },
    { id: 5,
      asset: 'D',
      totalSupply: 500000,
      supplyApy: 938,
      yourSupply: 5000,
      totalSupplyData: {usdValue: '500K', assetValue: '63.87', isLoading: false},
      supplyApyData: {percentageValue: '9.38', netApyOnly: false, loading: false, tooltipText: 'qweqr', mntRewardValue: '0.45'}, 
      yourSupplyData: {usdValue: '5,000.00', assetValue: '63.87', isLoading: false} 
    },
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
          },
          '.MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '.MuiDataGrid-columnHeader:focus': {
            outline: 'none',
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
