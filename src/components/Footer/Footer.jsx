const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 flex justify-center items-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Modelix. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;