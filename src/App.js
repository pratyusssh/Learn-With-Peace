import "./App.css";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase9-hooks/auth";
import { Homepage } from "./Components/homepage/Homepage";
import signInLogo from "./assets/google.png";
import companyLogo from "./Components/homepage/assets/logo.png";


function App() {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return user ? (
    <div>
      <Homepage />
    </div>
  ) : (
    <main className="main">
      <div className="container">
        <section className="wrapper">
        <div className="logo">
                <img src={companyLogo} alt="" />
              </div>
          <br />
          <div className="method">
            <div className="method-control">
              <button onClick={signIn} className="method-action">
                <div className="logo"><img src={signInLogo} alt="" /></div>
                <span>Sign in with Google</span>
              </button>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
