import { Card } from '../ui/card'

const WebStats = () => {
    return (
        <Card className=' gap-5 rounded-none my-10'>
            <div className="md:flex gap-5 md:space-y-0 space-y-10  justify-evenly text-center">
                <div className="">
                    <p className='text-3xl font-bold'>428242 +</p>
                    <p className='text-xl font-bold'>Average Tutor Rating</p>
                </div>
                <div className="">
                    <p className='text-3xl font-bold'>119523 +</p>
                    <p className='text-xl font-bold'>Live Tuition Jobs</p>
                </div>
                <div className="">
                    <p className='text-3xl font-bold'>4740 +</p>
                    <p className='text-xl font-bold'>Total Tutors</p>
                </div>
                <div className="">
                    <p className='text-3xl font-bold'>4.7</p>
                    <p className='text-xl font-bold'>Average Tutor Rating</p>
                </div>
            </div>
        </Card>
    )
}

export default WebStats