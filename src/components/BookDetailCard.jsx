
  

const BookDetailCard = ({ title, author, genre, year, isbn, image, id }) => {
  

  return (
    <div className="max-w-[16rem] min-w-[16rem] border rounded-md shadow-lg   p-3 me-3">
      <div className="">
        <div className="book-header">
          <h3 className="text-lg font-semibold text-center py-4 px-1">
            {title}
          </h3>
        </div>
        <div
          className="img w-full my-5 cursor-pointer transform transition duration-500 hover:scale-105" 
        >
          <img
            src={
              image ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9eztk2gCy55cY8-U1gp8nLCbSj0YV872mw&s"
            }
            className="mx-auto w-[90%] h-[300px] object-contain "
            alt=""
          />
        </div>
        <div className="infos text-gray-500 text-xs my-3 flex flex-col gap-2">
          <p className="">ISBN: {isbn}</p>
          <p className="">Year: {year}</p>
          <p className="">Genre: {genre}</p>
          <p className="">Author: {author}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailCard;
