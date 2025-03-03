import { Button } from "../ui/button"
import { Card } from "../ui/card"

const BecomeMessage = () => {
    return (
        <div className="w-11/12 mx-auto py-10">
            <Card className={"flex items-center justify-center"}>
                <div className="flex md:flex-row flex-col gap-5 items-center">
                    <p>Want to become <br />
                    <span className="text-5xl font-extrabold">Tutor</span></p>
                    <p>Let’s Work Together <br />
                    & Explore Opportunities</p>
                    <Button className={"bg-[#05264E] rounded-none p-5"}>Register</Button>
                </div>
            </Card>
        </div>
    )
}

export default BecomeMessage