import classes from './header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>Movie Explorer</h1> {/* You can change this to your project's name */}
      </div>
      <nav className={classes.nav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/favorites">Favorites</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
