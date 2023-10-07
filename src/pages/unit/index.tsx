import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import { Button, Grid, Tooltip } from "@mui/material";
import { DeleteForever, Loupe } from "@mui/icons-material";
import Link from "next/link";
import PageTitle from "@/src/components/elements/page-title";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
const Unit = () => {
  const router = useRouter();
  const query = router.query;
  return (
    <>
      <Grid container>
        <Grid item xs={11}>
          <PageTitle actionName="Data" />
        </Grid>
        <Grid item xs={1}>
          <div style={{ display: "flex" }}>
            <Tooltip title="Hapus Data" placement="top">
              <Button
                variant="text"
                style={{
                  position: "relative",
                  top: -5,
                  marginLeft: 0,
                }}
              >
                <DeleteForever sx={{ fontSize: 25, color: "red" }} />
              </Button>
            </Tooltip>
            <Tooltip title="Tambah Data" placement="top">
              <Link
                href={{
                  pathname: "/unit/add-data",
                  query: query,
                }}
                style={{ position: "relative", marginLeft: -0 }}
              >
                <Loupe sx={{ fontSize: 25, color: "rgb(3, 97, 180)" }} />
              </Link>
            </Tooltip>
          </div>
        </Grid>
      </Grid>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default Unit;
