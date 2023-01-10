import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import CollectionsIcon from '@mui/icons-material/Collections';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import TuneIcon from '@mui/icons-material/Tune';
const Living = () => {
  return (
    <>

    <div className="container">
      <Link to="/product"><ArrowBackIosIcon style={{fontSize: 'small'}} />Exprore different Photos</Link>
      <h1 data-aos="fade-up" style={{ paddingTop: '2vh', fontFamily: 'emoji' }}>Select a Photo to Paint</h1>
      <h3 data-aos="fade-up" style={{  fontFamily: 'emoji', color: '#666' }}>Living Room</h3>

      <section id="featured-services" class="featured-services" style={{backgroundColor: 'white'}}>
        <div class="container">
         
          <div class="row gy-4">

            

            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative" style={{height: '95%'}}>
                <Link to="/colorplate">
                  <div class="icon"><img src="assets/img/living/1.jpg" style={{ width: '100%', borderRadius: '18px' }} /></div>
                </Link>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative" style={{height: '95%'}}>
                <div class="icon"><img src="assets/img/living/2.jpg" style={{ width: '100%', borderRadius: '18px' }} /></div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative" style={{height: '95%'}}>
                <div class="icon"><img src="assets/img/living/3.jpg" style={{ width: '100%', borderRadius: '18px' }} /></div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative" style={{height: '95%'}}>
                <div class="icon"><img src="assets/img/living/4.jpg" style={{ width: '100%', borderRadius: '18px' }} /></div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative" style={{height: '95%'}}>
                <div class="icon"><img src="assets/img/living/5.jpg" style={{ width: '100%', borderRadius: '18px' }} /></div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative" style={{height: '95%'}}>
                <div class="icon"><img src="assets/img/living/6.jpg" style={{ width: '100%', borderRadius: '18px' }} /></div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative" style={{height: '95%'}}>
                <div class="icon"><img src="assets/img/living/7.jpg" style={{ width: '100%', borderRadius: '18px' }} /></div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative" style={{height: '95%'}}>
                <div class="icon"><img src="assets/img/living/8.jpg" style={{ width: '100%', borderRadius: '18px' }} /></div>
              </div>
            </div>


          </div>

        </div>
      </section> 

    </div>



    </>
  );
}

export default Living;

{/* <div className="container" style={{ maxWidth: '1500px' }}>

  <div class="row gy-4">

    <div class="col-lg-3 col-md-8 service-item d-flex" data-aos="fade-up" style={{height: '85vh'}}>
      <div class="icon flex-shrink-0"><i class="fa-solid fa-cart-flatbed"></i></div>
      <div>
        <div class="wrap">
          <div class="search">
            <input type="text" class="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" class="searchButton">
              <SearchIcon />
            </button>
          </div>
        </div>
        <p class="description" style={{ textAlign: 'center' }}><b>Select a Product to view in Your Room</b></p>
        <div style={{ textAlign: 'center' }}>
          <a href="" class="btn-living-1" style={{ padding: '8px 68px' }}>All</a>
          <a href="" class="btn-living-1">Favorites</a>
        </div>

        <h5 style={{ paddingTop: '2vh', paddingBottom: '2vh' }}><TuneIcon />Filter</h5>
        <div className="btn-group">
          <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Color
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Type
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Species
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>

        <aside id="sidebar" class="sidebar"><ul class="sidebar-nav" id="sidebar-nav">
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="icon"><img src="assets/img/products/l1.jpeg" style={{ width: '100%', borderRadius: '18px' }} /></div>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="icon"><img src="assets/img/products/l1.jpeg" style={{ width: '100%', borderRadius: '18px' }} /></div>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="icon"><img src="assets/img/products/l1.jpeg" style={{ width: '100%', borderRadius: '18px' }} /></div>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="icon"><img src="assets/img/products/l1.jpeg" style={{ width: '100%', borderRadius: '18px' }} /></div>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>

            
           </div>

        </ul>
        </aside>

      </div>
    </div>




    <div class="col-lg-7 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
      <div class="icon flex-shrink-0"><i class="fa-solid fa-truck"></i></div>
      <div>
        <img src="assets/img/products/l1.jpeg" class="menu-img img-fluid" alt="" style={{ maxWidth: "95%" }} />
        <div style={{ textAlign: 'center' }}>
          <a href="" class="btn-living"><RotateLeftIcon /> Rotate Surface</a>
          <a href="" class="btn-living"><CollectionsIcon /> Change Room</a>
        </div>
      </div>
    </div>

    <div class="col-lg-2 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
      <div class="icon flex-shrink-0"><i class="fa-solid fa-truck-ramp-box"></i></div>
      <div>
        <h5 class="title">Save & Share</h5>
        <a href="#" class="facebook"><i class="bi bi-facebook" style={{ fontSize: '30px', color: 'blue', padding: '0 10px' }}></i></a>
        <a href="#" class="facebook"><i class="bi bi-whatsapp" style={{ fontSize: '30px', color: 'green', padding: '0 10px' }}></i></a>
        <a href="#" class="facebook"><i class="bi bi-share" style={{ fontSize: '30px', padding: '0 10px' }}></i></a>
        <a href="" class="btn-living-2" style={{ padding: '2px 14px' }}><EmailIcon /> Email</a>
        <a href="" class="btn-living-2"><DownloadIcon /> Downoad</a>
        <p class="description" style={{ marginTop: '4rem' }}><b>Rate Your Experience</b></p>
        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text">1 star</label>
        </div>
      </div>
    </div>

  </div>
</div> */}

{/* <div class="container">
<div class="row justify-content-between gy-5">
  <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
    <h2 style={{paddingBottom: '2vh'}}>See products in your room</h2>
   <p><CameraAltIcon /> Upload a picture of your room</p>
   <p style={{paddingBottom: '2vh'}}><WidgetsOutlinedIcon /> Try our products in your room</p>

    <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
      <a href="#book-a-table" class="btn-book-a-table"><FileUploadOutlinedIcon /> Upload</a>
    </div>
  </div>
  <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
    <img src="assets/img/products/main.jpeg" class="img-fluid" alt="" />
  </div>
</div>
</div> */}
