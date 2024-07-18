import React, { useEffect } from "react"; 
import Spinner from "../components/Spinner";
import { useParams,useNavigate } from "react-router-dom";
import useBookApis from "../services/useBookApis";
import { useSelector } from "react-redux";
import BookDetailCard from "../components/BookDetailCard";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOneBooks } = useBookApis();
  const {oneBook,loading} = useSelector(state=>state.bookStore);
console.log('loading=',loading)
  useEffect(() => {
    getOneBooks(id);
     // eslint-disable-next-line
  }, []);   

  return (
    <div className="min-h-[90vh] bg-slate-300 grid place-items-center">
     <button className="bg-blue-400 text-green-900 hover:bg-blue-500 hover:text-green-800 active:bg-blue-600 active:text-green-600 py-2 px-5 rounded-lg text-xl font-semibold transition-all" onClick={()=>navigate("/")}>Go Back</button>
     {
          
          loading ? <Spinner />
          :
      <BookDetailCard {...oneBook} />
     }
    </div>
  );
};

export default BookDetail;
