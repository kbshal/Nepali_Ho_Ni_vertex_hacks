const apiUrl = "https://raw.githubusercontent.com/kbshal/EaseMed/main/backend_code/doctors_list/UpdatingDoctors.json";

const getData = async() => {
    try {
        const fetchData = await fetch(apiUrl);
        var data = await fetchData.json();

        // looping doctors data
        for(let i=0; i<=100; i++){
            let drCard =`
            <div class="doctor-card">
            <img src="../partials/images/doctor.webp" alt="doctor">
            <h4 class="name">${data[i].name}</h4>
            <span class="std" style="text-align:center;"><b>${data[i].description}</b></span><br>
            <span class="std">NMC: ${data[i].nmc}</span>
            <a href="mailto:neupanerijan6@gmail.com" class="contact">Contact</a>
            </div>
            `;
            
        // console.log(data[i].image);
        $("#doctor-container").append(drCard);
        }
    } catch (error) {
        console.log(error);
    }
}

getData();
