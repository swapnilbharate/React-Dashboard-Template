import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function ExportButtons({ data }) {

  const exportPDF = () => {
    const doc = new jsPDF();

    autoTable(doc, {
      head: [["Name", "Email"]],
      body: data.map(d => [d.name, d.email]),
    });

    doc.save("users.pdf");
  };

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");

    const buf = XLSX.write(wb, { type: "array" });
    saveAs(new Blob([buf]), "users.xlsx");
  };

  return (
    <div className="mb-3">
      <button className="btn btn-danger me-2" onClick={exportPDF}>
        Export PDF
      </button>

      <button className="btn btn-success" onClick={exportExcel}>
        Export Excel
      </button>
    </div>
  );
}
