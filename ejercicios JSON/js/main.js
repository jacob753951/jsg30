const getAllUsers = async () => {
    let response = await fetch (
        "https://practicasjsgen30-default-rtdb.firebaseio.com/users/.json"
    )

    let data = await response.json();
    console.log(data)
}
