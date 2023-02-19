import Layout from "../../components/layout";
import Link from "next/link";

export default function Learn() {
  return (
    <Layout>
      <h1> Learn...</h1>
      <div>
        <ul>
          <li>
            <Link href='/learn/htm'>HTML...</Link>
          </li>
          <li>
            <Link href='/learn/js'>js...</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
