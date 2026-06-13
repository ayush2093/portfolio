import { memo } from "react";

const Footer = () => {
  return (
    <footer className="py-10 px-4">
      <div className="section-shell">
        <div className="glass-effect rounded-2xl px-6 py-5 text-center border-border/80">
          <p className="text-muted-foreground">
          © 2025 Ayush Singh. Built with passion and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);

