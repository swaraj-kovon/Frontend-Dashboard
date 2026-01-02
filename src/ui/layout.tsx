export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{
      padding: "32px",
      fontFamily: "system-ui",
      background: "#f8f9fb",
      minHeight: "100vh"
    }}>
      <h1 style={{ fontSize: 28, marginBottom: 24 }}>
        CRM Executive Dashboard
      </h1>
      {children}
    </div>
  );
};
