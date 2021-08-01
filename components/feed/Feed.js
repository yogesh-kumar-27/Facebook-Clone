import InputBox from "../input/InputBox"
import Posts from "../posts/Posts"
import Stories from "../stories/Stories"

const Feed = () => {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl"> 
                {/* Stories */}
                <Stories />
                {/* InputBox */}
                <InputBox />
                {/* Posts */}
                <Posts />
            </div>
        </div>
    )
}

export default Feed
