import Image from 'next/image'

interface MenuCardProps {
    imageSrc:string,
    title:string,
    description:string,
    price:string
}

const MenuCard = ({description ,imageSrc,title,price}:MenuCardProps) => {
  return (
      <div  className="flex items-center gap-4 border-b border-stone-800 border-dashed py-4 w-full ">

          <div className="w-20 h-20 relative shrink-0">
              <Image
                  src={imageSrc}
                  alt="Latte"
                  fill
                  className="rounded-lg object-cover"
              />
          </div>

          <div className="flex-1">
              <h1 className="font-semibold text-sm text-stone-800 tracking-wide">
                  {title}
              </h1>
              <p className="text-xs text-stone-500 tracking-wide">
                  {description}
              </p>
          </div>

          <div className="font-bold text-lg tracking-wide">
              {price}
          </div>

      </div>
  )
}

export default MenuCard