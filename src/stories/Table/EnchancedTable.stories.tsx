import React from 'react';

import {
  GridColDef,
  GridSortDirection,
  GridCellParams,
} from '@mui/x-data-grid';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BTCIcon, MetaMaskSmallIcon } from 'assets/svg';
import { EnchancedTable as EnchancedTableComponent } from 'components';

import { SmallButton } from '../../components';
import AssetName from '../../components/Table/AssetName/AssetName';
import HeaderCategory from '../../components/Table/HeaderCategory/HeaderCategory';
import NumericInfo from '../../components/Table/NumericInfo/NumericInfo';
import PercentageInfo from '../../components/Table/PercentageInfo/PercentageInfo';
import { CssBaseline, getTheme, ThemeProvider } from '../../theme';

export default {
  title: 'Table',
  component: EnchancedTableComponent,
  args: {
    mode: 'light',
  },
  argTypes: {
    mode: { control: 'select', options: ['light', 'dark'] },
    Icon: {
      table: {
        disable: true,
      },
    },
    SubIcon: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story, Context) => {
      return (
        <ThemeProvider theme={getTheme(Context.args.mode)}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    },
  ],
} as ComponentMeta<any>;

export const SupplyTable: ComponentStory<any> = () => {
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
          label: item.colDef.headerName || '',
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
          label: item.colDef.headerName || '',
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
          label: item.colDef.headerName || '',
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
          label: item.colDef.headerName || '',
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
      renderCell: () => {
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
        mntRewardValue: '',
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
        mntRewardValue: '',
      },
      yourSupplyData: {
        usdValue: '5,000.00',
        assetValue: '63.87',
        isLoading: false,
      },
    },
  ];

  const customStyles = {
    border: '1px solid rgba(12, 45, 156, 0.08)',
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
    '& .MuiDataGrid-columnHeaders': {
      borderBottom: '1px solid rgba(12, 45, 156, 0.08)',
    },

    '& .MuiDataGrid-cell': {
      borderBottom: '1px solid rgba(12, 45, 156, 0.08)',
    },
  };

  const getCellClassNameHandler = ({ field }: GridCellParams<number>) => {
    if (field === 'asset') return 'assetColumn';
    if (field === 'supplyButtons') return 'buttonColumn';
    return 'customizedCell';
  };

  const headerStyles = {
    border: '1px solid rgba(12, 45, 156, 0.08)',
    color: 'red',
    somethingWeird: 123,
  };

  const props = {
    rows,
    columns,
    handleStateChange,
    customStyles,
    headerStyles,
    getCellClassNameHandler,
    addHeader: true,
    headerTitle: 'Supply',
    headerPaddingTop: 24,
    headerPaddingBottom: 28,
    headerPaddingLeft: 32,
    headerHeight: 24,
    rowHeight: 73,
  };

  return (
    <div style={{ width: 612 }}>
      <EnchancedTableComponent {...props} />
    </div>
  );
};
