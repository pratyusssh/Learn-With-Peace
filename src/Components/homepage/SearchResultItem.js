import { getAuth } from "@firebase/auth";
import { doc, getFirestore, setDoc } from "@firebase/firestore";
import "./styles.css";

export const SearchResultItem = (props) => {
  const auth = getAuth();
  const uid = auth.currentUser.uid;
  const db = getFirestore();
async function handleclick(){
    let data;
    data = await fetch('http://localhost:8000/playlistitems/' + props.item.id.playlistId).then((res) => res.json());
    console.log("hello");
    console.log(data);
}
  return (
      <div className="project-box-wrapper" onClick={handleclick}>

        <div className="project-box" style={{ backgroundColor: "#d5deff" }}>
          <div className="project-box-header">
            <div className="more-wrapper">
              <img className="thumbnail"
                src={props.item.snippet.thumbnails.high.url}
                alt=""
                height={`${
                  Number(props.item.snippet.thumbnails.default.height) / 4
                }rem`}
                width={`${
                  Number(props.item.snippet.thumbnails.default.width) / 4
                }rem`}
              />
              {/* <button className="project-btn-more">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-more-vertical"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </button> */}
            </div>
          </div>
          <div className="project-box-content-header">
            <p className="box-content-header">{props.item.snippet.title}</p>
            <p className="box-content-subheader">
              {props.item.snippet.channelTitle}
            </p>
          </div>
          <div className="box-progress-wrapper">
            <p className="box-progress-header">
              {props.item.snippet.description}
            </p>
            <div className="box-progress-bar">
              <span
                className="box-progress"
                style={{ width: "40%", backgroundColor: "#4067f9" }}
              ></span>
            </div>
            <p className="box-progress-percentage">40%</p>
          </div>
          <div className="project-box-footer">
            <div className="participants">
              <button
                className="add-participant"
                style={{ color: "#4067f9" }}
                onClick={() => {
                  console.log(`very important button clicked`);
                  setDoc(
                    doc(db, `users/${uid}/playlists/${props.item.etag}`),
                    props.item
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-plus"
                >
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};
