import Banner from "@/components/banner/Banner";
import BecomeMessage from "@/components/section/BecomeMessage";
import Featured from "@/components/section/Featured";
import FindSubject from "@/components/section/FindSubject";
import OurServices from "@/components/section/OurServices";
import PeopleUs from "@/components/section/PeopleUs";
import SearchTutoring from "@/components/section/SearchTutoring";
import StudentsGuardians from "@/components/section/StudentsGuardians";
import TuitionType from "@/components/section/TuitionType";
import WebStats from "@/components/section/WebStats";
import WorksTutors from "@/components/section/WorksTutors";

export default function Home() {
  return (
    <div className="relative">
      <Banner/>
      <SearchTutoring />
      <FindSubject />
      <WebStats />
      <TuitionType />
      <BecomeMessage />
      <PeopleUs />
      <OurServices />
      <WorksTutors />
      <StudentsGuardians />
      <Featured />
    </div>
  );
}
