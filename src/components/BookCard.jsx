 
import EditSvg from "../assets/EditSvg";
import DeleteSvg from "../assets/DeleteSvg";
import useBookApis from "../services/useBookApis";
import { useNavigate } from "react-router-dom";

const BookCard = ({title,author,genre,year,isbn,image,id,open,setOpen,editMode,setEditMode}) => {
  const navigate= useNavigate();
    const {deleteBook,} = useBookApis();

console.log('editMode book card', editMode )


const handleEdit = () => {
  setEditMode({title,author,genre,year,isbn,image,id})
  setOpen(!open)
}
  return (
    <div className="max-w-[16rem] min-w-[16rem] border rounded-md shadow-lg   p-3" >
      <div className="">
        <div className="book-header">
          <h3 className="text-lg font-semibold text-center py-4 px-1">
            {title}
          </h3>
        </div>
        <div className="img w-full my-5 cursor-pointer transform transition duration-500 hover:scale-105" onClick={()=>navigate("/"+id)}>
          <img
            src={ image ||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9eztk2gCy55cY8-U1gp8nLCbSj0YV872mw&s"}
            className="mx-auto w-[90%] h-[300px] object-contain"
            alt=""
          />
        </div>
        <div className="infos text-gray-500 text-xs my-3 flex flex-col gap-2">
          <p className="">ISBN: {isbn}</p>
          <p className="">Year: {year}</p>
          <p className="">
          Genre: {genre}
          </p>
          <p className="">Author: {author}</p>
        </div>
        <div className="actions my-3 flex items-center gap-4 justify-center ">
          <span onClick={handleEdit} className="cursor-pointer hover:bg-green-100 active:bg-green-50 p-1 rounded-md">
            <EditSvg color="darkgreen" />
          </span>
          <span onClick={()=>deleteBook(id)} className="cursor-pointer  hover:bg-red-100 active:bg-red-50 p-1 rounded-md" >
            <DeleteSvg color="red"  />
          </span>
        </div>
              </div>
    </div>
  );
};

export default BookCard;
