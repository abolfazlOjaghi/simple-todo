import { useState, Activity } from "react"

const AddTodo = ({ closeModal, addTodo }) => {
    const [titleInputValue, setTitleInputValue] = useState("")
    const [error, setError] = useState(false)
    const [priority, setPriority] = useState("")
    const handleSendNewTodo = (e) => {
        if (titleInputValue.trim().length) {
            addTodo({id : crypto.randomUUID(), title : titleInputValue.trim(), isDone : false, priority : priority});
            setTitleInputValue(""); 
            setPriority("")
        } else {
            setError(true)
        }
    }
    const priorityButtons = [{name : "Important", defaultStyles : "border-red-600", inactiveStyles : "text-red-600", activeStyles : "text-white bg-red-600"}, {name : "Optional", defaultStyles : "border-emerald-500", inactiveStyles : "text-emerald-500", activeStyles : "text-white bg-emerald-500"}]
    return (
        <section className="bg-shadow">
            <div className="rounded-xl bg-white dark:bg-gray-800 dark:text-gray-50 px-6 py-4 space-y-8">
                <h4 className="text-lg font-semibold ">Add Todo</h4>
                <form action="" className="flex flex-col font-semibold gap-y-0.5">
                    <label htmlFor="title" className="ml-1.5">title</label>
                    <input type="text" placeholder="Enter title..." className="rounded-xl px-4 py-1 focus:outline-none border-2 w-80" value={titleInputValue} onChange={event => setTitleInputValue(event.target.value)}/>
                    <Activity mode={error ? "visible" : "hidden"}><p className="text-red-600 font-semibold">This field cannot be empty!</p></Activity>
                </form>
                <div className="space-y-2">
                    <h6>Priority</h6>
                    <div className="*:px-5 space-x-2 *:rounded-lg *:border-2 *:py-0.5 font-semibold *:transition-all">
                        
                        {
                            priorityButtons.map(button => {
                                return <button key={button.name} className={`${button.defaultStyles} ${priority === button.name ? button.activeStyles : button.inactiveStyles}`} name={button.name} onClick={e => priority !== e.target.name ? setPriority(e.target.name) : setPriority("")}>{button.name}</button>
                            })
                        }
                    </div>
                </div>
                <hr />
                <div className="*:w-full flex gap-x-2 *:rounded-lg *:py-0.5 font-semibold *:border-2 *:shadow-xl">
                    <button className="bg-blue-600 border-blue-600 text-white" onClick={handleSendNewTodo} >Add</button>
                    <button className="bg-white text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition-all dark:bg-gray-800" onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </section>
    )
}
export default AddTodo
// ``