 
const NewButton = ({open,setOpen}) => {
  return (
    <div className="text-end">
      <button className="bg-slate-600 text-white py-2 px-10 rounded-md hover:bg-slate-500 active:bg-slate-400 active:text-slate-100 transition-all" onClick={()=>setOpen(!open)}>
        Create new book
      </button>
    </div>
  );
};

export default NewButton;
