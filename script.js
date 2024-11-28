let profileCardData = [
    {
      name: "Bob",
      job: "teacher",
      age: 35,
      location: "New York",
    },
    {
      name: "Clark",
      job: "lawyer",
      age: 40,
      location: "Los Angeles",
    },
    {
      name: "Evelina",
      job: "doctor",
      age: 29,
      location: "Chicago",
    },
    {
      name: "Francesca",
      job: "lawyer",
      age: 33,
      location: "Miami",
    },
    {
      name: "Anna",
      job: "doctor",
      age: 28,
      location: "Boston",
    },
  ];



const profileCardFilterJobs = () => {
    let selectedJobs = [];
    let profileCardJobBox = document.querySelectorAll("input[type='checkbox'][name='occupation']:checked");

    profileCardJobBox.forEach(box => {
        selectedJobs.push(box.value);
    })

    let filteredArray = profileCardData.filter(item => selectedJobs.includes(item.job));

    document.querySelector("#profileCardResults").innerHTML = "";
    filteredArray.forEach(item => {
        let jobLi = document.createElement("li");
        jobLi.innerText = " Namn: " + item.name +" Titel: "+ item.job +" Ålder: "+ item.age +" Stad: "+ item.location;

        document.querySelector("#profileCardResults").append(jobLi);
    })


    

}

let profileCardJobBox = document.querySelectorAll("input[type='checkbox'][name='occupation']");


profileCardJobBox.forEach(box => {
    box.addEventListener("click", profileCardFilterJobs);
})



