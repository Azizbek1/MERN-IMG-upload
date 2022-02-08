import React, { useEffect, useState } from "react";
import {getSingleFiles, getMultipleFiles} from './components/data/api'
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Fileuploads from "./components/fileUploads";

const App = () => {
  const [singleFiles, setsingleFiles] = useState([])
  // console.log(singleFiles)

  const [multipleFiles, setmultipleFiles] = useState([]);

  const getSingleFilselist = async () => {
    try{
      const fileslist = await getSingleFiles() 
      setsingleFiles(fileslist)
      console.log(multipleFiles)
    }catch(e){
      console.log(e)
    }
  }

  const getMultiplefiList = async () => {
    try {
      const filelist = await getMultipleFiles()
      setmultipleFiles(filelist)
    }catch(e) {
      console.log(e)
    }
  }


  useEffect(() => {
    getSingleFilselist()
    getMultiplefiList()
  }, [])
  return (
    <div>
        <Fileuploads single={() => getSingleFilselist()} getMultiple={() => getMultiplefiList()}/>
        <div className="container">
          <div className="row">
            <div className="col-6">
                <h2 className="text-success">Single files List</h2>
                <div className="row">
                  {singleFiles.map((file, i) => 
                    <div className="col-6"  key={i} >
                        <div className="card mb-2 border-0 p-0">
                          <img className="card-img-top img-responsive" src={`http://localhost:5000/${file.filePath}`} height="200" alt="jpg" />
                        </div>
                    </div>
                 )}
                </div>
            </div>

            <div className="col-6">
              <h2 className="text text-dark">Multi files List</h2>
              <div className="row">
                   {multipleFiles.map((element, index) => 
                      <div key={element._id}  className="row">
                          <h6 className="text text-danger">
                              {element.title}
                          </h6>
                          <div className="row">
                            {element.files.map((file, index) => 
                               <div key={index} className="col-6 mb-2 border-0 p-0">
                                 <img className="card-img-top img-responsive" src={`http://localhost:5000/${file.filePath}`} height="200" alt="jpg" />
                               </div>
                            )}
                          </div>
                      </div>
                   )}   
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default App;
