const apiUrl = "https://vertexai.drcfs.org/hospitals";

const getData = async() => {
    try {
        const fetchData = await fetch(apiUrl);
        var data = await fetchData.json();

        // looping doctors data
        for(let i=0; i<=10; i++){
            console.log(data[i]);
            let htable =`
            <tr>
            <td>${i}</td>
            <td>${data[i].name}</td>
            <td>${data[i].address}</td>
            </tr>
            `;

        $("#tableBody").append(htable);
        // console.log(data[i].name);
        }
    } catch (error) {
        console.log(error);
    }
}

getData();
