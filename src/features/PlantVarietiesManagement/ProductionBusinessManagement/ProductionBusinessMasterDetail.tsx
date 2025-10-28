import {DateBox, SelectBox, TextBox} from "devextreme-react";
import {Button} from "devextreme-react/button";
import {Controller, useFieldArray, useForm} from "react-hook-form";
import DataGridTable from "../../../core/components/DataGridTable/DataGridTable.tsx";

const coQuanOptions = [
    {id: "75", name: "Chi cục Chăn nuôi và Thú y"},
    {id: "348", name: "Cục thú y huyện Chợ Gạo"},
    {id: "465", name: "Sở Nông nghiệp và Phát triển NT Hà Nam"},
    {id: "496", name: "Sở Nông nghiệp và Phát triển NT Thanh Hóa"},
    {id: "497", name: "Chi cục chăn nuôi và thú y "},
    {id: "619", name: "Sở Nông Nghiệp và Phát Triển Nông Thôn tỉnh Ninh Bình"},
    {id: "737", name: "Chi cục Thú Y"},
    {id: "752", name: "Sở NNPTNT YBI"},
    {id: "938", name: "a"},
    {id: "939", name: "b"},
    {id: "940", name: "c"},
    {id: "1065", name: "TEST XÓA"},
];

const hinhThucOptions = [
    {id: "81", name: "Cấp mới"},
    {id: "358", name: "Cấp lại"},
    {id: "427", name: "Giấy chứng nhận ATTP"},
    {id: "485", name: "Lê Test"},
    {id: "617", name: "a"},
    {id: "692", name: "Loại cấp mới"},
    {id: "728", name: "Loại1"},
    {id: "1044", name: "a"},
    {id: "1045", name: "b"},
    {id: "1046", name: "c"},
    {id: "1047", name: "d"},
    {id: "1067", name: "TEST XÓA"},
];

export const ProductionBusinessMasterDetail = ({runQuery, model, updateModel}: {
    runQuery: () => void;
    model: any;
    updateModel: () => void
}) => {
    const {control} = useForm<any>({
        defaultValues: {
            dataTable: model?.dataTable,
        },
    });

    const {fields, append, remove} = useFieldArray({
        control,
        name: "dataTable",
    });

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

    return (
        <div>
            <form>
                <DataGridTable
                    dataSource={model?.data}
                    columns={columns}
                    masterDetailTemplate={(rowData: any) => {
                        console.log("rowData", rowData);
                        return (
                            <DataGridTable dataSource={rowData?.data?.thongTinGiongDtoList}
                                           columns={masterDetailColumns}/>
                        )
                    }}
                />
            </form>
        </div>
    );
};
