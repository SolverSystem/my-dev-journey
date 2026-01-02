const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-border/50">
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
