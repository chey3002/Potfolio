import React from 'react'
import { projects } from '../../utils/proyectos'
import Project from './project'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 0
  }
};

export default function Projects() {
  return (
    <section className="w-full h-full sm:h-max flex justify-evenly flex-col m-auto" id="Projects">
      <header className="w-fit mx-auto text-neonPink2 drop-shadow-neonPinkGlow text-3xl sm:text-5xl sm:leading-relaxed">
        <h2>
          Projects
        </h2>
      </header>
      <div className='w-full px-4'>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          centerMode={false}
          partialVisible={false}
        >
          {projects.map((project, i) => (
            <div key={i} className="p-4">
              <Project myProject={project} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
