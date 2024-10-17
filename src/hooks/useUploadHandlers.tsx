import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface UploadResult {
  info: {
    public_id: string;
  };
}

interface UploadFile {
  info: {
    file: {
      type: string;
    };
  };
}

interface Widget {
  close: () => void;
}

export const useUploadHandlers = () => {
  const router = useRouter();

  const handleUploadSuccess = useCallback((result: UploadResult) => {
    const { public_id } = result.info;
    router.push(`/results?id=${public_id}`);
  }, [router]);

  const handleUploadAdded = useCallback((file: UploadFile, { widget }: { widget: Widget }) => {
    const { close } = widget;
    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];

    if (!allowedTypes.includes(file.info.file.type)) {
      alert('Solo se permiten archivos de imagen (PNG, JPG, JPEG, WEBP).');
      close();
      return false;
    }
  }, []);

  return { handleUploadSuccess, handleUploadAdded };
};
