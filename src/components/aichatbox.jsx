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
    handleUserSendMessage(formData)
    setFormData({userMessage: ''})
  };
  
console.log(formData)

  const handleUserSendMessage = (userMessage) => {
    setUserMessages([...userMessages, userMessage]);
  };

  return (
    <>
      <div className="text-bubble"></div>
{userMessages.map((userMessage) => (

<ul>
  <li>{userMessage.userMessage}</li>
</ul>
)
)}
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="message"></label>
        <input
          id="userMessage"
          name="userMessage"
          value={formData.userMessage}
          type="text"
          onChange={handleChange}
        />
        <button type= 'submit'> <i className='bx bx-up-arrow-alt bx-xs'></i></button>
      </form>
    </>
  );
}

export default UserMessages;
