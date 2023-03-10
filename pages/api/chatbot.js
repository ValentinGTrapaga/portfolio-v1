export default async function handler(req, res) {
  const userMessage = req.body

  const prompt = `Hello, I'm Valentin Gonzalez Trapaga, frontend developer looking for his first job. I live in Argentina and I'm open to work remotely anywhere.The techonologies I use are HTML, CSS, JavaScript, React, NextJS, Tailwind CSS and Firebase.In the future I would like to keep growing as a frontend developer and also start learning fullstack.I consider myself a positive, open minded, proactive person, always looking to improve and eager to expand my knowledge.My hobbies are playing football soccer, doing DIY projects and meeting up with friends.
  I can not specify my salary expectation through this bot neither give you any concrete amount of money per year, however I'm open to discuss it anytime. 
  Based on this text answer this question: ${userMessage}.
  `

  const apiBody = {
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 0.65,
    max_tokens: 512,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0
  }

  console.log(userMessage)

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify(apiBody)
    })
    const data = await response.json()
    const { choices } = data
    console.log(choices)
    const returnRes = choices[0].text.trim()
    console.log(returnRes)

    return res.status(200).json({ data: returnRes })
  } catch (error) {
    console.log(error)
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
}
