
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({destination='/'}) => {
  return (
    <div>
      <Link to={destination} className='bg-sky-800 text-white py-1 px-4 rounded-lg w-fit flex items-center gap-2'>
  <BsArrowLeft className='text-2xl' />
</Link>
    </div>
  )
}

export default BackButton;