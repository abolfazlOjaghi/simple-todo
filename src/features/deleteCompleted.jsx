const DeleteCompleted = ({ closeModal, deleteAll }) => {
    return (
        <section className="bg-shadow ">
            <div className="bg-white rounded-xl space-y-5 px-6 py-8 dark:bg-gray-800 dark:text-gray-100">
                <h5 className="font-semibold text-lg">Are you sure you want to delete all completed todos ?</h5>
                <div className="w-full flex justify-between *:w-full px-4 *:rounded-lg *:py-0.5 *:border-2 *:font-semibold gap-x-3">
                    <button className="border-red-600 bg-red-600 text-white" onClick={deleteAll}>Delete</button>
                    <button className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all" onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </section>
    )
}
export default DeleteCompleted