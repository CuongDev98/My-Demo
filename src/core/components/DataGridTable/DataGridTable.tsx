import React from "react";
import {
    DataGrid,
    Column,
    Paging,
    Pager, MasterDetail,
} from "devextreme-react/data-grid";
import {Trash2, SquarePen, Info} from 'lucide-react';

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
        listOperation?: string[];
    }[];
    keyExpr?: string;
    height?: number | string;
    pageSize?: number;
    showIndex?: boolean;
    onRowClick?: (e: any) => void;
    masterDetailTemplate?: (rowData: any) => React.ReactNode
    handleOperationClick?: (type: string) => void;
}

const DataGridTable: React.FC<DataGridProps> = ({
                                                    dataSource,
                                                    columns,
                                                    keyExpr = "id",
                                                    height,
                                                    pageSize = 10,
                                                    showIndex = true,
                                                    onRowClick,
                                                    masterDetailTemplate,
                                                    handleOperationClick,
                                                }) => {

    const handleClickOperation = (type: string) => {
        if (handleOperationClick) {
            handleOperationClick(type)
        }
    }

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
                col?.listOperation ? (
                    <Column
                        caption="Thao tác"
                        width={50 * col?.listOperation?.length}
                        alignment="center"
                        cellRender={(cellData) => (
                            <div className="flex items-center justify-center gap-2">
                                {col?.listOperation?.map((operation) => {
                                    switch (operation) {
                                        case "edit":
                                            return (
                                                <div key="edit">
                                                    <SquarePen
                                                        onClick={() => {
                                                            handleClickOperation("edit")
                                                        }}
                                                        width={20}
                                                        className="bg-transparent hover:bg-transparent text-blue-600 hover:text-green-600 cursor-pointer"
                                                    />
                                                </div>
                                            );
                                        case "delete":
                                            return (
                                                <div key="delete">
                                                    <Trash2
                                                        onClick={() => handleClickOperation("delete")}
                                                        width={20}
                                                        className="bg-transparent hover:bg-transparent text-blue-600 hover:text-red-600 cursor-pointer"
                                                    />
                                                </div>
                                            );
                                        case "info":
                                            return (
                                                <div key="info">
                                                    <Info
                                                        onClick={() => handleClickOperation("info")}
                                                        width={20}
                                                        className="bg-transparent hover:bg-transparent text-blue-600 hover:text-green-600 cursor-pointer"
                                                    />
                                                </div>
                                            );
                                        default:
                                            return null;
                                    }
                                })}
                            </div>
                        )}
                    />
                ) : (
                    <Column
                        key={col.dataField}
                        {...col}
                        allowEditing={col.allowEditing}
                        cellRender={col.cellRender}
                        editCellTemplate={col.editCellTemplate}
                        headerCellRender={col.headerCellRender}
                    />
                )
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
