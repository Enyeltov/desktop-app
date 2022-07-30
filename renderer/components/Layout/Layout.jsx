import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children, title, user }) {
  return (
    <>
      <Sidebar user ={user}/>
      <main className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] ">
        <Header title={title} />
        <div className="px-6 pt-6 2xl:container bg-whitesmoke">
          <div className="flex flex-col">{children}</div>
        </div>
        <div className="py-10 bg-whitesmoke">
        </div>
        <Footer />
      </main>
    </>
  );
}
