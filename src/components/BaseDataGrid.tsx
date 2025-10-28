import React from "react";
import {
    DataGrid,
    Column,
    Paging,
    Pager,
    Selection,
} from "devextreme-react/data-grid";

interface BaseDataGridProps {
    dataSource: any[];
    columns: {
        dataField: string;
        caption?: string;
        width?: number;
        cellRender?: any;
        editCellTemplate?: any; // Corrected from editCellRender
        headerCellRender?: any;
        allowEditing?: boolean;
    }[];
    keyExpr?: string;
    height?: number | string;
    pageSize?: number;
    showIndex?: boolean;
    selectionMode?: "none" | "single" | "multiple";
    onRowClick?: (e: any) => void;
    toolbarExtra?: React.ReactNode;
    allowEditing?: boolean; // Added to toggle editing
}

const BaseDataGrid: React.FC<BaseDataGridProps> = ({
                                                       dataSource,
                                                       columns,
                                                       keyExpr = "id",
                                                       height,
                                                       pageSize = 10,
                                                       showIndex = true,
                                                       selectionMode = "none",
                                                       onRowClick,
                                                   }) => {
    return (
        <DataGrid
            dataSource={dataSource}
            keyExpr={keyExpr}
            showBorders={true}
            height={height}
            scrolling={{columnRenderingMode: "virtual"}}
            selection={{mode: "none"}}
            onRowClick={onRowClick}
            allowColumnResizing={true}
            allowColumnReordering={true}
            onCellPrepared={(e) => {
                if (e.rowType === "header") {
                    e.cellElement.style.background = "#007000";
                    e.cellElement.style.color = "white";
                    e.cellElement.style.fontWeight = "600";
                }
            }}
        >
            <Selection mode={selectionMode}/>
            {/*{allowEditing && (*/}
            {/*    <Editing*/}
            {/*        mode="cell"*/}
            {/*        allowUpdating={true}*/}
            {/*    />*/}
            {/*)}*/}

            {/*<SearchPanel visible={true} highlightCaseSensitive={false} />*/}
            {/*<FilterRow visible={true} />*/}

            {showIndex && (
                <Column
                    caption="STT"
                    width={60}
                    alignment="center"
                    cellRender={(e) => e.rowIndex + 1}
                />
            )}

            {columns.map((col) => (
                <Column
                    key={col.dataField}
                    {...col}
                    allowEditing={col.allowEditing}
                    cellRender={col.cellRender}
                    editCellTemplate={col.editCellTemplate}
                    headerCellRender={col.headerCellRender}
                />
            ))}

            <Paging defaultPageSize={pageSize}/>
            <Pager showInfo={true} showPageSizeSelector={true}/>
        </DataGrid>
    );
};

export default BaseDataGrid;
