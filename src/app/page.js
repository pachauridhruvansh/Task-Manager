// "use client"
import FeatureSection from "@/components/homepage/FeatureSection";
import BannerSection from "@/components/homepage/HomeBanner";
import ActionSection from "@/components/homepage/ActionSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import ContactForm from "@/components/homepage/ContactForm";
import { connectDb } from "@/helper/db";

connectDb();
console.log("we have connected to database");
export const metadata = {
  title: " Home: Work Manager",
}

export default function Home() {
  // connectDb();
  //   useEffect(() => {
  //     console.log("we are connecting directly");
  //   connectDb();
  // }, []);
  return (
    <> <BannerSection />
    <FeatureSection />
    <ActionSection />
    <TestimonialSection />
    <ContactForm /> </>
  );
}

// import { useEffect } from 'react';
// import { connectDb } from '@/helper/db';

// export const metadata = {
//   title: 'Home: Work Manager',
// };

// export default function Home() {
//   useEffect(() => {
//     connectDb();
//   }, []);

//   return (
//     <>
//       <div>This is work manager home</div>
//     </>
//   );
// }

