import ExpensesImage from './../assets/expenses-screeshot.png'
import PokedexImage from './../assets/pokedexApp-screeshot.png'
import ShopImage from './../assets/shopApp-screeshot.png'

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
      'Shopping SPA with a home page and shopping cart capability. Keeping through the context hook the shopping cart items'
  },
  {
    title: 'PokedexApp',
    stack: ['React', 'PokeAPI', 'HTML', 'CSS', 'RESTAPI', 'JavaScript'],
    imageURL: PokedexImage,
    link: 'https://pokedex-react-pi.vercel.app/',
    github: 'https://github.com/ValentinGTrapaga/pokedex-react',
    summary:
      'PokedexApp to learn API calls and JSON handling. Possible improvements: Home with every pokemon and a route for each one to the stats, evolutions, abilities; animations with framer motion'
  },
  {
    title: 'Expenses chart',
    stack: ['React', 'CSS', 'HTML', 'JavaScript', 'Figma'],
    imageURL: ExpensesImage,
    link: 'https://expenses-chart-ten.vercel.app/',
    github: 'https://github.com/ValentinGTrapaga/expenses-chart',
    summary:
      'Frontend Mentor challenge to learn CSS designs and to copy from a Figma file'
  }
]
