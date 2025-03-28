import ProfileDataElement from "../components/ProfileDataElement"

const MyProfile = () => {
  const [eyeClicked1, setEyeClicked1] = useState(false);
  const [eyeClicked2, setEyeClicked2] = useState(false);
  const [eyeClicked3, setEyeClicked3] = useState(false);

  const [formData, setFormData] = useState({
    yourPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  return (
    <div className="h-screen bg-gray-200 p-4"> 
        <div className=" rounded-md max-h-full border-gray-500 border  pb-8">
            <div className="bg-[#1b2c3e] text-white px-4 py-2 rounded-t-md font-semibold text-lg">
                Account Details
            </div>

            <ProfileDataElement label= "Name" data="diraj2489"/>
            <ProfileDataElement label= "Commission" data="0"/>
            <ProfileDataElement label= "Rolling Commission" data="eye" type="Eye"/>
            <ProfileDataElement label= "Exposure Limit" data="100000"/>
            <ProfileDataElement label= "Password" data="abcd12345" type="password"/>

        </div>
        
    </div>
  )
}

// export default MyProfile


// import axios from "axios";

// import React, { useState } from "react";

// const PasswordModal = ({ onClose, user_id, setPasswordPopup }) => {
//   // Initial sports data with checked status
  

  

//   const handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleClick = async () => {
//     try {
//       const result = await axios.post(
//         "https://admin.titan97.live/Apicall/update_users_profile",
//         {
//           user_id: user_id,
//           password:formData.newPassword
//         }
//       );
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//       alert('something went wrong');
//     }finally{
//       setPasswordPopup(false)
//     }
//   };

//   return (
//     <div
//       className={fixed inset-0 p-2 flex  justify-center top-0 z-20}}
//     >
//       <div className="w-full max-w-lg h-fit bg-white shadow-lg rounded-sm overflow-hidden">
//         {/* Header */}
//         <div className="flex justify-between items-center bg-blue-900 text-white px-4 py-3">
//           <h2 className="text-lg font-bold">Change Password</h2>
//           <button className="text-xl font-bold" onClick={onClose}>
//             &times;
//           </button>
//         </div>

//         {/* Table */}
//         <div className="overflow-auto px-4 py-6 text-lg">
//           <div className="mb-6 relative">
//             <h2>
//               Your Password<span className="text-red-500">*</span>
//             </h2>
//             <input
//               name="yourPassword"
//               type="password"
//               onChange={handleChange}
//               value={formData.yourPassword}
//               placeholder="Your Password.."
//               className={`px-3 py-2 border border-gray-400 outline-none w-full rounded-md text-lg ${
//                 eyeClicked1 && "hidden"
//               }`}
//             />
//             <input
//               type="text"
//               name="password"
//               placeholder="Your Password.."
//               onChange={handleChange}
//               value={formData.yourPassword}
//               className={`px-3 py-2 border border-gray-400 outline-none w-full rounded-md text-lg ${
//                 !eyeClicked1 && "hidden"
//               }`}
//             />
//             <Eye
//               className="absolute top-1/2 right-2"
//               onClick={() => {
//                 setEyeClicked1((prev) => !prev);
//               }}
//             />
//           </div>

//           <div className="mb-6 relative">
//             <h2>
//               New Password<span className="text-red-500">*</span>
//             </h2>
//             <input
//               name="newPassword"
//               type="password"
//               onChange={handleChange}
//                 value={formData.newPassword}
//               placeholder="New Password.."
//               className={`px-3 py-2 border border-gray-400 outline-none w-full rounded-md text-lg ${
//                 eyeClicked2 && "hidden"
//               }`}
//             />
//             <input
//               type="text"
//               name="newPassword"
//               placeholder="New Password.."
//                 onChange={handleChange}
//               value={formData.newPassword}
//               className={`px-3 py-2 border border-gray-400 outline-none w-full rounded-md text-lg ${
//                 !eyeClicked2 && "hidden"
//               }`}
//             />
//             <Eye
//               className="absolute top-1/2 right-2"
//               onClick={() => {
//                 setEyeClicked2((prev) => !prev);
//               }}
//             />
//           </div>

//           <div className="mb-6 relative">
//             <h2>
//               Confirm Password<span className="text-red-500">*</span>
//             </h2>
//             <input
//               name="confirmPassword"
//               type="password"
//               onChange={handleChange}
//               value={formData.confirmPassword}
//               placeholder="Confirm Password.."
//               className={`px-3 py-2 border border-gray-400 outline-none w-full rounded-md text-lg ${
//                 eyeClicked3 && "hidden"
//               }`}
//             />
//             <input
//               type="text"
//               name="confirmPassword"
//               placeholder="Confirm Password.."
//               onChange={handleChange}
//               value={formData.confirmPassword}
//               className={`px-3 py-2 border border-gray-400 outline-none w-full rounded-md text-lg ${
//                 !eyeClicked3 && "hidden"
//               }`}
//             />
//             <Eye
//               className="absolute top-1/2 right-2"
//               onClick={() => {
//                 setEyeClicked3((prev) => !prev);
//               }}
//             />
//           </div>

//           <div className="flex justify-end items-center gap-3">
//             <button onClick={handleClick} className="bg-gray-500 rounded-sm px-4 py-2 text-white font-semibold">
//               Confirm
//             </button>
//             <button className="bg-gray-500 rounded-sm px-4 py-2 text-white font-semibold">
//               No
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PasswordModal;