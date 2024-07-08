import { useState, useEffect } from "react";
import OpenAI from "openai";

import serviceFunctions from "../services/AIService";

function Messages() {
  const [Messages, setMessages] = useState([]);
  const [formData, setFormData] = useState("");

  useEffect(() => {
    const fetchInitialMessage = async () => {
      const initialMessage = {
        Type: "GPT",
        Message: await serviceFunctions.initialRender(),
      };

      setMessages([initialMessage]);
    };
    fetchInitialMessage();
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleUserSendMessage(formData);

    setFormData({ Type: "User", Message: "" });
  };

  const handleUserSendMessage = (Message) => {
    setMessages([...Messages, Message]);

    handleAISendMessage(Message);
  };

  const handleAISendMessage = async (userMessage) => {
    const res = await serviceFunctions.retrieveAIMessage(userMessage.Message);

    setMessages([...Messages, userMessage, { Type: "GPT", Message: res }]);
  };

  return (
    <>
      <div
        className=" overflow-hidden relative pl-5 pr-5 backdrop-blur-lg bg-white/20  rounded-2xl  w-screen h-5/6  flex flex-col justify-end items-center 
      "
      >
<div className="absolute top-4 w-full text-5xl  flex justify-center text-white font-coolfont">



</div>


        {Messages.map((Message, index) => (
          <div
            key={index}
            className={`w-full  flex ${
              Message.Type === "GPT" ? "justify-start" : "justify-end"
            } mb-2  pr-3`}
          >
            <ul className="
            ">
              <div className="w-full m-1">
                <li className=" bg-white rounded-3xl p-4">{Message.Message}</li>
              </div>
            </ul>
          </div>
        ))}

        <div className="w-11/12 bg-white rounded-full mb-2  p-1">
          <form
            className="h-10 flex justify-end items-center "
            onSubmit={handleSubmitForm}
          >
            <label htmlFor="message"></label>
            <input
              id="Message"
              name="Message"
              value={formData.Message}
              type="text"
              onChange={handleChange}
              placeholder="Message ChatGPT"
              required
              className="w-11/12 max-h-full ml-3 outline-transparent"
            />
            <button
              className="  rounded-full bg-AI-Send w-9 h-9 mr-1  transition duration-500 ease-in-out transform hover:scale-110 hover:bg-AI-SendHover "
              type="submit"
            >
              <i className="bx bx-up-arrow-alt bx-xs"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Messages;
