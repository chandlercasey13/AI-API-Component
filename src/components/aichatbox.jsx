import { useState } from "react";

function UserMessages() {
  const initialState = { userMessage: "" };
  const [userMessages, setUserMessages] = useState([]);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleUserSendMessage(formData);
    setFormData({ userMessage: "" });
  };

  console.log(formData);

  const handleUserSendMessage = (userMessage) => {
    setUserMessages([...userMessages, userMessage]);
  };

  return (
    <>
      <div className="bg-AI-Purple  overflow-y-auto rounded-2xl w-1/4 h-1/2 flex flex-col justify-end items-center 
      ">
        <img src="https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png"/>
        {userMessages.map((userMessage) => (
          <div className= 'w-full flex justify-end mb-2  pr-3'>
          <ul>
<div className= 'w-full m-1'>
            <li className='bg-white rounded-3xl p-4'>{userMessage.userMessage}</li>

            </div>

          </ul>
          </div>
        ))}

        <div className="w-11/12 bg-white rounded-full mb-2  p-1">
          <form className="h-10 flex justify-end items-center " onSubmit={handleSubmitForm}>
            <label htmlFor="message"></label>
            <input
              id="userMessage"
              name="userMessage"
              value={formData.userMessage}
              type="text"
              onChange={handleChange}
              placeholder="Message ChatGPT"
              className="w-11/12 max-h-full ml-3 outline-transparent"
            />
            <button className="rounded-full bg-AI-Send w-9 h-9 mr-1  transition duration-500 ease-in-out transform hover:scale-110 hover:bg-AI-SendHover " type="submit">
              
              <i className="bx bx-up-arrow-alt bx-xs"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserMessages;
