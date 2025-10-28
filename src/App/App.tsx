import "./App.css";
import "devextreme/dist/css/dx.light.css";
import {
    ProductionBusinessTable
} from "../features/PlantVarietiesManagement/ProductionBusinessManagement/ProductionBusinessTable.tsx";
import {
    ProductionBusinessMasterDetail
} from "../features/PlantVarietiesManagement/ProductionBusinessManagement/ProductionBusinessMasterDetail.tsx";

const users = [
    {
        id: 1,
        loaiGiayChungNhan: "Giấy chứng nhận VSATTP",
        soGiayChungNhan: "GCN-001",
        ngayCap: "2023-01-10",
        ngayHetHan: "2026-01-10",
        coQuanCap: "Sở Y Tế TP.HCM",
        hinhThuc: "Cấp lần đầu",
        dinhKem: "file1.pdf"
    },
    {
        id: 2,
        loaiGiayChungNhan: "Giấy kiểm dịch",
        soGiayChungNhan: "GCN-002",
        ngayCap: "2022-09-01",
        ngayHetHan: "2025-09-01",
        coQuanCap: "Chi cục Thú Y",
        hinhThuc: "Cấp lại",
        dinhKem: "file2.pdf"
    },
    {
        id: 3,
        loaiGiayChungNhan: "Giấy chứng nhận chất lượng",
        soGiayChungNhan: "GCN-003",
        ngayCap: "2022-05-20",
        ngayHetHan: "2025-05-20",
        coQuanCap: "Sở Công Thương",
        hinhThuc: "Cấp lần đầu",
        dinhKem: "file3.pdf"
    },
    {
        id: 4,
        loaiGiayChungNhan: "Giấy đăng ký kinh doanh",
        soGiayChungNhan: "GCN-004",
        ngayCap: "2021-03-15",
        ngayHetHan: "2031-03-15",
        coQuanCap: "Sở KH & ĐT",
        hinhThuc: "Cấp lần đầu",
        dinhKem: "file4.pdf"
    },
    {
        id: 5,
        loaiGiayChungNhan: "Giấy chứng nhận nguồn gốc",
        soGiayChungNhan: "GCN-005",
        ngayCap: "2023-07-01",
        ngayHetHan: "2028-07-01",
        coQuanCap: "Cục Trồng Trọt",
        hinhThuc: "Cấp lại",
        dinhKem: "file5.pdf"
    },
    {
        id: 6,
        loaiGiayChungNhan: "Giấy kiểm nghiệm sản phẩm",
        soGiayChungNhan: "GCN-006",
        ngayCap: "2023-02-22",
        ngayHetHan: "2024-02-22",
        coQuanCap: "Trung tâm Kỹ Thuật 3",
        hinhThuc: "Cấp lần đầu",
        dinhKem: "file6.pdf"
    },
];

const mockData2 = [
    {
        "id": 1,
        "tenCoSo": "Cơ sở sản xuất cây kiểng Hữu Lộc",
        "chuCoSo": "Nguyễn Hữu Lộc",
        "diaChi": "Số 12, Ngõ 5, Phường Ba Đình",
        "tenXa": "Phường Ba Đình",
        "tenTinh": "Thành phố Hà Nội",
        "thongTinGiongDtoList": [
            {
                "id": 1,
                "tenNhomGiong": "Cây kiểng bonsai",
                "tenGiong": "Bonsai Nhật",
                "xuatXu": "Nhật Bản",
                "thoiGianThuHoach": "12 tháng"
            }
        ]
    },
    {
        "id": 2,
        "tenCoSo": "Cơ sở sản xuất kinh doanh cây giống Hạ Châu",
        "chuCoSo": "Nguyễn Thị Mỹ Hạ",
        "diaChi": "Số 45, Phố Hồng Hà",
        "tenXa": "Phường Hồng Hà",
        "tenTinh": "Thành phố Hà Nội",
        "thongTinGiongDtoList": [
            {
                "id": 1,
                "tenNhomGiong": "Cây giống rau sạch",
                "tenGiong": "Rau muống Hạ Châu",
                "xuatXu": "Việt Nam",
                "thoiGianThuHoach": "2 tháng"
            }
        ]
    },
    {
        "id": 3,
        "tenCoSo": "Cơ sở sản xuất kinh doanh giống cây trồng Ngọc Hà",
        "chuCoSo": "Nguyễn Thị Ngọc Hà",
        "diaChi": "Số 23, Phố Hoàn Kiếm",
        "tenXa": "Phường Hoàn Kiếm",
        "tenTinh": "Thành phố Hà Nội",
        "thongTinGiongDtoList": [
            {
                "id": 1,
                "tenNhomGiong": "Cây giống lúa",
                "tenGiong": "Lúa Ngọc Hà",
                "xuatXu": "Việt Nam",
                "thoiGianThuHoach": "5 tháng"
            }
        ]
    },
    {
        "id": 4,
        "tenCoSo": "Cơ sở sản xuất giống cây trồng Nguyễn Văn Biên",
        "chuCoSo": "Nguyễn Văn Biên",
        "diaChi": "Số 9, Ngõ Ba Đình",
        "tenXa": "Phường Ba Đình",
        "tenTinh": "Thành phố Hà Nội",
        "thongTinGiongDtoList": [
            {
                "id": 1,
                "tenNhomGiong": "Cây giống rau ăn lá",
                "tenGiong": "Rau cải Biên",
                "xuatXu": "Việt Nam",
                "thoiGianThuHoach": "1 tháng"
            }
        ]
    },
    {
        "id": 5,
        "tenCoSo": "Cơ sở sản xuất giống cây trồng Nguyễn Văn Nhờ",
        "chuCoSo": "Nguyễn Văn Nhờ",
        "diaChi": "Số 30, Phố Hoàn Kiếm",
        "tenXa": "Phường Hoàn Kiếm",
        "tenTinh": "Thành phố Hà Nội",
        "thongTinGiongDtoList": [
            {
                "id": 1,
                "tenNhomGiong": "Cây ăn quả",
                "tenGiong": "Cam Nhờ",
                "xuatXu": "Việt Nam",
                "thoiGianThuHoach": "8 tháng"
            }
        ]
    },
    {
        "id": 6,
        "tenCoSo": "Cơ sở sản xuất giống cây trồng Trần Anh Lệ",
        "chuCoSo": "Trần Anh Lệ",
        "diaChi": "Số 12, Phố Bồ Đề",
        "tenXa": "Phường Bồ Đề",
        "tenTinh": "Thành phố Hà Nội",
        "thongTinGiongDtoList": [
            {
                "id": 1,
                "tenNhomGiong": "Cây cảnh",
                "tenGiong": "Cây Lệ",
                "xuatXu": "Việt Nam",
                "thoiGianThuHoach": "6 tháng"
            }
        ]
    },
    {
        "id": 7,
        "tenCoSo": "Cơ sở sản xuất giống cây trồng Nguyễn Thị Duyến",
        "chuCoSo": "Nguyễn Thị Duyến",
        "diaChi": "Số 18, Phố Hoàn Kiếm",
        "tenXa": "Phường Hoàn Kiếm",
        "tenTinh": "Thành phố Hà Nội",
        "thongTinGiongDtoList": [
            {
                "id": 1,
                "tenNhomGiong": "Cây rau củ",
                "tenGiong": "Cà rốt Duyến",
                "xuatXu": "Việt Nam",
                "thoiGianThuHoach": "3 tháng"
            }
        ]
    },
    {
        "id": 8,
        "tenCoSo": "Cơ sở sản xuất giống cây trồng Hoàng Văn Nghĩa",
        "chuCoSo": "Hoàng Văn Nghĩa",
        "diaChi": "Số 50, Phố Hồng Hà",
        "tenXa": "Phường Hồng Hà",
        "tenTinh": "Thành phố Hà Nội",
        "thongTinGiongDtoList": [
            {
                "id": 1,
                "tenNhomGiong": "Cây lương thực",
                "tenGiong": "Ngô Nghĩa",
                "xuatXu": "Việt Nam",
                "thoiGianThuHoach": "4 tháng"
            }
        ]
    },
    {
        "id": 9,
        "tenCoSo": "Cơ sở sản xuất giống cây trồng Lành Văn Quân",
        "chuCoSo": "Lành Văn Quân",
        "diaChi": "Số 25, Phố Bồ Đề",
        "tenXa": "Phường Bồ Đề",
        "tenTinh": "Thành phố Hà Nội",
        "thongTinGiongDtoList": [
            {
                "id": 1,
                "tenNhomGiong": "Cây ăn quả",
                "tenGiong": "Táo Quân",
                "xuatXu": "Việt Nam",
                "thoiGianThuHoach": "7 tháng"
            }
        ]
    },
    {
        "id": 10,
        "tenCoSo": "Cơ sở sản xuất giống cây trồng Phan Văn Hào",
        "chuCoSo": "Phan Văn Hào",
        "diaChi": "Số 11, Phố Hoàn Kiếm",
        "tenXa": "Phường Hoàn Kiếm",
        "tenTinh": "Thành phố Hà Nội",
        "thongTinGiongDtoList": [
            {
                "id": 1,
                "tenNhomGiong": "Cây rau ăn lá",
                "tenGiong": "Rau Hào",
                "xuatXu": "Việt Nam",
                "thoiGianThuHoach": "1.5 tháng"
            }
        ]
    }
]


const ACTION_DATA = {
    loaiDongVat: [
        {id: 1, name: "Heo"},
        {id: 2, name: "Gà"},
        {id: 3, name: "Bò"},
        {id: 4, name: "Trâu"},
    ],
    loaiMau: [
        {id: 1, name: "Mẫu 1"},
        {id: 2, name: "Mẫu 2"},
        {id: 3, name: "Mẫu 3"},
        {id: 4, name: "Mẫu 4"},
    ],
};

function App() {
    //Dữ liệu model truyền ở Composable sẽ theo dạng này gồm "query" và "data"
    const mModel = {
        query: "query1", //Truyền vào tên query đã lưu ở Composable
        data: users, //Dữ liệu xử lý giữa Composable với React
        action: ACTION_DATA, //Dữ liệu xử lý dataSource của field Select
    };

    const handleRunQuery = () => {
        console.log("handle run query");
    }

    const handleUpdateModal = () => {
        console.log("handle update modal");
    }

    const mModel2 = {
        query: "query2", //Truyền vào tên query đã lưu ở Composable
        data: mockData2, //Dữ liệu xử lý giữa Composable với React
        action: ACTION_DATA, //Dữ liệu xử lý dataSource của field Select
    };

    const handleRunQuery2 = () => {
        console.log("handle run query 2");
    }

    const handleUpdateModal2 = () => {
        console.log("handle update modal 2");
    }

    return (
        <>
            <div className="flex flex-col gap-6">

                <ProductionBusinessTable model={mModel} runQuery={handleRunQuery} updateModel={handleUpdateModal}/>
                <ProductionBusinessMasterDetail runQuery={handleRunQuery2} model={mModel2}
                                                updateModel={handleUpdateModal2}/>
            </div>
        </>
    );
}

export default App;
