import Banner from "@/components/banner/Banner";
import Featured from "@/components/section/Featured";
import FindSubject from "@/components/section/FindSubject";
import OurServices from "@/components/section/OurServices";
import PeopleUs from "@/components/section/PeopleUs";
import SearchTutoring from "@/components/section/SearchTutoring";
import StudentsGuardians from "@/components/section/StudentsGuardians";
import TuitionType from "@/components/section/TuitionType";
import WorksTutors from "@/components/section/WorksTutors";

export default function Home() {
  return (
    <div className="relative">
      <Banner />
      <SearchTutoring />
      <FindSubject />
      <TuitionType />
      <OurServices />
      <Featured />
      <WorksTutors />
      <StudentsGuardians />
      <PeopleUs />
    </div>
  );
}
