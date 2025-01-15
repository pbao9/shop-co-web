import React from 'react'
import { FaSearch } from 'react-icons/fa'
import SearchInput from '../Products/SearchInput'

const SearchModals = () => {
    return (
        <div>
            <button
                className="btn btn-ghost btn-circle"
                onClick={() =>
                    document.getElementById('search_modal').showModal()
                }
            >
                <FaSearch />
            </button>
            <dialog id="search_modal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl h-[50%]">
                    <SearchInput />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>Close</button>
                </form>
            </dialog>
        </div>
    )
}

export default SearchModals
