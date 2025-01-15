'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Only initialize if no websites exist in localStorage
    const existingWebsites = localStorage.getItem('websites');
    if (!existingWebsites) {
      const initialWebsite = [{
        theme: "classic",
        heroSection: {
          image: "data:image/jpeg;base64,/9j/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAAAQAAAAAAAAD/2wCEAAYEBQUFBAYFBQUHBgYHCQ8KCQgICRMNDgsPFhMXFxYTFRUYGyMeGBohGhUVHikfISQlJygnGB0rLismLiMmJyYBBgcHCQgJEgoKEiYZFRkmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJv/CABEIAuUCWAMBIgACEQEDEQH/xAA2AAABBAMBAQAAAAAAAAAAAAAFAgMEBgABBwgJAQACAwEBAQAAAAAAAAAAAAABAgADBAUGB//aAAwDAQACEAMQAAAAi5vPd8BOl6DJ0rUVOlYQnF7ERpWQo2rINazcOsWmTWl6J1veAp0rUTW1bLI2/asGiuWt2veS6xyuD2ujm1pWen5ScVjROK1C2vegNZvUO9KGVkjvFWROt6gTtWoE5tUiMXqHSs3BrN5DreagzFYDre9w60vJE5tQmtbXAhW1Sa3tYKck4kg5veqpKVYCnFak1itAazeidZvIU4vUVOKyRG1ZIjN5JmbyTW1GabAtkMCfJdguDFQxH4+b9ZyE5vd9es3qHWawDWKyBObwzW9oVo9YRVPOdHrTlVtXax5pW9NaMVuRKs1BrFbkTvepMSrIU73uRO1ak1tWQ5mbE0rHgWslRxM2/MBzpAS68zVmG852rzZvN+s4qcWkTWlZIjF5InS9GJxxIicVhiN7wTWK1InFPqY0+wP+Z6mMhB2HTMg6z1fIzS07KNY6kFGKwxGKwBG1YInFZCnTqhIVDt/LOFvlsRZfnuhZbCHX1M1xzqMTu4ucqusKxK2/KWyim5UexUb3jBOK3InNqkTpeApVmyE5vYOl6yFWaUC9MamVM/ZKcSz29QwfnJ1cXUrPVclGLSCne8gTisMRtWSJxShG8XkiN73IhRg5xdwwmHEcDoTxyVej5jWnNdbI3i9GJUrAUqTuDWnCikO5apma6ltGlOoQ1dzePRzspcqxkvpkGs2TnaOK9KGdYy2BYD1bE71Z+LdW1Vrr1iru6ms12yV7qYYaH29WdvebJ1iskTi8kTm9wo2rYKFbwxO97E1vFSGjFakZLn5QxBlnys4jQMXvpZGkuYSjF4AjFZInFaI1isETq...(line too long; chars omitted)",
          overlayText: "Come get yer goon"
        },
        header: {
          title: "looking for a mad sesh?",
          subtitle: "goons got ya"
        },
        mainBody: "Look at these mad lads having a hektik time",
        gallery: [
          "data:image/webp;base64,UklGRmaPAwBXRUJQVlA4IFqPAwDwWAedASqAAlUDPhUIg0EhBVankgQAUSypg3zyuxo+MOQvTovTpeOZWvRlYeAv+xqR7HOyN+CETjnlEVk2y/1AP5RppOXg3K/8V+0Hmv/R/8x6hP1/pOgoz+2JO+/8r/R/tV+3f+z+SLmHu0+N/iP9F/vv8l/8P9l9vP8//2/df1F+7/8L/2fm9/pvdK9V/kP+d/l/9T/6v9X////z97f+L/8/97/rvg5/Y/9n/5f9r+9H0E/zr+z/7L/Df6P/mf4H///+b8df+394Pdr+8f5q/BH+zf6D/x/6D/W/+/5nP/N+6HvG/w//a/cP/xfIZ/Uv9F/5/z/+dH/8f//3Wf3y/+f/f+Bv9u//x/v/eW/+X7p/8j5df7z/2v/t/wf+B///oX/ov+M/7P7Xf/j/pfQB//Pbo/gH/u9QDfN/N/0z/Afkf/Z/QX8f+afv39v/yn+s/uv7f/X39Wf5X+V/03/p8U/pn8f/zP8z/qf/p/kP//8g/yX7l/lv7r/lP+f/gf3j+5H8J/yP8t/p//F/ivQ38+/dP+H/jP9R/6v838gv5D/O/8X/bv8z/zv75+8P1J/W/9f/T/8H9s/GO3P/Tf9T/Rf7L3CPa369/t/8D/oP/L/mf3v+ir7D/p/6P/Wf+T/If//5R/X/83/zf8v/pv/l/p///+AX8w/qP+w/vX7x/47//f9/7l/6P/i/23+p/+XpQfjf+F/6f9H+YH2Bf0b+5/8f/Hf6b/0f5r///+v8cv8P/w/6X/Zf/f/bf///4fID6i/73+e/1H/2/3H////X6C/zD+u/7//A/5//2/5z////b74P/f/rv9////o/+5P/u/1//I/930i/sL/4P2h/+SJclVvPK/Rfm6qpyNxaU1BXSeM58lWMvXHa3XbnYvu3vYOZicEI3Iw8E0e7pY++huK96efppG/hfi3dWzb0+O+2N9ju/yv6l17WnXmgI8nRXoE4RyUPAXnpa3ncN6qelpOgIOjdEJNZsio5vUgV0e/SV7fCeQSG+hOAz/yIeJACtlWNeAake93jHtfsCzPj+3SK//LCna7+2iXmcHwUZXmyVll00zxbH7Gd6XhhwqxLG/5gZwvUoYrA0p2dctsJOfrimiAcgy8Hfk0Fm4lv96NI6l+wQLyfcd...(line too long; chars omitted)",
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx4BBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/CABEIAcUCXAMBIgACEQEDEQH/xAA2AAAABwEBAQAAAAAAAAAAAAABAgMEBQYHAAgJAQACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//aAAwDAQACEAMQAAAApS3L7MJVhWkiL8sIqhlGAoKgAcTiAxjsKcTgUxzAQ5jDKKhhEE4gQxxaJyggmKggnygiT5UWJcrwkuV4afKCCXKgCfLA0iCwAkCxQSBYGIgsCECrlYgCwNIFcFBAq5QbkckE1I7TBqk7TGySepgwSfoAybyCKceg/RYwbSSClIrlcUSBXlWuVFQQKCowFOOIDicONxwBTjhwicCqcZgGEyZTGFoomERRPwFExgJxxAnHFonH4CcfgJynNJ8oAE4/AQFOBIFQaTBUoJcqAIgsDEAWKCJVigiVcoIFXKxBNwUGybpMGyLpMGaT1EGSL1EGSD1AbJB+gSerFWzy5YFWhU5Rgn44Apxw4xjgRXlAKcTgVTjgUxjgQxjjIJzAQVBBMTiIgnFogn4CcpwkxPzCcpwk+UEEuU4EwVBifH4SfKcxMqoAkCpQTBQrEyqgCIKlEkVUo0yLFaRKqUEk10wQTcJA3TcpjZou0QaIPEhs271uSeKlVzyMoCrQqAoPj8ZoxynTMcqjOOBxCbjj43HRxuOAGEIzSnJWx8b0ddq2ptKddJYOEulyAEe6HDARFhRHgDjcIAMLC8PAXjcIoG5hQOAFA4MLxgEQqhQIBgAoHBhCKlBIDgCZVCgkVUrSRVSAimumCCThIGyTlMbVF0kDRu9bk3CpVc8hU47BPxgFQDgJwUDjgoAKccAOJg4/GHxuj4Sm5eNt3nfWHWcydcqijoFElZRZJm+9D5Uph67GHG5hRNzRREQIJuEXjgMoHBovG4CcbgIChWigbgIVQBJgqUZCn5iZVAEkBygmChWJlOAIlUKJIiybaSThITdNwmNsg6QG2QdoEllCq5...(line too long; chars omitted)",
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMVFhUVFhUXFxUVFRUVFRUXFxcWFhUVFRcYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHR8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBBAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAD8QAAEDAQUEBwYFBAIBBQAAAAEAAhEDBBIhMUEFUWFxBhMigZGxwSMyQqHR8GJykjPCohUlQ2OxghUkQ4OC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAgICAwEBAAAAAAAAAAECEQMxEiETUSIyQQQU/9AAwEDEQH/xAA2AAABBAMBAQAAAAAAAAAAAAAFAgMEBgABBwgJAQACAwEBAQAAAAAAAAAAAAABAgADBAUGB//aAAwDAQACEAMQAAAAi5vPd8BOl6DJ0rUVOlYQnF7ERpWQo2rINazcOsWmTWl6J1veAp0rUTW1bLI2/asGiuWt2veS6xyuD2ujm1pWen5ScVjROK1C2vegNZvUO9KGVkjvFWROt6gTtWoE5tUiMXqHSs3BrN5DreagzFYDre9w60vJE5tQmtbXAhW1Sa3tYKck4kg5veqpKVYCnFak1itAazeidZvIU4vUVOKyRG1ZIjN5JmbyTW1GabAtkMCfJdguDFQxH4+b9ZyE5vd9es3qHWawDWKyBObwzW9oVo9YRVPOdHrTlVtXax5pW9NaMVuRKs1BrFbkTvepMSrIU73uRO1ak1tWQ5mbE0rHgWslRxM2/MBzpAS68zVmG852rzZvN+s4qcWkTWlZIjF5InS9GJxxIicVhiN7wTWK1InFPqY0+wP+Z6mMhB2HTMg6z1fIzS07KNY6kFGKwxGKwBG1YInFZCnTqhIVDt/LOFvlsRZfnuhZbCHX1M1xzqMTu4ucqusKxK2/KWyim5UexUb3jBOK3InNqkTpeApVmyE5vYOl6yFWaUC9MamVM/ZKcSz29QwfnJ1cXUrPVclGLSCne8gTisMRtWSJxShG8XkiN73IhRg5xdwwmHEcDoTxyVej5jWnNdbI3i9GJUrAUqTuDWnCikO5apma6ltGlOoQ1dzePRzspcqxkvpkGs2TnaOK9KGdYy2BYD1bE71Z+LdW1Vrr1iru6ms12yV7qYYaH29WdvebJ1iskTi8kTm9wo2rYKFbwxO97E1vFSGjFakZLn5QxBlnys4jQMXvpZGkuYSjF4AjFZInFaI1isETq...(line too long; chars omitted)"
        ],
        paragraph: {
          title: "$6 at bws ya gronk"
        }
      }];

      localStorage.setItem('websites', JSON.stringify(initialWebsite));
    }
  }, []);

  return (
    <main className="min-h-screen px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Website Builder & QR Code Generator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Website Builder Card */}
          <Link href="/WebsiteGenerator" className="block group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-semibold mb-3">1. Build Website</h2>
              <p className="text-white mb-4">
                Create beautiful websites with our easy-to-use website builder. Choose themes, add content, and customize your design.
              </p>
              <span className="text-blue-600 group-hover:underline">Start Building →</span>
            </div>
          </Link>

          {/* Website Viewer Card */}
          <Link href="/websites" className="block group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-semibold mb-3">2. View Websites</h2>
              <p className="text-white mb-4">
                Browse and manage all your created websites. Preview, edit, or share your websites easily.
              </p>
              <span className="text-blue-600 group-hover:underline">View Websites →</span>
            </div>
          </Link>

          {/* QR Code Generator Card */}
          <Link href="/QRCodeGenerator" className="block group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-semibold mb-3">3. Generate QR</h2>
              <p className="text-white mb-4">
                Create QR codes for your websites. Share your creations instantly with anyone.
              </p>
              <span className="text-blue-600 group-hover:underline">Create QR Code →</span>
            </div>
          </Link>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Why Use Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2 text-black">🎨 Easy Website Creation</h3>
              <p className="text-gray-600">No coding required. Build professional websites with our intuitive builder.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-black">📱 Mobile Responsive</h3>
              <p className="text-gray-600">All websites are fully responsive and look great on any device.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-black">🔄 Instant Updates</h3>
              <p className="text-gray-600">Make changes anytime and see them reflect immediately.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-black">📲 QR Code Integration</h3>
              <p className="text-gray-600">Share your websites easily with built-in QR code generation.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
