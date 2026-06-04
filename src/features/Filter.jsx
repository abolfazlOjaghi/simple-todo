const Filter = ({ value, change }) => {
    const filterOptions = [{value : "-1", text : "All"}, {value : true, text : "completed"}, {value : false, text : "Active"}]
  return (
    <select
      name=""
      id=""
      className="focus:outline-none border-2 rounded-xl px-3 py-0.5 font-semibold max-sm:px-1"
      value={value}
      onChange={change}
    >
      {filterOptions.map((option) => {
        return <option value={option.value} key={option.value} className="dark:bg-gray-800 dark:text-white font-semibold">{option.text}</option>;
      })}
    </select>
  );
};
export default Filter