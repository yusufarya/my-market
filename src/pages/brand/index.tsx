import PageTitle from "@/src/components/elements/page-title";
import { useRouter } from "next/router";

const Brand = () => {
  const router = useRouter();
  const query = router.query;
  return (
    <>
      <PageTitle actionName="Data" />
    </>
  );
};

export default Brand;
