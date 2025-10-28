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

export const ProductionBusinessTable = ({runQuery, model, updateModel}: {
    runQuery: () => void;
    model: any;
    updateModel: () => void
}) => {
    const {control} = useForm<any>({
        defaultValues: {
            dataTable: model?.data,
        },
    });

    const {fields, append, remove} = useFieldArray({
        control,
        name: "dataTable",
    });

    const columns = [
        {
            dataField: "loaiGiayChungNhan",
            caption: "Loại giấy chứng nhận",
            cellRender: ({rowIndex}) => {
                return (
                    <Controller
                        control={control}
                        render={({field}) => {
                            return (
                                <TextBox
                                    value={field?.value}
                                    onValueChanged={(e) => field?.onChange(e?.value)}
                                    placeholder="Nhập loại giấy chứng nhận"
                                    valueChangeEvent="input"
                                />
                            );
                        }}
                        name={`dataTable.${rowIndex}.loaiGiayChungNhan`}
                    />
                );
            },
            width: 300,
        },
        {
            dataField: "soGiayChungNhan",
            caption: "Số giấy chứng nhận",
            cellRender: ({rowIndex}) => {
                return (
                    <Controller
                        control={control}
                        render={({field}) => {
                            return (
                                <TextBox
                                    value={field?.value}
                                    onValueChanged={(e) => field?.onChange(e?.value)}
                                    placeholder="Nhập số giấy chứng nhận"
                                    valueChangeEvent="input"
                                />
                            );
                        }}
                        name={`dataTable.${rowIndex}.soGiayChungNhan`}
                    />
                );
            },
            width: 200,
        },
        {
            dataField: "ngayCap",
            caption: "Ngày cấp",
            cellRender: ({rowIndex}) => {
                return (
                    <Controller
                        control={control}
                        render={({field}) => {
                            return (
                                <DateBox
                                    value={field?.value}
                                    onValueChanged={(e) => field?.onChange(e.value)}
                                    type="date"
                                    placeholder="Chọn ngày"
                                />
                            );
                        }}
                        name={`dataTable.${rowIndex}.ngayCap`}
                    />
                );
            },
            width: 150,
        },
        {
            dataField: "ngayHetHan",
            caption: "Ngày hết hạn",
            cellRender: ({rowIndex}) => {
                return (
                    <Controller
                        control={control}
                        render={({field}) => {
                            return (
                                <DateBox
                                    value={field?.value}
                                    onValueChanged={(e) => field?.onChange(e.value)}
                                    type="date"
                                    placeholder="Chọn ngày"
                                />
                            );
                        }}
                        name={`dataTable.${rowIndex}.ngayHetHan`}
                    />
                );
            },
            width: 150,
        },
        {
            dataField: "coQuanCap",
            caption: "Cơ quan cấp",
            cellRender: ({rowIndex}) => {
                return (
                    <Controller
                        control={control}
                        render={({field}) => {
                            return (
                                <SelectBox
                                    dataSource={coQuanOptions}
                                    value={field?.value}
                                    onValueChanged={(e) => field?.onChange(e.value)}
                                    displayExpr="name"
                                    valueExpr="id"
                                    placeholder="Chọn cơ quan"
                                />
                            );
                        }}
                        name={`dataTable.${rowIndex}.coQuanCap`}
                    />
                );
            },
            width: 300,
        },
        {
            dataField: "hinhThuc",
            caption: "Hình thức",
            cellRender: ({rowIndex}) => {
                return (
                    <Controller
                        control={control}
                        render={({field}) => {
                            return (
                                <SelectBox
                                    dataSource={hinhThucOptions}
                                    value={field?.value}
                                    onValueChanged={(e) => field?.onChange(e.value)}
                                    displayExpr="name"
                                    valueExpr="id"
                                    placeholder="Chọn hình thức"
                                />
                            );
                        }}
                        name={`dataTable.${rowIndex}.hinhThuc`}
                    />
                );
            },
            width: 200,
        },
        {
            dataField: "dinhKem",
            caption: "Đính kèm",
            cellRender: ({rowIndex}) => {
                return (
                    <Controller
                        control={control}
                        render={({field}) => {
                            return <input type={"file"}/>;
                        }}
                        name={`dataTable.${rowIndex}.dinhKem`}
                    />
                );
            },
            width: 300,
        },
    ];

    return (
        <div>
            <Button
                text="Thêm mới"
                type="default"
                onClick={() => {
                    append({
                        loaiGiayChungNhan: "",
                        soGiayChungNhan: "",
                        ngayCap: "",
                        ngayHetHan: "",
                        coQuanCap: "",
                        hinhThuc: "",
                        dinhKem: "",
                    });
                }}
            />
            <form>
                <DataGridTable
                    dataSource={fields}
                    columns={columns}
                />
            </form>
        </div>
    );
};
