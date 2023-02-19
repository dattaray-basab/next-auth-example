import Link from "next/link";

const Middle = () => {
  return (
    <>
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
    </>
  );
};

export default Middle;
