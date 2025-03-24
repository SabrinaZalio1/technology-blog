import { useState } from 'react';

export function useUploadPostModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [uploadStatus, setUploadStatus] = useState<'initial' | 'loading' | 'error' | 'success'>('initial');
  const [progress, setProgress] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUploadStart = () => {
    setUploadStatus('loading');
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStatus('success');
          return 100;
        }
        return prev + 20;
      });
    }, 500);
  };

  const handleRetry = () => {
    setUploadStatus('initial');
  };

  return {
    open,
    name,
    setName,
    uploadStatus,
    progress,
    handleOpen,
    handleClose,
    handleUploadStart,
    handleRetry,
  };
}
