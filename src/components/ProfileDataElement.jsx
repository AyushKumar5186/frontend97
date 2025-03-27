import React, { useState } from 'react'
  import { Eye } from "lucide-react";

const ProfileDataElement = ({ label, data, type }) => {

    const [ openEditModel, setOpenEditModel] = useState(false)
    return (
        <div>
            <div>
                <h2 className='text-lg border-gray-500 font-semibold border-b py-1 px-3'>{label}</h2>
            </div>
            <div className='py-1 border-gray-500 px-3 border-b' >
                {type === "password" ? 
                <div className='flex items-center'>
                    <input type='password' readOnly className='text-lg outline-none' value={`${data}`} />
                    <button className='relative z-100 font-semibold text-md cursor-pointer' onClick={()=> alert("hello")}>Edit</button>
                </div>
                 : type === "Eye" ? Eye :<p className='text-lg'>{data}</p>}
            </div>
        </div>
    )
}

export default ProfileDataElement