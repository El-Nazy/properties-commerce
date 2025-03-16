import Image from 'next/image'
import Link from 'next/link'

export default function ResidentialCard({
  src,
  numberOfProperties = 12,
  propertyType: cityName,
  link,
}) {
  return (
    <Link href={link || '/'}>
      <div className="relative w-80 h-80">
        <Image src={src} alt="House" width={300} height={400} className="rounded-md w-80 h-80" />
        <div className="absolute w-80 h-80 bg-gray-900 opacity-40 top-0 rounded-md hover:opacity-0"></div>
        <div className="absolute top-8 left-8 text-white text-[12px]">
          <p className="">{numberOfProperties} Properties</p>
          <p className="text-[20px]">{cityName || 'Ikate'}</p>
        </div>
        <div className="absolute bottom-8 left-8 text-white text-[12px]">
          <p>MORE DETAILS</p>
        </div>
      </div>
    </Link>
  )
}
