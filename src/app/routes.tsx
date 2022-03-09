/**import modules */
import React, { lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
/**import pages */
const Landing = lazy(() => import('containers/landing'));
const Profile = lazy(() => import('containers/profile'));
const CreateProfile = lazy(() => import('containers/profile/create'));
const EmptyProfile = lazy(() => import('containers/profile/empty'));
const CreateAvatar = lazy(() => import('containers/profile/avatar/create'));
const UploadAvatar = lazy(() => import('containers/profile/avatar/upload'));
const Avatar = lazy(() => import('containers/profile/avatar'));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<Landing />} />
      <Route path="profile" element={<Outlet />}>
        <Route path="" element={<Profile />} />
        <Route path="empty" element={<EmptyProfile />} />
        <Route path="create" element={<CreateProfile />} />
        <Route path="avatar" element={<Avatar />} />
        <Route path="avatar/create" element={<CreateAvatar />} />
        <Route path="avatar/upload" element={<UploadAvatar />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
