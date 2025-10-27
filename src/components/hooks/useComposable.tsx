import { useEffect, useState } from "react";

// Mở rộng kiểu cho window
declare global {
  interface Window {
    model?: any;
    updateModel?: (payload: any) => void;
    runQuery?: (name: string) => void;
    onModelChange?: (model: any) => void;
  }
}

export const useComposable = () => {
  const [model, setModel] = useState(window.model);

  // Lắng nghe khi Composable cập nhật model
  useEffect(() => {
    window.onModelChange = (newModel: any) => {
      setModel(newModel);
    };
    return () => {
      window.onModelChange = undefined;
    };
  }, []);

  // Wrapper cập nhật model từ React về Composable
  const updateModel = (data: any) => {
    if (window.updateModel) {
      window.updateModel({ ...window.model, data });
    }
  };

  // Wrapper gọi query bên Composable
  const runQuery = (name?: string) => {
    window.runQuery?.(name || window.model?.query);
  };

  return { model, updateModel, runQuery };
};
