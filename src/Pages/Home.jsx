import React from 'react'
import ReusableComponent from "../Component/ReusableComponent"
import '../Component/Home.css'
import BollywoodReusable from '../Component/BollywoodReusable'

const Home = () => {
  return (
    <div>
      <div className='home-page-banner'>
        <div className='home-page-banner-left'>
          <ReusableComponent img={"https://i.pinimg.com/originals/9b/6b/0f/9b6b0fbc0099a4f2f63480c44f3cc640.jpg"} />

        </div>
        <div className='home-page-banner-right'>
          <div className='banner-right-top'>
            <ReusableComponent img={"https://w0.peakpx.com/wallpaper/664/778/HD-wallpaper-technology-spacex-starship.jpg"} />

          </div>
          <div className='banner-right-bottom'>
            <ReusableComponent img={"https://thumbs.dreamstime.com/b/plastic-bags-bottles-straws-other-trash-pollution-ocean-underwater-image-turtle-polluted-water-sea-turtles-may-189065773.jpg"} />

          </div>
        </div>
      </div>
      <div>
        <h2>The Bollywood</h2>
        <div className='red-line'></div>
        <div className='bollywood-flex'>

          

          {/* <div className='bollywood-card-1'>
          <BollywoodReusable img='https://cdn.bollywoodmdb.com/movies/largethumb/300x300/2022/pathan/pathaan-30.jpg' />
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, dicta.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis sed officiis dicta blanditiis nemo omnis.
            Voluptatibus ducimus nam pariatur aliquid eligendi voluptate a aut vero harum numquam. Facere, obcaecati.</p>
          </div> */}
          {/* <div className='bollywood-card-2'>
          <BollywoodReusable img='https://cdn.bollywoodmdb.com/movies/largethumb/300x300/2022/pathan/pathaan-30.jpg' />
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, dicta.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis sed officiis dicta blanditiis nemo omnis.
            Voluptatibus ducimus nam pariatur aliquid eligendi voluptate a aut vero harum numquam. Facere, obcaecati.</p>
          </div> */}
          {/* <div className='bollywood-card-2'>
          <BollywoodReusable img='https://cdn.bollywoodmdb.com/movies/largethumb/300x300/2022/pathan/pathaan-30.jpg' />
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, dicta.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis sed officiis dicta blanditiis nemo omnis.
            Voluptatibus ducimus nam pariatur aliquid eligendi voluptate a aut vero harum numquam. Facere, obcaecati.</p>
          </div> */}
        </div>
      </div>

    </div>
  )
}

export default Home