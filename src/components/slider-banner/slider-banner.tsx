import styles from './slider-banner.module.scss'



export function SliderBanner () {
    return(
        <div id="carouselExampleControls" className={`carousel slide ${styles.carouselContainer}`} data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/top-slider-imagens/roma-min-1.jpg" className="d-block w-100" alt="roma arcade game"/>
          </div>
          <div className="carousel-item">
            <img src="/top-slider-imagens/roma-min-2.jpg" className="d-block w-100" alt="roma arcade game"/>
          </div>
          <div className="carousel-item">
            <img src="/top-slider-imagens/roma-min-3.jpg" className="d-block w-100" alt="roma arcade game"/>
          </div>
          <div className="carousel-item">
            <img src="/top-slider-imagens/roma-min-4.jpg" className="d-block w-100" alt="roma arcade game"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}