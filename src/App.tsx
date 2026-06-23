import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ScientiaCoreGuidePage from './pages/ScientiaCoreGuidePage';
import ScientiaEditorGuidePage from './pages/ScientiaEditorGuidePage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="scientia-core/guide" element={<ScientiaCoreGuidePage />} />
            <Route path="scientia-editor/guide" element={<ScientiaEditorGuidePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
