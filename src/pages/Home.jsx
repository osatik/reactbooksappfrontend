import  { useEffect, useState } from "react"; 
import NewButton from "../components/NewButton.jsx";
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";
import useBookApis from "../services/useBookApis";
import Modal from "../components/Modal.jsx";
import Spinner from "../components/Spinner.jsx";

const Home = () => {
const {books,loading} = useSelector(state=>state.bookStore)
console.log('books from home = ',books);
const {getBooks} = useBookApis();

useEffect(()=>{
    getBooks();
     // eslint-disable-next-line
},[])



//new book button modal
const [editMode,setEditMode] = useState(false)
const [open,setOpen] = useState(false)
console.log('editMode home', editMode);



  return (
    <div className="min-h-[100vh] bg-green-50">
      
      <div className="max-w-[1000px] mx-auto border py-10 px-3">
        <NewButton open={open} setOpen={setOpen} />
        {
          
          loading ? <Spinner />
          :
          <div className="book-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5 gap-2 place-items-center">
          
            {books?.map(book=> <BookCard key={book?.id} {...book} open={open} setOpen={setOpen} editMode={editMode} setEditMode={setEditMode}/>)}
            
            
        </div>
        }
        {open && <Modal open={open} setOpen={setOpen} editMode={editMode} setEditMode={setEditMode} />}

      </div>
    </div>
  );
};

export default Home;
