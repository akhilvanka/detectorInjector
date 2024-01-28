import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import auth from "../firebase/firebase";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFile, faCloudArrowDown} from '@fortawesome/free-solid-svg-icons'

const DocumentList = ({ documents }) => {
  const [gptDisp, setgptDisp] = useState("hidden");
  const [GPTresponseText, setGPTresponseText] = useState("");
  function showGpt(GPTresponse){
    console.log(GPTresponse)
    setGPTresponseText(GPTresponse)
    setgptDisp("absolute")
  }

  if (documents.length === 0) {
    return (
      <div>No documents found, head over to Upload PDF to get started!</div>
    );
  } else {
    return (
      <div>
        <div className="flex-wrap	items-start "
          style={{
            display: "flex",
            flexDirection: "row",

          }}
        >
          
          {documents.map((doc, index) => (
            <div key={index} className="w-[120px] mx-6	p-2 relative" >
                <button onClick={() => showGpt(doc.GPTresponse)} className="w-6 h-6 absolute right-0	hover:bg-blue-300 rounded active:bg-blue-800">
                <img className=" " src={process.env.PUBLIC_URL +"openAI.png"} />  
              </button>
              <span className="w-5/6 block">
                <a className="text-wrap block break-words	hover:bg-green-200	rounded" href={doc.docUrl} download={doc.filename} target="_blank">
                <img className="" src={process.env.PUBLIC_URL +"fileIcon.png"} />
                  {doc.filename}
                </a>
              </span>
              
              

            </div>
          ))}
          <div id="gptDisplay" className={gptDisp +" overflow-y-auto top-10 h-4/5 over bg-blue-300 w-2/3 m-auto p-3 mb-4"}>
            <p className="">
              <h2 className="text-xl	">Example gpt response for this injected documment</h2><i>if you see no signs of injection try a more agressive injection</i>
              <br /><br /> 
              
              {GPTresponseText} 
            </p>
            <button onClick={() => setgptDisp("hidden")} className="text-xl p-3 absolute right-5 top-5 bg-red-100 hover:bg-red-300 rounded active:bg-blue-800">X</button>
                
          </div>
        </div>
      </div>
    );
  }
};

const DocumentFetcher = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const querySnapshot = await getDocs(query(collection(db, user.uid), orderBy("createdAt", "desc")));
          const docsData = querySnapshot.docs.map((doc) => doc.data());
          setDocuments(docsData);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchDocuments();
  }, []);

  return <DocumentList documents={documents} />;
};

export default DocumentFetcher;
