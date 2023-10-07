import { Breadcrumbs, Divider, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BreadcrumbsElement() {
  const router = useRouter();
  const query = router.query;

  return (
    <>
      {query.parent && (
        <>
          <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 2 }}>
            <Typography color="text.secondary">{query.parent}</Typography>
            <Typography color="text.primary">{query.menu}</Typography>
          </Breadcrumbs>
          <Divider sx={{ mb: 2 }} />
        </>
      )}
    </>
  );
}
