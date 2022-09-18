/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles.css";
import logo from "./assets/logo.png";
import { useState } from "react";
import { SearchResults } from "./SearchResults";
import { collection, getFirestore, query } from "@firebase/firestore";
import { getAuth, signOut } from "@firebase/auth";
import { PlaylistDetail } from "./PlaylistDetail";
import { useCollectionData } from "react-firebase9-hooks/firestore";

export const Homepage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [queryValue, setQueryValue] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;
  // useEffect(() => {
  //   const getPlaylists = async () => {
  //     const docs = await getDocs(q);
  //     docs.forEach((x) => {
  //       console.log(x.data());
  //       setQuerySnapshot((querySnapshot) => querySnapshot.concat(x.data()));
  //     });
  //   };
  //   getPlaylists();
  // }, []);

  const db = getFirestore();
  const uid = getAuth().currentUser.uid;
  const q = query(collection(db, `users/${uid}/playlists/`));
  const [querySnapshot, loading, errors] = useCollectionData(q);
  return (
    <div className="app-container">
      <div className="app-header">
        <div className="app-header-left">
          <img className="logo" src={logo} alt="" />
          <p className="app-name">LearnWithPeace</p>
          <form
            className="search-wrapper"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(`Enter pressed?`);
              setQueryValue(searchValue);
            }}
          >
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              id="searchbar"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="feather feather-search"
              viewBox="0 0 24 24"
              onClick={() => {
                console.log(`seach icon pressed`);
                setQueryValue(searchValue);
              }}
            >
              <defs></defs>
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </form>
        </div>
        <div className="app-header-right">
          <button className="profile-btn" onClick={() => signOut(auth)}>
            <img src={user.photoURL} alt="" />
            <span>{user.displayName}</span>
          </button>
        </div>
        
        <button className="messages-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-message-circle"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </button>
      </div>
      <SearchResults queryString={queryValue} />
      <div className="app-content">
        <div className="app-sidebar">
          <a href="#" className="app-sidebar-link active">
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
              className="feather feather-home"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </a>
          <a href="" className="app-sidebar-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="link-icon feather feather-settings"
              viewBox="0 0 24 24"
            >
              <defs />
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
          </a>
        </div>
        <div className="projects-section">
          <div className="projects-section-header">
            <p>Your playlists</p>
            <p className="time">
              <script> document.write(new Date().toLocaleDateString());</script>
            </p>
          </div>
          <div className="projects-section-line">
            {/* <div className="projects-status">
              <div className="item-status">
                <span className="status-number"></span>
                <span className="status-type">In Progress</span>
              </div>

              <div className="item-status">
                <span className="status-number"></span>
                <span className="status-type">Total Playlists</span>
              </div>
            </div> */}
            <div className="view-actions">
              <button className="view-btn list-view active" title="List View">
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
                  className="feather feather-list"
                >
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          {/* shit goes here */}
          <div className="project-boxes jsListView">
            {querySnapshot &&
              querySnapshot.map((doc, idx) => {
                console.log(doc);
                return <PlaylistDetail item={doc} key={idx} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
