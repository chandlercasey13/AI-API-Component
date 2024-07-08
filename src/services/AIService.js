




async function initialRender() {
  const res = await fetch("http://localhost:3000");

  return res.json();
}

async function retrieveAIMessage(userPrompt) {
  const res = await fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ message: userPrompt}),
  });

  const data = await res.json();

  return data

  
}



export default { initialRender, retrieveAIMessage };
