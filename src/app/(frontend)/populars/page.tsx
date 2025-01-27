import Popular from '../popular/page'

export default function Populars() {
  return (
    <div className="flex px-14 gap-6">
      <div className="w-full self-center">
        <h1 className="text-[1.75rem]">Explore Our Most Popular Areas</h1>
        <p className="text-sm">See what these areas have to offer and buy your perfect home.</p>
      </div>
      <Popular />
      <Popular />
      <Popular />
      <Popular />
    </div>
  )
}
