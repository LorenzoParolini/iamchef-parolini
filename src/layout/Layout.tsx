import './Layout.css'

// wrapper per la struttura base della pagina
interface LayoutProps {
  header?: React.ReactNode;
  main: React.ReactNode;
  footer?: React.ReactNode;
}

function Layout({ header, main, footer }: LayoutProps) {
  return (
    <div className="app-container">
      {header && (
        <header className="app-header">
          {header}
        </header>
      )}
      
      <main className="app-main">
        {main}
      </main>
      
      {footer && (
        <footer className="app-footer">
          {footer}
        </footer>
      )}
    </div>
  );
}

export default Layout;
