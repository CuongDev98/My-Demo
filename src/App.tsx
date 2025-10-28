import "./App.css";
import "devextreme/dist/css/dx.light.css";
import {TheoDoiCongTacKDDV} from "./pages/TheoDoiCongTacKDDV";

const DATA = {
  tenChuCoSo: "",
  soCmnd: "213456",
  soDienThoai: "65432",
  soGiayPhep: "",
  tinhThanh: "",
  xaPhuong: "",
  thonAp: "",
  diaChi: "",
  maCoSo: "",
  tenCoSo: "",
  ngayCapGiayPhep: null,
  tongSoNhaYen: "",
  tongDienTich: "",
  sanLuong: "",
  ghiChu: "",
  phuongDiaDiem: "",
  diaChiDiaDiem: "",
  viDo: 10.786793622305948,
  kinhDo: 106.69344513965149,
  kiemDichData: [
    { loaiDongVat: 1, loaiMau: 2, soLuong: 0, file: [], id: 1761465910426 },
  ],
  diaChiNoiDenData: [],
};

const ACTION_DATA = {
  loaiDongVat: [
    { id: 1, name: "Heo" },
    { id: 2, name: "Gà" },
    { id: 3, name: "Bò" },
    { id: 4, name: "Trâu" },
  ],
  loaiMau: [
    { id: 1, name: "Mẫu 1" },
    { id: 2, name: "Mẫu 2" },
    { id: 3, name: "Mẫu 3" },
    { id: 4, name: "Mẫu 4" },
  ],
};

function App({
  runQuery,
  model,
  updateModel,
}: {
  runQuery?: () => void;
  model: Record<string, any>;
  updateModel?: () => void;
}) {
  //Dữ liệu model truyền ở Composable sẽ theo dạng này gồm "query" và "data"
  const mModel = {
    query: "query1", //Truyền vào tên query đã lưu ở Composable
    data: DATA, //Dữ liệu xử lý giữa Composable với React
    action: ACTION_DATA, //Dữ liệu xử lý dataSource của field Select
  };

  return (
    <>
      <TheoDoiCongTacKDDV
        runQuery={runQuery}
        model={model}
        updateModel={updateModel}
      />
    </>
  );
}

export default App;
