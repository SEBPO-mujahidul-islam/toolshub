import { Routes, Route } from 'react-router-dom';
import Previews from './pages/Previews';
import ImgNames from './pages/ImgNames';
import Creatives from './pages/Creatives';
import SSandSR from './pages/SSandSR';
import Images from './pages/Images';
// import Home from './pages/Home';
import TabsPage from './pages/TabsPage';
import About from './pages/About';
import FolderPage from './pages/FolderPage';
import Paths from './pages/Paths';
import Daily from './pages/Daily';
import Post from './pages/Post';
import QA from './pages/QA';
import Team from './pages/Teams';
import Codes from './pages/Codes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Previews />} />
      <Route path="/previews" element={<Previews />} />
      <Route path="/codes" element={<Codes />} />
      <Route path="/creatives" element={<Creatives />} />
      <Route path="/ImgNames" element={<ImgNames />} />
      <Route path="/ss-sr" element={<SSandSR />} />
      <Route path="/Paths" element={<Paths />} />
      <Route path="/images" element={<Images />} />
      <Route path="/TabsPage" element={<TabsPage />} />
      <Route path="/TabsPage" element={<About />} />
      <Route path="/TabsPage" element={<FolderPage />} />
      <Route path="/qa" element={<QA />} />
      <Route path="/team" element={<Team />} />
      <Route path="/post" element={<Post />} />
      <Route path="/Daily" element={<Daily />} />  
      <Route path="*" element={<h1>404 Not Found</h1>} />      
    </Routes>
  );
}
