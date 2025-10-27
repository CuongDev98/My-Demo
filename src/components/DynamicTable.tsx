import { useState, forwardRef, useImperativeHandle } from "react";
import DataGrid, {
  Column,
  Lookup,
  Paging,
  Pager,
} from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.light.css";
import "../assets/styles/TheoDoiCongTacKDDV.css";
import FileField from "./forms/FileField";
export interface DynamicColumn {
  dataField: string;
  caption: string;
  type?: "text" | "number" | "checkbox" | "select" | "file";
  dataSource?: { id: any; name: string }[];
  required?: boolean;
  width?: number;
  minValue?: number;
  multiple?: boolean;
  editorOptions?: any;
  validationRules?: any[];
}

interface DynamicTableProps {
  title?: string;
  initData: any[];
  columns: DynamicColumn[];
  addLabel?: string;
}

// DynamicTable dùng forwardRef để quản lý và xử lý dữ liệu độc lập bên trong bảng -> Không ảnh hưởng tới component cha
const DynamicTable = forwardRef<any, DynamicTableProps>(
  ({ title, initData, columns, addLabel = "Thêm dòng" }, ref) => {
    // State lưu dữ liệu bảng
    const [data, setData] = useState<any[]>([...initData]);

    // Expose hàm getData ra bên ngoài thông qua ref -> // giúp component cha có thể lấy dữ liệu hiện tại trong bảng khi cần
    useImperativeHandle(ref, () => ({
      getData: () => data,
    }));

    const updateData = (newData: any[]) => {
      setData(newData);
    };

    const handleAdd = () => {
      const newItem = Object.fromEntries(
        columns.map((col) => {
          let value: any = "";
          if (col.type === "checkbox") value = false;
          else if (col.type === "number") value = col.minValue || 0;
          else if (col.type === "select") value = null;
          else if (col.type === "file" && col.multiple) value = [];
          return [col.dataField, value];
        })
      );
      newItem.id = Date.now();
      updateData([...data, newItem]);
    };

    const handleDelete = (id: number) =>
      updateData(data.filter((x) => x.id !== id));

    const renderColumn = (col: DynamicColumn) => {
      const baseProps = {
        key: col.dataField,
        dataField: col.dataField,
        caption: col.caption,
        width: col.width,
        alignment: "center" as const,
        editorOptions: col.editorOptions,
        validationRules: col.validationRules,
        allowSorting: false,
        allowFiltering: false,
      };

      switch (col.type) {
        case "number":
          return <Column {...baseProps} dataType="number" />;
        case "checkbox":
          return <Column {...baseProps} dataType="boolean" />;
        case "select":
          return (
            <Column
              {...baseProps}
              cellRender={({ value }) =>
                value ? (
                  <span>
                    {col.dataSource?.find((d) => d.id === value)?.name}
                  </span>
                ) : (
                  <span style={{ color: "#aaa" }}>Vui lòng chọn</span>
                )
              }
            >
              <Lookup
                dataSource={col.dataSource || []}
                valueExpr="id"
                displayExpr="name"
              />
            </Column>
          );
        case "file":
          return (
            <Column
              {...baseProps}
              editCellRender={({ setValue, value }) => (
                <FileField
                  multiple
                  value={value}
                  onChange={(files) => setValue(files.map((f) => f.name))}
                  fieldKey="upload"
                />
              )}
              cellRender={({ value }) => {
                if (!value || (Array.isArray(value) && value.length === 0))
                  return (
                    <span style={{ color: "#aaa" }}>
                      Chưa có tệp nào được chọn
                    </span>
                  );

                const files = Array.isArray(value) ? value : [value];
                return (
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {files.map((name: string, idx: number) => (
                      <a key={idx} href="#" onClick={(e) => e.preventDefault()}>
                        {name}
                      </a>
                    ))}
                  </div>
                );
              }}
            />
          );
        default:
          return <Column {...baseProps} dataType="string" />;
      }
    };

    return (
      <div>
        {title && <div className="section-title">{title}</div>}

        <DataGrid
          className="custom-grid"
          dataSource={data}
          keyExpr="id"
          showBorders
          repaintChangesOnly
          rowAlternationEnabled
          hoverStateEnabled
          onCellPrepared={(e) => {
            if (e.rowType === "header") {
              Object.assign(e.cellElement.style, {
                background: "#007000",
                color: "white",
                fontWeight: "600",
              });
            }
          }}
          editing={{
            mode: "cell",
            allowUpdating: true,
            allowAdding: false,
            allowDeleting: false,
            useIcons: false,
          }}
          onEditorPreparing={(e) => {
            if (e.parentType === "dataRow" && e.editorName === "dxSelectBox") {
              e.editorOptions.searchEnabled = false;
              e.editorOptions.openOnFieldClick = true;
              e.editorOptions.placeholder = "Vui lòng chọn";
              e.editorOptions.onFocusIn = (args: any) => args.component.open();
              e.editorOptions.onValueChanged = (args: any) => {
                e.setValue(args.value);
                e.component.closeEditCell();
              };
            }
          }}
          onRowUpdated={(e) => {
            setData((prev) =>
              prev.map((item) =>
                item.id === e.key ? { ...item, ...e.data } : item
              )
            );
          }}
        >
          <Column
            caption="STT"
            width={60}
            alignment="center"
            allowSorting={false}
            allowFiltering={false}
            cellRender={({ rowIndex }) => rowIndex + 1}
          />

          {columns.map(renderColumn)}

          <Column
            caption="Thao tác"
            width={100}
            alignment="center"
            cellRender={({ data }) => (
              <button
                className="dx-button dx-button-danger"
                onClick={() => handleDelete(data.id)}
              >
                Xóa
              </button>
            )}
          />

          <Paging defaultPageSize={5} />
          <Pager showInfo showPageSizeSelector allowedPageSizes={[5, 10, 20]} />
        </DataGrid>

        <div className="add-button-container">
          <button
            onClick={handleAdd}
            className="dx-button dx-button-mode-contained dx-button-success dx-widget dx-button-has-text"
          >
            <span className="dx-button-text">+ {addLabel}</span>
          </button>
        </div>
      </div>
    );
  }
);

export default DynamicTable;
