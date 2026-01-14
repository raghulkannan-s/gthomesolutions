import { Header } from "@/components/sections/Header.jsx";
import Hero from "@/components/sections/hero/Hero.jsx";
import { Services } from "@/components/sections/Services.jsx";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs.jsx";
import { Gallery } from "@/components/sections/Gallery.jsx";
import { Testimonials } from "@/components/sections/Testimonials.jsx";
import { About } from "@/components/sections/About.jsx";
import { Contact } from "@/components/sections/Contact.jsx";
import { Footer } from "@/components/sections/Footer.jsx";
import { JsonLd } from "@/components/JsonLd.jsx";

export default function Home() {
	return (
		<>
			<JsonLd />
			<Header />
			<main>
				<Hero />
				<Services />
				<WhyChooseUs />
				{/* <Gallery /> */}
				<Testimonials />
				<About />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
