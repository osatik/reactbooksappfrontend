import { useState } from "react";
import useBookApis from "../services/useBookApis";
import { toastWarn } from "../helpers/toastify";

const Form = ({ open, setOpen, editMode, setEditMode }) => {
  const { createBook ,updateBook ,} = useBookApis();
console.log('editMode form', editMode)
  const [inputInfos, setInputInfos] = useState({
    title: editMode ? editMode?.title : "",
    author: editMode ? editMode?.author : "",
    isbn: editMode ? editMode?.isbn : "",
    genre: editMode ? editMode?.genre : "",
    year: editMode ? editMode?.year : "",
    image: editMode ? editMode?.image : "",
    // "title": "",
    // "author": "",
    // "isbn": "",
    // "genre": "",
    // "year": "",
    // "image": ""
  });
 

  const handleChange = (e) => {
    setInputInfos({
      ...inputInfos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
console.log('handle basi - > ',inputInfos);
    //field exist check
    if (
      !inputInfos.title ||
      !inputInfos.author ||
      !inputInfos.isbn ||
      !inputInfos.genre ||
      !inputInfos.year ||
      !inputInfos.image
    ) {
      toastWarn("All fields are mandatory!");
      return;
    }
    //year length check
    if (String(inputInfos.year).length !== 4) {
      toastWarn("Year should contain 4 character!");
      return;
    }

    //field lengths check
    if (inputInfos.title.length > 100 || inputInfos.author.length > 100) {
      toastWarn(
        "Title and Author's character number can't be longher than  100!"
      );
      return;
    }
    if (inputInfos.isbn.length > 50 || inputInfos.genre.length > 50) {
      toastWarn("ISBN and Genre's character number can't be longher than  50!");
      return;
    }
    editMode ? updateBook(editMode.id,inputInfos) : createBook(inputInfos);
    console.log(inputInfos);
    setInputInfos({
      title: "",
      author: "",
      isbn: "",
      genre: "",
      year: "",
      image: "",
    });
    setOpen(false);
    setEditMode(false);
  };

  return (
    <form className="max-w-sm mx-auto  w-full " onSubmit={handleSubmit}>
      <div className="mb-2  w-full">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-green-800 "
        >
          Book Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Title"
          required={true}
          value={inputInfos.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-green-800 "
        >
          Author
        </label>
        <input
          type="author"
          id="author"
          name="author"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Author"
          required={true}
          value={inputInfos.author}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="isbn"
          className="block mb-2 text-sm font-medium text-green-800 "
        >
          ISBN
        </label>
        <input
          type="isbn"
          id="isbn"
          name="isbn"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="ISBN"
          required={true}
          value={inputInfos.isbn}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="genre"
          className="block mb-2 text-sm font-medium text-green-800 "
        >
          Genre
        </label>
        <input
          type="genre"
          id="genre"
          name="genre"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Genre"
          required={true}
          value={inputInfos.genre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="year"
          className="block mb-2 text-sm font-medium text-green-800 "
        >
          Year
        </label>
        <input
          type="number"
          id="year"
          name="year"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Year"
          required={true}
          value={inputInfos.year}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-medium text-green-800 "
        >
          Image Url
        </label>
        <input
          type="url"
          id="image"
          name="image"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Image Url"
          required={true}
          value={inputInfos.image}
          onChange={handleChange}
        />
      </div>

      <div className="flex item-center justify-center gap-3 mt-5">
        <button
          type="submit"
          className="transition-all inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
        >
          {editMode ? "Update" : "Create"}
        </button>
        <button
          type="button"
          className="transition-all mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={()=>{ setOpen(false);setEditMode(false);}}
        >
          Cancel
        </button>
      </div>

      {/* <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Register new account
  </button>
  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Register new account
  </button> */}
    </form>
  );
};

export default Form;
