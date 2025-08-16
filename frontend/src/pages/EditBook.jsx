import React,{ useState,useEffect } from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { useNavigate ,useParams} from "react-router-dom"
import axios from "axios"


const EditBooks = () => {
  const[title,setTitle]=useState('');
  const[author,setAuthor]=useState('');
  const[publishedYear,setPublishedYear]=useState('');
  const[loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const{id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8001/books/${id}`)
      .then(response => {
        const book = response.data;
        setTitle(book.title);
        setAuthor(book.author);
        setPublishedYear(book.publishedYear);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishedYear
    };
    setLoading(true);
    axios.put(`http://localhost:8001/books/${id}`, data)
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
      <h1 className="text-3xl my-4">Edit Book</h1>
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
    <button onClick={handleEditBook} className="bg-sky-500 text-white px-4 py-2 rounded">
      Save Book
    </button>
  </div>
</div>
        
      
    </div>
  )
}

export default EditBooks