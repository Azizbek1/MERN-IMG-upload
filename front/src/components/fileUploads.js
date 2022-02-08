import React, { useState } from "react";
import {multipleFilesUpload, singleFileUpload} from './data/api'
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
const Fileuploads = (props) => {
    const [singleFile, setSingleFile] = useState('');
    const [multipleFiles, setMultipleFiles] = useState('');
    const [title, setTitle] =  useState('');
    
    const [singleProgress, setSingleProgress] = useState(0);
    const [multepleProgress, setmMultepleProgress] = useState(0);


    const singleFileOptions = {
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent
        const percetage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
        setSingleProgress(percetage)
      }
    }
    const MultepleFileOptions = {
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent
        const percetage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
        setmMultepleProgress(percetage)
      }
    }


    const SingleFileChange = async (e) => {
        setSingleFile(e.target.files[0])
        setSingleProgress(0)
      
    }




    const uploadSingleFile = async () => {
        const formData = new FormData();
        formData.append('file', singleFile)
        await singleFileUpload(formData, singleFileOptions)
        props.single()
        // console.log(singleFile)
    }




    const MultipleFileChange = async (e) => {
      setMultipleFiles(e.target.files)
      setmMultepleProgress(0)
    }
    

    const upLoadsMulteFile = async () => {
        const formData = new FormData();
        formData.append('title', title)
        for(var i = 0; i < multipleFiles.length; i++) {
          formData.append('files', multipleFiles[i])
        }
        await multipleFilesUpload(formData, MultepleFileOptions)
        props.getMultiple()
    }
    
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="from-group">
              <label>Select Single File</label>
              <input type="file" className="form-control" onChange={(e) => SingleFileChange(e)} />
            </div>
            <button onClick={() => uploadSingleFile()}  className="btn btn-primary">Upload</button>
            <div className="col-2">
              <CircularProgressbar  
                value={singleProgress}
                text={`${singleProgress}%`}
              />
            </div>
          </div>
          <div className="col-4">
            <label>Title</label>
            <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
          </div>
          <div className="col-4">
            <label>Select Multe files</label>
            <input onChange={(e) => MultipleFileChange(e)} type="file" className="form-control" multiple />
            <button onClick={() =>upLoadsMulteFile()}className="btn btn-primary">Uploads</button>
            <div className="col-2">
              <CircularProgressbar  
                value={multepleProgress}
                text={`${multepleProgress}%`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fileuploads;
