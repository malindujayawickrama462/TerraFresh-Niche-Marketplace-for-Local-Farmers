export default function LandingPage(){
    return(
          <div className="bg-green-50 min-h-screen">

      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">TerraFresh</h1>

          <div className="space-x-6 hidden md:block">
            <a className="hover:text-green-600" href="#">Home</a>
            <a className="hover:text-green-600" href="#">Marketplace</a>
            <a className="hover:text-green-600" href="#">About</a>
            <a className="hover:text-green-600" href="#">Contact</a>
            <a className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" href="#">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold text-green-700 leading-tight">
            Fresh From <br /> Local Farmers
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            TerraFresh connects farmers directly with buyers.
            Get fresh produce, fair prices, and support Sri Lankan farmers.
          </p>

          <div className="mt-8 space-x-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Explore Marketplace
            </button>
            <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-100">
              Join as Farmer
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1560493676-04071c5f467b"
          alt="farm"
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-green-700 mb-12">
            Why Choose TerraFresh?
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {["Direct from Farmers", "Fresh & Organic", "Support Local"].map((title, i) => (
              <div key={i} className="bg-green-50 p-8 rounded-xl shadow text-center">
                <h4 className="text-xl font-bold text-green-700 mb-4">{title}</h4>
                <p>
                  {title === "Direct from Farmers" && "No middlemen. Buy directly from farmers."}
                  {title === "Fresh & Organic" && "Get high quality fresh produce."}
                  {title === "Support Local" && "Help Sri Lankan farmers grow."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-green-700 mb-12">
          How TerraFresh Works
        </h3>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h1 className="text-5xl font-bold text-green-600">1</h1>
            <h4 className="font-bold text-xl mt-4">Farmers Add Products</h4>
            <p>Farmers upload their harvest.</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-green-600">2</h1>
            <h4 className="font-bold text-xl mt-4">Buyers Order</h4>
            <p>Customers browse and place orders.</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-green-600">3</h1>
            <h4 className="font-bold text-xl mt-4">Fast Delivery</h4>
            <p>Fresh food delivered to your door.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-20 text-center text-white">
        <h3 className="text-4xl font-bold mb-6">Join TerraFresh Today</h3>
        <p className="mb-8">Start buying and selling fresh local food.</p>
        <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100">
          Create Free Account
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">TerraFresh</h4>
            <p>Empowering farmers. Delivering freshness.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>Marketplace</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p>support@terrafresh.lk</p>
            <p>+94 77 123 4567</p>
          </div>
        </div>
      </footer>

    </div>
    );
}