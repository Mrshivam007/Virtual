import { Link } from 'react-router-dom';

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
const Product = () => {
  return (
    <div>

      <div className="container">
        <div class="flex-column justify-content-center">
          {/* <h1 data-aos="fade-up" style={{ paddingBottom: '2vh', fontFamily: 'emoji' }}>Select a Photo to Virtually Paint</h1> */}
          {/* <h3 data-aos="fade-up" data-aos-delay="400">Explore Our Paintable Photos</h3> */}
          <h2 class="product-heading">Select a Photo to Virtually Paint</h2>

        </div>

        <section id="featured-services" class="featured-services" style={{ backgroundColor: 'white' }}>
          <h3 style={{ textAlign: 'center', fontFamily: 'initial', marginBottom: '4vh', fontWeight: 'bold' }}>Explore Our Paintable Photos</h3>
          <div class="container">


            <div class="row gy-4">

              <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div class="service-item position-relative">
                <Link to="/living">
                  <div class="icon"><img src="assets/img/rooms/living.jpg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                  <h4>Living Room</h4>
                </Link>
              </div>
              </div>




              <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div class="service-item position-relative">
                  <div class="icon"><img src="assets/img/rooms/bedroom.jpg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                  <h4>Bedroom</h4>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div class="service-item position-relative">
                  <div class="icon"><img src="assets/img/rooms/dining.jpg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                  <h4>Dining Room</h4>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div class="service-item position-relative">
                  <div class="icon"><img src="assets/img/rooms/kitchen.jpg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                  <h4>Kitchen</h4>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div class="service-item position-relative">
                  <div class="icon"><img src="assets/img/rooms/bathroom.jpg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                  <h4>Bathroom</h4>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div class="service-item position-relative">
                  <div class="icon"><img src="assets/img/rooms/exterior.jpg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                  <h4>Exterior</h4>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div class="service-item position-relative">
                  <div class="icon"><img src="assets/img/rooms/commercial.jpg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                  <h4>Commercial</h4>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div class="service-item position-relative">
                  <div class="icon"><img src="assets/img/rooms/front.jpg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                  <h4>Front Gate</h4>
                </div>
              </div>


            </div>

          </div>
        </section>
      </div>







      {/* <div class="container" style={{ paddingBottom: '8vh' }}>
        <div class="row">
          <div class="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up" style={{ paddingBottom: '4vh' }}>See products in your room</h1>
            <h4 data-aos="fade-up" data-aos-delay="400"><i class="bi bi-camera"></i> Upload a picture of your room</h4>
            <h4 data-aos="fade-up" data-aos-delay="400" style={{ paddingBottom: '2vh' }}><i class="bi bi-box"></i> Try our products in your room</h4>
            <div data-aos="fade-up" data-aos-delay="600">
              <div class="text-center text-lg-start">
                <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                  <a href="#book-a-table" class="btn-book-a-table"><FileUploadOutlinedIcon /> Upload</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src="assets/img/products/main.jpeg" class="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <section id="featured-services" class="featured-services" style={{backgroundColor: 'white'}}>
        <div class="container">
          <h3 style={{ textAlign: 'center', fontFamily: 'initial' }}>Don't have a picture? Try our demo rooms insted Living Room</h3>

          <div class="row gy-4">

            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative">
                <Link to="/living">
                  <div class="icon"><img src="assets/img/products/l1.jpeg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                  <h4>Living Room</h4>
                </Link>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative">
                <div class="icon"><img src="assets/img/products/l1.jpeg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                <h4>Living Room</h4>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative">
                <div class="icon"><img src="assets/img/products/l1.jpeg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                <h4>Living Room</h4>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative">
                <div class="icon"><img src="assets/img/products/l1.jpeg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                <h4>Living Room</h4>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative">
                <div class="icon"><img src="assets/img/products/l1.jpeg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                <h4>Living Room</h4>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative">
                <div class="icon"><img src="assets/img/products/l1.jpeg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                <h4>Living Room</h4>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative">
                <div class="icon"><img src="assets/img/products/l1.jpeg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                <h4>Living Room</h4>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative">
                <div class="icon"><img src="assets/img/products/l1.jpeg" style={{ width: '100%', borderRadius: '14px' }} /></div>
                <h4>Living Room</h4>
              </div>
            </div>


          </div>

        </div>
      </section> */}


    </div>


  );
}

export default Product;