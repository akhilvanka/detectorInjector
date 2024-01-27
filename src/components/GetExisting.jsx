import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import auth from "../firebase/firebase";
import { useEffect, useState } from "react";

const DocumentList = ({ documents }) => {

  if (documents.length === 0) {
    return (
      <div>No documents found, head over to Upload PDF to get started!</div>
    );
  } else {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {documents.map((doc, index) => (
            <div key={index} style={{ marginRight: "20px" }}>
              <a href={doc.docUrl} download={doc.filename} target="_blank">
                {doc.filename}
              </a>
            </div>
          ))}
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
          const querySnapshot = await getDocs(collection(db, user.uid));
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
