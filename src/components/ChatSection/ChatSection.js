import "./ChatSection.scss";
import { ChatHeader } from "../ChatHeader/ChatHeader";
import { Chat } from "../Chat/Chat";
import { ChatForm } from "../ChatForm/ChatForm";
export const ChatSection = () => {
  return (
    <>
      <ChatHeader />
      <Chat />
      <ChatForm />
    </>
  );
};
