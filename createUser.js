function createUser(formData) {
    const user = {
        id: formData.get('name'),
        count: 0,
        completed: {},
    }; 
     
    return user;
}

export default createUser;
//TEST THIS PLEASE