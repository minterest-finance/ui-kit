import * as React from 'react';

import { SxProps, Theme } from '@mui/material';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';

import { Typography } from 'components';

// TODO fix row type
type EnchancedTableProps = {
  rows: any;
  columns: GridColDef[];
  handleStateChange: (state: { field: string; sort: string }) => void;
  headerHeight: number;
  rowHeight: number;
  customStyles?: SxProps<Theme>;
  getCellClassNameHandler?: ({ field }: GridCellParams<number>) => string;
  addHeader?: boolean;
  headerTitle?: string;
  headerPaddingTop?: number;
  headerPaddingBottom?: number;
  headerPaddingLeft?: number;
};

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
            // border: '1px solid rgba(224, 224, 224, 1)',
            border: '1px solid rgba(12, 45, 156, 0.08)',
            borderBottom: 'none',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        >
          {headerTitle && <Typography text={headerTitle} variant={'h3'} />}
        </div>
      )}
      <DataGrid
        sx={{
          ...customStyles,
          border: '1px solid rgba(12, 45, 156, 0.08)',
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
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: '1px solid rgba(12, 45, 156, 0.08)',
          },

          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid rgba(12, 45, 156, 0.08)',
          },
          '.MuiDataGrid-row': {
            // border: '1px solid rgba(12, 45, 156, 0.08)',
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
        {...rest}
      />
    </>
  );
};

export default DataTable;
