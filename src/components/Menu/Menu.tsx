import MenuList from './MenuList'
import Heading from '../Heading'

const Menu = () => {
  return (
    <div className='container mx-auto pb-20'>
        <Heading heading='Menu'/>
        <MenuList/>
        <button className='px-14 py-2.5 mt-10 mx-auto block rounded-md text-white bg-stone-700 hover:bg-stone-600'>View All</button>
    </div>
  )
}

export default Menu