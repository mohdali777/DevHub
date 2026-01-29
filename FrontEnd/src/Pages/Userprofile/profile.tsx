import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../Redux/store';
import UserService from '../../ApiServices/Services/User/userservice';
import ProfileContainer from '../../Components/containers/profile';
import { dummyUser } from '../../Utils/dummy/dummy';
import EditDeatails from '../../Components/containers/editDeatails';
const UserProfilePage = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const {UserId} = useSelector((state:RootState)=>state.auth)
  const [userData, setUserData] = useState(dummyUser);

  const [editData, setEditData] = useState({ ...userData });


  const handleEdit = () => {
    setEditData({ ...userData });
    setShowEditModal(true);
  };

  const handleSave = () => {
    setUserData({ ...editData });
    setShowEditModal(false);
  };

  const handleCancel = () => {
    setEditData({ ...userData });
    setShowEditModal(false);
  };

  async function fetchUserData(){
    try {
      const response = await UserService.FindById(UserId as string);      
      setUserData(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
   fetchUserData()
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header with Action Buttons */}
      {/* Cover Image */}
      <div className="relative h-72 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
        <img 
          // src={userData.coverImage} 
          alt="Cover"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Profile Content */}
      <ProfileContainer userData={userData} handleEdit={handleEdit}/>

      {/* Edit Modal */}
      {showEditModal && (
       <EditDeatails Data={userData} handleCancel={handleCancel} handleSave={handleSave}/>
      )}
    </div>
  );
};

export default UserProfilePage;