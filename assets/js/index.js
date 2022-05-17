
// import axios from 'axios';


document.addEventListener('DOMContentLoaded', () => {
    const addUser = document.querySelector('#add_user');
    // const updateUser = document.getElementById('update_user');
    const saveUser = document.getElementById('user');




    console.log(saveUser)


    async function master(){
  
        console.log("Button clicked")
    
        const username = document.querySelector("#name").value;
        const password = document.querySelector("#email").value;
        const gender = document.querySelector('#gender');
        const status = document.querySelector('#status');
    
        let results = {
            "username": username, 
            "password": password,
            "gender": gender,
            "status": status
        };
    
        console.log(results);
    
        const options = {
            url: `http://localhost:3500/api/users/${data.id}`,  
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(results)
        };
    
        //   const post = await axios.put(options);
        const post = await fetch('/', options);
      
      
    };



// updateUser.submit(function(event){
//     event.preventDefault();
    
//     console.log(updateUser)

//     // let unindexed_array = updateUser.serializeArray();
//     let unindexed_array = JSON.stringify(updateUser);
//     console.log(unindexed_array);
//     let data = {};

//     unindexed_array.map((n, i) => {
//         data[n['name']] = n['value'];
//     })

//     let request = {
//         "url": `http://localhost:3500/api/users/${data.id}`,
//         "method": "PUT",
//         "data": data
//     }

//     console.log(axios)

//     updateUser.ajax(request).done(function(response) {
//         alert('Data Updated Successfully');
//     })

// })

addUser.submit((event) => {
    alert('Data inserted successfully');
});



saveUser.addEventListener('submit', master);
console.log('hello wrld')

})