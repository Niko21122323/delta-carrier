import Image from "next/image";
import BannerComponent from "@/components/BannerComponent";
import OurDriveSection from "@/components/OurDriveSection";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import TitleComponent from "@/components/TitleComponent";
import deliverImg1 from "../../public/assets/pohots/gallery/41.jpg";
import deliverImg2 from "../../public/assets/pohots/gallery/24.jpg";
import gridImg1 from "../../public/assets/pohots/gallery/16.jpg";
import gridImg2 from "../../public/assets/pohots/gallery/18.jpg";
import gridImg3 from "../../public/assets/pohots/gallery/26.jpg";

export default function About() {
  return (
    <main>
      <BannerComponent
        title="About Delta Carrier Group"
        text="At Delta Carrier Group, we’re driven by purpose—not just miles. As a 100% owner-operator company, we lead with trust, transparency, and a commitment to doing things the right way."
      />
      <section className="py-6 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 2xl:gap-6">
            <div className="h-full w-full rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src={deliverImg1}
                alt="deliver image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="bg-light rounded-2xl p-4 lg:p-6 xl:p-8 order-1 md:order-2">
              <TitleComponent
                title="Drive Your Own Way"
                subtitle="Built for the Long Haul"
              />
              <p className="text-body pt-6">
                At Delta Carrier Group, trucking isn’t just about hauling
                freight — it’s about freedom. Our motto, “Drive your own Way,”
                reflects the foundation of everything we do: giving
                owner-operators the independence, respect, and opportunity they
                deserve.
              </p>
              <p className="text-body pt-1">
                We know that every driver has a different vision of success.
                Some want to chase the highest earning potential, others want
                the flexibility to balance life on the road with life at home,
                and many simply love the freedom of the highway. Whatever your
                goals are, you’re in control.
              </p>
              <p className="text-body pt-1">
                With Delta Carrier Group, you’re not working for us — we’re
                working for you. You choose the lanes you want to run. You
                decide how and when you work. You determine how much money you
                want to make. Our job is simple: to provide the freight,
                support, and partnership that lets you call the shots.
              </p>
              <p className="text-body pt-1">
                Because we believe drivers aren’t just the backbone of this
                industry — they’re business owners, decision-makers, and leaders
                of their own journeys. That’s why at Delta Carrier Group, you’re
                not a number. You’re our partner.
              </p>
              <p className="text-body pt-1">
                This isn’t just trucking. This is your business, your freedom,
                and your future. And with us by your side, you’ll always have
                the power to Drive your own Way.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 lg:pt-8">
                <div className="w-full sm:w-fit">
                  <PrimaryButton text="Contact Us" link="/contact" />
                </div>
                <div className="w-full sm:w-fit">
                  <SecondaryButton
                    text="Apply now"
                    link="https://intelliapp.driverapponline.com/c/deltacarriergroup?uri_b=ia_deltacarriergroup_584214130"
                    color="light"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurDriveSection />
      <section className="py-6 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 gap-y-6 gap-x-3 lg:gap-4 2xl:gap-6">
            <div className="h-full w-full rounded-lg lg:rounded-2xl overflow-hidden max-sm:aspect-square sm:max-h-[300px]">
              <Image
                src={gridImg1}
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-full w-full rounded-lg lg:rounded-2xl overflow-hidden max-sm:aspect-square sm:max-h-[300px]">
              <Image
                src={gridImg2}
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-10 2xl:py-16 col-span-2 lg:col-span-1">
              <TitleComponent
                title="Freight Done Right"
                subtitle="What Sets Us Apart"
              />
              <p className="text-body pt-4 lg:pt-6 2xl:pt-8">
                With over a decade of experience and a versatile fleet, we haul
                a wide range of cargo including dry van, flatbed, step deck, and
                Conestoga shipments. Every load is backed by real-time tracking,
                professional dispatch, and a 24/7 maintenance team that keeps
                our equipment road-ready and reliable.
              </p>
              <p className="text-body pt-2 lg:pt-4">
                At Delta Carrier Group, we operate on a 100% owner-operator
                model that puts drivers first. There’s no forced
                dispatch—ever—and we offer transparent pay, with 88% of gross
                revenue going directly to the driver. Our team provides 24/5
                dispatch support, including Saturdays, to keep operations
                running smoothly. We serve all 48 contiguous states with full
                ELD compliance and alignment with FMCSA regulations. Whether
                you're a shipper seeking reliable freight solutions or a driver
                looking for true independence, Delta is the partner you can
                count on—mile after mile.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 lg:pt-8">
                <div className="w-full sm:w-fit">
                  <PrimaryButton text="Contact Us" link="/contact" />
                </div>
                <div className="w-full sm:w-fit">
                  <SecondaryButton text="Apply now" link="/contact" />
                </div>
              </div>
            </div>
            <div className="h-full w-full rounded-xl lg:rounded-2xl overflow-hidden col-span-2 lg:col-span-1">
              <Image
                src={gridImg3}
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
