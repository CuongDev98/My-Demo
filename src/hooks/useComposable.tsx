/**
 * useComposable hook
 * ------------------
 * Hook để React đọc và cập nhật model, đồng thời chạy query từ Composable thông qua Lowcoder
 **/

// Mở rộng kiểu cho window (được dùng như “shared global state” để React và Composable giao tiếp)
declare global {
  interface Window {
    model?: any;
    updateModel?: (payload: any) => void;
    runQuery?: (name: string) => void;
  }
}

export const useComposable = () => {
  // Lấy model được truyền vào từ Composable
  const model = window.model;

  // Wrapper cập nhật model từ React về Composable
  const updateModel = (payload: Record<string, any>) => {
    if (window.updateModel) {
      const newModel = { ...window.model };

      // Lặp qua các key trong payload và gán vào model
      Object.keys(payload).forEach((key) => {
        newModel[key] = payload[key];
      });

      window.updateModel(newModel);
    }
  };

  // Wrapper gọi query bên Composable
  const runQuery = () => {
    const queryName = model?.query;
    if (queryName) {
      window.runQuery?.(queryName);
    }
  };

  return { model, updateModel, runQuery };
};
