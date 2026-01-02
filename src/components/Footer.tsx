const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Portfolio. Built with passion for learning.
        </p>
        <p className="text-sm text-muted-foreground">
          Always building, always learning.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
