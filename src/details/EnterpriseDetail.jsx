import React from 'react'

const detail = [
    {
        id:1,
        name:" Kushal Shrestha",
        title:"Foodmandu Enterprise Story: Pioneering Nepal’s Food Delivery Revolution",
        description:"Foodmandu didn’t simply arrive in Nepal; it blasted like a plate of freshly made momo into the hearts (and stomachs) of Kathmandu’s hungry masses. Imagine a young Manohar Adhikari, a software developer who loves a good meal, gazing at his lunch tray back in 2010. The same old dal bhat again? The same crowded streets to navigate […]",
        thumbnail:"https://realstorytime.com/wp-content/uploads/2025/03/Foodmandu-2.webp",
    },
    {
        id:2,
        name:"Kushal Shrestha",
        title:"An Enterprise Story of PayPal: Revolutionizing Digital Payments Worldwide",
        description:"PayPal’s enterprise story begins with a vision: to change how money moves and is used between people and entities. Before PayPal, Money was just tangible objects; coins, paper , later paper checks and money orders.  International payments would take forever rather than seconds, and it would be next to impossible for small businesses to accept […]",
        thumbnail:"https://realstorytime.com/wp-content/uploads/2025/03/PayPal-drops-after-cutting-forecast-on-spending-slowdown.webp",
    },
]

function EnterpriseDetail() {
  return (
    <section className="py-10 ">
    <div className="container">
      <h2>Startup Story</h2>

      {detail.map((a) => (
        <div className="row  border-bottom  py-5 det " key={a.id}>
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

export default EnterpriseDetail