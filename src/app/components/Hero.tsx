import React from 'react';

type Props = {};

const Hero = (props: Props) => {
  const backgroundImageStyle = {
    backgroundImage: "url('https://cdn.shopify.com/s/files/1/0577/2515/7538/files/home_198cc17a-6558-4473-bdcf-cf0db428b6e5.png?v=1708448031')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="w-screen h-screen" style={backgroundImageStyle}>
      <span className='w-full h-full text-white flex items-start justify-end flex-col gap-4'>
      <h1 className='text-6xl font-bold mx-5'>NEW COLLECTION</h1>
      <h3 className='text-4xl font-bold mx-5' >Shop the world inside our new collection</h3>
      <button className='rounded-full border border-white p-3 mx-5 mb-7 font-bold'>Shop Now</button>
      </span>
    </div>
  );
};

export default Hero;
