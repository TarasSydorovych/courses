import css from "../cabiner.module.css";

const Diplom = ({ dip }) => {
  console.log(dip);
  return (
    <section className={css.wrapDiplomAll}>
      <iframe
        title="PDF Viewer"
        src={dip.diplom}
        width="100%"
        height="auto"
        style={{ border: "none" }}
      ></iframe>
    </section>
  );
};
export default Diplom;
