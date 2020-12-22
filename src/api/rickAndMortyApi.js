import axios from 'axios';


export const fetchCharacterList = async (page, name, status, species, gender, sortOrder) => {
    let paramString  = '?';
    if(page){
        paramString = paramString.concat(`page=${page}&`);
    }
    if(name){
        paramString = paramString.concat(`name=${name}&`);
    }
    if(species){
        paramString = paramString.concat(`species=${species}&`);
    }
    if(gender){
        paramString = paramString.concat(`gender=${gender}&`);
    }
    if(status){
        paramString = paramString.concat(`status=${status}&`);
    }

    let response = {data:[]};
    let errorOccured = false;
    try{
        response = await axios.get(`https://rickandmortyapi.com/api/character${paramString}`);
    } catch(err){
        errorOccured = true;
        console.log(err);
    }
    
    // put check on API working or not in next iteration
    
    //sorting , by default we get data in ascending order from API
    console.log(response);
    //?gender=genderless&status=dead&species=human -> nothing here
    if(errorOccured){
        return response;
    }

    //filter by species because sending species=human also returns results for humanoid 

    if(sortOrder === "Descending"){
        response.data.results.reverse();
    }
    console.log(response.data.results);
    return response;
}

export const fetchSingleCharacter = async(id) => {
    let response = {data:[]};
    let errorOccured = false;
    try{
        response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    } catch(err){
        errorOccured = true;
        console.log(err);
    }
    console.log(response);
    if(errorOccured){
        return response;
    }
    return response;
}

export const fetchEpisodeData = async(url) => {
    let response = {data:[]};
    let errorOccured = false;
    try{
        response = await axios.get(url);
    } catch(err){
        errorOccured = true;
        console.log(err);
    }
    console.log(response);
    if(errorOccured){
        return response;
    }
    return response;
}