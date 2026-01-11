import AvatarGenerator from './components/AvatarGenerator';
import { AvatarProvider } from './contexts/AvatarContext';
import { Toast } from './components/Toast';
import { type ToastMessage } from './types/types';
import { useCallback, useState } from 'react';

function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message: string, type: ToastMessage['type'] = 'success') => {
    const id = Math.random().toString(36).substring(7);
    setToasts(prev => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <AvatarProvider addToast={addToast}>
        <AvatarGenerator />
        <Toast toasts={toasts} removeToast={removeToast} />
    </AvatarProvider>
  )
}

export default App
