import React from 'react'

function Carousal() {
    return (
        <div className="carousalDiv">
            <div id="carouselExampleIndicators" class="carousel slide carousel-dark" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/pr1.jpg" class="d-block w-100" alt="..." height="500px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/pr2.jpg" class="d-block w-100" alt="..." height="500px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/pr3.jpg" class="d-block w-100" alt="..." height="500px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/pr4.png" class="d-block w-100" alt="..." height="500px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/pr5.jpg" class="d-block w-100" alt="..." height="500px" />
                    </div>
                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousal
