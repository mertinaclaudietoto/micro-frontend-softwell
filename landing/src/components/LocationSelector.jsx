import { useState } from "react";
import { HiOutlineBookmark } from "react-icons/hi";

export default function LocationSelector() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-6xl">
        {/* Neumorphic card */}
        <div className="neumorphic-card rounded-3xl p-6 mb-8">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-4 md:gap-6">
              {/* Icon buttons */}
              {[0, 1, 2, 3].map((_, i) => (
                <button
                  key={i}
                  className="icon-button rounded-xl flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <HiOutlineBookmark className="w-6 h-6 text-gray-700" />
                </button>
              ))}
            </div>

            {/* Location pill */}
            <button
              onClick={openModal}
              className="location-pill px-6 py-3 rounded-full flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <i className="fas fa-map-marker-alt text-green-600"></i>
              <span className="font-semibold text-gray-800">
                Guelph, Ontario
              </span>
              <i className="fas fa-chevron-up text-green-600 text-sm"></i>
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            onClick={(e) => e.target === e.currentTarget && closeModal()}
            className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
          >
            <div className="modal-card rounded-3xl p-8 max-w-2xl mx-auto bg-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Select Your Location
                </h2>
                <button
                  onClick={closeModal}
                  className="close-button w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <i className="fas fa-times text-gray-600"></i>
                </button>
              </div>

              {/* Search input */}
              <div className="relative mb-6">
                <input
                  type="text"
                  value="Guelph, Ontario"
                  className="search-input w-full px-6 py-4 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <i className="fas fa-search absolute right-6 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>

              {/* Map */}
              <div className="map-container mb-6 h-80 relative">
                <img
                  src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-l-marker+4caf50(-80.2482,43.5448)/-80.2482,43.5448,13,0/600x400@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                  alt="Map"
                  className="w-full h-full object-cover"
                />

                {/* Green marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-16 h-16 bg-green-500 rounded-t-full rounded-br-full rotate-45 shadow-lg flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-white text-2xl -rotate-45"></i>
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-green-400 rounded-t-full rounded-br-full rotate-45 animate-ping opacity-20"></div>
                  </div>
                </div>

                {/* Other markers */}
                <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-red-500 rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-purple-500 rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-orange-500 rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-400 rounded-full font-semibold text-lg shadow-lg cursor-not-allowed">
                Set Location
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
