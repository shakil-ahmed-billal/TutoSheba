import featuredData from "@/utils/featuredCardData"
import { Card } from "../ui/card"

const Featured = () => {
    return (
        <div className="w-11/12 mx-auto py-10">
            <p className="text-3xl font-bold">We were <span className="text-[#800080]">Featured</span> on:</p>
            <div className="flex items-center justify-center gap-10 mt-10">
                {featuredData?.map((data) => (
                    <Card key={data.id} className="rounded-none">
                        <img
                            key={data.id}
                            src={data.image}
                            alt="featured"
                            className="h-20 mx-5 "
                        />
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Featured