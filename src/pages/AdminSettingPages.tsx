import Header from "../components/header/Header";
import InviteUsersForm from "../components/form/InviteUsersForm";
import styles from "../styles/AdminSetting.module.css";
const AdminSettingPages = () => {
  return (
    <main>
      <Header />
      <section>
        <h2 className={styles.breadcrumbs}>
          Мои папки / <span className={styles.folderName}>Папка 1 /</span>{" "}
          <span style={{ color: "black" ,fontWeight:"bold"}}>Совместное администрирование</span>
        </h2>
      </section>
      <section>
        <InviteUsersForm />
      </section>
    </main>
  );
};

export default AdminSettingPages;
