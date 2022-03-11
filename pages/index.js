import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from '../styles/Index.module.scss';
//  Import Component...
import Card2 from '../components/Notable-Drops/Card';
import Card3 from '../components/Browse-by-category/Card';
import Card4 from '../components/Our-features/Card';
import featuresData from '../components/Our-features/data.json';
import Footer from '../components/Footer/Footer';

export default function Home() {
  function animateFish(){
    {
      let fish = document.getElementById('monster3-fish');
      fish.style.animation = 'monster3-fish-animation 2s ease-in-out';
      fish.style.display = 'flex';
    }
  }
  return (
    <div>
      <Head>
        <title>HauntedSea</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>


      <main className={styles.container}>
        
        {/* Section-1 Main Section */}
        <section className={styles.section1}>
          <div className={styles.left1}>
            <div>
              <h1><span>Bait up and Fish</span> for extraordinary NFTs <br/>
                  secured with blockchain on Fantom</h1>
              <h2>The first ever NFT marketplace and <br/>
                  and Virtual World on the Fantom Network</h2>
              <div className={styles.buttons}>
                <Link href="#explore">
                  <button className={styles.explore}>Explore</button>
                </Link>
                <Link href="#create">
                  <button className={styles.create}>Create</button>
                </Link>
              </div>
              <div className={styles.learnMoreLink}>
                <img src='/assets/play.png'/>
                <Link href='/learn-mode'>Learn more about hauntedsea</Link>
              </div>

              
              <div className={styles.social_links_container}>
                        <div className={styles.social_links}>

                            <div className={styles.social_link_icon}>
                                <a href="https://twitter.com/iotexpad" target="_blank">
                                    <img src="/Icons/twitter.png" />
                                </a>
                            </div>

                            <div className={styles.social_link_icon}>
                                <a href="https://t.me/iotexpad" target="_blank">
                                    <img src="/Icons/telegram.png" />
                                </a>
                            </div>

                            <div className={styles.social_link_icon}>
                                <a href="https://t.me/iotexpadANN" target="_blank">
                                    <img src="/Icons/telegram.png" />
                                </a>
                            </div>

                            <div className={styles.social_link_icon}>
                                <a href="https://github.com/iotexpad" target="_blank">
                                    <img src="/Icons/github.png" />
                                </a>
                            </div>

                            <div className={styles.social_link_icon}>
                                <a href="https://iotexpad.medium.com" target="_blank">
                                    <img src="/Icons/m-icon.png" />
                                </a>
                            </div>
                        </div>
                    </div>
              
              
              
             



            </div>
            
          </div>
          
          <div className={styles.right1}>
            <img src='/assets/ship.png' width='400px' height='600px'/>
          </div>
        </section>

        {/* Section-2 */}

        <section className={styles.section2}>
            <h2>Notable Drops</h2>
            <div className={styles.section2cards}>
              <Card2 isLive={true} imgSrc="/assets/card1bg.png" title="VIP DOGS" 
              details="Collide the worlds of physical and digital art with his NFT collection"/>
              <Card2 isLive={true} imgSrc="/assets/card2bg.png" title="Synth Heads" 
              details="Beautiful generative Synth Heads here to take over the world."/>
              <Card2 isLive={true} imgSrc="/assets/card3bg.png" title="Dark Lords" 
              details="A collection of 10,000 aesthetic space explorers."/>
            </div>
        </section>
        
        {/* Section-3 */}
        <div id="explore"></div>
        <div className={styles.section3_section4}>
          <section className={styles.section3}>
            <h2>Browse by category</h2>
            <div className={styles.section3cards}>
            <Swiper
                modules={[ Pagination]}
                spaceBetween={80}
                slidesPerView='3'
                pagination={{ clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                  <Card3 title="Music" imgUrl="/assets/music.png"/>
                </SwiperSlide>
                <SwiperSlide>
                  <Card3 title="Art" imgUrl="/assets/art.png"/>
                </SwiperSlide>
                <SwiperSlide>
                  <Card3 title="Collectibles" imgUrl="/assets/collectible.png"/>
                </SwiperSlide>
                <SwiperSlide>
                  <Card3 title="Collectibles" imgUrl="/assets/ctg1.jpeg" extraPadding={true}/>
                </SwiperSlide>
                <SwiperSlide>
                  <Card3 title="Collectibles" imgUrl="/assets/ctg2.jpeg" extraPadding={true}/>
                </SwiperSlide>
                <SwiperSlide>
                  <Card3 title="Collectibles" imgUrl="/assets/ctg3.jpeg" extraPadding={true}/>
                </SwiperSlide>
                <SwiperSlide>
                  <Card3 title="Collectibles" imgUrl="/assets/ctg4.jpeg" extraPadding={true}/>
                </SwiperSlide>
                <SwiperSlide>
                  <Card3 title="Collectibles" imgUrl="/assets/ctg5.jpeg" extraPadding={true}/>
                </SwiperSlide>
                <SwiperSlide>
                  <Card3 title="Collectibles" imgUrl="/assets/ctg6.jpeg" extraPadding={true}/>
                </SwiperSlide>
              </Swiper>
              <img src="/assets/jellyfish1.png" alt="jellyfish" id="jellyfish" className={styles.jellyfish3}/>
            </div>
          </section>
          
          
          {/* Section-4 */}
          <div id="our-features"></div>
          <section className={styles.section4}>
            <h2>Our Features</h2>
            <div className={styles.section4cards}>
              {featuresData.map((data,index)=>{
                return <Card4 title={data.title} content={data.content} imgUrl = {data.imgUrl}key={index}/>
                })}
            </div>
          </section>
          {/* Section-5 */}
        <div id="create"></div>
        <section className={styles.section5} onMouseEnter={()=>animateFish()} onClick={()=>animateFish()}>
          <h2>Create and sell your NFTS</h2>
          <div className={styles.section5cards}>
            
            <div className={styles.card5}>
              <div style={{backgroundImage:'url(/assets/overlay2.png)'}} className={styles.card5icon}>
                <img src="/assets/icon1.png" alt="overlay"/>
              </div>
              <h4>Setup your wallet</h4>
              <p>Once you’ve set up your wallet of choice, connect it to HauntedSea by clicking the wallet icon in the top right corner. Learn about the <span>wallets we support.</span></p>

            </div>

            <div className={styles.card5}>
              <div style={{backgroundImage:'url(/assets/overlay2.png)'}} className={styles.card5icon}>
                <img src="/assets/icon2.png" alt="overlay"/>
              </div>
              <h4>Create your collection</h4>
              <p>Click <span>My Collections</span> and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
            </div>

            <div className={styles.card5}>
              <div style={{backgroundImage:'url(/assets/overlay2.png)'}} className={styles.card5icon}>
                <img src="/assets/icon3.png" alt="overlay"/>
              </div>
              <h4>Add your NFTS</h4>
              <p>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>
            </div>

            <div className={styles.card5}>
              <div style={{backgroundImage:'url(/assets/overlay2.png)'}} className={styles.card5icon}>
                <img src="/assets/icon4.png" alt="overlay"/>
              </div>
              <h4>List them for sale</h4>
              <p>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</p>

            </div>

          </div>
          <img src="/assets/monster3.png" className={styles.monster3} id="monster3-fish"/>
        </section>
        </div>
        
        

        {/* Section-6 */}
        <section className={styles.section6}>
          <h2>Virtual World</h2>
          <div className={styles.section6content}>
            <h1>DIVE AND DISCOVER A WORLD OF TREASURES</h1>
            <p>The SeaVerse is a world where Artists can build, own, and monetize their assets and virtual experiences onthe Fantom Opera Network. Customize your avatar, create items, and monetize
              your unique items through NFTs.
              <br/><br/>
              We empower artists and creators to build the platform they always envisioned, providing the means to unleash your creativity and earn income</p>
          </div>
        </section>

        {/* Section-7 */}
        <section className={styles.section7}>
          <h2>Partners</h2>
          <hr/>
          <div className={styles.section7partners}>
            <img src="/assets/partner1.png" className={styles.p1}/>
            <img src="/assets/partner2.png"/>
            <img src="/assets/partner3.png"/>
          </div>
        </section>
        {/* Section-8 */}
        <div id="contact-us"></div>
        <section className={styles.section8}>
          <h2>Community</h2>
          <h1>Join the HauntedSea community</h1>
            <p>HauntedSea is the First decentralised NFT marketplace and Virtual World on the Fantom Opera Network.<br/>
            Join the discussions on Telegram and stay up to date with the latest news and announcements.</p>
          <div className={styles.socialButtons}>
            <Link href="https://www.twitter.com/HauntedSeaio" target="_blank">
              <div>
                <img src="/assets/twitter.png" alt="twitter-logo"/>
                <span>Twitter</span>
              </div>
            </Link>
            <Link href="https://t.me/HauntedSeaOfficial">
              <div>
                <img src="/assets/telegram.png" alt="telegram-logo"/>
                <span>Telegram</span>
              </div>
            </Link>
            <Link href="#">
              <div>
                <img src="/assets/medium.png" alt="medium-logo"/>
                <span>Medium</span>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
