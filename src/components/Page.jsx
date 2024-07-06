const Page = () => {
  return (
    <main className="page container">
      <div className="page-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="page-btn">
          <button>Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <div className="available-on">
          <p>Also Available On</p>
        </div>
        <div className="brand-icons">
          <img src="/images/amazon.png" alt="amazon-icon" />
          <img src="/images/flipkart.png" alt="flipkart-icon" />
        </div>
      </div>
      <div className="page-image">
        <img src="/images/shoe_image.png" alt="shoe-image" />
      </div>
    </main>
  );
};

export default Page;
