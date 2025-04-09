import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ✅ Import Vercel Analytics
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <Analytics /> {/* ✅ Analytics component added */}
  </>
);
