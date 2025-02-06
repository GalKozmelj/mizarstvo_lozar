import React from 'react';

function Gallery() {
  const images = [
    'https://www.mandicasa.com/wp-content/uploads/2023/08/collection-diamond.jpg',
    'https://images.squarespace-cdn.com/content/v1/63dde481bbabc6724d988548/b5d6c05e-69b9-4c2b-9822-758030583760/_dcf70b4a-c251-4440-a251-982905248c49.jfif?format=750w',
    'https://www.mandicasa.com/wp-content/uploads/2023/08/collection-omicron.jpg',
    'https://i.pinimg.com/736x/da/2c/54/da2c54fec3e1bcc9d8a5d8a6d06e29c2.jpg',
    'https://assets.telkitchens.co.uk/srcane/uploads/2021/04/20112147/Luxury-Modern-Kitchen-Designer.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaII-ktW5gzJhudwTPajaNisKXLyNM-PMH9A&s',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-6 ">Galerija</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative">
            <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
