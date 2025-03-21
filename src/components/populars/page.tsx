import Popular from '../popular/page'

export default function Populars({
  propertiesAreasCards,
}: {
  propertiesAreasCards: {
    numberOfProperties: number
    name: string
    img: string
    id: string
    cityId: string
  }[]
}) {
  return (
    <div className="flex max-md:flex-wrap px-14 gap-6">
      <div className="w-full self-center">
        <h1 className="text-[1.75rem]">Explore Our Most Popular Areas</h1>
        <p className="text-sm">See what these areas have to offer and buy your perfect home.</p>
      </div>
      {propertiesAreasCards.map((v, i) => (
        <Popular
          src={v.img}
          numberOfProperties={v.numberOfProperties}
          propertyLocation={v.name}
          link={`/search?title=Properties at ${v.name}&area=${v.id}&city=${v.cityId}`}
          key={i}
        />
      ))}
      {/* <Popular
        src="/home/Fully-detached-3.jpg"
        numberOfProperties="12 Properties"
        propertyLocation="Lekki Phase 1"
        link="/"
      />
      <Popular
        src="/home/Fully-detached-3.jpg"
        numberOfProperties="12 Properties"
        propertyLocation="Lekki Phase 1"
        link="/"
      />
      <Popular
        src="/home/Fully-detached-3.jpg"
        numberOfProperties="12 Properties"
        propertyLocation="Lekki Phase 1"
        link="/"
      />
      <Popular
        src="/home/Fully-detached-3.jpg"
        numberOfProperties="12 Properties"
        propertyLocation="Lekki Phase 1"
        link="/"
      /> */}
    </div>
  )
}
