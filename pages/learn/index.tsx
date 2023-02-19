import Layout from "../../components/layout";
import Link from "next/link";

export default function Learn() {
  return (
    <Layout>
      <h1> Learn...</h1>
      <div>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <a>Sidenav link 2</a>
          </li>
          <li>
            <a>Sidenav link 2</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
