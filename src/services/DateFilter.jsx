import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateFilter({ start, end, setStart, setEnd }) {
  return (
    <div className="card p-3 mb-3">
      <h6>Select Date Range</h6>

      <div className="d-flex gap-3">
        <DatePicker
          selected={start}
          onChange={(date) => setStart(date)}
          className="form-control"
        />

        <DatePicker
          selected={end}
          onChange={(date) => setEnd(date)}
          className="form-control"
        />
      </div>
    </div>
  );
}
