import Banner from "@/components/banner/Banner";
import Featured from "@/components/section/Featured";
import OurServices from "@/components/section/OurServices";
import SearchTutoring from "@/components/section/SearchTutoring";
import StudentsGuardians from "@/components/section/StudentsGuardians";
import TuitionType from "@/components/section/TuitionType";
import WorksTutors from "@/components/section/WorksTutors";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <SearchTutoring />
      <TuitionType />
      <OurServices />
      <Featured />
      <WorksTutors />
      <StudentsGuardians />
    </div>
  );
}
