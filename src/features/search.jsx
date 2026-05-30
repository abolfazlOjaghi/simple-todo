const Search = ({ value, change }) => {
    return (
        <input type="text" className="w-80 focus:outline-none border-2 rounded-xl font-semibold px-4 py-0.5 placeholder:text-gray-500 max-sm:w-64" placeholder="Search todos..." value={value} onChange={change}/>
    )
}
export default Search