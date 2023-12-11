/* eslint-disable react/prop-types */
import folderIcon from "../assests/folder.png"
import fileIcon from "../assests/file.png"
import { useState } from 'react'
const Folder = ({explorer}) => {
    const [show, setShow] =useState(false)
    if(explorer.isFolder){
        return (
            <div>
                <div style={{display:"flex"}}>
                    <img src={folderIcon} alt="folder" style={{width:48, height:24, objectFit:"contain"}}/>
                    <div onClick={()=> setShow(!show)}>
                        {explorer.name}
                    </div>
                </div>
                <div style={{display: show ? "block" : "none", marginLeft:20, marginTop:8}}>
                    {explorer.items.map((exp,i)=>{
                        return(
                            <Folder key={i} explorer={exp}/>
                        )
                    })}
                </div>
            </div>
        )
    }else {
        return(
            <div style={{display:"flex", paddingTop:4, paddingBottom:4}}>
                    <img src={fileIcon} alt="folder" style={{width:48, height:24, objectFit:"contain"}}/>
                    <div onClick={()=> setShow(!show)}>
                        {explorer.name}
                    </div>
            </div>
        )
    }
}

export default Folder