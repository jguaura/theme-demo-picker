function Nav() {
  return (
    <div className="flex items-center justify-between h-[80px] px-[50px] bg-gray-100 shadow-xl">
      <div className="h-[50px] w-[152px] bg-skin-logo"></div>
      <div className="flex gap-x-4 text-skin-primary font-semibold text-base"> 
        <div className="p-1 rounded-sm transition cursor-pointer hover:bg-skin-accent hover:text-white">nav item 1</div>
        <div className="p-1 rounded-sm transition cursor-pointer hover:bg-skin-accent hover:text-white">nav item 2</div>
        <div className="p-1 rounded-sm transition cursor-pointer hover:bg-skin-accent hover:text-white">nav item 3</div>
      </div>
    </div>
  )
}
export default Nav
