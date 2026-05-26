import { useEffect } from "react";

export default function ProtectedRoute({ user, loading, children }) {
  const app1Url = import.meta.env.VITE_APP1_URL || "http://localhost:5173";

  useEffect(() => {
    if (!loading && !user) {
      const message = encodeURIComponent("Please log in to access that page.");
      window.location.href = `${app1Url}/login?message=${message}`;
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
