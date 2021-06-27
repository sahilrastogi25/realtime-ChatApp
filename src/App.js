import "./App.scss";
import { Profile } from "./components/Profile/Profile";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ChatListing } from "./components/ChatListing/ChatListing";
import { ChatSection } from "./components/ChatSection/ChatSection";
export const App = () => {
  return (
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
  );
};
