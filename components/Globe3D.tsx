"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Export countries data
const exportCountriesData = [
  { name: "United States", lat: 39.8283, lng: -98.5795 },
  { name: "United Kingdom", lat: 55.3781, lng: -3.436 },
  { name: "Australia", lat: -25.2744, lng: 133.7751 },
  { name: "Canada", lat: 56.1304, lng: -106.3468 },
  { name: "Germany", lat: 51.1657, lng: 10.4515 },
  { name: "UAE", lat: 23.4241, lng: 53.8478 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
];

// const architecturalLandmarks = [
//   {
//     name: "Eiffel Tower",
//     lat: 48.8584,
//     lng: 2.2945,
//     description:
//       "Iconic iron lattice tower in Paris, France. A masterpiece of architectural engineering.",
//     style: "landmark",
//   },
//   {
//     name: "Statue of Liberty",
//     lat: 40.6892,
//     lng: -74.0445,
//     description:
//       "Symbol of freedom in New York Harbor, USA. Represents democratic ideals through architecture.",
//     style: "landmark",
//   },
//   {
//     name: "Sydney Opera House",
//     lat: -33.8568,
//     lng: 151.2153,
//     description:
//       "Sailing ship-inspired performing arts venue in Sydney, Australia.",
//     style: "landmark",
//   },
//   {
//     name: "Big Ben",
//     lat: 51.5007,
//     lng: -0.1246,
//     description:
//       "Famous clock tower at the Palace of Westminster in London, UK.",
//     style: "landmark",
//   },
//   {
//     name: "Burj Khalifa",
//     lat: 25.1972,
//     lng: 55.2744,
//     description:
//       "World's tallest building in Dubai, UAE. Modern architectural marvel.",
//     style: "landmark",
//   },
//   {
//     name: "Marina Bay Sands",
//     lat: 1.2834,
//     lng: 103.8607,
//     description:
//       "Integrated resort with distinctive sail-shaped design in Singapore.",
//     style: "landmark",
//   },
//   {
//     name: "Brandenburg Gate",
//     lat: 52.5163,
//     lng: 13.3777,
//     description:
//       "Historic monument in Berlin, Germany. Symbol of European unity.",
//     style: "landmark",
//   },
//   {
//     name: "CN Tower",
//     lat: 43.6426,
//     lng: -79.3871,
//     description: "Communications and observation tower in Toronto, Canada.",
//     style: "landmark",
//   },
// ];

const sampleData = {
  countries: [
    {
      name: "India",
      lat: 22.3193,
      lng: 70.7922,
      projects: "Manufacturing Hub & Headquarters",
      description:
        "Main manufacturing facility and corporate headquarters located in Rajkot, Gujarat.",
    },
    ...exportCountriesData.map((country) => ({
      ...country,
      projects: "Export Market",
      description: `Vegnar Architectural exports premium hardware to ${country.name}`,
    })),
  ],
  markers: [
    {
      lat: 22.3193,
      lng: 70.7922,
      name: "Vegnar Architectural HQ",
      logo: "/vegnar-architectural-logo.png",
      info: "B-623 RK Iconic, Shital Park, Rajkot, Gujarat 360001, India - Main headquarters and manufacturing facility.",
      isHQ: true,
      style: "hq",
    },
    ...exportCountriesData.map((country) => ({
      lat: country.lat,
      lng: country.lng,
      name: country.name,
      logo: "/vegnar-architectural-logo.png",
      info: `Export market - Vegnar Architectural supplies premium hardware to ${country.name}`,
      isHQ: false,
      style: "export",
    })),
  ],
  arcs: [
    // Arcs from HQ to export markets
    ...exportCountriesData.map((country) => ({
      startLat: 22.3193,
      startLng: 70.7922,
      endLat: country.lat,
      endLng: country.lng,
      color: "#4A90E2",
    })),
  ],
};

interface GlobeProps {
  rotationSpeed?: number;
}

const Globe3D: React.FC<GlobeProps> = ({ rotationSpeed = 0.5 }) => {
  const globeRef = useRef<any>();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [Globe, setGlobe] = useState<any>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    const loadGlobe = async () => {
      const GlobeComponent = (await import("react-globe.gl")).default;
      setGlobe(() => GlobeComponent);
    };
    loadGlobe();
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      // Set initial camera position
      globeRef.current.pointOfView({ altitude: 2.5 });

      // Configure controls with zoom limits
      globeRef.current.controls().enableZoom = true;
      globeRef.current.controls().minDistance = 101;
      globeRef.current.controls().maxDistance = 1000;
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = rotationSpeed;
      globeRef.current.controls().enablePan = true;
      globeRef.current.controls().enableDamping = true;
      globeRef.current.controls().dampingFactor = 0.1;
    }
  }, [Globe, rotationSpeed]);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (globeRef.current) {
        const container = globeRef.current.renderer().domElement.parentElement;
        if (container) {
          const width = Math.min(container.clientWidth, 1200);
          const height = Math.min(600, window.innerHeight * 0.7);
          globeRef.current.width(width).height(height);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [Globe]);

  if (!Globe) {
    return (
      <div className="w-full h-[500px] md:h-[800px] bg-gradient-to-r from-gray-900 to-black rounded-2xl flex items-center justify-center">
        <div className="text-white text-lg md:text-xl">
          Loading Interactive Globe...
        </div>
      </div>
    );
  }

  const getGlobeSize = () => {
    if (typeof window === "undefined") return { width: 1400, height: 800 };
    const isMobile = window.innerWidth < 768;
    const width = Math.min(window.innerWidth, 1400);
    const height = isMobile ? 500 : 800;
    return { width, height };
  };

  const { width, height } = getGlobeSize();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="relative w-full h-[500px] md:h-[800px] bg-gradient-to-r from-gray-900 to-black overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes flyAcross {
            0% { left: -10%; top: 20%; }
            100% { left: 110%; top: 10%; }
          }
          .airplane {
            animation: flyAcross 12s ease-in-out infinite;
            width: 500px;
            height: 500px;
          }
          .airplane img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: drop-shadow(0 2px 4px rgba(74, 144, 226, 0.3));
          }
        `,
        }}
      />
      {/* Title */}
      <div className="absolute top-4 left-4 z-10 text-white">
        <h2 className="text-lg md:text-xl font-bold mb-1">
          Vegnar Architectural
        </h2>
        <p className="text-sm md:text-base opacity-90">
          Global Presence & Architectural Inspiration
        </p>
        <div className="flex items-center mt-2 space-x-4 text-xs md:text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span>Export Markets</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span>Architectural Landmarks</span>
          </div>
        </div>
      </div>

      <Globe
        ref={globeRef}
        width={width}
        height={height}
        backgroundColor="rgba(0,0,0,0)"
        backgroundImageUrl="https://unpkg.com/three-globe/example/img/night-sky.png"
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere={true}
        atmosphereColor="#00BFFF"
        atmosphereAltitude={0.3}
        rendererConfig={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: isMobile ? "low-power" : "high-performance",
        }}
        // Countries data
        polygonsData={sampleData.countries}
        polygonCapColor={(d: any) => {
          const colors = {
            India: "rgba(255, 140, 0, 0.9)",
            "United States": "rgba(255, 69, 0, 0.7)",
            "United Kingdom": "rgba(138, 43, 226, 0.7)",
            Australia: "rgba(50, 205, 50, 0.7)",
            Canada: "rgba(220, 20, 60, 0.7)",
            Germany: "rgba(255, 215, 0, 0.7)",
            UAE: "rgba(0, 191, 255, 0.7)",
            Singapore: "rgba(255, 20, 147, 0.7)",
          };
          return (
            colors[d.name as keyof typeof colors] || "rgba(74, 144, 226, 0.4)"
          );
        }}
        polygonSideColor={(d: any) => {
          const colors = {
            India: "rgba(255, 140, 0, 0.4)",
            "United States": "rgba(255, 69, 0, 0.3)",
            "United Kingdom": "rgba(138, 43, 226, 0.3)",
            Australia: "rgba(50, 205, 50, 0.3)",
            Canada: "rgba(220, 20, 60, 0.3)",
            Germany: "rgba(255, 215, 0, 0.3)",
            UAE: "rgba(0, 191, 255, 0.3)",
            Singapore: "rgba(255, 20, 147, 0.3)",
          };
          return (
            colors[d.name as keyof typeof colors] || "rgba(74, 144, 226, 0.15)"
          );
        }}
        polygonStrokeColor={(d: any) => {
          const colors = {
            India: "#FF8C00",
            "United States": "#FF4500",
            "United Kingdom": "#8A2BE2",
            Australia: "#32CD32",
            Canada: "#DC143C",
            Germany: "#FFD700",
            UAE: "#00BFFF",
            Singapore: "#FF1493",
          };
          return colors[d.name as keyof typeof colors] || "#4A90E2";
        }}
        polygonAltitude={(d: any) => (d.name === "India" ? 0.025 : 0.015)}
        polygonLabel={(d: any) => {
          const isMobile =
            typeof window !== "undefined" && window.innerWidth < 768;
          return `
            <div style="background: rgba(0,0,0,0.9); color: white; padding: ${
              isMobile ? "8px" : "12px"
            }; border-radius: 8px; max-width: ${
            isMobile ? "200px" : "250px"
          }; backdrop-filter: blur(10px);">
              <h3 style="margin: 0 0 6px 0; color: #4A90E2; font-size: ${
                isMobile ? "14px" : "16px"
              }; font-weight: bold;">${d.name}</h3>
              <p style="margin: 0 0 4px 0; font-size: ${
                isMobile ? "12px" : "14px"
              }; font-weight: bold;">${d.projects}</p>
              <p style="margin: 0; font-size: ${
                isMobile ? "10px" : "12px"
              }; opacity: 0.9; line-height: 1.3;">${d.description}</p>
            </div>
          `;
        }}
        onPolygonClick={(polygon: any) => setSelectedItem(polygon)}
        // Arcs data
        arcsData={sampleData.arcs.map((arc, index) => ({
          ...arc,
          color: [
            "#FF6B6B",
            "#4ECDC4",
            "#45B7D1",
            "#96CEB4",
            "#FFEAA7",
            "#DDA0DD",
            "#98D8C8",
          ][index % 7],
        }))}
        arcColor={(d: any) => d.color}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2000}
        arcStroke={0.8}
        // Markers data
        htmlElementsData={sampleData.markers}
        htmlElement={(d: any) => {
          const el = document.createElement("div");
          const isMobile =
            typeof window !== "undefined" && window.innerWidth < 768;

          if (d.style === "hq") {
            const size = isMobile ? 48 : 60;
            el.innerHTML = `
              <div style="
                width: ${size}px;
                height: ${size}px;
                background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
                border: 4px solid #FFD700;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 6px 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 107, 107, 0.6);
                transition: transform 0.2s;
                animation: pulse 2s infinite;
              ">
                <img src="${d.logo}" alt="Vegnar Logo" style="width: ${
              size - 16
            }px; height: ${size - 16}px; object-fit: contain;" />
              </div>
              <style>
                @keyframes pulse {
                  0% { box-shadow: 0 6px 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 107, 107, 0.6); }
                  50% { box-shadow: 0 6px 25px rgba(255, 215, 0, 1), 0 0 40px rgba(255, 107, 107, 0.8); }
                  100% { box-shadow: 0 6px 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 107, 107, 0.6); }
                }
              </style>
            `;
          } else if (d.style === "export") {
            const size = isMobile ? 16 : 20;
            const colors = {
              "United States": "#FF4500",
              "United Kingdom": "#8A2BE2",
              Australia: "#32CD32",
              Canada: "#DC143C",
              Germany: "#FFD700",
              UAE: "#00BFFF",
              Singapore: "#FF1493",
            };
            const markerColor =
              colors[d.name as keyof typeof colors] || "#4A90E2";
            el.innerHTML = `
              <div style="display: flex; flex-direction: column; align-items: center; cursor: pointer;">
                <div style="
                  width: ${size}px;
                  height: ${size}px;
                  background: linear-gradient(45deg, ${markerColor}, ${markerColor}AA);
                  border: 2px solid white;
                  border-radius: 50%;
                  box-shadow: 0 2px 8px ${markerColor}66, 0 0 15px ${markerColor}44;
                  transition: transform 0.2s;
                  animation: glow 3s ease-in-out infinite alternate;
                ">
                </div>
                <div style="
                  color: ${markerColor};
                  font-size: ${isMobile ? "10px" : "12px"};
                  font-weight: bold;
                  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
                  margin-top: 4px;
                  text-align: center;
                  white-space: nowrap;
                  max-width: 80px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                ">${d.name}</div>
              </div>
              <style>
                @keyframes glow {
                  from { box-shadow: 0 2px 8px ${markerColor}66, 0 0 15px ${markerColor}44; }
                  to { box-shadow: 0 2px 12px ${markerColor}88, 0 0 25px ${markerColor}66; }
                }
              </style>
            `;
          } else if (d.style === "landmark") {
            const size = isMobile ? 20 : 24;
            el.innerHTML = `
              <div style="display: flex; flex-direction: column; align-items: center; cursor: pointer;">
                <div style="
                  width: ${size}px;
                  height: ${size}px;
                  background: #4A90E2;
                  border: 2px solid white;
                  border-radius: 4px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  box-shadow: 0 2px 8px rgba(74, 144, 226, 0.4);
                  transition: transform 0.2s;
                  font-size: ${size - 8}px;
                  color: white;
                  font-weight: bold;
                ">🏗️</div>
                <div style="
                  color: #4A90E2;
                  font-size: ${isMobile ? "8px" : "10px"};
                  font-weight: bold;
                  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
                  margin-top: 2px;
                  text-align: center;
                  white-space: nowrap;
                  max-width: 60px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                ">${d.name}</div>
              </div>
            `;
          }

          el.style.pointerEvents = "auto";
          el.style.cursor = "pointer";
          el.addEventListener("mouseenter", () => {
            el.style.transform = "scale(1.3)";
          });
          el.addEventListener("mouseleave", () => {
            el.style.transform = "scale(1)";
          });
          el.addEventListener("click", () => setSelectedItem(d));
          return el;
        }}
      />

      {/* Modal/Tooltip */}
      {selectedItem && (
        <div
          className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 pr-4">
                {selectedItem.name}
              </h3>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl flex-shrink-0"
              >
                ×
              </button>
            </div>

            {selectedItem.projects && (
              <div className="mb-4">
                <p className="text-base md:text-lg font-semibold text-blue-600 mb-2">
                  {selectedItem.projects}
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  {selectedItem.description}
                </p>
              </div>
            )}

            {selectedItem.info && (
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <img
                    src={selectedItem.logo}
                    alt="Logo"
                    className="w-auto h-8 md:h-10 object-contain mr-3"
                  />
                  <span className="font-semibold text-gray-800 text-sm md:text-base">
                    {selectedItem.name}
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  {selectedItem.info}
                </p>
              </div>
            )}

            {/* {selectedItem.style === "landmark" && (
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🏗️</span>
                  <span className="font-semibold text-blue-600 text-lg md:text-xl">
                    Architectural Landmark
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  {selectedItem.description}
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-2">
                  Vegnar Architectural hardware can be used in modern
                  architectural projects inspired by such landmarks.
                </p>
              </div>
            )} */}

            <button
              onClick={() => setSelectedItem(null)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Flying Airplane */}
      {/* <div className="airplane absolute top-1/2 left-0 z-5">
        <img src="/vegnar-plane.png" alt="Vegnar Plane" />
      </div> */}
    </div>
  );
};

export default Globe3D;
