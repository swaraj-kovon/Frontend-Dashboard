import { useState, useEffect } from "react";
import { fetchEmployerPolicyStatus, EmployerPolicyStatusResponse } from "../services/insights.api";
import { SimplePieChart } from "./SimpleCharts";

export const EmployerPolicyStatusCard = ({ dateRange }: { dateRange?: { start: string, end: string } }) => {
  const [data, setData] = useState<EmployerPolicyStatusResponse | null>(null);

  useEffect(() => {
    fetchEmployerPolicyStatus(dateRange).then(setData).catch(console.error);
  }, [dateRange]);

  return (
    <div style={{
      background: "#ffffff",
      borderRadius: 12,
      padding: 24,
      boxShadow: "0 8px 24px rgba(0,0,0,0.05)"
    }}>
      <div style={{ fontSize: 14, color: "#666", fontWeight: "bold" }}>Employer Policy Status</div>
      <div style={{ fontSize: 36, fontWeight: 600, margin: "12px 0" }}>
        {data ? data.total : "..."}
      </div>
      {data && (
        <div style={{ marginTop: 20 }}>
          <SimplePieChart 
            data={[
              { label: "Accepted", value: data.accepted, color: "#1e8e3e" },
              { label: "Not Accepted", value: data.notAccepted, color: "#d93025" }
            ]}
          />
        </div>
      )}
    </div>
  );
};