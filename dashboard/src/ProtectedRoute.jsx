import { useEffect } from "react";

export default function ProtectedRoute({ user, loading, children }) {
  useEffect(() => {
    if (!loading && !user) {
      const message = encodeURIComponent("Please log in to access that page.");
      window.location.href = `http://localhost:5173/login?message=${message}`;
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h3>Verifying Session...</h3>
      </div>
    );
  }

  return user ? children : null;
}
