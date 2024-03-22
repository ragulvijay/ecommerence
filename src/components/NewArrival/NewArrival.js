import React from 'react'
import './NewArrival.css'

const NewArrival = () => {
  return (
    <div>
        <section id='newarrival-section'>
            
            <h1 className='newarrival-heading'>New Arrival</h1>
                <div className='arrival-container'>
                <div className='arrival-heading'>
                <div className='playstation'>
                    <h2 className='arrival-playstation'>playstation 5</h2>
                    <p className='arrival-para'>Black and White of the Version PS5 <br/>comming out on sale
                    </p>
                    <button className='arrival-button'>Shop Now</button></div>




                </div>
                <div className='arrival-content'>
                    <div className='arrival-content-heading'>
                        <div className='women'>
                        <h2 className='new-arrival-heading'>
                            Women's Collection
                        </h2>
                        <p className='new-arrival-para'>Feature women collection that <br/>
                        give you another vibe</p>
                        <button className='new-arrival-button'>Shop Now</button>
                        </div>


                        </div>
                        <div className='arrival-content-text'>
                            <div className='arrival-content-text-heading'>
                                <div className='speaker-heading-text'>
                                '
                                <h1 className='speaker-heading'>Speakers</h1>
                                <p className='speaker-para'>
                                    Amazon wireless speakers
                                </p>
                                <button className='speaker-button'>Shop Now</button>
                                </div>
                                </div>
                                <div className='arrival-content-text-para'>
                                    <div className='perfume-heading-text'>
                                    
                                    <h1 className='perfume-heading'>
                                        Perfume
                                    </h1>
                                    <p className='perfume-para'>GUCCI INTENSE OUD EDB
                                        </p>
                                        <button className='perfume-button'>Shop Now</button>
                                        </div>
                                    </div>
                        </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default NewArrival
