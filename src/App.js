import "./App.scss";
import { Profile } from "./components/Profile/Profile";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ChatListing } from "./components/ChatListing/ChatListing";
import { ChatSection } from "./components/ChatSection/ChatSection";
import { Login } from "./components/Login/Login";
export const App = () => {
  return (
    <>
      {true ? (
        <Login />
      ) : (
        <div className="App">
          <div className="left-section">
            <Profile />
            <SearchBox />
            <ChatListing />
          </div>
          <div className="right-section">
            <ChatSection />
          </div>
        </div>
      )}
    </>
  );
};
