
/**
 * 
 * @param {String|Number} id 
 */

export const deleteUserById = async(id) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
        
    return true;
}