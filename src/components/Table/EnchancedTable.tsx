import * as React from 'react';

import { SxProps, Theme } from '@mui/material';
import { DataGrid, GridCellParams, DataGridProps } from '@mui/x-data-grid';

import { Typography } from 'components';
interface EnchancedTableProps extends DataGridProps {
  handleStateChange: (state: { field: string; sort: string }) => void;
  customStyles?: SxProps<Theme>;
  headerStyles?: React.CSSProperties;
  getCellClassNameHandler?: ({ field }: GridCellParams<number>) => string;
  addHeader?: boolean;
  headerTitle?: string;
  headerPaddingTop?: number;
  headerPaddingBottom?: number;
  headerPaddingLeft?: number;
}

const DataTable: React.FC<EnchancedTableProps> = ({
  rows,
  columns,
  handleStateChange,
  addHeader = false,
  headerTitle,
  headerPaddingTop,
  headerPaddingBottom,
  headerPaddingLeft,
  headerHeight,
  rowHeight,
  customStyles,
  headerStyles,
  getCellClassNameHandler,
  ...rest
}) => {
  const removeTopBorderTop = addHeader
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
            paddingTop: headerPaddingTop || 0,
            paddingBottom: headerPaddingBottom || 0,
            paddingLeft: headerPaddingLeft || 0,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            ...headerStyles,
            borderBottom: 'none',
          }}
        >
          {headerTitle && <Typography text={headerTitle} variant={'h3'} />}
        </div>
      )}
      <DataGrid
        sx={{
          ...customStyles,
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          ...removeTopBorderTop,
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
        {...rest}
      />
    </>
  );
};

export default DataTable;
