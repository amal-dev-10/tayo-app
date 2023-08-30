import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from '../components/Contacts';
import '../styles/main.css'
import Sidebar from '../components/Sidebar';
import ChartAndMaps from '../components/ChartAndMaps';


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
        <div className='main'>
            <Sidebar/>
            <div className='content'>
                <Routes>
                    <Route path="/contact" element={<Contacts />} />
                    <Route path="/maps" element={<ChartAndMaps/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
