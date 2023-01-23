const apiUrl = "https://vertexai.drcfs.org/hospitals";

// const getData = async () => {
//     try {
//         const fetchData = await fetch(apiUrl);
//         var data = await fetchData.json();

//         // looping doctors data
//         for (let i = 0; i <= 10; i++) {
//             console.log(data);
//             let htable = `
//             <tr>
//             <td>${i}</td>
//             <td>${data[i].name}</td>
//             <td>${data[i].address}</td>
//             </tr>
//             `;


const getData = async() => {
    try {
        const fetchData = await fetch(apiUrl);
        var data = await fetchData.json();

        // looping doctors data

        
        for(let i=1; i<=70; i++){
            // processing address to skip repetaion
            let address = data[i].address;
        
            let drCard =`
            <tr>
            <td>${i}</td>
            <td>${data[i].name}</td>
            <td>${data[i].address.split(" ")[0].split(",")[0]}</td>
            </tr>
            `;

            $("#tableBody").append(drCard);
            // console.log(data[i]);
        }
    } catch (error) {
        console.log(error);
    }
}

getData();
