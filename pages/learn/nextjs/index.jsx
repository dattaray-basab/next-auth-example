import Layout2 from "../_nav/layout";
import Layout from "../../_nav/layout";
const NextJSPage = () => {
  return (
    <Layout>
      <Layout2>
        <section>
          <div className='px-4 py-4 sm:px-6 lg:px-8'>
            <h1 className='mb-3 text-2xl font-semibold'>NextJS</h1>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>👈🏼</span>
              <span>NextJS...</span>
            </div>
          </div>
        </section>
      </Layout2>
    </Layout>
  );
};

export default NextJSPage;
