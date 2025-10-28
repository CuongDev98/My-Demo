import DataGridTable from "../../../core/components/DataGridTable/DataGridTable.tsx";

export const ProductionBusinessMasterDetail = ({runQuery, model, updateModel}: {
    runQuery: () => void;
    model: any;
    updateModel: () => void
}) => {

    const columns = [
        {
            dataField: "tenCoSo",
            caption: "Tên cơ sở",
            width: 300,
        },
        {
            dataField: "chuCoSo",
            caption: "Chủ cơ sở",
            width: 300,
        },
        {
            dataField: "diaChi",
            caption: "địa chỉ",
            width: 300,
        },
        {
            dataField: "tenXa",
            caption: "Xã/Phường",
            width: 300,
        },
        {
            dataField: "tenTinh",
            caption: "Tỉnh/Thành phố",
            width: 300,
        },
        {
            dataField: "operation",
            caption: "Thao tác",
            listOperation: ["info", "edit", "delete"]
        }
    ];

    const masterDetailColumns = [
        {
            dataField: "tenGiong",
            caption: "Tên giống",
            width: 300,
        },
        {
            dataField: "tenNhomGiong",
            caption: "Tên nhóm giống",
            width: 300,
        },
        {
            dataField: "thoiGianThuHoach",
            caption: "Thời gian thu hoạch",
            width: 300,
        },
        {
            dataField: "xuatXu",
            caption: "Xuất xứ",
            width: 300,
        },
    ];

    const operationClick = (type: string) => {
        switch (type) {
            case "info":
                console.log("info Click")
                return
            case "edit":
                console.log("edit Click")
                return
            case "delete":
                console.log("delete Click")
                return
            default:
                break
        }
    }

    return (
        <div>
            <form>
                <DataGridTable
                    dataSource={model?.data}
                    columns={columns}
                    masterDetailTemplate={(rowData: any) => {
                        return (
                            <DataGridTable dataSource={rowData?.data?.thongTinGiongDtoList}
                                           columns={masterDetailColumns}/>
                        )
                    }}
                    handleOperationClick={operationClick}
                />
            </form>
        </div>
    );
};
