import React ,{useState }from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner" 
import axios from "axios"
import { useNavigate,useParams } from "react-router-dom"


const DeleteBooks = () => {
  const[loading,setLoading]=useState(false);
  const navigate=useNavigate(); 
  const {id}=useParams();
  const handleDeleteBook=()=>{
    setLoading(true);
    axios.delete(`http://localhost:8001/books/${id}`)
      .then(response => {
        setLoading(false);
        navigate('/');
      })
      .catch(error => {
        setLoading(false);
        console.error('Error deleting book:', error);
      });
  }
  return (
    <div>
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <div className="my-4">
          <p className="text-xl mr-4 text-gray-500">Are you sure you want to delete this book?</p>
        </div>
        <div className="my-4">
          <button onClick={handleDeleteBook} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete Book
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteBooks