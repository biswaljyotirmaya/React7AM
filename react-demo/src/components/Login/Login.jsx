export default function Login() {
  return (
    <div className="border border-1 p-2 rounded w-25">
      <h2 className="bi bi-person-fill">User login</h2>
      <dl>
        <dt>User Name</dt>
        <dd>
          <input type="text" className="w-full" />
        </dd>
        <dt>Password</dt>
        <dd>
          <input type="password" />
        </dd>
      </dl>
      <button className="btn btn-dark w-100">Login</button>
    </div>
  );
}
