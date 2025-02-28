import Banner from "@/components/banner/Banner";
import OurServices from "@/components/section/OurServices";
import SearchTutoring from "@/components/section/SearchTutoring";
import TuitionType from "@/components/section/TuitionType";

export default function Home() {
  return <div className="">
    <Banner/>
    <SearchTutoring/>
    <TuitionType/>
    <OurServices/>
  </div>;
}
