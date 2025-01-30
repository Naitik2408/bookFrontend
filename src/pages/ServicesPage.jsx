import BookPublisher from "../components/books/BookPublisher";
import PublisherFeatures from "../components/features/PublisherFeatures";
import PublishingProcessServices from "../components/features/PublishingProcess";
import ProjectStats from "../components/features/ProjectStats";
// import PublishingSection from "../components/features/PublishingSection";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <BookPublisher />
     <PublisherFeatures />
      <PublishingProcessServices />
    <ProjectStats />
       {/*   <PublishingSection /> */}
    </div>
  );
};

export default ServicesPage;