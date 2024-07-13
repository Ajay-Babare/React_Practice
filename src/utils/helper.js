export function filterData(searchText,restaurants){
    const filterData = restaurants.filter((restaraunt)=>
        restaraunt?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}