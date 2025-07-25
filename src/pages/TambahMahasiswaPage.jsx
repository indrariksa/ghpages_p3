// src/pages/TambahMahasiswaPage.jsx
import { TypographyAtom } from "../components/atoms/TypographyAtom";
import { MahasiswaForm } from "../components/organisms/MahasiswaForm";
import { postMahasiswa } from "../services/mahasiswaService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // ✅ Tambahkan ini

export function TambahMahasiswaPage() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await postMahasiswa(data);
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Data mahasiswa berhasil disimpan.",
        confirmButtonColor: "#22c55e", // Tailwind green-500
      }).then(() => {
        navigate("/mahasiswa");
      });
    } catch (error) {
      const errorMessage =
      error?.response?.data?.error || "Gagal menyimpan data mahasiswa.";
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: errorMessage,
        confirmButtonColor: "#ef4444", // Tailwind red-500
      });
    }
  };

  const handleCancel = () => {
    navigate("/mahasiswa");
  };

  return (
    <div className="py-6 px-4">
      <TypographyAtom variant="h5" className="mb-4">
        Tambah Data Mahasiswa
      </TypographyAtom>
      <MahasiswaForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}
