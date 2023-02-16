export default function UserCard({ user }) {
  return (
    <div className="text-sm text-center text-gray-800">
      <p>Current logged in user</p>
      <h5>{user?.email}</h5>
    </div>
  );
}
