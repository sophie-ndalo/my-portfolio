import React from "react";

function Work() {
  return (
    <div style={{fontFamily: "'Roboto Slab', serif", backgroundColor: "#87CEEB" }}>
      <div className="w-full md:w-2/3 lg:w-1/2 mt-6" style={{ margin: '0 auto', marginTop: "10px" }}>
        <p className="text-white text-lg">
          Welcome to my project showcase!
          <br />
          I'm a beginner web developer passionate about creating engaging
          websites. These projects represent my journey in web development,
          showcasing my dedication to hands-on learning and experimentation.
          Explore my work, and let's collaborate on exciting projects together!
        </p>
        <div >
          <p>
            <a
              style={{ color: "black", marginLeft: "-85px" }}
              href="https://e-commerce-pi-ruby.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
             1. E-Commerce Project
            </a>
          </p>
          <p className="text-white text-lg">
            This e-commerce React app is a dynamic and user-friendly platform
            designed to provide a seamless shopping experience. With a modern
            and intuitive user interface, it offers a range of products
            across various categories. Key features of this app include:
          </p>
          <ul className="text-white text-lg">
            <li>
              <strong>Product Catalog:</strong> A diverse collection of products, organized into categories for easy navigation.
            </li>
            <li>
              <strong>Search and Filtering:</strong> Robust search functionality and filters to help users find specific items efficiently.
            </li>
            <li>
              <strong>User Accounts:</strong> Personalized user accounts allowing customers to manage their profiles, track orders, and view their purchase history.
            </li>
            <li>
              <strong>Shopping Cart:</strong> A user-friendly cart system enabling customers to add, remove, and modify items before checkout.
            </li>
            <li>
              <strong>Secure Checkout:</strong> Smooth and secure payment processing for hassle-free transactions.
            </li>
            <li>
              <strong>Responsive Design:</strong> Mobile-friendly and responsive design ensuring a seamless experience across devices.
            </li>
            <li>
              <strong>Admin Dashboard:</strong> An admin panel to manage products, orders, and user accounts.
            </li>
          </ul>
          <p className="text-white text-lg">
            Built with React, this app emphasizes performance, scalability, and a clean user interface, 
            creating an enjoyable shopping journey for users. 
            It aims to cater to diverse customer needs, 
            providing a convenient and reliable platform for online shopping.
          </p>
        </div>
        <div >
          <p>
            <a
              style={{ color: "black", marginLeft: "-85px" }}
              href="https://errands-girl-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
             2. Errands App
            </a>
          </p>
          <p className="text-white text-lg">
            Introducing the Errands Girl app, 
            your ultimate companion for seamless task delegation and errand management. 
            With a clean and intuitive interface, this app simplifies your life by offering a comprehensive array of services tailored to your needs.
          </p>
          <ul className="text-white text-lg">
            <li>
              <strong>Services Section:</strong> Explore a diverse range of services conveniently listed within the app. Whether it's grocery shopping, dry cleaning pickup, or parcel delivery, find the perfect solution for every errand on your to-do list.
            </li>
            <li>
              <strong>Personalized Shopping:</strong>Experience tailored assistance with personalized shopping services. Simply provide your preferences, and our experienced errands girls will handle everything from selecting the right items to ensuring timely delivery to your doorstep.
            </li>
            <li>
              <strong>Corporate Shopping:</strong>Streamline your corporate errands with our specialized corporate shopping section. From office supplies to catering arrangements, rely on our efficient errands girls to handle your business needs with professionalism and precision. 
            </li>
            <li>
              <strong>WhatsApp Integration:</strong>Connect with our errands girls effortlessly via WhatsApp. With just a tap, you can initiate a conversation directly within the app, allowing for seamless communication and coordination of your errands. 
            </li>
            <li>
              <strong>Reviews Section:</strong>Gain insights and build trust with our reviews section. Explore feedback from satisfied customers to make informed decisions when selecting an errands girl for your tasks. Additionally, leave your own reviews to share your experience and contribute to our vibrant community. 
            </li>
            
          </ul>
          <p className="text-white text-lg">
          Crafted with React, the Errands Girl app sets a new standard for efficiency, scalability, 
          and user experience in the realm of errand management. 
          With a keen focus on performance and a commitment to delivering a seamless user interface, 
          this app redefines convenience for users seeking assistance with their daily tasks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
