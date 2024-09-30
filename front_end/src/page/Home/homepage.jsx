import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Homepage = ({ products }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const itemsPerPage = 4 // Adjust this value as needed

  // Get the current page from URL params
  const queryParams = new URLSearchParams(location.search)
  const pageFromUrl = parseInt(queryParams.get('page') || '1', 10)

  const [currentPage, setCurrentPage] = useState(pageFromUrl)

  useEffect(() => {
    setFilteredData(products)
  }, [products])

  useEffect(() => {
    // Update URL when currentPage changes
    if (currentPage === 1) {
      navigate('', { replace: true })
    } else {
      navigate(`?page=${currentPage}`, { replace: true })
    }
  }, [currentPage, navigate])

  useEffect(() => {
    // Update currentPage when URL changes
    setCurrentPage(pageFromUrl)
  }, [pageFromUrl])

  const handleSearch = () => {
    const filtered = products.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredData(filtered)
    setCurrentPage(1)
  }

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l bg-gray-800 text-white"
        />
        <button
          onClick={handleSearch}
          className="bg-pink-500 text-white p-2 rounded-r hover:bg-pink-700 transition duration-300"
        >
          Tìm kiếm
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {currentItems.map((item) => (
          <div key={item._id} className="rounded-lg overflow-hidden shadow-lg">
            <Link to={`video/${item.slug}`}>
              <img className='w-full h-48 object-cover' src={item.image} alt={item.name} />
              <h1 className='text-xl p-2 truncate'>{item.name}</h1>
            </Link>
          </div>
        ))}
      </div>
      {filteredData.length === 0 && (
        <p className="text-center mt-4">Không tìm thấy video nào.</p>
      )}
      {filteredData.length > 0 && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === number
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Homepage