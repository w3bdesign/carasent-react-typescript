export type THeader = {
  title: string;
};

/**
 * Header component for page title text
 * @function Header
 * @param {string} title - Text value for title
 *
 * @returns {JSX.Element} - Rendered component
 */

export const Header = ({ title }: THeader) => (
  <section className="bg-white rounded-lg px-6 py-6 shadow-lg mt-4 mb-4 ">
    <h1 className="text-2xl text-center font-bold">{title}</h1>
  </section>
);
