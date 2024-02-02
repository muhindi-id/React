import React from 'react'

const ItemDetails = () => {
    const ItemDetails = () => {
        const { itemId } = useParams();
      
        const fetchItemDetails = async () => {
          const response = await fetch(your-api-endpoint/$,{itemId});
          const itemDetails = await response.json();
          return itemDetails
        }
      
     const [itemDetails, setItemDetails] = useState(null);
      
        useEffect(() => {
          fetchItemDetails().then((result) => setItemDetails(result));
        }, [itemId]);
      
        return (
          <div>
            {""}
            {itemDetails && (
              <div>
                <h2>{itemDetails.name}</h2>
                <p>{itemDetails.description}</p>
            
              </div>
            )}
          </div>
        );
      };
      
      const App = () => {
        return (
          <Router>
            <Switch>
              <Route path="/item/:itemId">
                <ItemDetails />
              </Route>
              <Route path="/">
                <PaginatedList />
              </Route>
            </Switch>
          </Router>
        );
      };
  return (
    <div>ItemDetails</div>
  )
}

export default ItemDetails