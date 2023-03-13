import ExpensesImage from './../assets/expenses-screenshot.png'
import PokedexImage from './../assets/pokedex.gif'
import ShopImage from './../assets/shop.gif'

export const projects = [
  {
    title: 'ShopApp',
    stack: [
      'React',
      'ReactRouter',
      'HTML',
      'CSS',
      'Context API',
      'RESTAPI',
      'JavaScript',
      'Figma'
    ],
    imageURL: ShopImage,
    link: 'https://shop-top-rose.vercel.app/',
    github: 'https://github.com/ValentinGTrapaga/shop-TOP',
    summary:
      'The Shopping Application is an e-commerce solution that features a Home Page with a collection of products and a Shopping Cart capability. The application uses Context Hook to maintain and update the shopping cart items dynamically, providing users with a smooth and seamless shopping experience'
  },
  {
    title: 'PokedexApp',
    stack: [
      'React',
      'PokeAPI',
      'HTML',
      'Tailwind CSS',
      'RESTAPI',
      'JavaScript'
    ],
    imageURL: PokedexImage,
    link: 'https://pokedex-nextjs-valentingtrapaga.vercel.app/',
    github: 'https://github.com/ValentinGTrapaga/pokedex-nextjs',
    summary:
      'PokedexApp to learn API calls, JSON handling, pagination. Made with Tailwind CSS and NextJS. This project was particularly difficult because of the rendering of the evolution chain, since it was an evolution inside another with its details in it. I am particularly proud of the function made to fetch and format the data'
  },
  {
    title: 'Expenses chart',
    stack: ['React', 'CSS', 'HTML', 'JavaScript', 'Figma'],
    imageURL: ExpensesImage,
    link: 'https://expenses-chart-ten.vercel.app/',
    github: 'https://github.com/ValentinGTrapaga/expenses-chart',
    summary:
      'Frontend Mentor challenge to learn CSS designs and to copy from a Figma file.'
  }
]
