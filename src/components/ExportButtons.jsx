import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { FaFilePdf, FaFileExcel, FaFileCsv } from "react-icons/fa";

export default function ExportButtons({ data, filename = "bharat-business-report" }) {
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Bharat Business Hub Export", 14, 16);
    autoTable(doc, { startY: 24, head: [["Name", "Email", "Role", "Status"]], body: data.map((d) => [d.name, d.email, d.role, d.status]) });
    doc.save(`${filename}.pdf`);
  };

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    const buf = XLSX.write(wb, { type: "array" });
    saveAs(new Blob([buf]), `${filename}.xlsx`);
  };

  const exportCSV = () => {
    const csv = data.map((row) => Object.values(row).join(",")).join("\n");
    saveAs(new Blob([csv], { type: "text/csv;charset=utf-8;" }), `${filename}.csv`);
  };

  return (
    <div className="mb-3 d-flex gap-2 flex-wrap">
      <button className="btn btn-outline btn-sm" onClick={exportPDF}><FaFilePdf /> PDF</button>
      <button className="btn btn-outline btn-sm" onClick={exportExcel}><FaFileExcel /> Excel</button>
      <button className="btn btn-outline btn-sm" onClick={exportCSV}><FaFileCsv /> CSV</button>
    </div>
  );
}
