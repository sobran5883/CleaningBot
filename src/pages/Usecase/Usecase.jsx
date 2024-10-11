const usecases=[
    {
        title:"Healthcare Facilities (Hospitals, Clinics, Nursing Homes):",
        discription1:"Room and Equipment Sanitization: Regularly cleans and disinfects patient rooms, operation theaters, and medical equipment, maintaining a sterile environment and reducing hospital-acquired infections.",
        discription2:"High-Traffic Area Maintenance: Keeps corridors, lobbies, and waiting areas clean, especially during peak hours, to ensure a safe and hygienic space for both patients and healthcare workers."
    },
    {
        title:"Hospitality Industry (Hotels, Resorts)",
        discription1:"Guest Room Cleaning: Automatically cleans guest rooms after check-out, using advanced sterilization techniques such as UV-C light to maintain high hygiene standards.",
        discription2:"Public Area Sanitization: Ensures continuous cleanliness in lobbies, gyms, pools, and dining areas, contributing to a healthier and more pleasant environment for guests."
    },
    {
        title:"Financial Services (Banks, Offices)",
        discription1:"Workspace and ATM Sanitation: Keeps teller counters, ATMs, and other customer interaction areas sanitized, reducing the spread of germs and enhancing customer safety.",
        discription2:"Office Cleaning: Performs routine cleaning of workspaces, conference rooms, and break areas to provide a cleaner working environment for employees.",
    },
    {
        title:"Entertainment Venues (Theaters, Stadiums, Amusement Parks)",
        discription1:"Seating and Common Area Disinfection: Ensures that seating areas, restrooms, and concession stands are regularly cleaned and sanitized, promoting a safer experience for visitors.",
        discription2:"Play and Activity Area Sanitization: In amusement parks, the robot can sanitize high-touch surfaces like ride seats, handles, and interactive areas, reducing the risk of contamination."
    },
    {
        title:"Retail Stores (Malls, Supermarkets)",
        discription1:"Aisle and Checkout Area Cleaning: Keeps store aisles, checkout counters, and cart storage areas clean, ensuring a safer shopping experience for customers.",
        discription2:"Restroom and Fitting Room Sanitization: Maintains the cleanliness of restrooms and fitting rooms, which are high-touch areas that require frequent disinfecting to prevent the spread of germs.",
    },
    {
        title:"Transportation Hubs (Airports, Train Stations)",
        discription1:"Terminal and Gate Area Disinfection: Routinely cleans waiting areas, ticket counters, and gates, maintaining hygiene in areas with high foot traffic.",
        discription2:"Restroom Cleaning: Ensures restrooms are frequently sanitized and restocked with necessary supplies, promoting a more comfortable and safer environment for travelers.",
    },
    {
        title:"Corporate Offices (Headquarters, Co-Working Spaces)",
        discription1:"Meeting Room and Workstation Cleaning: Regularly cleans and disinfects meeting rooms, workstations, and shared spaces, contributing to a healthier office environment.",
        discription2:"Kitchen and Break Area Sanitization: Keeps employee break areas, kitchens, and coffee stations clean, reducing the spread of bacteria and creating a more pleasant space for breaks.",
    },
    {
        title:"Educational Institutions (Universities, Schools, Libraries)",
        discription1:"Classroom and Lab Cleaning: Maintains cleanliness in classrooms, laboratories, and libraries, ensuring students and staff have a safe environment for learning.",
        discription2:"Cafeteria and Common Area Sanitization: Keeps high-traffic areas like cafeterias, study halls, and auditoriums sanitized, reducing the risk of infection in shared spaces.",
    },
]

const Usecase=()=> {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-10/12 my-28 flex flex-col items-center justify-center'>
            {usecases.map((usecase)=>(
                <div className='w-full my-4'>
                    <h1 className=' text-base md:text-2xl my-2 underline text-red-800'>{usecase.title}</h1>
                    <ul className="list-disc ml-4">
                        <li className='text-sm md:text-lg font-medium'>{usecase.discription1}</li>
                        <li className='text-sm md:text-lg font-medium'>{usecase.discription2}</li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Usecase;