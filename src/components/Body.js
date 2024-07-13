import{restraurantList} from '../constant'
import RestrauntCard from './RestrauntCard';
import {  useState ,  useEffect} from 'react';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom'
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';


// function filterData(searchText,restaurants){
//     const filterData = restaurants.filter((restaraunt)=>
//         restaraunt?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
//     );
//     return filterData;
// }
const Body=()=>{
    // const [restaurants,setRestaurants] = useState(restraurantList);
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    //empty dependency array => once after render
    //dep array [searchText] => once after render + everytime after change the searchText
    useEffect(()=>{
        //API Call
        getRestaurants();
    },[]);

    async function getRestaurants(){
        // try{
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            // if(!response.ok){
            //     throw new Error('Network response was not ok'+response.statusText);
            // }
                const json = await response.json();
                // console.log(json);
                //Optional Chaining
                setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // }

        // catch(error){
        //     console.error('There has been a problem with your fetch operation:', error);
        // }

    }


    const isOnline = useOnline();
    if(!isOnline){
        return <h1>Offline, Please check the internet connection!!</h1>
    }

    //not render component (Early return)
    if(!allRestaurants) return null;

    // if(filteredRestaurants?.length === 0)
    //     return <h1>No Restraunt match Filter!!</h1>;



    return (allRestaurants?.length === 0 )
    ? (<Shimmer/> ) : (
        <>
        
            <div className='search-container p-5 bg-pink-50 my-5 shadow-lg '>
                <input 
                    type='text'
                    className='search-input '
                    placeholder='Search'
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}

                />
                <button className='search-btn bg-purple-400 mx-5 text-black rounded-md hover:bg-gray-500 ' onClick={()=>{
                    
     
                            //need to filter the data
                            const data = filterData(searchText,allRestaurants);
                            //update the State - restaurant
                            setFilteredRestaurants(data); 

                
                    // if(searchText===""){
                    //     setRestaurants(restraurantList) 
                    // }    
                      
                }}> Search </button>
            </div>
            <div className='restaurant-list flex flex-wrap'>
                {filteredRestaurants.map((restaurant)=>{
                    return (
                        // <Link
                        // to={"/restaurant/"+restaurant.data.id}
                        // key={restaurant.data.id}>
                        // <RestrauntCard {...restaurant.info} key={restaurant.info.id}/>
                        // </Link>
                        
                        <RestrauntCard {...restaurant.info} key={restaurant.info.id}/>

                    );
                })}
    
            </div>
        </>    
    );
};
export default Body;