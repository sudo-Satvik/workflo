import React from 'react'
import { Outlet } from 'react-router-dom';

interface PrivateRoutesProps {
    allowedRoles: string[];
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ allowedRoles }) => {
  return <Outlet />
}

export default PrivateRoutes