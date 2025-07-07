import { useEffect, useState, useRef } from "react";
import { getAllMahasiswa } from "../services/mahasiswaService"; // ✅ Import

export const useMahasiswa = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchedRef = useRef(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllMahasiswa(); // ✅ Pakai service
      setUsers(data);
      console.log("Fetched mahasiswa:", data);
    } catch (err) {
      console.error("Error fetching mahasiswa:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if (!fetchedRef.current) {
      fetchData();
      fetchedRef.current = true;
    }
  }, []);

  const retry = () => {
    fetchedRef.current = false;
    fetchData();
  };

  return { users, loading, error, retry };
};
