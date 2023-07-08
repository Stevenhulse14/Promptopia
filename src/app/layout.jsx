import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description:
    "Promptopia is a place for writers to get inspiration for their next story.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
