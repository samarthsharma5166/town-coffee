import Image from "next/image"
import MenuCard from "./MenuCard"
import { MenuItems } from "@/constants/constant"

const MenuList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-14 px-8 md:px-0">

        {
              MenuItems.map((item, index) => (
                <MenuCard 
                    key={index}
                    imageSrc={item.image}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                />
            ))
        }  
    </div>
  )
}

export default MenuList