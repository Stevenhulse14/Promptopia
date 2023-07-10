import "@styles/globals.css";
/** call navigation bar in here
 *  to reuse it throughout all our pages.
 */
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description:
    "Promptopia is a place for writers to get inspiration for their next story.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* Provider is being setup for user authentication */}
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
        1
      </body>
    </html>
  );
};

export default RootLayout;
