function Table({ list }) {
  return (
    <>
      <div className="container">
        <h2>Hover Rows</h2>
        <p>
          The .table-hover className enables a hover state (grey background on
          mouse over) on table rows:
        </p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Username</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Identification</th>
              <th>salary</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item.username}</td>
                <td>{item.fullname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.identificationNumber}</td>
                <td>{item.salary}</td>
                <td>{item.roles.length > 0 && item.roles[0]}</td>
                <td>{item.workingStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Table;
