import React,{useState} from 'react'

const PaginatedList = () => {
    const PaginatedList = () => {
        const [data, setData] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 5;
      
        useEffect(() => {
          fetchData().then((result) => setData(result));
        }, [])
      
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
      
    
        const paginate = (pageNumber) => setCurrentPage(pageNumber);
      
        return (
          <div>
            {""}
            <div>
              {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
                <button key={index} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        );
      };
    
  return (
    <div>PaginatedList</div>
  )
}

export default PaginatedList