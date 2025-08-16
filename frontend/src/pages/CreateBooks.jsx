import React,{ useState } from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { useNavigate } from "react-router-dom"
import axios from "axios"


const CreateBooks = () => {
  const[title,setTitle]=useState('');
  const[author,setAuthor]=useState('');
  const[publishedYear,setPublishedYear]=useState('');
  const[loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishedYear
    };
    setLoading(true);
    axios.post('http://localhost:8001/books', data)
      .then(response => {
        setLoading(false);
        navigate('/');
      })
      .catch(error => {
        setLoading(false);
        console.error('Error creating book:', error);
      });
  }
  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Create New Book</h1>
      {loading ? <Spinner/>:''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
  <div className="my-4">
    <label className="text-xl mr-4 text-gray-500">Title</label>
    <input
      type="text"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      className="border-2 border-gray-300 px-4 w-full"
    />
  </div>
  <div className="my-4">
    <label className="text-xl mr-4 text-gray-500">Author</label>
    <input
      type="text"
      value={author}
      onChange={(e)=>setAuthor(e.target.value)}
      className="border-2 border-gray-300 px-4 w-full"
    />
  </div>
  <div className="my-4">
    <label className="text-xl mr-4 text-gray-500">Published Year</label>
    <input
      type="number"
      value={publishedYear}
      onChange={(e)=>setPublishedYear(e.target.value)}
      className="border-2 border-gray-300 px-4 w-full"
    />
  </div>
  <div className="my-4">
    <button onClick={handleSaveBook} className="bg-sky-500 text-white px-4 py-2 rounded">
      Save Book
    </button>
  </div>
</div>
        
      
    </div>
  )
}

export default CreateBooks