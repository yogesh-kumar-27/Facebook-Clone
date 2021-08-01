import StoryCard from "./StoryCard"
import Data from '../../data'
const Stories = () => {
  // console.log(Data.stories)

  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {Data.stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
