import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import ProtectedRoute from "../ProtectedRoute";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3002";

  useEffect(() => {
    axios
      .post(`${apiUrl}/verifyUser`, { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
          console.log(res.data);
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      })
      .catch((err) => {
        console.error("Auth verification failed:", err);
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <ProtectedRoute user={user} loading={loading}>
      <TopBar />
      <Dashboard user={user} />
    </ProtectedRoute>
  );
}
