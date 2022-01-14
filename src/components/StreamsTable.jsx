import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StreamsTable = ({ streams, selectedStream }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Desctiption</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {streams.map((stream) => (
            <TableRow
              key={stream.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
              onClick={() => selectedStream(stream.id)}
            >
              <TableCell align="left">{stream.name}</TableCell>
              <TableCell align="left">{stream.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StreamsTable;
