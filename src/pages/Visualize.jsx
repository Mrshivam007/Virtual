import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ColorBox from './Colorbox';
import Red from "../data/Red.js";
import Blue from "../data/blue.js";
import Yellow from "../data/yellow.js";
import Green from "../data/green.js";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Cart from './cart';
const Visualize = () => {

    return (
        <div>
            <div className="container">
                <Link to="/Living"><ArrowBackIosIcon style={{ fontSize: 'small' }} />Select another photos</Link>
                <div class="row justify-content-between gy-5">
                    <div class="col-lg-8 order-1 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                        <h1 data-aos="fade-up" style={{ paddingTop: '2vh', fontFamily: 'emoji' }}>Visualize Your Room</h1>
                        <h3 data-aos="fade-up" style={{ paddingTop: '2vh', paddingBottom: '2vh', fontFamily: 'emoji' }}>Click a wall to paint the selected color.</h3>
                        {/* <div class="tab-content" data-aos="fade-up" data-aos-delay="300">
              <ul class="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ placeSelf: 'center' }}>

                <li class="nav-item">
                  <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters" style={{ height: '50px', width: '50px', backgroundColor: 'red', borderRadius: '50px' }}>

                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast" style={{ height: '50px', width: '50px', backgroundColor: 'blue', borderRadius: '50px' }}>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch" style={{ height: '50px', width: '50px', backgroundColor: 'yellow', borderRadius: '50px' }}>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner" style={{ height: '50px', width: '50px', backgroundColor: 'green', borderRadius: '50px' }}>
                  </a>
                </li>

              </ul>

              <div class="tab-pane fade active show" id="menu-starters">

                <div class="tab-header text-center">
                  <h4 style={{ padding: '2vh' }}>Reds</h4>
                </div>
                {Red.RedData.map((item, index) => {
                  return (
                    <ColorBox
                      img={item.img}
                      title={item.title}
                      desc={item.desc}
                      price={item.price}
                      item={item}
                      key={index} />
                  )

                })}
              </div>

              <div class="tab-pane fade" id="menu-breakfast">

                <div class="tab-header text-center">
                  <h4 style={{ padding: '2vh' }}>Reds</h4>
                </div>
                {Blue.BlueData.map((item, index) => {
                  return (
                    <ColorBox
                      img={item.img}
                      title={item.title}
                      desc={item.desc}
                      price={item.price}
                      item={item}
                      key={index} />
                  )

                })}
              </div>

              <div class="tab-pane fade" id="menu-lunch">

                <div class="tab-header text-center">
                  <h4 style={{ padding: '2vh' }}>Reds</h4>
                </div>
                {Yellow.YellowData.map((item, index) => {
                  return (
                    <ColorBox
                      img={item.img}
                      title={item.title}
                      desc={item.desc}
                      price={item.price}
                      item={item}
                      key={index} />
                  )

                })}
              </div>

              <div class="tab-pane fade" id="menu-dinner">

                <div class="tab-header text-center">
                  <h4 style={{ padding: '2vh' }}>Reds</h4>
                </div>
                {Green.GreenData.map((item, index) => {
                  return (
                    <ColorBox
                      img={item.img}
                      title={item.title}
                      desc={item.desc}
                      price={item.price}
                      item={item}
                      key={index} />
                  )

                })}
              </div>
            </div> */}

                        {/* <div class="virtual-box" >
            <button class="btn btn-light"> light </button>
              <div class="post-img"><img src="assets/img/living/1.jpg" class="virtual-img" alt=""  /></div>
            </div> */}
                        <div class="row gy-4">
                            <h4>Book a Table</h4>
                            <div class="col-lg-12 position-relative about-img"
                                data-aos="fade-up" data-aos-delay="150"> <img src="assets/img/living/1.jpg" alt="" style={{ width: '100%', padding: '2vh', background: '#e0e0e0' }} />
                                <div class="call-us position-absolute">
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-4 order-2 order-lg-2 text-center text-lg-start" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", marginBottom: '-20vh' }}>
                        <h1 data-aos="fade-up" style={{ paddingTop: '2vh', fontFamily: 'emoji', paddingBottom: '2vh' }}><ColorLensIcon />Saved Colors</h1>
                        <Cart />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Visualize;