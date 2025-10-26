import React from "react";

interface FileFieldProps {
  value?: string[]; // danh sách tên file
  onChange?: (files: File[]) => void;
  multiple?: boolean;
  fieldKey?: string; // để tạo id riêng khi dùng trong bảng
}

const FileField: React.FC<FileFieldProps> = ({
  value = [],
  onChange,
  multiple = false,
  fieldKey = "file",
}) => {
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setSelectedFiles(files); // ✅ lưu file vào state local
      onChange?.(files); // ✅ callback cho parent
    }
    // reset input để chọn cùng file lại cũng được
    e.target.value = "";
  };

  const displayFiles =
    selectedFiles.length > 0
      ? selectedFiles.map((f) => f.name)
      : Array.isArray(value)
      ? value
      : [];

  const hasFiles = displayFiles.length > 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: hasFiles ? 8 : 0,
        width: "100%",
        minHeight: 30,
      }}
    >
      {/* input thật bị ẩn */}
      <input
        type="file"
        id={`file-input-${fieldKey}`}
        multiple={multiple}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {/* nút chọn tệp */}
      <label
        htmlFor={`file-input-${fieldKey}`}
        style={{
          backgroundColor: "#007000",
          color: "white",
          padding: "4px 10px",
          borderRadius: 4,
          cursor: "pointer",
          fontSize: 13,
          whiteSpace: "nowrap",
        }}
      >
        Chọn tệp
      </label>

      {/* danh sách file */}
      {hasFiles && (
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {displayFiles.map((name, index) => (
            <span key={index} style={{ fontSize: 13, color: "#333" }}>
              {name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileField;
