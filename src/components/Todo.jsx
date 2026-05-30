import { Trash2, CheckCheck } from "lucide-react"
const Todo = ({ id, title, isDone, onDelete, onDone, priority }) => {
    const priorityTextStyle = priority === "Important" ? "text-red-600" : "text-emerald-500"
    return (
        <div className="lg:w-250 bg-white px-8 max-sm:px-3 py-2 rounded-lg sm:text-lg font-semibold flex justify-between items-center dark:bg-gray-800 shadow-2xl hover:shadow-lg dark:shadow-gray-800 duration-600 md:w-180 sm:w-155 max-sm:w-screen">
            <p>{title}</p>
            <p className={priorityTextStyle}>{priority}</p>
            <div className="flex gap-x-2 items-center">
                {isDone ? <div className="bg-blue-600 text-white font-semibold rounded-xl px-3 py-0.5 text-[1rem] max-sm:text-sm max-sm:px-1.5 max-sm:rounded-lg">Completed</div> : <CheckCheck className="text-emerald-500" onClick={() => onDone(id)}/>}
                <Trash2 className="text-red-500" onClick={() => onDelete(id)}/>
            </div>
        </div>
    )
}
export default Todo