import React from 'react'
import type { USER_DTO } from '../../Interface/user';
import { Plus, Save, X } from 'lucide-react';
import UserSideInput from '../input/UserSideInput';
import TeaxtArea from '../input/TeaxtArea';
import ListInput from '../input/listinputFrontend';
import UserSelectInput from '../input/selectinputFrontend';
interface EditDetailsProps {
    Data:Partial<USER_DTO>,
    handleCancel:()=>void,
    handleSave:()=>void
}
function EditDeatails({Data,handleCancel,handleSave}:EditDetailsProps) {
    const [editData, setEditData] = React.useState<Partial<USER_DTO>>(Data);
    const HandleAboutUpdate=(e:React.ChangeEvent<HTMLTextAreaElement|HTMLInputElement|HTMLSelectElement>)=>{
        const {name,value} = e.target;
        setEditData((prev)=>({...prev,about:{...prev.about,[name]:value}}))
    }
     const HandleEducationAndExperience=(e:React.ChangeEvent<HTMLTextAreaElement|HTMLInputElement|HTMLSelectElement>,type:"education"|"experience",index:number)=>{
        const {name,value} = e.target;        
        setEditData((prev)=>{
            const updatedArray = prev.about ? [...(prev.about[type] || [])] : [];
            if(name==="status" && (value==="studying"||value==="working")){
                updatedArray[index] = { ...updatedArray[index], [name]: value, endDate: "" }; 
            }else{
               updatedArray[index] = { ...updatedArray[index], [name]: value };            
            }
            return {
                ...prev,
                about: {
                    ...prev.about,
                    [type]: updatedArray
                }
            };
        })
    }
    
  return (
     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Edit Profile</h2>
              <button
                onClick={handleCancel}
                className="p-1 hover:bg-white/20 rounded-lg transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              {/* Name */}
              <UserSideInput type='text' value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} placeholder='user name' label='Name' name='name'/>
              {/* Bio */}
              <TeaxtArea value={editData.about?.bio} onChange={HandleAboutUpdate} placeholder='user bio' label='Bio' name='bio'/>
              {/* Location */}
             <UserSideInput type='text' value={editData.about?.location} onChange={HandleAboutUpdate} placeholder='user location' label='Location' name='location'/>
              {/* Website */}
             <UserSideInput type='text' value={editData.about?.website} onChange={HandleAboutUpdate} placeholder='user website' label='Website' name='website'/>
              {/* Company */}
             <UserSideInput type='text' value={editData.about?.company} onChange={HandleAboutUpdate} placeholder='user company' label='Company' name='company'/>

             <ListInput items={editData.about?.skills || []} setItems={(skills) => setEditData({ ...editData, about: { ...editData.about, skills } })} label='Skills' maxItems={100}/>
              {/* <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Social Links</label>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="GitHub Username"
                    value={editData.social?.github}
                    onChange={(e) => setEditData({ ...editData, social: { ...editData.social, github: e.target.value } })}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Twitter Handle"
                    value={editData.social?.twitter}
                    onChange={(e) => setEditData({ ...editData, social: { ...editData.social, twitter: e.target.value } })}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="LinkedIn Username"
                    value={editData.social?.linkedin}
                    onChange={(e) => setEditData({ ...editData, social: { ...editData.social, linkedin: e.target.value } })}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div> */}

              {/* Skills */}
              {/* Experience */}
              <div>
                <div className='flex justify-between'>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Education</label>
                <Plus width={15} height={15} onClick={()=>setEditData((prev)=>({...prev,about:{...prev.about,education:[...prev.about?.education,{
                    institution: '',
                    department: '',
                    start_year: '',
                    end_year: '',
                    duration:'',
                    status:''
                }]}}))}/>
                </div>
                <div className="space-y-4">
                  {editData?.about?.education.map((exp, idx) => (
                    <div  className="border-2 border-gray-200 rounded-xl p-4 space-y-3">
                          <UserSelectInput label="status" options={[
                          { label: "Studying", value: "studying" },
                          { label: "Graduated", value: "graduated" },
                        ]} name='status' onChange={(e) => HandleEducationAndExperience(e, "education", idx)} value={exp.status}/>
                   
                       <UserSideInput type='text' placeholder='Institution' value={exp.institution} onChange={(e) => HandleEducationAndExperience(e, "education", idx)} name='institution'/>
                       <UserSideInput type='text' placeholder='Department' value={exp.department} onChange={(e) => HandleEducationAndExperience(e, "education", idx)} name='department'/>
                         <UserSideInput type='text' placeholder='Position' value={exp.position} onChange={(e) => HandleEducationAndExperience(e, "education", idx)} name='position'/>
                       <UserSideInput type='date' placeholder='Start Date' value={exp.startDate} onChange={(e) => HandleEducationAndExperience(e, "education", idx)} name='startDate'/>
                        {exp.status==="graduated"&&
                         <UserSideInput type='date' placeholder='End Date' value={exp.endDate} onChange={(e) => HandleEducationAndExperience(e, "education", idx)} name='endDate'/>
                        }
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className='flex justify-between'>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Experience</label>
                 <Plus width={15} height={15} onClick={()=>setEditData((prev)=>({...prev,about:{...prev.about,experience:[...prev.about?.experience,{
                    company: '',
                    position: '',
                    start_year: '',
                    end_year: '',
                    duration:'',
                    status:''
                }]}}))}/>
                </div>
              
                <div className="space-y-4">
                  {editData?.about?.experience.map((exp, idx) => (
                    <div  className="border-2 border-gray-200 rounded-xl p-4 space-y-3">
                        <UserSelectInput label="status" options={[
                          { label: "Working", value: "working" },
                          { label: "Not Working", value: "not-working" },
                        ]} name='status' onChange={(e) => HandleEducationAndExperience(e, "experience", idx)} value={exp.status}/>
                               <UserSelectInput label="employment_type" options={[
                         { label: 'Full Time', value: 'full-time' },
  { label: 'Part Time', value: 'part-time' },
  { label: 'Contract', value: 'contract' },
  { label: 'Internship', value: 'internship' },
  { label: 'Freelance', value: 'freelance' }
                        ]} name='employment_type' onChange={(e) => HandleEducationAndExperience(e, "experience", idx)} value={exp.employment_type}/>
                       <UserSideInput type='text' placeholder='Company' value={exp.company} onChange={(e) => HandleEducationAndExperience(e, "experience", idx)} name='company'/>
                       <UserSideInput type='text' placeholder='Position' value={exp.position} onChange={(e) => HandleEducationAndExperience(e, "experience", idx)} name='position'/>
                       <UserSideInput type='date' placeholder='Start Date' value={exp.startDate} onChange={(e) => HandleEducationAndExperience(e, "experience", idx)} name='startDate'/>
                        {exp.status==="not-working"&&
                          <UserSideInput type='date' placeholder='End Date' value={exp.endDate} onChange={(e) => HandleEducationAndExperience(e, "experience", idx)} name='endDate'/>
                        }
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSave}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all"
                >
                  <X className="w-5 h-5" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default EditDeatails
