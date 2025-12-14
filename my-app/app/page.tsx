import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";


export default function Home() {
  const content = `
    # This is a markdown 
  `
  return (
    <section className="py-24">
        <div className="container max-w-3x1">
          <Intro/>
        
          <RecentPosts />

          <RecentProjects />
        </div>
    </section>
  );
}
