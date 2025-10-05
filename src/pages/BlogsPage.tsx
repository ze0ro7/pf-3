import { BlogsSection } from "@/components/blogs-section";
import { SectionTitle } from "@/components/common/SectionTitle";

const BlogsPage = () => {
  return (
    <main className="pt-28 pb-16">
      <div className="container mb-16">
        <SectionTitle title="My Blog" />
      </div>
      <BlogsSection />
    </main>
  );
};

export default BlogsPage;
