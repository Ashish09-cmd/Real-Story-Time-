import React from "react";

const detail = [
  {
    id: 1,
    name: " Anjana Chaudhary",
    thumbnail:
      "https://realstorytime.com/wp-content/uploads/2025/03/Bhavish-Aggaarwal-_Krutrim-AI_.webp",
    description:
      "Krutrim AI was established in 2023, and its name originated from the Sanskrit word for “artificial.” It is India’s first $1B AI startup, founded by Bhavish Aggarwal, and is well-known for establishing Ola, a leading mobility platform. While global AI giants dominate with English-centric models, Krutrim is pioneering indigenous, culturally contextual AI systems designed to […]",
    title:
      "Krutrim: India’s First $1B AI Startup & Bhavish Aggarwal’s $50M Breakthrough",
  },
  {
    id: 2,
    name: " Kushal Shrestha",
    thumbnail:
      "https://realstorytime.com/wp-content/uploads/2025/03/Ramp-Startup-Success-Fintech-Leader-Soars-to-_13B-Valuation-in-Share-Sale.webp",
    description:
      " startup Journey has emerged as a powerhouse in the financial technology industry by bringing artificial intelligence (AI) to corporate finance through its expense management and payment solutions. Founded in 2019 by Eric Glyman (CEO) and Karim Atiyeh, the New York-based company has established its presence in technology and finance to help businesses lower expenses […]",
    title:
      "Ramp Startup Journey: Fintech Firm Hits $13B Valuation in Share Sale",
  },
  {
    id: 3,
    name: " Kushal Shrestha",
    thumbnail:
      "https://realstorytime.com/wp-content/uploads/2025/03/Ashia-Lewis-Livaudais-1.jpg",
    description:
      "The scientific research industry is changing direction because it uses modern technology and AI capabilities. SymbyAI is a leader among startups developing an AI-powered SaaS platform that optimizes research task management. SymbyAI raised $2.1M in seed funding, which enabled the development of its platform and ultimately enhanced research process efficiency and accessibility. Drive Capital and […]",
    title:
      "Startup Story: SymbyAI Raised $2.1M in Seed to Simplify Scientific Research",
  },
  {
    id: 4,
    name: " Kushal Shrestha",
    thumbnail:
      "https://realstorytime.com/wp-content/uploads/2025/03/OpenAI-Success-Story.webp",
    description:
      "The OpenAI Startup Journey to Success Story did not start with a bang but with a burning question: What if artificial intelligence could uplift humanity instead of outsmarting it? Imagine a few idealists in 2015, working out of an anonymous office, laptops, and whiteboards in hand, intent on a mission as bold as it was ambiguous. […]",
    title:
      "OpenAI Startup Journey to Success: 6 Lessons from Its Rise in AI Innovation",
  },
  {
    id: 5,
    name: " Kushal Shrestha",
    thumbnail:
      "https://realstorytime.com/wp-content/uploads/2025/02/Guillaume-Pousaz-_2B-Checkout.com-Empire.webp",
    description:
      "Guillaume Pousaz, founder and CEO of Checkout.com, has built a fintech empire that has reshaped online payments. Guillaume Pousaz, who grew up in the suburbs of Geneva, Switzerland, where he was born in 1981, studied mathematical engineering at École Polytechnique Fédérale de Lausanne and got a bachelor’s degree in economics from HEC Lausanne. At first, he wanted to […]",
    title: "Startup Story: Guillaume Pousaz $2B Checkout.com Empire",
  },
];

function StartUpStory() {
  return (
    <>
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
    </>
  );
}

export default StartUpStory;
