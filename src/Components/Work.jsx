import React from "react";

function Work() {
  return (
    <div style={{ marginLeft: "200px", marginTop: "100px", fontFamily: "'Roboto Slab', serif", }}>
      <div className="w-full md:w-2/3 lg:w-1/2 mt-6">
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
            Project Link:{" "}
            <a
              style={{ color: "#87CEEB", marginLeft: "-85px" }}
              href="https://e-commerce-pi-ruby.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              E-Commerce Project
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
            Built with React, our app emphasizes performance, scalability, and a clean user interface, creating an enjoyable shopping journey for users. It aims to cater to diverse customer needs, providing a convenient and reliable platform for online shopping.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
