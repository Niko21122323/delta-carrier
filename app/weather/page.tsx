import BannerComponent from "@/components/BannerComponent";

export default function page() {
  return (
    <main>
      <BannerComponent
        title="Live Weather Forecast"
        text="Drivers, here you can check the road conditions by switching between wind, clouds, temperature, rain/snow, waves and pressure. Remember! No load is that important for risking your life!"
      />
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-[1134px] mx-auto">
            <iframe
              className="h-full w-full aspect-square sm:aspect-video"
              src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=rain&product=ecmwf&level=surface&lat=41.771&lon=25.4"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
