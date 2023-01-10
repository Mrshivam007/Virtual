const Home = () => {
    return ( 
        <div>
            <section id="hero" class="hero d-flex align-items-center section-bg">
        <div class="container">
          <div class="row justify-content-between gy-5">
            <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2>Customize your<br /><span>Interior</span> <br />with just one touch</h2>
              <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="#book-a-table" class="btn-book-a-table">Try a demo</a>
              </div>
            </div>
            <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
              <img src="assets/img/home/hero.jpeg" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" class="menu">
        <div class="container" data-aos="fade-up">
          <div class="tab-header text-center">
            <h2 style={{ paddingBottom: '4vh' }}>Here's how it works</h2>
          </div>


          <div class="row gy-5">

            <div class="col-lg-4 menu-item" style={{ textAlign: 'center' }}>
              <h4 style={{padding: "0 5vh"}}>SNAP</h4>
              <a href="assets/img/menu/menu-item-1.png" class="glightbox"><img src="assets/img/home/snap.jpeg" class="menu-img img-fluid" alt="" style={{ maxWidth: "50%" }} /></a>
              <p class="ingredients">
                Upload a photo of your room
              </p>
            </div>

            <div class="col-lg-4 menu-item" style={{ textAlign: 'center' }}>
            <h4 style={{padding: "0 5vh"}}>TAP</h4>
              <a href="assets/img/menu/menu-item-2.png" class="glightbox"><img src="assets/img/home/tap.jpeg" class="menu-img img-fluid" alt="" style={{ maxWidth: "50%" }} /></a>

              <p class="ingredients">
                see it instantly in your space
              </p>

            </div>

            <div class="col-lg-4 menu-item" style={{ textAlign: 'center' }}>
            <h4 style={{padding: "0 5vh"}}>WOW</h4>
              <a href="assets/img/menu/menu-item-3.png" class="glightbox"><img src="assets/img/home/wow.jpeg" class="menu-img img-fluid" alt="" style={{ maxWidth: "52%" }} /></a>

              <p class="ingredients">
                Select a product
              </p>

            </div>
          </div>

          <div class="tab-header text-center">
            <h2 style={{ paddingTop: '10vh' }}>Fast and easy visualization for shoppers</h2>
          </div>

          <div class="row gy-5">


            <div class="col-lg-4 menu-item" style={{ textAlign: 'center' }}>
              <a href="assets/img/menu/menu-item-4.png" class="glightbox"><img src="assets/img/home/result.jpeg" class="menu-img img-fluid" alt="" style={{ maxWidth: "50%" }} /></a>
              <h4>Instant result</h4>
              <p class="ingredients" style={{width: '70%', marginLeft: '8vh'}}> 
                Your visitor snap a photo, and we showcase your products in their room in seconds.
              </p>

            </div>

            <div class="col-lg-4 menu-item" style={{ textAlign: 'center' }}>
              <a href="assets/img/menu/menu-item-5.png" class="glightbox"><img src="assets/img/home/realism.jpeg" class="menu-img img-fluid" alt="" style={{ maxWidth: "50%" }} /></a>
              <h4>Unprecedented realism</h4>
              <p class="ingredients" style={{width: '70%', marginLeft: '8vh'}}>
                Shoppers can buy confidently, knowing that your product will match and fit their space.
              </p>

            </div>

            <div class="col-lg-4 menu-item" style={{ textAlign: 'center' }}>
              <a href="assets/img/menu/menu-item-6.png" class="glightbox"><img src="assets/img/home/use.jpeg" class="menu-img img-fluid" alt="" style={{ maxWidth: "59%" }} /></a>
              <h4>Ease to Use</h4>
              <p class="ingredients" style={{width: '70%', marginLeft: '8vh'}}>
                Optimized for all devices, No app to download and no instruction to read.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" class="testimonials section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h1>Fast and easy setup for vendors</h1>
          </div>
          <div class="row gy-4 justify-content-center" style={{ paddingBottom: '10vh' }}>
            <div class="col-lg-2 text-center">
              <img src="assets/img/home/vendor1.jpeg" class="img-fluid testimonial-img" alt="" />
            </div>
            <div class="col-lg-6">
              <div class="testimonial-content">
                <h4>Easy Setup</h4>
                <p style={{ fontFamily: 'monospace' }}>
                  . Send us your product data <br />
                  . Add one line of code on your site <br />
                  . No maintenance required
                </p>
              </div>
            </div>
          </div>


          <div class="row gy-4 justify-content-center">
            <div class="col-lg-6">
              <div class="testimonial-content">
                <h4>Customizable</h4>
                <p style={{ fontFamily: 'monospace' }}>
                  . Your products and your branding <br />
                  . Customizable sample rooms <br />
                  . Integration with your Google Analytics
                </p>

              </div>
            </div>
            <div class="col-lg-2 text-center">
              <img src="assets/img/home/vendor2.jpeg" class="img-fluid testimonial-img" alt="" />
            </div>
          </div>


        </div>

      </section>
      <div class="container">
      <div class="col-lg-10 col-12 text-center mx-auto">
        <h2 class="mb-5">We'll proudly show you on result</h2>
      </div>
      <div class="row">

      <div class="col-lg-2 col-md-4 col-12 mb-4 mb-lg-0">
        <div class="featured-block d-flex justify-content-center align-items-center">
          <a href="donate.html" class="d-block">
            <img src="assets/img/result1.jpeg" class="featured-block-image img-fluid" style={{height: '190px'}} alt="" / >

            <p style={{textAlign: 'center', color:'black'}}>of product<br /> brought to life</p>
          </a>
        </div>
      </div>

      <div class="col-lg-2 col-md-6 col-12 mb-4 mb-lg-0">
        <div class="featured-block d-flex justify-content-center align-items-center">
          <a href="donate.html" class="d-block">
            <img src="assets/img/result2.jpeg" class="featured-block-image img-fluid" style={{height: '190px'}} alt="" />

            <p style={{textAlign: 'center', color:'black'}}>of users</p>
          </a>
        </div>
      </div>

      <div class="col-lg-2 col-md-6 col-12 mb-2 mb-lg-0 mb-md-4">
        <div class="featured-block d-flex justify-content-center align-items-center">
          <a href="donate.html" class="d-block">
            <img src="assets/img/result3.jpeg" class="featured-block-image img-fluid" style={{height: '190px'}} alt="" />

            <p style={{textAlign: 'center', color:'black'}}>ales growth</p>
          </a>
        </div>
      </div>

      <div class="col-lg-2 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
        <div class="featured-block d-flex justify-content-center align-items-center">
          <a href="donate.html" class="d-block">
            <img src="assets/img/result4.jpeg" class="featured-block-image img-fluid" style={{height: '190px'}} alt="" />

            <p style={{textAlign: 'center', color:'black'}}>more conversions</p>
          </a>
        </div>
      </div>

      <div class="col-lg-2 col-md-6 col-12 mb-4 mb-lg-0">
        <div class="featured-block d-flex justify-content-center align-items-center">
          <a href="donate.html" class="d-block">
            <img src="assets/img/result5.jpeg" class="featured-block-image img-fluid" style={{height: '190px'}} alt="" />

            <p style={{textAlign: 'center', color:'black'}}>on the spot sales</p>
          </a>
        </div>
      </div>

      </div>
      </div>

      <div className="container">
      <div class="col-lg-10 col-12 text-center mx-auto">
        <h2 class="mb-5">Take their word for it</h2>
        <img src="assets/img/stars.png" alt='' style={{width: '25%', marginTop: '-2vh'}} />
        <h4>Average rating</h4>
        <p>Based on millions of user reviews</p>
      </div>

      
      </div>
        </div>
     );
}
 
export default Home;