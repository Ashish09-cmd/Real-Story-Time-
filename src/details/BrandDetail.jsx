import React from 'react'

const detail = [
    {
        id:1 ,
        name:"Kushal Shrestha",
        title:"Trader Joe’s Brand Story : The Journey Behind the Beloved Grocery Chain",
        description:"Aren’t you excited to read about the enjoyable Trader Joe’s Brand Journey and discover the individual who influenced the brand’s name? Walking into a Trader Joe’s store, visitors can expect a magical experience because every aisle holds exotic goods with exciting international origins and proficient employees who treat customers with friendly, guide-like service. Customers discover […]",
        thumbnail:"https://realstorytime.com/wp-content/uploads/2025/03/Trader-Joes-Stamford.webp",
    },
    {
        id:2 ,
        name:"Anjana Chaudhary",
        title:"Airbnb brand evolution : How It Redefined Travel and Hospitality?",
        description:"Do you know about the evolution of the Airbnb brand? How did the founder develop the idea and succeed in so little time? Airbnb is a lesson in perseverance, determination, fear, and hustle. It is much more than a simple hospitality business: it started with two roommates who dared to start their quest with little […]",
        thumbnail:"https://realstorytime.com/wp-content/uploads/2025/03/Airbnb.webp",
    },
    {
        id:3 ,
        name:"Kushal Shrestha",
        title:"Wegmans Brand Story: Discover the Legacy of Quality & Innovation",
        description:"Do you wonder about Wegmans brand evolution and its journey from a humble produce cart to a nationally recognized grocery icon? Imagine a grocery store where shopping is a fun adventure and every trip looks like a party of the simple moments of life. It is not just a store out there; Wegmans is a […]",
        thumbnail:"https://realstorytime.com/wp-content/uploads/2025/03/Wegmans-in-Buffalo-New-York-McKinley-Parkway-1.webp",
    },
    {
        id:4 ,
        name:"Anjana Chaudhary",
        title:"Patel Brothers Success Story: The Rise of America’s Largest Indian Grocery Chain",
        description:"The Patel Brothers, America’s largest Indian grocery chain, has a vision, commitment, and togetherness. Their story starts with the yearning for home. It then soon grows into the development of a multi-million dollar empire, which carries Indian flavors to thousands of homes across America. Patel Brothers, founded in September 1974 by Mafat and Tulsi Patel, […]",
        thumbnail:"https://realstorytime.com/wp-content/uploads/2025/03/Patel-Brothers-Brand-Story-1.webp",
    },
    {
        id: 5,
        name:"Kushal Shrestha",
        title:"Tesla’s Brand Story: How Elon Musk’s Iconic Company Got Its Name?",
        description:"“Where did the name Tesla come from?” It prompts curiosity about a company that has changed the automotive and energy industries in its own right. Tesla has not simply become a name; it has become an honor to the one visionary whose idea electrified the world. Setting up an entire company, Tesla, in 2003 would […]",
        thumbnail:"https://realstorytime.com/wp-content/uploads/2025/03/How-Tesla-Got-its-name.webp",
    },

]

function BrandDetail() {
  return (
    <section className="py-10 ">
    <div className="container">
      <h2>Brand Story</h2>

      {detail.map((a) => (
        <div className="row  border-bottom  py-5 det" key={a.id}>
          <div className="col-lg-3 position-relative  ">
            <img
              className="img-fluid rounded-2 "
              src={a.thumbnail}
              alt=""
            />
          </div>
          <div className="col-lg-9 ">
            <h5>{a.title}</h5>
            <h6  className="text-uppercase">
              <span className="text-brown">BY</span>  {a.name}
             
            </h6>
            <p>
              {a.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default BrandDetail