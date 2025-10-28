import React from "react";
import {
    DataGrid,
    Column,
    Paging,
    Pager, MasterDetail,
} from "devextreme-react/data-grid";

interface DataGridProps {
    dataSource: any[];
    columns: {
        dataField: string;
        caption?: string;
        width?: number;
        cellRender?: any;
        editCellTemplate?: any;
        headerCellRender?: any;
        allowEditing?: boolean;
    }[];
    keyExpr?: string;
    height?: number | string;
    pageSize?: number;
    showIndex?: boolean;
    onRowClick?: (e: any) => void;
    masterDetailTemplate?: (rowData: any) => React.ReactNode
}

const DataGridTable: React.FC<DataGridProps> = ({
                                                    dataSource,
                                                    columns,
                                                    keyExpr = "id",
                                                    height,
                                                    pageSize = 10,
                                                    showIndex = true,
                                                    onRowClick,
                                                    masterDetailTemplate
                                                }) => {
    return (
        <DataGrid
            className="w-full"
            dataSource={dataSource}
            keyExpr={keyExpr}
            showBorders={true}
            height={height}
            scrolling={{columnRenderingMode: "virtual"}}
            selection={{mode: "none"}}
            onRowClick={onRowClick}
            allowColumnResizing={true}
            allowColumnReordering={true}
            onCellPrepared={e => {
                if (e.rowType === "header") {
                    e.cellElement.classList.add(
                        "bg-green-700",
                        "text-white",
                        "font-semibold",
                        "!text-center",
                        "!py-4"
                    );
                }
            }}
            // masterDetail={{
            //     enabled: !!masterDetailTemplate,
            //     template: (temp: any) => {
            //         console.log("temp", temp);
            //         return masterDetailTemplate ? masterDetailTemplate(temp?.data) : null
            //     }
            // }}
        >
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

            <MasterDetail
                enabled={!!masterDetailTemplate}
                component={({data}) => masterDetailTemplate?.(data)}
            />

            <Paging defaultPageSize={pageSize}/>
            <Pager showInfo={true} showPageSizeSelector={true}/>
        </DataGrid>
    );
};

export default DataGridTable;
