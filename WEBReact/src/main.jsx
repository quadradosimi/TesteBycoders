import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import ReportFinancialMovement from './containers/Reports/reportFinancialMovement'
import AuthProvider from "./hooks/AuthProvider";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>          
          <Route path="/" element={<ReportFinancialMovement/>} />
        </Routes>
      </AuthProvider>     
    </BrowserRouter>
  </StrictMode>
)
