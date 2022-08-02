import * as React from 'react';

import { SxProps, Theme } from '@mui/material';
import { GridRowsProp } from '@mui/x-data-grid';
import {
  DataGrid,
  GridColDef,
  GridSortDirection,
  GridCellParams,
} from '@mui/x-data-grid';
import { BTCIcon, MetaMaskSmallIcon } from 'assets/svg';

import AssetName from './AssetName/AssetName';
import HeaderCategory from './HeaderCategory/HeaderCategory';
import NumericInfo from './NumericInfo/NumericInfo';
import PercentageInfo from './PercentageInfo/PercentageInfo';
import { SmallButton, Typography } from 'components';

const MainFront = () => {
  const sortingOrder: GridSortDirection[] = ['desc', 'asc'];

  const [sortingModel, updateSortingModel] = React.useState({
    field: 'undefined',
    sort: 'undefined',
  });

  const handleStateChange = (state: any) => {
    if (state.sorting.sortModel[0]) {
      updateSortingModel(state.sorting.sortModel[0]);
    }
  };

  const commonCellParams = {
    hideSortIcons: true,
    filterable: false,
    disableColumnMenu: true,
    sortingOrder,
  };

  const columns: GridColDef[] = [
    {
      ...commonCellParams,
      field: 'asset',
      headerName: 'Asset',
      width: 169,
      headerClassName: 'assetHeaderCell',
      renderCell: (item) => {
        const { isLoading, title, balance, tooltipText } = item.row.assetData;
        const assetNameArguments = {
          isLoading,
          title,
          balance,
          tooltipText,
        };
        return (
          <AssetName
            Icon={BTCIcon}
            SubIcon={MetaMaskSmallIcon}
            {...assetNameArguments}
          />
        );
      },
      renderHeader: (item) => {
        const headerCategoryProps = {
          label: item.colDef.headerName || '', // or just hardcode it here, dunno
          sorted: sortingModel.field === item.field,
          sortOrder: sortingModel.sort,
        };
        return <HeaderCategory {...headerCategoryProps} />;
      },
    },

    {
      ...commonCellParams,
      field: 'totalSupply',
      headerName: 'Total Supply',
      width: 104,
      align: 'center',
      headerAlign: 'center',
      renderCell: (item) => {
        const { usdValue, assetValue, isLoading } = item.row.totalSupplyData;
        const numericInfoArguments = {
          usdValue,
          assetValue,
          isLoading,
        };
        return <NumericInfo {...numericInfoArguments} />;
      },
      renderHeader: (item) => {
        const headerCategoryProps = {
          label: item.colDef.headerName || '', // or just hardcode it here, dunno
          sorted: sortingModel.field === item.field,
          sortOrder: sortingModel.sort,
        };
        return <HeaderCategory {...headerCategoryProps} />;
      },
    },

    {
      ...commonCellParams,
      field: 'supplyApy',
      headerName: 'Supply Apy',
      width: 99,
      align: 'center',
      headerAlign: 'center',
      renderCell: (item) => {
        const {
          percentageValue,
          netApyOnly,
          loading,
          tooltipText,
          mntRewardValue,
        } = item.row.supplyApyData;
        const percentageInfoProps = {
          percentageValue,
          netApyOnly,
          loading,
          tooltipText,
          mntRewardValue,
        };
        return <PercentageInfo {...percentageInfoProps} />;
      },
      renderHeader: (item) => {
        const headerCategoryProps = {
          label: item.colDef.headerName || '', // or just hardcode it here, dunno
          sorted: sortingModel.field === item.field,
          sortOrder: sortingModel.sort,
        };
        return <HeaderCategory {...headerCategoryProps} />;
      },
    },

    {
      ...commonCellParams,
      field: 'yourSupply',
      headerName: 'Your Supply',
      width: 104,
      align: 'center',
      headerAlign: 'center',
      renderHeader: (item) => {
        const headerCategoryProps = {
          label: item.colDef.headerName || '', // or just hardcode it here, dunno
          sorted: sortingModel.field === item.field,
          sortOrder: sortingModel.sort,
        };
        return <HeaderCategory {...headerCategoryProps} />;
      },
      renderCell: (item) => {
        const { usdValue, assetValue, isLoading } = item.row.yourSupplyData;
        const numericInfoArguments = {
          usdValue,
          assetValue,
          isLoading,
        };
        return <NumericInfo {...numericInfoArguments} />;
      },
    },

    {
      ...commonCellParams,
      field: 'supplyButtons',
      headerName: '',
      sortable: false,
      width: 137,
      renderCell: (item) => {
        const buttonProps = {
          children: 'Supply',
          disabled: false,
        };
        return <SmallButton {...buttonProps} color={'primary'} />;
      },
    },
  ];

  const rows = [
    {
      id: 1,
      asset: 'BTC',
      totalSupply: 5000000000,
      supplyApy: 238,
      yourSupply: 50000000,
      assetData: {
        isLoading: false,
        title: 'BTC',
        balance: '~17.23',
        tooltipText: 'Your current BTC balance in your wallet',
      },
      totalSupplyData: {
        usdValue: '5.00B',
        assetValue: '63.87',
        isLoading: false,
      },
      supplyApyData: {
        percentageValue: '2.38',
        netApyOnly: false,
        loading: false,
        tooltipText: 'qweqr',
        mntRewardValue: '0.45',
      },
      yourSupplyData: {
        usdValue: '50.00M',
        assetValue: '63.87',
        isLoading: false,
      },
    },
    {
      id: 2,
      totalSupply: 500000000,
      supplyApy: 538,
      yourSupply: 5000000,
      asset: 'DAI',
      assetData: {
        isLoading: false,
        title: 'DAI',
        balance: '~17.23',
        tooltipText: 'Your current DAI balance in your wallet',
      },
      totalSupplyData: {
        usdValue: '500M',
        assetValue: '63.87',
        isLoading: false,
      },
      supplyApyData: {
        percentageValue: '5.38',
        netApyOnly: false,
        loading: false,
        tooltipText: 'qweqr',
        mntRewardValue: '0.45',
      },
      yourSupplyData: {
        usdValue: '5.00M',
        assetValue: '63.87',
        isLoading: false,
      },
    },
    {
      id: 3,
      totalSupply: 50000000,
      supplyApy: 838,
      yourSupply: 0,
      asset: 'USDC',
      assetData: {
        isLoading: false,
        title: 'USDC',
        balance: '~17.23',
        tooltipText: 'Your current USDC balance in your wallet',
      },
      totalSupplyData: {
        usdValue: '50.00M',
        assetValue: '63.87',
        isLoading: false,
      },
      supplyApyData: {
        percentageValue: '8.38',
        netApyOnly: false,
        loading: false,
        tooltipText: 'qweqr',
        mntRewardValue: '0.45',
      },
      yourSupplyData: { usdValue: '', assetValue: '', isLoading: false },
    },
    {
      id: 4,
      asset: 'USDT',
      totalSupply: 5000000,
      supplyApy: 0,
      yourSupply: 0,
      assetData: {
        isLoading: false,
        title: 'USDT',
        balance: '~17.23',
        tooltipText: 'Your current USDT balance in your wallet',
      },
      totalSupplyData: {
        usdValue: '5.00M',
        assetValue: '63.87',
        isLoading: false,
      },
      supplyApyData: {
        percentageValue: '0',
        netApyOnly: false,
        loading: false,
        tooltipText: 'qweqr',
        mntRewardValue: '0.45',
      },
      yourSupplyData: { usdValue: '', assetValue: '', isLoading: false },
    },
    {
      id: 5,
      asset: 'ETH',
      totalSupply: 500000,
      supplyApy: 938,
      yourSupply: 5000,
      assetData: {
        isLoading: false,
        title: 'ETH',
        balance: '~17.23',
        tooltipText: 'Your current ETH balance in your wallet',
      },
      totalSupplyData: {
        usdValue: '500K',
        assetValue: '63.87',
        isLoading: false,
      },
      supplyApyData: {
        percentageValue: '9.38',
        netApyOnly: false,
        loading: false,
        tooltipText: 'qweqr',
        mntRewardValue: '0.45',
      },
      yourSupplyData: {
        usdValue: '5,000.00',
        assetValue: '63.87',
        isLoading: false,
      },
    },
  ];

  const customStyles = {
    '& .assetHeaderCell': {
      paddingLeft: '32px',
    },
    '& .buttonColumn': {
      paddingLeft: '18px',
    },
    '& .assetColumn': {
      paddingLeft: '32px',
    },
    '.MuiDataGrid-row:hover': {
      // transform: 'scale(0.1)',
      // transition: 'transform 1s ease',
      // This class controlls AssetName component behaviour
      '.asset-tooltip-container': {
        'max-height': '16px',
        opacity: 1,
      },
    },
  };

  const getCellClassNameHandler = ({ field }: GridCellParams<number>) => {
    if (field === 'asset') return 'assetColumn';
    if (field === 'supplyButtons') return 'buttonColumn';
    return 'customizedCell';
  };

  const props = {
    rows,
    columns,
    handleStateChange,
    customStyles,
    getCellClassNameHandler,
    addHeader: true,
    headerTitle: 'Supply',
    headerPaddingTop: 24,
    headerPaddingBottom: 28,
    headerPaddingLeft: 32,
    headerHeight: 24,
    rowHeight: 73,
  };

  return <DataTable {...props} />;
};

// TODO fix row type
type EnchancedTableProps = {
  rows: any;
  columns: GridColDef[];
  handleStateChange: (state: {
    field: string,
    sort: string,
  }) => void;
  customStyles: SxProps<Theme>;
  getCellClassNameHandler: ({ field }: GridCellParams<number>) => string;
  addHeader: boolean;
  headerTitle: string;
  headerPaddingTop: number;
  headerPaddingBottom: number;
  headerPaddingLeft: number;
  headerHeight: number;
  rowHeight: number;
};

// const TableHeader = styled('div', {
//   shouldForwardProp: (prop) => prop !== 'headerPaddingTop' && prop !== 'headerPaddingBottom',
// })<{ headerPaddingTop?: number, headerPaddingBottom?: number }>(({ theme, headerPaddingTop, headerPaddingBottom }) => ({
//   paddingTop: headerPaddingTop,
//   paddingBottom: headerPaddingBottom,
// }));

// const CircleWrapper = styled('div', {
//   shouldForwardProp: (prop) => prop !== 'connected',
// })<{ connected?: boolean }>(({ theme, connected }) => ({
//   width: 160,
//   height: 160,
//   background: '#FCFCFC',
//   boxShadow: '0px 4px 37px rgba(0, 0, 0, 0.08)',
//   borderRadius: '50%',
//   position: 'relative',
//   zIndex: 1,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',

const DataTable: React.FC<EnchancedTableProps> = ({
  rows,
  columns,
  handleStateChange,
  addHeader,
  headerTitle,
  headerPaddingTop,
  headerPaddingBottom,
  headerPaddingLeft,
  headerHeight,
  rowHeight,
  customStyles,
  getCellClassNameHandler,
}) => {
  const removeTopBorder = addHeader
    ? {
        borderTop: 'none',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }
    : {};

  return (
    <>
      {addHeader && (
        <div
          style={{
            paddingTop: headerPaddingTop,
            paddingBottom: headerPaddingBottom,
            paddingLeft: headerPaddingLeft,
            border: '1px solid rgba(224, 224, 224, 1)',
            borderBottom: 'none',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        >
          <Typography text={headerTitle} variant={'h3'} />
        </div>
      )}
      <DataGrid
        sx={{
          ...removeTopBorder,
          ...customStyles,
          '& .customizedCell': {
            paddingLeft: 0,
            paddingRight: 0,
          },
          '.MuiDataGrid-columnSeparator--sideRight': {
            visibility: 'hidden',
          },
          '.MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '.MuiDataGrid-cell:focus-within': {
            outline: 'none',
          },
          '.MuiDataGrid-columnHeader:focus': {
            outline: 'none',
          },
          '.MuiDataGrid-row': {
            transition: 'transform 0.3s ease',
            // 'border-bottom': '1px solid rgba(224, 224, 224, 1)',
            // 'z-index': 1,
          },
          // '.MuiDataGrid-virtualScroller': {
          //   overflow: 'visible',
          //   'overflow-y': 'visible !important',
          // },
          // '.MuiDataGrid-main': {
          //   overflow: 'visible',
          // },
          // '.MuiDataGrid-cell': {
          //   'border-bottom': 'none',
          // },
        }}
        rows={rows}
        columns={columns}
        showColumnRightBorder={false}
        hideFooterPagination={true}
        hideFooter={true}
        autoHeight
        onStateChange={handleStateChange}
        disableSelectionOnClick={true}
        headerHeight={headerHeight}
        rowHeight={rowHeight}
        getCellClassName={getCellClassNameHandler}
      />
    </>
  );
};

export default MainFront;
