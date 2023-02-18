import { useSession } from "next-auth/react"
import Layout from "../../components/layout"

export default function MePage() {
  const { data } = useSession()

  return (
    <Layout>
      <p>just laying out the session data of the user logged in, right? </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
}
