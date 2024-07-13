import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
// import About from './components/About';
import Contact from './components/contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
// import Instamart from "./components/Instamart";

//chunking
//Code spiliting
//dynamic bundling
//lazy loading
//on demand loading
//dynamic loading
// dynamic iport

const Instamart = lazy(() => import("./components/Instamart"));
//Upon On demand Loading -> upon render -> suspend loading

//keep after import 
const About = lazy(()=> import("./components/About"));

// const Title =() =>{
//    return( <>
//     <a href="/">
//     <img 
//         className='logo'
//         src="https://penji.co/wp-content/uploads/2024/01/5.-Food-Panda.jpg" 
//         alt="logo" />
//     </a>
//     </>
//     );
// };
// const HeaderComponent=()=>{
//     return(
//         <div className='header'>
//             <Title/>
//             <div className="nav-items" > 
//                 <ul>
//                     <li>Home</li>    
//                     <li>About </li>    
//                     <li>Contact </li>    
//                     <li>Cart</li>    
//                 </ul>
//             </div>   
//         </div>
//     );
// };

// const restraurantList=[
//     {
//         "info": {
//           "id": "9864",
//           "name": "Pizza Hut",
//           "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//           "locality": "Kurla West",
//           "areaName": "Phoenix Market City",
//           "costForTwo": "₹300 for two",
//           "cuisines": [
//             "Pizzas","Americans"
//           ],
//           "avgRating": 3.9,
//           "parentId": "721",
//           "avgRatingString": "3.9",
//           "totalRatingsString": "5K+",
//           "sla": {
//             "deliveryTime": 54,
//             "lastMileTravel": 2.9,
//             "serviceability": "SERVICEABLE",
//             "slaString": "50-55 mins",
//             "lastMileTravelString": "2.9 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-07-07 23:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "Delivery!",
//                       "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹189"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },

//     },
//     {
//         "info": {
//           "id": "28405",
//           "name": "Chinese Wok",
//           "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//           "locality": "CST Road",
//           "areaName": "Santacruz East",
//           "costForTwo": "₹250 for two",
//           "cuisines": [
//             "Chinese",
//             "Asian",
//             "Tibetan",
//             "Desserts"
//           ],
//           "avgRating": 4.3,
//           "parentId": "61955",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "10K+",
//           "sla": {
//             "deliveryTime": 28,
//             "lastMileTravel": 2.8,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "2.8 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-07-08 01:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Rxawards/_CATEGORY-Chinese.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "Delivery!",
//                       "imageId": "Rxawards/_CATEGORY-Chinese.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹199"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
          
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/chinese-wok-cst-road-santacruz-east-mumbai-28405",
//           "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//           "id": "448491",
//           "name": "UBQ BY Barbeque Nation",
//           "cloudinaryImageId": "e2ej0ob56z47oylq9mkb",
//           "locality": "Kalina",
//           "areaName": "Bandra East",
//           "costForTwo": "₹300 for two",
//           "cuisines": [
//             "North Indian",
//             "Barbecue",
//             "Biryani",
//             "Kebabs",
//             "Mughlai",
//             "Desserts"
//           ],
//           "avgRating": 3.9,
//           "parentId": "10804",
//           "avgRatingString": "3.9",
//           "totalRatingsString": "500+",
//           "sla": {
//             "deliveryTime": 28,
//             "lastMileTravel": 2.2,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "2.2 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-07-07 23:30:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "60% OFF",
//             "subHeader": "UPTO ₹120"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
          
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-kalina-bandra-east-mumbai-448491",
//           "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//           "id": "19451",
//           "name": "Havmor Havfunn Ice Cream",
//           "cloudinaryImageId": "49845b494b1e637209b7bd1c7ca184ad",
//           "locality": "Chembur",
//           "areaName": "Chembur",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Ice Cream",
//             "Ice Cream Cakes",
//             "Desserts",
//             "Beverages"
//           ],
//           "avgRating": 4.5,
//           "parentId": "94570",
//           "avgRatingString": "4.5",
//           "totalRatingsString": "5K+",
//           "sla": {
//             "deliveryTime": 33,
//             "lastMileTravel": 6.6,
//             "serviceability": "SERVICEABLE",
//             "slaString": "30-35 mins",
//             "lastMileTravelString": "6.6 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-07-07 23:59:00",
//             "opened": true
//           },
//           "badges": {
//             "textExtendedBadges": [
//               {
//                 "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
//                 "shortDescription": "Perfect cake delivery",
//                 "fontColor": "#7E808C"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "",
//                       "fontColor": "#7E808C",
//                       "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
//                       "shortDescription": "Perfect cake delivery"
//                     }
//                   }
//                 ]
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "₹100 OFF",
//             "subHeader": "ABOVE ₹299",
//             "discountTag": "FLAT DEAL"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
          
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/havmor-havfunn-ice-cream-chembur-mumbai-19451",
//           "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//           "id": "243517",
//           "name": "KFC",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_243517.JPG",
//           "locality": "Kurla East",
//           "areaName": "Saki Naka",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Burgers",
//             "Fast Food",
//             "Rolls & Wraps"
//           ],
//           "avgRating": 4,
//           "parentId": "547",
//           "avgRatingString": "4.0",
//           "totalRatingsString": "1K+",
//           "sla": {
//             "deliveryTime": 46,
//             "lastMileTravel": 2.9,
//             "serviceability": "SERVICEABLE",
//             "slaString": "45-50 mins",
//             "lastMileTravelString": "2.9 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-07-07 23:00:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "40% OFF",
//             "subHeader": "UPTO ₹80"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
          
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/kfc-kurla-east-saki-naka-mumbai-243517",
//           "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//           "id": "9864",
//           "name": "Pizza Hut",
//           "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//           "locality": "Kurla West",
//           "areaName": "Phoenix Market City",
//           "costForTwo": "₹300 for two",
//           "cuisines": [
//             "Pizzas","Americans"
//           ],
//           "avgRating": 3.9,
//           "parentId": "721",
//           "avgRatingString": "3.9",
//           "totalRatingsString": "5K+",
//           "sla": {
//             "deliveryTime": 54,
//             "lastMileTravel": 2.9,
//             "serviceability": "SERVICEABLE",
//             "slaString": "50-55 mins",
//             "lastMileTravelString": "2.9 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-07-07 23:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "Delivery!",
//                       "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹189"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },

//     }
      
// ];

// const burgerKing={
//     name:"Burger King",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_78036.JPG",
//     cusines:["Burger","American"],
//     rating: "4.2"
// }
// const RestrauntCard=({name,cloudinaryImageId,cuisines,avgRating,sla})=>{
//     return(
//         <div className="card">
//             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
//             <h2>{name}</h2>
//             <h3>{cuisines.join(", ")}</h3>
//             <h4>{avgRating} stars</h4>
//             <h4>{sla.lastMileTravelString} minutes</h4>
//         </div>
//     );
// };

// const Body=()=>{
//     return(
//             <div className='restaurant-list'>

//                 {restraurantList.map((restaurant)=>{
//                     return <RestrauntCard {...restaurant.info} key={restaurant.info.id}/>
//                 })}

//                 {/* 
//                 <RestrauntCard {...restraurantList[0].info}/>
//                 <RestrauntCard {...restraurantList[1].info}/>
//                 <RestrauntCard {...restraurantList[2].info}/>
//                 <RestrauntCard {...restraurantList[3].info}/>
//                 <RestrauntCard {...restraurantList[4].info}/> 
//                 */}
                
//             </div>
//     );
// };

// const Footer=()=>{
//     return(
//         <h4>Footer</h4>
//     );
// };

const Layout =()=>{
    return(
        <>

            {/*
            Header
                -logo
                -Nav Items
                -Cart
            Body
                -search Bar
                -Restrarunt list
                    -RestraruntCard
                        -Image
                        -Name
                        -Rating
                        -Cusines
            Footer
                -links
                -copyright
            */}
            <Header/>
            {/* <Body/> */}
            <Outlet/>
            <Footer/>
        </>
    );
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element :<Layout/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"about", //
                element:(
                <Suspense fallback={<h1>Loading...</h1>}>
                    <About/>
                </Suspense>),
                children: [
                    {
                        path:"profile",//parent/{path} ==> localhost:1234/about/profile
                        element: <Profile/>
                    }
                ]
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            },
            {
                path:"/instamart",
                element:(
                    <Suspense fallback={<Shimmer/>}>
                        <Instamart />
                    </Suspense>
                ),
            },
        ],
    },
]);


const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Layout/>);

root.render(<RouterProvider router={appRouter}/>);
































//React Component
//Functional Component -New-I'll use most of the time
//Name of the component start with capital letter - it's not mandatory

// const HeaderComponent=()=>{
//     return(
//         <div>
//             <h1 id="head" key="header">Header Functional Component</h1>
//         </div>
//     );
// };

//React.cereateElement => Object => HTML(DOM) 

// const heading2=React.createElement("h1",{
//     id:"title2",
//     key:"head2"
// },
// "Heading2"
// );

//JSX=>React.createElement =>  Object => HTML(DOM)

// const heading1=(
//     <div key="head1">
//         {/* {HeaderComponent()}  */}
//         <HeaderComponent/>
//         <h1 id="title1" key="h2">
//             Heading 1
//         </h1>
//     </div>
// );



// const container=React.createElement("div",{
//     id:"container",
//     key:"contain"
// },
// [heading1,heading2]
// );

// console.log(heading1);

// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Layout/>);


// root.render(<HeaderComponent/>);
// console.log(container);