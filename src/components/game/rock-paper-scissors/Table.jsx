import { Table } from "reactstrap";

function TableLeaderboard({ leaderboards = [] }) {
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>W / D / L</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {leaderboards.map((data, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{data.email}</td>
            <td>
              {data.win} / {data.draw} / {data.lose}
            </td>
            <td>{data.score}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableLeaderboard;
