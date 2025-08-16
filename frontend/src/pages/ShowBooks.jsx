import React,{ useEffect,useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import{useParams} from 'react-router-dom'
import BackButton from '../components/BackButton'

const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8001/books/${id}`)
    .then((response) => {
      setBook(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching book:", error);
      setLoading(false);
    });

  },[id])
  return (
    <div className='p-4 '>
      <BackButton />
    <h1 className='text-3xl my-4'>Book Details</h1>
    {loading ? (
      <Spinner />
    ) : (
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>ID</span>
          <span>{book._id}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Title</span>
          <span>{book.title}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Author</span>
          <span>{book.author}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Published Year</span>
          <span>{book.publishedYear}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Created At</span>
          <span>{book.createdAt}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Updated At</span>
          <span>{book.updatedAt}</span>
        </div>
      </div>
    )}
      </div>
  )
}

export default ShowBooks;