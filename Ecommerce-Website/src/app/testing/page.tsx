import Image from 'next/image';

export default function ProductImage() {
  const imageUrl = 'https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/2.png';

  return (
    <div className='py-52'>
      <Image
        src={imageUrl} // Ensure the URL matches the domain in `next.config.js`
        alt="Product Image"
        width={500} // Specify width
        height={500} // Specify height
      />
    </div>
  );
}
