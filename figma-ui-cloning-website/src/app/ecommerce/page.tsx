import React from 'react';

const Cretie = () => {
  return (
    <div className="bg-gray-900 text-gray-100 font-['Montserrat']">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <nav className="max-w-8xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img
                src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                alt="Logo"
                className="h-10"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-custom">Home</a>
              <a href="#" className="text-gray-300 hover:text-custom">Shop</a>
              <a href="#" className="text-gray-300 hover:text-custom">Collections</a>
              <a href="#" className="text-gray-300 hover:text-custom">About</a>
              <a href="#" className="text-gray-300 hover:text-custom">Contact</a>
            </div>

            <div className="flex items-center space-x-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-48 bg-gray-800 border-0 rounded-button pl-10 pr-4 py-2 text-sm text-gray-300 focus:ring-2 focus:ring-custom"
                />
                <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
              </div>

              <div className="relative">
                <i className="fas fa-shopping-cart text-gray-300 text-xl hover:text-custom cursor-pointer"></i>
                <span className="absolute -top-2 -right-2 bg-custom text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </div>

              <button className="!rounded-button bg-custom hover:bg-custom/90 text-white px-6 py-2">Sign In</button>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative h-[600px] overflow-hidden">
          <img
            src="https://creatie.ai/ai/api/search-image?query=A luxurious fashion store interior with modern minimalist design, featuring elegant displays of high-end clothing and accessories, soft ambient lighting, marble floors, and clean white walls with subtle gold accents, creating an upscale shopping atmosphere&width=1440&height=600&orientation=landscape&flag=5abc2479-26ad-407e-9e00-3617423a70c4"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40">
            <div className="max-w-8xl mx-auto px-6 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold mb-6">Discover Your Perfect Style</h1>
                <p className="text-xl text-gray-300 mb-8">
                  Explore our new collection of premium fashion pieces designed to elevate your wardrobe.
                </p>
                <button className="!rounded-button bg-custom hover:bg-custom/90 text-white px-8 py-3 text-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-8xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=A high-end leather designer handbag photographed on a clean white background with soft shadows, showcasing luxury craftsmanship and premium materials, styled in a minimalist fashion&width=400&height=400&orientation=squarish&flag=9b0d6644-86c5-4074-8412-c1522680cad4"
                  alt="Product"
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <button className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full">
                  <i className="far fa-heart text-white"></i>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Luxury Leather Bag</h3>
                <p className="text-gray-400 mb-4">Premium crafted leather handbag</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$299.99</span>
                  <button className="!rounded-button bg-custom hover:bg-custom/90 text-white px-4 py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=A luxury wristwatch with metallic silver finish and blue face, photographed on a clean white background with soft shadows, showcasing premium craftsmanship and elegant design details&width=400&height=400&orientation=squarish&flag=f00effeb-b865-437e-97db-a090e8084dca"
                  alt="Product"
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <button className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full">
                  <i className="far fa-heart text-white"></i>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Classic Timepiece</h3>
                <p className="text-gray-400 mb-4">Elegant automatic watch</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$499.99</span>
                  <button className="!rounded-button bg-custom hover:bg-custom/90 text-white px-4 py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=A pair of premium leather dress shoes in rich brown color, photographed on a clean white background with soft shadows, showcasing detailed craftsmanship and classic design&width=400&height=400&orientation=squarish&flag=0f8ec159-3a12-45b4-b76d-e9b9bdd52f75"
                  alt="Product"
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <button className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full">
                  <i className="far fa-heart text-white"></i>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Leather Oxford Shoes</h3>
                <p className="text-gray-400 mb-4">Handcrafted Italian leather</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$399.99</span>
                  <button className="!rounded-button bg-custom hover:bg-custom/90 text-white px-4 py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=A luxury silk scarf with elegant pattern design in blue and gold colors, photographed on a clean white background with soft shadows, showcasing premium fabric quality and artistic print&width=400&height=400&orientation=squarish&flag=6bbb3087-7fef-4934-82c6-570e9b66a983"
                  alt="Product"
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <button className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full">
                  <i className="far fa-heart text-white"></i>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Silk Scarf</h3>
                <p className="text-gray-400 mb-4">Luxurious silk with artistic pattern</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$129.99</span>
                  <button className="!rounded-button bg-custom hover:bg-custom/90 text-white px-4 py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 text-gray-100 py-20">
          <div className="max-w-8xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">10% Off Your First Order</h3>
                <p className="text-gray-400 mb-4">Sign up now and get a discount on your first purchase.</p>
                <button className="!rounded-button bg-custom hover:bg-custom/90 text-white px-6 py-2">Claim Offer</button>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Free Shipping on Orders Over $100</h3>
                <p className="text-gray-400 mb-4">Enjoy free shipping on your next order of $100 or more.</p>
                <button className="!rounded-button bg-custom hover:bg-custom/90 text-white px-6 py-2">Claim Offer</button>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Buy One, Get One 50% Off</h3>
                <p className="text-gray-400 mb-4">Buy any item and get another for 50% off.</p>
                <button className="!rounded-button bg-custom hover:bg-custom/90 text-white px-6 py-2">Claim Offer</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cretie;
