/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { postRequest } from "./../../utils/apiRequests";
import { useState } from "react";
import { ReactMic } from "react-mic";
import {
  BASE_URL,
  UPLOAD_AUDIO,
  UPLOAD_IMAGE_FILE,
} from "./../../utils/apiEndpoints";
import "./ChatForm.scss";

export const ChatForm = ({ sendMsg, sendTyping }) => {
  const [msg, setMsg] = useState("");
  const [record, setRecord] = useState(false);

  const handleChange = (e) => {
    setMsg(e.target.value);
    sendTyping({ value: e.target.value, type: "typing", theme: "text" });
  };

  const handleSend = (e) => {
    if (e.key === "Enter") {
      setMsg("");
      sendMsg({ value: e.target.value, type: "message", theme: "text" });
    }
  };

  const onFileChange = async (e) => {
    let filePath = await imageFileUpload(e.target.files[0]);
    sendMsg({ value: filePath, type: "file", theme: "image" });
  };

  const imageFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("imageMsg", file, file.name);
    const response = await postRequest(
      `${BASE_URL}${UPLOAD_IMAGE_FILE}`,
      formData
    );
    return response;
  };

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    // console.log(recordedBlob);
  };

  const onStop = async (recordedBlob) => {
    let filePath = await audioFileUpload(recordedBlob);
    sendMsg({ value: filePath, type: "file", theme: "audio" });
  };

  const audioFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("track", file.blob);

    const url = `${BASE_URL}${UPLOAD_AUDIO}`;
    let response = await postRequest(url, formData);
    return response;
  };

  return (
    <div className="chat-form">
      <div className="action-btn">
        <div className="file-share">
          <input type="file" onChange={(e) => onFileChange(e)} />
          <FontAwesomeIcon className="icon-block" icon={faPaperclip} />
        </div>
      </div>
      <input
        type="text"
        placeholder="message"
        className="chat-input"
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => {
          handleSend(e);
        }}
      />
      <ReactMic
        record={record}
        onStop={onStop}
        onData={onData}
        visualSetting="frequencyBars"
        className="sound-wave"
        strokeColor="#999"
        backgroundColor="#ffffff"
        echoCancellation="true"
        channelCount="2"
      />
      {record ? (
        <FontAwesomeIcon
          onClick={stopRecording}
          className="icon-block active"
          icon={faMicrophone}
        />
      ) : (
        <FontAwesomeIcon
          onClick={startRecording}
          className="icon-block"
          icon={faMicrophone}
        />
      )}
    </div>
  );
};
