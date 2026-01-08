import AvatarGenerator from './components/AvatarGenerator';
import { AvatarProvider } from './contexts/AvatarContext';

function App() {
  return (
    <AvatarProvider addToast="Todo later">
        <AvatarGenerator />
    </AvatarProvider>
  )
}

export default App
