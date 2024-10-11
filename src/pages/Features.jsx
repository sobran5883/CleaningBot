const features = [
    {
        title: "Smart Navigation and Obstacle Avoidance",
        discription1: "AI-Driven Path Planning: Using AI algorithms such as reinforcement learning or neural networks, the robot can learn optimal cleaning paths over time, maximizing coverage and efficiency based on historical data of frequently used areas.",
        discription2: "Dynamic Obstacle Detection and Avoidance: Leveraging computer vision and AI-powered sensors, the robot can identify and avoid obstacles in real-time, adjusting its route dynamically to clean around objects, people, and other obstacles in busy environments."
    },
    {
        title: "Intelligent Surface Recognition and Adaptive Cleaning",
        discription1: "Surface Type Detection: Using image recognition, the robot can distinguish between various surfaces (e.g., tile, carpet, hardwood) and adjust its cleaning approach accordingly, such as switching between vacuuming and mopping.",
        discription2: "Dirt and Spill Detection: AI-powered cameras and sensors can detect specific dirty areas or spills, allowing the robot to target these spots with intensified cleaning. It could prioritize areas that need extra attention, improving cleaning effectiveness."
    },
    {
        title: "Predictive Maintenance and Self-Monitoring",
        discription1: "Health Monitoring: AI algorithms can continuously monitor the robot's internal components, such as motor health, battery status, and sensor functionality, predicting when maintenance is required. This ensures continuous operation with minimal downtime.",
        discription2: "Component Lifespan Prediction: AI can track wear and tear on key components, like brushes and filters, by analyzing usage patterns and alerting maintenance personnel when replacements are needed, optimizing maintenance schedules."
    },
    {
        title: "Intelligent Scheduling and Task Optimization",
        discription1: "Cleaning Task Scheduling: AI can determine the optimal times for cleaning based on data collected from different times of day and foot traffic patterns. For example, it could clean busy areas like lobbies during off-hours to minimize disruption.",
        discription2: "Prioritization of High-Traffic Areas: By analyzing foot traffic and usage data, AI can prioritize cleaning in high-traffic zones (such as waiting areas in hospitals or aisles in supermarkets) to ensure these areas are consistently sanitized."
    },
    {
        title: "Environmental Mapping and SLAM (Simultaneous Localization and Mapping)",
        discription1: "AI-Enhanced Mapping: Using AI-based SLAM, the robot can create detailed maps of its environment, allowing it to recognize and remember specific rooms and areas for efficient cleaning.",
        discription2: "3D Vision and Depth Mapping: With AI-enabled 3D vision (such as with VSLAM), the robot can understand spatial depth, making it easier to navigate complex environments with multiple levels and obstacles."
    },
    {
        title: "Data Analysis and Continuous Improvement",
        discription1: "Cleaning Efficiency Analytics: The robot can collect data on how long certain tasks take, areas frequently requiring cleaning, and high-traffic zones. AI can then analyze this data to continually improve its cleaning routines and strategies.",
        discription2: "Environmental and Path Data Collection: By continuously collecting data on its routes and encountered obstacles, AI can analyze this information to make the robot more efficient, reducing time and energy spent on repetitive tasks."
    },
    {
        title: "Voice Recognition and Interaction",
        discription1: "AI-Driven Voice Commands: The robot could respond to simple voice commands from staff members, allowing for hands-free control. This can be helpful in busy areas like hospitals or hotels, where staff can quickly direct the robot to a task.",
        discription2: "Basic Interaction for Status Updates: The robot can provide real-time updates via voice or display screens, letting staff know when a task is complete or if it encounters an issue, making its operation more transparent and interactive."
    },
    {
        title: "Object Recognition and Specialized Cleaning",
        discription1: "Trash Detection: AI can help the robot recognize items like trash or spills that need immediate attention, allowing it to initiate specific cleaning protocols for those situations.",
        discription2: "Autonomous Docking and Charging: Using AI-based image recognition, the robot can locate and return to its charging station when its battery is low, or when it needs to empty waste, ensuring continuous operation without human intervention."
    }
];


const Features=()=> {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-10/12 my-28 flex flex-col items-center justify-center'>
            {features.map((feature)=>(
                <div className='w-full my-4'>
                    <h1 className=' text-base md:text-2xl my-2 underline text-red-800'>{feature.title}</h1>
                    <ul className="list-disc ml-4">
                        <li className='text-sm md:text-lg font-medium'>{feature.discription1}</li>
                        <li className='text-sm md:text-lg font-medium'>{feature.discription2}</li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features;