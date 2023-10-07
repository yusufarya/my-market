import { useRouter } from "next/router";

const PageTitle = (props: { actionName: string }) => {
  const router = useRouter();
  const query = router.query;
  return (
    <>
      <h2 style={{ marginBottom: 15 }}>
        {props.actionName + " " + query.menu}
      </h2>
    </>
  );
};

export default PageTitle;
