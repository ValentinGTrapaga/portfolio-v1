export default async function handler(req, res) {
  const { COHERE_KEY } = process.env
  const userMessage = req.body

  const prompt = `This is a presentation text about me: I'm Valentin Gonzalez Trapaga, frontend developer looking for his first job. I live in Argentina and I'm open to work remotely anywhere.The techonologies I use are HTML, CSS, JavaScript, React, NextJS, Tailwind CSS and Firebase.In the future I would like to keep growing as a frontend developer and also start learning fullstack web development.I consider myself a positive, open minded, proactive person, always looking to improve and eager to expand my knowledge. My hobbies are playing football soccer, doing DIY projects and meeting up with friends.
  You can contact me through my email: gonzaleztrapagav@gmail.com or my GitHub: https://github.com/ValentinGTrapaga
  I can not specify my salary expectation through this bot neither give you any concrete amount of money per year, however I'm open to discuss it anytime. 
  Based on this text act as if you were this person and answer this question: ${userMessage}.
  `

  const apiBody = {
    model: "command-xlarge-nightly",
    prompt: prompt,
    max_tokens: 512,
    temperature: 0.75,
    k: 0,
    stop_sequences: [],
    return_likelihoods: "NONE"
  }

  console.log(userMessage)

  try {
    const response = await fetch('https://api.cohere.ai/v1/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${COHERE_KEY}`
      },
      body: JSON.stringify(apiBody)
    })
    const data = await response.json()
    const returnData = data.generations[0].text
    console.log(returnData)

    return res.status(200).json({ data: returnData })
  } catch (error) {
    console.log(error)
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
}
